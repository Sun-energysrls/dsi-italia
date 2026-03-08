import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { brands } from "@/data/brands";

const BrandPartnersSection = () => {
  return (
    <section className="section-dark py-28 lg:py-40">
      <div className="px-8 lg:px-16 max-w-[1600px] mx-auto">
        <AnimatedSection className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-secondary font-bold text-[10px] uppercase tracking-[0.4em] mb-4">
                I NOSTRI PARTNER
              </p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight leading-[0.95]">
                Brand di
                <br />
                Eccellenza
              </h2>
            </div>
            <p className="text-[hsl(120,10%,50%)] text-sm lg:text-base max-w-md leading-relaxed">
              Selezioniamo solo i migliori produttori mondiali di macchine agricole.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[hsl(156,20%,18%)]">
          {brands.map((brand, i) => (
            <AnimatedSection key={brand.id} delay={i * 0.08}>
              <div className="group p-10 lg:p-14 bg-[hsl(156,32%,10%)] hover:bg-[hsl(156,32%,13%)] transition-all duration-500 h-full">
                {/* Initials badge */}
                <div className="w-16 h-16 bg-[hsl(156,32%,18%)] flex items-center justify-center mb-8">
                  <span className="font-display font-black text-xl text-primary-foreground">
                    {brand.initials}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-1">{brand.name}</h3>
                <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">
                  {brand.country}
                </span>
                <p className="text-[hsl(120,10%,50%)] text-sm leading-relaxed mb-8">
                  {brand.description}
                </p>
                <Link
                  to="/trattori"
                  className="inline-flex items-center gap-2 text-secondary text-[11px] font-bold uppercase tracking-[0.25em] hover:opacity-80 transition-opacity"
                >
                  Scopri modelli
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
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
