import { Link } from "react-router";

// Unknown routes used to render an empty page between header and footer (live site too).
export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center">
      <i className="fa fa-compass text-5xl text-gray-200" aria-hidden="true" />
      <h1 className="mt-5 text-2xl font-bold text-navy">Sayfa bulunamadı</h1>
      <p className="mt-2 text-gray-500">Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.</p>
      <Link to="/" className="btn-cyber mt-6">
        <i className="fa fa-house" /> Ana sayfaya dön
      </Link>
    </section>
  );
}
