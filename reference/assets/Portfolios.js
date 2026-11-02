import { i as getReact } from "./vendor-dist.js";
import {
  D as useSearchParams,
  E as useParams,
  w as Link,
} from "./index.js";
import data from "./portfolioData.js";

const { createElement: h, useEffect, useMemo, useRef, useState } = getReact();
const pageTitle = "Portfolyolar | CyberSense Laboratuvarı";
const slug = (value) =>
  value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
const authors = Array.from(
  new Map(
    data.projects
      .flatMap((project) => project.authors)
      .map((author) => [slug(author.name), author]),
  ).entries(),
).sort((a, b) => a[1].name.localeCompare(b[1].name, "tr"));
const categoryLabel = (id) =>
  data.categories.find((category) => category.id === id)?.label || id;
const icon = (name, extra = "") =>
  h("i", { className: `fa ${name} ${extra}`, "aria-hidden": true });
const assetAlt = (project, index) => `${project.title} — görsel ${index + 1}`;

function Avatar({ author, small = false }) {
  return h(
    "span",
    { className: `pf-avatar${small ? " pf-avatar-small" : ""}` },
    author.avatarImage
      ? h("img", {
          src: author.avatarImage,
          alt: "",
          loading: "lazy",
          width: 48,
          height: 48,
        })
      : author.avatar || author.name.slice(0, 1),
  );
}

function ExternalLink({ href, children, secondary = false }) {
  if (!href || !/^https:\/\//i.test(href)) return null;
  return h(
    "a",
    {
      href,
      target: "_blank",
      rel: "noopener noreferrer",
      className: secondary ? "pf-button pf-button-secondary" : "pf-button",
    },
    children,
    icon("fa-arrow-up-right-from-square"),
  );
}

function Hero({ detail, query }) {
  const heading = h(
    "div",
    null,
    h(
      "h1",
      null,
      icon(detail ? "fa-laptop-code" : "fa-briefcase"),
      detail ? detail.title : "Portfolyolar",
    ),
    h(
      "p",
      null,
      detail
        ? `${categoryLabel(detail.category)} · ${detail.authors.map((author) => author.name).join(", ")}`
        : "Katılımcılarımızın tasarım ve yazılım çalışmalarını keşfedin.",
    ),
  );
  const summary =
    !detail &&
    h(
      "div",
      { className: "pf-summary" },
      [
        [data.projects.length, "Proje"],
        [authors.length, "Katılımcı"],
        [data.categories.length, "Kategori"],
      ].map(([count, label]) =>
        h(
          "div",
          { key: label },
          h("strong", null, count),
          h("span", null, label),
        ),
      ),
    );
  return h(
    "section",
    { className: "pf-hero" },
    h(
      "div",
      { className: "pf-container" },
      detail &&
        h(
          Link,
          { to: `/portfolyolar${query}`, className: "pf-back" },
          icon("fa-arrow-left"),
          "Portfolyolara dön",
        ),
      h("div", { className: "pf-hero-row" }, heading, summary),
    ),
  );
}

function PortfolioCard({ project, query }) {
  return h(
    "article",
    { className: "pf-card" },
    h(
      Link,
      { to: `/portfolyolar/${project.id}${query}`, className: "pf-card-link" },
      h(
        "div",
        {
          className: `pf-cover${project.category === "mobile" && project.galleryStyle !== "wide" ? " pf-cover-mobile" : ""}`,
        },
        h("img", {
          src: project.images[0],
          alt: `${project.title} ön izlemesi`,
          loading: "lazy",
          width: 720,
          height: 405,
        }),
        h(
          "span",
          { className: "pf-category" },
          categoryLabel(project.category),
        ),
        project.images.length > 1 &&
          h(
            "span",
            { className: "pf-image-count" },
            icon("fa-images"),
            project.images.length,
          ),
      ),
      h(
        "div",
        { className: "pf-card-body" },
        h(
          "div",
          { className: "pf-card-authors" },
          project.authors.map((author) =>
            h(
              "span",
              { key: author.name },
              h(Avatar, { author, small: true }),
              author.name,
            ),
          ),
        ),
        h("h2", null, project.title),
        h("p", { className: "pf-description" }, project.description),
        h(
          "ul",
          { className: "pf-tags", "aria-label": "Teknolojiler" },
          project.tech.slice(0, 3).map((tech) => h("li", { key: tech }, tech)),
          project.tech.length > 3 &&
            h("li", null, `+${project.tech.length - 3}`),
        ),
      ),
    ),
  );
}

function PortfolioList() {
  const [params, setParams] = useSearchParams();
  const query = params.toString() ? `?${params}` : "";
  const category = data.categories.some(
    (item) => item.id === params.get("kategori"),
  )
    ? params.get("kategori")
    : "";
  const author = authors.some(([id]) => id === params.get("yazar"))
    ? params.get("yazar")
    : "";
  const search = params.get("q") || "";
  const filtered = useMemo(
    () =>
      data.projects.filter(
        (project) =>
          (!category || project.category === category) &&
          (!author ||
            project.authors.some((person) => slug(person.name) === author)) &&
          (!search.trim() ||
            `${project.title} ${project.description} ${project.authors.map((person) => person.name).join(" ")} ${project.tech.join(" ")}`
              .toLocaleLowerCase("tr-TR")
              .includes(search.trim().toLocaleLowerCase("tr-TR"))),
      ),
    [category, author, search],
  );
  const change = (key, value) => {
    const next = new URLSearchParams(params);
    value ? next.set(key, value) : next.delete(key);
    setParams(next, { replace: true });
  };
  const hasFilters = Boolean(category || author || search);
  return h(
    "div",
    { className: "pf-page" },
    h(Hero),
    h(
      "section",
      {
        className: "pf-container pf-content",
        "aria-label": "Portfolyo koleksiyonu",
      },
      h(
        "div",
        { className: "pf-filters" },
        h(
          "div",
          { className: "pf-filter-heading" },
          h("h2", null, "Çalışmaları keşfedin"),
          h(
            "p",
            null,
            "Bir katılımcı veya kategori seçerek portfolyolara göz atın.",
          ),
        ),
        h(
          "div",
          {
            className: "pf-author-filters",
            role: "group",
            "aria-label": "Katılımcıya göre filtrele",
          },
          h(
            "button",
            {
              type: "button",
              className: `pf-author-filter${!author ? " is-active" : ""}`,
              "aria-pressed": !author,
              onClick: () => change("yazar", ""),
            },
            h("span", { className: "pf-avatar" }, icon("fa-users")),
            h("span", null, "Tüm katılımcılar"),
          ),
          authors.map(([id, person]) =>
            h(
              "button",
              {
                key: id,
                type: "button",
                className: `pf-author-filter${author === id ? " is-active" : ""}`,
                "aria-pressed": author === id,
                onClick: () => change("yazar", author === id ? "" : id),
              },
              h(Avatar, { author: person }),
              h("span", null, person.name),
            ),
          ),
        ),
        h(
          "div",
          { className: "pf-filter-bottom" },
          h(
            "div",
            {
              className: "pf-categories",
              role: "group",
              "aria-label": "Kategoriye göre filtrele",
            },
            [{ id: "", label: "Tümü" }, ...data.categories].map((item) =>
              h(
                "button",
                {
                  key: item.id,
                  type: "button",
                  className: `pf-category-filter${category === item.id ? " is-active" : ""}`,
                  "aria-pressed": category === item.id,
                  onClick: () => change("kategori", item.id),
                },
                item.label,
              ),
            ),
          ),
          h(
            "label",
            { className: "pf-search" },
            icon("fa-magnifying-glass"),
            h("span", { className: "pf-sr-only" }, "Portfolyolarda ara"),
            h("input", {
              type: "search",
              value: search,
              placeholder: "Proje, katılımcı veya teknoloji ara",
              onChange: (event) => change("q", event.target.value),
            }),
          ),
        ),
      ),
      h(
        "div",
        { className: "pf-results" },
        h(
          "p",
          { role: "status", "aria-live": "polite" },
          h("strong", null, filtered.length),
          " proje",
          hasFilters ? ` / ${data.projects.length} proje` : " listeleniyor",
        ),
        hasFilters &&
          h(
            "button",
            {
              type: "button",
              className: "pf-clear",
              onClick: () => setParams({}, { replace: true }),
            },
            icon("fa-xmark"),
            "Filtreleri temizle",
          ),
      ),
      filtered.length
        ? h(
            "div",
            { className: "pf-grid" },
            filtered.map((project) =>
              h(PortfolioCard, { key: project.id, project, query }),
            ),
          )
        : h(
            "div",
            { className: "pf-empty" },
            icon("fa-magnifying-glass"),
            h("h2", null, "Eşleşen portfolyo bulunamadı"),
            h("p", null, "Başka bir arama deneyin veya filtreleri temizleyin."),
            h(
              "button",
              {
                type: "button",
                className: "pf-button",
                onClick: () => setParams({}, { replace: true }),
              },
              "Tüm portfolyoları göster",
            ),
          ),
    ),
  );
}

function Lightbox({ project, index, onClose, onChange }) {
  const dialog = useRef(null);
  const closeButton = useRef(null);
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    dialog.current.showModal();
    closeButton.current.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);
  return h(
    "dialog",
    {
      ref: dialog,
      className: "pf-lightbox",
      "aria-labelledby": "pf-lightbox-title",
      onClose,
      onClick: (event) => {
        if (event.target === event.currentTarget) onClose();
      },
      onKeyDown: (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          onChange((index - 1 + project.images.length) % project.images.length);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          onChange((index + 1) % project.images.length);
        }
      },
    },
    h(
      "div",
      { className: "pf-lightbox-bar" },
      h("p", { id: "pf-lightbox-title" }, project.title),
      h(
        "button",
        {
          type: "button",
          ref: closeButton,
          onClick: onClose,
          "aria-label": "Görseli kapat",
        },
        icon("fa-xmark"),
      ),
    ),
    h("img", {
      className: "pf-lightbox-image",
      src: project.images[index],
      alt: assetAlt(project, index),
    }),
    h(
      "div",
      { className: "pf-lightbox-controls" },
      project.images.length > 1 &&
        h(
          "button",
          {
            type: "button",
            onClick: () =>
              onChange(
                (index - 1 + project.images.length) % project.images.length,
              ),
            "aria-label": "Önceki görsel",
          },
          icon("fa-arrow-left"),
        ),
      h("span", { role: "status" }, `${index + 1} / ${project.images.length}`),
      project.images.length > 1 &&
        h(
          "button",
          {
            type: "button",
            onClick: () => onChange((index + 1) % project.images.length),
            "aria-label": "Sonraki görsel",
          },
          icon("fa-arrow-right"),
        ),
    ),
  );
}

function PortfolioDetail({ project }) {
  const [params] = useSearchParams();
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const query = params.toString() ? `?${params}` : "";
  const gallery = h(
    "section",
    { className: "pf-gallery", "aria-label": "Proje görselleri" },
    h(
      "button",
      {
        type: "button",
        className: "pf-gallery-main",
        onClick: () => setLightbox(selected),
        "aria-label": `${assetAlt(project, selected)} — büyüt`,
      },
      h("img", {
        src: project.images[selected],
        alt: assetAlt(project, selected),
      }),
      h("span", { className: "pf-zoom" }, icon("fa-expand"), "Görseli büyüt"),
    ),
    project.images.length > 1 &&
      h(
        "div",
        {
          className: "pf-thumbnails",
          role: "group",
          "aria-label": "Görsel seç",
        },
        project.images.map((image, index) =>
          h(
            "button",
            {
              key: image,
              type: "button",
              className: selected === index ? "is-active" : "",
              "aria-label": `${index + 1}. görseli göster`,
              "aria-pressed": selected === index,
              onClick: () => setSelected(index),
            },
            h("img", { src: image, alt: "", loading: "lazy" }),
          ),
        ),
      ),
  );
  const info = h(
    "aside",
    { className: "pf-project-info" },
    h(
      "span",
      { className: "pf-detail-category" },
      categoryLabel(project.category),
    ),
    h("h2", null, "Proje hakkında"),
    h("p", null, project.description),
    h("h3", null, "Katılımcılar"),
    h(
      "div",
      { className: "pf-detail-authors" },
      project.authors.map((person) =>
        h(
          "div",
          { key: person.name, className: "pf-person" },
          h(Avatar, { author: person }),
          h(
            "div",
            null,
            h("strong", null, person.name),
            person.role && h("span", null, person.role),
          ),
        ),
      ),
    ),
    h("h3", null, "Teknolojiler"),
    h(
      "ul",
      { className: "pf-tags" },
      project.tech.map((tech) => h("li", { key: tech }, tech)),
    ),
    (project.liveUrl || project.githubUrl) &&
      h(
        "div",
        { className: "pf-project-links" },
        project.liveUrl &&
          h(
            ExternalLink,
            { href: project.liveUrl },
            /behance\.net/.test(project.liveUrl)
              ? "Tasarımı incele"
              : /linkedin\.com/.test(project.liveUrl)
                ? "İlgili sayfayı aç"
                : "Siteyi ziyaret et",
          ),
        project.githubUrl &&
          h(
            ExternalLink,
            { href: project.githubUrl, secondary: true },
            h("i", { className: "fab fa-github", "aria-hidden": true }),
            "GitHub",
          ),
      ),
  );
  const features = h(
    "section",
    { className: "pf-features", "aria-labelledby": "pf-features-title" },
    h("h2", { id: "pf-features-title" }, "Öne çıkan özellikler"),
    h(
      "ul",
      null,
      project.features.map((feature) =>
        h("li", { key: feature }, icon("fa-check"), h("span", null, feature)),
      ),
    ),
  );
  return h(
    "div",
    { className: "pf-page" },
    h(Hero, { detail: project, query }),
    h(
      "div",
      { className: "pf-container pf-content" },
      h("div", { className: "pf-detail-grid" }, gallery, info),
      features,
    ),
    lightbox !== null &&
      h(Lightbox, {
        project,
        index: lightbox,
        onChange: setLightbox,
        onClose: () => setLightbox(null),
      }),
  );
}

export default function Portfolios() {
  const { id } = useParams();
  const project = data.projects.find((item) => item.id === id);
  useEffect(() => {
    const oldTitle = document.title;
    document.title = project
      ? `${project.title} | CyberSense Laboratuvarı`
      : pageTitle;
    return () => {
      document.title = oldTitle;
    };
  }, [id]);
  if (!id) return h(PortfolioList);
  if (project) return h(PortfolioDetail, { project, key: project.id });
  return h(
    "div",
    { className: "pf-page" },
    h(Hero),
    h(
      "div",
      { className: "pf-container pf-empty" },
      icon("fa-folder-open"),
      h("h2", null, "Portfolyo bulunamadı"),
      h("p", null, "Aradığınız çalışma mevcut değil."),
      h(
        Link,
        { to: "/portfolyolar", className: "pf-button" },
        "Portfolyolara dön",
      ),
    ),
  );
}
