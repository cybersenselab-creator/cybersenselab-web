import { n as e } from "./vendor-dist.js";
import { w as t } from "./index.js";
import { n } from "./utils.js";
var r = e(),
  i = `rounded-2xl border border-gray-100 bg-white p-6 shadow-sm`;
function a(e) {
  return e
    .trim()
    .toLocaleLowerCase(`tr-TR`)
    .normalize(`NFD`)
    .replace(/[\u0300-\u036f]/g, ``)
    .replace(/ı/g, `i`)
    .replace(/[^a-z0-9]+/g, `_`)
    .replace(/^_+|_+$/g, ``);
}
function o(e) {
  let t = a(e.key),
    n = a(e.title);
  return (
    t === `limitations` ||
    t.endsWith(`_limitations`) ||
    n === `koddan_gorulen_sinirlar`
  );
}
function s(e) {
  return Array.isArray(e)
    ? e.filter((e) => typeof e == `string` && !!e.trim())
    : [];
}
function c(e) {
  return Array.isArray(e)
    ? e.filter((e) => !!e && typeof e == `object` && !Array.isArray(e))
    : [];
}
function l({ index: e, title: t, id: n }) {
  return (0, r.jsxs)(`div`, {
    className: `flex items-start gap-4 mb-6`,
    children: [
      (0, r.jsx)(`span`, {
        className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan/10 font-extrabold text-cyan-dim`,
        children: String(e + 1).padStart(2, `0`),
      }),
      (0, r.jsx)(`h2`, {
        id: n,
        className: `pt-1 text-xl font-bold text-navy sm:text-2xl`,
        children: t,
      }),
    ],
  });
}
function u({ media: e }) {
  return e.length
    ? (0, r.jsx)(`div`, {
        className: `grid gap-4 sm:grid-cols-2`,
        children: e.map((e) =>
          (0, r.jsxs)(
            `figure`,
            {
              className: `overflow-hidden rounded-xl border border-gray-100 bg-gray-50`,
              children: [
                (0, r.jsx)(`img`, {
                  src: e.url,
                  alt: e.alt,
                  className: `h-auto max-h-[32rem] w-full object-contain`,
                  loading: `lazy`,
                }),
                e.caption &&
                  (0, r.jsx)(`figcaption`, {
                    className: `px-4 py-3 text-xs leading-relaxed text-gray-500`,
                    children: e.caption,
                  }),
              ],
            },
            e.id,
          ),
        ),
      })
    : null;
}
function d({ section: e, media: t }) {
  let n = e.content,
    i = s(n.paragraphs),
    a = s(n.items),
    o = typeof n.description == `string` ? n.description : void 0,
    l = s(n.mediaIds),
    d = l.length
      ? t.filter((e) => l.includes(e.id))
      : t.filter((t) =>
          e.type === `chart` ? t.type === `chart` : t.type === `gallery`,
        );
  if (e.type === `architecture`) {
    let e = c(n.nodes),
      t = c(n.connections);
    return (0, r.jsxs)(`div`, {
      className: `space-y-5`,
      children: [
        (0, r.jsx)(`div`, {
          className: `grid gap-3 sm:grid-cols-2 xl:grid-cols-3`,
          children: e.map((e, t) =>
            (0, r.jsxs)(
              `div`,
              {
                className: `rounded-xl border border-cyan/20 bg-cyan/5 p-4`,
                children: [
                  (0, r.jsx)(`h3`, {
                    className: `font-semibold text-navy`,
                    children: String(e.label || ``),
                  }),
                  typeof e.subtitle == `string` &&
                    (0, r.jsx)(`p`, {
                      className: `mt-1 text-sm text-gray-500`,
                      children: e.subtitle,
                    }),
                ],
              },
              String(e.id || t),
            ),
          ),
        }),
        t.length > 0 &&
          (0, r.jsx)(`ul`, {
            className: `space-y-2`,
            "aria-label": `Ağ bağlantıları`,
            children: t.map((e, t) =>
              (0, r.jsxs)(
                `li`,
                {
                  className: `flex flex-wrap items-center gap-2 rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-600`,
                  children: [
                    (0, r.jsx)(`strong`, {
                      className: `text-navy`,
                      children: String(e.from || ``),
                    }),
                    (0, r.jsx)(`i`, {
                      className: `fa fa-arrow-right text-cyan-dim`,
                      "aria-hidden": `true`,
                    }),
                    (0, r.jsx)(`strong`, {
                      className: `text-navy`,
                      children: String(e.to || ``),
                    }),
                    typeof e.label == `string` &&
                      (0, r.jsxs)(`span`, {
                        className: `text-gray-400`,
                        children: [`- `, e.label],
                      }),
                  ],
                },
                t,
              ),
            ),
          }),
      ],
    });
  }
  return e.type === `attack_list`
    ? (0, r.jsx)(`div`, {
        className: `grid gap-4 sm:grid-cols-2`,
        children: c(n.attacks).map((e, t) =>
          (0, r.jsxs)(
            `div`,
            {
              className: `rounded-xl border border-red-100 bg-red-50/40 p-5`,
              children: [
                (0, r.jsx)(`h3`, {
                  className: `font-semibold text-navy`,
                  children: String(e.name || ``),
                }),
                (0, r.jsx)(`p`, {
                  className: `mt-2 text-sm leading-relaxed text-gray-600`,
                  children: String(e.description || ``),
                }),
                typeof e.impact == `string` &&
                  (0, r.jsxs)(`p`, {
                    className: `mt-3 text-xs font-medium text-red-600`,
                    children: [`Etki: `, e.impact],
                  }),
              ],
            },
            t,
          ),
        ),
      })
    : e.type === `metrics`
      ? (0, r.jsx)(`div`, {
          className: `grid gap-4 sm:grid-cols-2`,
          children: c(n.metrics).map((e, t) =>
            (0, r.jsxs)(
              `div`,
              {
                className: `rounded-xl border border-gray-100 bg-gray-50 p-5`,
                children: [
                  (0, r.jsx)(`h3`, {
                    className: `font-semibold text-navy`,
                    children: String(e.name || ``),
                  }),
                  typeof e.shortName == `string` &&
                    (0, r.jsx)(`span`, {
                      className: `mt-1 inline-block text-xs font-bold text-cyan-dim`,
                      children: e.shortName,
                    }),
                  (0, r.jsx)(`p`, {
                    className: `mt-2 text-sm leading-relaxed text-gray-600`,
                    children: String(e.description || ``),
                  }),
                ],
              },
              t,
            ),
          ),
        })
      : e.type === `statistics`
        ? (0, r.jsxs)(`div`, {
            className: `space-y-5`,
            children: [
              (0, r.jsx)(`div`, {
                className: `grid grid-cols-2 gap-3 sm:grid-cols-4`,
                children: c(n.items).map((e, t) =>
                  (0, r.jsxs)(
                    `div`,
                    {
                      className: `rounded-xl bg-navy p-4 text-center text-white`,
                      children: [
                        (0, r.jsx)(`strong`, {
                          className: `block text-xl text-cyan`,
                          children: String(e.value || ``),
                        }),
                        (0, r.jsx)(`span`, {
                          className: `mt-1 block text-xs text-white/60`,
                          children: String(e.label || ``),
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
              o &&
                (0, r.jsx)(`p`, {
                  className: `leading-7 text-gray-600`,
                  children: o,
                }),
            ],
          })
        : e.type === `chart` || e.type === `gallery`
          ? (0, r.jsxs)(`div`, {
              className: `space-y-5`,
              children: [
                o &&
                  (0, r.jsx)(`p`, {
                    className: `leading-7 text-gray-600`,
                    children: o,
                  }),
                (0, r.jsx)(u, { media: d }),
              ],
            })
          : (0, r.jsxs)(`div`, {
              className: `space-y-4 text-[15px] leading-7 text-gray-600`,
              children: [
                i.map((e, t) => (0, r.jsx)(`p`, { children: e }, t)),
                a.length > 0 &&
                  (0, r.jsx)(`ul`, {
                    className: `space-y-2 pl-5 list-disc marker:text-cyan-dim`,
                    children: a.map((e, t) =>
                      (0, r.jsx)(`li`, { children: e }, t),
                    ),
                  }),
              ],
            });
}
function f({ title: e, subtitle: n, tab: i, metadata: a }) {
  return (0, r.jsxs)(`header`, {
    className: `relative overflow-hidden bg-navy py-12 text-white sm:py-16`,
    children: [
      (0, r.jsx)(`div`, {
        className: `absolute -left-24 top-0 h-64 w-64 rounded-full bg-cyan/10 blur-3xl`,
      }),
      (0, r.jsx)(`div`, {
        className: `absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-cyan/10 blur-3xl`,
      }),
      (0, r.jsxs)(`div`, {
        className: `relative mx-auto max-w-7xl px-4`,
        children: [
          (0, r.jsxs)(`nav`, {
            className: `mb-7 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/45`,
            "aria-label": `Sayfa yolu`,
            children: [
              (0, r.jsx)(t, {
                to: `/`,
                className: `hover:text-cyan`,
                children: `CyberSense Lab`,
              }),
              (0, r.jsx)(`span`, { "aria-hidden": `true`, children: `/` }),
              (0, r.jsx)(t, {
                to: `/projeler?tur=${i}`,
                className: `hover:text-cyan`,
                children:
                  i === `staj` ? `Staj Projeleri` : `Araştırma Projeleri`,
              }),
              (0, r.jsx)(`span`, { "aria-hidden": `true`, children: `/` }),
              (0, r.jsx)(`span`, {
                className: `text-white/70`,
                children: `Detay`,
              }),
            ],
          }),
          (0, r.jsx)(`h1`, {
            className: `max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl`,
            children: e,
          }),
          n &&
            (0, r.jsx)(`p`, {
              className: `mt-4 max-w-3xl text-base leading-7 text-white/65 sm:text-lg`,
              children: n,
            }),
          (0, r.jsx)(`div`, {
            className: `mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/55`,
            children: a,
          }),
        ],
      }),
    ],
  });
}
function p({ label: e, children: t }) {
  return (0, r.jsxs)(`div`, {
    className: `border-b border-gray-100 py-3 last:border-0`,
    children: [
      (0, r.jsx)(`dt`, {
        className: `text-[11px] font-semibold uppercase tracking-wider text-gray-400`,
        children: e,
      }),
      (0, r.jsx)(`dd`, {
        className: `mt-1 text-sm font-medium text-navy`,
        children: t,
      }),
    ],
  });
}
function m({ href: e, children: t }) {
  return (0, r.jsxs)(`a`, {
    href: e,
    target: `_blank`,
    rel: `noopener noreferrer`,
    className: `btn-outline justify-center text-xs`,
    children: [
      t,
      (0, r.jsx)(`i`, {
        className: `fa fa-arrow-up-right-from-square`,
        "aria-hidden": `true`,
      }),
    ],
  });
}
function h({ project: e }) {
  let t = e.sections.find((e) => e.key === `research_context`),
    n = e.sections.filter((e) => e.key !== `research_context` && !o(e)),
    a = t ? s(t.content.items) : [],
    c = e.students.map((e) => e.name).join(`, `);
  return (0, r.jsxs)(r.Fragment, {
    children: [
      (0, r.jsx)(f, {
        title: e.title,
        subtitle: e.subtitle || e.summary,
        tab: `staj`,
        metadata: (0, r.jsxs)(r.Fragment, {
          children: [
            c && (0, r.jsx)(`span`, { children: c }),
            e.department &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(`span`, { "aria-hidden": `true`, children: `•` }),
                  (0, r.jsx)(`span`, { children: e.department }),
                ],
              }),
            (0, r.jsx)(`span`, { "aria-hidden": `true`, children: `•` }),
            (0, r.jsx)(`span`, { children: e.year }),
            (0, r.jsx)(`span`, { "aria-hidden": `true`, children: `•` }),
            (0, r.jsx)(`span`, { children: `CyberSense Lab` }),
          ],
        }),
      }),
      (0, r.jsxs)(`div`, {
        className: `mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-[minmax(0,1fr)_20rem]`,
        children: [
          (0, r.jsx)(`article`, {
            className: `space-y-8`,
            "aria-label": `${e.title} proje içeriği`,
            children:
              n.length > 0
                ? n.map((t, n) =>
                    (0, r.jsxs)(
                      `section`,
                      {
                        className: i,
                        "aria-labelledby": `section-${t.id}`,
                        children: [
                          (0, r.jsx)(l, {
                            index: n,
                            title: t.title,
                            id: `section-${t.id}`,
                          }),
                          (0, r.jsx)(d, { section: t, media: e.media }),
                        ],
                      },
                      t.id,
                    ),
                  )
                : (0, r.jsxs)(`section`, {
                    className: i,
                    "aria-labelledby": `project-summary`,
                    children: [
                      (0, r.jsx)(l, {
                        index: 0,
                        title: `Proje Özeti`,
                        id: `project-summary`,
                      }),
                      (0, r.jsx)(`p`, {
                        className: `leading-7 text-gray-600`,
                        children:
                          e.summary ||
                          `Bu proje için henüz ayrıntılı içerik eklenmemiş.`,
                      }),
                    ],
                  }),
          }),
          (0, r.jsxs)(`aside`, {
            className: `space-y-5 lg:sticky lg:top-24 lg:self-start`,
            "aria-label": `Proje araştırma bilgileri`,
            children: [
              (0, r.jsxs)(`section`, {
                className: i,
                children: [
                  (0, r.jsx)(`h2`, {
                    className: `text-lg font-bold text-navy`,
                    children: `Proje Bilgileri`,
                  }),
                  (0, r.jsxs)(`dl`, {
                    className: `mt-3`,
                    children: [
                      c && (0, r.jsx)(p, { label: `Öğrenci`, children: c }),
                      e.department &&
                        (0, r.jsx)(p, {
                          label: `Bölüm`,
                          children: e.department,
                        }),
                      (0, r.jsx)(p, { label: `Yıl`, children: e.year }),
                      (0, r.jsx)(p, {
                        label: `Laboratuvar`,
                        children: `CyberSense Lab`,
                      }),
                      e.category &&
                        (0, r.jsx)(p, { label: `Odak`, children: e.category }),
                    ],
                  }),
                  (e.githubUrl || e.repositoryUrl) &&
                    (0, r.jsxs)(`div`, {
                      className: `mt-5 grid gap-2`,
                      children: [
                        e.githubUrl &&
                          (0, r.jsx)(m, {
                            href: e.githubUrl,
                            children: `GitHub`,
                          }),
                        e.repositoryUrl &&
                          e.repositoryUrl !== e.githubUrl &&
                          (0, r.jsx)(m, {
                            href: e.repositoryUrl,
                            children: `Proje deposu`,
                          }),
                      ],
                    }),
                ],
              }),
              e.technologies.length > 0 &&
                (0, r.jsxs)(`section`, {
                  className: i,
                  children: [
                    (0, r.jsx)(`h2`, {
                      className: `text-lg font-bold text-navy`,
                      children: `Teknik Yığın`,
                    }),
                    (0, r.jsx)(`ul`, {
                      className: `mt-4 flex flex-wrap gap-2`,
                      children: e.technologies.map((e) =>
                        (0, r.jsx)(
                          `li`,
                          {
                            className: `rounded-lg bg-cyan/10 px-3 py-1.5 text-xs font-semibold text-cyan-dim`,
                            children: e.name,
                          },
                          e.id,
                        ),
                      ),
                    }),
                  ],
                }),
              a.length > 0 &&
                (0, r.jsxs)(`section`, {
                  className: i,
                  children: [
                    (0, r.jsx)(`h2`, {
                      className: `text-lg font-bold text-navy`,
                      children: `Proje Bağlamı`,
                    }),
                    (0, r.jsx)(`ul`, {
                      className: `mt-4 space-y-2 text-sm text-gray-600`,
                      children: a.map((e, t) =>
                        (0, r.jsxs)(
                          `li`,
                          {
                            className: `flex gap-2`,
                            children: [
                              (0, r.jsx)(`span`, {
                                className: `text-cyan-dim`,
                                children: `•`,
                              }),
                              e,
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function g({ project: e }) {
  let t = n[e.status] || { cls: ``, label: e.status },
    a = [
      ...(e.image_url ? [{ image_url: e.image_url, alt_text: e.title }] : []),
      ...(e.images || []),
    ].filter(
      (e, t, n) => n.findIndex((t) => t.image_url === e.image_url) === t,
    );
  return (0, r.jsxs)(r.Fragment, {
    children: [
      (0, r.jsx)(f, {
        title: e.title,
        subtitle: e.description,
        tab: `arastirma`,
        metadata: (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(`span`, { children: t.label }),
            e.funder &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(`span`, { "aria-hidden": `true`, children: `•` }),
                  (0, r.jsx)(`span`, { children: e.funder }),
                ],
              }),
            e.date_range &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(`span`, { "aria-hidden": `true`, children: `•` }),
                  (0, r.jsx)(`span`, { children: e.date_range }),
                ],
              }),
            (0, r.jsx)(`span`, { "aria-hidden": `true`, children: `•` }),
            (0, r.jsx)(`span`, { children: `CyberSense Lab` }),
          ],
        }),
      }),
      (0, r.jsxs)(`div`, {
        className: `mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-[minmax(0,1fr)_20rem]`,
        children: [
          (0, r.jsxs)(`article`, {
            className: `space-y-8`,
            "aria-label": `${e.title} proje içeriği`,
            children: [
              (0, r.jsxs)(`section`, {
                className: i,
                "aria-labelledby": `research-summary`,
                children: [
                  (0, r.jsx)(l, {
                    index: 0,
                    title: `Proje Özeti`,
                    id: `research-summary`,
                  }),
                  (0, r.jsx)(`p`, {
                    className: `leading-7 text-gray-600`,
                    children: e.description,
                  }),
                ],
              }),
              a.length > 0 &&
                (0, r.jsxs)(`section`, {
                  className: i,
                  "aria-labelledby": `research-gallery`,
                  children: [
                    (0, r.jsx)(l, {
                      index: 1,
                      title: `Proje Görselleri`,
                      id: `research-gallery`,
                    }),
                    (0, r.jsx)(`div`, {
                      className: `grid gap-4 sm:grid-cols-2`,
                      children: a.map((t, n) =>
                        (0, r.jsx)(
                          `img`,
                          {
                            src: t.image_url,
                            alt: t.alt_text || e.title,
                            className: `h-auto max-h-[34rem] w-full rounded-xl border border-gray-100 bg-gray-50 object-contain`,
                            loading: `lazy`,
                          },
                          `${t.image_url}-${n}`,
                        ),
                      ),
                    }),
                  ],
                }),
            ],
          }),
          (0, r.jsx)(`aside`, {
            className: `space-y-5 lg:sticky lg:top-24 lg:self-start`,
            "aria-label": `Proje bilgileri`,
            children: (0, r.jsxs)(`section`, {
              className: i,
              children: [
                (0, r.jsx)(`h2`, {
                  className: `text-lg font-bold text-navy`,
                  children: `Proje Bilgileri`,
                }),
                (0, r.jsxs)(`dl`, {
                  className: `mt-3`,
                  children: [
                    (0, r.jsx)(p, { label: `Durum`, children: t.label }),
                    e.funder &&
                      (0, r.jsx)(p, {
                        label: `Fon Kaynağı`,
                        children: e.funder,
                      }),
                    e.date_range &&
                      (0, r.jsx)(p, { label: `Tarih`, children: e.date_range }),
                    e.progress_pct != null &&
                      (0, r.jsxs)(p, {
                        label: `İlerleme`,
                        children: [
                          Math.min(100, Math.max(0, e.progress_pct)),
                          `%`,
                        ],
                      }),
                  ],
                }),
                e.status === `active` &&
                  e.progress_pct != null &&
                  (0, r.jsx)(`div`, {
                    className: `mt-2 h-2 overflow-hidden rounded-full bg-gray-100`,
                    "aria-label": `İlerleme yüzde ${e.progress_pct}`,
                    children: (0, r.jsx)(`div`, {
                      className: `h-full rounded-full bg-cyan`,
                      style: {
                        width: `${Math.min(100, Math.max(0, e.progress_pct))}%`,
                      },
                    }),
                  }),
                (e.github_url || e.demo_url) &&
                  (0, r.jsxs)(`div`, {
                    className: `mt-5 grid gap-2`,
                    children: [
                      e.github_url &&
                        (0, r.jsx)(m, {
                          href: e.github_url,
                          children: `GitHub`,
                        }),
                      e.demo_url &&
                        (0, r.jsx)(m, {
                          href: e.demo_url,
                          children: `Canlı demo`,
                        }),
                    ],
                  }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
export { g as n, h as t };
