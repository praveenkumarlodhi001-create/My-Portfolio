const projects = [
  {
    name: 'Roastify',
    status: 'live',
    platform: 'Google Play',
    description: "A mobile app that turns anything you throw at it into a personalized roast, powered by the Gemini API. React Native and Expo on the front end, with a Node.js backend handling generation and rate limits.",
    stack: ['React Native', 'Expo', 'Gemini API', 'Node.js'],
    link: 'https://play.google.com/store/apps/details?id=com.praveen.taporigpt',
    linkLabel: 'View on Google Play',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs text-accent uppercase tracking-wider">Featured Innovation</span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink tracking-tight mt-1">
            Built & Deployed Apps
          </h2>
          <p className="text-ink-soft text-sm mt-3 leading-relaxed">
            High-performance mobile and web applications built with modern architectures, custom backend systems, and AI integration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Details */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">
                Live on Google Play
              </span>
              <span className="font-mono text-xs text-ink-faint">Android & Web</span>
            </div>
            
            <h3 className="font-display font-semibold text-2xl sm:text-3xl text-ink mb-4">
              Roastify — Multi-Persona Conversational AI
            </h3>
            
            <p className="text-ink-soft text-sm leading-relaxed mb-6">
              An advanced AI-powered conversational mobile application built using React Native, Expo, and Node.js backend. Features dynamic persona switching, real-time voice chat capabilities, and Google Gemini API integration.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-paper-dim p-4 border border-line rounded-xl">
                <span className="font-mono text-xs text-ink-faint block mb-1">Tech Stack</span>
                <span className="font-display font-medium text-ink text-sm">React Native, Node.js, Gemini API</span>
              </div>
              <div className="bg-paper-dim p-4 border border-line rounded-xl">
                <span className="font-mono text-xs text-ink-faint block mb-1">Package ID</span>
                <span className="font-mono text-xs text-accent">com.praveen.taporigpt</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-accent text-white font-mono text-xs rounded-xl hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20 inline-block"
              >
                View on Play Store →
              </a>
            </div>
          </div>

          {/* Interactive Mobile Frame Mockup */}
          <div className="flex justify-center">
            <div className="w-[300px] bg-paper-dim border-2 border-line rounded-[36px] p-4 shadow-2xl relative">
              {/* Phone Speaker Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-paper rounded-full border border-line"></div>
              
              {/* Screen Content */}
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
                    Powered by Gemini Technologies
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}