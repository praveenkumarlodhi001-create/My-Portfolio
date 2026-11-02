import { useEffect, useRef, useState } from 'react';

// The passcode is checked on the server (api/resume.js). The PDF is not in /public,
// so it cannot be fetched without the right passcode.
// Change the passcode: node scripts/hash-passcode.mjs "new-passcode"
// then set the printed hash as RESUME_PASSCODE_HASH in Vercel (or edit DEFAULT_HASH in api/resume.js).
const RESUME_DOWNLOAD_NAME = 'Praveen_Kumar_Resume.pdf';
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 30_000;

export default function ResumeGate({ isOpen, onClose }) {
  const [passcode, setPasscode] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const unlocked = Boolean(fileUrl);
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
    let status = 0;
    try {
      const res = await fetch('/api/resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode: passcode.trim() }),
      });
      status = res.status;
      if (res.ok && (res.headers.get('content-type') || '').includes('pdf')) {
        const blob = await res.blob();
        setFileUrl(URL.createObjectURL(blob));
        setError('');
        setChecking(false);
        return;
      }
    } catch {
      status = -1;
    }
    setChecking(false);

    if (status === 404 || status === -1 || status >= 500) {
      setError('Resume service is unavailable right now. Please try again later.');
      return;
    }
    if (status === 429) {
      setError('Too many attempts. Please wait a minute.');
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
    if (fileUrl) URL.revokeObjectURL(fileUrl);
    setFileUrl('');
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
              Your copy is ready to download.
            </p>
            <a
              href={fileUrl}
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
              <svg viewBox="0 0 24 24" fill="none" stroke="#E50914" strokeWidth="2" className="w-5 h-5">
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
