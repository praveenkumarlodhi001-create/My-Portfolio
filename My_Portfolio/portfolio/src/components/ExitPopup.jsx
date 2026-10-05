import { useState, useEffect } from 'react';

export default function ExitPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-paper border border-line p-8 rounded-2xl shadow-2xl text-center">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-ink-soft hover:text-ink font-mono text-sm w-8 h-8 rounded-full bg-paper-dim flex items-center justify-center border border-line"
        >
          ✕
        </button>

        <span className="inline-block font-mono text-xs text-signal bg-signal/10 px-3 py-1 rounded-full mb-4">
          🔥 Special Launch Offer
        </span>

        <h3 className="font-display font-semibold text-2xl text-ink mb-3">
          Wait! Don't Leave Empty Handed
        </h3>

        <p className="text-ink-soft text-sm leading-relaxed mb-6">
          Get an extra <strong className="text-ink">10% OFF</strong> on any website or mobile app package if you connect with me on WhatsApp today!
        </p>

        <a
          href="https://wa.me/917830469154?text=Hi%20Praveen,%20I%20saw%20your%20portfolio%20exit%20offer%20and%20want%20to%20claim%20my%20discount."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 bg-[#25D366] text-white font-mono text-xs hover:bg-[#20ba5a] transition-colors rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
          onClick={() => setIsOpen(false)}
        >
          Claim Discount on WhatsApp &rarr;
        </a>
      </div>
    </div>
  );
}