import { AnimatedSection } from "@/hooks/useScrollAnimation";
import TractorCard from "@/components/TractorCard";
import { tractors } from "@/data/tractors";

const FeaturedModels = () => {
  const featured = [
    tractors.find((t) => t.id === "6r-185"),
    tractors.find((t) => t.id === "t6-180"),
    tractors.find((t) => t.id === "516-vario"),
    tractors.find((t) => t.id === "maxxum-150"),
  ].filter(Boolean) as typeof tractors;

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-4 uppercase tracking-tight">
            MODELLI IN EVIDENZA
          </h2>
          <p className="text-muted-foreground text-lg">Un trattore per ogni esigenza</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
