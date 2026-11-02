import type { QueryKey } from "@tanstack/react-query";

// Admin table definitions: drives the generic list + form UI. Ported 1:1 from the live bundle.

export type FieldType =
  | "text"
  | "textarea"
  | "number"
  | "url"
  | "email"
  | "select"
  | "checkbox"
  | "datetime-local"
  | "image-upload"
  | "storage-image"
  /** text[] column edited as one item per line. */
  | "lines"
  /** jsonb author list edited as "Ad Soyad | Rol | Fotoğraf URL" lines. */
  | "authors";

export type FieldDef = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  default?: string | number | boolean;
  options?: string[];
  min?: number;
  max?: number;
  /** Not a column: `_images` is saved through admin_set_record_images. */
  virtual?: boolean;
  /** Editable only when creating (e.g. a settings key). */
  createOnly?: boolean;
  /** Short help text under the input. */
  hint?: string;
  /** HTML validation pattern for text inputs, with the message shown when it fails. */
  pattern?: { regex: string; message: string };
};

export type TableId =
  | "announcements"
  | "projects"
  | "etkinlikler"
  | "ekip"
  | "yayinlar"
  | "arastirma_alanlari"
  | "oduller"
  | "ortaklar"
  | "site_ayarlari"
  | "portfolios";

export type TableDef = {
  id: TableId;
  label: string;
  icon: string;
  titleField: string;
  fields: FieldDef[];
};

export const TABLES: TableDef[] = [
  {
    id: "announcements",
    label: "Duyurular",
    icon: "fa-bell",
    titleField: "title",
    fields: [
      {
        name: "title",
        label: "Başlık",
        type: "text",
        required: true,
      },
      {
        name: "content",
        label: "İçerik",
        type: "textarea",
        required: true,
      },
      {
        name: "publish_date",
        label: "Yayın Tarihi",
        type: "datetime-local",
      },
      {
        name: "_images",
        label: "Görseller",
        type: "image-upload",
        virtual: true,
      },
      {
        name: "is_published",
        label: "Yayında",
        type: "checkbox",
        default: true,
      },
    ],
  },
  {
    id: "projects",
    label: "Projeler",
    icon: "fa-folder-open",
    titleField: "title",
    fields: [
      {
        name: "title",
        label: "Başlık",
        type: "text",
        required: true,
      },
      {
        name: "description",
        label: "Açıklama",
        type: "textarea",
        required: true,
      },
      {
        name: "status",
        label: "Durum",
        type: "select",
        options: ["active", "done", "plan"],
        default: "active",
      },
      {
        name: "funder",
        label: "Fon Kaynağı",
        type: "text",
      },
      {
        name: "date_range",
        label: "Tarih Aralığı",
        type: "text",
      },
      {
        name: "progress_pct",
        label: "İlerleme (%)",
        type: "number",
        min: 0,
        max: 100,
        default: 0,
      },
      {
        name: "image_url",
        label: "Kapak Görseli",
        type: "storage-image",
      },
      {
        name: "github_url",
        label: "GitHub URL",
        type: "url",
      },
      {
        name: "demo_url",
        label: "Demo URL",
        type: "url",
      },
      {
        name: "is_published",
        label: "Yayında",
        type: "checkbox",
        default: true,
      },
    ],
  },
  {
    id: "etkinlikler",
    label: "Etkinlikler",
    icon: "fa-calendar-days",
    titleField: "title",
    fields: [
      {
        name: "title",
        label: "Başlık",
        type: "text",
        required: true,
      },
      {
        name: "description",
        label: "Açıklama",
        type: "textarea",
      },
      {
        name: "event_date",
        label: "Tarih/Saat",
        type: "datetime-local",
        required: true,
      },
      {
        name: "location",
        label: "Konum",
        type: "text",
      },
      {
        name: "_images",
        label: "Görseller",
        type: "image-upload",
        virtual: true,
      },
      {
        name: "is_published",
        label: "Yayında",
        type: "checkbox",
        default: true,
      },
    ],
  },
  {
    id: "ekip",
    label: "Ekip",
    icon: "fa-users",
    titleField: "name",
    fields: [
      {
        name: "name",
        label: "Ad Soyad",
        type: "text",
        required: true,
      },
      {
        name: "role",
        label: "Rol",
        type: "text",
        required: true,
      },
      {
        name: "expertise",
        label: "Uzmanlık",
        type: "text",
      },
      {
        name: "avatar_icon",
        label: "Profil Görseli",
        type: "storage-image",
        default: "fa-user",
      },
      {
        name: "email",
        label: "E-posta",
        type: "email",
      },
      {
        name: "linkedin_url",
        label: "LinkedIn URL",
        type: "url",
      },
      {
        name: "github_url",
        label: "GitHub URL",
        type: "url",
      },
      {
        name: "scholar_url",
        label: "Scholar URL",
        type: "url",
      },
      {
        name: "website_url",
        label: "Web URL",
        type: "url",
      },
      {
        name: "priority",
        label: "Öncelik",
        type: "number",
        min: 1,
        max: 4,
        default: 1,
      },
      {
        name: "sort_order",
        label: "Sıralama",
        type: "number",
        default: 0,
      },
      {
        name: "is_published",
        label: "Yayında",
        type: "checkbox",
        default: true,
      },
    ],
  },
  {
    id: "yayinlar",
    label: "Yayınlar",
    icon: "fa-book-open",
    titleField: "title",
    fields: [
      {
        name: "title",
        label: "Başlık",
        type: "text",
        required: true,
      },
      {
        name: "authors",
        label: "Yazarlar",
        type: "text",
        required: true,
      },
      {
        name: "venue",
        label: "Yayın Yeri",
        type: "text",
        required: true,
      },
      {
        name: "pub_type",
        label: "Tür",
        type: "select",
        options: ["journal", "conference"],
        default: "journal",
      },
      {
        name: "pub_year",
        label: "Yıl",
        type: "number",
        min: 1900,
        max: 2100,
        required: true,
      },
      {
        name: "pdf_url",
        label: "PDF URL",
        type: "url",
      },
      {
        name: "doi_url",
        label: "DOI URL",
        type: "url",
      },
      {
        name: "is_published",
        label: "Yayında",
        type: "checkbox",
        default: true,
      },
    ],
  },
  {
    id: "arastirma_alanlari",
    label: "Araştırma",
    icon: "fa-flask",
    titleField: "title",
    fields: [
      {
        name: "icon",
        label: "Görsel",
        type: "storage-image",
        default: "fa-shield",
      },
      {
        name: "title",
        label: "Başlık",
        type: "text",
        required: true,
      },
      {
        name: "description",
        label: "Açıklama",
        type: "textarea",
      },
      {
        name: "sort_order",
        label: "Sıralama",
        type: "number",
        default: 0,
      },
      {
        name: "is_published",
        label: "Yayında",
        type: "checkbox",
        default: true,
      },
    ],
  },
  {
    id: "oduller",
    label: "Ödüller",
    icon: "fa-trophy",
    titleField: "title",
    fields: [
      {
        name: "year",
        label: "Yıl",
        type: "number",
        min: 1900,
        max: 2100,
        required: true,
      },
      {
        name: "title",
        label: "Başlık",
        type: "text",
        required: true,
      },
      {
        name: "description",
        label: "Açıklama",
        type: "textarea",
      },
      {
        name: "color_scheme",
        label: "Renk",
        type: "select",
        options: ["cyan", "green", "orange", "purple"],
        default: "cyan",
      },
      {
        name: "sort_order",
        label: "Sıralama",
        type: "number",
        default: 0,
      },
      {
        name: "is_published",
        label: "Yayında",
        type: "checkbox",
        default: true,
      },
    ],
  },
  {
    id: "ortaklar",
    label: "Ortaklar",
    icon: "fa-handshake",
    titleField: "name",
    fields: [
      {
        name: "name",
        label: "Ad",
        type: "text",
        required: true,
      },
      {
        name: "icon",
        label: "İkon",
        type: "text",
        default: "fa-building",
      },
      {
        name: "url",
        label: "URL",
        type: "url",
      },
      {
        name: "sort_order",
        label: "Sıralama",
        type: "number",
        default: 0,
      },
      {
        name: "is_published",
        label: "Yayında",
        type: "checkbox",
        default: true,
      },
    ],
  },
  {
    id: "site_ayarlari",
    label: "Ayarlar",
    icon: "fa-gear",
    titleField: "key",
    fields: [
      {
        name: "key",
        label: "Anahtar",
        type: "text",
        required: true,
        createOnly: true,
      },
      {
        name: "value",
        label: "Değer",
        type: "textarea",
        required: true,
      },
    ],
  },
  {
    id: "portfolios",
    label: "Portfolyolar",
    icon: "fa-briefcase",
    titleField: "title",
    fields: [
      { name: "title", label: "Başlık", type: "text", required: true },
      {
        name: "slug",
        label: "Adres (slug)",
        type: "text",
        required: true,
        pattern: { regex: "[a-z0-9]+(-[a-z0-9]+)*", message: "Yalnızca küçük harf, rakam ve tire (ör. yeni-proje)." },
        hint: "Sayfa adresi: /portfolyolar/<slug>. Küçük harf, rakam ve tire. Değiştirirsen eski bağlantılar çalışmaz.",
      },
      { name: "category", label: "Kategori", type: "select", options: ["web", "mobile", "fullstack"], default: "web" },
      { name: "description", label: "Açıklama", type: "textarea", required: true },
      {
        name: "authors",
        label: "Katılımcılar",
        type: "authors",
        required: true,
        hint: "Her satıra bir kişi: Ad Soyad | Rol | Fotoğraf URL (rol ve fotoğraf isteğe bağlı).",
      },
      { name: "features", label: "Öne Çıkan Özellikler", type: "lines", hint: "Her satıra bir özellik." },
      { name: "tech", label: "Teknolojiler", type: "lines", hint: "Her satıra bir teknoloji. Kartta ilk üçü görünür." },
      { name: "_images", label: "Görseller", type: "image-upload", virtual: true, hint: "İlk görsel kapak olarak kullanılır." },
      { name: "gallery_style", label: "Görsel Düzeni", type: "select", options: ["standard", "wide"], default: "standard" },
      { name: "live_url", label: "Canlı / Tasarım URL", type: "url" },
      { name: "github_url", label: "GitHub URL", type: "url" },
      { name: "sort_order", label: "Sıralama", type: "number", default: 0 },
      { name: "is_published", label: "Yayında", type: "checkbox", default: true },
    ],
  },
];

export function getTable(id: TableId): TableDef {
  return TABLES.find((table) => table.id === id) || TABLES[0];
}

/** Tables whose records can have a `content_images` gallery. */
export const IMAGE_ENTITY_TABLES = new Set<TableId>(["announcements", "projects", "etkinlikler", "portfolios"]);

/** Public-site query caches to invalidate after a write to each table (see hooks/useContent). */
const PUBLIC_QUERY_KEYS: Record<TableId, QueryKey[]> = {
  announcements: [["announcements"]],
  projects: [["projects"], ["publicCounts"]],
  etkinlikler: [["events"]],
  ekip: [["team"], ["publicCounts"]],
  yayinlar: [["publications"], ["publicCounts"]],
  arastirma_alanlari: [["researchAreas"]],
  oduller: [["awards"]],
  ortaklar: [["partners"], ["publicCounts"]],
  site_ayarlari: [["siteSettings"]],
  portfolios: [["portfolios"]],
};

export function publicQueryKeys(table: TableId): QueryKey[] {
  return PUBLIC_QUERY_KEYS[table] || [];
}

/** `site_ayarlari` is keyed by `key`, every other table by `id`. */
export function recordId(
  table: TableId,
  record: AdminRecord,
): string | undefined {
  const id = table === "site_ayarlari" ? record.key : record.id;
  return id == null ? undefined : String(id);
}

export type AdminRecord = Record<string, unknown> & {
  id?: string;
  key?: string;
  images?: { image_url: string }[];
};
