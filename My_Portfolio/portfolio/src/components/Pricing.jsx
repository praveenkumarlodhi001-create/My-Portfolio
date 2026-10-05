import { useState } from 'react';

const niches = [
  {
    id: 'gym-pro',
    name: '🏋️ Advanced Fitness Studio',
    tier: 'Medium / Standard',
    price: '₹12,999',
    tagline: 'Multi-page layout with membership portals, class schedule booking, and trainer profiles.',
    status: 'Ready to Deploy',
    demoUrl: 'https://praveenkumarlodhi001-create.github.io/super-journey/',
  },
  {
    id: 'oil-mill',
    name: '🌾 Oil Mill & Trading',
    tier: 'Medium / Standard',
    price: '₹12,999',
    tagline: 'Bilingual (EN/हिं) product showcase with smart item search, 3D animated cards, and an advance-payment QR section.',
    status: 'Live on Vercel',
    demoUrl: 'https://apna-oil-mill.vercel.app/',
    preview: '/oilmill-preview.png',
  },
  {
    id: 'restaurant',
    name: '🍔 Cafe & Restaurant',
    tier: 'Medium / Standard',
    price: '₹12,999',
    tagline: 'Appetizing visual design with online menu, table reservation system, and opening hours.',
    status: 'Ready to Deploy',
    demoUrl: '#',
  },
  {
    id: 'realestate',
    name: '🏡 Real Estate & Property',
    tier: 'Medium / Standard',
    price: '₹12,999',
    tagline: 'Sleek property listing showcase, agent contact details, and valuation inquiry forms.',
    status: 'Ready to Deploy',
    demoUrl: '#',
  },
  {
    id: 'ecommerce',
    name: '🛍️ E-Commerce / Store',
    tier: 'High-End / Custom',
    price: '₹24,999+',
    tagline: 'Modern product grid, shopping cart flow, and secure checkout UI integration.',
    status: 'Ready to Deploy',
    demoUrl: '#',
  },
  {
    id: 'doctor',
    name: '🩺 Clinic & Doctor',
    tier: 'Medium / Standard',
    price: '₹12,999',
    tagline: 'Trustworthy layout with appointment slot booking, doctor credentials, and medical services.',
    status: 'Ready to Deploy',
    demoUrl: '#',
  },
];

export default function NicheDemos() {
  const [selectedNiche, setSelectedNiche] = useState(niches[0]);

  return (
    <section id="demos" className="reveal-section py-24 sm:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-14">
          <span className="font-mono text-xs text-accent uppercase tracking-wider">Fast-Track Demos</span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink tracking-tight mt-1">
            Choose Your Industry, See the Live Demo
          </h2>
          <p className="text-ink-soft text-sm mt-3 leading-relaxed">
            Explore pre-built templates categorized across standard and high-end tiers to match your budget and speed requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1.3fr] gap-12 items-center">
          <div className="flex flex-col gap-3 max-h-[500px] overflow-y-auto pr-2">
            {niches.map((niche) => (
              <button
                key={niche.id}
                onClick={() => setSelectedNiche(niche)}
                className={`text-left px-5 py-4 rounded-xl border transition-all duration-300 flex items-center justify-between font-display text-base ${
                  selectedNiche.id === niche.id
                    ? 'bg-ink text-paper border-ink shadow-md scale-[1.02]'
                    : 'bg-paper-dim text-ink border-line hover:border-ink-soft hover:scale-[1.01]'
                }`}
              >
                <div>
                  <span className="font-medium block">{niche.name}</span>
                  <span className={`font-mono text-[10px] mt-0.5 inline-block ${selectedNiche.id === niche.id ? 'text-paper/70' : 'text-ink-faint'}`}>
                    {niche.tier} • {niche.price}
                  </span>
                </div>
                <span className={`font-mono text-xs px-2.5 py-1 rounded shrink-0 ${
                  selectedNiche.id === niche.id ? 'bg-paper/20 text-paper' : 'bg-line text-ink-soft'
                }`}>
                  {niche.demoUrl !== '#' ? 'Live' : 'Preset'}
                </span>
              </button>
            ))}
          </div>

          <div className="bg-paper-dim p-8 border border-line rounded-2xl flex flex-col justify-between h-full min-h-[340px]">
            <div key={selectedNiche.id} className="animate-fadeIn">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs px-3 py-1 bg-signal/10 text-signal rounded-full">
                  {selectedNiche.status}
                </span>
                <span className="font-mono text-xs text-ink-faint">Tier: {selectedNiche.tier}</span>
              </div>
              <h3 className="font-display font-semibold text-2xl text-ink mb-2">
                {selectedNiche.name}
              </h3>
              <div className="font-mono text-sm text-accent font-semibold mb-4">
                Package Price: {selectedNiche.price}
              </div>
              {selectedNiche.preview && (
                <img
                  src={selectedNiche.preview}
                  alt={`${selectedNiche.name} live preview`}
                  loading="lazy"
                  className="w-full h-auto rounded-xl border border-line mb-5 shadow-md"
                />
              )}
              <p className="text-ink-soft text-sm leading-relaxed mb-6">
                {selectedNiche.tagline}
              </p>
              <div className="p-4 bg-paper border border-line rounded-xl mb-6">
                <p className="font-mono text-xs text-ink-faint">
                  💡 <span className="text-ink font-medium">Fast-Track Promise:</span> Select this industry tier and get your customized website deployed rapidly.
                </p>
              </div>
            </div>

            <a
              key={selectedNiche.id + '-cta'}
              href={selectedNiche.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`animate-fadeIn w-full py-3.5 font-mono text-sm transition-colors rounded-xl text-center block shadow-lg ${
                selectedNiche.demoUrl !== '#' 
                  ? 'bg-accent text-white hover:bg-accent/90 shadow-accent/20' 
                  : 'bg-paper border border-line text-ink hover:bg-paper-dim'
              }`}
            >
              {selectedNiche.demoUrl !== '#' ? `Launch Live Demo (${selectedNiche.name.split(' ')[1]}) →` : 'Request This Demo Template →'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}