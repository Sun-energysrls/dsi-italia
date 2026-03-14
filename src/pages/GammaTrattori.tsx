import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { categories, tractors, brands } from "@/data/tractors";
import { ArrowRight, Tractor } from "lucide-react";
import type { Tractor as TractorType } from "@/data/tractors";
import { getTractorImage } from "@/data/tractor-images";
import fieldBg from "@/assets/field-bg.jpg";

// Power range groupings — xl merged into large
const powerRanges = [
  { slugs: ["xl", "large"], label: "GAMMA ALTA POTENZA (150–260 HP)" },
  { slugs: ["medium"], label: "GAMMA MEDIA POTENZA (90–140 HP)" },
  { slugs: ["compact"], label: "GAMMA COMPATTA (55–90 HP)" },
];

const GammaTrattori = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeBrand = searchParams.get("brand") || "all";
  const activeCategory = searchParams.get("categoria") || "all";
  const [animating, setAnimating] = useState(false);

  const filteredTractors = tractors.filter((t) => {
    const brandMatch = activeBrand === "all" || t.brand === activeBrand;
    // When filtering by "large", also include "xl"
    const catMatch =
      activeCategory === "all" ||
      t.categorySlug === activeCategory ||
      (activeCategory === "large" && t.categorySlug === "xl");
    return brandMatch && catMatch;
  });

  const setFilter = (key: string, value: string) => {
    setAnimating(true);
    const params = new URLSearchParams(searchParams);
    if (value === "all") params.delete(key);
    else params.set(key, value);
    setSearchParams(params);
    setTimeout(() => setAnimating(false), 50);
  };

  const showGrouped = activeCategory === "all" && filteredTractors.length > 0;

  return (
    <Layout>
      {/* Hero header with integrated filters */}
      <section
        className="relative overflow-hidden flex flex-col justify-end"
        style={{
          background: "var(--dsi-green-gradient)",
          minHeight: 380,
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px]" style={{ background: "rgba(249,115,22,0.3)" }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[80px]" style={{ background: "rgba(249,115,22,0.2)" }} />
        </div>

        <div className="relative z-10 px-4 md:px-10 lg:px-20" style={{ paddingTop: 60, paddingBottom: 32 }}>
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <Tractor className="h-5 w-5" style={{ color: "#F97316" }} />
              <span className="uppercase font-bold" style={{ color: "#F97316", fontSize: "0.75rem", letterSpacing: "0.2em" }}>
                Catalogo completo
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4 uppercase tracking-tight">
              Gamma Trattori DSI
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem" }}>
              16 modelli professionali di 1 brand partner.
            </p>
          </AnimatedSection>
        </div>

        {/* Filter bar */}
        <div
          style={{
            background: "rgba(0,0,0,0.25)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
          className="relative z-10 flex flex-wrap items-center gap-4 md:gap-6 px-4 md:px-10 lg:px-20 py-4 md:py-5"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Brand
            </span>
            <div className="flex flex-wrap gap-2">
              <FilterBtn active={activeBrand === "all"} onClick={() => setFilter("brand", "all")}>Tutti</FilterBtn>
              {brands.map((b) => (
                <FilterBtn key={b} active={activeBrand === b} onClick={() => setFilter("brand", b)}>{b}</FilterBtn>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Potenza
            </span>
            <div className="flex flex-wrap gap-2">
              <FilterBtn active={activeCategory === "all"} onClick={() => setFilter("categoria", "all")}>Tutte</FilterBtn>
              {categories.map((c) => (
                <FilterBtn key={c.id} active={activeCategory === c.id} onClick={() => setFilter("categoria", c.id)}>{c.label}</FilterBtn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="px-4 md:px-10 lg:px-20" style={{ background: "#F5F2EE", padding: "60px 20px" }}>
        <div className="max-w-[1400px] mx-auto">
          <p
            className="uppercase mb-10"
            style={{ color: "#999", fontSize: "0.8rem", letterSpacing: "0.1em" }}
          >
            {filteredTractors.length} {filteredTractors.length === 1 ? "modello" : "modelli"} trovati
          </p>

          {showGrouped ? (
            powerRanges.map((range) => {
              const groupTractors = filteredTractors.filter((t) => range.slugs.includes(t.categorySlug));
              if (groupTractors.length === 0) return null;
              return (
                <div key={range.label} className="mb-14">
                  <div className="flex items-center gap-4 mb-6">
                    <div style={{ width: 4, height: 28, backgroundColor: "#F97316", borderRadius: 2 }} />
                    <h2
                      className="font-display font-bold uppercase"
                      style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "#333" }}
                    >
                      {range.label}
                    </h2>
                    <div className="flex-1 h-px" style={{ background: "#DDD" }} />
                    <span style={{ color: "#999", fontSize: "0.75rem" }}>{groupTractors.length} modelli</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                    {groupTractors.map((tractor, i) => (
                      <div
                        key={tractor.id}
                        style={{
                          opacity: animating ? 0 : 1,
                          transform: animating ? "scale(0.96)" : "scale(1)",
                          transition: "opacity 0.35s ease, transform 0.35s ease",
                        }}
                      >
                        <AnimatedSection delay={i * 0.05}>
                          <CatalogCard tractor={tractor} />
                        </AnimatedSection>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
              {filteredTractors.map((tractor, i) => (
                <div
                  key={tractor.id}
                  style={{
                    opacity: animating ? 0 : 1,
                    transform: animating ? "scale(0.96)" : "scale(1)",
                    transition: "opacity 0.35s ease, transform 0.35s ease",
                  }}
                >
                  <AnimatedSection delay={i * 0.05}>
                    <CatalogCard tractor={tractor} />
                  </AnimatedSection>
                </div>
              ))}
            </div>
          )}

          {filteredTractors.length === 0 && (
            <div className="text-center py-20">
              <Tractor className="h-12 w-12 mx-auto mb-4" style={{ color: "rgba(0,0,0,0.15)" }} />
              <p style={{ color: "#999", fontSize: "1.1rem" }}>
                Nessun trattore trovato con i filtri selezionati.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

const FilterBtn = ({
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
    className="transition-all duration-200"
    style={
      active
        ? {
            background: "#F97316",
            borderColor: "#F97316",
            color: "white",
            border: "1px solid #F97316",
            borderRadius: 4,
            padding: "7px 18px",
            fontSize: "0.72rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            fontWeight: 600,
            boxShadow: "0 4px 12px rgba(249,115,22,0.35)",
            cursor: "pointer",
          }
        : {
            border: "1px solid rgba(255,255,255,0.25)",
            color: "rgba(255,255,255,0.7)",
            background: "transparent",
            borderRadius: 4,
            padding: "7px 18px",
            fontSize: "0.72rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            fontWeight: 500,
            cursor: "pointer",
          }
    }
  >
    {children}
  </button>
);

const CatalogCard = ({ tractor }: { tractor: TractorType }) => (
  <div
    className="group flex flex-col transition-all duration-300"
    style={{
      height: 480,
      background: "white",
      borderRadius: 8,
      overflow: "hidden",
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      border: "1px solid #EDE9E3",
      willChange: "transform",
    }}
    onMouseEnter={(e) => {
      const el = e.currentTarget;
      el.style.transform = "translateY(-4px)";
      el.style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)";
      el.style.borderColor = "rgba(249,115,22,0.4)";
    }}
    onMouseLeave={(e) => {
      const el = e.currentTarget;
      el.style.transform = "translateY(0)";
      el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.08)";
      el.style.borderColor = "#EDE9E3";
    }}
  >
    <Link to={`/trattori/${tractor.id}`} className="relative overflow-hidden block" style={{ height: 260 }}>
      <img src={fieldBg} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.9) saturate(1.1)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.2) 100%)" }} />
      <img
        src={getTractorImage(tractor.id)}
        alt={tractor.name}
        className="absolute bottom-0 left-0 right-0 z-10 w-full object-contain group-hover:scale-[1.04] transition-transform duration-500"
        style={{ filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.4))", height: "85%", padding: "8px 20px 0", objectPosition: "center bottom" }}
        loading="lazy"
      />
      <div
        className="absolute top-3 right-3 z-20 font-display font-bold text-white"
        style={{ background: "#F97316", borderRadius: 4, padding: "4px 10px", fontSize: "0.8rem" }}
      >
        {tractor.hp} HP
      </div>
    </Link>
    <div className="flex flex-col flex-grow" style={{ padding: 24 }}>
      <span className="uppercase font-semibold" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", color: "#F97316" }}>
        {tractor.category}
      </span>
      <Link to={`/trattori/${tractor.id}`}>
        <h3 className="font-display text-lg font-bold mt-1 mb-1 hover:text-secondary transition-colors" style={{ color: "#1a1a1a" }}>{tractor.name}</h3>
      </Link>
      <p className="flex-grow" style={{ color: "#666", fontSize: "0.85rem", lineHeight: 1.6 }}>
        {tractor.shortDescription}
      </p>
      <Link
          to={`/trattori/${tractor.id}`}
          className="mt-auto inline-flex items-center gap-2 font-semibold uppercase group-hover:tracking-wider transition-all duration-300"
          style={{ color: "#F97316", fontSize: "0.75rem", letterSpacing: "0.1em" }}
        >
          Scopri di più <ArrowRight className="h-3.5 w-3.5" />
        </Link>
    </div>
  </div>
);

export default GammaTrattori;
