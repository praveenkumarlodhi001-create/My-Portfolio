import { useState } from 'react';
import phonePeQr from '../assets/phonepe-qr.png';

const email = 'praveenkumarlodhi001@gmail.com';
const socials = [
  { label: 'GitHub', href: 'https://github.com/praveenkumarlodhi001-create' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/praveen-kumar-005489367/' },
  { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.praveen.taporigpt' },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const handleMailSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const clientEmail = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    const mailtoLink = `mailto:${email}?subject=Project Inquiry from ${name}&body=Name: ${name}%0D%0AEmail: ${clientEmail}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="reveal-section py-24 sm:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6 sm:px-8 grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Developer Profile, Contact Info, Estimator & Payment */}
        <div className="space-y-10">
          
          {/* Professional Developer Workspace / Avatar Header */}
          <div className="flex items-center gap-5 p-5 bg-paper-dim border border-line rounded-2xl">
            <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center font-display font-semibold text-xl border-2 border-accent shadow-md shrink-0">
              PK
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-lg text-ink">Praveen Kumar</h3>
                <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" title="Available for hire"></span>
              </div>
              <p className="text-ink-soft text-xs font-mono">Full-Stack & Mobile App Developer</p>
              <p className="text-ink-faint text-xs mt-1">Transforming complex ideas into high-performance digital products.</p>
            </div>
          </div>

          <div>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink tracking-tight">
              Have something worth building? Let's talk it through.
            </h2>
            <p className="mt-4 text-ink-soft text-sm leading-relaxed">
              Whether you need a custom website demo, a full mobile app, or a scalable backend engine, drop a message.
            </p>
            
            <div className="mt-8 space-y-3 font-mono text-sm">
              <div className="text-ink-soft">
                Phone: <span className="text-ink font-semibold">+91 7830469154</span>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={handleCopy} className="group flex items-center gap-3 px-4 py-2 border border-line text-ink hover:bg-paper-dim hover:border-accent/40 transition-all rounded-lg">
                  {email}
                  <span className={`text-xs transition-colors ${copied ? 'text-signal font-semibold check-pop' : 'text-ink-faint group-hover:text-ink'}`}>
                    {copied ? '✓ copied' : 'copy'}
                  </span>
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-ink-soft">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-ink border-b border-transparent hover:border-ink transition-colors">
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Toggle Button for Advance Payment Section */}
          <div>
            <button 
              onClick={() => setShowPayment(!showPayment)}
              className="w-full sm:w-auto px-5 py-2.5 bg-paper-dim border border-line text-ink font-mono text-sm hover:border-accent transition-colors rounded-xl flex items-center justify-center gap-2"
            >
              <span>{showPayment ? 'Hide Advance Payment QR' : 'Proceed to Advance Payment (UPI)'}</span>
              <span className={`text-xs inline-block transition-transform duration-300 ${showPayment ? 'rotate-180' : 'rotate-0'}`}>▼</span>
            </button>

            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: showPayment ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div className="mt-4 p-6 bg-paper-dim border border-accent rounded-xl">
                  <h3 className="font-display font-semibold text-xl text-ink mb-2">Scan & Pay Token Advance</h3>
                  <p className="text-ink-soft text-xs mb-4">
                    Scan the QR code using PhonePe or any UPI app, or copy the UPI ID below to complete your transaction.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <img 
                      src={phonePeQr} 
                      alt="PhonePe QR Code" 
                      className="w-36 h-36 object-contain bg-white p-2 rounded-lg border border-line"
                    />
                    <div className="space-y-2 font-mono text-sm">
                      <div className="text-ink-soft">
                        UPI ID: <span className="text-ink font-semibold select-all bg-paper px-2 py-1 rounded border border-line">7830469154@ybl</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Direct Mail Inquiry Form */}
        <div className="card-hover bg-paper-dim p-8 border border-line rounded-xl sticky top-8">
          <h3 className="font-display font-semibold text-xl text-ink mb-2">Send a Project Inquiry</h3>
          <p className="text-ink-soft text-xs mb-6">Fill out the brief below and it will instantly draft an email to my inbox.</p>
          
          <form onSubmit={handleMailSubmit} className="space-y-4">
            <div>
              <label className="block font-mono text-xs text-ink-soft mb-1">Your Name</label>
              <input name="name" required type="text" className="input-glow w-full px-4 py-2.5 bg-paper border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-accent" placeholder="John Doe" />
            </div>
            <div>
              <label className="block font-mono text-xs text-ink-soft mb-1">Your Email</label>
              <input name="email" required type="email" className="input-glow w-full px-4 py-2.5 bg-paper border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-accent" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block font-mono text-xs text-ink-soft mb-1">Project Details / Message</label>
              <textarea name="message" required rows={4} className="input-glow w-full px-4 py-2.5 bg-paper border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-accent" placeholder="Describe what you want to build..."></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-accent text-white font-mono text-sm hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.98] transition-all rounded-xl shadow-md shadow-accent/20">
              Send Inquiry Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}