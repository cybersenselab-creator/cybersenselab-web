import { i as e, l as t, n } from "./vendor-dist.js";
import { n as r } from "./index.js";
import { r as i } from "./utils.js";
import { t as a } from "./useSupabase.js";
import { t as o } from "./NewsCard.js";
import { t as s } from "./Reveal.js";
import { n as c, t as l } from "./UIStates.js";
var u = t(e(), 1),
  d = n();
function f() {
  let { data: e, isLoading: t, error: n } = a(),
    [f, p] = (0, u.useState)(null),
    [m, h] = (0, u.useState)(0),
    g = (e) => {
      (h(0), p(e));
    },
    _ = () => p(null),
    v = f?.images?.length || 0,
    y = () => {
      v > 0 && h((e) => (e - 1 + v) % v);
    },
    b = () => {
      v > 0 && h((e) => (e + 1) % v);
    };
  return (
    (0, u.useEffect)(() => {
      if (!f) return;
      let e = document.body.style.overflow;
      document.body.style.overflow = `hidden`;
      let t = (e) => {
        (e.key === `Escape` && _(),
          e.key === `ArrowLeft` && y(),
          e.key === `ArrowRight` && b());
      };
      return (
        window.addEventListener(`keydown`, t),
        () => {
          ((document.body.style.overflow = e),
            window.removeEventListener(`keydown`, t));
        }
      );
    }, [f, v]),
    (0, d.jsxs)(d.Fragment, {
      children: [
        (0, d.jsx)(`div`, {
          className: `bg-navy py-12`,
          children: (0, d.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4`,
            children: [
              (0, d.jsxs)(`h1`, {
                className: `text-3xl font-extrabold text-white flex items-center gap-3`,
                children: [
                  (0, d.jsx)(`i`, { className: `fa fa-newspaper text-cyan` }),
                  ` Haberler`,
                ],
              }),
              (0, d.jsx)(`p`, {
                className: `text-white/50 mt-2`,
                children: `Laboratuvardan son gelişmeler, başarılar ve önemli duyurular`,
              }),
            ],
          }),
        }),
        (0, d.jsx)(`section`, {
          className: `py-12 bg-gray-50/50 min-h-[60vh]`,
          children: (0, d.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4`,
            children: [
              t &&
                (0, d.jsxs)(`div`, {
                  className: `grid sm:grid-cols-2 lg:grid-cols-3 gap-6`,
                  children: [
                    (0, d.jsx)(r, {}),
                    (0, d.jsx)(r, {}),
                    (0, d.jsx)(r, {}),
                  ],
                }),
              n &&
                (0, d.jsx)(c, { message: `Haberler yüklenirken hata oluştu.` }),
              e &&
                e.length === 0 &&
                (0, d.jsx)(l, { message: `Henüz haber eklenmemiş.` }),
              (0, d.jsx)(`div`, {
                className: `grid sm:grid-cols-2 lg:grid-cols-3 gap-6`,
                children: e?.map((e, t) =>
                  (0, d.jsx)(
                    s,
                    {
                      delay: t * 0.07,
                      children: (0, d.jsx)(o, {
                        announcement: e,
                        onClick: () => g(e),
                      }),
                    },
                    e.id,
                  ),
                ),
              }),
            ],
          }),
        }),
        f &&
          (0, d.jsx)(`div`, {
            className: `fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm`,
            onClick: _,
            children: (0, d.jsx)(`div`, {
              className: `bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl`,
              onClick: (e) => e.stopPropagation(),
              children: (0, d.jsxs)(`div`, {
                className: `max-h-[90vh] overflow-y-auto scrollbar-hidden`,
                children: [
                  (0, d.jsxs)(`div`, {
                    className: `sticky top-0 z-10 bg-navy text-white p-5 flex items-center justify-between gap-4 border-b border-cyan/30`,
                    children: [
                      (0, d.jsx)(`h3`, {
                        className: `font-bold text-lg sm:text-xl leading-snug`,
                        children: f.title,
                      }),
                      (0, d.jsx)(`button`, {
                        onClick: _,
                        className: `w-9 h-9 shrink-0 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors`,
                        "aria-label": `Duyuruyu kapat`,
                        children: (0, d.jsx)(`i`, { className: `fa fa-times` }),
                      }),
                    ],
                  }),
                  (0, d.jsxs)(`div`, {
                    className: `p-6`,
                    children: [
                      f.images &&
                        f.images.length > 0 &&
                        (0, d.jsxs)(`div`, {
                          className: `relative mb-6 rounded-2xl overflow-hidden bg-navy/5 border border-gray-100`,
                          children: [
                            (0, d.jsx)(
                              `img`,
                              {
                                src: f.images[m].image_url,
                                alt:
                                  f.images[m].alt_text ||
                                  `${f.title} - görsel ${m + 1}`,
                                className: `w-full h-[clamp(16rem,55vh,34rem)] object-contain`,
                              },
                              f.images[m].image_url,
                            ),
                            v > 1 &&
                              (0, d.jsxs)(d.Fragment, {
                                children: [
                                  (0, d.jsx)(`button`, {
                                    type: `button`,
                                    onClick: y,
                                    className: `absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-navy/80 text-white
                                   hover:bg-cyan hover:text-navy shadow-lg flex items-center justify-center transition-colors`,
                                    "aria-label": `Önceki görsel`,
                                    children: (0, d.jsx)(`i`, {
                                      className: `fa fa-chevron-left`,
                                    }),
                                  }),
                                  (0, d.jsx)(`button`, {
                                    type: `button`,
                                    onClick: b,
                                    className: `absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-navy/80 text-white
                                   hover:bg-cyan hover:text-navy shadow-lg flex items-center justify-center transition-colors`,
                                    "aria-label": `Sonraki görsel`,
                                    children: (0, d.jsx)(`i`, {
                                      className: `fa fa-chevron-right`,
                                    }),
                                  }),
                                  (0, d.jsx)(`div`, {
                                    className: `absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-navy/75 px-3 py-2`,
                                    children: f.images.map((e, t) =>
                                      (0, d.jsx)(
                                        `button`,
                                        {
                                          type: `button`,
                                          onClick: () => h(t),
                                          className: `h-2 rounded-full transition-all ${t === m ? `w-6 bg-cyan` : `w-2 bg-white/70 hover:bg-white`}`,
                                          "aria-label": `${t + 1}. görsele git`,
                                          "aria-current":
                                            t === m ? `true` : void 0,
                                        },
                                        e.id || e.image_url,
                                      ),
                                    ),
                                  }),
                                  (0, d.jsxs)(`span`, {
                                    className: `absolute top-3 right-3 rounded-full bg-navy/75 px-3 py-1.5 text-xs font-semibold text-white`,
                                    children: [m + 1, ` / `, v],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      (0, d.jsx)(`div`, {
                        className: `text-sm text-gray-600 leading-relaxed whitespace-pre-wrap mb-4`,
                        children: f.content,
                      }),
                      (0, d.jsxs)(`div`, {
                        className: `text-xs text-gray-400 border-t border-gray-100 pt-4`,
                        children: [
                          (0, d.jsx)(`i`, { className: `fa fa-clock mr-1.5` }),
                          ` `,
                          i(f.publish_date || f.created_at),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
      ],
    })
  );
}
export { f as default };
