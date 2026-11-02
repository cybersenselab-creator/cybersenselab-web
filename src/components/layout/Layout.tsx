import { Suspense } from "react";
import { NavLink, Outlet } from "react-router";
import { NAV_ITEMS } from "../../lib/navigation";

// TODO: port the real header/footer from reference/assets/index.js (~line 19432, `Jm`).
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-navy text-white">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-6 py-4">
          <img src="/logos/cybersense-shield.png" alt="CyberSense" className="h-8 w-8" />
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) => (isActive ? "text-cyan" : "text-white/80 hover:text-white")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="flex-1">
        <Suspense fallback={<div className="p-12 text-center text-gray-500">Yükleniyor…</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
