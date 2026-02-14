import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import TractorCard from "@/components/TractorCard";
import { categories, tractors, getTractorsByCategory } from "@/data/tractors";

const GammaTrattori = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("categoria") || "all";

  const filteredTractors = activeCategory === "all" ? tractors : getTractorsByCategory(activeCategory);

  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Gamma Trattori DSI
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Scopri la nostra gamma completa di trattori professionali, suddivisi per fascia di potenza.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            <button
              onClick={() => setSearchParams({})}
              className={`px-5 py-2.5 rounded-md text-sm font-semibold uppercase tracking-wide transition-all ${
                activeCategory === "all"
                  ? "gradient-primary text-primary-foreground shadow-card"
                  : "bg-card text-foreground border border-border hover:border-secondary/50"
              }`}
            >
              Tutti
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSearchParams({ categoria: cat.id })}
                className={`px-5 py-2.5 rounded-md text-sm font-semibold uppercase tracking-wide transition-all ${
                  activeCategory === cat.id
                    ? "gradient-primary text-primary-foreground shadow-card"
                    : "bg-card text-foreground border border-border hover:border-secondary/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTractors.map((t) => (
              <TractorCard key={t.id} tractor={t} />
            ))}
          </div>

          {filteredTractors.length === 0 && (
            <p className="text-center text-muted-foreground text-lg mt-12">
              Nessun trattore trovato per questa categoria.
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default GammaTrattori;
