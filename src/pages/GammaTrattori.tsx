import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import TractorCard from "@/components/TractorCard";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { categories, tractors, getTractorsByCategory } from "@/data/tractors";

const GammaTrattori = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("categoria") || "all";

  const filteredTractors = activeCategory === "all" ? tractors : getTractorsByCategory(activeCategory);

  return (
    <Layout>
      <section className="section-dark py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black mb-4 uppercase tracking-tight">
              Gamma Trattori DSI
            </h1>
            <p className="text-[hsl(120,10%,55%)] text-lg max-w-2xl mx-auto">
              Scopri la nostra gamma completa di trattori professionali, suddivisi per fascia di potenza.
            </p>
          </AnimatedSection>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            <button
              onClick={() => setSearchParams({})}
              className={`px-5 py-2.5 text-sm font-bold uppercase tracking-widest transition-all ${
              activeCategory === "all" ?
              "gradient-accent text-accent-foreground shadow-card" :
              "bg-[hsl(156,32%,14%)] text-[hsl(40,100%,97%)] border border-[hsl(156,20%,20%)] hover:border-secondary/50"}`
              }>

              Tutti
            </button>
            {categories.map((cat) =>
            <button
              key={cat.id}
              onClick={() => setSearchParams({ categoria: cat.id })}
              className={`px-5 py-2.5 text-sm font-bold uppercase tracking-widest transition-all ${
              activeCategory === cat.id ?
              "gradient-accent text-accent-foreground shadow-card" :
              "bg-[hsl(156,32%,14%)] text-[hsl(40,100%,97%)] border border-[hsl(156,20%,20%)] hover:border-secondary/50"}`
              }>

                {cat.label}
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          







          {filteredTractors.length === 0 &&
          <p className="text-center text-muted-foreground text-lg mt-12">
              Nessun trattore trovato per questa categoria.
            </p>
          }
        </div>
      </section>
    </Layout>);

};

export default GammaTrattori;