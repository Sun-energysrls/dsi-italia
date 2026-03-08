import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { categories, tractors, getTractorsByCategory, brands } from "@/data/tractors";
import { ArrowRight, Tractor, Clock, Bell } from "lucide-react";
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

const upcomingModels = [
  { name: "SD 3004", brand: "John Deere", hp: "300 HP", eta: "Q3 2026" },
  { name: "SD 1404", brand: "New Holland", hp: "140 HP", eta: "Q4 2026" },
  { name: "SD 704 G", brand: "Fendt", hp: "70 HP", eta: "Q1 2027" },
];

const GammaTrattori = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeBrand = searchParams.get("brand") || "all";
  const activeCategory = searchParams.get("categoria") || "all";

  const filteredTractors = tractors.filter((t) => {
    const brandMatch = activeBrand === "all" || t.brand === activeBrand;
    const catMatch = activeCategory === "all" || t.categorySlug === activeCategory;
    return brandMatch && catMatch;
  });

  const setFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

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
              {tractors.length} modelli professionali di 3 brand partner.
              Trova il trattore perfetto per la tua azienda.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-primary border-t border-primary-foreground/10 sticky top-16 z-30">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          {/* Brand filters */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-primary-foreground/40 text-[10px] font-bold uppercase tracking-widest mr-2 hidden sm:block">Brand</span>
            <FilterButton active={activeBrand === "all"} onClick={() => setFilter("brand", "all")}>
              Tutti
            </FilterButton>
            {brands.map((brand) => (
              <FilterButton key={brand} active={activeBrand === brand} onClick={() => setFilter("brand", brand)}>
                {brand}
              </FilterButton>
            ))}
          </div>
          {/* Category filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-primary-foreground/40 text-[10px] font-bold uppercase tracking-widest mr-2 hidden sm:block">Potenza</span>
            <FilterButton active={activeCategory === "all"} onClick={() => setFilter("categoria", "all")}>
              Tutte
            </FilterButton>
            {categories.map((cat) => (
              <FilterButton key={cat.id} active={activeCategory === cat.id} onClick={() => setFilter("categoria", cat.id)}>
                {cat.label}
              </FilterButton>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-muted-foreground text-sm mb-8">
            {filteredTractors.length} {filteredTractors.length === 1 ? "modello" : "modelli"} trovati
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredTractors.map((tractor, i) => (
              <AnimatedSection key={tractor.id} delay={i * 0.04}>
                <TractorCatalogCard tractor={tractor} />
              </AnimatedSection>
            ))}
          </div>

          {filteredTractors.length === 0 && (
            <div className="text-center py-20">
              <Tractor className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">
                Nessun trattore trovato con i filtri selezionati.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* IN ARRIVO section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h2 className="text-3xl md:text-4xl font-display font-black text-primary-foreground uppercase tracking-tight">
                In Arrivo
              </h2>
              <span className="bg-secondary text-secondary-foreground text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-[4px]">
                Coming Soon
              </span>
            </div>
            <p className="text-primary-foreground/50 text-base max-w-lg mx-auto">
              Nuovi modelli in fase di importazione. Registrati per essere avvisato.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-10">
            {upcomingModels.map((model, i) => (
              <AnimatedSection key={model.name} delay={i * 0.08}>
                <div className="bg-primary-foreground/5 border border-primary-foreground/15 p-6 text-center backdrop-blur-sm">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-3">
                    {model.brand}
                  </span>
                  <h3 className="font-display text-2xl font-black text-primary-foreground uppercase tracking-tight mb-1">
                    {model.name}
                  </h3>
                  <span className="text-secondary font-black text-lg block mb-3">{model.hp}</span>
                  <span className="text-[hsl(0,0%,64%)] text-xs uppercase tracking-widest">
                    Arrivo previsto: {model.eta}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 border-2 border-secondary text-secondary px-8 py-3 rounded-[4px] font-bold uppercase tracking-widest text-sm hover:bg-secondary hover:text-secondary-foreground transition-all"
            >
              Scopri di più
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-[4px] font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
            >
              <Bell className="h-4 w-4" />
              Registrati
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

/* Filter button */
const FilterButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-[4px] transition-all ${
      active
        ? "bg-secondary text-secondary-foreground"
        : "bg-transparent text-primary-foreground border border-primary-foreground/30 hover:border-primary-foreground/60"
    }`}
  >
    {children}
  </button>
);

/* Catalog card */
const TractorCatalogCard = ({ tractor }: { tractor: TractorType }) => {
  return (
    <Link
      to={`/trattori/${tractor.id}`}
      className="group block bg-card border border-border hover:border-secondary/40 overflow-hidden transition-all duration-300 hover:shadow-elevated"
    >
      <div className="aspect-[16/10] overflow-hidden bg-muted relative">
        <img
          src={imageMap[tractor.image]}
          alt={tractor.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
            {tractor.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest block mb-1">
          {tractor.brand}
        </span>
        <h3 className="font-display text-xl font-black text-foreground mb-1 uppercase tracking-tight">
          {tractor.name}
        </h3>
        <span className="text-secondary font-black text-2xl block mb-2">{tractor.hp} HP</span>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
          {tractor.shortDescription}
        </p>
        <span className="inline-flex items-center gap-2 text-secondary text-xs font-bold uppercase tracking-[0.15em] group-hover:gap-3 transition-all">
          Scopri di più
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
};

export default GammaTrattori;
