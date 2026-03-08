import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { brands } from "@/data/brands";

const BrandPartnersSection = () => {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-secondary font-bold text-xs uppercase tracking-[0.25em] mb-3">
            I NOSTRI PARTNER
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-4 uppercase tracking-tight">
            Brand di Eccellenza
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Selezioniamo solo i migliori produttori mondiali di macchine agricole.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {brands.map((brand, i) => (
            <AnimatedSection key={brand.id} delay={i * 0.08}>
              <div className="group bg-background p-8 border border-border hover:border-secondary/50 transition-all duration-300 shadow-card">
                {/* Code badge */}
                <div
                  className="w-14 h-14 flex items-center justify-center mb-5"
                  style={{ backgroundColor: brand.color }}
                >
                  <span className="font-display font-black text-lg text-white">
                    {brand.code}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">{brand.name}</h3>
                <span className="text-secondary text-xs font-bold uppercase tracking-widest block mb-3">
                  {brand.flag} {brand.country}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {brand.description}
                </p>
                <Link
                  to="/trattori"
                  className="inline-flex items-center gap-1 text-secondary text-sm font-bold uppercase tracking-widest hover:opacity-80 transition-opacity"
                >
                  Scopri modelli <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartnersSection;
