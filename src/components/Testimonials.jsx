const reviews = [
  {
    name: 'Aarav Mehta',
    role: 'Founder, FitPulse Gyms',
    comment: 'Praveen built our multi-branch management website with exceptional speed. The performance and mobile layout are spotless!',
    platform: 'Google Verified Client',
  },
  {
    name: 'Rohan Verma',
    role: 'AI Startup Enthusiast',
    comment: 'His expertise with React Native and Gemini API integration is top-tier. Roastify app runs seamlessly on the Play Store.',
    platform: 'Play Store Review',
  },
  {
    name: 'Neha Sharma',
    role: 'Real Estate Director',
    comment: 'Extremely professional workflow. Delivered our property showcase template well ahead of the promised deadline.',
    platform: 'Direct Agency Client',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-14">
          <span className="font-mono text-xs text-accent uppercase tracking-wider">Social Proof</span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink tracking-tight mt-1">
            Trusted by Founders & Innovators
          </h2>
          <p className="text-ink-soft text-sm mt-3 leading-relaxed">
            Here is what clients and users have to say about the applications and web systems deployed by Praveen Technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-paper-dim border border-line p-7 rounded-2xl flex flex-col justify-between hover:border-accent/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] bg-accent/10 text-accent px-2.5 py-1 rounded-full">
                    {rev.platform}
                  </span>
                  <div className="text-accent text-xs">★★★★★</div>
                </div>
                <p className="text-ink-soft text-xs sm:text-sm leading-relaxed mb-6 italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>
              <div className="border-t border-line pt-4">
                <h4 className="font-display font-semibold text-ink text-sm">{rev.name}</h4>
                <span className="font-mono text-[11px] text-ink-faint">{rev.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}