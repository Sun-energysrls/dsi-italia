import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import TractorCard from "@/components/TractorCard";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { categories, tractors, getTractorsByCategory, getTractorsByBrand } from "@/data/tractors";
import { brands } from "@/data/brands";

const GammaTrattori = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("categoria") || "all";
  const activeBrand = searchParams.get("brand") || "all";

  let filteredTractors = tractors;
  if (activeCategory !== "all") {
    filteredTractors = getTractorsByCategory(activeCategory);
  }
  if (activeBrand !== "all") {
    filteredTractors = filteredTractors.filter((t) => t.brandId === activeBrand);
  }

  const handleCategoryFilter = (catId: string) => {
    const params = new URLSearchParams();
    if (catId !== "all") params.set("categoria", catId);
    if (activeBrand !== "all") params.set("brand", activeBrand);
    setSearchParams(params);
  };

  const handleBrandFilter = (brandId: string) => {
    const params = new URLSearchParams();
    if (activeCategory !== "all") params.set("categoria", activeCategory);
    if (brandId !== "all") params.set("brand", brandId);
    setSearchParams(params);
  };

  return (
    <Layout>
      <SeoHead
        title="Catalogo Trattori — 23 Modelli John Deere, New Holland, Fendt, Case IH"
        description="Catalogo completo trattori DSI Import. 23 modelli da 150 a 620CV."
        canonical="https://dsi-italia.com/trattori"
      />

      <section className="py-20 lg:py-28" style={{ backgroundColor: "#1B4332" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4 uppercase tracking-tight">
              Catalogo Trattori
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              {tractors.length} modelli professionali da 4 brand di eccellenza mondiale.
            </p>
          </AnimatedSection>

          {/* Brand filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <button
              onClick={() => handleBrandFilter("all")}
              className={`px-5 py-2.5 text-sm font-bold uppercase tracking-widest transition-all ${
                activeBrand === "all"
                  ? "gradient-accent text-accent-foreground shadow-card"
                  : "bg-white/10 text-white border border-white/20 hover:border-secondary/50"
              }`}
            >
              Tutti i Brand
            </button>
            {brands.map((brand) => (
              <button
                key={brand.id}
                onClick={() => handleBrandFilter(brand.id)}
                className={`px-5 py-2.5 text-sm font-bold uppercase tracking-widest transition-all ${
                  activeBrand === brand.id
                    ? "gradient-accent text-accent-foreground shadow-card"
                    : "bg-white/10 text-white border border-white/20 hover:border-secondary/50"
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => handleCategoryFilter("all")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === "all"
                  ? "text-secondary border-b-2 border-secondary"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Tutti
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryFilter(cat.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat.id
                    ? "text-secondary border-b-2 border-secondary"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTractors.map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 0.04}>
                <TractorCard tractor={t} />
              </AnimatedSection>
            ))}
          </div>

          {filteredTractors.length === 0 && (
            <p className="text-center text-muted-foreground text-lg mt-12">
              Nessun trattore trovato per questa selezione.
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default GammaTrattori;
