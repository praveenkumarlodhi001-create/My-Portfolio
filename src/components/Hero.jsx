import { useEffect, useRef, useState } from 'react';
import { heroCta } from '../data/story';
import useHeroTrack from '../hooks/useHeroTrack';

const ROLES = ['Mobile App Developer', 'Full-Stack Builder', 'AI-Powered Products', 'Scalable Backends'];

export default function Hero({ profile = 'main', onOpenModal, onOpenResume }) {
  const ref = useRef(null);
  const [role, setRole] = useState(0);
  useHeroTrack(ref);
  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = window.setInterval(() => setRole((r) => (r + 1) % ROLES.length), 2600);
    return () => window.clearInterval(id);
  }, []);
  const cta = heroCta[profile] || heroCta.main;
  const second =
    cta.second === 'resume' ? (
      <button onClick={onOpenResume} className="hero-button hero-button-secondary"><span>ⓘ</span> View resume</button>
    ) : cta.second === 'github' ? (
      <a href="https://github.com/praveenkumarlodhi001-create" target="_blank" rel="noreferrer" className="hero-button hero-button-secondary"><span>↗</span> GitHub</a>
    ) : (
      <button onClick={onOpenModal} className="hero-button hero-button-secondary"><span>＋</span> Let's build together</button>
    );
  return (
    <section id="top" className="netflix-hero" ref={ref}>
      <div className="hero-backdrop"><div className="hero-photo" /></div>
      <div className="hero-spot" aria-hidden="true" />
      <div className="hero-vignette" />
      <div className="hero-content max-w-content mx-auto px-6 sm:px-8">
        <div className="hero-copy">
          <div className="hero-eyebrow"><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS <span className="hero-divider">|</span> INDIA</div>
          <p className="hero-overline">SOFTWARE DEVELOPER <span>·</span> NODERRA TECH <span>·</span> BUILDER</p>
          <h1 className="hero-name">Praveen<br /><span>Kumar.</span></h1>
          <p className="hero-role" aria-live="off"><span key={role}>{ROLES[role]}</span></p>
          <p className="hero-description">I build digital products that solve real problems — from mobile apps and intelligent AI experiences to real-time backend systems.</p>
          <div className="hero-tags"><span>React Native</span><span>Node.js</span><span>AI / Gemini</span><span>MongoDB</span></div>
          <div className="hero-detail-chips"><span>SEASON 01 · 2026</span><span>INDEPENDENT BUILDER</span><span>INDIA · OPEN TO OPPORTUNITIES</span></div>
          <div className="hero-actions">
            <a href={cta.href} className="hero-button hero-button-primary"><span>▶</span> {cta.label}</a>
            {second}
          </div>
          <div className="hero-caption"><span className="caption-line" /> <span>THIS IS MY STORY. THIS IS WHAT I BUILD.</span></div>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true"><span /> SCROLL TO EXPLORE</div>
      <div className="hero-image-credit">PRAVEEN KUMAR <span>—</span> PORTFOLIO 2026</div>
    </section>
  );
}
