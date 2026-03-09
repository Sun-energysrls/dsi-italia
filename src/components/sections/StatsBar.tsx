import AnimatedCounter from "@/components/AnimatedCounter";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const stats = [
  { value: 3, suffix: "", label: "BRAND PARTNER" },
  { value: 23, suffix: "+", label: "MODELLI DISPONIBILI" },
  { value: 50, suffix: "+", label: "CONFIGURAZIONI" },
  { value: 100, suffix: "%", label: "CLIENTI SODDISFATTI" },
];

const StatsBar = () => {
  return (
    <section
      className="relative py-20 noise-overlay"
      style={{ background: "var(--dsi-green-gradient)" }}
    >
      {/* Orange accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F97316]" />

      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center relative"
                style={{ willChange: "transform" }}
              >
                <div
                  className="font-display font-light mb-2"
                  style={{
                    fontSize: "4rem",
                    color: "white",
                    textShadow: "0 0 40px rgba(249,115,22,0.2)",
                  }}
                >
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p
                  className="uppercase font-medium"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {stat.label}
                </p>
                {/* Vertical divider */}
                {i < stats.length - 1 && (
                  <div
                    className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 h-16"
                    style={{
                      width: "1px",
                      background: "rgba(255,255,255,0.12)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default StatsBar;
