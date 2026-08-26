-- Restrict calendar visibility to the signed-in user's team.
-- Administrators keep workspace-wide visibility for management.

drop policy if exists "Team can view calendar events" on public.calendar_events;

create policy "Team can view calendar events"
on public.calendar_events
for select
to authenticated
using (
  public.is_workspace_admin()
  or (team_id is not null and team_id = public.current_workspace_team_id())
);
