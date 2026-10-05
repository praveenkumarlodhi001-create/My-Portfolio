const secondaryProjects = [
  {
    name: 'V-KhataBook',
    tagline: 'Offline Voice-First Merchant Ledger',
    stack: 'React Native · Speech-to-Text · Local-First Storage',
    status: 'Working Prototype / In Active Development',
    problem:
      'Local shopkeepers track credit/debit ledgers by hand or memory because typing every transaction is friction they won\u2019t adopt.',
    approach:
      'Building an accessibility-first ledger that lets merchants log transactions by speaking in Hindi/Hinglish. Speech-to-text parsing extracts the amount, party name, and credit/debit direction from natural voice input, and the storage model is zero-cloud and local-first \u2014 all balances and transaction data stay entirely on-device.',
  },
  {
    name: 'ZeroVault',
    tagline: 'Personal Finance & Local Price Comparator',
    stack: 'React Native · Firebase Auth · Custom Search/Sort Algorithms',
    status: 'In Active Development',
    problem:
      'Expense trackers show where money went, but not whether a nearby store would have sold the same item cheaper.',
    approach:
      'Combines expense tracking with a hyper-local price comparison engine across nearby stores. Custom search and sort logic \u2014 hash-map lookups and quicksort-based ranking \u2014 filters and ranks store-wise item prices. Expenses are categorized (Food, Bills, Travel) with monthly summaries, and Firebase Auth protects user data.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="reveal-section py-24 sm:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs text-accent uppercase tracking-wider">Featured Innovation</span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink tracking-tight mt-1">
            Built & Deployed Apps
          </h2>
          <p className="text-ink-soft text-sm mt-3 leading-relaxed">
            Solo builds, shipped and in progress — the problem each one solves, and the engineering decisions behind it.
          </p>
        </div>

        {/* Project 1: Roastify — deep case study */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">
                Live on Google Play · Open Testing
              </span>
              <span className="font-mono text-xs text-ink-faint">Jul 2026 – Present</span>
            </div>

            <h3 className="font-display font-semibold text-2xl sm:text-3xl text-ink mb-4">
              Roastify (TaporiGPT) — AI Persona Mobile App
            </h3>

            <div className="space-y-5 mb-8">
              <div>
                <span className="font-mono text-xs text-accent uppercase tracking-wider">The problem</span>
                <p className="text-ink-soft text-sm leading-relaxed mt-1">
                  Most mobile chat apps give flat, single-tone responses with no cultural nuance or personality.
                  Roastify solves that by letting a user switch between five distinct AI personas — Tapori,
                  Roast, Gamer, Love, and Shayar — each with a consistent voice, instead of one generic assistant.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-accent uppercase tracking-wider">Architecture decisions</span>
                <p className="text-ink-soft text-sm leading-relaxed mt-1">
                  React Native for cross-platform UI with native-level performance on Android. Client-side
                  routing logic handles persona switching, backed by a Node.js layer and Firebase — Authentication
                  and Cloud Firestore — for multi-session caching and real-time state persistence, so a user's
                  conversation and persona state survive across sessions. I independently architected the app,
                  generated the release keystores, and shipped it end-to-end through Google Play Console.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-accent uppercase tracking-wider">A challenge I hit</span>
                <p className="text-ink-soft text-sm leading-relaxed mt-1">
                  Switching between five personas mid-conversation introduced UI jank on entry-level Android
                  devices — animations dropped frames whenever state changed. I profiled React Native component
                  lifecycles to find the re-render cost, then optimized them to sustain a smooth 60 FPS during
                  persona switches instead of stuttering.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-accent uppercase tracking-wider">Result</span>
                <p className="text-ink-soft text-sm leading-relaxed mt-1">
                  Shipped and live on the Google Play Store (Open Testing) as <span className="text-ink">TaporiGPT</span>,
                  running smooth 60 FPS UI animation on entry-level Android hardware.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-paper-dim p-4 border border-line rounded-xl hover:border-accent/50 transition-colors">
                <span className="font-mono text-xs text-ink-faint block mb-1">Tech Stack</span>
                <span className="font-display font-medium text-ink text-sm">React Native, Node.js, Firebase (Auth + Firestore)</span>
              </div>
              <div className="bg-paper-dim p-4 border border-line rounded-xl hover:border-accent/50 transition-colors">
                <span className="font-mono text-xs text-ink-faint block mb-1">Package ID</span>
                <span className="font-mono text-xs text-accent">com.praveen.taporigpt</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.praveen.taporigpt"
                target="_blank"
                rel="noopener noreferrer"
                className="shine-btn px-6 py-3 bg-accent text-white font-mono text-xs rounded-xl hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20 inline-block"
              >
                View on Play Store →
              </a>
            </div>
          </div>

          {/* Interactive Mobile Frame Mockup */}
          <div className="flex justify-center lg:sticky lg:top-24">
            <div className="w-[300px] bg-paper-dim border-2 border-line rounded-[36px] p-4 shadow-2xl relative">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-paper rounded-full border border-line"></div>
              <div className="mt-6 bg-paper rounded-[24px] p-4 h-[480px] flex flex-col justify-between border border-line">
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-line pb-3">
                    <span className="font-display font-bold text-sm text-ink">Roastify</span>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] text-signal">
                      <span className="status-dot"></span> live
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-paper-dim p-3 rounded-xl border border-line text-xs text-ink-soft max-w-[85%]">
                      roast my commit history
                    </div>
                    <div className="bg-accent text-white p-3 rounded-xl text-xs ml-auto max-w-[85%] shadow-sm">
                      Nineteen commits named &quot;fix&quot; and one titled &quot;final final v2 REAL&quot;. Bold strategy.
                    </div>
                  </div>
                </div>
                <div className="text-center pt-3 border-t border-line">
                  <span className="font-mono text-[10px] text-ink-faint tracking-wider uppercase">
                    5 personas · Tapori · Roast · Gamer · Love · Shayar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: Apna Oil Mill - live website case study */}
        <div className="mt-20 pt-16 border-t border-line grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:order-2">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="font-mono text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">
                Live Website · Deployed on Vercel
              </span>
              <span className="font-mono text-xs text-ink-faint">Bigrau, Siyana · Bulandshahr</span>
            </div>

            <h3 className="font-display font-semibold text-2xl sm:text-3xl text-ink mb-4">
              Apna Oil Mill — Bilingual Business Website
            </h3>

            <div className="space-y-5 mb-8">
              <div>
                <span className="font-mono text-xs text-accent uppercase tracking-wider">The problem</span>
                <p className="text-ink-soft text-sm leading-relaxed mt-1">
                  A local mustard oil, khal, rice and seed-trading mill needed one clear place where customers
                  could see the products and services, find the location, and pay an advance — in both Hindi and English.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-accent uppercase tracking-wider">What I built</span>
                <p className="text-ink-soft text-sm leading-relaxed mt-1">
                  A bilingual (EN/हिं) multi-section site with a product showcase, a smart item search that understands
                  Hinglish and Hindi spellings, scroll-driven 3D card animation (Three.js + CSS 3D), a soft ambient
                  flute soundtrack generated live with the Web Audio API, and an advance-payment QR section.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-accent uppercase tracking-wider">A decision I made</span>
                <p className="text-ink-soft text-sm leading-relaxed mt-1">
                  I kept the 3D and sound as an optional layer: if WebGL is unavailable or the visitor prefers reduced
                  motion, the site falls back to the plain, fast version instead of breaking.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-accent uppercase tracking-wider">Result</span>
                <p className="text-ink-soft text-sm leading-relaxed mt-1">
                  Shipped as a live site on Vercel that the mill can share with customers.
                </p>
              </div>
            </div>

            <div className="bg-paper-dim p-4 border border-line rounded-xl mb-8">
              <span className="font-mono text-xs text-ink-faint block mb-1">Tech Stack</span>
              <span className="font-display font-medium text-ink text-sm">HTML, CSS, JavaScript, Three.js, Web Audio API, Vercel</span>
            </div>

            <a
              href="https://apna-oil-mill.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="shine-btn px-6 py-3 bg-accent text-white font-mono text-xs rounded-xl hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20 inline-block"
            >
              Visit Live Site →
            </a>
          </div>

          {/* Browser-frame preview */}
          <div className="lg:order-1 lg:sticky lg:top-24">
            <a
              href="https://apna-oil-mill.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover block bg-paper-dim border-2 border-line rounded-2xl overflow-hidden shadow-2xl hover:border-accent/50"
              aria-label="Open Apna Oil Mill live website"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-paper">
                <span className="w-2.5 h-2.5 rounded-full bg-line"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-line"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-line"></span>
                <span className="ml-3 flex-1 font-mono text-[11px] text-ink-faint bg-paper-dim border border-line rounded-md px-3 py-1 truncate">
                  apna-oil-mill.vercel.app
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[10px] text-signal">
                  <span className="status-dot"></span> live
                </span>
              </div>
              <img
                src="/oilmill-preview.png"
                alt="Apna Oil Mill website preview"
                width="1200"
                height="630"
                loading="lazy"
                className="w-full h-auto block"
              />
            </a>
          </div>
        </div>

        {/* Projects 2 & 3: V-KhataBook, ZeroVault */}
        <div className="mt-20 pt-16 border-t border-line grid md:grid-cols-2 gap-10">
          {secondaryProjects.map((project) => (
            <div key={project.name} className="card-hover bg-paper-dim border border-line rounded-2xl p-7 hover:border-accent/40">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="font-mono text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">
                  {project.status}
                </span>
              </div>
              <h3 className="font-display font-semibold text-xl text-ink mb-1">{project.name}</h3>
              <p className="font-mono text-xs text-ink-faint mb-4">{project.tagline}</p>

              <div className="space-y-4 mb-5">
                <div>
                  <span className="font-mono text-[11px] text-accent uppercase tracking-wider">The problem</span>
                  <p className="text-ink-soft text-sm leading-relaxed mt-1">{project.problem}</p>
                </div>
                <div>
                  <span className="font-mono text-[11px] text-accent uppercase tracking-wider">Approach</span>
                  <p className="text-ink-soft text-sm leading-relaxed mt-1">{project.approach}</p>
                </div>
              </div>

              <div className="bg-paper p-3 border border-line rounded-xl">
                <span className="font-mono text-[10px] text-ink-faint block mb-1">Tech Stack</span>
                <span className="font-display font-medium text-ink text-xs">{project.stack}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
