import { useState, useEffect } from 'react';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#demos', label: 'Demos' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#process', label: 'Process' },
  { href: '#faq', label: 'FAQ' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Scroll detection for navbar background blur
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);

    // Observer to track which section is currently in view
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
    links.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${scrolled ? 'bg-paper/90 backdrop-blur border-b border-line' : 'bg-transparent'}`}>
      <nav className="max-w-content mx-auto flex items-center justify-between px-6 sm:px-8 h-16">
        
        {/* Professional Tech Brand Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-white shadow-lg shadow-accent/20 group-hover:scale-105 transition-transform">
            <span className="font-display font-bold text-sm tracking-tighter">PK</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base tracking-tight text-ink leading-none">
              Praveen<span className="text-accent">.</span>
            </span>
            <span className="font-mono text-[9px] text-ink-faint uppercase tracking-widest mt-0.5">
              Technologies
            </span>
          </div>
        </a>

        {/* Desktop Links with Active Highlight */}
        <ul className="hidden md:flex items-center gap-8 font-mono text-sm">
          {links.map((link) => {
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
          <li>
            <a href="#contact" className="px-3.5 py-2 border border-ink text-ink hover:bg-ink hover:text-paper transition-colors rounded-lg text-xs font-mono">
              Say hello
            </a>
          </li>
        </ul>

        <button className="md:hidden flex flex-col gap-1.5 w-6" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          <span className={`h-0.5 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-2 px-6 py-4 font-mono text-sm bg-paper border-b border-line shadow-xl">
          {links.map((link) => {
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
        </ul>
      )}
    </header>
  );
}