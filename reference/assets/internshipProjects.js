import { t as e } from "./vendor-dist.js";
import { t } from "./useQuery.js";
var n = `https://nznvqfjwwvwrxiiwufgg.supabase.co`,
  r = `sb_publishable_78tShUiE-6TAeQToYmyvpg_33L-3dgP`,
  i = `20260909-8x3`,
  a = 800,
  o = 300,
  s = `/storage/v1/object/public/project-media/`,
  c = `/storage/v1/render/image/public/project-media/`,
  l = null;
function u() {
  return (
    (l ||= e(n, r, {
      auth: {
        persistSession: !1,
        autoRefreshToken: !1,
        detectSessionInUrl: !1,
      },
    })),
    l
  );
}
function d(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
function f(e) {
  return typeof e == `string` && e.trim() ? e.trim() : void 0;
}
function p(e) {
  return e && typeof e == `object` && !Array.isArray(e) ? e : {};
}
function m(e) {
  let t = f(e);
  return t
    ? /^https?:\/\//i.test(t)
      ? t
      : `${n}/storage/v1/object/public/project-media/${t.replace(/^\/+/, ``).replace(/^project-media\/+/, ``)}`
    : void 0;
}
function h(e, t) {
  return m(e.cover_image_url) || t.find((e) => e.type === `hero`)?.url;
}
function g(e, t, n) {
  let r = h(e, t),
    l = f(e.slug),
    u =
      r ||
      (n && l
        ? `${n.replace(/\/$/, ``)}/${encodeURIComponent(l)}/cover.png`
        : void 0);
  if (!u || !u.includes(s)) return u;
  let d = new URL(u.replace(s, c));
  return (
    d.searchParams.set(`width`, String(a)),
    d.searchParams.set(`height`, String(o)),
    d.searchParams.set(`resize`, `contain`),
    d.searchParams.set(`quality`, `75`),
    d.searchParams.set(`v`, i),
    d.toString()
  );
}
function _(e) {
  return d(p(e).project_students)
    .sort((e, t) => Number(e.display_order || 0) - Number(t.display_order || 0))
    .flatMap((e) => d(e.students))
    .map((e) => ({
      id: String(e.id || ``),
      name: String(e.name || ``),
      department: f(e.department),
      avatarUrl: m(e.avatar_url),
      githubUrl: f(e.github_url),
    }))
    .filter((e) => e.id && e.name);
}
function v(e) {
  return d(p(e).project_media)
    .map((e) => ({
      id: String(e.id || ``),
      type: String(e.type || `gallery`),
      url: m(e.url) || ``,
      alt: f(e.alt_text) || ``,
      caption: f(e.caption),
      order: Number(e.display_order || 0),
    }))
    .filter((e) => e.id && e.url)
    .sort((e, t) => e.order - t.order);
}
function y(e) {
  return d(p(e).project_technologies)
    .sort((e, t) => Number(e.display_order || 0) - Number(t.display_order || 0))
    .flatMap((e) => d(e.technologies))
    .map((e) => ({
      id: String(e.id || ``),
      name: String(e.name || ``),
      category: f(e.category),
    }))
    .filter((e) => e.id && e.name);
}
function b(e) {
  return d(p(e).project_sections)
    .filter((e) => e.is_visible !== !1)
    .map((e) => ({
      id: String(e.id || ``),
      key: String(e.section_key || ``),
      title: String(e.title || ``),
      type: String(e.section_type || `text`),
      content: p(e.content),
      order: Number(e.display_order || 0),
    }))
    .filter((e) => e.id && e.title)
    .sort((e, t) => e.order - t.order);
}
function x(e, t = `${n}/storage/v1/object/public/project-media`) {
  let r = v(e);
  return {
    id: String(e.id || ``),
    slug: String(e.slug || ``),
    title: String(e.title || ``),
    subtitle: f(e.subtitle),
    summary: f(e.summary),
    category: f(e.category),
    year: Number(e.year),
    department: f(e.department),
    coverImageUrl: g(e, r, t),
    githubUrl: f(e.github_url),
    repositoryUrl: f(e.repository_url),
    students: _(e),
  };
}
function S(e) {
  let t = v(e);
  return {
    ...x(e),
    coverImageUrl: h(e, t),
    technologies: y(e),
    sections: b(e),
    media: t,
  };
}
var C = [
    `id`,
    `slug`,
    `title`,
    `subtitle`,
    `summary`,
    `category`,
    `year`,
    `department`,
    `cover_image_url`,
    `github_url`,
    `repository_url`,
    `published_at`,
    `project_students(display_order,students(id,name,department,avatar_url,github_url))`,
    `project_media(id,type,url,alt_text,caption,display_order)`,
  ].join(`,`),
  w = [
    C,
    `project_technologies(display_order,technologies(id,name,category))`,
    `project_sections(id,section_key,title,section_type,content,display_order,is_visible)`,
  ].join(`,`);
async function T() {
  let { data: e, error: t } = await u()
    .from(`projects`)
    .select(C)
    .eq(`status`, `published`)
    .order(`year`, { ascending: !1 })
    .order(`published_at`, { ascending: !1 });
  if (t) throw t;
  return (e || []).map((e) => x(e));
}
async function E(e) {
  let { data: t, error: n } = await u()
    .from(`projects`)
    .select(w)
    .eq(`slug`, e)
    .eq(`status`, `published`)
    .maybeSingle();
  if (n) throw n;
  return t ? S(t) : null;
}
function D() {
  return t({ queryKey: [`internshipProjects`], queryFn: T });
}
function O(e) {
  return t({
    queryKey: [`internshipProject`, e],
    queryFn: () => E(e),
    enabled: !!e,
  });
}
export { D as n, O as t };
