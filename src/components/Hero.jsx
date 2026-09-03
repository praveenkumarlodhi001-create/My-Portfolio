import { useEffect, useState } from 'react';

const sequence = [
  { text: 'connecting to server' },
  { text: 'handshake complete', delay: 700 },
  { text: 'connected', delay: 1300 },
];

export default function Hero({ onOpenModal }) {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const timers = sequence.map((step, i) => setTimeout(() => setStepIndex(i), step.delay || 0));
    return () => timers.forEach(clearTimeout);
  }, []);

  const isConnected = stepIndex === sequence.length - 1;

  return (
    <section id="top" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="max-w-content mx-auto px-6 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          {/* Quick Highlight Banner */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-signal animate-pulse"></span>
            <span className="font-mono text-xs text-accent">Open for Projects & Custom Budgets</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-ink-soft mb-6 h-4">
            <span className={isConnected ? 'status-dot' : 'inline-block w-2 h-2 rounded-full bg-ink-faint'} />
            <span>{sequence[stepIndex].text}</span>
          </div>
          
          <h1 className="font-display font-semibold text-ink text-[2.75rem] leading-[1.08] sm:text-6xl sm:leading-[1.05] tracking-tight max-w-xl">
            Backend systems and mobile apps that respond in real time.
          </h1>
          
          <p className="mt-6 text-ink-soft text-lg leading-relaxed max-w-md">
            I'm Praveen Kumar, a full-stack developer building React Native apps, WebSocket-driven backends, and AI features — including Roastify, live on the Play Store.
          </p>
          
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#demos" className="px-5 py-3 bg-ink text-paper font-mono text-sm hover:bg-accent transition-colors rounded-lg">View Industry Demos</a>
            <button onClick={onOpenModal} className="px-5 py-3 border border-accent text-accent font-mono text-sm hover:bg-accent/10 transition-colors rounded-lg cursor-pointer">
              Client Login / Discuss Budget
            </button>
          </div>
        </div>
        
        <div className="relative mx-auto">
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}

function PhoneMock() {
  return (
    <div className="relative w-[260px] sm:w-[290px] aspect-[9/19] rounded-[2.25rem] border-[6px] border-line bg-paper-dim shadow-2xl">
      <div className="h-full w-full rounded-[1.75rem] bg-paper overflow-hidden flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-line">
            <span className="font-display font-semibold text-sm text-ink">Roastify</span>
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-ink-soft"><span className="status-dot" />live</span>
          </div>
          <div className="px-4 py-4 flex flex-col gap-3">
            <div className="self-start max-w-[85%] bg-paper-dim border border-line px-3 py-2 text-xs text-ink-soft rounded-xl font-body">roast my commit history</div>
            <div className="self-end max-w-[85%] bg-accent text-white px-3 py-2 text-xs rounded-xl font-body">Nineteen commits named "fix" and one titled "final final v2 REAL". Bold strategy.</div>
          </div>
        </div>
        <div className="px-4 pb-4">
          <div className="h-9 rounded-full border border-line bg-paper-dim flex items-center justify-center px-3 font-mono text-[9px] text-ink-faint uppercase tracking-wider">
            Powered by Praveen Technologies
          </div>
        </div>
      </div>
    </div>
  );
}