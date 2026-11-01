import { useEffect, useRef } from 'react';

// Soft ring that follows the mouse on desktop. Disabled on touch and reduced-motion.
export default function Cursor() {
  const ref = useRef(null);
  useEffect(() => {
    const fine = window.matchMedia?.('(hover: hover) and (pointer: fine)').matches;
    const calm = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const el = ref.current;
    if (!fine || calm || !el) return undefined;
    let x = -100, y = -100, tx = -100, ty = -100, raf;
    const move = (e) => { tx = e.clientX; ty = e.clientY; el.style.opacity = '1'; };
    const over = (e) => el.classList.toggle('is-hot', !!e.target.closest?.('a, button, [role="button"], input, textarea, select'));
    const leave = () => { el.style.opacity = '0'; };
    const tick = () => {
      x += (tx - x) * 0.2; y += (ty - y) * 0.2;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', over, { passive: true });
    document.addEventListener('mouseleave', leave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseleave', leave);
    };
  }, []);
  return <div ref={ref} className="cursor-ring" aria-hidden="true" />;
}
