import { useEffect, useRef, useState } from "react";

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}

function lerpColor(colorA: string, colorB: string, t: number) {
  const a = hexToRgb(colorA);
  const bC = hexToRgb(colorB);
  return `rgb(${Math.round(lerp(a.r, bC.r, t))},${Math.round(lerp(a.g, bC.g, t))},${Math.round(lerp(a.b, bC.b, t))})`;
}

function luminance(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

export function useScrollColorMorph() {
  const [isDark, setIsDark] = useState(true);
  const rafRef = useRef<number>(0);
  const premiumGreen = "#173F33";

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("[data-section-color]");
      if (!sections.length) return;

      const vh = window.innerHeight;
      let currentColor = sections[0].dataset.sectionColor || premiumGreen;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        const nextSection = sections[i + 1];
        const color = section.dataset.sectionColor!;

        // If this section covers the middle of the viewport, use its color
        if (rect.top <= vh * 0.5 && rect.bottom >= vh * 0.5) {
          currentColor = color;
        }

        if (!nextSection) continue;

        const nextColor = nextSection.dataset.sectionColor!;
        if (color === nextColor) continue;

        // Blend zone: 30% viewport around the boundary
        const boundary = rect.bottom;
        const blendStart = boundary - vh * 0.15;
        const blendEnd = boundary + vh * 0.15;

        if (blendStart < vh && blendEnd > 0) {
          // How far through the blend zone is the viewport center?
          const viewCenter = vh * 0.5;
          const t = (viewCenter - blendStart) / (blendEnd - blendStart);
          if (t > 0 && t < 1) {
            currentColor = "interpolated";
            const blended = lerpColor(color, nextColor, t);
            document.body.style.backgroundColor = blended;

            // Determine darkness from interpolated color
            const lum = lerp(luminance(color), luminance(nextColor), t);
            setIsDark(lum < 140);
            return;
          }
        }
      }

      // No interpolation — set solid color
      document.body.style.backgroundColor = currentColor;
      setIsDark(luminance(currentColor) < 140);
    };

    const tick = () => {
      onScroll();
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.body.style.backgroundColor = "";
    };
  }, []);

  return { isDark };
}
