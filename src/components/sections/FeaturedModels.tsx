import { Link } from "react-router-dom";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { tractors } from "@/data/tractors";
import { getTractorPhoto } from "@/data/tractor-images";

const FeaturedModels = () => {
  const ROW_HEIGHT_PX = 350;
  const GRID_GAP_REM = 1.5;
  const GRID_GAP = `${GRID_GAP_REM}rem`;
  const COMPACT_CARD_HEIGHT = `${ROW_HEIGHT_PX}px`;
  const FEATURED_CARD_HEIGHT = `calc(${ROW_HEIGHT_PX}px * 2 + ${GRID_GAP_REM}rem)`;

  const featuredId = "tavol-2404";
  const rightTopId = "tavol-1204";
  const rightBottomId = "tavol-704";

  const featured = tractors.find((t) => t.id === featuredId);
  const rightTop = tractors.find((t) => t.id === rightTopId);
  const rightBottom = tractors.find((t) => t.id === rightBottomId);

  if (!featured || !rightTop || !rightBottom) return null;

  const specsById: Record<string, string> = {
    "tavol-2404": "240 CV • 6 Cilindri Turbo • Cabina Premium",
    "tavol-1204": "120 CV • 6 Cilindri • Cabina Condizionata",
    "tavol-704": "70 CV • 4 Cilindri • Cabina Condizionata",
  };

  const Card = ({
    t,
    variant,
    className = "",
    animation,
    delay = 0,
  }: {
    t: (typeof tractors)[number];
    variant: "featured" | "compact";
    className?: string;
    animation: "left" | "right";
    delay?: number;
  }) => {
    const isFeatured = variant === "featured";
    const category = (t.category || "").toUpperCase();
    const modelName = t.name || "";
    const specs = specsById[t.id] || `${t.hp} CV • ${t.engine || ""} • Cabina`;

    return (
      <AnimatedSection
        delay={delay}
        from={animation}
        distance={70}
        duration={0.85}
      >
        <div
          data-tractor-card="true"
          className={`tractor-card group relative overflow-hidden ${className}`}
          style={{
            borderRadius: 8,
            boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "#fff",
            height: "100%",
            minHeight: isFeatured ? FEATURED_CARD_HEIGHT : COMPACT_CARD_HEIGHT,
            transformStyle: "preserve-3d",
          }}
          onMouseMove={(e) => {
            const card = e.currentTarget;
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            card.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
          }}
          onMouseEnter={(e) => {
            const card = e.currentTarget;
            card.style.transition = "none";
          }}
          onMouseLeave={(e) => {
            const card = e.currentTarget;
            card.style.transform = "";
            card.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
          }}
          aria-label={modelName}
        >
          {/* Tractor background (cinematic filters) */}
          <img
            src={getTractorPhoto(t.id)}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: "brightness(0.55) contrast(1.2) saturate(1.1)",
              transition: "filter 0.8s",
            }}
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, transparent 25%, rgba(27,58,45,0.92) 100%)",
            }}
          />
          {/* Hover overlay (slightly darker for readability) */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              background: "rgba(27,58,45,0.95)",
              transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />

          {/* Inner glow at the bottom (premium depth) */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none opacity-35 group-hover:opacity-55 transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(249,115,22,0.25) 0%, rgba(249,115,22,0.0) 70%)",
              filter: "blur(10px)",
            }}
          />

          {/* Bottom content */}
          <div
            className="absolute left-0 right-0 bottom-0 p-8"
            style={{
              paddingBottom: isFeatured ? 34 : 26,
            }}
          >
            <div
              className="uppercase font-semibold"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                color: "#e8860c",
              }}
            >
              {category}
            </div>

            <div
              className="font-display font-bold text-white"
              style={{
                marginTop: 8,
                fontSize: isFeatured ? "2.5rem" : "1.8rem",
              }}
            >
              {modelName}
            </div>

            <div
              style={{
                marginTop: 8,
                color: "rgba(255,255,255,0.65)",
                fontSize: "0.8rem",
              }}
            >
              {specs}
            </div>

            <div className="mt-4">
              <Link
                to={`/trattori/${t.id}`}
                className="group inline-flex items-center uppercase font-semibold"
                style={{
                  color: "#e8860c",
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                }}
              >
                <span>Scopri di più</span>
                <span
                  aria-hidden="true"
                  className="ml-0 transition-all duration-300 group-hover:ml-2"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    );
  };

  return (
    <section style={{ background: "transparent", padding: "100px 0" }}>
      <style>{`
        /* Cinematic hover for tractor images (no scale/zoom) */
        .tractor-card img { filter: brightness(0.55) contrast(1.2) saturate(1.1); transition: filter 0.8s; }
        .tractor-card:hover img { filter: brightness(0.65) contrast(1.2) saturate(1.1); }
      `}</style>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <div className="flex items-start justify-between gap-8 flex-wrap">
            <div>
              <div
                className="uppercase font-semibold"
                style={{
                  color: "#e8860c",
                  fontSize: "0.65rem",
                  letterSpacing: "0.3em",
                  marginBottom: 10,
                }}
              >
                La Nostra Gamma
              </div>
              <h2 className="font-display font-black" style={{ color: "#1a1a1a", fontSize: "3rem", lineHeight: 1.05 }}>
                Trattori <em style={{ fontStyle: "italic" }}>potenti</em>, pronti per ogni sfida
              </h2>
            </div>

            <div className="self-center">
              <Link
                to="/trattori"
                className="inline-flex items-center gap-2 uppercase font-semibold"
                style={{
                  color: "#e8860c",
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                }}
              >
                <span>Catalogo Completo</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="grid gap-6 grid-cols-1 md:grid-cols-[1.2fr_0.8fr]"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gridTemplateRows: "1fr 1fr",
            gap: GRID_GAP,
            height: `calc(${ROW_HEIGHT_PX}px * 2 + ${GRID_GAP})`,
          }}
        >
          {/* Featured (left) */}
          <div className="row-span-1 md:row-span-2">
            <Card
              t={featured}
              variant="featured"
              animation="left"
              delay={0}
            />
          </div>

          {/* Right stacked cards */}
          <div>
            <Card
              t={rightTop}
              variant="compact"
              animation="right"
              delay={0.1}
            />
          </div>
          <div>
            <Card
              t={rightBottom}
              variant="compact"
              animation="right"
              delay={0.2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;
