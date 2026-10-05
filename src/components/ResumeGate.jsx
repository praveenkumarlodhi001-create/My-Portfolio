import { useEffect, useRef, useState } from 'react';

// SHA-256 of the passcode — never store the plain passcode in the source.
// To change it: node scripts/hash-passcode.mjs "your-new-passcode"
// then paste the printed hash here.
const PASSCODE_HASH =
  '1f857fc815c03207fbbcf982f8f1ce9aeade68a08b9620d01f7ae9e3b04094b2';

const RESUME_FILE = '/resume-dae7fee5a3.pdf';
const RESUME_DOWNLOAD_NAME = 'Praveen_Kumar_Resume.pdf';
const SESSION_KEY = 'resume_unlocked';
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 30_000;

async function sha256Hex(text) {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export default function ResumeGate({ isOpen, onClose }) {
  const [passcode, setPasscode] = useState('');
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === '1'
  );
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [locked, setLocked] = useState(false);
  const [checking, setChecking] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (locked || checking || !passcode) return;

    setChecking(true);
    const hash = await sha256Hex(passcode.trim());
    setChecking(false);

    if (hash === PASSCODE_HASH) {
      sessionStorage.setItem(SESSION_KEY, '1');
      setUnlocked(true);
      setError('');
      return;
    }

    const nextAttempts = attempts + 1;
    setAttempts(nextAttempts);
    setPasscode('');
    inputRef.current?.focus();

    if (nextAttempts >= MAX_ATTEMPTS) {
      setLocked(true);
      setError(`Too many attempts. Try again in ${LOCKOUT_MS / 1000}s.`);
      setTimeout(() => {
        setLocked(false);
        setAttempts(0);
        setError('');
      }, LOCKOUT_MS);
    } else {
      setError(`Wrong passcode (${nextAttempts}/${MAX_ATTEMPTS}).`);
    }
  };

  const handleClose = () => {
    setPasscode('');
    setError('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-paper/80 backdrop-blur-sm px-4"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-sm bg-paper-dim border border-line rounded-2xl p-7 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {unlocked ? (
          <>
            <div className="w-11 h-11 rounded-lg bg-signal/10 flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" className="w-5 h-5">
                <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-ink text-lg">Access granted</h3>
            <p className="mt-1.5 text-sm text-ink-soft">
              This stays unlocked for your current browser session.
            </p>
            <a
              href={RESUME_FILE}
              download={RESUME_DOWNLOAD_NAME}
              className="mt-6 w-full px-5 py-3 bg-ink text-paper font-mono text-sm rounded-lg hover:bg-accent transition-all hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-2"
            >
              Download Resume
            </a>
            <button
              onClick={handleClose}
              className="mt-3 w-full px-5 py-2.5 text-ink-soft font-mono text-xs hover:text-ink transition-colors"
            >
              Close
            </button>
          </>
        ) : (
          <>
            <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" className="w-5 h-5">
                <rect x="4" y="10" width="16" height="10" rx="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-ink text-lg">Resume is private</h3>
            <p className="mt-1.5 text-sm text-ink-soft">
              Enter the passcode I've shared with you to view it.
            </p>
            <form onSubmit={handleSubmit} className="mt-5">
              <input
                ref={inputRef}
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                disabled={locked}
                placeholder="Passcode"
                className="w-full px-4 py-3 bg-paper border border-line rounded-lg text-ink text-sm font-mono outline-none focus:border-accent transition-colors disabled:opacity-50"
              />
              {error && <p className="mt-2 text-xs text-red-400 font-mono">{error}</p>}
              <button
                type="submit"
                disabled={locked || checking || !passcode}
                className="mt-4 w-full px-5 py-3 bg-ink text-paper font-mono text-sm rounded-lg hover:bg-accent transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
              >
                {checking ? 'Checking…' : 'Unlock'}
              </button>
            </form>
            <button
              onClick={handleClose}
              className="mt-3 w-full px-5 py-2.5 text-ink-soft font-mono text-xs hover:text-ink transition-colors"
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
}
