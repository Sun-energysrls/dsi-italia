import { useEffect } from 'react';

export function useRevealAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );
    document.querySelectorAll('.reveal, .stagger-children').forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
}
