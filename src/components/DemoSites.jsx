import { useState } from 'react';
import demos from '../data/demos';
import Rail from './Rail';

export default function DemoSites() {
  const [broken, setBroken] = useState({});
  return (
    <section id="demos" className="reveal-section originals-section demos-section">
      <div className="cinema-section-head">
        <div>
          <span className="section-kicker">NODERRA · CONCEPT WORK</span>
          <h2>WEBSITE DEMOS</h2>
          <p>Six concept websites I designed and built to show my work. Demo websites — not live client projects.</p>
        </div>
        <span className="section-index">DRAG OR USE ARROWS →</span>
      </div>

      <div className="originals-rail-wrap">
        <Rail className="originals-rail demos-rail" label="Website demos" progress>
          {demos.map((d, i) => (
            <article key={d.id} className={`original-card demo-card ${d.tone}`}>
              <div className="demo-preview">
                {d.preview && !broken[d.id] ? (
                  <img src={d.preview} alt={`${d.name} demo website preview`} loading="lazy" onError={() => setBroken((b) => ({ ...b, [d.id]: true }))} />
                ) : (
                  <div className="demo-placeholder" role="img" aria-label={`${d.name} preview placeholder`}>
                    <span className="demo-ph-name">{d.name}</span>
                    <small>PREVIEW PLACEHOLDER</small>
                  </div>
                )}
                <span className="demo-badge">DEMO WEBSITE</span>
                <span className="demo-num">N° 0{i + 1}</span>
              </div>
              <div className="original-body">
                <small className="demo-kind">{d.kind} · Concept project</small>
                <h3 className="demo-title">{d.name}</h3>
                <p>{d.summary}</p>
                <ul className="original-chips">
                  {d.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <div className="original-actions">
                  <a href={d.url} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${d.name} (opens in new tab)`}>
                    View Live Demo ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </Rail>
      </div>
    </section>
  );
}
