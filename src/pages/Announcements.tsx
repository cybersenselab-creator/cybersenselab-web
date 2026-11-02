import { useState } from "react";
import { useAnnouncements } from "../hooks/useContent";
import PageHeader from "../components/layout/PageHeader";
import AnnouncementModal from "../components/AnnouncementModal";
import NewsCard from "../components/cards/NewsCard";
import Reveal from "../components/ui/Reveal";
import { CardSkeleton } from "../components/ui/Skeleton";
import { EmptyState, ErrorState } from "../components/ui/UIStates";
import type { Announcement, WithImages } from "../lib/types";

export default function Announcements() {
  const { data: announcements, isLoading, error } = useAnnouncements();
  const [selected, setSelected] = useState<WithImages<Announcement> | null>(null);

  return (
    <>
      <PageHeader
        icon="fa-newspaper"
        title="Haberler"
        subtitle="Laboratuvardan son gelişmeler, başarılar ve önemli duyurular"
      />
      <section className="py-12 bg-gray-50/50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4">
          {isLoading && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div>
          )}
          {error && <ErrorState message="Haberler yüklenirken hata oluştu." />}
          {announcements && announcements.length === 0 && <EmptyState message="Henüz haber eklenmemiş." />}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {announcements?.map((announcement, index) => (
              <Reveal key={announcement.id} delay={index * 0.07}>
                <NewsCard announcement={announcement} onClick={() => setSelected(announcement)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {selected && <AnnouncementModal key={selected.id} announcement={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
