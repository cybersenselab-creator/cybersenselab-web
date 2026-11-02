import { i as e, l as t, n } from "./vendor-dist.js";
import {
  i as r,
  n as i,
  r as a,
  t as o,
  w as s,
} from "./index.js";
import {
  c,
  d as l,
  i as u,
  l as d,
  n as f,
  s as p,
  t as m,
} from "./useSupabase.js";
import { t as h } from "./LabIcon.js";
import { t as g } from "./NewsCard.js";
import { t as _ } from "./Reveal.js";
import { n as v, t as y } from "./UIStates.js";
import { t as b } from "./SectionHeader.js";
import { t as x } from "./TeamCard.js";
import { t as S } from "./PublicationCard.js";
var C = t(e(), 1),
  w = n(),
  T = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  },
  E = {
    hidden: { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };
function D() {
  let [e, t] = (0, C.useState)(!1);
  return (0, w.jsxs)(`section`, {
    className: `relative isolate bg-navy overflow-hidden`,
    children: [
      (0, w.jsx)(`video`, {
        className: `absolute inset-0 h-full w-full object-cover object-[center_45%] transition-opacity duration-1000 motion-reduce:hidden ${e ? `opacity-75` : `opacity-0`}`,
        autoPlay: !0,
        muted: !0,
        loop: !0,
        playsInline: !0,
        preload: `metadata`,
        "aria-hidden": `true`,
        tabIndex: -1,
        onCanPlay: () => t(!0),
        onError: () => t(!1),
        children: (0, w.jsx)(`source`, {
          src: `/videos/hero-background.mp4`,
          type: `video/mp4`,
        }),
      }),
      (0, w.jsx)(`div`, {
        className: `absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/65 to-navy/25`,
        "aria-hidden": `true`,
      }),
      (0, w.jsx)(r.div, {
        className: `absolute inset-0 opacity-[0.04]`,
        style: {
          backgroundImage: `linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)`,
          backgroundSize: `56px 56px`,
        },
        initial: { opacity: 0 },
        animate: { opacity: 0.04 },
        transition: { duration: 1.2 },
        "aria-hidden": `true`,
      }),
      (0, w.jsx)(r.div, {
        className: `absolute -top-32 right-0 w-[480px] h-[480px] rounded-full bg-cyan/10 blur-[120px]`,
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 1.4, delay: 0.2 },
        "aria-hidden": `true`,
      }),
      (0, w.jsx)(`div`, {
        className: `relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-24`,
        children: (0, w.jsxs)(r.div, {
          className: `max-w-3xl`,
          variants: T,
          initial: `hidden`,
          animate: `show`,
          children: [
            (0, w.jsx)(r.p, {
              variants: E,
              className: `text-cyan text-[11px] font-semibold uppercase tracking-[0.2em] mb-5`,
              children: `Sakarya Üniversitesi · Bilgisayar Mühendisliği`,
            }),
            (0, w.jsxs)(r.h1, {
              variants: E,
              className: `text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.15] tracking-tight`,
              children: [
                `SARGEM `,
                (0, w.jsx)(`span`, {
                  className: `text-cyan`,
                  children: `CyberSense`,
                }),
                ` Laboratuvarı`,
              ],
            }),
            (0, w.jsx)(r.p, {
              variants: E,
              className: `mt-6 text-white/65 text-base leading-relaxed max-w-xl`,
              children: `Siber güvenlik, yapay zeka, IoT ve MIoT alanlarında öncü araştırmalar yürüten Sakarya Üniversitesi'nin uzmanlaşmış araştırma laboratuvarı.`,
            }),
            (0, w.jsxs)(r.div, {
              variants: E,
              className: `flex flex-wrap gap-3 mt-9`,
              children: [
                (0, w.jsxs)(r.a, {
                  href: `#research`,
                  className: `btn-cyber`,
                  whileHover: { y: -2 },
                  whileTap: { scale: 0.97 },
                  children: [
                    (0, w.jsx)(`i`, { className: `fa fa-flask text-sm` }),
                    ` Araştırmalarımız`,
                  ],
                }),
                (0, w.jsxs)(r.a, {
                  href: `#team`,
                  className: `btn-outline`,
                  whileHover: { y: -2 },
                  whileTap: { scale: 0.97 },
                  children: [
                    (0, w.jsx)(`i`, { className: `fa fa-users text-sm` }),
                    ` Ekibimiz`,
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function O({ value: e, label: t }) {
  let [n, r] = (0, C.useState)(0),
    i = (0, C.useRef)(null),
    a = (0, C.useRef)(!1);
  return (
    (0, C.useEffect)(() => {
      let t = i.current;
      if (!t || a.current) return;
      let n = new IntersectionObserver(
        (t) => {
          if (!t[0].isIntersecting || a.current) return;
          ((a.current = !0), n.disconnect());
          let i = performance.now(),
            o = (t) => {
              let n = Math.min((t - i) / 1200, 1);
              (r(Math.round((1 - (1 - n) ** 3) * e)),
                n < 1 && requestAnimationFrame(o));
            };
          requestAnimationFrame(o);
        },
        { threshold: 0.3 },
      );
      return (n.observe(t), () => n.disconnect());
    }, [e]),
    (0, w.jsxs)(`div`, {
      className: `flex items-baseline gap-2.5`,
      children: [
        (0, w.jsx)(`span`, {
          ref: i,
          className: `text-3xl font-bold text-cyan tabular-nums leading-none`,
          children: n,
        }),
        (0, w.jsx)(`span`, { className: `text-white/60 text-sm`, children: t }),
      ],
    })
  );
}
function k() {
  let { data: e, isLoading: t } = p(),
    n = [
      { value: e?.team ?? 0, label: `Araştırmacı` },
      { value: e?.publications ?? 0, label: `Yayın` },
      { value: e?.activeProjects ?? 0, label: `Aktif Proje` },
      { value: e?.partners ?? 0, label: `İş Ortağı` },
    ];
  return (0, w.jsx)(`div`, {
    className: `bg-navy-light border-t-2 border-cyan/20`,
    children: (0, w.jsx)(`div`, {
      className: `max-w-7xl mx-auto px-4`,
      children: (0, w.jsx)(`div`, {
        className: `grid grid-cols-2 md:grid-cols-4 gap-y-6 py-6`,
        children: n.map((e, n) =>
          (0, w.jsx)(
            `div`,
            {
              className: `flex justify-center ${n > 0 ? `md:border-l md:border-white/10` : ``}`,
              children: t
                ? (0, w.jsx)(`div`, {
                    className: `w-16 h-7 rounded bg-white/10 animate-pulse`,
                  })
                : (0, w.jsx)(O, { value: e.value, label: e.label }),
            },
            e.label,
          ),
        ),
      }),
    }),
  });
}
function A() {
  let { data: e, isLoading: t, error: n } = d();
  return (0, w.jsx)(`section`, {
    id: `research`,
    className: `py-16 bg-white`,
    children: (0, w.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-4`,
      children: [
        (0, w.jsx)(_, {
          children: (0, w.jsx)(b, {
            tag: `Uzmanlık Alanları`,
            title: `Araştırma Alanları`,
            center: !0,
          }),
        }),
        t &&
          (0, w.jsx)(`div`, {
            className: `grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-xl overflow-hidden mt-8`,
            children: Array.from({ length: 6 }).map((e, t) =>
              (0, w.jsxs)(
                `div`,
                {
                  className: `bg-white p-7`,
                  children: [
                    (0, w.jsx)(o, { className: `w-8 h-8` }),
                    (0, w.jsx)(o, { className: `h-4 w-3/4 mt-4` }),
                    (0, w.jsx)(o, { className: `h-3 w-full mt-2` }),
                    (0, w.jsx)(o, { className: `h-3 w-2/3 mt-2` }),
                  ],
                },
                t,
              ),
            ),
          }),
        n && (0, w.jsx)(v, { message: `Araştırma alanları yüklenemedi.` }),
        e &&
          e.length === 0 &&
          (0, w.jsx)(y, { message: `Henüz araştırma alanı eklenmemiş.` }),
        e &&
          e.length > 0 &&
          (0, w.jsx)(`div`, {
            className: `grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-xl overflow-hidden mt-8`,
            children: e.map((e, t) =>
              (0, w.jsx)(
                _,
                {
                  delay: t * 0.06,
                  className: `bg-white`,
                  children: (0, w.jsxs)(`div`, {
                    className: `p-7 hover:bg-gray-50/60 transition-colors h-full`,
                    children: [
                      (0, w.jsx)(`div`, {
                        className: `w-14 h-14 rounded-xl bg-navy/5 border border-gray-100
                                flex items-center justify-center text-cyan`,
                        children: /^https?:\/\//i.test(e.icon || ``)
                          ? (0, w.jsx)(`img`, {
                              src: e.icon,
                              alt: `${e.title} görseli`,
                              className: `w-11 h-11 object-contain rounded-lg`,
                              loading: `lazy`,
                            })
                          : (0, w.jsx)(h, {
                              name: e.icon || `fa-shield`,
                              className: `w-8 h-8`,
                            }),
                      }),
                      (0, w.jsx)(`h3`, {
                        className: `mt-4 text-[15px] font-bold text-navy`,
                        children: e.title,
                      }),
                      e.description &&
                        (0, w.jsx)(`p`, {
                          className: `mt-1.5 text-gray-500 text-sm leading-relaxed`,
                          children: e.description,
                        }),
                    ],
                  }),
                },
                e.id,
              ),
            ),
          }),
      ],
    }),
  });
}
function j({ partner: e }) {
  let t = (e.name || ``).trim(),
    n = {
      tubitak: `logos/tubitak.svg`,
      tübitak: `logos/tubitak.svg`,
      sargem: `logos/cybersense-shield.png`,
      sakaryaüniversitesi: `logos/sakarya-university.svg`,
      sakaryauniversity: `logos/sakarya-university.svg`,
      sau: `logos/sakarya-university.svg`,
    }[t.toLowerCase().replace(/[^a-z0-9çğıöşü]/g, ``)],
    r = n ? `/${n}` : void 0,
    i = (t.charAt(0) || `?`).toUpperCase();
  return r
    ? (0, w.jsx)(`img`, {
        src: r,
        alt: t,
        className: `h-10 w-auto max-w-[120px] object-contain grayscale opacity-60\r
                   group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300`,
        loading: `lazy`,
      })
    : (0, w.jsxs)(`span`, {
        className: `flex items-center gap-2.5`,
        children: [
          (0, w.jsx)(`span`, {
            className: `w-9 h-9 rounded-lg bg-navy/5 border border-gray-100 flex items-center justify-center\r
                       text-navy font-bold text-base shrink-0`,
            children: i,
          }),
          (0, w.jsx)(`span`, {
            className: `text-sm font-semibold whitespace-nowrap text-gray-500 group-hover:text-navy transition-colors`,
            children: t,
          }),
        ],
      });
}
function M() {
  let { data: e } = u();
  return !e || e.length === 0
    ? null
    : (0, w.jsxs)(`section`, {
        className: `py-12 bg-white border-y border-gray-100`,
        children: [
          (0, w.jsx)(`div`, {
            className: `max-w-7xl mx-auto px-4`,
            children: (0, w.jsx)(`p`, {
              className: `text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-6`,
              children: `İş Ortaklarımız`,
            }),
          }),
          (0, w.jsx)(`div`, {
            className: `mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-16 gap-y-8 px-4`,
            children: e.map((e) =>
              (0, w.jsx)(
                `a`,
                {
                  href: e.url || `#`,
                  target: e.url ? `_blank` : void 0,
                  rel: `noopener`,
                  className: `group flex items-center shrink-0`,
                  children: (0, w.jsx)(j, { partner: e }),
                },
                e.id,
              ),
            ),
          }),
        ],
      });
}
function N() {
  let { data: e, isLoading: t } = m(3),
    { data: n, isLoading: r } = l(4),
    { data: o, isLoading: u } = c(3),
    { data: d } = f(),
    p = d?.items,
    h = (d?.count ?? 0) > 0;
  return (0, w.jsxs)(w.Fragment, {
    children: [
      (0, w.jsx)(D, {}),
      (0, w.jsx)(k, {}),
      (0, w.jsx)(`section`, {
        id: `news`,
        className: `py-12 bg-gray-50/50`,
        children: (0, w.jsx)(`div`, {
          className: `max-w-7xl mx-auto px-4`,
          children: (0, w.jsxs)(`div`, {
            className: `grid gap-8 ${h ? `lg:grid-cols-3` : ``}`,
            children: [
              (0, w.jsxs)(`div`, {
                className: h ? `lg:col-span-2` : ``,
                children: [
                  (0, w.jsx)(_, {
                    children: (0, w.jsx)(b, { title: `Haberler & Duyurular` }),
                  }),
                  t &&
                    (0, w.jsxs)(`div`, {
                      className: `grid sm:grid-cols-2 gap-5 ${h ? `` : `lg:grid-cols-3`}`,
                      children: [(0, w.jsx)(i, {}), (0, w.jsx)(i, {})],
                    }),
                  e &&
                    e.length === 0 &&
                    (0, w.jsx)(y, { message: `Henüz haber bulunmuyor.` }),
                  e &&
                    e.length > 0 &&
                    (0, w.jsx)(`div`, {
                      className: `grid sm:grid-cols-2 gap-5 ${h ? `` : `lg:grid-cols-3`}`,
                      children: e.map((e, t) =>
                        (0, w.jsx)(
                          _,
                          {
                            delay: t * 0.1,
                            children: (0, w.jsx)(s, {
                              to: `/duyurular`,
                              className: `block`,
                              children: (0, w.jsx)(g, { announcement: e }),
                            }),
                          },
                          e.id,
                        ),
                      ),
                    }),
                  !t &&
                    e &&
                    e.length > 0 &&
                    (0, w.jsx)(_, {
                      className: `text-center mt-6`,
                      delay: 0.2,
                      children: (0, w.jsxs)(s, {
                        to: `/duyurular`,
                        className: `btn-outline text-sm`,
                        children: [
                          (0, w.jsx)(`i`, { className: `fa fa-list` }),
                          ` Tüm Haberler`,
                        ],
                      }),
                    }),
                ],
              }),
              h &&
                (0, w.jsxs)(`div`, {
                  children: [
                    (0, w.jsx)(_, {
                      delay: 0.15,
                      children: (0, w.jsx)(b, {
                        title: `Ödüller & Öne Çıkanlar`,
                      }),
                    }),
                    (0, w.jsx)(_, {
                      delay: 0.2,
                      children: (0, w.jsx)(`div`, {
                        className: `divide-y divide-gray-100 border-t border-gray-100`,
                        children: (p ?? [])
                          .slice(0, 5)
                          .map((e) =>
                            (0, w.jsxs)(
                              `div`,
                              {
                                className: `py-3.5`,
                                children: [
                                  (0, w.jsxs)(`div`, {
                                    className: `flex items-baseline gap-2.5`,
                                    children: [
                                      (0, w.jsx)(`span`, {
                                        className: `text-navy font-bold text-sm shrink-0`,
                                        children: e.year,
                                      }),
                                      (0, w.jsx)(`span`, {
                                        className: `text-navy font-medium text-[13px]`,
                                        children: e.title,
                                      }),
                                    ],
                                  }),
                                  e.description &&
                                    (0, w.jsx)(`p`, {
                                      className: `text-gray-400 text-xs leading-relaxed mt-1 ml-8`,
                                      children: e.description,
                                    }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                      }),
                    }),
                  ],
                }),
            ],
          }),
        }),
      }),
      (0, w.jsx)(A, {}),
      (0, w.jsx)(`section`, {
        id: `team`,
        className: `py-16 bg-gray-50/50`,
        children: (0, w.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-4`,
          children: [
            (0, w.jsx)(_, {
              children: (0, w.jsx)(b, {
                tag: `Kadromuz`,
                title: `Araştırma Ekibi`,
                center: !0,
              }),
            }),
            r &&
              (0, w.jsxs)(`div`, {
                className: `grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8`,
                children: [
                  (0, w.jsx)(i, {}),
                  (0, w.jsx)(i, {}),
                  (0, w.jsx)(i, {}),
                  (0, w.jsx)(i, {}),
                ],
              }),
            n &&
              n.length === 0 &&
              (0, w.jsx)(y, { message: `Henüz ekip üyesi eklenmemiş.` }),
            n &&
              n.length > 0 &&
              (0, w.jsx)(`div`, {
                className: `grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8`,
                children: n.map((e, t) =>
                  (0, w.jsx)(
                    _,
                    { delay: t * 0.08, children: (0, w.jsx)(x, { member: e }) },
                    e.id,
                  ),
                ),
              }),
            !r &&
              n &&
              n.length > 0 &&
              (0, w.jsx)(_, {
                className: `text-center mt-8`,
                delay: 0.2,
                children: (0, w.jsxs)(s, {
                  to: `/ekip`,
                  className: `btn-outline`,
                  children: [
                    (0, w.jsx)(`i`, { className: `fa fa-users` }),
                    ` Tüm Ekibi Gör`,
                  ],
                }),
              }),
          ],
        }),
      }),
      (0, w.jsx)(`section`, {
        id: `publications`,
        className: `py-16 bg-white`,
        children: (0, w.jsx)(`div`, {
          className: `max-w-7xl mx-auto px-4`,
          children: (0, w.jsx)(`div`, {
            className: `w-full`,
            children: (0, w.jsxs)(`div`, {
              children: [
                (0, w.jsx)(_, {
                  children: (0, w.jsx)(b, {
                    tag: `Akademik Çıktılar`,
                    title: `Son Yayınlar`,
                  }),
                }),
                u &&
                  (0, w.jsxs)(`div`, {
                    className: `space-y-3`,
                    children: [
                      (0, w.jsx)(a, {}),
                      (0, w.jsx)(a, {}),
                      (0, w.jsx)(a, {}),
                    ],
                  }),
                o &&
                  o.length === 0 &&
                  (0, w.jsx)(y, { message: `Henüz yayın eklenmemiş.` }),
                o &&
                  o.length > 0 &&
                  (0, w.jsx)(`div`, {
                    className: `space-y-3`,
                    children: o.map((e, t) =>
                      (0, w.jsx)(
                        _,
                        {
                          delay: t * 0.08,
                          children: (0, w.jsx)(S, { publication: e }),
                        },
                        e.id,
                      ),
                    ),
                  }),
                !u &&
                  o &&
                  o.length > 0 &&
                  (0, w.jsx)(_, {
                    className: `text-center mt-6`,
                    delay: 0.2,
                    children: (0, w.jsxs)(s, {
                      to: `/yayinlar`,
                      className: `btn-outline text-sm`,
                      children: [
                        (0, w.jsx)(`i`, { className: `fa fa-list` }),
                        ` Tüm Yayınları Gör`,
                      ],
                    }),
                  }),
              ],
            }),
          }),
        }),
      }),
      (0, w.jsx)(M, {}),
    ],
  });
}
export { N as default };
