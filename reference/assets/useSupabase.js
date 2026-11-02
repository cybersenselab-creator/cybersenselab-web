import { t as e } from "./useQuery.js";
import { o as t } from "./index.js";
async function n(e, n) {
  let { data: r, error: i } = await n(t.from(e).select(`*`));
  if (i) throw i;
  return r || [];
}
var r = new Set([`announcements`, `projects`, `etkinlikler`]);
async function i(e, n) {
  if (!r.has(e) || n.length === 0) return n;
  let i = n.map((e) => String(e.id)),
    { data: a, error: o } = await t
      .from(`content_images`)
      .select(
        `id, entity_type, entity_id, image_url, alt_text, sort_order, is_published`,
      )
      .eq(`entity_type`, e)
      .eq(`is_published`, !0)
      .in(`entity_id`, i)
      .order(`sort_order`, { ascending: !0 });
  if (o) throw o;
  let s = new Map();
  return (
    (a || []).forEach((e) => {
      let t = String(e.entity_id);
      (s.has(t) || s.set(t, []), s.get(t).push(e));
    }),
    n.map((e) => ({ ...e, images: s.get(String(e.id)) || [] }))
  );
}
function a(t) {
  return e({
    queryKey: [`announcements`, t],
    queryFn: async () => {
      let e = [
        ...(await n(`announcements`, (e) =>
          e
            .eq(`is_published`, !0)
            .order(`created_at`, { ascending: !1 })
            .limit(100),
        )),
      ].sort((e, t) => {
        let n = Date.parse(e.publish_date || e.created_at) || 0;
        return (Date.parse(t.publish_date || t.created_at) || 0) - n;
      });
      return i(`announcements`, t ? e.slice(0, t) : e);
    },
  });
}
function o(t) {
  return e({
    queryKey: [`projects`, t],
    queryFn: async () =>
      i(
        `projects`,
        await n(`projects`, (e) =>
          e
            .eq(`is_published`, !0)
            .order(`created_at`, { ascending: !1 })
            .limit(t || 100),
        ),
      ),
  });
}
function s(n) {
  return e({
    queryKey: [`project`, n],
    queryFn: async () => {
      let { data: e, error: r } = await t
        .from(`projects`)
        .select(`*`)
        .eq(`id`, n)
        .eq(`is_published`, !0)
        .maybeSingle();
      if (r) throw r;
      if (!e) return null;
      let [a] = await i(`projects`, [e]);
      return a;
    },
    enabled: !!n,
  });
}
function c(t) {
  return e({
    queryKey: [`events`, t],
    queryFn: async () =>
      i(
        `etkinlikler`,
        await n(`etkinlikler`, (e) =>
          e
            .eq(`is_published`, !0)
            .order(`event_date`, { ascending: !0 })
            .limit(t || 100),
        ),
      ),
  });
}
function l(t) {
  return e({
    queryKey: [`team`, t],
    queryFn: () =>
      n(`ekip`, (e) =>
        e
          .eq(`is_published`, !0)
          .order(`priority`, { ascending: !1 })
          .order(`sort_order`, { ascending: !0 })
          .limit(t || 100),
      ),
  });
}
function u(t) {
  return e({
    queryKey: [`publications`, t],
    queryFn: () =>
      n(`yayinlar`, (e) =>
        e
          .eq(`is_published`, !0)
          .order(`pub_year`, { ascending: !1 })
          .order(`created_at`, { ascending: !1 })
          .limit(t || 100),
      ),
  });
}
function d() {
  return e({
    queryKey: [`researchAreas`],
    queryFn: () =>
      n(`arastirma_alanlari`, (e) =>
        e.eq(`is_published`, !0).order(`sort_order`, { ascending: !0 }),
      ),
  });
}
function f() {
  return e({
    queryKey: [`awards`],
    queryFn: async () => {
      let {
        data: e,
        error: n,
        count: r,
      } = await t
        .from(`oduller`)
        .select(`*`, { count: `exact` })
        .eq(`is_published`, !0)
        .order(`sort_order`, { ascending: !0 });
      if (n) throw n;
      return { items: e || [], count: r || 0 };
    },
  });
}
function p() {
  return e({
    queryKey: [`partners`],
    queryFn: () =>
      n(`ortaklar`, (e) =>
        e.eq(`is_published`, !0).order(`sort_order`, { ascending: !0 }),
      ),
  });
}
function m() {
  return e({
    queryKey: [`siteSettings`],
    queryFn: async () => {
      let { data: e, error: n } = await t
        .from(`site_ayarlari`)
        .select(`key,value`);
      if (n) throw n;
      let r = {};
      return (
        (e || []).forEach((e) => {
          r[e.key] = e.value;
        }),
        r
      );
    },
  });
}
function h() {
  return e({
    queryKey: [`publicCounts`],
    queryFn: async () => {
      let e = [
          { name: `ekip`, key: `team` },
          { name: `yayinlar`, key: `publications` },
          { name: `ortaklar`, key: `partners` },
        ],
        n = {};
      for (let r of e) {
        let { count: e, error: i } = await t
          .from(r.name)
          .select(`*`, { count: `exact`, head: !0 })
          .eq(`is_published`, !0);
        i ? (n[r.key] = 0) : (n[r.key] = e || 0);
      }
      let { count: r } = await t
        .from(`projects`)
        .select(`*`, { count: `exact`, head: !0 })
        .eq(`is_published`, !0)
        .eq(`status`, `active`);
      return {
        team: n.team || 0,
        publications: n.publications || 0,
        activeProjects: r || 0,
        partners: n.partners || 0,
      };
    },
    staleTime: 6e5,
  });
}
export {
  s as a,
  u as c,
  l as d,
  p as i,
  d as l,
  f as n,
  o,
  c as r,
  h as s,
  a as t,
  m as u,
};
