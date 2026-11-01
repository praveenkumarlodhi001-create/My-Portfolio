import { useEffect, useRef, useState } from 'react';

// Only numbers that are on the resume. Update here if they change.
const stats = [
  { value: 2, label: 'APPS ON GOOGLE PLAY', note: 'Roastify · Bol Khata' },
  { value: 7, label: 'CERTIFICATIONS', note: 'NPTEL · Internshala · NSDC' },
  { value: 25, suffix: '+', label: 'HACKERRANK PROBLEMS', note: '5★ Gold badge in Java' },
  { value: 7.76, decimals: 2, label: 'CGPA', note: 'B.Tech CSE · AKTU' },
];

function Counter({ value, decimals = 0, suffix = '' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!el || reduce || !('IntersectionObserver' in window)) {
      setShown(value);
      return undefined;
    }
    let raf;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / 1300);
          setShown(value * (1 - Math.pow(1 - t, 3)));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {shown.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function StatsBand() {
  return (
    <section className="stats-band reveal-section" aria-label="Highlights">
      <div className="stats-grid">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <strong>
              <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
            </strong>
            <span>{s.label}</span>
            <small>{s.note}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
