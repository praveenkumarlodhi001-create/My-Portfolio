import { useEffect } from 'react';

/**
 * Watches every element with the `.reveal-section` class and adds
 * `.is-visible` the first time it scrolls into view. Pure CSS handles the
 * actual animation (see index.css) — this hook only toggles the class,
 * so it stays cheap even with many sections on the page.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal-section');
    if (!targets.length) return;

    // If the browser can't do IntersectionObserver, just show everything.
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
