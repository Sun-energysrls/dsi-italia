import { useEffect, useRef } from 'react';

export function useAnimatedCounters() {
  const observed = useRef(new Set<Element>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !observed.current.has(entry.target)) {
            observed.current.add(entry.target);
            const el = entry.target as HTMLElement;
            const end = parseInt(el.dataset.end || '0', 10);
            const suffix = el.dataset.suffix || '';
            const duration = 2000;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 4);
              el.textContent = Math.round(eased * end) + suffix;
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll('[data-counter]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
