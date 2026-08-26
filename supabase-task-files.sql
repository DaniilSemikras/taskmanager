insert into storage.buckets (id, name, public, file_size_limit)
values ('task-files', 'task-files', false, 10485760)
on conflict (id) do update set public = excluded.public, file_size_limit = excluded.file_size_limit;

drop policy if exists "task_files_read" on storage.objects;
create policy "task_files_read"
on storage.objects for select
to authenticated
using (bucket_id = 'task-files');

drop policy if exists "task_files_upload" on storage.objects;
create policy "task_files_upload"
on storage.objects for insert
to authenticated
with check (bucket_id = 'task-files');

drop policy if exists "task_files_delete" on storage.objects;
create policy "task_files_delete"
on storage.objects for delete
to authenticated
using (bucket_id = 'task-files');
