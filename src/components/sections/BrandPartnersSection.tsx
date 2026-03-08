import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { brands } from "@/data/brands";

const BrandPartnersSection = () => {
  return (
    <section className="py-28 lg:py-36 bg-card border-y border-border/30">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
            I NOSTRI PARTNER
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-4 uppercase tracking-tight text-foreground">
            Brand di Eccellenza
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Selezioniamo solo i migliori produttori mondiali di macchine agricole.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30">
          {brands.map((brand, i) => (
            <AnimatedSection key={brand.id} delay={i * 0.08}>
              <div className="group p-10 bg-card hover:bg-muted/30 transition-all duration-500">
                {/* Initials badge */}
                <div className="w-14 h-14 border border-secondary/40 flex items-center justify-center mb-6">
                  <span className="font-display font-black text-lg text-secondary">
                    {brand.initials}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold mb-1 text-foreground">{brand.name}</h3>
                <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.2em] block mb-4">
                  {brand.country}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {brand.description}
                </p>
                <Link
                  to="/trattori"
                  className="inline-flex items-center gap-1 text-secondary text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-80 transition-opacity"
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
