import { useEffect, useRef, useState } from "react";
import { usePublicCounts } from "../../hooks/useContent";

/** Counts up from 0 (ease-out cubic, 1.2s) the first time it scrolls into view. */
function Counter({ value, label }: { value: number; label: string }) {
  const [shown, setShown] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || started.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / 1200, 1);
          setShown(Math.round((1 - (1 - progress) ** 3) * value));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="flex items-baseline gap-2.5">
      <span ref={ref} className="text-3xl font-bold text-cyan tabular-nums leading-none">
        {shown}
      </span>
      <span className="text-white/60 text-sm">{label}</span>
    </div>
  );
}

export default function StatsBar() {
  const { data, isLoading } = usePublicCounts();
  const stats = [
    { value: data?.team ?? 0, label: "Araştırmacı" },
    { value: data?.publications ?? 0, label: "Yayın" },
    { value: data?.activeProjects ?? 0, label: "Aktif Proje" },
    { value: data?.partners ?? 0, label: "İş Ortağı" },
  ];

  return (
    <div className="bg-navy-light border-t-2 border-cyan/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 py-6">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`flex justify-center ${index > 0 ? "md:border-l md:border-white/10" : ""}`}>
              {isLoading ? (
                <div className="w-16 h-7 rounded bg-white/10 animate-pulse" />
              ) : (
                <Counter value={stat.value} label={stat.label} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
