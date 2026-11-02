-- Storage `remove()` first selects the objects with the caller's permissions. The image
-- buckets had INSERT/UPDATE/DELETE policies for admins but no SELECT policy, so every delete
-- matched zero rows and returned success: replaced/deleted images were never removed
-- (found 2026-11-02: 11 orphaned research icons, 1 team photo in production).
-- These SELECT policies mirror the existing DELETE policies exactly.

create policy admin_select_project_images on storage.objects
  for select to authenticated
  using (bucket_id = 'project-images' and (storage.foldername(name))[1] = 'projects' and public.admin_is_admin());

create policy admin_select_research_images on storage.objects
  for select to authenticated
  using (
    bucket_id = 'research-area-images'
    and (storage.foldername(name))[1] = 'research-areas'
    and public.admin_can_manage_research_images()
  );

create policy admin_select_team_member_images on storage.objects
  for select to authenticated
  using (bucket_id = 'team-member-images' and (storage.foldername(name))[1] = 'team-members' and public.admin_is_admin());
