import { useEffect, useRef } from 'react';

/** Thin progress bar at the top. Updated via a ref + transform (compositor only), no re-renders. */
export default function ScrollProgress() {
  const bar = useRef(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(1, window.scrollY / docHeight) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${pct})`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none">
      <div ref={bar} className="h-full origin-left bg-gradient-to-r from-accent via-signal to-accent" style={{ transform: 'scaleX(0)', willChange: 'transform' }} />
    </div>
  );
}
