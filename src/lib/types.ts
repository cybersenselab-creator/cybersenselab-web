import type { Tables } from "./database.types";

// Public-site row shapes, derived from the generated schema (`npm run types`).

export type ContentImage = Pick<
  Tables<"content_images">,
  "id" | "entity_type" | "entity_id" | "image_url" | "alt_text" | "sort_order" | "is_published"
>;

export type WithImages<T> = T & { images: ContentImage[] };

export type Announcement = Tables<"announcements">;
export type ResearchProject = Tables<"projects">;
export type LabEvent = Tables<"etkinlikler">;
export type TeamMember = Tables<"ekip">;
export type Publication = Tables<"yayinlar">;
export type ResearchArea = Tables<"arastirma_alanlari">;
export type Award = Tables<"oduller">;
export type Partner = Tables<"ortaklar">;

export type ProjectStatus = "active" | "done" | "plan";
