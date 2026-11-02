import { i as e, l as t, n } from "./vendor-dist.js";
import {
  T as r,
  a as i,
  c as a,
  o,
  s,
} from "./index.js";
import { i as c, r as l } from "./utils.js";
var u = t(e(), 1),
  d = [
    {
      id: `announcements`,
      label: `Duyurular`,
      icon: `fa-bell`,
      titleField: `title`,
      fields: [
        { name: `title`, label: `Başlık`, type: `text`, required: !0 },
        { name: `content`, label: `İçerik`, type: `textarea`, required: !0 },
        { name: `publish_date`, label: `Yayın Tarihi`, type: `datetime-local` },
        {
          name: `_images`,
          label: `Görseller`,
          type: `image-upload`,
          virtual: !0,
        },
        {
          name: `is_published`,
          label: `Yayında`,
          type: `checkbox`,
          default: !0,
        },
      ],
    },
    {
      id: `projects`,
      label: `Projeler`,
      icon: `fa-folder-open`,
      titleField: `title`,
      fields: [
        { name: `title`, label: `Başlık`, type: `text`, required: !0 },
        {
          name: `description`,
          label: `Açıklama`,
          type: `textarea`,
          required: !0,
        },
        {
          name: `status`,
          label: `Durum`,
          type: `select`,
          options: [`active`, `done`, `plan`],
          default: `active`,
        },
        { name: `funder`, label: `Fon Kaynağı`, type: `text` },
        { name: `date_range`, label: `Tarih Aralığı`, type: `text` },
        {
          name: `progress_pct`,
          label: `İlerleme (%)`,
          type: `number`,
          min: 0,
          max: 100,
          default: 0,
        },
        { name: `image_url`, label: `Kapak Görseli`, type: `storage-image` },
        { name: `github_url`, label: `GitHub URL`, type: `url` },
        { name: `demo_url`, label: `Demo URL`, type: `url` },
        {
          name: `is_published`,
          label: `Yayında`,
          type: `checkbox`,
          default: !0,
        },
      ],
    },
    {
      id: `etkinlikler`,
      label: `Etkinlikler`,
      icon: `fa-calendar-days`,
      titleField: `title`,
      fields: [
        { name: `title`, label: `Başlık`, type: `text`, required: !0 },
        { name: `description`, label: `Açıklama`, type: `textarea` },
        {
          name: `event_date`,
          label: `Tarih/Saat`,
          type: `datetime-local`,
          required: !0,
        },
        { name: `location`, label: `Konum`, type: `text` },
        {
          name: `_images`,
          label: `Görseller`,
          type: `image-upload`,
          virtual: !0,
        },
        {
          name: `is_published`,
          label: `Yayında`,
          type: `checkbox`,
          default: !0,
        },
      ],
    },
    {
      id: `ekip`,
      label: `Ekip`,
      icon: `fa-users`,
      titleField: `name`,
      fields: [
        { name: `name`, label: `Ad Soyad`, type: `text`, required: !0 },
        { name: `role`, label: `Rol`, type: `text`, required: !0 },
        { name: `expertise`, label: `Uzmanlık`, type: `text` },
        {
          name: `avatar_icon`,
          label: `Profil Görseli`,
          type: `storage-image`,
          default: `fa-user`,
        },
        { name: `email`, label: `E-posta`, type: `email` },
        { name: `linkedin_url`, label: `LinkedIn URL`, type: `url` },
        { name: `github_url`, label: `GitHub URL`, type: `url` },
        { name: `scholar_url`, label: `Scholar URL`, type: `url` },
        { name: `website_url`, label: `Web URL`, type: `url` },
        {
          name: `priority`,
          label: `Öncelik`,
          type: `number`,
          min: 1,
          max: 4,
          default: 1,
        },
        { name: `sort_order`, label: `Sıralama`, type: `number`, default: 0 },
        {
          name: `is_published`,
          label: `Yayında`,
          type: `checkbox`,
          default: !0,
        },
      ],
    },
    {
      id: `yayinlar`,
      label: `Yayınlar`,
      icon: `fa-book-open`,
      titleField: `title`,
      fields: [
        { name: `title`, label: `Başlık`, type: `text`, required: !0 },
        { name: `authors`, label: `Yazarlar`, type: `text`, required: !0 },
        { name: `venue`, label: `Yayın Yeri`, type: `text`, required: !0 },
        {
          name: `pub_type`,
          label: `Tür`,
          type: `select`,
          options: [`journal`, `conference`],
          default: `journal`,
        },
        {
          name: `pub_year`,
          label: `Yıl`,
          type: `number`,
          min: 1900,
          max: 2100,
          required: !0,
        },
        { name: `pdf_url`, label: `PDF URL`, type: `url` },
        { name: `doi_url`, label: `DOI URL`, type: `url` },
        {
          name: `is_published`,
          label: `Yayında`,
          type: `checkbox`,
          default: !0,
        },
      ],
    },
    {
      id: `arastirma_alanlari`,
      label: `Araştırma`,
      icon: `fa-flask`,
      titleField: `title`,
      fields: [
        {
          name: `icon`,
          label: `Görsel`,
          type: `storage-image`,
          default: `fa-shield`,
        },
        { name: `title`, label: `Başlık`, type: `text`, required: !0 },
        { name: `description`, label: `Açıklama`, type: `textarea` },
        { name: `sort_order`, label: `Sıralama`, type: `number`, default: 0 },
        {
          name: `is_published`,
          label: `Yayında`,
          type: `checkbox`,
          default: !0,
        },
      ],
    },
    {
      id: `oduller`,
      label: `Ödüller`,
      icon: `fa-trophy`,
      titleField: `title`,
      fields: [
        {
          name: `year`,
          label: `Yıl`,
          type: `number`,
          min: 1900,
          max: 2100,
          required: !0,
        },
        { name: `title`, label: `Başlık`, type: `text`, required: !0 },
        { name: `description`, label: `Açıklama`, type: `textarea` },
        {
          name: `color_scheme`,
          label: `Renk`,
          type: `select`,
          options: [`cyan`, `green`, `orange`, `purple`],
          default: `cyan`,
        },
        { name: `sort_order`, label: `Sıralama`, type: `number`, default: 0 },
        {
          name: `is_published`,
          label: `Yayında`,
          type: `checkbox`,
          default: !0,
        },
      ],
    },
    {
      id: `ortaklar`,
      label: `Ortaklar`,
      icon: `fa-handshake`,
      titleField: `name`,
      fields: [
        { name: `name`, label: `Ad`, type: `text`, required: !0 },
        { name: `icon`, label: `İkon`, type: `text`, default: `fa-building` },
        { name: `url`, label: `URL`, type: `url` },
        { name: `sort_order`, label: `Sıralama`, type: `number`, default: 0 },
        {
          name: `is_published`,
          label: `Yayında`,
          type: `checkbox`,
          default: !0,
        },
      ],
    },
    {
      id: `site_ayarlari`,
      label: `Ayarlar`,
      icon: `fa-gear`,
      titleField: `key`,
      fields: [
        {
          name: `key`,
          label: `Anahtar`,
          type: `text`,
          required: !0,
          createOnly: !0,
        },
        { name: `value`, label: `Değer`, type: `textarea`, required: !0 },
      ],
    },
  ];
function f(e) {
  return d.find((t) => t.id === e) || d[0];
}
var ee = new Set([`announcements`, `projects`, `etkinlikler`]),
  p = {
    announcements: [[`announcements`]],
    projects: [[`projects`], [`publicCounts`]],
    etkinlikler: [[`events`]],
    ekip: [[`team`], [`publicCounts`]],
    yayinlar: [[`publications`], [`publicCounts`]],
    arastirma_alanlari: [[`researchAreas`]],
    oduller: [[`awards`]],
    ortaklar: [[`partners`], [`publicCounts`]],
    site_ayarlari: [[`siteSettings`]],
  };
function te(e) {
  return p[e] || [];
}
function ne(e, t) {
  let n = new Map();
  return (
    t.forEach((e) => {
      let t = String(e.entity_id),
        r = n.get(t) || [];
      (r.push({ image_url: e.image_url }), n.set(t, r));
    }),
    e.map((e) => ({ ...e, images: (e.id && n.get(String(e.id))) || [] }))
  );
}
function re(e) {
  if (!e) return ``;
  let t = new Date(String(e));
  if (Number.isNaN(t.getTime())) return ``;
  let n = (e) => String(e).padStart(2, `0`);
  return `${t.getFullYear()}-${n(t.getMonth() + 1)}-${n(t.getDate())}T${n(t.getHours())}:${n(t.getMinutes())}`;
}
function m(e) {
  if (!e) return null;
  let t = new Date(String(e));
  if (Number.isNaN(t.getTime()))
    throw Error(`Geçerli bir tarih ve saat girin.`);
  return t.toISOString();
}
async function ie({ table: e, tableDef: t, editing: n, formData: r, rpc: i }) {
  let a = {};
  t.fields.forEach((e) => {
    if (e.virtual || (n && e.createOnly)) return;
    let t = r[e.name];
    e.type === `number`
      ? (a[e.name] = t === `` ? null : Number(t))
      : e.type === `checkbox`
        ? (a[e.name] = !!t)
        : e.type === `datetime-local`
          ? (a[e.name] = m(t))
          : (a[e.name] = t === `` ? null : t);
  });
  let o;
  if (n) {
    let t = e === `site_ayarlari` ? n.key : n.id;
    if (!t) throw Error(`Güncellenecek kayıt kimliği bulunamadı.`);
    let { data: r, error: s } = await i(`admin_update_record`, {
      p_table: e,
      p_id: t,
      p_data: a,
    });
    if (s) throw s;
    o = r;
  } else {
    let { data: t, error: n } = await i(`admin_create_record`, {
      p_table: e,
      p_data: a,
    });
    if (n) throw n;
    o = t;
  }
  let s = t.fields.find((e) => e.virtual);
  if (s && ee.has(e)) {
    if (!o?.id) throw Error(`Görseller için kayıt kimliği alınamadı.`);
    let t = String(r[s.name] || ``)
        .split(
          `
`,
        )
        .map((e) => e.trim())
        .filter(Boolean),
      { error: n } = await i(`admin_set_record_images`, {
        p_entity_type: e,
        p_entity_id: o.id,
        p_images: t.map((e, t) => ({
          image_url: e,
          alt_text: ``,
          sort_order: t,
          is_published: !0,
        })),
      });
    if (n) throw n;
  }
  return o;
}
var h = `research-area-images`,
  g = `research-areas`,
  _ = `team-member-images`,
  v = `team-members`,
  y = `project-images`,
  b = `projects`,
  x = new Map([
    [`image/jpeg`, `jpg`],
    [`image/png`, `png`],
    [`image/webp`, `webp`],
    [`image/gif`, `gif`],
  ]),
  S = 256;
function C(e) {
  if (!x.has(e.type))
    throw Error(
      `Yalnızca JPG, PNG, WebP veya GIF görselleri yükleyebilirsiniz.`,
    );
  if (e.size > 5242880) throw Error(`Görsel boyutu en fazla 5 MB olabilir.`);
}
function w(e, t, n) {
  try {
    let r = new URL(e),
      i = `/storage/v1/object/public/${t}/`,
      a = r.pathname.indexOf(i);
    if (a < 0) return null;
    let o = decodeURIComponent(r.pathname.slice(a + i.length));
    return o.startsWith(`${n}/`) ? o : null;
  } catch {
    return null;
  }
}
function T(e) {
  return w(e, h, g);
}
function E(e) {
  return w(e, _, v);
}
function D(e) {
  return w(e, y, b);
}
function O(e, t, n) {
  let r = Math.min(e, t, n);
  return r >= 225 && Math.max(e, t, n) - r <= 18;
}
function k(e) {
  let t = e.getContext(`2d`, { willReadFrequently: !0 });
  if (!t) return e;
  let n = t.getImageData(0, 0, e.width, e.height),
    r = e.width,
    i = e.height,
    a = -1,
    o = -1;
  for (let t = 0; t < e.height; t += 1)
    for (let s = 0; s < e.width; s += 1) {
      let c = (t * e.width + s) * 4,
        l = n.data[c],
        u = n.data[c + 1],
        d = n.data[c + 2];
      (O(l, u, d) && (n.data[c + 3] = 0),
        n.data[c + 3] > 8 &&
          ((r = Math.min(r, s)),
          (i = Math.min(i, t)),
          (a = Math.max(a, s)),
          (o = Math.max(o, t))));
    }
  if ((t.putImageData(n, 0, 0), a < r || o < i)) return e;
  let s = a - r + 1,
    c = o - i + 1,
    l = Math.max(4, Math.round(Math.max(s, c) * 0.08)),
    u = Math.max(s, c) + l * 2,
    d = document.createElement(`canvas`);
  ((d.width = u), (d.height = u));
  let f = d.getContext(`2d`);
  return f
    ? (f.drawImage(
        e,
        r,
        i,
        s,
        c,
        Math.round((u - s) / 2),
        Math.round((u - c) / 2),
        s,
        c,
      ),
      d)
    : e;
}
async function A(e, t, n = !1) {
  if (e.type === `image/gif` || typeof createImageBitmap != `function`)
    return e;
  let r = await createImageBitmap(e);
  try {
    let i = Math.min(1, t / Math.max(r.width, r.height));
    if (i === 1 && e.type === `image/png` && !n) return e;
    let a = document.createElement(`canvas`);
    ((a.width = Math.max(1, Math.round(r.width * i))),
      (a.height = Math.max(1, Math.round(r.height * i))));
    let o = a.getContext(`2d`);
    if (!o) return e;
    ((o.imageSmoothingEnabled = !0),
      (o.imageSmoothingQuality = `high`),
      o.clearRect(0, 0, a.width, a.height),
      o.drawImage(r, 0, 0, a.width, a.height));
    let s = n ? k(a) : a,
      c = await new Promise((e) => s.toBlob(e, `image/png`));
    if (!c) return e;
    let l = e.name.replace(/\.[^.]+$/, ``) || `research-icon`;
    return new File([c], `${l}.png`, {
      type: `image/png`,
      lastModified: Date.now(),
    });
  } finally {
    r.close();
  }
}
async function j(e, t, n, r, i) {
  C(e);
  let a = await A(e, i, n === h),
    s = x.get(a.type),
    c = `${r}/${t}/${crypto.randomUUID()}.${s}`,
    { error: l } = await o.storage
      .from(n)
      .upload(c, a, { cacheControl: `3600`, contentType: a.type, upsert: !1 });
  if (l) throw l;
  let { data: u } = o.storage.from(n).getPublicUrl(c);
  return { path: c, publicUrl: u.publicUrl };
}
function M(e, t) {
  return j(e, t, h, g, S);
}
function N(e, t) {
  return j(e, t, _, v, S);
}
function P(e, t) {
  return j(e, t, y, b, 1600);
}
async function F(e) {
  let { error: t } = await o.storage.from(h).remove([e]);
  if (t) throw t;
}
async function I(e) {
  let { error: t } = await o.storage.from(_).remove([e]);
  if (t) throw t;
}
async function L(e) {
  let { error: t } = await o.storage.from(y).remove([e]);
  if (t) throw t;
}
var R = `admin_get_instagram_sync_status`,
  z = `instagram-sync`;
function B(e) {
  return Array.isArray(e) ? B(e[0]) : e && typeof e == `object` ? e : {};
}
function V(e) {
  let t = Number(e);
  return Number.isFinite(t) && t >= 0 ? t : 0;
}
function H(e) {
  return typeof e == `string` && e.trim() ? e : null;
}
function U(e) {
  return e === `running` ||
    e === `partial` ||
    e === `failed` ||
    e === `already_running`
    ? e
    : `success`;
}
function W(e) {
  let t = B(e);
  return {
    status: U(t.status),
    discovered: V(t.discovered ?? t.discovered_count),
    imported: V(t.imported ?? t.imported_count),
    skipped: V(t.skipped ?? t.skipped_count),
    retrying: V(t.retrying ?? t.retry_count),
    trigger: t.trigger === `cron` || t.trigger === `manual` ? t.trigger : null,
    started_at: H(t.started_at),
    finished_at: H(t.finished_at),
    last_error: H(t.last_error),
  };
}
function G(e) {
  let t = B(e),
    n = t.latest_run ?? t.last_run,
    r = t.status != null || t.run_status != null,
    i =
      n == null
        ? r
          ? W({ ...t, status: t.run_status ?? t.status })
          : null
        : W(n),
    a = H(t.token_expires_at),
    o = Date.now() + 1296e6,
    s = !!(a && !Number.isNaN(Date.parse(a)) && Date.parse(a) <= o);
  return {
    configured:
      typeof t.configured == `boolean`
        ? t.configured
        : typeof t.is_configured == `boolean`
          ? t.is_configured
          : null,
    connected: typeof t.connected == `boolean` ? t.connected : null,
    account_username:
      H(t.account_username)?.replace(/^@/, ``) || `cybersenselab`,
    initial_sync_completed: t.initial_sync_completed === !0,
    last_seen_media_id: H(t.last_seen_media_id),
    last_seen_media_timestamp: H(t.last_seen_media_timestamp),
    last_success_at: H(t.last_success_at),
    token_expires_at: a,
    token_refresh_required: t.token_refresh_required === !0 || s,
    is_running: t.is_running === !0,
    locked_until: H(t.locked_until),
    latest_run: i,
  };
}
async function ae(e) {
  let { data: t, error: n } = await e.rpc(R);
  if (n) throw n;
  return G(t);
}
async function oe(e, t) {
  if (!t)
    throw Error(
      `Instagram eşitlemesi için geçerli bir admin oturumu gerekiyor.`,
    );
  let { data: n, error: r } = await e.functions.invoke(z, {
    headers: { Authorization: `Bearer ${t}` },
  });
  if (r) throw r;
  return W(n);
}
var K = n();
function q(e, t) {
  return e instanceof Error
    ? e.message
    : e && typeof e == `object` && `message` in e
      ? String(e.message)
      : t;
}
function J(e) {
  return e === `arastirma_alanlari`
    ? `icon`
    : e === `ekip`
      ? `avatar_icon`
      : e === `projects`
        ? `image_url`
        : null;
}
function Y(e, t) {
  let n = String(t || ``);
  return e === `arastirma_alanlari`
    ? T(n)
    : e === `ekip`
      ? E(n)
      : e === `projects`
        ? D(n)
        : null;
}
function se(e, t, n) {
  if (e === `arastirma_alanlari`) return M(t, n);
  if (e === `ekip`) return N(t, n);
  if (e === `projects`) return P(t, n);
  throw Error(`Bu bölüm görsel yüklemeyi desteklemiyor.`);
}
function X(e, t) {
  return e === `arastirma_alanlari`
    ? F(t)
    : e === `ekip`
      ? I(t)
      : e === `projects`
        ? L(t)
        : Promise.resolve();
}
var ce = {
    running: `Çalışıyor`,
    success: `Başarılı`,
    partial: `Kısmi başarı`,
    failed: `Başarısız`,
    already_running: `Zaten çalışıyor`,
  },
  le = {
    running: `bg-blue-100 text-blue-700`,
    success: `bg-green-100 text-green-700`,
    partial: `bg-amber-100 text-amber-700`,
    failed: `bg-red-100 text-red-700`,
    already_running: `bg-blue-100 text-blue-700`,
  };
function ue(e) {
  if (!e) return `Henüz yok`;
  let t = new Date(e);
  return Number.isNaN(t.getTime())
    ? e
    : new Intl.DateTimeFormat(`tr-TR`, {
        dateStyle: `medium`,
        timeStyle: `short`,
      }).format(t);
}
function de(e) {
  if (typeof e != `string`) return null;
  try {
    let t = new URL(e);
    return t.protocol === `https:` && /(^|\.)instagram\.com$/i.test(t.hostname)
      ? t.href
      : null;
  } catch {
    return null;
  }
}
function Z() {
  let { isAdmin: e, isLoading: t, session: n, signOut: p } = i(),
    m = r(),
    h = a(),
    [g, _] = (0, u.useState)(d[0].id),
    [v, y] = (0, u.useState)([]),
    [b, x] = (0, u.useState)(!0),
    [S, w] = (0, u.useState)(!1),
    [T, E] = (0, u.useState)(null),
    [D, O] = (0, u.useState)({}),
    [k, A] = (0, u.useState)(!1),
    [j, M] = (0, u.useState)(null),
    [N, P] = (0, u.useState)(``),
    [F, I] = (0, u.useState)(null),
    [L, R] = (0, u.useState)(!0),
    [z, B] = (0, u.useState)(``),
    [V, H] = (0, u.useState)(!1),
    U = f(g),
    W = (0, u.useCallback)(() => {
      (M(null), P((e) => (e && URL.revokeObjectURL(e), ``)));
    }, []),
    G = (0, u.useCallback)(() => {
      (W(), w(!1));
    }, [W]);
  ((0, u.useEffect)(
    () => () => {
      N && URL.revokeObjectURL(N);
    },
    [N],
  ),
    (0, u.useEffect)(() => {
      !t && !e && m(`/login`);
    }, [t, e, m]));
  let Z = (0, u.useCallback)(async () => {
      await Promise.all(te(g).map((e) => h.invalidateQueries({ queryKey: e })));
    }, [g, h]),
    Q = (0, u.useCallback)(async () => {
      x(!0);
      try {
        let { data: e, error: t } = await o.rpc(`admin_list_records`, {
          p_table: g,
        });
        if (t) throw t;
        let n = Array.isArray(e) ? e : [];
        if (ee.has(g) && n.length > 0) {
          let e = n.map((e) => e.id).filter((e) => typeof e == `string`),
            { data: t, error: r } = await o.rpc(`admin_list_record_images`, {
              p_entity_type: g,
              p_entity_ids: e,
            });
          if (r) throw r;
          n = ne(n, Array.isArray(t) ? t : []);
        }
        y(n);
      } catch (e) {
        (y([]), s.error(q(e, `Kayıtlar yüklenemedi.`)), console.error(e));
      } finally {
        x(!1);
      }
    }, [g]);
  (0, u.useEffect)(() => {
    e && Q();
  }, [e, g, Q]);
  let $ = (0, u.useCallback)(async () => {
    (R(!0), B(``));
    try {
      I(await ae(o));
    } catch (e) {
      (I(null), B(q(e, `Instagram eşitleme durumu alınamadı.`)));
    } finally {
      R(!1);
    }
  }, []);
  (0, u.useEffect)(() => {
    e && $();
  }, [e, $]);
  let fe = async () => {
      if (!V) {
        H(!0);
        try {
          let e = await oe(o, n?.access_token);
          (e.status === `success`
            ? s.success(
                `Instagram eşitlemesi tamamlandı: ${e.imported} duyuru aktarıldı.`,
              )
            : e.status === `partial`
              ? s(
                  `Instagram eşitlemesi kısmen tamamlandı: ${e.imported} aktarıldı, ${e.retrying} kayıt yeniden denenecek.`,
                  { icon: `⚠️` },
                )
              : e.status === `already_running` || e.status === `running`
                ? s(`Instagram eşitlemesi zaten çalışıyor.`, { icon: `⏳` })
                : s.error(
                    e.last_error || `Instagram eşitlemesi başarısız oldu.`,
                  ),
            e.imported > 0 &&
              (await h.invalidateQueries({ queryKey: [`announcements`] }),
              g === `announcements` && (await Q())));
        } catch (e) {
          s.error(q(e, `Instagram eşitlemesi başlatılamadı.`));
        } finally {
          (await $(), H(!1));
        }
      }
    },
    pe = () => {
      (W(), E(null));
      let e = {};
      (U.fields.forEach((t) => {
        t.default === void 0
          ? t.type === `checkbox`
            ? (e[t.name] = !0)
            : (e[t.name] = ``)
          : (e[t.name] = t.default);
      }),
        O(e),
        w(!0));
    },
    me = (e) => {
      (W(), E(e));
      let t = {};
      (U.fields.forEach((n) => {
        n.virtual
          ? (t[n.name] = (e.images || []).map((e) => e.image_url).join(`
`))
          : n.type === `datetime-local`
            ? (t[n.name] = re(e[n.name]))
            : (t[n.name] = e[n.name] ?? n.default ?? ``);
      }),
        O(t),
        w(!0));
    },
    he = async (e) => {
      if (confirm(`Bu kaydı silmek istediğinize emin misiniz?`))
        try {
          let t = g === `site_ayarlari` ? e.key : e.id;
          if (!t) throw Error(`Silinecek kayıt kimliği bulunamadı.`);
          let { error: n } = await o.rpc(`admin_delete_record`, {
            p_table: g,
            p_id: t,
          });
          if (n) throw n;
          let r = J(g);
          if (r) {
            let t = Y(g, e[r]);
            if (t)
              try {
                await X(g, t);
              } catch (e) {
                (console.error(
                  `Silinen kaydın Storage görseli temizlenemedi:`,
                  e,
                ),
                  s.error(
                    `Kayıt silindi ancak eski görsel Storage’dan temizlenemedi.`,
                  ));
              }
          }
          (await Z(), await Q(), s.success(`Kayıt silindi.`));
        } catch (e) {
          (s.error(q(e, `Silme başarısız.`)), console.error(e));
        }
    },
    ge = async (e) => {
      (e.preventDefault(), A(!0));
      let t = null;
      try {
        let e = { ...D },
          r = J(g),
          i = r ? Y(g, T?.[r]) : null;
        if (r && j) {
          let i = n?.user?.id;
          if (!i)
            throw Error(
              `Görsel yüklemek için geçerli bir admin oturumu gerekiyor.`,
            );
          let a = await se(g, j, i);
          ((t = a.path), (e[r] = a.publicUrl));
        }
        await ie({
          table: g,
          tableDef: U,
          editing: T,
          formData: e,
          rpc: (e, t) => o.rpc(e, t),
        });
        let a = r ? Y(g, e[r]) : null;
        if (i && i !== a)
          try {
            await X(g, i);
          } catch (e) {
            (console.error(`Eski Storage görseli temizlenemedi:`, e),
              s.error(
                `Kayıt güncellendi ancak eski görsel Storage’dan temizlenemedi.`,
              ));
          }
        (await Z(),
          await Q(),
          G(),
          s.success(T ? `Kayıt güncellendi.` : `Kayıt oluşturuldu.`));
      } catch (e) {
        if (t)
          try {
            await X(g, t);
          } catch (e) {
            console.error(
              `Başarısız kaydın yüklenen görseli geri alınamadı:`,
              e,
            );
          }
        (s.error(q(e, `Kayıt işlemi başarısız.`)), console.error(e));
      } finally {
        A(!1);
      }
    },
    _e = async () => {
      (await p(), m(`/login`));
    };
  if (t || !e) return null;
  let ve = (e) =>
    c(String(e[U.titleField] || e.title || e.name || e.key || e.id || `-`), 80);
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(`div`, {
        className: `bg-navy py-6`,
        children: (0, K.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-4 flex items-center justify-between flex-wrap gap-3`,
          children: [
            (0, K.jsxs)(`div`, {
              children: [
                (0, K.jsxs)(`h1`, {
                  className: `text-2xl font-extrabold text-white flex items-center gap-3`,
                  children: [
                    (0, K.jsx)(`i`, {
                      className: `fa fa-shield-halved text-cyan`,
                    }),
                    ` Yönetim Paneli`,
                  ],
                }),
                (0, K.jsx)(`p`, {
                  className: `text-white/40 text-sm mt-1`,
                  children: `Supabase RPC üzerinden güvenli içerik yönetimi`,
                }),
              ],
            }),
            (0, K.jsxs)(`div`, {
              className: `flex items-center gap-3`,
              children: [
                (0, K.jsx)(`span`, {
                  className: `text-white/60 text-sm`,
                  children: n?.user?.email || `Admin`,
                }),
                (0, K.jsxs)(`button`, {
                  onClick: _e,
                  className: `btn-outline text-xs !py-2 !px-4`,
                  children: [
                    (0, K.jsx)(`i`, { className: `fa fa-right-from-bracket` }),
                    ` Çıkış`,
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, K.jsxs)(`div`, {
        className: `max-w-7xl mx-auto px-4 py-6`,
        children: [
          (0, K.jsxs)(`section`, {
            className: `bg-white border border-gray-100 rounded-2xl p-5 mb-6`,
            "aria-labelledby": `instagram-sync-title`,
            children: [
              (0, K.jsxs)(`div`, {
                className: `flex items-start justify-between gap-4 flex-wrap`,
                children: [
                  (0, K.jsxs)(`div`, {
                    children: [
                      (0, K.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [
                          (0, K.jsx)(`i`, {
                            className: `fa-brands fa-instagram text-fuchsia-600`,
                            "aria-hidden": `true`,
                          }),
                          (0, K.jsx)(`h2`, {
                            id: `instagram-sync-title`,
                            className: `font-bold text-navy`,
                            children: `Instagram Eşitleme`,
                          }),
                        ],
                      }),
                      (0, K.jsxs)(`p`, {
                        className: `text-sm text-gray-500 mt-1`,
                        children: [`@`, F?.account_username || `cybersenselab`],
                      }),
                    ],
                  }),
                  (0, K.jsxs)(`button`, {
                    type: `button`,
                    onClick: () => void fe(),
                    disabled: V || F?.is_running === !0 || L,
                    className: `btn-cyber text-xs !py-2.5 !px-4 disabled:opacity-50 disabled:cursor-not-allowed`,
                    children: [
                      (0, K.jsx)(`i`, {
                        className: `fa ${V ? `fa-circle-notch fa-spin` : `fa-arrows-rotate`}`,
                      }),
                      V ? `Eşitleniyor` : `Şimdi eşitle`,
                    ],
                  }),
                ],
              }),
              L
                ? (0, K.jsxs)(`div`, {
                    className: `mt-5 flex items-center gap-2 text-sm text-gray-400`,
                    role: `status`,
                    children: [
                      (0, K.jsx)(`i`, {
                        className: `fa fa-circle-notch fa-spin`,
                      }),
                      ` Durum yükleniyor`,
                    ],
                  })
                : z
                  ? (0, K.jsxs)(`div`, {
                      className: `mt-5 rounded-xl bg-red-50 px-4 py-3 flex items-center justify-between gap-3`,
                      role: `alert`,
                      children: [
                        (0, K.jsx)(`span`, {
                          className: `text-sm text-red-700`,
                          children: z,
                        }),
                        (0, K.jsx)(`button`, {
                          type: `button`,
                          onClick: () => void $(),
                          className: `text-xs font-semibold text-red-700 underline`,
                          children: `Yeniden dene`,
                        }),
                      ],
                    })
                  : F
                    ? (0, K.jsxs)(K.Fragment, {
                        children: [
                          (0, K.jsxs)(`div`, {
                            className: `mt-5 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm`,
                            children: [
                              (0, K.jsxs)(`div`, {
                                className: `rounded-xl bg-gray-50 p-3`,
                                children: [
                                  (0, K.jsx)(`span`, {
                                    className: `block text-[11px] text-gray-400`,
                                    children: `Yapılandırma / bağlantı`,
                                  }),
                                  (0, K.jsx)(`span`, {
                                    className: `font-semibold ${F.configured === null ? `text-gray-500` : F.configured && F.connected !== !1 ? `text-green-700` : `text-red-600`}`,
                                    children:
                                      F.configured === null
                                        ? `Sunucu yapılandırması doğrulanmadı`
                                        : F.configured
                                          ? F.connected === !0
                                            ? `Hazır · Bağlı`
                                            : F.connected === !1
                                              ? `Hazır · Bağlantı hatası`
                                              : `Hazır · Doğrulanmadı`
                                          : `Eksik`,
                                  }),
                                ],
                              }),
                              (0, K.jsxs)(`div`, {
                                className: `rounded-xl bg-gray-50 p-3`,
                                children: [
                                  (0, K.jsx)(`span`, {
                                    className: `block text-[11px] text-gray-400`,
                                    children: `Son başarılı çalışma`,
                                  }),
                                  (0, K.jsx)(`span`, {
                                    className: `font-semibold text-navy`,
                                    children: ue(F.last_success_at),
                                  }),
                                ],
                              }),
                              (0, K.jsxs)(`div`, {
                                className: `rounded-xl bg-gray-50 p-3`,
                                children: [
                                  (0, K.jsx)(`span`, {
                                    className: `block text-[11px] text-gray-400`,
                                    children: `Son tetikleyici`,
                                  }),
                                  (0, K.jsx)(`span`, {
                                    className: `font-semibold text-navy`,
                                    children:
                                      F.latest_run?.trigger === `manual`
                                        ? `Manuel`
                                        : F.latest_run?.trigger === `cron`
                                          ? `Otomatik`
                                          : `—`,
                                  }),
                                ],
                              }),
                              (0, K.jsxs)(`div`, {
                                className: `rounded-xl bg-gray-50 p-3`,
                                children: [
                                  (0, K.jsx)(`span`, {
                                    className: `block text-[11px] text-gray-400`,
                                    children: `Sonuç`,
                                  }),
                                  F.latest_run
                                    ? (0, K.jsx)(`span`, {
                                        className: `inline-block mt-0.5 px-2 py-0.5 rounded-full text-xs font-semibold ${le[F.latest_run.status]}`,
                                        children: ce[F.latest_run.status],
                                      })
                                    : (0, K.jsx)(`span`, {
                                        className: `font-semibold text-gray-400`,
                                        children: `Henüz yok`,
                                      }),
                                ],
                              }),
                            ],
                          }),
                          F.latest_run &&
                            (0, K.jsxs)(`div`, {
                              className: `mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-gray-500`,
                              children: [
                                (0, K.jsxs)(`span`, {
                                  children: [
                                    `Bulunan: `,
                                    (0, K.jsx)(`strong`, {
                                      className: `text-navy`,
                                      children: F.latest_run.discovered,
                                    }),
                                  ],
                                }),
                                (0, K.jsxs)(`span`, {
                                  children: [
                                    `Aktarılan: `,
                                    (0, K.jsx)(`strong`, {
                                      className: `text-navy`,
                                      children: F.latest_run.imported,
                                    }),
                                  ],
                                }),
                                (0, K.jsxs)(`span`, {
                                  children: [
                                    `Atlanan: `,
                                    (0, K.jsx)(`strong`, {
                                      className: `text-navy`,
                                      children: F.latest_run.skipped,
                                    }),
                                  ],
                                }),
                                (0, K.jsxs)(`span`, {
                                  children: [
                                    `Yeniden denenecek: `,
                                    (0, K.jsx)(`strong`, {
                                      className: `text-navy`,
                                      children: F.latest_run.retrying,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          F.latest_run?.last_error &&
                            (0, K.jsx)(`p`, {
                              className: `mt-3 rounded-xl bg-red-50 px-4 py-2 text-xs text-red-700`,
                              role: `alert`,
                              children: F.latest_run.last_error,
                            }),
                          F.token_refresh_required &&
                            (0, K.jsxs)(`p`, {
                              className: `mt-3 rounded-xl bg-amber-50 px-4 py-2 text-xs text-amber-800`,
                              role: `alert`,
                              children: [
                                (0, K.jsx)(`i`, {
                                  className: `fa fa-triangle-exclamation mr-1`,
                                }),
                                ` Instagram erişim tokenı yakında sona erecek`,
                                F.token_expires_at
                                  ? ` (${ue(F.token_expires_at)}).`
                                  : `.`,
                                ` Yenileyip Supabase secret değerini güncelleyin.`,
                              ],
                            }),
                        ],
                      })
                    : null,
            ],
          }),
          (0, K.jsxs)(`div`, {
            className: `flex flex-col lg:flex-row gap-6`,
            children: [
              (0, K.jsx)(`aside`, {
                className: `lg:w-56 shrink-0`,
                children: (0, K.jsx)(`div`, {
                  className: `bg-white border border-gray-100 rounded-2xl p-2 space-y-0.5 sticky top-20`,
                  children: d.map((e) =>
                    (0, K.jsxs)(
                      `button`,
                      {
                        onClick: () => _(e.id),
                        className: `w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-left
                    ${g === e.id ? `bg-cyan/10 text-cyan` : `text-gray-500 hover:text-navy hover:bg-gray-50`}`,
                        children: [
                          (0, K.jsx)(`i`, {
                            className: `fa ${e.icon} w-4 text-center`,
                          }),
                          e.label,
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
              }),
              (0, K.jsxs)(`main`, {
                className: `flex-1 min-w-0`,
                children: [
                  (0, K.jsxs)(`div`, {
                    className: `flex items-center justify-between mb-5 flex-wrap gap-3`,
                    children: [
                      (0, K.jsxs)(`div`, {
                        children: [
                          (0, K.jsx)(`h2`, {
                            className: `text-xl font-bold text-navy`,
                            children: U.label,
                          }),
                          (0, K.jsxs)(`p`, {
                            className: `text-gray-400 text-sm`,
                            children: [v.length, ` kayıt`],
                          }),
                        ],
                      }),
                      (0, K.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [
                          (0, K.jsx)(`button`, {
                            onClick: Q,
                            className: `w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center\r
                                                      text-gray-400 hover:text-cyan hover:border-cyan/30 transition-all`,
                            title: `Yenile`,
                            children: (0, K.jsx)(`i`, {
                              className: `fa fa-rotate-right text-sm`,
                            }),
                          }),
                          (0, K.jsxs)(`button`, {
                            onClick: pe,
                            className: `btn-cyber text-xs !py-2.5 !px-4`,
                            children: [
                              (0, K.jsx)(`i`, { className: `fa fa-plus` }),
                              ` Yeni`,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  b
                    ? (0, K.jsx)(`div`, {
                        className: `flex items-center justify-center py-20`,
                        children: (0, K.jsx)(`div`, {
                          className: `w-10 h-10 rounded-full border-2 border-cyan/20 border-t-cyan animate-spin`,
                        }),
                      })
                    : v.length === 0
                      ? (0, K.jsxs)(`div`, {
                          className: `text-center py-20 bg-white rounded-2xl border border-gray-100`,
                          children: [
                            (0, K.jsx)(`i`, {
                              className: `fa fa-inbox text-4xl text-gray-200 mb-3`,
                            }),
                            (0, K.jsx)(`p`, {
                              className: `text-gray-400`,
                              children: `Bu bölümde kayıt yok.`,
                            }),
                          ],
                        })
                      : (0, K.jsx)(`div`, {
                          className: `space-y-2`,
                          children: v.map((e) =>
                            (0, K.jsxs)(
                              `div`,
                              {
                                className: `bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-4\r
                                  hover:border-cyan/20 transition-all`,
                                children: [
                                  (0, K.jsxs)(`div`, {
                                    className: `flex-1 min-w-0`,
                                    children: [
                                      (0, K.jsxs)(`div`, {
                                        className: `flex items-center gap-2 mb-1`,
                                        children: [
                                          (0, K.jsx)(`h3`, {
                                            className: `font-semibold text-navy text-sm truncate`,
                                            children: ve(e),
                                          }),
                                          e.is_published !== void 0 &&
                                            (0, K.jsx)(`span`, {
                                              className: `text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0
                            ${e.is_published ? `bg-green-100 text-green-700` : `bg-gray-100 text-gray-500`}`,
                                              children: e.is_published
                                                ? `Yayında`
                                                : `Taslak`,
                                            }),
                                          g === `announcements` &&
                                            e.source_type === `instagram` &&
                                            (de(e.source_url)
                                              ? (0, K.jsxs)(`a`, {
                                                  href:
                                                    de(e.source_url) || void 0,
                                                  target: `_blank`,
                                                  rel: `noopener noreferrer`,
                                                  className: `text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 bg-fuchsia-50 text-fuchsia-700 hover:bg-fuchsia-100`,
                                                  onClick: (e) =>
                                                    e.stopPropagation(),
                                                  children: [
                                                    (0, K.jsx)(`i`, {
                                                      className: `fa-brands fa-instagram mr-1`,
                                                    }),
                                                    `Instagram`,
                                                  ],
                                                })
                                              : (0, K.jsxs)(`span`, {
                                                  className: `text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 bg-fuchsia-50 text-fuchsia-700`,
                                                  children: [
                                                    (0, K.jsx)(`i`, {
                                                      className: `fa-brands fa-instagram mr-1`,
                                                    }),
                                                    `Instagram`,
                                                  ],
                                                })),
                                        ],
                                      }),
                                      (0, K.jsxs)(`div`, {
                                        className: `flex items-center gap-3 text-[11px] text-gray-400`,
                                        children: [
                                          e.created_at
                                            ? (0, K.jsxs)(`span`, {
                                                children: [
                                                  (0, K.jsx)(`i`, {
                                                    className: `fa fa-clock mr-1`,
                                                  }),
                                                  l(String(e.created_at)),
                                                ],
                                              })
                                            : null,
                                          e.id &&
                                            (0, K.jsxs)(`span`, {
                                              className: `text-[10px] opacity-50`,
                                              children: [
                                                `ID: `,
                                                String(e.id).slice(0, 8),
                                              ],
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, K.jsxs)(`div`, {
                                    className: `flex items-center gap-1 shrink-0`,
                                    children: [
                                      (0, K.jsx)(`button`, {
                                        onClick: () => me(e),
                                        className: `w-8 h-8 rounded-lg hover:bg-cyan/10 flex items-center justify-center text-gray-400 hover:text-cyan transition-all`,
                                        title: `Düzenle`,
                                        children: (0, K.jsx)(`i`, {
                                          className: `fa fa-pen text-xs`,
                                        }),
                                      }),
                                      (0, K.jsx)(`button`, {
                                        onClick: () => he(e),
                                        className: `w-8 h-8 rounded-lg hover:bg-red-50 flex items-center justify-center text-gray-400 hover:text-red-500 transition-all`,
                                        title: `Sil`,
                                        children: (0, K.jsx)(`i`, {
                                          className: `fa fa-trash text-xs`,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.id || e.key,
                            ),
                          ),
                        }),
                ],
              }),
            ],
          }),
        ],
      }),
      S &&
        (0, K.jsx)(`div`, {
          className: `fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[10vh] bg-black/50 backdrop-blur-sm`,
          onClick: G,
          children: (0, K.jsxs)(`div`, {
            className: `bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl`,
            onClick: (e) => e.stopPropagation(),
            children: [
              (0, K.jsxs)(`div`, {
                className: `sticky top-0 bg-navy text-white p-5 rounded-t-2xl flex items-center justify-between border-b border-cyan/30 z-10`,
                children: [
                  (0, K.jsx)(`h3`, {
                    className: `font-bold`,
                    children: T ? `Kaydı Düzenle` : `Yeni Kayıt`,
                  }),
                  (0, K.jsx)(`button`, {
                    onClick: G,
                    className: `w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors`,
                    children: (0, K.jsx)(`i`, { className: `fa fa-times` }),
                  }),
                ],
              }),
              (0, K.jsxs)(`form`, {
                onSubmit: ge,
                className: `p-5 space-y-4`,
                children: [
                  U.fields.map((e) =>
                    (0, K.jsxs)(
                      `div`,
                      {
                        children: [
                          (0, K.jsxs)(`label`, {
                            className: `block text-xs font-semibold text-gray-500 mb-1.5`,
                            children: [
                              e.label,
                              ` `,
                              e.required &&
                                (0, K.jsx)(`span`, {
                                  className: `text-red-400`,
                                  children: `*`,
                                }),
                            ],
                          }),
                          e.type === `textarea`
                            ? (0, K.jsx)(`textarea`, {
                                value: String(D[e.name] || ``),
                                onChange: (t) =>
                                  O((n) => ({
                                    ...n,
                                    [e.name]: t.target.value,
                                  })),
                                className: `w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm\r
                                 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all\r
                                 min-h-[80px] resize-y`,
                                required: e.required,
                              })
                            : e.type === `select` && e.options
                              ? (0, K.jsx)(`select`, {
                                  value: String(D[e.name] || e.default || ``),
                                  onChange: (t) =>
                                    O((n) => ({
                                      ...n,
                                      [e.name]: t.target.value,
                                    })),
                                  className: `w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm\r
                                 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all bg-white`,
                                  children: e.options.map((e) =>
                                    (0, K.jsx)(
                                      `option`,
                                      {
                                        value: e,
                                        children:
                                          e === `active`
                                            ? `Aktif`
                                            : e === `done`
                                              ? `Tamamlandı`
                                              : e === `plan`
                                                ? `Planlama`
                                                : e === `journal`
                                                  ? `Dergi`
                                                  : e === `conference`
                                                    ? `Konferans`
                                                    : e,
                                      },
                                      e,
                                    ),
                                  ),
                                })
                              : e.type === `checkbox`
                                ? (0, K.jsxs)(`label`, {
                                    className: `flex items-center gap-2 cursor-pointer`,
                                    children: [
                                      (0, K.jsx)(`input`, {
                                        type: `checkbox`,
                                        checked: !!D[e.name],
                                        onChange: (t) =>
                                          O((n) => ({
                                            ...n,
                                            [e.name]: t.target.checked,
                                          })),
                                        className: `w-4 h-4 rounded border-gray-300 text-cyan focus:ring-cyan/20`,
                                      }),
                                      (0, K.jsx)(`span`, {
                                        className: `text-sm text-gray-600`,
                                        children: `Yayında`,
                                      }),
                                    ],
                                  })
                                : e.type === `datetime-local`
                                  ? (0, K.jsx)(`input`, {
                                      type: `datetime-local`,
                                      value: String(D[e.name] || ``),
                                      onChange: (t) =>
                                        O((n) => ({
                                          ...n,
                                          [e.name]: t.target.value,
                                        })),
                                      className: `w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm\r
                                 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all`,
                                      required: e.required,
                                    })
                                  : e.type === `image-upload`
                                    ? (0, K.jsx)(`textarea`, {
                                        value: String(D[e.name] || ``),
                                        onChange: (t) =>
                                          O((n) => ({
                                            ...n,
                                            [e.name]: t.target.value,
                                          })),
                                        placeholder: `Her satıra bir görsel URL'si yazın`,
                                        className: `w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm\r
                                 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all\r
                                 min-h-[60px] resize-y`,
                                      })
                                    : e.type === `storage-image`
                                      ? (0, K.jsx)(`div`, {
                                          className: `rounded-xl border border-dashed border-gray-200 p-3`,
                                          children: (0, K.jsxs)(`div`, {
                                            className: `flex items-center gap-4`,
                                            children: [
                                              (0, K.jsx)(`div`, {
                                                className: `w-20 h-20 shrink-0 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden text-cyan`,
                                                children:
                                                  N ||
                                                  /^https?:\/\//i.test(
                                                    String(D[e.name] || ``),
                                                  )
                                                    ? (0, K.jsx)(`img`, {
                                                        src:
                                                          N ||
                                                          String(D[e.name]),
                                                        alt: `Görsel önizlemesi`,
                                                        className: `w-full h-full ${e.name === `icon` ? `object-contain p-1` : `object-cover`}`,
                                                      })
                                                    : (0, K.jsx)(`i`, {
                                                        className: `fa ${String(D[e.name] || e.default || `fa-image`)} text-2xl`,
                                                      }),
                                              }),
                                              (0, K.jsxs)(`div`, {
                                                className: `flex-1 min-w-0`,
                                                children: [
                                                  (0, K.jsxs)(`label`, {
                                                    className: `inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-navy text-white text-xs font-semibold cursor-pointer hover:bg-navy/90 transition-colors`,
                                                    children: [
                                                      (0, K.jsx)(`i`, {
                                                        className: `fa fa-upload`,
                                                      }),
                                                      ` Görsel seç`,
                                                      (0, K.jsx)(`input`, {
                                                        type: `file`,
                                                        accept: `image/jpeg,image/png,image/webp,image/gif`,
                                                        className: `sr-only`,
                                                        onChange: (e) => {
                                                          let t =
                                                            e.target.files?.[0];
                                                          if (
                                                            ((e.target.value = ``),
                                                            t)
                                                          )
                                                            try {
                                                              (C(t),
                                                                W(),
                                                                M(t),
                                                                P(
                                                                  URL.createObjectURL(
                                                                    t,
                                                                  ),
                                                                ));
                                                            } catch (e) {
                                                              s.error(
                                                                q(
                                                                  e,
                                                                  `Görsel seçilemedi.`,
                                                                ),
                                                              );
                                                            }
                                                        },
                                                      }),
                                                    ],
                                                  }),
                                                  (0, K.jsx)(`p`, {
                                                    className: `mt-2 text-[11px] text-gray-400 truncate`,
                                                    children:
                                                      j?.name ||
                                                      `JPG, PNG, WebP veya GIF · en fazla 5 MB`,
                                                  }),
                                                  (N ||
                                                    /^https?:\/\//i.test(
                                                      String(D[e.name] || ``),
                                                    )) &&
                                                    (0, K.jsx)(`button`, {
                                                      type: `button`,
                                                      onClick: () => {
                                                        (W(),
                                                          O((t) => ({
                                                            ...t,
                                                            [e.name]:
                                                              e.default || ``,
                                                          })));
                                                      },
                                                      className: `mt-1 text-[11px] font-medium text-red-500 hover:text-red-600`,
                                                      children: `Görseli kaldır`,
                                                    }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        })
                                      : e.createOnly && T
                                        ? (0, K.jsx)(`input`, {
                                            type: `text`,
                                            value: String(D[e.name] || ``),
                                            disabled: !0,
                                            className: `w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-gray-50 text-gray-400`,
                                          })
                                        : (0, K.jsx)(`input`, {
                                            type: e.type,
                                            value: String(D[e.name] ?? ``),
                                            onChange: (t) =>
                                              O((n) => ({
                                                ...n,
                                                [e.name]: t.target.value,
                                              })),
                                            className: `w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm\r
                                 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all`,
                                            required: e.required,
                                            min: e.min,
                                            max: e.max,
                                          }),
                        ],
                      },
                      e.name,
                    ),
                  ),
                  (0, K.jsxs)(`div`, {
                    className: `flex justify-end gap-3 pt-4 border-t border-gray-100`,
                    children: [
                      (0, K.jsx)(`button`, {
                        type: `button`,
                        onClick: G,
                        className: `px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-500\r
                                   hover:bg-gray-50 transition-all`,
                        children: `Vazgeç`,
                      }),
                      (0, K.jsx)(`button`, {
                        type: `submit`,
                        disabled: k,
                        className: `btn-cyber text-xs !py-2.5 !px-5`,
                        children: k
                          ? (0, K.jsxs)(K.Fragment, {
                              children: [
                                (0, K.jsx)(`i`, {
                                  className: `fa fa-circle-notch fa-spin`,
                                }),
                                ` Kaydediliyor`,
                              ],
                            })
                          : (0, K.jsxs)(K.Fragment, {
                              children: [
                                (0, K.jsx)(`i`, {
                                  className: `fa fa-floppy-disk`,
                                }),
                                ` Kaydet`,
                              ],
                            }),
                      }),
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
export { Z as default };
