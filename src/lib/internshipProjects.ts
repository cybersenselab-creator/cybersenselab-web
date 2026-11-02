import { useQuery } from "@tanstack/react-query";
import { env } from "./env";
import { getInternshipSupabase } from "./internshipSupabase";

// Internship projects live in the separate `staj-projeleri` Supabase project. Rows are
// normalized defensively (String/Number coercion, empty → undefined) because the data is
// edited by hand in the Supabase dashboard. Ported from reference/assets/internshipProjects.js.

export type Student = { id: string; name: string; department?: string; avatarUrl?: string; githubUrl?: string };
export type ProjectMedia = { id: string; type: string; url: string; alt: string; caption?: string; order: number };
export type Technology = { id: string; name: string; category?: string };
export type ProjectSection = {
  id: string;
  key: string;
  title: string;
  type: string;
  content: Record<string, unknown>;
  order: number;
};

export type InternshipProject = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  summary?: string;
  category?: string;
  year: number;
  department?: string;
  coverImageUrl?: string;
  githubUrl?: string;
  repositoryUrl?: string;
  students: Student[];
};

export type InternshipProjectDetail = InternshipProject & {
  technologies: Technology[];
  sections: ProjectSection[];
  media: ProjectMedia[];
};

type Row = Record<string, unknown>;

const asArray = (value: unknown): Row[] => (value ? (Array.isArray(value) ? value : [value as Row]) : []);
const text = (value: unknown) => (typeof value === "string" && value.trim() ? value.trim() : undefined);
const asObject = (value: unknown): Row =>
  value && typeof value === "object" && !Array.isArray(value) ? (value as Row) : {};

/** Storage paths become public URLs; absolute URLs pass through. */
function mediaUrl(value: unknown): string | undefined {
  const path = text(value);
  if (!path) return undefined;
  if (/^https?:\/\//i.test(path)) return path;
  const clean = path.replace(/^\/+/, "").replace(/^project-media\/+/, "");
  return `${env.internshipSupabaseUrl}/storage/v1/object/public/project-media/${clean}`;
}

function heroUrl(row: Row, media: ProjectMedia[]) {
  return mediaUrl(row.cover_image_url) || media.find((m) => m.type === "hero")?.url;
}

/**
 * List-card cover: the hero image, else `<slug>/cover.png` in storage.
 *
 * The live site requested a resized copy via `/storage/v1/render/image/…`, but image
 * transformations are a paid Supabase feature and return 403 on the Free plan, so every
 * card showed a broken image. The original object URL is used instead (fixed 2026-11-02).
 */
function cardCoverUrl(row: Row, media: ProjectMedia[], storageBase?: string) {
  const slug = text(row.slug);
  return (
    heroUrl(row, media) ||
    (storageBase && slug ? `${storageBase.replace(/\/$/, "")}/${encodeURIComponent(slug)}/cover.png` : undefined)
  );
}

const byOrder = (a: Row, b: Row) => Number(a.display_order || 0) - Number(b.display_order || 0);

function students(row: Row): Student[] {
  return asArray(asObject(row).project_students)
    .sort(byOrder)
    .flatMap((link) => asArray(link.students))
    .map((s) => ({
      id: String(s.id || ""),
      name: String(s.name || ""),
      department: text(s.department),
      avatarUrl: mediaUrl(s.avatar_url),
      githubUrl: text(s.github_url),
    }))
    .filter((s) => s.id && s.name);
}

function media(row: Row): ProjectMedia[] {
  return asArray(asObject(row).project_media)
    .map((m) => ({
      id: String(m.id || ""),
      type: String(m.type || "gallery"),
      url: mediaUrl(m.url) || "",
      alt: text(m.alt_text) || "",
      caption: text(m.caption),
      order: Number(m.display_order || 0),
    }))
    .filter((m) => m.id && m.url)
    .sort((a, b) => a.order - b.order);
}

function technologies(row: Row): Technology[] {
  return asArray(asObject(row).project_technologies)
    .sort(byOrder)
    .flatMap((link) => asArray(link.technologies))
    .map((t) => ({ id: String(t.id || ""), name: String(t.name || ""), category: text(t.category) }))
    .filter((t) => t.id && t.name);
}

function sections(row: Row): ProjectSection[] {
  return asArray(asObject(row).project_sections)
    .filter((s) => s.is_visible !== false)
    .map((s) => ({
      id: String(s.id || ""),
      key: String(s.section_key || ""),
      title: String(s.title || ""),
      type: String(s.section_type || "text"),
      content: asObject(s.content),
      order: Number(s.display_order || 0),
    }))
    .filter((s) => s.id && s.title)
    .sort((a, b) => a.order - b.order);
}

function toProject(row: Row, storageBase = `${env.internshipSupabaseUrl}/storage/v1/object/public/project-media`): InternshipProject {
  const projectMedia = media(row);
  return {
    id: String(row.id || ""),
    slug: String(row.slug || ""),
    title: String(row.title || ""),
    subtitle: text(row.subtitle),
    summary: text(row.summary),
    category: text(row.category),
    year: Number(row.year),
    department: text(row.department),
    coverImageUrl: cardCoverUrl(row, projectMedia, storageBase),
    githubUrl: text(row.github_url),
    repositoryUrl: text(row.repository_url),
    students: students(row),
  };
}

function toProjectDetail(row: Row): InternshipProjectDetail {
  const projectMedia = media(row);
  return {
    ...toProject(row),
    // The detail page shows the original (non-resized) hero image.
    coverImageUrl: heroUrl(row, projectMedia),
    technologies: technologies(row),
    sections: sections(row),
    media: projectMedia,
  };
}

const LIST_COLUMNS = [
  "id",
  "slug",
  "title",
  "subtitle",
  "summary",
  "category",
  "year",
  "department",
  "cover_image_url",
  "github_url",
  "repository_url",
  "published_at",
  "project_students(display_order,students(id,name,department,avatar_url,github_url))",
  "project_media(id,type,url,alt_text,caption,display_order)",
].join(",");

const DETAIL_COLUMNS = [
  LIST_COLUMNS,
  "project_technologies(display_order,technologies(id,name,category))",
  "project_sections(id,section_key,title,section_type,content,display_order,is_visible)",
].join(",");

async function fetchProjects() {
  const { data, error } = await getInternshipSupabase()
    .from("projects")
    .select(LIST_COLUMNS)
    .eq("status", "published")
    .order("year", { ascending: false })
    .order("published_at", { ascending: false });
  if (error) throw error;
  return ((data || []) as unknown as Row[]).map((row) => toProject(row));
}

async function fetchProject(slug: string) {
  const { data, error } = await getInternshipSupabase()
    .from("projects")
    .select(DETAIL_COLUMNS)
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();
  if (error) throw error;
  return data ? toProjectDetail(data as unknown as Row) : null;
}

export function useInternshipProjects() {
  return useQuery({ queryKey: ["internshipProjects"], queryFn: fetchProjects });
}

export function useInternshipProject(slug: string | undefined) {
  return useQuery({ queryKey: ["internshipProject", slug], queryFn: () => fetchProject(slug!), enabled: !!slug });
}
