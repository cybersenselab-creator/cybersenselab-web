function e(e) {
  let t = new Date(e);
  return isNaN(t.getTime())
    ? e
    : `${t.getDate()} ${[`Oca`, `Şub`, `Mar`, `Nis`, `May`, `Haz`, `Tem`, `Ağu`, `Eyl`, `Eki`, `Kas`, `Ara`][t.getMonth()]} ${t.getFullYear()}`;
}
function t(e, t = 140) {
  return e ? (e.length > t ? e.slice(0, t - 1) + `…` : e) : ``;
}
var n = {
    active: {
      cls: `bg-green-100 text-green-700 border-green-200`,
      label: `● Aktif`,
    },
    done: {
      cls: `bg-gray-100 text-gray-600 border-gray-200`,
      label: `✓ Tamamlandı`,
    },
    plan: {
      cls: `bg-amber-100 text-amber-700 border-amber-200`,
      label: `○ Planlama`,
    },
  },
  r = {
    4: { label: `Laboratuvar Direktörü`, icon: `fa-star` },
    3: {
      label: `Öğretim Üyeleri & Proje Liderleri`,
      icon: `fa-chalkboard-teacher`,
    },
    2: { label: `Araştırma Asistanları & Stajyerler`, icon: `fa-flask` },
    1: { label: `Çalışma Arkadaşları & Üyeler`, icon: `fa-users` },
  };
export { t as i, n, e as r, r as t };
