import { useState } from 'react';
import Rail from './Rail';
import { seasons } from '../data/story';

export default function Journey() {
  const [active, setActive] = useState('s4');
  const season = seasons.find((s) => s.id === active);

  return (
    <section id="journey" className="reveal-section journey-section">
      <div className="cinema-section-head">
        <div>
          <span className="section-kicker">{seasons.length} SEASONS</span>
          <h2>MY JOURNEY</h2>
        </div>
        <span className="section-index">PICK A SEASON</span>
      </div>
      <div className="journey-wrap">
        <div className="season-tabs" role="tablist" aria-label="Seasons">
          {seasons.map((s) => (
            <button key={s.id} role="tab" aria-selected={active === s.id} className={active === s.id ? 'on' : ''} onClick={() => setActive(s.id)}>
              <small>SEASON {s.label.slice(1)}</small>
              {s.name}
            </button>
          ))}
        </div>
        <div className="season-head" key={season.id}>
          <h3><b>{season.label}</b> {season.name.toUpperCase()}</h3>
          <span>{season.episodes.length} EPISODES</span>
          <p>{season.blurb}</p>
        </div>
        <Rail className="journey-rail" label={`Episodes of ${season.name}`} key={`r-${season.id}`}>
          {season.episodes.map((ep, i) => (
            <article key={ep.t} className="journey-card" style={{ background: ep.g }}>
              <span className="jc-n" aria-hidden="true">E0{i + 1}</span>
              <small>EPISODE 0{i + 1}</small>
              <h4>{ep.t}</h4>
              <em>{ep.y}</em>
              <p>{ep.d}</p>
            </article>
          ))}
        </Rail>
      </div>
    </section>
  );
}
