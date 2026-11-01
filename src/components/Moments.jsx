import Rail from './Rail';
import { moments } from '../data/story';

export default function Moments() {
  return (
    <section id="moments" className="reveal-section moments-section">
      <div className="cinema-section-head">
        <div>
          <span className="section-kicker">EPISODE 02 · THE HIGHLIGHT REEL</span>
          <h2>MY ACHIEVEMENTS</h2>
          <p>Five moments that mattered — each one backed by a profile, a certificate or a live app.</p>
        </div>
        <span className="section-index">05 MOMENTS</span>
      </div>
      <div className="moments-rail-wrap">
        <Rail className="moments-rail" label="Achievements">
          {moments.map((m) => {
            const external = m.href.startsWith('http');
            return (
              <article key={m.k} className={`moment-card moment-${m.tone}`}>
                <span className="moment-k">{m.k}</span>
                <strong>{m.big}</strong>
                <p>{m.text}</p>
                <a href={m.href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>{m.cta} ↗</a>
              </article>
            );
          })}
        </Rail>
      </div>
    </section>
  );
}
