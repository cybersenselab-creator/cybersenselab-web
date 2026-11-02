const MONTHS = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];

/** "14 Eki 2026"; returns the input unchanged if it is not a valid date. */
export function formatDate(value: string): string {
  const date = new Date(value);
  if (isNaN(date.getTime())) return value;
  return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

export function truncate(text: string | null | undefined, max = 140): string {
  if (!text) return "";
  return text.length > max ? text.slice(0, max - 1) + "…" : text;
}

export const PROJECT_STATUS = {
  active: { cls: "bg-green-100 text-green-700 border-green-200", label: "● Aktif" },
  done: { cls: "bg-gray-100 text-gray-600 border-gray-200", label: "✓ Tamamlandı" },
  plan: { cls: "bg-amber-100 text-amber-700 border-amber-200", label: "○ Planlama" },
} as const;

/** Team sections keyed by `ekip.priority`. */
export const TEAM_TIERS: Record<number, { label: string; icon: string }> = {
  4: { label: "Laboratuvar Direktörü", icon: "fa-star" },
  3: { label: "Öğretim Üyeleri & Proje Liderleri", icon: "fa-chalkboard-teacher" },
  2: { label: "Araştırma Asistanları & Stajyerler", icon: "fa-flask" },
  1: { label: "Çalışma Arkadaşları & Üyeler", icon: "fa-users" },
};
