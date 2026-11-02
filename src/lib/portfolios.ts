import { useQuery } from "@tanstack/react-query";
import { supabase } from "./supabase";

// Portfolio showcase data from the `portfolios` table; gallery images come from
// `content_images` (entity_type 'portfolios'). Managed in the admin panel.

export type PortfolioAuthor = { name: string; avatar: string; avatarImage?: string; role?: string };

export type PortfolioProject = {
  id: string; // the slug — used in /portfolyolar/:id
  title: string;
  category: string;
  authors: PortfolioAuthor[];
  description: string;
  features: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: string[];
  galleryStyle?: string;
};

export type PortfolioCategory = { id: string; label: string };

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobil" },
  { id: "fullstack", label: "Full-Stack" },
];

type StoredAuthor = { name?: unknown; role?: unknown; avatar_image?: unknown };

/** "Hamza Alhadeethi" → "HA", "Ziyad" → "Z". */
export function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  const letters = parts.length === 1 ? parts[0].charAt(0) : parts[0].charAt(0) + parts[parts.length - 1].charAt(0);
  return letters.toLocaleUpperCase("tr-TR");
}

const text = (value: unknown) => (typeof value === "string" && value.trim() ? value.trim() : undefined);

function toAuthors(value: unknown): PortfolioAuthor[] {
  if (!Array.isArray(value)) return [];
  return (value as StoredAuthor[])
    .map((author) => {
      const name = text(author?.name) || "";
      return { name, avatar: initials(name), avatarImage: text(author?.avatar_image), role: text(author?.role) };
    })
    .filter((author) => author.name);
}

async function fetchPortfolios(): Promise<PortfolioProject[]> {
  const { data: rows, error } = await supabase
    .from("portfolios")
    .select("*")
    .eq("is_published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });
  if (error) throw error;
  if (!rows?.length) return [];

  const { data: images, error: imagesError } = await supabase
    .from("content_images")
    .select("entity_id, image_url, sort_order")
    .eq("entity_type", "portfolios")
    .eq("is_published", true)
    .in("entity_id", rows.map((row) => row.id))
    .order("sort_order", { ascending: true });
  if (imagesError) throw imagesError;

  const byPortfolio = new Map<string, string[]>();
  for (const image of images ?? []) {
    const list = byPortfolio.get(image.entity_id) || [];
    list.push(image.image_url);
    byPortfolio.set(image.entity_id, list);
  }

  return rows.map((row) => ({
    id: row.slug,
    title: row.title,
    category: row.category,
    authors: toAuthors(row.authors),
    description: row.description,
    features: row.features,
    tech: row.tech,
    liveUrl: row.live_url || undefined,
    githubUrl: row.github_url || undefined,
    images: byPortfolio.get(row.id) || [],
    galleryStyle: row.gallery_style === "wide" ? "wide" : undefined,
  }));
}

export function usePortfolios() {
  return useQuery({ queryKey: ["portfolios"], queryFn: fetchPortfolios });
}
