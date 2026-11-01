import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import projects from '../data/projects';
import Rail from './Rail';

const FOCUSABLE = 'a[href], button:not([disabled])';

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const modalRef = useRef(null);
  const triggerRef = useRef(null);

  const openProject = (project, event) => {
    triggerRef.current = event.currentTarget;
    setSelected(project);
  };

  useEffect(() => {
    if (!selected) return undefined;

    const trigger = triggerRef.current;
    const closeModal = () => {
      setSelected(null);
      trigger?.focus();
    };

    modalRef.current?.querySelector('button')?.focus();
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
        return;
      }
      if (event.key !== 'Tab') return;

      // keep keyboard focus inside the dialog
      const items = modalRef.current?.querySelectorAll(FOCUSABLE);
      if (!items?.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [selected]);

  const closeFromUi = () => {
    setSelected(null);
    triggerRef.current?.focus();
  };

  return (
    <section id="projects" className="reveal-section originals-section">
      <div className="cinema-section-head">
        <div>
          <span className="section-kicker">A NODERRA STUDIO COLLECTION</span>
          <h2>PRAVEEN ORIGINALS</h2>
          <p>Ideas turned into products, experiments and real-world solutions.</p>
        </div>
        <span className="section-index">DRAG OR USE ARROWS →</span>
      </div>

      <div className="originals-rail-wrap">
        <Rail className="originals-rail" label="Projects" progress>
          {projects.map((project, index) => (
            <article key={project.name} className={`original-card original-${project.tone}`}>
              <div className="original-art">
                <span className="original-index">
                  N° 0{index + 1} <i>·</i> {project.year}
                </span>
                <span className="original-orbit" />
                <div className="original-art-copy">
                  <small>{project.subtitle}</small>
                  <h3>{project.name}</h3>
                  <span>{project.type}</span>
                </div>
                <span className="original-watermark">{project.name.split(' ')[0]}</span>
              </div>
              <div className="original-body">
                <p>{project.summary}</p>
                <ul className="original-chips">
                  {project.stack.split(' · ').slice(0, 6).map((t) => <li key={t}>{t}</li>)}
                </ul>
                <div className="original-actions">
                  <button onClick={(e) => openProject(project, e)} aria-label={`More information about ${project.name}`}>
                    MORE INFO <b>↗</b>
                  </button>
                  {project.links?.[0] && (
                    <a href={project.links[0].href} target="_blank" rel="noreferrer">{project.links[0].label} ↗</a>
                  )}
                </div>
              </div>
            </article>
          ))}
          <a className="original-card original-more" href="https://github.com/praveenkumarlodhi001-create" target="_blank" rel="noreferrer">
            <span>MORE ON GITHUB</span>
            <b>↗</b>
            <small>github.com/praveenkumarlodhi001-create</small>
          </a>
        </Rail>
      </div>

      {/* Portal: .reveal-section has a transform, which would otherwise trap a fixed-position modal inside the section */}
      {selected &&
        createPortal(
        <div
          className="project-modal-backdrop"
          role="presentation"
          onMouseDown={(e) => e.target === e.currentTarget && closeFromUi()}
        >
          <section
            ref={modalRef}
            className={`project-detail-modal original-${selected.tone}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button className="project-modal-close" onClick={closeFromUi} aria-label="Close details">
              ×
            </button>
            <span className="section-kicker">PROJECT DETAIL · {selected.type}</span>
            <h3 id="project-modal-title">{selected.name}</h3>
            <p className="project-modal-summary">{selected.summary}</p>
            <div className="project-detail-grid">
              <div><b>THE PROBLEM</b><p>{selected.problem}</p></div>
              <div><b>WHAT I BUILT</b><p>{selected.build}</p></div>
              {selected.challenge && (
                <div><b>{selected.challengeLabel}</b><p>{selected.challenge}</p></div>
              )}
              <div><b>OUTCOME</b><p>{selected.result}</p></div>
              <div><b>TECH STACK</b><p>{selected.stack}</p></div>
            </div>
            {selected.links?.length > 0 && (
              <div className="project-modal-links">
                {selected.links.map((l) => (
                  <a key={l.href} className="project-modal-link" href={l.href} target="_blank" rel="noreferrer">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </section>
        </div>,
        document.body
        )}
    </section>
  );
}
