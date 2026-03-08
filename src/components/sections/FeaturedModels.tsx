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
    <section className="section-dark py-28 lg:py-40">
      <div className="px-8 lg:px-16 max-w-[1600px] mx-auto">
        <AnimatedSection className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-secondary font-bold text-[10px] uppercase tracking-[0.4em] mb-4">
                LA NOSTRA GAMMA
              </p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight leading-[0.95]">
                Modelli in
                <br />
                Evidenza
              </h2>
            </div>
            <p className="text-[hsl(120,10%,50%)] text-sm lg:text-base max-w-sm leading-relaxed">
              Un trattore per ogni esigenza professionale.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
