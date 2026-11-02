// Temporary stand-in until each page is ported from reference/assets/.
export default function PagePlaceholder({ title, reference }: { title: string; reference: string }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-3xl font-bold text-navy">{title}</h1>
      <p className="mt-4 text-gray-500">
        Henüz port edilmedi — kaynak: <code className="text-cyan-dim">reference/assets/{reference}</code>
      </p>
    </section>
  );
}
