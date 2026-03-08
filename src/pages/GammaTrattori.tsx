import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { categories, tractors, getTractorsByCategory } from "@/data/tractors";
import { ArrowRight, SlidersHorizontal, Tractor, Filter } from "lucide-react";
import type { Tractor as TractorType } from "@/data/tractors";
import tractorLarge from "@/assets/tractor-large.jpg";
import tractorMedium from "@/assets/tractor-medium.jpg";
import tractorSmall from "@/assets/tractor-small.jpg";
import tractorCompact from "@/assets/tractor-compact.jpg";

const imageMap: Record<string, string> = {
  "tractor-large": tractorLarge,
  "tractor-medium": tractorMedium,
  "tractor-small": tractorSmall,
  "tractor-compact": tractorCompact,
};

const GammaTrattori = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("categoria") || "all";
  const [sortBy, setSortBy] = useState<"hp-desc" | "hp-asc" | "name">("hp-desc");

  const filteredTractors = activeCategory === "all" ? tractors : getTractorsByCategory(activeCategory);

  const sortedTractors = [...filteredTractors].sort((a, b) => {
    if (sortBy === "hp-desc") return b.hp - a.hp;
    if (sortBy === "hp-asc") return a.hp - b.hp;
    return a.name.localeCompare(b.name);
  });

  const totalModels = tractors.length;

  return (
    <Layout>
      {/* Hero header */}
      <section className="bg-primary pt-28 pb-16 lg:pt-36 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <Tractor className="h-6 w-6 text-secondary" />
              <span className="text-secondary font-bold text-sm uppercase tracking-[0.2em]">
                Catalogo completo
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary-foreground mb-4 uppercase tracking-tight">
              Gamma Trattori
            </h1>
            <p className="text-primary-foreground/60 text-lg max-w-xl">
              {totalModels} modelli professionali suddivisi per fascia di potenza.
              Trova il trattore perfetto per la tua azienda.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters bar */}
      <section className="bg-card border-b border-border sticky top-16 z-30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="h-4 w-4 text-muted-foreground hidden sm:block" />
              <button
                onClick={() => setSearchParams({})}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-[6px] transition-all ${
                  activeCategory === "all"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                Tutti ({totalModels})
              </button>
              {categories.map((cat) => {
                const count = getTractorsByCategory(cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSearchParams({ categoria: cat.id })}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-[6px] transition-all ${
                      activeCategory === cat.id
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                    }`}
                  >
                    {cat.label} ({count})
                  </button>
                );
              })}
            </div>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="bg-muted text-foreground text-xs font-bold uppercase tracking-widest px-3 py-2 rounded-[6px] border-none outline-none cursor-pointer"
              >
                <option value="hp-desc">Potenza ↓</option>
                <option value="hp-asc">Potenza ↑</option>
                <option value="name">Nome A–Z</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Results count */}
          <p className="text-muted-foreground text-sm mb-8">
            {sortedTractors.length} {sortedTractors.length === 1 ? "modello" : "modelli"} trovati
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {sortedTractors.map((tractor, i) => (
              <AnimatedSection key={tractor.id} delay={i * 0.04}>
                <TractorCatalogCard tractor={tractor} />
              </AnimatedSection>
            ))}
          </div>

          {sortedTractors.length === 0 && (
            <div className="text-center py-20">
              <Tractor className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">
                Nessun trattore trovato per questa categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA bottom */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-black text-primary-foreground uppercase tracking-tight mb-4">
              Non trovi il modello giusto?
            </h2>
            <p className="text-primary-foreground/60 mb-8 max-w-lg mx-auto">
              Contattaci per una consulenza personalizzata. Il nostro team ti aiuterà a trovare la soluzione perfetta.
            </p>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-[6px] font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
            >
              Contattaci
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

/* Enhanced catalog card */
const TractorCatalogCard = ({ tractor }: { tractor: TractorType }) => {
  return (
    <Link
      to={`/trattori/${tractor.id}`}
      className="group block bg-card border border-border hover:border-secondary/40 overflow-hidden transition-all duration-300 hover:shadow-elevated"
    >
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden bg-muted relative">
        <img
          src={imageMap[tractor.image]}
          alt={tractor.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-primary/90 text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 backdrop-blur-sm">
            {tractor.category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-secondary text-secondary-foreground text-sm font-black px-3 py-1.5">
            {tractor.hp} HP
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-xl font-black text-foreground mb-1 uppercase tracking-tight">
          {tractor.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
          {tractor.shortDescription}
        </p>

        {/* Specs row */}
        <div className="grid grid-cols-3 gap-3 mb-4 pt-4 border-t border-border">
          <div>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest block">Motore</span>
            <span className="text-xs font-bold text-foreground">{tractor.engine.split(" ").slice(0, 3).join(" ")}</span>
          </div>
          <div>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest block">Trasmissione</span>
            <span className="text-xs font-bold text-foreground">{tractor.transmission}</span>
          </div>
          <div>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest block">Trazione</span>
            <span className="text-xs font-bold text-foreground">{tractor.traction}</span>
          </div>
        </div>

        {/* CTA */}
        <span className="inline-flex items-center gap-2 text-secondary text-xs font-bold uppercase tracking-[0.15em] group-hover:gap-3 transition-all">
          Scheda completa
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
};

export default GammaTrattori;
