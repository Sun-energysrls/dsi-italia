import { AnimatedSection } from "@/hooks/useScrollAnimation";
import TractorCard from "@/components/TractorCard";
import { tractors } from "@/data/tractors";

const FeaturedModels = () => {
  const featured = [
    tractors.find((t) => t.id === "sd2604"),
    tractors.find((t) => t.id === "sd1604"),
    tractors.find((t) => t.id === "sd904"),
    tractors.find((t) => t.id === "sd504g"),
  ].filter(Boolean) as typeof tractors;

  return (
    <section className="py-28 lg:py-36 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
            LA NOSTRA SELEZIONE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-4 uppercase tracking-tight text-foreground">
            MODELLI IN EVIDENZA
          </h2>
          <p className="text-muted-foreground text-base">Un trattore per ogni esigenza</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/30">
          {featured.map((t, i) => (
            <AnimatedSection key={t.id} delay={i * 0.08}>
              <TractorCard tractor={t} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;
