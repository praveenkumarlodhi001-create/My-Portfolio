import { useEffect } from 'react';

/**
 * Adds `.is-visible` to every `.reveal-section` the first time it scrolls into view.
 * Pass any value that changes when new sections mount (e.g. the active profile) as
 * `watchKey` so late-mounted sections get observed too — otherwise they stay invisible.
 */
export default function useScrollReveal(watchKey) {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal-section:not(.is-visible)');
    if (!targets.length) return undefined;

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return undefined;
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
  }, [watchKey]);
}
