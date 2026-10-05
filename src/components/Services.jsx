const services = [
  {
    title: 'Custom Mobile Apps',
    description: 'High-performance cross-platform mobile applications built using React Native and Expo, deployed directly to the Google Play Store.',
    tag: 'Mobile Engineering',
  },
  {
    title: 'Real-Time Backends',
    description: 'Robust server architecture and APIs using Node.js and WebSockets (Socket.io) to handle live data sync and seamless communication.',
    tag: 'Backend Systems',
  },
  {
    title: 'AI & LLM Integrations',
    description: 'Integrating powerful intelligence features like the Gemini API into web and mobile workflows, featuring smart prompt design and streaming responses.',
    tag: 'AI Integration',
  },
];

export default function Services() {
  return (
    <section id="services" className="reveal-section py-24 sm:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
          <div>
            <span className="font-mono text-xs text-accent uppercase tracking-wider">What I Offer</span>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink tracking-tight mt-1">
              Client Services & Solutions
            </h2>
          </div>
          <span className="font-mono text-xs text-ink-faint">capabilities.config</span>
        </div>
        <div className="grid md:grid-cols-3 gap-8 reveal-stagger">
          {services.map((item, idx) => (
            <div key={idx} className="card-hover bg-paper-dim p-8 border border-line rounded-xl flex flex-col justify-between hover:border-accent">
              <div>
                <span className="inline-block font-mono text-[10px] text-accent px-2.5 py-1 bg-accent/10 rounded mb-4">
                  {item.tag}
                </span>
                <h3 className="font-display font-semibold text-xl text-ink mb-3">
                  {item.title}
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-line font-mono text-xs text-ink-faint">
                Production-ready & Scalable
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}