import { useEvents } from "../hooks/useContent";
import PageHeader from "../components/layout/PageHeader";
import Reveal from "../components/ui/Reveal";
import SectionHeader from "../components/ui/SectionHeader";
import { ListSkeleton } from "../components/ui/Skeleton";
import { EmptyState, ErrorState } from "../components/ui/UIStates";
import { formatDate } from "../lib/format";
import type { LabEvent } from "../lib/types";

function EventRow({ event }: { event: LabEvent }) {
  const past = new Date(event.event_date) < new Date();
  const date = new Date(event.event_date);
  return (
    <div
      className={`flex gap-5 p-5 bg-white border rounded-xl transition-all duration-300
                     ${past ? "border-gray-100 opacity-60" : "border-gray-100 hover:border-gray-200 hover:shadow-md"}`}
    >
      <div className="shrink-0 w-14 pt-0.5 text-center border-r border-gray-100 pr-4">
        <div className={`text-2xl font-bold leading-none ${past ? "text-gray-300" : "text-navy"}`}>{date.getDate()}</div>
        <div className="text-[11px] font-semibold text-gray-400 uppercase mt-1">
          {date.toLocaleString("tr-TR", { month: "short" })}
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <h3 className={`font-semibold text-[15px] leading-snug mb-1 ${past ? "text-gray-400" : "text-navy"}`}>
          {event.title}
        </h3>
        {event.description && (
          <p className="text-gray-400 text-[13px] leading-relaxed line-clamp-2 mb-2">{event.description}</p>
        )}
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-400">
          <span className="inline-flex items-center gap-1">
            <i className="fa fa-clock text-[10px]" /> {formatDate(event.event_date)}
          </span>
          {event.location && (
            <span className="inline-flex items-center gap-1">
              <i className="fa fa-location-dot text-[10px]" /> {event.location}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Events() {
  const { data: events, isLoading, error } = useEvents();
  const now = new Date();
  const upcoming = (events || []).filter((e) => new Date(e.event_date) >= now);
  const past = (events || []).filter((e) => new Date(e.event_date) < now);

  return (
    <>
      <PageHeader icon="fa-calendar-days" title="Etkinlikler" subtitle="Laboratuvar etkinlikleri ve organizasyonlar" />
      <section className="py-12 bg-gray-50/50 min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-4">
          {isLoading && (
            <div className="space-y-3">
              <ListSkeleton />
              <ListSkeleton />
              <ListSkeleton />
            </div>
          )}
          {error && <ErrorState message="Etkinlikler yüklenirken hata oluştu." />}
          {events && events.length === 0 && <EmptyState message="Henüz etkinlik eklenmemiş." />}
          {upcoming.length > 0 && (
            <div className="mb-10">
              <Reveal>
                <SectionHeader tag="Yaklaşan" title="Yaklaşan Etkinlikler" />
              </Reveal>
              <div className="space-y-3">
                {upcoming.map((event, index) => (
                  <Reveal key={event.id} delay={index * 0.06}>
                    <EventRow event={event} />
                  </Reveal>
                ))}
              </div>
            </div>
          )}
          {past.length > 0 && (
            <div>
              <Reveal>
                <SectionHeader tag="Geçmiş" title="Geçmiş Etkinlikler" />
              </Reveal>
              <div className="space-y-3">
                {past.map((event, index) => (
                  <Reveal key={event.id} delay={index * 0.05}>
                    <EventRow event={event} />
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
