import { useEffect } from 'react';

/**
 * Cursor-tracking hero: the portrait turns toward the pointer (3D tilt + shift)
 * and a soft spotlight follows it. Sets CSS vars on the section; smoothed with rAF.
 * Touch / reduced-motion: no tracking (CSS gives touch devices a slow idle sway).
 */
export default function useHeroTrack(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia?.('(hover: hover) and (pointer: fine)').matches;
    if (reduce || !fine) return undefined;

    const target = { x: 0.5, y: 0.5 };
    const cur = { x: 0.5, y: 0.5 };
    let raf = 0;

    const apply = () => {
      cur.x += (target.x - cur.x) * 0.09;
      cur.y += (target.y - cur.y) * 0.09;
      const dx = cur.x - 0.5;
      const dy = cur.y - 0.5;
      el.style.setProperty('--ry', `${(dx * 14).toFixed(2)}deg`);
      el.style.setProperty('--rx', `${(-dy * 8).toFixed(2)}deg`);
      el.style.setProperty('--tx', `${(dx * 26).toFixed(1)}px`);
      el.style.setProperty('--ty', `${(dy * 14).toFixed(1)}px`);
      el.style.setProperty('--spx', `${(cur.x * el.clientWidth).toFixed(0)}px`);
      el.style.setProperty('--spy', `${(cur.y * el.clientHeight).toFixed(0)}px`);
      const settled = Math.abs(target.x - cur.x) < 0.0008 && Math.abs(target.y - cur.y) < 0.0008;
      raf = settled ? 0 : requestAnimationFrame(apply);
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(apply); };

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      if (e.clientY < r.top || e.clientY > r.bottom) return;
      target.x = (e.clientX - r.left) / r.width;
      target.y = (e.clientY - r.top) / r.height;
      kick();
    };
    const onLeave = () => { target.x = 0.5; target.y = 0.5; kick(); };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [ref]);
}
