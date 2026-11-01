import { useState, useEffect, useMemo } from 'react';

import { profiles, navLinks } from '../data/story';

export default function Navbar({ onOpenModal, onSwitchProfile, profile = 'main' }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const me = profiles.find((p) => p.id === profile) || profiles[0];
  const profileMeta = [me.badge ? 'PK' : me.glyph, me.name, `profile-${{ main: 'red', recruiter: 'blue', developer: 'green', client: 'gold' }[me.id]}`];
  const visibleLinks = useMemo(() => (navLinks[profile] || navLinks.main).map(([href, label]) => ({ href, label })), [profile]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection('#' + entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    visibleLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, [visibleLinks]);

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${scrolled ? 'bg-[#080808]/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-content mx-auto flex items-center justify-between px-6 sm:px-8 h-16">
        
        {/* Professional Tech Brand Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="logo-orbit w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-white shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
            <span className="font-display font-bold text-sm tracking-tighter">PK</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base tracking-tight text-ink leading-none">
              PRAVEEN<span className="text-accent">.</span>
            </span>
            <span className="font-mono text-[9px] text-ink-faint uppercase tracking-widest mt-0.5">DEVELOPER & FOUNDER</span>
          </div>
        </a>

        <button
          type="button"
          onClick={onSwitchProfile}
          className={`nav-profile ${profileMeta[2]}`}
          title={`Viewing as ${profileMeta[1]} — click to switch`}
          aria-label={`Viewing as ${profileMeta[1]}. Switch profile`}
        >
          <span>{profileMeta[0]}</span>
          <small>{profileMeta[1]}</small>
        </button>

        {/* Desktop Links with Active Highlight */}
        <ul className="hidden md:flex items-center gap-6 font-mono text-sm">
          {visibleLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`transition-colors relative py-1 ${
                    isActive ? 'text-accent font-semibold' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full animate-fadeIn" />
                  )}
                </a>
              </li>
            );
          })}
          
          {/* Glowing Client Login Button */}
          <li>
            <button 
              onClick={onOpenModal}
              className="px-4 py-2 bg-accent text-white hover:bg-accent/90 transition-colors rounded-lg text-xs font-mono shadow-lg shadow-accent/25 cursor-pointer"
            >
              Client Login & Budget
            </button>
          </li>

          <li>
            <a href="#contact" className="px-3.5 py-2 border border-ink text-ink hover:bg-ink hover:text-paper transition-colors rounded-lg text-xs font-mono">
              Say hello
            </a>
          </li>
        </ul>

        <button className="md:hidden flex flex-col gap-1.5 w-6 cursor-pointer" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          <span className={`h-0.5 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-2 px-6 py-4 font-mono text-sm bg-paper border-b border-line shadow-xl">
          {visibleLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 transition-colors ${
                    isActive ? 'text-accent font-semibold pl-2 border-l-2 border-accent' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li className="pt-2 border-t border-line">
            <button 
              onClick={() => { setOpen(false); onOpenModal?.(); }}
              className="w-full py-2.5 bg-accent text-white rounded-lg text-center font-mono text-xs shadow-md"
            >
              Client Login & Discuss Budget
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}