import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { tractors } from "@/data/tractors";
import { getTractorPhoto } from "@/data/tractor-images";

const featuredIds = ["tavol-704", "tavol-1204", "tavol-1804", "tavol-2404"];

const FeaturedModels = () => {
  const featured = featuredIds
    .map((id) => tractors.find((t) => t.id === id))
    .filter(Boolean) as typeof tractors;

  return (
    <section style={{ background: "transparent", padding: "100px 0" }}>
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-4 uppercase tracking-tight"
            style={{ color: "#1a1a1a" }}
          >
            MODELLI IN EVIDENZA
          </h2>
          <p style={{ color: "#888", fontSize: "1.1rem" }}>Un trattore per ogni esigenza — dalla compatta al top di gamma</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((t, i) => (
            <AnimatedSection key={t.id} delay={i * 0.1}>
              <div
                className="group flex flex-col transition-all duration-300"
                style={{
                  height: 520,
                  background: "white",
                  borderRadius: 8,
                  overflow: "hidden",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                  border: "1px solid #EDE9E3",
                  willChange: "transform",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-8px)";
                  el.style.boxShadow = "0 24px 48px rgba(0,0,0,0.14)";
                  el.style.borderColor = "#F97316";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.08)";
                  el.style.borderColor = "#EDE9E3";
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: 240, background: "#F9F7F5" }}>
                  <img
                    src={getTractorPhoto(t.id)}
                    alt={t.name}
                    className="w-full h-full object-contain p-3 group-hover:scale-[1.04] transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* HP Badge */}
                  <div
                    className="absolute top-3 right-3 font-display font-bold text-white"
                    style={{
                      background: "#F97316",
                      borderRadius: 4,
                      padding: "4px 10px",
                      fontSize: "0.8rem",
                    }}
                  >
                    {t.hp} HP
                  </div>
                </div>
                {/* Content */}
                <div className="flex flex-col flex-grow" style={{ padding: 20 }}>
                  <span
                    className="uppercase font-semibold"
                    style={{ fontSize: "0.65rem", letterSpacing: "0.18em", color: "#F97316" }}
                  >
                    {t.category}
                  </span>
                  <h3 className="font-display text-lg font-bold mt-1 mb-2" style={{ color: "#1a1a1a" }}>
                    {t.name}
                  </h3>
                  <p className="flex-grow" style={{ color: "#777", fontSize: "0.82rem", lineHeight: 1.6 }}>
                    {t.shortDescription}
                  </p>
                  <Link
                      to={`/trattori/${t.id}`}
                      className="inline-flex items-center gap-1.5 font-semibold uppercase transition-all duration-300 mt-auto pt-3"
                      style={{ color: "#F97316", fontSize: "0.7rem", letterSpacing: "0.1em" }}
                    >
                      Scopri di più <ArrowRight className="h-3 w-3" />
                    </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;
