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
    <section className="section-dark border-t border-[hsl(156,20%,14%)]">
      <div className="w-full">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[hsl(156,20%,14%)]">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center py-14 lg:py-20">
                <div className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary-foreground mb-3">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[hsl(120,10%,40%)] text-[10px] uppercase tracking-[0.3em] font-medium">
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
