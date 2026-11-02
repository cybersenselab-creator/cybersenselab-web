import { i as e, l as t, n } from "./vendor-dist.js";
import { D as r, n as i, w as a } from "./index.js";
import { n as o } from "./utils.js";
import { o as s } from "./useSupabase.js";
import { t as c } from "./LabIcon.js";
import { t as l } from "./Reveal.js";
import { n as u, t as d } from "./UIStates.js";
import { n as f } from "./internshipProjects.js";
var p = t(e(), 1),
  m = n();
function h({ project: e, to: t }) {
  let n = o[e.status] || { cls: `bg-gray-100 text-gray-600`, label: e.status },
    r = e.progress_pct ?? 0;
  return (0, m.jsxs)(`article`, {
    className: `group relative bg-white border border-gray-100 rounded-xl overflow-hidden
                 hover:border-gray-200 hover:shadow-lg transition-all duration-300`,
    children: [
      (0, m.jsx)(a, {
        to: t,
        "aria-label": `${e.title} proje detaylarını görüntüle`,
        className: `absolute inset-0 z-[1] rounded-xl`,
      }),
      (0, m.jsxs)(`div`, {
        className: `relative h-44 bg-gray-50 flex items-center justify-center overflow-hidden`,
        children: [
          e.image_url || e.images?.[0]?.image_url
            ? (0, m.jsx)(`img`, {
                src: e.image_url || e.images?.[0]?.image_url,
                alt: e.title,
                className: `w-full h-full object-cover group-hover:scale-105 transition-transform duration-500`,
                loading: `lazy`,
              })
            : (0, m.jsx)(c, {
                name: `fa-diagram-project`,
                className: `w-8 h-8 text-gray-300`,
              }),
          (0, m.jsx)(`span`, {
            className: `absolute top-3 right-3 text-[11px] font-medium px-2.5 py-0.5 rounded-md ${n.cls}`,
            children: n.label,
          }),
        ],
      }),
      (0, m.jsxs)(`div`, {
        className: `p-5`,
        children: [
          (0, m.jsx)(`h3`, {
            className: `font-semibold text-navy text-[15px] leading-snug mb-2`,
            children: e.title,
          }),
          (0, m.jsx)(`p`, {
            className: `text-gray-400 text-[13px] leading-relaxed line-clamp-2 mb-3`,
            children: e.description,
          }),
          (0, m.jsxs)(`div`, {
            className: `flex flex-wrap items-center gap-3 text-[11px] text-gray-400 mb-3`,
            children: [
              e.funder &&
                (0, m.jsxs)(`span`, {
                  children: [
                    (0, m.jsx)(`i`, {
                      className: `fa fa-building-columns mr-1`,
                    }),
                    ` `,
                    e.funder,
                  ],
                }),
              e.date_range &&
                (0, m.jsxs)(`span`, {
                  children: [
                    (0, m.jsx)(`i`, { className: `fa fa-calendar mr-1` }),
                    ` `,
                    e.date_range,
                  ],
                }),
            ],
          }),
          e.status === `active` &&
            (0, m.jsx)(`div`, {
              className: `w-full h-1 bg-gray-100 rounded-full overflow-hidden`,
              children: (0, m.jsx)(`div`, {
                className: `h-full bg-cyan rounded-full`,
                style: { width: `${Math.min(100, Math.max(0, r))}%` },
              }),
            }),
          (e.github_url || e.demo_url) &&
            (0, m.jsxs)(`div`, {
              className: `flex gap-4 mt-3 pt-3 border-t border-gray-50`,
              children: [
                e.github_url &&
                  (0, m.jsxs)(`a`, {
                    href: e.github_url,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `relative z-[2] text-xs text-gray-400 hover:text-cyan transition-colors inline-flex items-center gap-1`,
                    children: [
                      (0, m.jsx)(`i`, { className: `fab fa-github` }),
                      ` GitHub`,
                    ],
                  }),
                e.demo_url &&
                  (0, m.jsxs)(`a`, {
                    href: e.demo_url,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `relative z-[2] text-xs text-gray-400 hover:text-cyan transition-colors inline-flex items-center gap-1`,
                    children: [
                      (0, m.jsx)(`i`, { className: `fa fa-globe` }),
                      ` Demo`,
                    ],
                  }),
              ],
            }),
        ],
      }),
    ],
  });
}
var g = [
  { value: `all`, label: `Tümü` },
  { value: `active`, label: `Aktif` },
  { value: `done`, label: `Tamamlanan` },
  { value: `plan`, label: `Planlanan` },
];
function _() {
  return (0, m.jsxs)(`div`, {
    className: `grid sm:grid-cols-2 lg:grid-cols-3 gap-6`,
    "aria-label": `Projeler yükleniyor`,
    children: [(0, m.jsx)(i, {}), (0, m.jsx)(i, {}), (0, m.jsx)(i, {})],
  });
}
function v() {
  let { data: e, isLoading: t, error: n } = s(),
    [r, i] = (0, p.useState)(`all`),
    a = (e || []).filter((e) => r === `all` || e.status === r);
  return (0, m.jsxs)(m.Fragment, {
    children: [
      (0, m.jsx)(`div`, {
        className: `flex gap-2 mb-8 flex-wrap`,
        "aria-label": `Araştırma projesi durum filtresi`,
        children: g.map((e) =>
          (0, m.jsx)(
            `button`,
            {
              type: `button`,
              onClick: () => i(e.value),
              "aria-pressed": r === e.value,
              className: `px-4 py-2 rounded-xl text-sm font-medium transition-all ${r === e.value ? `bg-cyan text-navy shadow-md` : `bg-white text-gray-500 hover:text-navy border border-gray-200 hover:border-cyan/30`}`,
              children: e.label,
            },
            e.value,
          ),
        ),
      }),
      t && (0, m.jsx)(_, {}),
      n &&
        (0, m.jsx)(u, {
          message: `Araştırma projeleri yüklenirken hata oluştu.`,
        }),
      !t &&
        !n &&
        a.length === 0 &&
        (0, m.jsx)(d, {
          message: `Bu kategoride araştırma projesi bulunmuyor.`,
        }),
      !t &&
        !n &&
        a.length > 0 &&
        (0, m.jsx)(`div`, {
          className: `grid sm:grid-cols-2 lg:grid-cols-3 gap-6`,
          children: a.map((e, t) =>
            (0, m.jsx)(
              l,
              {
                delay: t * 0.07,
                children: (0, m.jsx)(h, {
                  project: e,
                  to: `/projeler/arastirma/${e.id}`,
                }),
              },
              e.id,
            ),
          ),
        }),
    ],
  });
}
function y(e) {
  return e.students
    .map((e) => e.name)
    .filter(Boolean)
    .join(`, `);
}
function b({ project: e }) {
  let t = y(e);
  return (0, m.jsxs)(`article`, {
    className: `group relative h-full bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 hover:shadow-lg transition-all duration-300`,
    children: [
      (0, m.jsx)(a, {
        to: `/projeler/staj/${e.slug}`,
        "aria-label": `${e.title} staj projesi detaylarını görüntüle`,
        className: `absolute inset-0 z-[1] rounded-xl`,
      }),
      (0, m.jsxs)(`div`, {
        className: `relative h-44 bg-gray-50 flex items-center justify-center overflow-hidden`,
        children: [
          e.coverImageUrl
            ? (0, m.jsx)(`img`, {
                src: e.coverImageUrl,
                alt: ``,
                className: `w-full h-full object-cover group-hover:scale-105 transition-transform duration-500`,
                loading: `lazy`,
              })
            : (0, m.jsx)(`i`, {
                className: `fa fa-laptop-code text-3xl text-gray-300`,
                "aria-hidden": `true`,
              }),
          (0, m.jsx)(`span`, {
            className: `absolute top-3 right-3 text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-cyan/10 text-cyan-dim`,
            children: `Staj Projesi`,
          }),
        ],
      }),
      (0, m.jsxs)(`div`, {
        className: `p-5`,
        children: [
          (0, m.jsx)(`h3`, {
            className: `font-semibold text-navy text-[15px] leading-snug mb-2`,
            children: e.title,
          }),
          e.summary &&
            (0, m.jsx)(`p`, {
              className: `text-gray-400 text-[13px] leading-relaxed line-clamp-2 mb-3`,
              children: e.summary,
            }),
          (0, m.jsxs)(`div`, {
            className: `flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] text-gray-400`,
            children: [
              t &&
                (0, m.jsxs)(`span`, {
                  children: [
                    (0, m.jsx)(`i`, {
                      className: `fa fa-user-graduate mr-1`,
                      "aria-hidden": `true`,
                    }),
                    t,
                  ],
                }),
              e.category &&
                (0, m.jsxs)(`span`, {
                  children: [
                    (0, m.jsx)(`i`, {
                      className: `fa fa-tag mr-1`,
                      "aria-hidden": `true`,
                    }),
                    e.category,
                  ],
                }),
              (0, m.jsxs)(`span`, {
                children: [
                  (0, m.jsx)(`i`, {
                    className: `fa fa-calendar mr-1`,
                    "aria-hidden": `true`,
                  }),
                  e.year,
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function x() {
  let { data: e, isLoading: t, error: n, refetch: r } = f(),
    [i, a] = (0, p.useState)(``),
    [o, s] = (0, p.useState)(`all`),
    c = (0, p.useMemo)(
      () =>
        Array.from(new Set((e || []).map((e) => e.year))).sort((e, t) => t - e),
      [e],
    ),
    h = (0, p.useMemo)(() => {
      let t = i.trim().toLocaleLowerCase(`tr-TR`);
      return (e || []).filter((e) => {
        let n = o === `all` || String(e.year) === o,
          r = [e.title, e.summary, e.category, y(e)]
            .filter(Boolean)
            .join(` `)
            .toLocaleLowerCase(`tr-TR`);
        return n && (!t || r.includes(t));
      });
    }, [e, i, o]);
  return (0, m.jsxs)(m.Fragment, {
    children: [
      (0, m.jsxs)(`div`, {
        className: `grid sm:grid-cols-[minmax(0,1fr)_12rem] gap-3 mb-8`,
        children: [
          (0, m.jsxs)(`label`, {
            className: `relative`,
            children: [
              (0, m.jsx)(`span`, {
                className: `sr-only`,
                children: `Staj projelerinde ara`,
              }),
              (0, m.jsx)(`i`, {
                className: `fa fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-300`,
                "aria-hidden": `true`,
              }),
              (0, m.jsx)(`input`, {
                type: `search`,
                value: i,
                onChange: (e) => a(e.target.value),
                placeholder: `Başlık, kategori veya öğrenci ara`,
                className: `w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-11 pr-4 text-sm text-navy placeholder:text-gray-400 focus:border-cyan`,
              }),
            ],
          }),
          (0, m.jsxs)(`label`, {
            children: [
              (0, m.jsx)(`span`, {
                className: `sr-only`,
                children: `Yıla göre filtrele`,
              }),
              (0, m.jsxs)(`select`, {
                value: o,
                onChange: (e) => s(e.target.value),
                className: `w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-navy focus:border-cyan`,
                children: [
                  (0, m.jsx)(`option`, {
                    value: `all`,
                    children: `Tüm yıllar`,
                  }),
                  c.map((e) =>
                    (0, m.jsx)(`option`, { value: e, children: e }, e),
                  ),
                ],
              }),
            ],
          }),
        ],
      }),
      t && (0, m.jsx)(_, {}),
      n &&
        (0, m.jsxs)(`div`, {
          className: `text-center`,
          children: [
            (0, m.jsx)(u, {
              message: `Staj projeleri yüklenirken hata oluştu. Araştırma projelerini görüntülemeye devam edebilirsiniz.`,
            }),
            (0, m.jsxs)(`button`, {
              type: `button`,
              onClick: () => r(),
              className: `btn-cyber -mt-8`,
              children: [
                (0, m.jsx)(`i`, {
                  className: `fa fa-rotate-right`,
                  "aria-hidden": `true`,
                }),
                ` Yeniden dene`,
              ],
            }),
          ],
        }),
      !t &&
        !n &&
        h.length === 0 &&
        (0, m.jsx)(d, {
          message: e?.length
            ? `Aramanızla eşleşen staj projesi bulunmuyor.`
            : `Henüz yayınlanmış staj projesi bulunmuyor.`,
        }),
      !t &&
        !n &&
        h.length > 0 &&
        (0, m.jsx)(`div`, {
          className: `grid sm:grid-cols-2 lg:grid-cols-3 gap-6`,
          children: h.map((e, t) =>
            (0, m.jsx)(
              l,
              { delay: t * 0.07, children: (0, m.jsx)(b, { project: e }) },
              e.id,
            ),
          ),
        }),
    ],
  });
}
function S() {
  let [e, t] = r(),
    n = e.get(`tur`) === `staj` ? `staj` : `arastirma`,
    i = (n) => {
      let r = new URLSearchParams(e);
      (r.set(`tur`, n), t(r));
    };
  return (0, m.jsxs)(m.Fragment, {
    children: [
      (0, m.jsx)(`div`, {
        className: `bg-navy py-12`,
        children: (0, m.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-4`,
          children: [
            (0, m.jsxs)(`h1`, {
              className: `text-3xl font-extrabold text-white flex items-center gap-3`,
              children: [
                (0, m.jsx)(`i`, {
                  className: `fa fa-folder-open text-cyan`,
                  "aria-hidden": `true`,
                }),
                ` Projeler`,
              ],
            }),
            (0, m.jsx)(`p`, {
              className: `text-white/50 mt-2`,
              children: `Araştırma çalışmalarımızı ve öğrenci staj projelerini keşfedin`,
            }),
          ],
        }),
      }),
      (0, m.jsx)(`section`, {
        className: `py-12 bg-gray-50/50 min-h-[60vh]`,
        children: (0, m.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-4`,
          children: [
            (0, m.jsxs)(`div`, {
              className: `inline-flex max-w-full gap-1 p-1 mb-8 rounded-2xl bg-white border border-gray-200`,
              role: `tablist`,
              "aria-label": `Proje türü`,
              children: [
                (0, m.jsx)(`button`, {
                  type: `button`,
                  role: `tab`,
                  "aria-selected": n === `arastirma`,
                  onClick: () => i(`arastirma`),
                  className: `px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${n === `arastirma` ? `bg-navy text-white shadow-sm` : `text-gray-500 hover:text-navy`}`,
                  children: `Araştırma Projeleri`,
                }),
                (0, m.jsx)(`button`, {
                  type: `button`,
                  role: `tab`,
                  "aria-selected": n === `staj`,
                  onClick: () => i(`staj`),
                  className: `px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${n === `staj` ? `bg-navy text-white shadow-sm` : `text-gray-500 hover:text-navy`}`,
                  children: `Staj Projeleri`,
                }),
              ],
            }),
            (0, m.jsx)(`div`, {
              role: `tabpanel`,
              children:
                n === `arastirma` ? (0, m.jsx)(v, {}) : (0, m.jsx)(x, {}),
            }),
          ],
        }),
      }),
    ],
  });
}
export { S as default };
