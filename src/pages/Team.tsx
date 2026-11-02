import { useTeam } from "../hooks/useContent";
import PageHeader from "../components/layout/PageHeader";
import TeamCard from "../components/cards/TeamCard";
import Reveal from "../components/ui/Reveal";
import { CardSkeleton } from "../components/ui/Skeleton";
import { EmptyState, ErrorState } from "../components/ui/UIStates";
import { TEAM_TIERS } from "../lib/format";
import type { TeamMember } from "../lib/types";

const gridClass = "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5";

export default function Team() {
  const { data: members, isLoading, error } = useTeam();

  // Group by priority tier, highest first (4 = director … 1 = members).
  const byTier: Record<number, TeamMember[]> = {};
  for (const member of members || []) {
    const tier = member.priority || 1;
    (byTier[tier] ||= []).push(member);
  }
  const tiers = Object.keys(byTier)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <>
      <PageHeader
        icon="fa-users"
        title="Araştırma Ekibi"
        subtitle="SARGEM CyberSense Laboratuvarı bünyesindeki akademisyen ve araştırmacılar"
      />
      <section className="py-12 bg-gray-50/50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4">
          {isLoading && (
            <div className={gridClass}>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div>
          )}
          {error && <ErrorState message="Ekip bilgisi yüklenirken hata oluştu." />}
          {members && members.length === 0 && <EmptyState message="Henüz ekip üyesi eklenmemiş." />}
          {tiers.map((tier) => {
            const info = TEAM_TIERS[tier] || { label: "Ekip Üyeleri", icon: "fa-user" };
            return (
              <div key={tier} className="mb-10">
                <Reveal>
                  <div className="flex items-center gap-3 mb-6 border-l-4 border-cyan pl-4">
                    <i className={`fa ${info.icon} text-cyan text-lg`} />
                    <h3 className="text-lg font-bold text-navy">{info.label}</h3>
                  </div>
                </Reveal>
                <div className={gridClass}>
                  {(byTier[tier] || []).map((member, index) => (
                    <Reveal key={member.id} delay={index * 0.06}>
                      <TeamCard member={member} />
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
