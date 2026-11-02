import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { useProjects } from "../hooks/useContent";
import { useInternshipProjects, type InternshipProject } from "../lib/internshipProjects";
import { PROJECT_STATUS } from "../lib/format";
import type { ResearchProject, WithImages } from "../lib/types";
import PageHeader from "../components/layout/PageHeader";
import LabIcon from "../components/ui/LabIcon";
import Reveal from "../components/ui/Reveal";
import { CardSkeleton } from "../components/ui/Skeleton";
import { EmptyState, ErrorState } from "../components/ui/UIStates";

const cardBase = "group relative bg-white border border-gray-100 rounded-xl overflow-hidden";
const externalLink =
  "relative z-[2] text-xs text-gray-400 hover:text-cyan transition-colors inline-flex items-center gap-1";
const filterButton = (active: boolean) =>
  `px-4 py-2 rounded-xl text-sm font-medium transition-all ${active ? "bg-cyan text-navy shadow-md" : "bg-white text-gray-500 hover:text-navy border border-gray-200 hover:border-cyan/30"}`;
const tabButton = (active: boolean) =>
  `px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${active ? "bg-navy text-white shadow-sm" : "text-gray-500 hover:text-navy"}`;

function GridSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="Projeler yükleniyor">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}

// The whole card is clickable via an absolutely positioned overlay link; external links sit above it (z-[2]).
function ResearchProjectCard({ project, to }: { project: WithImages<ResearchProject>; to: string }) {
  const status = PROJECT_STATUS[project.status as keyof typeof PROJECT_STATUS] || {
    cls: "bg-gray-100 text-gray-600",
    label: project.status,
  };
  const progress = project.progress_pct ?? 0;
  const image = project.image_url || project.images?.[0]?.image_url;

  return (
    <article
      className={`${cardBase}
                 hover:border-gray-200 hover:shadow-lg transition-all duration-300`}
    >
      <Link
        to={to}
        aria-label={`${project.title} proje detaylarını görüntüle`}
        className="absolute inset-0 z-[1] rounded-xl"
      />
      <div className="relative h-44 bg-gray-50 flex items-center justify-center overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <LabIcon name="fa-diagram-project" className="w-8 h-8 text-gray-300" />
        )}
        <span className={`absolute top-3 right-3 text-[11px] font-medium px-2.5 py-0.5 rounded-md ${status.cls}`}>
          {status.label}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-navy text-[15px] leading-snug mb-2">{project.title}</h3>
        <p className="text-gray-400 text-[13px] leading-relaxed line-clamp-2 mb-3">{project.description}</p>
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-400 mb-3">
          {project.funder && (
            <span>
              <i className="fa fa-building-columns mr-1" /> {project.funder}
            </span>
          )}
          {project.date_range && (
            <span>
              <i className="fa fa-calendar mr-1" /> {project.date_range}
            </span>
          )}
        </div>
        {project.status === "active" && (
          <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-cyan rounded-full" style={{ width: `${Math.min(100, Math.max(0, progress))}%` }} />
          </div>
        )}
        {(project.github_url || project.demo_url) && (
          <div className="flex gap-4 mt-3 pt-3 border-t border-gray-50">
            {project.github_url && (
              <a href={project.github_url} target="_blank" rel="noopener noreferrer" className={externalLink}>
                <i className="fab fa-github" /> GitHub
              </a>
            )}
            {project.demo_url && (
              <a href={project.demo_url} target="_blank" rel="noopener noreferrer" className={externalLink}>
                <i className="fa fa-globe" /> Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

const STATUS_FILTERS = [
  { value: "all", label: "Tümü" },
  { value: "active", label: "Aktif" },
  { value: "done", label: "Tamamlanan" },
  { value: "plan", label: "Planlanan" },
];

function ResearchProjectsTab() {
  const { data, isLoading, error } = useProjects();
  const [filter, setFilter] = useState("all");
  const projects = (data || []).filter((p) => filter === "all" || p.status === filter);

  return (
    <>
      <div className="flex gap-2 mb-8 flex-wrap" aria-label="Araştırma projesi durum filtresi">
        {STATUS_FILTERS.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setFilter(option.value)}
            aria-pressed={filter === option.value}
            className={filterButton(filter === option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
      {isLoading && <GridSkeleton />}
      {error && <ErrorState message="Araştırma projeleri yüklenirken hata oluştu." />}
      {!isLoading && !error && projects.length === 0 && (
        <EmptyState message="Bu kategoride araştırma projesi bulunmuyor." />
      )}
      {!isLoading && !error && projects.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.07}>
              <ResearchProjectCard project={project} to={`/projeler/arastirma/${project.id}`} />
            </Reveal>
          ))}
        </div>
      )}
    </>
  );
}

const studentNames = (project: InternshipProject) =>
  project.students
    .map((s) => s.name)
    .filter(Boolean)
    .join(", ");

function InternshipProjectCard({ project }: { project: InternshipProject }) {
  const students = studentNames(project);
  return (
    <article className={`${cardBase} h-full hover:border-gray-200 hover:shadow-lg transition-all duration-300`}>
      <Link
        to={`/projeler/staj/${project.slug}`}
        aria-label={`${project.title} staj projesi detaylarını görüntüle`}
        className="absolute inset-0 z-[1] rounded-xl"
      />
      <div className="relative h-44 bg-gray-50 flex items-center justify-center overflow-hidden">
        {project.coverImageUrl ? (
          <img
            src={project.coverImageUrl}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <i className="fa fa-laptop-code text-3xl text-gray-300" aria-hidden="true" />
        )}
        <span className="absolute top-3 right-3 text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-cyan/10 text-cyan-dim">
          Staj Projesi
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-navy text-[15px] leading-snug mb-2">{project.title}</h3>
        {project.summary && (
          <p className="text-gray-400 text-[13px] leading-relaxed line-clamp-2 mb-3">{project.summary}</p>
        )}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] text-gray-400">
          {students && (
            <span>
              <i className="fa fa-user-graduate mr-1" aria-hidden="true" />
              {students}
            </span>
          )}
          {project.category && (
            <span>
              <i className="fa fa-tag mr-1" aria-hidden="true" />
              {project.category}
            </span>
          )}
          <span>
            <i className="fa fa-calendar mr-1" aria-hidden="true" />
            {project.year}
          </span>
        </div>
      </div>
    </article>
  );
}

function InternshipProjectsTab() {
  const { data, isLoading, error, refetch } = useInternshipProjects();
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("all");

  const years = useMemo(() => Array.from(new Set((data || []).map((p) => p.year))).sort((a, b) => b - a), [data]);

  // Free-text search over title, summary, category and student names (Turkish-aware lower-casing).
  const projects = useMemo(() => {
    const query = search.trim().toLocaleLowerCase("tr-TR");
    return (data || []).filter((project) => {
      const yearMatches = year === "all" || String(project.year) === year;
      const haystack = [project.title, project.summary, project.category, studentNames(project)]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase("tr-TR");
      return yearMatches && (!query || haystack.includes(query));
    });
  }, [data, search, year]);

  return (
    <>
      <div className="grid sm:grid-cols-[minmax(0,1fr)_12rem] gap-3 mb-8">
        <label className="relative">
          <span className="sr-only">Staj projelerinde ara</span>
          <i className="fa fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" aria-hidden="true" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Başlık, kategori veya öğrenci ara"
            className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-11 pr-4 text-sm text-navy placeholder:text-gray-400 focus:border-cyan"
          />
        </label>
        <label>
          <span className="sr-only">Yıla göre filtrele</span>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-navy focus:border-cyan"
          >
            <option value="all">Tüm yıllar</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </label>
      </div>
      {isLoading && <GridSkeleton />}
      {error && (
        <div className="text-center">
          <ErrorState message="Staj projeleri yüklenirken hata oluştu. Araştırma projelerini görüntülemeye devam edebilirsiniz." />
          <button type="button" onClick={() => refetch()} className="btn-cyber -mt-8">
            <i className="fa fa-rotate-right" aria-hidden="true" /> Yeniden dene
          </button>
        </div>
      )}
      {!isLoading && !error && projects.length === 0 && (
        <EmptyState
          message={
            data?.length ? "Aramanızla eşleşen staj projesi bulunmuyor." : "Henüz yayınlanmış staj projesi bulunmuyor."
          }
        />
      )}
      {!isLoading && !error && projects.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.07}>
              <InternshipProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      )}
    </>
  );
}

export default function Projects() {
  const [params, setParams] = useSearchParams();
  // Active tab lives in ?tur= so detail pages can link back to the right tab.
  const tab = params.get("tur") === "staj" ? "staj" : "arastirma";
  const selectTab = (next: string) => {
    const updated = new URLSearchParams(params);
    updated.set("tur", next);
    setParams(updated);
  };

  return (
    <>
      <PageHeader
        icon="fa-folder-open"
        title="Projeler"
        subtitle="Araştırma çalışmalarımızı ve öğrenci staj projelerini keşfedin"
      />
      <section className="py-12 bg-gray-50/50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className="inline-flex max-w-full gap-1 p-1 mb-8 rounded-2xl bg-white border border-gray-200"
            role="tablist"
            aria-label="Proje türü"
          >
            <button
              type="button"
              role="tab"
              aria-selected={tab === "arastirma"}
              onClick={() => selectTab("arastirma")}
              className={tabButton(tab === "arastirma")}
            >
              Araştırma Projeleri
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === "staj"}
              onClick={() => selectTab("staj")}
              className={tabButton(tab === "staj")}
            >
              Staj Projeleri
            </button>
          </div>
          <div role="tabpanel">{tab === "arastirma" ? <ResearchProjectsTab /> : <InternshipProjectsTab />}</div>
        </div>
      </section>
    </>
  );
}
