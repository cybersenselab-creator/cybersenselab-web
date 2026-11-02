import { n as e } from "./vendor-dist.js";
import { w as t } from "./index.js";
import { u as n } from "./useSupabase.js";
var r = e(),
  i = `border-b border-gray-100 pb-8 last:border-b-0 last:pb-0`,
  a = `text-xl font-bold text-navy`,
  o = `mt-3 text-sm leading-7 text-gray-600`,
  s = `mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600 marker:text-cyan`;
function c() {
  let { data: e } = n(),
    c = e?.lab_email?.trim() || `cybersenselab@gmail.com`,
    l =
      e?.lab_adres?.trim() ||
      `Esentepe, 54050 Serdivan/Sakarya — Sakarya Araştırma Geliştirme Uygulama ve Araştırma Merkezi`;
  return (0, r.jsxs)(r.Fragment, {
    children: [
      (0, r.jsx)(`header`, {
        className: `bg-navy py-12`,
        children: (0, r.jsxs)(`div`, {
          className: `mx-auto max-w-7xl px-4`,
          children: [
            (0, r.jsx)(`p`, {
              className: `text-xs font-semibold uppercase tracking-[0.24em] text-cyan`,
              children: `Yasal Bilgilendirme`,
            }),
            (0, r.jsxs)(`h1`, {
              className: `mt-3 flex items-center gap-3 text-3xl font-extrabold text-white`,
              children: [
                (0, r.jsx)(`i`, {
                  className: `fa fa-shield-halved text-cyan`,
                  "aria-hidden": `true`,
                }),
                `Gizlilik ve KVKK Aydınlatma Metni`,
              ],
            }),
            (0, r.jsx)(`p`, {
              className: `mt-3 max-w-3xl text-sm leading-6 text-white/55`,
              children: `Bu metin, CyberSense Laboratuvarı internet sitesinin kullanımı sırasında kişisel verilerin nasıl ele alındığı hakkında 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında bilgi verir.`,
            }),
          ],
        }),
      }),
      (0, r.jsx)(`main`, {
        className: `bg-gray-50/50 py-12`,
        children: (0, r.jsxs)(`article`, {
          className: `mx-auto max-w-5xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10`,
          children: [
            (0, r.jsxs)(`div`, {
              className: `mb-10 flex flex-col gap-3 rounded-xl border border-cyan/15 bg-cyan/5 p-5 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between`,
              children: [
                (0, r.jsxs)(`span`, {
                  children: [
                    (0, r.jsx)(`strong`, {
                      className: `text-navy`,
                      children: `Son güncelleme:`,
                    }),
                    ` 31 Ağustos 2026`,
                  ],
                }),
                (0, r.jsx)(`a`, {
                  href: `mailto:${c}`,
                  className: `font-semibold text-cyan transition-colors hover:text-navy`,
                  children: c,
                }),
              ],
            }),
            (0, r.jsxs)(`div`, {
              className: `space-y-8`,
              children: [
                (0, r.jsxs)(`section`, {
                  className: i,
                  children: [
                    (0, r.jsx)(`h2`, {
                      className: a,
                      children: `1. Veri sorumlusu`,
                    }),
                    (0, r.jsxs)(`p`, {
                      className: o,
                      children: [
                        `Bu internet sitesindeki kişisel veri işleme faaliyetleri bakımından veri sorumlusu Sakarya Üniversitesidir. Site, Üniversite bünyesinde faaliyet gösteren SARGEM CyberSense Laboratuvarı tarafından işletilmektedir. İletişim adresi: `,
                        l,
                        `.`,
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)(`section`, {
                  className: i,
                  children: [
                    (0, r.jsx)(`h2`, {
                      className: a,
                      children: `2. İşlenebilecek kişisel veriler`,
                    }),
                    (0, r.jsxs)(`ul`, {
                      className: s,
                      children: [
                        (0, r.jsxs)(`li`, {
                          children: [
                            (0, r.jsx)(`strong`, {
                              children: `İletişim bilgileri:`,
                            }),
                            ` Ad soyad, e-posta adresi, konu ve mesaj içeriği.`,
                          ],
                        }),
                        (0, r.jsxs)(`li`, {
                          children: [
                            (0, r.jsx)(`strong`, {
                              children: `Yönetici hesap bilgileri:`,
                            }),
                            ` Yetkili kullanıcıların e-posta adresi, oturum ve kimlik doğrulama kayıtları.`,
                          ],
                        }),
                        (0, r.jsxs)(`li`, {
                          children: [
                            (0, r.jsx)(`strong`, {
                              children: `Teknik veriler:`,
                            }),
                            ` IP adresi, erişim zamanı, tarayıcı/cihaz bilgileri ve güvenlik kayıtları; barındırma ve altyapı sağlayıcıları tarafından teknik gereklilikler ölçüsünde oluşturulabilir.`,
                          ],
                        }),
                        (0, r.jsxs)(`li`, {
                          children: [
                            (0, r.jsx)(`strong`, {
                              children: `Laboratuvar ekibi bilgileri:`,
                            }),
                            ` İsim, görev, uzmanlık, fotoğraf ve yayımlanması tercih edilen akademik/mesleki iletişim bağlantıları.`,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)(`section`, {
                  className: i,
                  children: [
                    (0, r.jsx)(`h2`, {
                      className: a,
                      children: `3. İşleme amaçları`,
                    }),
                    (0, r.jsxs)(`ul`, {
                      className: s,
                      children: [
                        (0, r.jsx)(`li`, {
                          children: `Laboratuvar faaliyetleri, projeleri, yayınları, etkinlikleri ve duyuruları hakkında bilgi sunmak,`,
                        }),
                        (0, r.jsx)(`li`, {
                          children: `İletişim ve iş birliği taleplerini yanıtlamak,`,
                        }),
                        (0, r.jsx)(`li`, {
                          children: `Yönetim panelinin güvenliğini sağlamak ve yetkisiz erişimi önlemek,`,
                        }),
                        (0, r.jsx)(`li`, {
                          children: `Sitenin çalışmasını, güvenliğini ve teknik sürekliliğini sağlamak,`,
                        }),
                        (0, r.jsx)(`li`, {
                          children: `Hukuki yükümlülükleri yerine getirmek ve olası uyuşmazlıklarda hakları korumak.`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)(`section`, {
                  className: i,
                  children: [
                    (0, r.jsx)(`h2`, {
                      className: a,
                      children: `4. Toplama yöntemi ve hukuki sebepler`,
                    }),
                    (0, r.jsx)(`p`, {
                      className: o,
                      children: `Veriler; e-posta iletişimi, yönetici giriş ekranı, internet sitesi erişimi ve ilgili kişinin doğrudan paylaşımı yoluyla elektronik ortamda elde edilebilir. İşleme faaliyetleri, somut sürece göre KVKK'nın 5. maddesinde yer alan kanunlarda açıkça öngörülme, hukuki yükümlülüğün yerine getirilmesi, bir hakkın tesisi/kullanılması/korunması ve temel haklara zarar vermemek kaydıyla meşru menfaat sebeplerine dayanabilir. Açık rıza gereken bir faaliyet oluşursa rıza, bu aydınlatma metninden ayrı olarak alınır.`,
                    }),
                  ],
                }),
                (0, r.jsxs)(`section`, {
                  className: i,
                  children: [
                    (0, r.jsx)(`h2`, {
                      className: a,
                      children: `5. İletişim formu`,
                    }),
                    (0, r.jsx)(`p`, {
                      className: o,
                      children: `Sitedeki iletişim formu, girilen bilgileri doğrudan site veritabanına kaydetmez. “Gönder” seçildiğinde kullanıcının cihazındaki varsayılan e-posta uygulaması, girilen bilgilerle bir ileti taslağı oluşturur. İletinin gönderilmesi halinde veriler, kullanılan e-posta hizmetinin koşulları kapsamında ve talebin yanıtlanması amacıyla işlenir.`,
                    }),
                  ],
                }),
                (0, r.jsxs)(`section`, {
                  className: i,
                  children: [
                    (0, r.jsx)(`h2`, {
                      className: a,
                      children: `6. Aktarım ve hizmet sağlayıcılar`,
                    }),
                    (0, r.jsx)(`p`, {
                      className: o,
                      children: `Kişisel veriler, amaçla sınırlı ve gerekli olduğu ölçüde yetkili kamu kurumları, hukuki/teknik hizmet sağlayıcılar ve altyapı sağlayıcılarıyla paylaşılabilir. Site içeriği, dosya depolama ve yönetici kimlik doğrulama süreçlerinde Supabase altyapısından yararlanır. İletişim sayfasındaki harita Google Maps üzerinden sunulur. Bu hizmetler kullanıldığında bağlantı ve cihaz bilgileri ilgili sağlayıcılara iletilebilir. Yurt dışına aktarım oluşması halinde KVKK'nın 9. maddesindeki uygun güvenceler ve diğer şartlar gözetilir.`,
                    }),
                  ],
                }),
                (0, r.jsxs)(`section`, {
                  className: i,
                  children: [
                    (0, r.jsx)(`h2`, {
                      className: a,
                      children: `7. Saklama ve güvenlik`,
                    }),
                    (0, r.jsx)(`p`, {
                      className: o,
                      children: `Kişisel veriler, işleme amacı ve ilgili mevzuatın gerektirdiği süreyle sınırlı olarak saklanır; amaç veya hukuki saklama gereği sona erdiğinde silinir, yok edilir ya da anonim hâle getirilir. Yetkilendirme, erişim kontrolü ve teknik güvenlik tedbirleri uygulanmakla birlikte internet üzerinden veri aktarımının tamamen risksiz olduğu garanti edilemez.`,
                    }),
                  ],
                }),
                (0, r.jsxs)(`section`, {
                  className: i,
                  children: [
                    (0, r.jsx)(`h2`, {
                      className: a,
                      children: `8. Çerezler ve yerel depolama`,
                    }),
                    (0, r.jsx)(`p`, {
                      className: o,
                      children: `Mevcut sitede reklam veya kullanıcı davranışı analizi amacıyla çerez kullanılmamaktadır. Yönetici girişi sırasında oturumun güvenli biçimde sürdürülebilmesi için tarayıcının yerel depolama alanı kullanılabilir. Google Maps gibi gömülü üçüncü taraf hizmetler kendi çerezlerini veya benzer teknolojileri kullanabilir; bunlar ilgili sağlayıcının politikalarına tabidir.`,
                    }),
                  ],
                }),
                (0, r.jsxs)(`section`, {
                  className: i,
                  children: [
                    (0, r.jsx)(`h2`, {
                      className: a,
                      children: `9. KVKK kapsamındaki haklarınız`,
                    }),
                    (0, r.jsx)(`p`, {
                      className: o,
                      children: `KVKK'nın 11. maddesi kapsamında veri sorumlusuna başvurarak:`,
                    }),
                    (0, r.jsxs)(`ul`, {
                      className: s,
                      children: [
                        (0, r.jsx)(`li`, {
                          children: `Kişisel verilerinizin işlenip işlenmediğini öğrenme ve işlenmişse bilgi talep etme,`,
                        }),
                        (0, r.jsx)(`li`, {
                          children: `İşleme amacını ve verilerin amaca uygun kullanılıp kullanılmadığını öğrenme,`,
                        }),
                        (0, r.jsx)(`li`, {
                          children: `Yurt içinde veya yurt dışında verilerin aktarıldığı üçüncü kişileri öğrenme,`,
                        }),
                        (0, r.jsx)(`li`, {
                          children: `Eksik veya yanlış işlenen verilerin düzeltilmesini isteme,`,
                        }),
                        (0, r.jsx)(`li`, {
                          children: `Kanuni şartları oluştuğunda silme/yok etme ve bu işlemlerin aktarılan kişilere bildirilmesini isteme,`,
                        }),
                        (0, r.jsx)(`li`, {
                          children: `Münhasıran otomatik sistemlerle analiz sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme,`,
                        }),
                        (0, r.jsx)(`li`, {
                          children: `Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde giderim talep etme`,
                        }),
                      ],
                    }),
                    (0, r.jsx)(`p`, {
                      className: o,
                      children: `haklarına sahipsiniz.`,
                    }),
                  ],
                }),
                (0, r.jsxs)(`section`, {
                  className: i,
                  children: [
                    (0, r.jsx)(`h2`, {
                      className: a,
                      children: `10. Başvuru ve iletişim`,
                    }),
                    (0, r.jsxs)(`p`, {
                      className: o,
                      children: [
                        `KVKK kapsamındaki taleplerinizi, talebinizi açıkça belirterek ve kimliğinizi doğrulamaya elverişli bilgileri ekleyerek `,
                        (0, r.jsx)(`a`, {
                          href: `mailto:${c}`,
                          className: `font-semibold text-cyan hover:text-navy`,
                          children: c,
                        }),
                        ` `,
                        `adresine veya yukarıdaki posta adresine iletebilirsiniz. Başvurular, başvurunun niteliğine göre ve yürürlükteki mevzuatta öngörülen süre içinde sonuçlandırılır.`,
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)(`section`, {
                  className: i,
                  children: [
                    (0, r.jsx)(`h2`, {
                      className: a,
                      children: `11. Güncellemeler ve resmî kaynaklar`,
                    }),
                    (0, r.jsx)(`p`, {
                      className: o,
                      children: `Site özellikleri veya veri işleme faaliyetleri değiştiğinde bu metin güncellenebilir. Güncel sürüm, yayımlandığı tarihten itibaren geçerlidir.`,
                    }),
                    (0, r.jsxs)(`div`, {
                      className: `mt-5 flex flex-wrap gap-3`,
                      children: [
                        (0, r.jsxs)(`a`, {
                          href: `https://www.kvkk.gov.tr/Icerik/2033/Aydinlatma-Yukumlulugu-`,
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          className: `btn-outline !px-4 !py-2 text-xs`,
                          children: [
                            `KVKK Aydınlatma Yükümlülüğü `,
                            (0, r.jsx)(`i`, {
                              className: `fa fa-external-link`,
                              "aria-hidden": `true`,
                            }),
                          ],
                        }),
                        (0, r.jsxs)(`a`, {
                          href: `https://www.kvkk.gov.tr/Icerik/4132/aydinlatma-yukumlulugunun-yerine-getirilmesinde-uyulacak-usul-ve-esaslar-hakkinda-teblig`,
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          className: `btn-outline !px-4 !py-2 text-xs`,
                          children: [
                            `Aydınlatma Tebliği `,
                            (0, r.jsx)(`i`, {
                              className: `fa fa-external-link`,
                              "aria-hidden": `true`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)(`div`, {
              className: `mt-10 rounded-xl bg-navy p-5 text-sm text-white/65`,
              children: (0, r.jsxs)(`p`, {
                children: [
                  `Site kullanımı veya kişisel verileriniz hakkında başka bir sorunuz varsa`,
                  ` `,
                  (0, r.jsx)(t, {
                    to: `/iletisim`,
                    className: `font-semibold text-cyan hover:text-white`,
                    children: `iletişim sayfasından`,
                  }),
                  ` `,
                  `bize ulaşabilirsiniz.`,
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
export { c as default };
