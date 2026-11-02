import { usePartners } from "../../hooks/useContent";
import type { Partner } from "../../lib/types";

// Known partners get a bundled logo; the key is the lower-cased name with spaces/punctuation removed.
const PARTNER_LOGOS: Record<string, string> = {
  tubitak: "logos/tubitak.svg",
  tübitak: "logos/tubitak.svg",
  sargem: "logos/cybersense-shield.png",
  sakaryaüniversitesi: "logos/sakarya-university.svg",
  sakaryauniversity: "logos/sakarya-university.svg",
  sau: "logos/sakarya-university.svg",
};

function PartnerMark({ partner }: { partner: Partner }) {
  const name = (partner.name || "").trim();
  const logo = PARTNER_LOGOS[name.toLowerCase().replace(/[^a-z0-9çğıöşü]/g, "")];

  if (logo) {
    return (
      <img
        src={`/${logo}`}
        alt={name}
        className="h-10 w-auto max-w-[120px] object-contain grayscale opacity-60
                   group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
        loading="lazy"
      />
    );
  }
  return (
    <span className="flex items-center gap-2.5">
      <span
        className="w-9 h-9 rounded-lg bg-navy/5 border border-gray-100 flex items-center justify-center
                       text-navy font-bold text-base shrink-0"
      >
        {(name.charAt(0) || "?").toUpperCase()}
      </span>
      <span className="text-sm font-semibold whitespace-nowrap text-gray-500 group-hover:text-navy transition-colors">
        {name}
      </span>
    </span>
  );
}

export default function Partners() {
  const { data: partners } = usePartners();
  if (!partners || partners.length === 0) return null;

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-6">
          İş Ortaklarımız
        </p>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-16 gap-y-8 px-4">
        {partners.map((partner) => (
          <a
            key={partner.id}
            href={partner.url || "#"}
            target={partner.url ? "_blank" : undefined}
            rel="noopener"
            className="group flex items-center shrink-0"
          >
            <PartnerMark partner={partner} />
          </a>
        ))}
      </div>
    </section>
  );
}
