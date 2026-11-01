import { useState } from 'react';
import baseIdeas from '../data/futureIdeas';

const LS_IDEAS = 'pk-future-ideas';
const LS_OWNER = 'pk-owner';

function readJSON(key) {
  try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch { return []; }
}
function isOwner() {
  try {
    const q = new URLSearchParams(window.location.search).get('owner');
    if (q === '1') localStorage.setItem(LS_OWNER, '1');
    if (q === '0') localStorage.removeItem(LS_OWNER);
    return localStorage.getItem(LS_OWNER) === '1';
  } catch { return false; }
}
const snippet = (i) =>
  `  {\n    id: '${i.id}',\n    code: '${i.code}',\n    title: ${JSON.stringify(i.title)},\n    status: ${JSON.stringify(i.status)},\n    year: '${i.year}',\n    tagline: ${JSON.stringify(i.tagline)},\n    story: ${JSON.stringify(i.story)},\n  },`;

export default function FutureThinking() {
  const [owner] = useState(isOwner);
  const [drafts, setDrafts] = useState(() => readJSON(LS_IDEAS));
  const [adding, setAdding] = useState(false);
  const [copied, setCopied] = useState('');

  const saveDrafts = (next) => {
    setDrafts(next);
    try { localStorage.setItem(LS_IDEAS, JSON.stringify(next)); } catch { /* storage unavailable */ }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const title = String(f.get('title') || '').trim().toUpperCase();
    if (!title) return;
    saveDrafts([
      ...drafts,
      {
        id: `idea-${Date.now()}`,
        code: String(f.get('code') || 'NEW IDEA').trim().toUpperCase(),
        title,
        status: `${f.get('status')} · DRAFT`,
        year: String(new Date().getFullYear()),
        tagline: String(f.get('tagline') || '').trim(),
        story: String(f.get('story') || '').trim(),
        draft: true,
      },
    ]);
    setAdding(false);
  };

  const copy = async (idea) => {
    try {
      await navigator.clipboard.writeText(snippet(idea));
      setCopied(idea.id);
      setTimeout(() => setCopied(''), 1800);
    } catch { /* clipboard blocked */ }
  };

  const ideas = [...baseIdeas, ...drafts];
  const featured = ideas.filter((i) => i.featured);
  const others = ideas.filter((i) => !i.featured);

  return (
    <section id="future" className="reveal-section future-section">
      <div className="cinema-section-head">
        <div>
          <span className="section-kicker">NOT BUILT YET · THINKING AHEAD</span>
          <h2>FUTURE THINKING</h2>
          <p>Wild ideas, what-ifs and concept builds — the questions I explore beyond client work and shipped apps.</p>
        </div>
        <span className="section-index">{String(ideas.length).padStart(2, '0')} {ideas.length === 1 ? 'IDEA' : 'IDEAS'}</span>
      </div>

      <div className="future-wrap">
        {featured.map((idea) => (
          <article key={idea.id} className="future-feature">
            <div className="future-feature-copy">
              <span className="future-status">{idea.status} · {idea.year}</span>
              <small className="future-code">{idea.code}</small>
              <h3>{idea.title}</h3>
              <p className="future-tagline">“{idea.tagline}”</p>
              <p>{idea.story}</p>
              {idea.built && (
                <>
                  <b className="future-label">WHAT I ACTUALLY BUILT</b>
                  <p>{idea.built}</p>
                </>
              )}
              {idea.stack && <p className="future-stack">{idea.stack}</p>}
              {idea.note && <p className="future-note">⚠ {idea.note}</p>}
            </div>
            <div className="future-feature-side">
              {idea.terminal && (
                <div className="future-terminal" aria-label="Sample of the simulator's log output">
                  <div className="future-terminal-bar"><i /><i /><i /><span>mastishk_ui.exe — SIMULATION</span></div>
                  <pre>
                    {idea.terminal.map((l, n) => (
                      <span key={n} style={{ animationDelay: `${n * 0.35}s` }}>{`> ${l}\n`}</span>
                    ))}
                    <em>▌</em>
                  </pre>
                </div>
              )}
              {idea.modules && (
                <ol className="future-modules">
                  {idea.modules.map(([name, text]) => (
                    <li key={name}><strong>{name}</strong><span>{text}</span></li>
                  ))}
                </ol>
              )}
            </div>
          </article>
        ))}

        <div className="future-grid">
          {others.map((idea) => (
            <article key={idea.id} className="future-card">
              <span className="future-status">{idea.status}</span>
              <small className="future-code">{idea.code}</small>
              <h3>{idea.title}</h3>
              {idea.tagline && <p className="future-tagline">“{idea.tagline}”</p>}
              {idea.story && <p>{idea.story}</p>}
              {owner && idea.draft && (
                <div className="future-owner-actions">
                  <button type="button" onClick={() => copy(idea)}>{copied === idea.id ? '✓ COPIED' : 'COPY AS CODE'}</button>
                  <button type="button" onClick={() => saveDrafts(drafts.filter((d) => d.id !== idea.id))}>REMOVE</button>
                </div>
              )}
            </article>
          ))}

          {owner ? (
            adding ? (
              <form className="future-card future-form" onSubmit={onSubmit}>
                <span className="future-status">NEW IDEA · ONLY YOU CAN SEE THIS FORM</span>
                <input name="code" placeholder="Short code name (e.g. PROJECT ECHO)" maxLength={40} />
                <input name="title" placeholder="Title *" required maxLength={60} />
                <input name="tagline" placeholder="One-line “what if…?”" maxLength={140} />
                <textarea name="story" rows={4} placeholder="Describe the idea" maxLength={600} />
                <select name="status" defaultValue="CONCEPT">
                  <option>CONCEPT</option><option>SKETCH</option><option>PROTOTYPE</option>
                </select>
                <div className="future-owner-actions">
                  <button type="submit">SAVE DRAFT</button>
                  <button type="button" onClick={() => setAdding(false)}>CANCEL</button>
                </div>
                <small>Drafts live in this browser only. Press “COPY AS CODE” and paste into <code>src/data/futureIdeas.js</code> to publish it for everyone.</small>
              </form>
            ) : (
              <button type="button" className="future-card future-add" onClick={() => setAdding(true)}>
                <b>＋</b>
                <span>ADD A NEW IDEA</span>
              </button>
            )
          ) : (
            <a className="future-card future-add" href="#contact">
              <b>?</b>
              <span>GOT A WILD IDEA? TELL ME</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
