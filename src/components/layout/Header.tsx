import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { NAV_ITEMS } from "../../lib/navigation";

const desktopLink = "relative px-3 py-2 text-[13px] font-medium rounded-md transition-colors";
const mobileLink = "block px-3 py-2.5 text-sm font-medium rounded-md transition-colors";
const tone = (active: boolean) => (active ? "text-cyan" : "text-white/75 hover:text-white");

export default function Header() {
  const { isAdmin } = useAuth();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Portfolio detail pages keep the "Portfolyolar" item highlighted.
  const isActive = (path: string) =>
    pathname === path || (path === "/portfolyolar" && pathname.startsWith("/portfolyolar/"));

  return (
    <>
      <div
        className={`bg-navy text-white/50 text-xs transition-all duration-300
                       ${scrolled ? "max-h-0 py-0 overflow-hidden opacity-0" : "py-1.5 opacity-100"}`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://bf.sakarya.edu.tr/"
              target="_blank"
              rel="noopener"
              className="hover:text-cyan transition-colors inline-flex items-center gap-1.5"
            >
              <i className="fa fa-building-columns text-[10px]" /> SAÜ BF
            </a>
            <a
              href="https://sargem.sakarya.edu.tr/tr"
              target="_blank"
              rel="noopener"
              className="hover:text-cyan transition-colors inline-flex items-center gap-1.5"
            >
              <i className="fa fa-flask text-[10px]" /> SARGEM
            </a>
          </div>
          <a
            href="mailto:cybersenselab@gmail.com"
            className="hover:text-cyan transition-colors inline-flex items-center gap-1.5"
          >
            <i className="fa fa-envelope text-[10px]" />
            <span className="hidden sm:inline">cybersenselab@gmail.com</span>
          </a>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-50 transition-all duration-300
                       ${scrolled ? "bg-navy-mid/90 backdrop-blur-md shadow-lg shadow-black/20" : "bg-navy-mid"}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="flex items-center shrink-0 group">
              <img
                src="/logos/cybersense-laboratory.png"
                alt="CyberSense Laboratory"
                className="h-7 sm:h-8 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link key={item.path} to={item.path} className={`${desktopLink} ${tone(isActive(item.path))}`}>
                  {item.label}
                  {isActive(item.path) && (
                    <span className="absolute -bottom-0.5 left-3 right-3 h-0.5 bg-cyan rounded-full" />
                  )}
                </Link>
              ))}
              {isAdmin && (
                <Link to="/admin" className={`${desktopLink} ${tone(pathname === "/admin")}`}>
                  Yönetim
                </Link>
              )}
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/iletisim"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg
                           bg-cyan text-navy text-xs font-semibold
                           hover:bg-cyan-dim hover:text-white transition-colors"
              >
                <i className="fa fa-envelope text-[10px]" />
                İletişim
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white/80 hover:text-cyan p-1"
                aria-label="Menü"
              >
                <i className={`fa ${menuOpen ? "fa-times" : "fa-bars"} text-lg`} />
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="lg:hidden border-t border-white/5 pb-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`${mobileLink} ${tone(isActive(item.path))}`}
                >
                  {item.label}
                </Link>
              ))}
              {isAdmin && (
                <Link
                  to="/admin"
                  onClick={() => setMenuOpen(false)}
                  className={`${mobileLink} ${tone(pathname === "/admin")}`}
                >
                  Yönetim
                </Link>
              )}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
