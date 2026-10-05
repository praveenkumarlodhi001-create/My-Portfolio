import { useState } from 'react';

export default function CostEstimator({ onOpenModal }) {
  const [projectType, setProjectType] = useState('web');
  const [urgency, setUrgency] = useState('normal');
  const [hasAI, setHasAI] = useState(false);

  // Simple dynamic calculation logic
  const calculateEstimate = () => {
    let base = projectType === 'app' ? 45000 : projectType === 'ai' ? 60000 : 25000;
    if (urgency === 'urgent') base *= 1.3;
    if (hasAI) base += 15000;
    return `₹${base.toLocaleString('en-IN')}`;
  };

  const handleLockEstimate = () => {
    const message = `Hello Praveen, I calculated an estimate on your portfolio for a ${projectType.toUpperCase()} project (Urgency: ${urgency}, AI Included: ${hasAI ? 'Yes' : 'No'}). Estimated: ${calculateEstimate()}. Let's discuss!`;
    window.open(`https://wa.me/917830469154?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="estimator" className="reveal-section py-24 sm:py-32 border-t border-line bg-paper-dim/40">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-14">
          <span className="font-mono text-xs text-accent uppercase tracking-wider">Interactive Tool</span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink tracking-tight mt-1">
            Instant Project Cost Estimator
          </h2>
          <p className="text-ink-soft text-sm mt-3 leading-relaxed">
            Configure your requirements below to get an instant estimated budget range, then lock it directly over WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-paper border border-line p-8 sm:p-10 rounded-3xl shadow-xl">
          <div className="space-y-6">
            {/* Project Type */}
            <div>
              <label className="block font-mono text-xs text-ink-soft mb-2">1. Select Project Type</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'web', label: 'Business Web' },
                  { id: 'app', label: 'Mobile App' },
                  { id: 'ai', label: 'AI Platform' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setProjectType(item.id)}
                    className={`py-3 px-2 rounded-xl border text-xs font-mono transition-all duration-300 ${
                      projectType === item.id ? 'bg-accent text-white border-accent shadow-md scale-[1.03]' : 'bg-paper-dim text-ink border-line hover:border-accent/40 hover:scale-[1.02]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label className="block font-mono text-xs text-ink-soft mb-2">2. Desired Timeline</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'normal', label: 'Standard (2-4 Weeks)' },
                  { id: 'urgent', label: 'Fast-Track (Rapid Delivery)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setUrgency(item.id)}
                    className={`py-3 px-3 rounded-xl border text-xs font-mono transition-all duration-300 ${
                      urgency === item.id ? 'bg-accent text-white border-accent shadow-md scale-[1.03]' : 'bg-paper-dim text-ink border-line hover:border-accent/40 hover:scale-[1.02]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* AI Integration */}
            <div>
              <label className="block font-mono text-xs text-ink-soft mb-2">3. Advanced Features</label>
              <button
                onClick={() => setHasAI(!hasAI)}
                className={`w-full py-3 px-4 rounded-xl border text-xs font-mono flex items-center justify-between transition-all duration-300 ${
                  hasAI ? 'bg-accent/10 border-accent text-accent' : 'bg-paper-dim text-ink-soft border-line'
                }`}
              >
                <span>Add Custom AI / Gemini / WebSocket Integration</span>
                <span className="font-bold">{hasAI ? '✓ Included' : '+ Add'}</span>
              </button>
            </div>
          </div>

          {/* Estimate Display & CTA */}
          <div className="bg-paper-dim border border-line rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-ink-faint uppercase tracking-wider">Estimated Investment</span>
              <div className="text-4xl sm:text-5xl font-display font-bold text-ink mt-2 mb-4">
                <span key={calculateEstimate()} className="price-pop">{calculateEstimate()}</span>
              </div>
              <p className="text-xs text-ink-soft leading-relaxed mb-6">
                * This is an automated algorithmic estimate based on current market rates. Final scope verification takes place during your free strategy call.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleLockEstimate}
                className="w-full py-4 bg-accent text-white font-mono text-xs rounded-xl hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-accent/25 flex items-center justify-center gap-2"
              >
                <span>Lock This Estimate via WhatsApp &rarr;</span>
              </button>
              <button
                onClick={onOpenModal}
                className="w-full py-3 bg-paper border border-line text-ink font-mono text-xs rounded-xl hover:border-accent hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Book 15-Min Strategy Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}