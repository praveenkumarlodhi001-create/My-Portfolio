import { useState, useEffect } from 'react';

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-paper border border-line p-8 rounded-2xl shadow-2xl">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-ink-soft hover:text-ink font-mono text-sm w-8 h-8 rounded-full bg-paper-dim flex items-center justify-center border border-line"
        >
          ✕
        </button>

        <span className="inline-block font-mono text-xs text-signal bg-signal/10 px-3 py-1 rounded-full mb-4">
          👋 Welcome to Praveen's Portfolio
        </span>

        <h3 className="font-display font-semibold text-2xl text-ink mb-3">
          Looking to Build a Website or Mobile App?
        </h3>

        <p className="text-ink-soft text-sm leading-relaxed mb-6">
          You’re in the right place! I build high-performance mobile apps, real-time backends, and custom business websites rapidly. Check out my live industry demos or suggest a new project.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#demos"
            onClick={() => setIsOpen(false)}
            className="flex-1 py-3 bg-accent text-white font-mono text-xs hover:bg-accent/90 transition-colors rounded-xl text-center shadow-md shadow-accent/20"
          >
            Explore Industry Demos
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex-1 py-3 border border-line text-ink font-mono text-xs hover:bg-paper-dim transition-colors rounded-xl text-center"
          >
            Let's Talk / Hire Me
          </a>
        </div>
      </div>
    </div>
  );
}