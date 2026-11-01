import { useMemo, useState } from 'react';

import { skillGroups } from '../data/story';

const groups = Object.fromEntries(skillGroups.map((g) => [g.name, g.skills.map((k) => k.n)]));
const lookup = Object.fromEntries(skillGroups.flatMap((g) => g.skills.map((k) => [k.n, k])));

// Constellation layout: one hub, four domains around it, skills fanned out beyond each domain.
const W = 900;
const H = 460;
const CX = W / 2;
const CY = H / 2;
const DOMAIN_ANGLES = [-150, -90, -30, 30, 90, 150]; // degrees, one per domain in order

function buildGraph() {
  const names = Object.keys(groups);
  return names.map((name, i) => {
    const a = (DOMAIN_ANGLES[i] * Math.PI) / 180;
    const dx = CX + Math.cos(a) * 140;
    const dy = CY + Math.sin(a) * 92;
    const list = groups[name];
    const spread = Math.min(150, 34 * (list.length - 1) + 20);
    const skills = list.map((skill, k) => {
      const off = list.length === 1 ? 0 : (k / (list.length - 1) - 0.5) * spread;
      const sa = a + (off * Math.PI) / 180;
      const sx = Math.max(150, Math.min(W - 150, dx + Math.cos(sa) * 165));
      const sy = Math.max(22, Math.min(H - 24, dy + Math.sin(sa) * 140));
      return { skill, x: sx, y: sy, left: sx < dx };
    });
    return { name, x: dx, y: dy, skills };
  });
}

export default function Skills() {
  const [active, setActive] = useState('Mobile');
  const [picked, setPicked] = useState(null);
  const [view, setView] = useState('list');
  const graph = useMemo(() => buildGraph(), []);
  const current = lookup[picked && groups[active].includes(picked) ? picked : groups[active][0]];

  return (
    <section id="stack" className="reveal-section skill-universe-section">
      <div className="cinema-section-head">
        <div>
          <span className="section-kicker">TOOLS OF THE TRADE</span>
          <h2>MY SKILL UNIVERSE</h2>
          <p>A practical toolkit for taking an idea from interface to deployment.</p>
        </div>
        <span className="section-index">SELECT A DOMAIN</span>
      </div>
      <div className="skill-universe">
        <div className="skill-tabs" role="tablist" aria-label="Skill categories">
          {skillGroups.map((g, i) => (
            <button key={g.name} role="tab" aria-selected={active === g.name} className={active === g.name ? 'active' : ''} onClick={() => { setActive(g.name); setPicked(null); }}>
              <span>0{i + 1}</span>
              <em>{g.name}<small>{g.skills.length} skills · {g.sub}</small></em>
              <b>↗</b>
            </button>
          ))}
        </div>
        <div className="skill-panel" role="tabpanel">
          <div className="skill-panel-top">
            <div>
              <span className="skill-panel-kicker">DOMAIN / {active.toUpperCase()}</span>
              <h3>
                {active.toUpperCase()} <em>STACK</em>
              </h3>
            </div>
            <div className="skill-view-toggle" role="group" aria-label="Skill view">
              <button type="button" className={view === 'network' ? 'on' : ''} aria-pressed={view === 'network'} onClick={() => setView('network')}>NETWORK</button>
              <button type="button" className={view === 'list' ? 'on' : ''} aria-pressed={view === 'list'} onClick={() => setView('list')}>LIST</button>
            </div>
          </div>

          {view === 'list' ? (
            <div className="skill-chip-grid">
              {groups[active].map((skill, i) => (
                <button type="button" className={`skill-chip ${current.n === skill ? 'on' : ''}`} key={skill}
                  onMouseEnter={() => setPicked(skill)} onFocus={() => setPicked(skill)} onClick={() => setPicked(skill)}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <strong>{skill}</strong>
                  <i>✦</i>
                </button>
              ))}
            </div>
          ) : (
            <svg className="skill-net" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Skill network. Selected domain: ${active}`}>
              {graph.map((d) => {
                const on = d.name === active;
                return (
                  <g key={d.name} className={on ? 'net-on' : 'net-off'}>
                    <line className="net-line" x1={CX} y1={CY} x2={d.x} y2={d.y} />
                    {d.skills.map((s, k) => (
                      <g key={s.skill} className="net-skill" style={{ animationDelay: `${k * 0.4}s` }} onMouseEnter={() => setPicked(s.skill)}>
                        <line className="net-line" x1={d.x} y1={d.y} x2={s.x} y2={s.y} />
                        <circle cx={s.x} cy={s.y} r={on ? 4.5 : 3} />
                        {on && <text x={s.x + (s.left ? -10 : 10)} y={s.y + 4} textAnchor={s.left ? 'end' : 'start'}>{s.skill}</text>}
                      </g>
                    ))}
                    <g className="net-domain" onClick={() => setActive(d.name)} tabIndex={0} role="button" aria-label={`Select ${d.name}`}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActive(d.name)}>
                      <circle cx={d.x} cy={d.y} r={on ? 26 : 20} />
                      <text x={d.x} y={d.y + 4} textAnchor="middle">{d.name.toUpperCase()}</text>
                    </g>
                  </g>
                );
              })}
              <g className="net-hub">
                <circle cx={CX} cy={CY} r="26" />
                <text x={CX} y={CY + 5} textAnchor="middle">PK</text>
              </g>
            </svg>
          )}
          <div className="skill-used" aria-live="polite">
            <b>{current.n.toUpperCase()}</b>
            <span><em>USED IN</em> {current.used?.length ? current.used.join(' · ') : 'Part of my everyday toolkit'}</span>
            {current.cert?.length > 0 && <span><em>CERTIFIED</em> {current.cert.join(' · ')}</span>}
          </div>
          <p className="skill-footnote">Hover or tap a skill to see where it shows up across projects and certifications.</p>
        </div>
      </div>
    </section>
  );
}
