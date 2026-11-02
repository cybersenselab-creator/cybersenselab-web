import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabase";
import type {
  Announcement,
  Award,
  ContentImage,
  LabEvent,
  Partner,
  Publication,
  ResearchArea,
  ResearchProject,
  TeamMember,
  WithImages,
} from "../lib/types";

// Public read queries — ported 1:1 from reference/assets/useSupabase.js.

const IMAGE_ENTITIES = new Set(["announcements", "projects", "etkinlikler"]);

/** Attaches published `content_images` rows (sorted) to each record as `images`. */
async function attachImages<T extends { id: string }>(entityType: string, rows: T[]): Promise<WithImages<T>[]> {
  if (!IMAGE_ENTITIES.has(entityType) || rows.length === 0) {
    return rows.map((row) => ({ ...row, images: [] }));
  }
  const { data, error } = await supabase
    .from("content_images")
    .select("id, entity_type, entity_id, image_url, alt_text, sort_order, is_published")
    .eq("entity_type", entityType)
    .eq("is_published", true)
    .in("entity_id", rows.map((row) => String(row.id)))
    .order("sort_order", { ascending: true });
  if (error) throw error;

  const byEntity = new Map<string, ContentImage[]>();
  for (const image of data ?? []) {
    const key = String(image.entity_id);
    if (!byEntity.has(key)) byEntity.set(key, []);
    byEntity.get(key)!.push(image);
  }
  return rows.map((row) => ({ ...row, images: byEntity.get(String(row.id)) ?? [] }));
}

const sortTime = (a: Announcement) => Date.parse(a.publish_date || a.created_at) || 0;

export function useAnnouncements(limit?: number) {
  return useQuery({
    queryKey: ["announcements", limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("announcements")
        .select("*")
        .eq("is_published", true)
        .order("created_at", { ascending: false })
        .limit(100);
      if (error) throw error;
      // publish_date (if set) overrides created_at for ordering.
      const sorted = [...(data ?? [])].sort((a, b) => sortTime(b) - sortTime(a));
      return attachImages("announcements", limit ? sorted.slice(0, limit) : sorted);
    },
  });
}

export function useProjects(limit?: number) {
  return useQuery({
    queryKey: ["projects", limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("is_published", true)
        .order("created_at", { ascending: false })
        .limit(limit || 100);
      if (error) throw error;
      return attachImages<ResearchProject>("projects", data ?? []);
    },
  });
}

export function useProject(id: string | undefined) {
  return useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id!)
        .eq("is_published", true)
        .maybeSingle();
      if (error) throw error;
      if (!data) return null;
      const [project] = await attachImages("projects", [data]);
      return project;
    },
    enabled: !!id,
  });
}

export function useEvents(limit?: number) {
  return useQuery({
    queryKey: ["events", limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("etkinlikler")
        .select("*")
        .eq("is_published", true)
        .order("event_date", { ascending: true })
        .limit(limit || 100);
      if (error) throw error;
      return attachImages<LabEvent>("etkinlikler", data ?? []);
    },
  });
}

export function useTeam(limit?: number) {
  return useQuery({
    queryKey: ["team", limit],
    queryFn: async (): Promise<TeamMember[]> => {
      const { data, error } = await supabase
        .from("ekip")
        .select("*")
        .eq("is_published", true)
        .order("priority", { ascending: false })
        .order("sort_order", { ascending: true })
        .limit(limit || 100);
      if (error) throw error;
      return data ?? [];
    },
  });
}

export function usePublications(limit?: number) {
  return useQuery({
    queryKey: ["publications", limit],
    queryFn: async (): Promise<Publication[]> => {
      const { data, error } = await supabase
        .from("yayinlar")
        .select("*")
        .eq("is_published", true)
        .order("pub_year", { ascending: false })
        .order("created_at", { ascending: false })
        .limit(limit || 100);
      if (error) throw error;
      return data ?? [];
    },
  });
}

export function useResearchAreas() {
  return useQuery({
    queryKey: ["researchAreas"],
    queryFn: async (): Promise<ResearchArea[]> => {
      const { data, error } = await supabase
        .from("arastirma_alanlari")
        .select("*")
        .eq("is_published", true)
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data ?? [];
    },
  });
}

export function useAwards() {
  return useQuery({
    queryKey: ["awards"],
    queryFn: async (): Promise<{ items: Award[]; count: number }> => {
      const { data, error, count } = await supabase
        .from("oduller")
        .select("*", { count: "exact" })
        .eq("is_published", true)
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return { items: data ?? [], count: count ?? 0 };
    },
  });
}

export function usePartners() {
  return useQuery({
    queryKey: ["partners"],
    queryFn: async (): Promise<Partner[]> => {
      const { data, error } = await supabase
        .from("ortaklar")
        .select("*")
        .eq("is_published", true)
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data ?? [];
    },
  });
}

/** `site_ayarlari` as a key → value map. */
export function useSiteSettings() {
  return useQuery({
    queryKey: ["siteSettings"],
    queryFn: async (): Promise<Record<string, string>> => {
      const { data, error } = await supabase.from("site_ayarlari").select("key,value");
      if (error) throw error;
      return Object.fromEntries((data ?? []).map((row) => [row.key, row.value]));
    },
  });
}

const COUNTED_TABLES = [
  { name: "ekip", key: "team" },
  { name: "yayinlar", key: "publications" },
  { name: "ortaklar", key: "partners" },
] as const;

/** Home page stats. A failing count shows as 0 rather than breaking the page. */
export function usePublicCounts() {
  return useQuery({
    queryKey: ["publicCounts"],
    queryFn: async () => {
      const counts: Record<string, number> = {};
      for (const table of COUNTED_TABLES) {
        const { count, error } = await supabase
          .from(table.name)
          .select("*", { count: "exact", head: true })
          .eq("is_published", true);
        counts[table.key] = error ? 0 : count || 0;
      }
      const { count: activeProjects } = await supabase
        .from("projects")
        .select("*", { count: "exact", head: true })
        .eq("is_published", true)
        .eq("status", "active");
      return {
        team: counts.team || 0,
        publications: counts.publications || 0,
        activeProjects: activeProjects || 0,
        partners: counts.partners || 0,
      };
    },
    staleTime: 10 * 60 * 1000,
  });
}
