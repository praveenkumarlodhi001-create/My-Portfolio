const proofPoints = [
  {
    label: 'Live on Google Play',
    title: 'Roastify (TaporiGPT)',
    detail: 'Independently built, signed, and published to the Play Store — currently in Open Testing.',
  },
  {
    label: 'NPTEL Elite — IIT Kharagpur',
    title: 'Programming in Java',
    detail: 'Scored 70% overall, 24.94/25 on assignments (Jan–Apr 2025).',
  },
  {
    label: 'NPTEL Elite — IIT Madras',
    title: 'Introduction to Machine Learning',
    detail: 'Scored 61% overall, 25/25 on assignments (Jul–Oct 2025).',
  },
];

export default function Testimonials() {
  return (
    <section className="reveal-section py-24 sm:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-14">
          <span className="font-mono text-xs text-accent uppercase tracking-wider">Track Record</span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink tracking-tight mt-1">
            Verified Work, Not Just Promises
          </h2>
          <p className="text-ink-soft text-sm mt-3 leading-relaxed">
            I'm early in taking on client projects — here's what's real and checkable today. Client testimonials will be added here as projects are delivered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
          {proofPoints.map((p, idx) => (
            <div key={idx} className="bg-paper-dim border border-line p-7 rounded-2xl flex flex-col justify-between hover:border-accent/40 hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="inline-block font-mono text-[10px] bg-accent/10 text-accent px-2.5 py-1 rounded-full mb-4">
                  {p.label}
                </span>
                <h4 className="font-display font-semibold text-ink text-base mb-2">{p.title}</h4>
                <p className="text-ink-soft text-xs sm:text-sm leading-relaxed">
                  {p.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
