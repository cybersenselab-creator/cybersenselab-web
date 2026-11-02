-- Portfolios move from hard-coded frontend data into the database so they can be managed
-- from the admin panel. Gallery images reuse public.content_images (entity_type 'portfolios')
-- and the content-images bucket. The generic admin RPCs gain a 'portfolios' branch; every
-- other branch is unchanged.

create table public.portfolios (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  title text not null check (length(trim(title)) > 0),
  category text not null default 'web' check (category in ('web', 'mobile', 'fullstack')),
  description text not null default '',
  -- [{ "name": "...", "role": "...", "avatar_image": "https://..." }]
  authors jsonb not null default '[]'::jsonb check (jsonb_typeof(authors) = 'array'),
  features text[] not null default '{}',
  tech text[] not null default '{}',
  live_url text,
  github_url text,
  gallery_style text not null default 'standard' check (gallery_style in ('standard', 'wide')),
  sort_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.portfolios enable row level security;

create policy public_read_portfolios on public.portfolios
  for select to anon, authenticated
  using (is_published = true);

grant select on public.portfolios to anon, authenticated;

alter table public.content_images drop constraint content_images_entity_type_check;
alter table public.content_images add constraint content_images_entity_type_check
  check (entity_type = any (array['announcements', 'projects', 'etkinlikler', 'portfolios']));

create or replace function public.admin_assert_image_entity(p_entity_type text)
 returns void
 language plpgsql
 immutable security definer
 set search_path to 'pg_catalog', 'public'
as $function$
BEGIN
  IF p_entity_type NOT IN ('announcements', 'projects', 'etkinlikler', 'portfolios') THEN
    RAISE EXCEPTION 'Invalid image entity: %', p_entity_type USING ERRCODE = '22023';
  END IF;
END;
$function$;

create or replace function public.admin_get_table_meta(p_table text)
 returns table(table_name text, pk_col text, pk_type text, order_by text, insert_cols text[], update_cols text[], record_def text)
 language plpgsql
 stable security definer
 set search_path to 'pg_catalog', 'public'
as $function$
BEGIN
  CASE p_table
    WHEN 'announcements' THEN
      table_name := 'announcements'; pk_col := 'id'; pk_type := 'uuid'; order_by := 'COALESCE(publish_date, created_at) DESC, created_at DESC';
      insert_cols := ARRAY['title','content','publish_date','is_published']; update_cols := insert_cols;
      record_def := 'title text, content text, publish_date timestamptz, is_published boolean';
    WHEN 'projects' THEN
      table_name := 'projects'; pk_col := 'id'; pk_type := 'uuid'; order_by := 'created_at DESC';
      insert_cols := ARRAY['title','description','image_url','github_url','demo_url','status','funder','date_range','progress_pct','is_published']; update_cols := insert_cols;
      record_def := 'title text, description text, image_url text, github_url text, demo_url text, status text, funder text, date_range text, progress_pct int, is_published boolean';
    WHEN 'etkinlikler' THEN
      table_name := 'etkinlikler'; pk_col := 'id'; pk_type := 'uuid'; order_by := 'event_date DESC';
      insert_cols := ARRAY['title','description','event_date','location','is_published']; update_cols := insert_cols;
      record_def := 'title text, description text, event_date timestamptz, location text, is_published boolean';
    WHEN 'arastirma_alanlari' THEN
      table_name := 'arastirma_alanlari'; pk_col := 'id'; pk_type := 'uuid'; order_by := 'sort_order ASC, created_at DESC';
      insert_cols := ARRAY['icon','title','description','sort_order','is_published']; update_cols := insert_cols;
      record_def := 'icon text, title text, description text, sort_order int, is_published boolean';
    WHEN 'ekip' THEN
      table_name := 'ekip'; pk_col := 'id'; pk_type := 'uuid'; order_by := 'priority DESC, sort_order ASC, created_at DESC';
      insert_cols := ARRAY['name','role','expertise','avatar_icon','email','linkedin_url','github_url','scholar_url','website_url','sort_order','priority','is_published']; update_cols := insert_cols;
      record_def := 'name text, role text, expertise text, avatar_icon text, email text, linkedin_url text, github_url text, scholar_url text, website_url text, sort_order int, priority int, is_published boolean';
    WHEN 'yayinlar' THEN
      table_name := 'yayinlar'; pk_col := 'id'; pk_type := 'uuid'; order_by := 'pub_year DESC, created_at DESC';
      insert_cols := ARRAY['title','authors','venue','pub_type','pub_year','pdf_url','doi_url','is_published']; update_cols := insert_cols;
      record_def := 'title text, authors text, venue text, pub_type text, pub_year int, pdf_url text, doi_url text, is_published boolean';
    WHEN 'oduller' THEN
      table_name := 'oduller'; pk_col := 'id'; pk_type := 'uuid'; order_by := 'sort_order ASC, year DESC';
      insert_cols := ARRAY['year','title','description','color_scheme','sort_order','is_published']; update_cols := insert_cols;
      record_def := 'year int, title text, description text, color_scheme text, sort_order int, is_published boolean';
    WHEN 'ortaklar' THEN
      table_name := 'ortaklar'; pk_col := 'id'; pk_type := 'uuid'; order_by := 'sort_order ASC, created_at DESC';
      insert_cols := ARRAY['name','icon','url','sort_order','is_published']; update_cols := insert_cols;
      record_def := 'name text, icon text, url text, sort_order int, is_published boolean';
    WHEN 'site_ayarlari' THEN
      table_name := 'site_ayarlari'; pk_col := 'key'; pk_type := 'text'; order_by := 'key ASC';
      insert_cols := ARRAY['key','value']; update_cols := ARRAY['value']; record_def := 'key text, value text';
    WHEN 'portfolios' THEN
      table_name := 'portfolios'; pk_col := 'id'; pk_type := 'uuid'; order_by := 'sort_order ASC, created_at ASC';
      insert_cols := ARRAY['slug','title','category','description','authors','features','tech','live_url','github_url','gallery_style','sort_order','is_published']; update_cols := insert_cols;
      record_def := 'slug text, title text, category text, description text, authors jsonb, features text[], tech text[], live_url text, github_url text, gallery_style text, sort_order int, is_published boolean';
    ELSE RAISE EXCEPTION 'Invalid admin table: %', p_table USING ERRCODE = '22023';
  END CASE;
  RETURN NEXT;
END;
$function$;

create or replace function public.admin_delete_record(p_table text, p_id text)
 returns jsonb
 language plpgsql
 security definer
 set search_path to 'pg_catalog', 'public', 'auth'
as $function$
DECLARE
  meta record;
  v_result jsonb;
BEGIN
  PERFORM public.admin_require_admin();
  SELECT * INTO meta FROM public.admin_get_table_meta(p_table);

  IF p_table IN ('announcements', 'projects', 'etkinlikler', 'portfolios') THEN
    DELETE FROM public.content_images
    WHERE entity_type = p_table
      AND entity_id = p_id::uuid;
  END IF;

  EXECUTE format(
    'WITH deleted AS (
       DELETE FROM public.%1$I
       WHERE %2$I = $1::%3$s
       RETURNING *
     )
     SELECT to_jsonb(deleted) FROM deleted',
    meta.table_name,
    meta.pk_col,
    meta.pk_type
  )
  INTO v_result
  USING p_id;

  IF v_result IS NULL THEN
    RAISE EXCEPTION 'Record not found' USING ERRCODE = '02000';
  END IF;

  RETURN v_result;
END;
$function$;
