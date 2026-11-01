import { useEffect } from 'react';

const TILT_SELECTOR = '.original-card:not(.original-more), .cert-card';
const MAX_TILT = 6; // degrees

/**
 * Pointer/scroll-driven motion that plain CSS can't do:
 *  - hero parallax (--hero-py on <html>)
 *  - 3D tilt + cursor spotlight on project / certificate cards (--rx --ry --mx --my)
 * Everything is a no-op for reduced-motion users and touch devices.
 */
export default function useMotionFx() {
  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;

    const root = document.documentElement;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        root.style.setProperty('--hero-py', `${Math.min(y, window.innerHeight * 1.2) * 0.22}px`);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const fine = window.matchMedia?.('(hover: hover) and (pointer: fine)').matches;
    let active = null;
    const reset = (el) => {
      if (!el) return;
      el.style.removeProperty('--rx');
      el.style.removeProperty('--ry');
    };
    const onMove = (e) => {
      const el = e.target instanceof Element ? e.target.closest(TILT_SELECTOR) : null;
      if (active && active !== el) reset(active);
      active = el;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.setProperty('--rx', `${((0.5 - py) * MAX_TILT).toFixed(2)}deg`);
      el.style.setProperty('--ry', `${((px - 0.5) * MAX_TILT).toFixed(2)}deg`);
      el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
      el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
    };
    const onLeave = () => {
      reset(active);
      active = null;
    };
    if (fine) {
      document.addEventListener('pointermove', onMove, { passive: true });
      document.addEventListener('pointerleave', onLeave);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(raf);
      root.style.removeProperty('--hero-py');
    };
  }, []);
}
