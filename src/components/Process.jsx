const steps = [
  {
    num: '01',
    title: 'Select Niche or Share Idea',
    desc: 'Choose from our fast-track industry templates (gym, cafe, real estate) or propose your custom web/app project vision.',
  },
  {
    num: '02',
    title: 'Token Advance & Confirmation',
    desc: 'Confirm your slot and lock in your project by paying a secure, non-refundable token advance to initiate development.',
  },
  {
    num: '03',
    title: 'Rapid Development & Build',
    desc: 'We craft your responsive UI, setup backends, integrate required features, and share staging previews for your review.',
  },
  {
    num: '04',
    title: 'Final Launch & Handover',
    desc: 'Upon final balance clearance, your high-converting website or mobile app is deployed live on your domain or Play Store.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs text-accent uppercase tracking-wider">Workflow</span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink tracking-tight mt-1">
            How We Work Together
          </h2>
          <p className="text-ink-soft text-sm mt-3 leading-relaxed">
            A transparent, friction-free 4-step roadmap designed to take your business online rapidly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-paper-dim p-8 border border-line rounded-2xl flex flex-col justify-between hover:border-accent/40 transition-colors">
              <div>
                <span className="font-mono text-xs text-accent bg-accent/10 px-2.5 py-1 rounded inline-block mb-6">
                  Step {s.num}
                </span>
                <h3 className="font-display font-semibold text-xl text-ink mb-3">{s.title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{s.desc}</p>
              </div>
              <div className="mt-8 font-mono text-[11px] text-ink-faint border-t border-line pt-4">
                Praveen Technologies
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}