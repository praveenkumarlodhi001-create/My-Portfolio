import { useState } from 'react';

const niches = [
  {
    id: 'gym',
    name: '💪 Fitness & Gym',
    tagline: 'High-energy layout with membership plans, trainer profiles, and class schedules.',
    status: 'Ready & Live',
    demoUrl: 'https://praveenkumarlodhi001-create.github.io/super-journey/', // <-- Yahan link update kar diya
  },
  {
    id: 'restaurant',
    name: '🍔 Cafe & Restaurant',
    tagline: 'Appetizing visual design with online menu, table reservation, and hours.',
    status: 'Ready to Deploy',
    demoUrl: '#',
  },
  {
    id: 'realestate',
    name: '🏡 Real Estate & Property',
    tagline: 'Sleek property listing showcase, agent contact, and valuation inquiry forms.',
    status: 'Ready to Deploy',
    demoUrl: '#',
  },
  {
    id: 'ecommerce',
    name: '🛍️ E-Commerce / Store',
    tagline: 'Modern product grid, shopping cart flow, and secure checkout UI.',
    status: 'Ready to Deploy',
    demoUrl: '#',
  },
  {
    id: 'doctor',
    name: '🩺 Clinic & Doctor',
    tagline: 'Trustworthy layout with appointment booking, doctor credentials, and services.',
    status: 'Ready to Deploy',
    demoUrl: '#',
  },
];

export default function NicheDemos() {
  const [selectedNiche, setSelectedNiche] = useState(niches[0]);

  return (
    <section id="demos" className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-14">
          <span className="font-mono text-xs text-accent uppercase tracking-wider">Fast-Track Demos</span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink tracking-tight mt-1">
            Choose Your Industry, See the Demo
          </h2>
          <p className="text-ink-soft text-sm mt-3 leading-relaxed">
            Need a website in a hurry? Select your business type below. I build and deliver custom industry-ready websites rapidly.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div className="flex flex-col gap-3">
            {niches.map((niche) => (
              <button
                key={niche.id}
                onClick={() => setSelectedNiche(niche)}
                className={`text-left px-5 py-4 rounded-xl border transition-all flex items-center justify-between font-display text-base ${
                  selectedNiche.id === niche.id
                    ? 'bg-ink text-paper border-ink shadow-md'
                    : 'bg-paper-dim text-ink border-line hover:border-ink-soft'
                }`}
              >
                <span className="font-medium">{niche.name}</span>
                <span className={`font-mono text-xs px-2.5 py-1 rounded ${
                  selectedNiche.id === niche.id ? 'bg-paper/20 text-paper' : 'bg-line text-ink-soft'
                }`}>
                  {niche.id === 'gym' ? 'Live Now' : 'Preset'}
                </span>
              </button>
            ))}
          </div>

          <div className="bg-paper-dim p-8 border border-line rounded-2xl flex flex-col justify-between h-full min-h-[320px]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs px-3 py-1 bg-signal/10 text-signal rounded-full">
                  {selectedNiche.status}
                </span>
                <span className="font-mono text-xs text-ink-faint">Category: {selectedNiche.name}</span>
              </div>
              <h3 className="font-display font-semibold text-2xl text-ink mb-3">
                {selectedNiche.name} Solution Template
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed mb-6">
                {selectedNiche.tagline}
              </p>
              <div className="p-4 bg-paper border border-line rounded-xl mb-6">
                <p className="font-mono text-xs text-ink-faint">
                  💡 <span className="text-ink font-medium">Fast-Track Promise:</span> If you choose this category, we customize colors, branding, and text to launch your live site rapidly.
                </p>
              </div>
            </div>

            <a
              href={selectedNiche.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-accent text-white font-mono text-sm hover:bg-accent/90 transition-colors rounded-xl text-center block shadow-lg shadow-accent/20"
            >
              Launch {selectedNiche.name.split(' ')[1]} Live Demo &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}