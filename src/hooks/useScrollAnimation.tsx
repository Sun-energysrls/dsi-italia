import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

export const AnimatedSection = ({
  children,
  className = "",
  style: extraStyle,
  delay = 0,
  from = "up",
  distance = 30,
  duration = 0.8,
  withScale = false,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  from?: "up" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  withScale?: boolean;
}) => {
  const { ref, isVisible } = useScrollAnimation();

  const baseTransform =
    from === "left"
      ? `translateX(-${distance}px)`
      : from === "right"
        ? `translateX(${distance}px)`
        : from === "none"
          ? ""
          : `translateY(${distance}px)`;

  const scalePart = withScale ? " scale(0.95)" : "";
  const initialTransform = baseTransform
    ? `${baseTransform}${scalePart}`
    : withScale ? "scale(0.95)" : "none";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : initialTransform,
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        ...extraStyle,
      }}
    >
      {children}
    </div>
  );
};

/** Animated orange separator line — reveals from left on scroll */
export const AnimatedLine = ({
  className = "",
  color = "#F97316",
  delay = 0,
  width = 40,
  height = 2,
}: {
  className?: string;
  color?: string;
  delay?: number;
  width?: number;
  height?: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        width,
        height,
        backgroundColor: color,
        transformOrigin: "left center",
        transform: isVisible ? "scaleX(1)" : "scaleX(0)",
        transition: `transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    />
  );
};
