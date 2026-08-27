-- Команды, роли и приватный календарь для Task Manager.
-- Выполняется один раз в SQL Editor проекта Supabase.

alter table public.profiles
  add column if not exists team_id text,
  add column if not exists person_id text;

create or replace function public.is_workspace_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce((
    select role = 'admin'
    from public.profiles
    where id = auth.uid()
  ), false);
$$;

create or replace function public.current_workspace_team_id()
returns text
language sql
stable
security definer
set search_path = public
as $$
  select team_id
  from public.profiles
  where id = auth.uid();
$$;

create or replace function public.current_workspace_person_id()
returns text
language sql
stable
security definer
set search_path = public
as $$
  select person_id
  from public.profiles
  where id = auth.uid();
$$;

create table if not exists public.calendar_events (
  id bigint primary key,
  title text not null,
  starts_at timestamp without time zone not null,
  ends_at timestamp without time zone not null,
  notes text not null default '',
  team_id text,
  participant_ids jsonb not null default '[]'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.calendar_events enable row level security;
grant select, insert, update, delete on public.calendar_events to authenticated;

create or replace function public.set_calendar_event_updated_at()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists calendar_events_set_updated_at on public.calendar_events;
create trigger calendar_events_set_updated_at
before update on public.calendar_events
for each row execute function public.set_calendar_event_updated_at();

drop policy if exists "Team can view calendar events" on public.calendar_events;
create policy "Team can view calendar events"
on public.calendar_events
for select
to authenticated
using (
  public.is_workspace_admin()
  or (team_id is not null and team_id = public.current_workspace_team_id())
);

drop policy if exists "Team can create calendar events" on public.calendar_events;
create policy "Team can create calendar events"
on public.calendar_events
for insert
to authenticated
with check (
  public.is_workspace_admin()
  or (team_id is not null and team_id = public.current_workspace_team_id())
);

drop policy if exists "Team can edit calendar events" on public.calendar_events;
create policy "Team can edit calendar events"
on public.calendar_events
for update
to authenticated
using (
  public.is_workspace_admin()
  or (team_id is not null and team_id = public.current_workspace_team_id())
)
with check (
  public.is_workspace_admin()
  or (team_id is not null and team_id = public.current_workspace_team_id())
);

drop policy if exists "Team can delete calendar events" on public.calendar_events;
create policy "Team can delete calendar events"
on public.calendar_events
for delete
to authenticated
using (
  public.is_workspace_admin()
  or (team_id is not null and team_id = public.current_workspace_team_id())
);

drop policy if exists "Admins can manage profiles" on public.profiles;
create policy "Admins can manage profiles"
on public.profiles
for update
to authenticated
using (public.is_workspace_admin())
with check (public.is_workspace_admin());
grant select, update on public.profiles to authenticated;

-- Администратор может полностью удалить чужую учётную запись.
create or replace function public.delete_workspace_account(target_user uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.uid() is null or target_user is null or target_user = auth.uid() then
    raise exception 'Account cannot be deleted';
  end if;
  if not public.is_workspace_admin() then
    raise exception 'Administrator access required';
  end if;
  delete from auth.users where id = target_user;
  if not found then
    raise exception 'Account not found';
  end if;
end;
$$;
revoke all on function public.delete_workspace_account(uuid) from public;
grant execute on function public.delete_workspace_account(uuid) to authenticated;

drop policy if exists "Authenticated users update workspace" on public.workspace_state;
create policy "Authenticated users update workspace"
on public.workspace_state
for update
to authenticated
using (true)
with check (true);
grant select, update on public.workspace_state to authenticated;

-- Перенос уже созданных встреч в защищённый календарь.
insert into public.calendar_events (
  id, title, starts_at, ends_at, notes, team_id, participant_ids
)
select
  (event ->> 'id')::bigint,
  coalesce(event ->> 'title', ''),
  nullif(event ->> 'date', '')::timestamp,
  coalesce(nullif(event ->> 'end', '')::timestamp, nullif(event ->> 'date', '')::timestamp + interval '1 hour'),
  coalesce(event ->> 'notes', ''),
  null,
  coalesce((
    select jsonb_agg(participant_id)
    from jsonb_array_elements_text(coalesce(event -> 'participantIds', '[]'::jsonb)) as participant(participant_id)
  ), '[]'::jsonb)
from public.workspace_state as workspace
cross join lateral jsonb_array_elements(coalesce(workspace.state -> 'events', '[]'::jsonb)) as event
where workspace.id = 'main'
  and coalesce(event ->> 'id', '') ~ '^[0-9]+$'
  and nullif(event ->> 'date', '') is not null
on conflict (id) do nothing;

-- После переноса удаляем открытую копию встреч и заметок встреч из общего JSON.
update public.workspace_state
set state = jsonb_set(
  jsonb_set(
    jsonb_set(state, '{events}', '[]'::jsonb, true),
    '{deletedEventIds}', '[]'::jsonb,
    true
  ),
  '{notes}',
  coalesce((
    select jsonb_agg(note)
    from jsonb_array_elements(coalesce(state -> 'notes', '[]'::jsonb)) as note
    where nullif(note ->> 'eventId', '') is null
  ), '[]'::jsonb),
  true
)
where id = 'main';
