import { Link } from "react-router-dom";
import { ArrowRight, Tractor } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { categories } from "@/data/tractors";

const CategorySection = () => {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-4 uppercase tracking-tight">
            LA NOSTRA GAMMA
          </h2>
          <p className="text-muted-foreground text-lg">Trattori per ogni fascia di potenza</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.id} delay={i * 0.08}>
              <Link
                to={`/trattori?categoria=${cat.id}`}
                className="group p-8 bg-background border border-border hover:border-secondary/50 shadow-card hover:shadow-elevated transition-all duration-300 text-center block"
              >
                <Tractor className="h-10 w-10 text-secondary mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">{cat.label}</h3>
                <p className="text-muted-foreground text-sm">{cat.description}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-secondary text-sm font-bold uppercase tracking-widest">
                  SCOPRI <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
