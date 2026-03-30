import { Link } from "react-router-dom";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { tractors } from "@/data/tractors";
import { getTractorPhoto } from "@/data/tractor-images";

const FeaturedModels = () => {
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
    imgMinHeight = 350,
    animation,
    delay = 0,
  }: {
    t: (typeof tractors)[number];
    variant: "featured" | "compact";
    className?: string;
    imgMinHeight?: number;
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
          className={`group relative overflow-hidden ${className}`}
          style={{
            borderRadius: 6,
            boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
            border: "1px solid rgba(237,233,227,0.9)",
            background: "#fff",
            minHeight: imgMinHeight,
          }}
        >
          {/* Tractor background */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
            style={{
              backgroundImage: `url(${getTractorPhoto(t.id)})`,
              minHeight: imgMinHeight,
            }}
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              background:
                "linear-gradient(180deg, transparent 30%, rgba(27,58,45,0.9) 100%)",
              opacity: 0.95,
            }}
          />
          {/* Darken on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: "rgba(0,0,0,0.14)",
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
                color: "#F97316",
              }}
            >
              {category}
            </div>

            <div
              className="font-display font-black"
              style={{
                marginTop: 8,
                fontSize: isFeatured ? "2.5rem" : "1.8rem",
                color: "#ffffff",
                fontWeight: 800,
              }}
            >
              {modelName}
            </div>

            <div
              style={{
                marginTop: 8,
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.8rem",
              }}
            >
              {specs}
            </div>

            <div className="mt-4">
              <Link
                to={`/trattori/${t.id}`}
                className="inline-flex items-center gap-2 uppercase font-semibold"
                style={{
                  color: "#F97316",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                }}
              >
                <span>Scopri di più</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    );
  };

  return (
    <section style={{ background: "transparent", padding: "100px 0" }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <div className="flex items-start justify-between gap-8 flex-wrap">
            <div>
              <div
                className="uppercase font-semibold"
                style={{
                  color: "#F97316",
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
                  color: "#F97316",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
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
            gridAutoRows: 350,
          }}
        >
          {/* Featured (left) */}
          <div className="row-span-1 md:row-span-2">
            <Card
              t={featured}
              variant="featured"
              animation="left"
              delay={0}
              imgMinHeight={350}
            />
          </div>

          {/* Right stacked cards */}
          <div>
            <Card
              t={rightTop}
              variant="compact"
              animation="right"
              delay={0.1}
              imgMinHeight={350}
            />
          </div>
          <div>
            <Card
              t={rightBottom}
              variant="compact"
              animation="right"
              delay={0.2}
              imgMinHeight={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;
