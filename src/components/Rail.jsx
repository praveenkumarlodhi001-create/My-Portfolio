import { useEffect, useRef, useState } from 'react';

// Horizontal scroll rail with arrow buttons and an optional red progress line.
export default function Rail({ children, className = '', progress = false, label = 'Scrollable row' }) {
  const ref = useRef(null);
  const [pct, setPct] = useState(0);
  const [edge, setEdge] = useState({ start: true, end: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setPct(max > 0 ? el.scrollLeft / max : 0);
      setEdge({ start: el.scrollLeft < 4, end: max <= 4 || el.scrollLeft >= max - 4 });
    };
    update();
    el.addEventListener('scroll', update, { passive: true });
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(update) : null;
    ro?.observe(el);
    return () => {
      el.removeEventListener('scroll', update);
      ro?.disconnect();
    };
  }, []);

  const go = (dir) => ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.8, behavior: 'smooth' });

  return (
    <div className={`rail-wrap ${className}`}>
      <button type="button" className="rail-btn prev" disabled={edge.start} onClick={() => go(-1)} aria-label="Scroll left">‹</button>
      <div className="rail-scroller" ref={ref} role="region" aria-label={label} tabIndex={0}>{children}</div>
      <button type="button" className="rail-btn next" disabled={edge.end} onClick={() => go(1)} aria-label="Scroll right">›</button>
      {progress && (
        <div className="rail-progress" aria-hidden="true">
          <span style={{ width: `${Math.max(6, pct * 100)}%` }} />
        </div>
      )}
    </div>
  );
}
