const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/praveenkumarlodhi001-create',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.1.79-.25.79-.56v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/praveen-kumar-005489367/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    ),
  },
  {
    label: 'Play Store',
    href: 'https://play.google.com/store/apps/details?id=com.praveen.taporigpt',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M3.6 2.8c-.35.32-.56.8-.56 1.42v15.56c0 .62.21 1.1.56 1.42l.1.08 8.72-8.72v-.2L3.7 2.72l-.1.08Zm11.2 9.94-2.9-2.9v-.08l2.9-2.9 3.44 1.96c.98.56.98 1.4 0 1.96l-3.44 1.96Zm-9.6-9.5 7.56 7.56-7.56 7.56a1.1 1.1 0 0 1-.4-.86V4.1c0-.3.13-.62.4-.86Zm0 15.1c.02 0 .03 0 0 0Z" />
      </svg>
    ),
  },
];

export default function About({ onOpenResumeGate }) {
  return (
    <section id="about" className="reveal-section py-16 sm:py-20 border-t border-line">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-accent uppercase tracking-wider">About</span>
            <p className="mt-2 text-ink text-lg sm:text-xl leading-relaxed">
              4th-year B.Tech (CSE) student at AKTU and mobile-first software developer who builds solo and
              ships working software — from an AI persona app live on the Play Store to voice-first tools
              built for real, non-technical users.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenResumeGate}
              className="shine-btn px-5 py-3 bg-ink text-paper font-mono text-sm rounded-lg hover:bg-accent transition-all hover:scale-[1.03] active:scale-[0.97] inline-flex items-center gap-2 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <rect x="4" y="10" width="16" height="10" rx="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" strokeLinecap="round" />
              </svg>
              Resume
            </button>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="w-11 h-11 flex items-center justify-center rounded-lg border border-line text-ink-soft hover:text-accent hover:border-accent/50 hover:scale-110 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
