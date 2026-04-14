import { useEffect, useState, useCallback } from "react";

function luminance(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

/**
 * Scroll-driven color morph — targets #page-content wrapper.
 *
 * The wrapper's background-color transitions smoothly (0.8s ease).
 * Sections inside declare data-bg-color but have background: transparent,
 * so the wrapper's background shows through and morphs as user scrolls.
 *
 * Also exposes isDark + morphColor for the navbar (Header).
 */
export function useScrollColorMorph() {
  const [isDark, setIsDark] = useState(true);
  const [morphColor, setMorphColor] = useState("#1b3a2d");

  const applyColor = useCallback((color: string, wrapper: HTMLElement) => {
    wrapper.style.backgroundColor = color;
    setMorphColor(color);

    const dark = luminance(color) < 140;
    setIsDark(dark);

    if (dark) {
      wrapper.classList.add("section-dark");
      wrapper.classList.remove("section-light");
    } else {
      wrapper.classList.add("section-light");
      wrapper.classList.remove("section-dark");
    }
  }, []);

  useEffect(() => {
    const wrapper = document.getElementById("page-content");
    if (!wrapper) return;

    // Ensure CSS transition is set
    wrapper.style.transition = "background-color 0.8s ease";

    const setupObserver = () => {
      const sections = wrapper.querySelectorAll<HTMLElement>("[data-bg-color]");
      if (!sections.length) return null;

      // Immediately apply the first section's color (prevents flash on load)
      const firstColor = sections[0].dataset.bgColor!;
      applyColor(firstColor, wrapper);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const color = (entry.target as HTMLElement).dataset.bgColor!;
              applyColor(color, wrapper);
            }
          });
        },
        {
          threshold: 0,
          rootMargin: "-45% 0px -45% 0px",
        }
      );

      sections.forEach((section) => observer.observe(section));
      return observer;
    };

    // Initial setup
    let observer = setupObserver();

    // Re-observe when the DOM changes (route transitions)
    const mutationObs = new MutationObserver(() => {
      observer?.disconnect();
      observer = setupObserver();
    });

    mutationObs.observe(wrapper, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutationObs.disconnect();
      wrapper.style.transition = "";
    };
  }, [applyColor]);

  return { isDark, morphColor };
}
