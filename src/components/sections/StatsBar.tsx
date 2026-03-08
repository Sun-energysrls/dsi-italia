import AnimatedCounter from "@/components/AnimatedCounter";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const stats = [
  { value: 1, suffix: "", label: "BRAND PARTNER" },
  { value: 6, suffix: "+", label: "MODELLI DISPONIBILI" },
  { value: 50, suffix: "+", label: "CONFIGURAZIONI" },
  { value: 100, suffix: "%", label: "CLIENTI SODDISFATTI" },
];

const StatsBar = () => {
  return (
    <section className="section-dark py-16 border-t border-[hsl(156,20%,14%)]">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-black text-primary-foreground mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[hsl(120,10%,45%)] text-xs uppercase tracking-[0.2em] font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default StatsBar;
