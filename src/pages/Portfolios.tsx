import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Link, useParams, useSearchParams } from "react-router";
import {
  PORTFOLIO_CATEGORIES,
  usePortfolios,
  type PortfolioAuthor,
  type PortfolioProject,
} from "../lib/portfolios";
import { ErrorState, LoadingState } from "../components/ui/UIStates";
import "../styles/portfolios.css";

// Portfolio showcase (/portfolyolar and /portfolyolar/:id) with its own stylesheet (pf-*).
// Ported from reference/assets/Portfolios.js; data now comes from Supabase (admin-managed).

const PAGE_TITLE = "Portfolyolar | CyberSense Laboratuvarı";

const slugify = (value: string) =>
  value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Unique authors across all projects as [slug, author], sorted by Turkish collation. */
function uniqueAuthors(projects: PortfolioProject[]): [string, PortfolioAuthor][] {
  return Array.from(
    new Map(projects.flatMap((project) => project.authors).map((author) => [slugify(author.name), author])).entries(),
  ).sort((a, b) => a[1].name.localeCompare(b[1].name, "tr"));
}

type Stats = { projects: number; authors: number };
const statsOf = (projects: PortfolioProject[]): Stats => ({
  projects: projects.length,
  authors: uniqueAuthors(projects).length,
});

const categoryLabel = (id: string) => PORTFOLIO_CATEGORIES.find((category) => category.id === id)?.label || id;
const Icon = ({ name }: { name: string }) => <i className={`fa ${name} `} aria-hidden />;
const imageAlt = (project: PortfolioProject, index: number) => `${project.title} — görsel ${index + 1}`;

function Avatar({ author, small = false }: { author: PortfolioAuthor; small?: boolean }) {
  return (
    <span className={`pf-avatar${small ? " pf-avatar-small" : ""}`}>
      {author.avatarImage ? (
        <img src={author.avatarImage} alt="" loading="lazy" width={48} height={48} />
      ) : (
        author.avatar || author.name.slice(0, 1)
      )}
    </span>
  );
}

/** Only https links are rendered. */
function ExternalLink({ href, children, secondary = false }: { href?: string; children: ReactNode; secondary?: boolean }) {
  if (!href || !/^https:\/\//i.test(href)) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={secondary ? "pf-button pf-button-secondary" : "pf-button"}
    >
      {children}
      <Icon name="fa-arrow-up-right-from-square" />
    </a>
  );
}

function Hero({ detail, query = "", stats }: { detail?: PortfolioProject; query?: string; stats?: Stats }) {
  return (
    <section className="pf-hero">
      <div className="pf-container">
        {detail && (
          <Link to={`/portfolyolar${query}`} className="pf-back">
            <Icon name="fa-arrow-left" />
            Portfolyolara dön
          </Link>
        )}
        <div className="pf-hero-row">
          <div>
            <h1>
              <Icon name={detail ? "fa-laptop-code" : "fa-briefcase"} />
              {detail ? detail.title : "Portfolyolar"}
            </h1>
            <p>
              {detail
                ? `${categoryLabel(detail.category)} · ${detail.authors.map((author) => author.name).join(", ")}`
                : "Katılımcılarımızın tasarım ve yazılım çalışmalarını keşfedin."}
            </p>
          </div>
          {!detail && stats && (
            <div className="pf-summary">
              {(
                [
                  [stats.projects, "Proje"],
                  [stats.authors, "Katılımcı"],
                  [PORTFOLIO_CATEGORIES.length, "Kategori"],
                ] as const
              ).map(([count, label]) => (
                <div key={label}>
                  <strong>{count}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ project, query }: { project: PortfolioProject; query: string }) {
  const portraitCover = project.category === "mobile" && project.galleryStyle !== "wide";
  return (
    <article className="pf-card">
      <Link to={`/portfolyolar/${project.id}${query}`} className="pf-card-link">
        <div className={`pf-cover${portraitCover ? " pf-cover-mobile" : ""}`}>
          <img src={project.images[0]} alt={`${project.title} ön izlemesi`} loading="lazy" width={720} height={405} />
          <span className="pf-category">{categoryLabel(project.category)}</span>
          {project.images.length > 1 && (
            <span className="pf-image-count">
              <Icon name="fa-images" />
              {project.images.length}
            </span>
          )}
        </div>
        <div className="pf-card-body">
          <div className="pf-card-authors">
            {project.authors.map((author) => (
              <span key={author.name}>
                <Avatar author={author} small />
                {author.name}
              </span>
            ))}
          </div>
          <h2>{project.title}</h2>
          <p className="pf-description">{project.description}</p>
          <ul className="pf-tags" aria-label="Teknolojiler">
            {project.tech.slice(0, 3).map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
            {project.tech.length > 3 && <li>{`+${project.tech.length - 3}`}</li>}
          </ul>
        </div>
      </Link>
    </article>
  );
}

const CATEGORY_OPTIONS = [{ id: "", label: "Tümü" }, ...PORTFOLIO_CATEGORIES];

// Filters live in the URL (?kategori=, ?yazar=, ?q=) so a filtered list can be shared and
// the detail page's back link returns to the same view.
function PortfolioList({ projects }: { projects: PortfolioProject[] }) {
  const [params, setParams] = useSearchParams();
  const query = params.toString() ? `?${params}` : "";
  const authors = useMemo(() => uniqueAuthors(projects), [projects]);
  const category = PORTFOLIO_CATEGORIES.some((item) => item.id === params.get("kategori")) ? params.get("kategori")! : "";
  const author = authors.some(([id]) => id === params.get("yazar")) ? params.get("yazar")! : "";
  const search = params.get("q") || "";

  const filtered = useMemo(() => {
    const term = search.trim().toLocaleLowerCase("tr-TR");
    return projects.filter((project) => {
      const haystack = `${project.title} ${project.description} ${project.authors.map((p) => p.name).join(" ")} ${project.tech.join(" ")}`;
      return (
        (!category || project.category === category) &&
        (!author || project.authors.some((person) => slugify(person.name) === author)) &&
        (!term || haystack.toLocaleLowerCase("tr-TR").includes(term))
      );
    });
  }, [projects, category, author, search]);

  const change = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };
  const clearFilters = () => setParams({}, { replace: true });
  const hasFilters = Boolean(category || author || search);

  return (
    <div className="pf-page">
      <Hero stats={statsOf(projects)} />
      <section className="pf-container pf-content" aria-label="Portfolyo koleksiyonu">
        <div className="pf-filters">
          <div className="pf-filter-heading">
            <h2>Çalışmaları keşfedin</h2>
            <p>Bir katılımcı veya kategori seçerek portfolyolara göz atın.</p>
          </div>
          <div className="pf-author-filters" role="group" aria-label="Katılımcıya göre filtrele">
            <button
              type="button"
              className={`pf-author-filter${!author ? " is-active" : ""}`}
              aria-pressed={!author}
              onClick={() => change("yazar", "")}
            >
              <span className="pf-avatar">
                <Icon name="fa-users" />
              </span>
              <span>Tüm katılımcılar</span>
            </button>
            {authors.map(([id, person]) => (
              <button
                key={id}
                type="button"
                className={`pf-author-filter${author === id ? " is-active" : ""}`}
                aria-pressed={author === id}
                onClick={() => change("yazar", author === id ? "" : id)}
              >
                <Avatar author={person} />
                <span>{person.name}</span>
              </button>
            ))}
          </div>
          <div className="pf-filter-bottom">
            <div className="pf-categories" role="group" aria-label="Kategoriye göre filtrele">
              {CATEGORY_OPTIONS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`pf-category-filter${category === item.id ? " is-active" : ""}`}
                  aria-pressed={category === item.id}
                  onClick={() => change("kategori", item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <label className="pf-search">
              <Icon name="fa-magnifying-glass" />
              <span className="pf-sr-only">Portfolyolarda ara</span>
              <input
                type="search"
                value={search}
                placeholder="Proje, katılımcı veya teknoloji ara"
                onChange={(event) => change("q", event.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="pf-results">
          <p role="status" aria-live="polite">
            <strong>{filtered.length}</strong> proje
            {hasFilters ? ` / ${projects.length} proje` : " listeleniyor"}
          </p>
          {hasFilters && (
            <button type="button" className="pf-clear" onClick={clearFilters}>
              <Icon name="fa-xmark" />
              Filtreleri temizle
            </button>
          )}
        </div>
        {filtered.length ? (
          <div className="pf-grid">
            {filtered.map((project) => (
              <PortfolioCard key={project.id} project={project} query={query} />
            ))}
          </div>
        ) : (
          <div className="pf-empty">
            <Icon name="fa-magnifying-glass" />
            <h2>Eşleşen portfolyo bulunamadı</h2>
            <p>Başka bir arama deneyin veya filtreleri temizleyin.</p>
            <button type="button" className="pf-button" onClick={clearFilters}>
              Tüm portfolyoları göster
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

type LightboxProps = {
  project: PortfolioProject;
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

/** Native <dialog> lightbox: focus moves to the close button and returns on close; ←/→ change image. */
function Lightbox({ project, index, onClose, onChange }: LightboxProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const count = project.images.length;

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialog.current?.showModal();
    closeButton.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  return (
    <dialog
      ref={dialog}
      className="pf-lightbox"
      aria-labelledby="pf-lightbox-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          onChange((index - 1 + count) % count);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          onChange((index + 1) % count);
        }
      }}
    >
      <div className="pf-lightbox-bar">
        <p id="pf-lightbox-title">{project.title}</p>
        <button type="button" ref={closeButton} onClick={onClose} aria-label="Görseli kapat">
          <Icon name="fa-xmark" />
        </button>
      </div>
      <img className="pf-lightbox-image" src={project.images[index]} alt={imageAlt(project, index)} />
      <div className="pf-lightbox-controls">
        {count > 1 && (
          <button type="button" onClick={() => onChange((index - 1 + count) % count)} aria-label="Önceki görsel">
            <Icon name="fa-arrow-left" />
          </button>
        )}
        <span role="status">{`${index + 1} / ${count}`}</span>
        {count > 1 && (
          <button type="button" onClick={() => onChange((index + 1) % count)} aria-label="Sonraki görsel">
            <Icon name="fa-arrow-right" />
          </button>
        )}
      </div>
    </dialog>
  );
}

function liveLinkLabel(url: string) {
  if (/behance\.net/.test(url)) return "Tasarımı incele";
  if (/linkedin\.com/.test(url)) return "İlgili sayfayı aç";
  return "Siteyi ziyaret et";
}

function PortfolioDetail({ project }: { project: PortfolioProject }) {
  const [params] = useSearchParams();
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  // Carry list filters over so "Portfolyolara dön" restores the same view.
  const query = params.toString() ? `?${params}` : "";

  return (
    <div className="pf-page">
      <Hero detail={project} query={query} />
      <div className="pf-container pf-content">
        <div className="pf-detail-grid">
          <section className="pf-gallery" aria-label="Proje görselleri">
            <button
              type="button"
              className="pf-gallery-main"
              onClick={() => setLightbox(selected)}
              aria-label={`${imageAlt(project, selected)} — büyüt`}
            >
              <img src={project.images[selected]} alt={imageAlt(project, selected)} />
              <span className="pf-zoom">
                <Icon name="fa-expand" />
                Görseli büyüt
              </span>
            </button>
            {project.images.length > 1 && (
              <div className="pf-thumbnails" role="group" aria-label="Görsel seç">
                {project.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    className={selected === index ? "is-active" : ""}
                    aria-label={`${index + 1}. görseli göster`}
                    aria-pressed={selected === index}
                    onClick={() => setSelected(index)}
                  >
                    <img src={image} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </section>

          <aside className="pf-project-info">
            <span className="pf-detail-category">{categoryLabel(project.category)}</span>
            <h2>Proje hakkında</h2>
            <p>{project.description}</p>
            <h3>Katılımcılar</h3>
            <div className="pf-detail-authors">
              {project.authors.map((person) => (
                <div key={person.name} className="pf-person">
                  <Avatar author={person} />
                  <div>
                    <strong>{person.name}</strong>
                    {person.role && <span>{person.role}</span>}
                  </div>
                </div>
              ))}
            </div>
            <h3>Teknolojiler</h3>
            <ul className="pf-tags">
              {project.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            {(project.liveUrl || project.githubUrl) && (
              <div className="pf-project-links">
                {project.liveUrl && <ExternalLink href={project.liveUrl}>{liveLinkLabel(project.liveUrl)}</ExternalLink>}
                {project.githubUrl && (
                  <ExternalLink href={project.githubUrl} secondary>
                    <i className="fab fa-github" aria-hidden />
                    GitHub
                  </ExternalLink>
                )}
              </div>
            )}
          </aside>
        </div>

        <section className="pf-features" aria-labelledby="pf-features-title">
          <h2 id="pf-features-title">Öne çıkan özellikler</h2>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>
                <Icon name="fa-check" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      {lightbox !== null && (
        <Lightbox project={project} index={lightbox} onChange={setLightbox} onClose={() => setLightbox(null)} />
      )}
    </div>
  );
}

export default function Portfolios() {
  const { id } = useParams();
  const { data: projects, isLoading, error } = usePortfolios();
  const project = projects?.find((item) => item.id === id);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = project ? `${project.title} | CyberSense Laboratuvarı` : PAGE_TITLE;
    return () => {
      document.title = previousTitle;
    };
  }, [id, project]);

  if (isLoading) return <LoadingState text="Portfolyolar yükleniyor..." />;
  if (error || !projects) return <ErrorState message="Portfolyolar yüklenirken hata oluştu." />;
  if (!id) return <PortfolioList projects={projects} />;
  if (project) return <PortfolioDetail key={project.id} project={project} />;
  return (
    <div className="pf-page">
      <Hero stats={statsOf(projects)} />
      <div className="pf-container pf-empty">
        <Icon name="fa-folder-open" />
        <h2>Portfolyo bulunamadı</h2>
        <p>Aradığınız çalışma mevcut değil.</p>
        <Link to="/portfolyolar" className="pf-button">
          Portfolyolara dön
        </Link>
      </div>
    </div>
  );
}
