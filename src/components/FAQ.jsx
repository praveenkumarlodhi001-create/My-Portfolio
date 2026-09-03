import { useState } from 'react';

const faqs = [
  {
    q: 'Why is the token advance payment non-refundable?',
    a: 'Once a project is confirmed and the token advance is paid, dedicated engineering hours, design resources, and slot allocation are immediately reserved for you. This policy ensures full commitment from both sides before development begins.',
  },
  {
    q: 'How fast will my website or app be delivered?',
    a: 'Local business starter templates (like gyms or cafes) are typically delivered in 3 to 4 days. Standard and high-end custom enterprise applications take between 5 to 10 days depending on feature complexity.',
  },
  {
    q: 'Do I need to pay the remaining amount upfront?',
    a: 'No. You only pay a minor token advance to start the project. The remaining balance is paid strictly after you review the completed work and before final live deployment.',
  },
  {
    q: 'Are your websites mobile-friendly and SEO optimized?',
    a: 'Yes, 100%. Every single layout is built using Tailwind CSS for flawless mobile, tablet, and desktop responsiveness, along with clean structure for search engine optimization.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq" className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6 sm:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-accent uppercase tracking-wider">Got Questions?</span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink tracking-tight mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-ink-soft text-sm mt-3">
            Clear answers about our development process, token payments, and delivery terms.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-line bg-paper-dim rounded-2xl overflow-hidden transition-colors">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-4 text-left font-display font-medium text-ink flex items-center justify-between gap-4 hover:bg-paper/40 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="font-mono text-accent text-lg shrink-0">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-5 text-ink-soft text-sm leading-relaxed border-t border-line/50 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}