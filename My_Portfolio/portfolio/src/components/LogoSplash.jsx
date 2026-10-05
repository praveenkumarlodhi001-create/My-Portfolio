import { useState, useEffect } from 'react';

export default function LogoSplash({ onFinished }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onFinished, 500); // Animation fade out hone ke baad remove ho jayega
    }, 1200);
    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-paper transition-opacity duration-500 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="logo-orbit w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-white shadow-2xl shadow-accent/30">
        <span className="font-display font-bold text-2xl tracking-tighter">PK</span>
      </div>
      <span className="mt-4 font-mono text-xs text-ink-soft uppercase tracking-widest">
        Praveen Technologies
      </span>
    </div>
  );
}