import { screenplay as s, skillGroups } from '../data/story';

const skillLine = (name) => skillGroups.find((g) => g.name === name).skills.map((k) => k.n).join(' · ');

export default function Screenplay({ onOpenResume }) {
  return (
    <section id="screenplay" className="reveal-section screenplay-section">
      <div className="cinema-section-head">
        <div>
          <span className="section-kicker">THE SCREENPLAY</span>
          <h2>THE RESUME</h2>
          <p>Every episode, on one page — and a downloadable copy with my contact details.</p>
        </div>
        <span className="section-index">READ · DOWNLOAD</span>
      </div>

      <div className="screenplay-grid">
        <article className="script-doc" aria-label="Resume">
          <header>
            <small>FULL-STACK & MOBILE DEVELOPER</small>
            <h3>PRAVEEN KUMAR</h3>
          </header>

          <div className="script-block">
            <b>EDUCATION</b>
            <div>
              <strong>{s.education.degree}</strong>
              <span>{s.education.school} · {s.education.when}</span>
              <span>{s.education.note}</span>
            </div>
          </div>

          <div className="script-block">
            <b>BUILT & SHIPPED</b>
            <div>
              {s.work.map((w) => (
                <div className="script-item" key={w.t}>
                  <strong>{w.t}</strong>
                  <span>{w.s}</span>
                  <ul>{w.b.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>

          <div className="script-block">
            <b>SKILLS</b>
            <div>
              <span><em>Languages</em> {skillLine('Languages')}</span>
              <span><em>Mobile</em> {skillLine('Mobile')}</span>
              <span><em>Backend</em> {skillLine('Backend')}</span>
              <span><em>Tools</em> {skillLine('Infra & Tools')}</span>
            </div>
          </div>

          <div className="script-block">
            <b>CERTIFICATIONS</b>
            <div>{s.certs.map((c) => <span key={c}>{c}</span>)}</div>
          </div>
        </article>

        <aside className="script-side">
          <h3>EVERY EPISODE,<br />ON ONE PAGE.</h3>
          <p>Education, shipped work and certifications — the same story as the rest of this site, in the format recruiters read.</p>
          <button type="button" className="script-download" onClick={onOpenResume}>⬇ DOWNLOAD RESUME</button>
          <div className="script-stats">
            <div><strong>2</strong><span>APPS ON PLAY</span></div>
            <div><strong>7</strong><span>CREDENTIALS</span></div>
            <div><strong>3</strong><span>ORIGINALS</span></div>
          </div>
        </aside>
      </div>
    </section>
  );
}
