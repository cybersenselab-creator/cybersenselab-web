import { Link } from "react-router";
import { useAnnouncements, useAwards, usePublications, useTeam } from "../hooks/useContent";
import NewsCard from "../components/cards/NewsCard";
import PublicationCard from "../components/cards/PublicationCard";
import TeamCard from "../components/cards/TeamCard";
import Reveal from "../components/ui/Reveal";
import SectionHeader from "../components/ui/SectionHeader";
import { CardSkeleton, ListSkeleton } from "../components/ui/Skeleton";
import { EmptyState } from "../components/ui/UIStates";
import Hero from "./home/Hero";
import Partners from "./home/Partners";
import ResearchAreas from "./home/ResearchAreas";
import StatsBar from "./home/StatsBar";

export default function Home() {
  const { data: news, isLoading: newsLoading } = useAnnouncements(3);
  const { data: team, isLoading: teamLoading } = useTeam(4);
  const { data: publications, isLoading: publicationsLoading } = usePublications(3);
  const { data: awardData } = useAwards();
  const awards = awardData?.items;
  // The awards column only appears when there is at least one award; news then narrows to 2/3.
  const hasAwards = (awardData?.count ?? 0) > 0;

  return (
    <>
      <Hero />
      <StatsBar />

      <section id="news" className="py-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`grid gap-8 ${hasAwards ? "lg:grid-cols-3" : ""}`}>
            <div className={hasAwards ? "lg:col-span-2" : ""}>
              <Reveal>
                <SectionHeader title="Haberler & Duyurular" />
              </Reveal>
              {newsLoading && (
                <div className={`grid sm:grid-cols-2 gap-5 ${hasAwards ? "" : "lg:grid-cols-3"}`}>
                  <CardSkeleton />
                  <CardSkeleton />
                </div>
              )}
              {news && news.length === 0 && <EmptyState message="Henüz haber bulunmuyor." />}
              {news && news.length > 0 && (
                <div className={`grid sm:grid-cols-2 gap-5 ${hasAwards ? "" : "lg:grid-cols-3"}`}>
                  {news.map((announcement, index) => (
                    <Reveal key={announcement.id} delay={index * 0.1}>
                      <Link to="/duyurular" className="block">
                        <NewsCard announcement={announcement} />
                      </Link>
                    </Reveal>
                  ))}
                </div>
              )}
              {!newsLoading && news && news.length > 0 && (
                <Reveal className="text-center mt-6" delay={0.2}>
                  <Link to="/duyurular" className="btn-outline text-sm">
                    <i className="fa fa-list" /> Tüm Haberler
                  </Link>
                </Reveal>
              )}
            </div>

            {hasAwards && (
              <div>
                <Reveal delay={0.15}>
                  <SectionHeader title="Ödüller & Öne Çıkanlar" />
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="divide-y divide-gray-100 border-t border-gray-100">
                    {(awards ?? []).slice(0, 5).map((award) => (
                      <div key={award.id} className="py-3.5">
                        <div className="flex items-baseline gap-2.5">
                          <span className="text-navy font-bold text-sm shrink-0">{award.year}</span>
                          <span className="text-navy font-medium text-[13px]">{award.title}</span>
                        </div>
                        {award.description && (
                          <p className="text-gray-400 text-xs leading-relaxed mt-1 ml-8">{award.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            )}
          </div>
        </div>
      </section>

      <ResearchAreas />

      <section id="team" className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <SectionHeader tag="Kadromuz" title="Araştırma Ekibi" center />
          </Reveal>
          {teamLoading && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div>
          )}
          {team && team.length === 0 && <EmptyState message="Henüz ekip üyesi eklenmemiş." />}
          {team && team.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
              {team.map((member, index) => (
                <Reveal key={member.id} delay={index * 0.08}>
                  <TeamCard member={member} />
                </Reveal>
              ))}
            </div>
          )}
          {!teamLoading && team && team.length > 0 && (
            <Reveal className="text-center mt-8" delay={0.2}>
              <Link to="/ekip" className="btn-outline">
                <i className="fa fa-users" /> Tüm Ekibi Gör
              </Link>
            </Reveal>
          )}
        </div>
      </section>

      <section id="publications" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="w-full">
            <div>
              <Reveal>
                <SectionHeader tag="Akademik Çıktılar" title="Son Yayınlar" />
              </Reveal>
              {publicationsLoading && (
                <div className="space-y-3">
                  <ListSkeleton />
                  <ListSkeleton />
                  <ListSkeleton />
                </div>
              )}
              {publications && publications.length === 0 && <EmptyState message="Henüz yayın eklenmemiş." />}
              {publications && publications.length > 0 && (
                <div className="space-y-3">
                  {publications.map((publication, index) => (
                    <Reveal key={publication.id} delay={index * 0.08}>
                      <PublicationCard publication={publication} />
                    </Reveal>
                  ))}
                </div>
              )}
              {!publicationsLoading && publications && publications.length > 0 && (
                <Reveal className="text-center mt-6" delay={0.2}>
                  <Link to="/yayinlar" className="btn-outline text-sm">
                    <i className="fa fa-list" /> Tüm Yayınları Gör
                  </Link>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </section>

      <Partners />
    </>
  );
}
