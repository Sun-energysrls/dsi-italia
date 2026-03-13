import AnimatedCounter from "@/components/AnimatedCounter";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const stats = [
  { value: 2, suffix: "", label: "Brand Partner", sublabel: "selezionati a livello mondiale" },
  { value: 16, suffix: "+", label: "Modelli Disponibili", sublabel: "in catalogo e configurabili" },
  { value: 50, suffix: "+", label: "Configurazioni", sublabel: "personalizzazioni possibili" },
  { value: 100, suffix: "%", label: "Clienti Soddisfatti", sublabel: "soddisfazione certificata" },
];

const StatsBar = () => {
  return (
    <section
      className="relative py-24 noise-overlay"
      style={{ background: "transparent", color: "hsl(40,100%,97%)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-secondary" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(249,115,22,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-[1]">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center relative group"
                style={{ willChange: "transform" }}
              >
                {/* Left border accent on hover */}
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 group-hover:h-12 transition-all duration-500 rounded-full"
                  style={{ background: "#F97316" }}
                />

                {/* Big number */}
                <div
                  className="font-display font-light mb-1"
                  style={{
                    fontSize: "3.5rem",
                    color: "white",
                    textShadow: "0 0 40px rgba(249,115,22,0.2)",
                    lineHeight: 1.1,
                  }}
                >
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>

                {/* Orange dash */}
                <div
                  className="mx-auto mb-3"
                  style={{ width: 24, height: 2, backgroundColor: "#F97316" }}
                />

                {/* Label */}
                <p
                  className="uppercase font-semibold"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  {stat.label}
                </p>

                {/* Sublabel */}
                <p
                  style={{
                    fontSize: "0.7rem",
                    color: "rgba(255,255,255,0.4)",
                    marginTop: 4,
                  }}
                >
                  {stat.sublabel}
                </p>

                {/* Vertical divider */}
                {i < stats.length - 1 && (
                  <div
                    className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 h-20"
                    style={{
                      width: "1px",
                      background: "rgba(255,255,255,0.1)",
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
