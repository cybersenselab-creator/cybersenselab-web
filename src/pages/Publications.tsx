import { useState } from "react";
import { usePublications } from "../hooks/useContent";
import PageHeader from "../components/layout/PageHeader";
import PublicationCard from "../components/cards/PublicationCard";
import Reveal from "../components/ui/Reveal";
import { ListSkeleton } from "../components/ui/Skeleton";
import { EmptyState, ErrorState } from "../components/ui/UIStates";

const FILTERS = [
  { value: "all", label: "Tümü" },
  { value: "journal", label: "Dergi" },
  { value: "conference", label: "Konferans" },
];

export default function Publications() {
  const { data, isLoading, error } = usePublications();
  const [filter, setFilter] = useState("all");
  const publications = (data || []).filter((p) => filter === "all" || p.pub_type === filter);

  return (
    <>
      <PageHeader icon="fa-book-open" title="Yayınlar" subtitle="Akademik yayınlar ve araştırma çıktıları" />
      <section className="py-12 bg-gray-50/50 min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex gap-2 mb-8">
            {FILTERS.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all
                  ${filter === option.value ? "bg-cyan text-navy shadow-md" : "bg-white text-gray-500 hover:text-navy border border-gray-200 hover:border-cyan/30"}`}
              >
                {option.label}
              </button>
            ))}
          </div>
          {isLoading && (
            <div className="space-y-3">
              <ListSkeleton />
              <ListSkeleton />
              <ListSkeleton />
              <ListSkeleton />
            </div>
          )}
          {error && <ErrorState message="Yayınlar yüklenirken hata oluştu." />}
          {publications.length === 0 && !isLoading && <EmptyState message="Bu kategoride yayın bulunmuyor." />}
          <div className="space-y-3">
            {publications.map((publication, index) => (
              <Reveal key={publication.id} delay={index * 0.06}>
                <PublicationCard publication={publication} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
