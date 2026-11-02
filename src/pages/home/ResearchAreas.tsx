import { useResearchAreas } from "../../hooks/useContent";
import LabIcon from "../../components/ui/LabIcon";
import Reveal from "../../components/ui/Reveal";
import SectionHeader from "../../components/ui/SectionHeader";
import { Skeleton } from "../../components/ui/Skeleton";
import { EmptyState, ErrorState } from "../../components/ui/UIStates";

const gridClass =
  "grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-xl overflow-hidden mt-8";

export default function ResearchAreas() {
  const { data: areas, isLoading, error } = useResearchAreas();

  return (
    <section id="research" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal>
          <SectionHeader tag="Uzmanlık Alanları" title="Araştırma Alanları" center />
        </Reveal>

        {isLoading && (
          <div className={gridClass}>
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white p-7">
                <Skeleton className="w-8 h-8" />
                <Skeleton className="h-4 w-3/4 mt-4" />
                <Skeleton className="h-3 w-full mt-2" />
                <Skeleton className="h-3 w-2/3 mt-2" />
              </div>
            ))}
          </div>
        )}
        {error && <ErrorState message="Araştırma alanları yüklenemedi." />}
        {areas && areas.length === 0 && <EmptyState message="Henüz araştırma alanı eklenmemiş." />}
        {areas && areas.length > 0 && (
          <div className={gridClass}>
            {areas.map((area, index) => (
              <Reveal key={area.id} delay={index * 0.06} className="bg-white">
                <div className="p-7 hover:bg-gray-50/60 transition-colors h-full">
                  <div
                    className="w-14 h-14 rounded-xl bg-navy/5 border border-gray-100
                                flex items-center justify-center text-cyan"
                  >
                    {/* `icon` is either an uploaded image URL or a Font Awesome name. */}
                    {/^https?:\/\//i.test(area.icon || "") ? (
                      <img
                        src={area.icon}
                        alt={`${area.title} görseli`}
                        className="w-11 h-11 object-contain rounded-lg"
                        loading="lazy"
                      />
                    ) : (
                      <LabIcon name={area.icon || "fa-shield"} className="w-8 h-8" />
                    )}
                  </div>
                  <h3 className="mt-4 text-[15px] font-bold text-navy">{area.title}</h3>
                  {area.description && (
                    <p className="mt-1.5 text-gray-500 text-sm leading-relaxed">{area.description}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
