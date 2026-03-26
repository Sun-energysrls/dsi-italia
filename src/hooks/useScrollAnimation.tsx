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
  delay = 0,
  from = "up",
  distance = 24,
  duration = 0.7,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
}) => {
  const { ref, isVisible } = useScrollAnimation();
  const initialTransform =
    from === "left"
      ? `translateX(-${distance}px)`
      : from === "right"
        ? `translateX(${distance}px)`
        : from === "none"
          ? "none"
          : `translateY(${distance}px)`;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : initialTransform,
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};
