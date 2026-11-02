import { n as e } from "./vendor-dist.js";
import { r as t } from "./index.js";
import { r as n } from "./utils.js";
import { r } from "./useSupabase.js";
import { t as i } from "./Reveal.js";
import { n as a, t as o } from "./UIStates.js";
import { t as s } from "./SectionHeader.js";
var c = e();
function l({ event: e }) {
  let t = new Date(e.event_date) < new Date();
  return (0, c.jsxs)(`div`, {
    className: `flex gap-5 p-5 bg-white border rounded-xl transition-all duration-300
                     ${t ? `border-gray-100 opacity-60` : `border-gray-100 hover:border-gray-200 hover:shadow-md`}`,
    children: [
      (0, c.jsxs)(`div`, {
        className: `shrink-0 w-14 pt-0.5 text-center border-r border-gray-100 pr-4`,
        children: [
          (0, c.jsx)(`div`, {
            className: `text-2xl font-bold leading-none ${t ? `text-gray-300` : `text-navy`}`,
            children: new Date(e.event_date).getDate(),
          }),
          (0, c.jsx)(`div`, {
            className: `text-[11px] font-semibold text-gray-400 uppercase mt-1`,
            children: new Date(e.event_date).toLocaleString(`tr-TR`, {
              month: `short`,
            }),
          }),
        ],
      }),
      (0, c.jsxs)(`div`, {
        className: `min-w-0 flex-1`,
        children: [
          (0, c.jsx)(`h3`, {
            className: `font-semibold text-[15px] leading-snug mb-1 ${t ? `text-gray-400` : `text-navy`}`,
            children: e.title,
          }),
          e.description &&
            (0, c.jsx)(`p`, {
              className: `text-gray-400 text-[13px] leading-relaxed line-clamp-2 mb-2`,
              children: e.description,
            }),
          (0, c.jsxs)(`div`, {
            className: `flex flex-wrap items-center gap-3 text-[11px] text-gray-400`,
            children: [
              (0, c.jsxs)(`span`, {
                className: `inline-flex items-center gap-1`,
                children: [
                  (0, c.jsx)(`i`, { className: `fa fa-clock text-[10px]` }),
                  ` `,
                  n(e.event_date),
                ],
              }),
              e.location &&
                (0, c.jsxs)(`span`, {
                  className: `inline-flex items-center gap-1`,
                  children: [
                    (0, c.jsx)(`i`, {
                      className: `fa fa-location-dot text-[10px]`,
                    }),
                    ` `,
                    e.location,
                  ],
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function u() {
  let { data: e, isLoading: n, error: u } = r(),
    d = (e || []).filter((e) => new Date(e.event_date) >= new Date()),
    f = (e || []).filter((e) => new Date(e.event_date) < new Date());
  return (0, c.jsxs)(c.Fragment, {
    children: [
      (0, c.jsx)(`div`, {
        className: `bg-navy py-12`,
        children: (0, c.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-4`,
          children: [
            (0, c.jsxs)(`h1`, {
              className: `text-3xl font-extrabold text-white flex items-center gap-3`,
              children: [
                (0, c.jsx)(`i`, { className: `fa fa-calendar-days text-cyan` }),
                ` Etkinlikler`,
              ],
            }),
            (0, c.jsx)(`p`, {
              className: `text-white/50 mt-2`,
              children: `Laboratuvar etkinlikleri ve organizasyonlar`,
            }),
          ],
        }),
      }),
      (0, c.jsx)(`section`, {
        className: `py-12 bg-gray-50/50 min-h-[60vh]`,
        children: (0, c.jsxs)(`div`, {
          className: `max-w-4xl mx-auto px-4`,
          children: [
            n &&
              (0, c.jsxs)(`div`, {
                className: `space-y-3`,
                children: [
                  (0, c.jsx)(t, {}),
                  (0, c.jsx)(t, {}),
                  (0, c.jsx)(t, {}),
                ],
              }),
            u &&
              (0, c.jsx)(a, {
                message: `Etkinlikler yüklenirken hata oluştu.`,
              }),
            e &&
              e.length === 0 &&
              (0, c.jsx)(o, { message: `Henüz etkinlik eklenmemiş.` }),
            d.length > 0 &&
              (0, c.jsxs)(`div`, {
                className: `mb-10`,
                children: [
                  (0, c.jsx)(i, {
                    children: (0, c.jsx)(s, {
                      tag: `Yaklaşan`,
                      title: `Yaklaşan Etkinlikler`,
                    }),
                  }),
                  (0, c.jsx)(`div`, {
                    className: `space-y-3`,
                    children: d.map((e, t) =>
                      (0, c.jsx)(
                        i,
                        {
                          delay: t * 0.06,
                          children: (0, c.jsx)(l, { event: e }),
                        },
                        e.id,
                      ),
                    ),
                  }),
                ],
              }),
            f.length > 0 &&
              (0, c.jsxs)(`div`, {
                children: [
                  (0, c.jsx)(i, {
                    children: (0, c.jsx)(s, {
                      tag: `Geçmiş`,
                      title: `Geçmiş Etkinlikler`,
                    }),
                  }),
                  (0, c.jsx)(`div`, {
                    className: `space-y-3`,
                    children: f.map((e, t) =>
                      (0, c.jsx)(
                        i,
                        {
                          delay: t * 0.05,
                          children: (0, c.jsx)(l, { event: e }),
                        },
                        e.id,
                      ),
                    ),
                  }),
                ],
              }),
          ],
        }),
      }),
    ],
  });
}
export { u as default };
