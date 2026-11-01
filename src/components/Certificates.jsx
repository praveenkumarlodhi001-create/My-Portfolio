import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import certificates from '../data/certificates';
import Rail from './Rail';

const viewable = certificates.filter((c) => c.proof);

export default function Certificates() {
  const [openId, setOpenId] = useState(null);
  const triggerRef = useRef(null);
  const dialogRef = useRef(null);
  const index = viewable.findIndex((c) => c.id === openId);
  const current = index >= 0 ? viewable[index] : null;

  const open = (id, e) => {
    triggerRef.current = e.currentTarget;
    setOpenId(id);
  };
  const close = () => {
    setOpenId(null);
    triggerRef.current?.focus();
  };
  const step = (dir) => setOpenId(viewable[(index + dir + viewable.length) % viewable.length].id);

  useEffect(() => {
    if (!current) return undefined;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.querySelector('button')?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'Tab') {
        const items = dialogRef.current?.querySelectorAll('button');
        if (!items?.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openId]);

  const action = (c) =>
    c.proof ? (
      <button type="button" className="cert-btn" onClick={(e) => open(c.id, e)}>
        VIEW CERTIFICATE <b>↗</b>
      </button>
    ) : (
      <span className="cert-verified">✓ VERIFIED CREDENTIAL</span>
    );

  return (
    <section id="certificates" className="reveal-section certs-section">
      <div className="cinema-section-head">
        <div>
          <span className="section-kicker">PROOF OF LEARNING</span>
          <h2>CERTIFIED · {certificates.length} CREDENTIALS</h2>
          <p>Courses and trainings completed alongside my degree — each one a skill I now use while building.</p>
        </div>
        <span className="section-index">SWIPE TO BROWSE →</span>
      </div>

      <div className="certs-rail-wrap">
        <Rail className="certs-rail" label="Certifications" progress>
          {certificates.map((c, i) => (
            <article key={c.id} className={`cert-tile cert-${c.tone}`}>
              <span className="cert-tag">{c.issuer.split(' · ')[0].split(' × ')[0].toUpperCase()}</span>
              <span className="cert-badge">{c.badge}</span>
              <h3>{c.title}</h3>
              <p className="cert-issuer">{c.issuer}</p>
              <p className="cert-detail">{c.detail}</p>
              <div className="cert-foot">
                <time>{c.date}</time>
                {action(c)}
              </div>
              <span className="cert-no">N° {String(i + 1).padStart(2, '0')}</span>
            </article>
          ))}
        </Rail>
      </div>

      {current &&
        createPortal(
          <div className="cert-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && close()}>
            <div ref={dialogRef} className="cert-dialog" role="dialog" aria-modal="true" aria-label={current.title}>
              <button type="button" className="cert-close" onClick={close} aria-label="Close certificate">×</button>
              <img src={current.proof} alt={`${current.title} certificate`} />
              <div className="cert-dialog-bar">
                <button type="button" onClick={() => step(-1)} aria-label="Previous certificate">←</button>
                <div>
                  <strong>{current.title}</strong>
                  <span>{current.issuer} · {current.date}</span>
                </div>
                <button type="button" onClick={() => step(1)} aria-label="Next certificate">→</button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
