import type { ReactNode } from "react";
import { Link } from "react-router";
import { PROJECT_STATUS } from "../../lib/format";
import type { InternshipProjectDetail, ProjectMedia, ProjectSection } from "../../lib/internshipProjects";
import type { ResearchProject, WithImages } from "../../lib/types";

// Detail layouts for both project kinds. Ported from reference/assets/ProjectDetailView.js.

const cardClass = "rounded-2xl border border-gray-100 bg-white p-6 shadow-sm";

type Row = Record<string, unknown>;

function normalizeKey(value: string) {
  return value
    .trim()
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

/** "Limitations" sections are kept in the data but not shown publicly. */
function isLimitationsSection(section: ProjectSection) {
  const key = normalizeKey(section.key);
  const title = normalizeKey(section.title);
  return key === "limitations" || key.endsWith("_limitations") || title === "koddan_gorulen_sinirlar";
}

const strings = (value: unknown): string[] =>
  Array.isArray(value) ? value.filter((v): v is string => typeof v === "string" && !!v.trim()) : [];
const objects = (value: unknown): Row[] =>
  Array.isArray(value) ? value.filter((v): v is Row => !!v && typeof v === "object" && !Array.isArray(v)) : [];

function SectionTitle({ index, title, id }: { index: number; title: string; id: string }) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan/10 font-extrabold text-cyan-dim">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h2 id={id} className="pt-1 text-xl font-bold text-navy sm:text-2xl">
        {title}
      </h2>
    </div>
  );
}

function MediaGrid({ media }: { media: ProjectMedia[] }) {
  if (!media.length) return null;
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {media.map((item) => (
        <figure key={item.id} className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
          <img src={item.url} alt={item.alt} className="h-auto max-h-[32rem] w-full object-contain" loading="lazy" />
          {item.caption && (
            <figcaption className="px-4 py-3 text-xs leading-relaxed text-gray-500">{item.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

/** Renders a section according to its `section_type`; unknown types fall back to paragraphs + bullet list. */
function SectionBody({ section, media }: { section: ProjectSection; media: ProjectMedia[] }) {
  const content = section.content;
  const paragraphs = strings(content.paragraphs);
  const items = strings(content.items);
  const description = typeof content.description === "string" ? content.description : undefined;
  const mediaIds = strings(content.mediaIds);
  const sectionMedia = mediaIds.length
    ? media.filter((m) => mediaIds.includes(m.id))
    : media.filter((m) => (section.type === "chart" ? m.type === "chart" : m.type === "gallery"));

  if (section.type === "architecture") {
    const nodes = objects(content.nodes);
    const connections = objects(content.connections);
    return (
      <div className="space-y-5">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {nodes.map((node, i) => (
            <div key={String(node.id || i)} className="rounded-xl border border-cyan/20 bg-cyan/5 p-4">
              <h3 className="font-semibold text-navy">{String(node.label || "")}</h3>
              {typeof node.subtitle === "string" && <p className="mt-1 text-sm text-gray-500">{node.subtitle}</p>}
            </div>
          ))}
        </div>
        {connections.length > 0 && (
          <ul className="space-y-2" aria-label="Ağ bağlantıları">
            {connections.map((link, i) => (
              <li
                key={i}
                className="flex flex-wrap items-center gap-2 rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-600"
              >
                <strong className="text-navy">{String(link.from || "")}</strong>
                <i className="fa fa-arrow-right text-cyan-dim" aria-hidden="true" />
                <strong className="text-navy">{String(link.to || "")}</strong>
                {typeof link.label === "string" && <span className="text-gray-400">- {link.label}</span>}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  if (section.type === "attack_list") {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        {objects(content.attacks).map((attack, i) => (
          <div key={i} className="rounded-xl border border-red-100 bg-red-50/40 p-5">
            <h3 className="font-semibold text-navy">{String(attack.name || "")}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{String(attack.description || "")}</p>
            {typeof attack.impact === "string" && (
              <p className="mt-3 text-xs font-medium text-red-600">Etki: {attack.impact}</p>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (section.type === "metrics") {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        {objects(content.metrics).map((metric, i) => (
          <div key={i} className="rounded-xl border border-gray-100 bg-gray-50 p-5">
            <h3 className="font-semibold text-navy">{String(metric.name || "")}</h3>
            {typeof metric.shortName === "string" && (
              <span className="mt-1 inline-block text-xs font-bold text-cyan-dim">{metric.shortName}</span>
            )}
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{String(metric.description || "")}</p>
          </div>
        ))}
      </div>
    );
  }

  if (section.type === "statistics") {
    return (
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {objects(content.items).map((stat, i) => (
            <div key={i} className="rounded-xl bg-navy p-4 text-center text-white">
              <strong className="block text-xl text-cyan">{String(stat.value || "")}</strong>
              <span className="mt-1 block text-xs text-white/60">{String(stat.label || "")}</span>
            </div>
          ))}
        </div>
        {description && <p className="leading-7 text-gray-600">{description}</p>}
      </div>
    );
  }

  if (section.type === "chart" || section.type === "gallery") {
    return (
      <div className="space-y-5">
        {description && <p className="leading-7 text-gray-600">{description}</p>}
        <MediaGrid media={sectionMedia} />
      </div>
    );
  }

  return (
    <div className="space-y-4 text-[15px] leading-7 text-gray-600">
      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      {items.length > 0 && (
        <ul className="space-y-2 pl-5 list-disc marker:text-cyan-dim">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

type HeaderProps = { title: string; subtitle?: string | null; tab: "staj" | "arastirma"; metadata: ReactNode };

function DetailHeader({ title, subtitle, tab, metadata }: HeaderProps) {
  return (
    <header className="relative overflow-hidden bg-navy py-12 text-white sm:py-16">
      <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-cyan/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-cyan/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4">
        <nav
          className="mb-7 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/45"
          aria-label="Sayfa yolu"
        >
          <Link to="/" className="hover:text-cyan">
            CyberSense Lab
          </Link>
          <span aria-hidden="true">/</span>
          <Link to={`/projeler?tur=${tab}`} className="hover:text-cyan">
            {tab === "staj" ? "Staj Projeleri" : "Araştırma Projeleri"}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-white/70">Detay</span>
        </nav>
        <h1 className="max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-3xl text-base leading-7 text-white/65 sm:text-lg">{subtitle}</p>}
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/55">{metadata}</div>
      </div>
    </header>
  );
}

function InfoRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-b border-gray-100 py-3 last:border-0">
      <dt className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">{label}</dt>
      <dd className="mt-1 text-sm font-medium text-navy">{children}</dd>
    </div>
  );
}

function ExternalButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="btn-outline justify-center text-xs">
      {children}
      <i className="fa fa-arrow-up-right-from-square" aria-hidden="true" />
    </a>
  );
}

const Dot = () => <span aria-hidden="true">•</span>;

export function InternshipProjectView({ project }: { project: InternshipProjectDetail }) {
  // "research_context" is shown in the sidebar instead of the main column.
  const context = project.sections.find((s) => s.key === "research_context");
  const mainSections = project.sections.filter((s) => s.key !== "research_context" && !isLimitationsSection(s));
  const contextItems = context ? strings(context.content.items) : [];
  const studentNames = project.students.map((s) => s.name).join(", ");

  return (
    <>
      <DetailHeader
        title={project.title}
        subtitle={project.subtitle || project.summary}
        tab="staj"
        metadata={
          <>
            {studentNames && <span>{studentNames}</span>}
            {project.department && (
              <>
                <Dot />
                <span>{project.department}</span>
              </>
            )}
            <Dot />
            <span>{project.year}</span>
            <Dot />
            <span>CyberSense Lab</span>
          </>
        }
      />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <article className="space-y-8" aria-label={`${project.title} proje içeriği`}>
          {mainSections.length > 0 ? (
            mainSections.map((section, index) => (
              <section key={section.id} className={cardClass} aria-labelledby={`section-${section.id}`}>
                <SectionTitle index={index} title={section.title} id={`section-${section.id}`} />
                <SectionBody section={section} media={project.media} />
              </section>
            ))
          ) : (
            <section className={cardClass} aria-labelledby="project-summary">
              <SectionTitle index={0} title="Proje Özeti" id="project-summary" />
              <p className="leading-7 text-gray-600">
                {project.summary || "Bu proje için henüz ayrıntılı içerik eklenmemiş."}
              </p>
            </section>
          )}
        </article>
        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start" aria-label="Proje araştırma bilgileri">
          <section className={cardClass}>
            <h2 className="text-lg font-bold text-navy">Proje Bilgileri</h2>
            <dl className="mt-3">
              {studentNames && <InfoRow label="Öğrenci">{studentNames}</InfoRow>}
              {project.department && <InfoRow label="Bölüm">{project.department}</InfoRow>}
              <InfoRow label="Yıl">{project.year}</InfoRow>
              <InfoRow label="Laboratuvar">CyberSense Lab</InfoRow>
              {project.category && <InfoRow label="Odak">{project.category}</InfoRow>}
            </dl>
            {(project.githubUrl || project.repositoryUrl) && (
              <div className="mt-5 grid gap-2">
                {project.githubUrl && <ExternalButton href={project.githubUrl}>GitHub</ExternalButton>}
                {project.repositoryUrl && project.repositoryUrl !== project.githubUrl && (
                  <ExternalButton href={project.repositoryUrl}>Proje deposu</ExternalButton>
                )}
              </div>
            )}
          </section>
          {project.technologies.length > 0 && (
            <section className={cardClass}>
              <h2 className="text-lg font-bold text-navy">Teknik Yığın</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li key={tech.id} className="rounded-lg bg-cyan/10 px-3 py-1.5 text-xs font-semibold text-cyan-dim">
                    {tech.name}
                  </li>
                ))}
              </ul>
            </section>
          )}
          {contextItems.length > 0 && (
            <section className={cardClass}>
              <h2 className="text-lg font-bold text-navy">Proje Bağlamı</h2>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {contextItems.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-cyan-dim">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </aside>
      </div>
    </>
  );
}

export function ResearchProjectView({ project }: { project: WithImages<ResearchProject> }) {
  const status = PROJECT_STATUS[project.status as keyof typeof PROJECT_STATUS] || { cls: "", label: project.status };
  // Main image first, then attached images, without duplicates.
  const images = [
    ...(project.image_url ? [{ image_url: project.image_url, alt_text: project.title }] : []),
    ...(project.images || []),
  ].filter((img, i, all) => all.findIndex((other) => other.image_url === img.image_url) === i);
  const progress = Math.min(100, Math.max(0, project.progress_pct));

  return (
    <>
      <DetailHeader
        title={project.title}
        subtitle={project.description}
        tab="arastirma"
        metadata={
          <>
            <span>{status.label}</span>
            {project.funder && (
              <>
                <Dot />
                <span>{project.funder}</span>
              </>
            )}
            {project.date_range && (
              <>
                <Dot />
                <span>{project.date_range}</span>
              </>
            )}
            <Dot />
            <span>CyberSense Lab</span>
          </>
        }
      />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <article className="space-y-8" aria-label={`${project.title} proje içeriği`}>
          <section className={cardClass} aria-labelledby="research-summary">
            <SectionTitle index={0} title="Proje Özeti" id="research-summary" />
            <p className="leading-7 text-gray-600">{project.description}</p>
          </section>
          {images.length > 0 && (
            <section className={cardClass} aria-labelledby="research-gallery">
              <SectionTitle index={1} title="Proje Görselleri" id="research-gallery" />
              <div className="grid gap-4 sm:grid-cols-2">
                {images.map((img, i) => (
                  <img
                    key={`${img.image_url}-${i}`}
                    src={img.image_url}
                    alt={img.alt_text || project.title}
                    className="h-auto max-h-[34rem] w-full rounded-xl border border-gray-100 bg-gray-50 object-contain"
                    loading="lazy"
                  />
                ))}
              </div>
            </section>
          )}
        </article>
        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start" aria-label="Proje bilgileri">
          <section className={cardClass}>
            <h2 className="text-lg font-bold text-navy">Proje Bilgileri</h2>
            <dl className="mt-3">
              <InfoRow label="Durum">{status.label}</InfoRow>
              {project.funder && <InfoRow label="Fon Kaynağı">{project.funder}</InfoRow>}
              {project.date_range && <InfoRow label="Tarih">{project.date_range}</InfoRow>}
              {project.progress_pct != null && <InfoRow label="İlerleme">{progress}%</InfoRow>}
            </dl>
            {project.status === "active" && project.progress_pct != null && (
              <div
                className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100"
                aria-label={`İlerleme yüzde ${project.progress_pct}`}
              >
                <div className="h-full rounded-full bg-cyan" style={{ width: `${progress}%` }} />
              </div>
            )}
            {(project.github_url || project.demo_url) && (
              <div className="mt-5 grid gap-2">
                {project.github_url && <ExternalButton href={project.github_url}>GitHub</ExternalButton>}
                {project.demo_url && <ExternalButton href={project.demo_url}>Canlı demo</ExternalButton>}
              </div>
            )}
          </section>
        </aside>
      </div>
    </>
  );
}
