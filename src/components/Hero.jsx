import { heroCta } from '../data/story';

export default function Hero({ profile = 'main', onOpenModal, onOpenResume }) {
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
    <section id="top" className="netflix-hero">
      <div className="hero-backdrop" />
      <div className="hero-vignette" />
      <div className="hero-content max-w-content mx-auto px-6 sm:px-8">
        <div className="hero-copy">
          <div className="hero-eyebrow"><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS <span className="hero-divider">|</span> INDIA</div>
          <p className="hero-overline">SOFTWARE DEVELOPER <span>·</span> NODERRA TECH <span>·</span> BUILDER</p>
          <h1 className="hero-name">Praveen<br /><span>Kumar.</span></h1>
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
      <div className="hero-image-credit">PRAVEEN KUMAR <span>—</span> PORTFOLIO 2026</div>
    </section>
  );
}
