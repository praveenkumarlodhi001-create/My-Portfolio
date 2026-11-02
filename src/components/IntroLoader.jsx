import { useEffect, useState } from 'react';

// Opening loader: name + 0→100% counter + progress bar, then hands over to the profile gate.
export default function IntroLoader({ onDone }) {
  const [pct, setPct] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const DURATION = 2300;
    const start = performance.now();
    let raf = 0;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - t, 2.4);
      setPct(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setLeaving(true);
    };
    raf = requestAnimationFrame(tick);
    const onKey = (e) => e.key === 'Escape' && setLeaving(true);
    window.addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => {
    if (!leaving) return undefined;
    const id = window.setTimeout(onDone, 550);
    return () => window.clearTimeout(id);
  }, [leaving, onDone]);

  return (
    <div className={`intro-loader ${leaving ? 'is-leaving' : ''}`} role="status" aria-label={`Loading portfolio ${pct}%`} onClick={() => setLeaving(true)}>
      <div className="intro-loader-inner">
        <span className="intro-loader-kicker">PORTFOLIO · 2026</span>
        <h1 className="intro-loader-name">PRAVEEN <em>KUMAR</em></h1>
        <p className="intro-loader-role">Mobile &amp; Full-Stack Developer · Noderra Tech</p>
        <div className="intro-loader-count" aria-hidden="true">{pct}<small>%</small></div>
        <div className="intro-loader-bar" aria-hidden="true"><i style={{ transform: `scaleX(${pct / 100})` }} /></div>
        <span className="intro-loader-hint">CLICK TO SKIP</span>
      </div>
    </div>
  );
}
