import { useState } from 'react';
import { profiles } from '../data/story';

export default function LogoSplash({ onFinished, lastProfile }) {
  const [active, setActive] = useState('');
  const enter = (id) => {
    setActive(id);
    window.setTimeout(() => onFinished(id), 420);
  };

  return (
    <div className={`intro-gate gate-v5 ${active ? 'intro-gate-exit' : ''}`} role="dialog" aria-label="Who's watching?">
      <div className="intro-gate-backdrop" />
      <header className="intro-gate-brand">
        <span className="brand-mark">P</span>
        <span>PRAVEEN<span className="brand-dot">.</span></span>
      </header>
      <main className="intro-gate-content gate-content">
        <h1 className="gate-title">Who’s watching?</h1>
        <div className="gate-grid">
          {profiles.map((p) => (
            <button key={p.id} className={`gate-profile ${lastProfile === p.id ? 'is-last' : ''}`} onClick={() => enter(p.id)} aria-label={`Watch as ${p.name}: ${p.sub}`}>
              <span className={`gate-tile ${p.tile}`}>
                {p.badge && <em className="gate-badge">{p.badge}</em>}
                {p.photo ? <img src={p.photo} alt="" /> : <b>{p.glyph}</b>}
                <i className="gate-play">▶</i>
              </span>
              <strong>{p.name}</strong>
              <small>{p.sub}</small>
            </button>
          ))}
        </div>
        <p className="gate-note">Every profile watches the same true story — it only changes what plays first.</p>
        <button className="gate-go" onClick={() => enter(lastProfile || 'main')} aria-label="Start watching">▶</button>
      </main>
      <div className="intro-footer"><span>DESIGNED & BUILT BY PRAVEEN KUMAR</span><span>PRESS ▶ TO START</span></div>
    </div>
  );
}
