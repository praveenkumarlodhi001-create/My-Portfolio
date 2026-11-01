import { episodes, episodeOrder, layouts } from '../data/story';
import Rail from './Rail';

export default function ExploreRow({ profile }) {
  const present = new Set(layouts[profile]);
  const cards = episodeOrder[profile]
    .map((id) => episodes.find((e) => e.id === id))
    .filter((e) => e && present.has(e.needs));

  return (
    <section className="explore-section" aria-label="Continue exploring">
      <div className="explore-heading">
        <div>
          <span className="section-kicker">YOUR NEXT CHAPTER</span>
          <h2>CONTINUE EXPLORING</h2>
        </div>
        <span className="explore-hint">SELECT AN EPISODE <b>→</b></span>
      </div>
      <div className="explore-rail-wrap">
        <Rail className="episode-rail" label="Episodes">
          {cards.map((e) => (
            <a key={e.id} className="episode-card" href={e.href} style={{ background: e.grad }}>
              <span className="ep-mark" aria-hidden="true">{e.mark}</span>
              <span className="ep-play" aria-hidden="true">▶</span>
              <span className="ep-no">EPISODE {e.ep}</span>
              <strong>{e.title}</strong>
              <small>{e.sub}</small>
              <span className="ep-bar"><i style={{ width: `${e.progress}%` }} /></span>
            </a>
          ))}
        </Rail>
      </div>
    </section>
  );
}
