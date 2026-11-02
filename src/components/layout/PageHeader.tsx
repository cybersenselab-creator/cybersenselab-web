type Props = { icon: string; title: string; subtitle?: string };

/** Navy title band at the top of inner pages. */
export default function PageHeader({ icon, title, subtitle }: Props) {
  return (
    <div className="bg-navy py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-white flex items-center gap-3">
          <i className={`fa ${icon} text-cyan`} aria-hidden="true" /> {title}
        </h1>
        {subtitle && <p className="text-white/50 mt-2">{subtitle}</p>}
      </div>
    </div>
  );
}
