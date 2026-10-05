import { useState } from 'react';

export default function ClientLoginModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('Custom Web/App');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    const message = `Hello Praveen, my name is ${name}. I booked a 15-min strategy session for ${serviceType}. My WhatsApp number is ${phone}.`;
    const whatsappUrl = `https://wa.me/917830469154?text=${encodeURIComponent(message)}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
      setSubmitted(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="modal-pop bg-paper-dim border border-line p-8 rounded-3xl max-w-md w-full relative shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-ink-faint hover:text-ink font-mono text-sm cursor-pointer"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <div className="mb-6">
              <span className="font-mono text-xs text-accent uppercase tracking-wider">VIP Consultation Pass</span>
              <h3 className="font-display font-semibold text-2xl text-ink mt-1">
                Book 15-Min Strategy Call
              </h3>
              <p className="text-ink-soft text-xs mt-2 leading-relaxed">
                Connect directly with Praveen Kumar to evaluate project timelines, system architecture, and custom pricing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs text-ink-soft mb-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Aman Gupta"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-glow w-full bg-paper border border-line rounded-xl px-4 py-3 text-xs text-ink focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-ink-soft mb-1">WhatsApp Number</label>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input-glow w-full bg-paper border border-line rounded-xl px-4 py-3 text-xs text-ink focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-ink-soft mb-1">Primary Interest</label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="input-glow w-full bg-paper border border-line rounded-xl px-4 py-3 text-xs text-ink focus:outline-none focus:border-accent"
                >
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Business Website Solution">Business Website Solution</option>
                  <option value="AI / WebSocket Backend">AI / WebSocket Backend</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-accent text-white font-mono text-xs rounded-xl hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-accent/25 mt-2 cursor-pointer"
              >
                Confirm & Connect on WhatsApp &rarr;
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="check-pop w-12 h-12 bg-signal/10 text-signal rounded-full flex items-center justify-center mx-auto mb-4 font-bold">✓</div>
            <h4 className="font-display font-semibold text-xl text-ink animate-fadeIn">Slot Reserved!</h4>
            <p className="text-ink-soft text-xs mt-2 animate-fadeIn">Opening secure WhatsApp channel...</p>
          </div>
        )}
      </div>
    </div>
  );
}