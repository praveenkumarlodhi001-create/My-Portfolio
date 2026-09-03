import { useState } from 'react';

export default function ClientSuggestions() {
  const [activeTab, setActiveTab] = useState('niche');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 sm:py-32 border-t border-line bg-paper-dim/40">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="font-mono text-xs text-accent uppercase tracking-wider">Interactive Hub</span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink tracking-tight mt-1">
            Have a Suggestion or Custom Idea?
          </h2>
          <p className="text-ink-soft text-sm mt-3 leading-relaxed">
            I'm always expanding my fast-ready templates. Tell me which business industry I should build next, or share your custom project vision!
          </p>

          <div className="inline-flex p-1.5 bg-paper border border-line rounded-xl mt-8">
            <button
              onClick={() => { setActiveTab('niche'); setSubmitted(false); }}
              className={`px-5 py-2.5 rounded-lg font-mono text-xs transition-all ${
                activeTab === 'niche' ? 'bg-ink text-paper shadow' : 'text-ink-soft hover:text-ink'
              }`}
            >
              💡 Suggest a New Business Niche
            </button>
            <button
              onClick={() => { setActiveTab('custom'); setSubmitted(false); }}
              className={`px-5 py-2.5 rounded-lg font-mono text-xs transition-all ${
                activeTab === 'custom' ? 'bg-ink text-paper shadow' : 'text-ink-soft hover:text-ink'
              }`}
            >
              🚀 Propose Custom Website Idea
            </button>
          </div>
        </div>

        <div className="max-w-xl mx-auto bg-paper p-8 sm:p-10 border border-line rounded-2xl shadow-sm">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-signal/10 text-signal rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                ✓
              </div>
              <h3 className="font-display font-semibold text-xl text-ink mb-2">Thank You for Your Input!</h3>
              <p className="text-ink-soft text-sm mb-6">
                Your suggestion has been recorded successfully. I appreciate you helping shape my next projects.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', contact: '', message: '' }); }}
                className="px-6 py-2.5 border border-line text-ink font-mono text-xs hover:bg-paper-dim transition-colors rounded-lg"
              >
                Send Another Suggestion
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="font-display font-semibold text-lg text-ink mb-1">
                  {activeTab === 'niche' ? 'Which industry demo should I build next?' : 'Tell me about your custom project'}
                </h3>
                <p className="text-ink-faint text-xs mb-4">
                  {activeTab === 'niche' 
                    ? 'E.g., Law firm, Bakery, Salon, Event Management, etc.' 
                    : 'Share your requirements or feature expectations.'}
                </p>
              </div>

              <div>
                <label className="block font-mono text-xs text-ink-soft mb-1">Your Name / Company</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-paper-dim border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-accent"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-ink-soft mb-1">Contact Email / Phone</label>
                <input
                  required
                  type="text"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full px-4 py-2.5 bg-paper-dim border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-accent"
                  placeholder="name@example.com or phone number"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-ink-soft mb-1">
                  {activeTab === 'niche' ? 'Why this niche? Any specific features?' : 'Project Scope & Details'}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-paper-dim border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-accent"
                  placeholder={activeTab === 'niche' ? 'Describe the business type and features required...' : 'Describe what you want built, pages needed, etc...'}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-accent text-white font-mono text-sm hover:bg-accent/90 transition-colors rounded-xl shadow-md shadow-accent/20"
              >
                {activeTab === 'niche' ? 'Submit Business Niche Suggestion' : 'Submit Custom Project Idea'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}