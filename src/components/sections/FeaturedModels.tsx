import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { tractors } from "@/data/tractors";
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

const FeaturedModels = () => {
  const featured = [
    tractors.find((t) => t.id === "sd2604"),
    tractors.find((t) => t.id === "sd1604"),
    tractors.find((t) => t.id === "sd904"),
    tractors.find((t) => t.id === "sd504g"),
  ].filter(Boolean) as typeof tractors;

  return (
    <section style={{ background: "#F5F2EE", padding: "100px 0" }}>
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-4 uppercase tracking-tight"
            style={{ color: "#1a1a1a" }}
          >
            MODELLI IN EVIDENZA
          </h2>
          <p style={{ color: "#888", fontSize: "1.1rem" }}>Un trattore per ogni esigenza</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((t, i) => (
            <AnimatedSection key={t.id} delay={i * 0.1}>
              <Link
                to={`/trattori/${t.id}`}
                className="group flex flex-col transition-all duration-350"
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
                <div
                  className="overflow-hidden"
                  style={{ height: 260, background: "#F9F7F5" }}
                >
                  <img
                    src={imageMap[t.image]}
                    alt={t.name}
                    className="w-full h-full object-contain p-5 group-hover:scale-[1.04] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                {/* Content */}
                <div
                  className="flex flex-col flex-grow"
                  style={{ padding: 24 }}
                >
                  <span
                    className="uppercase font-semibold"
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.18em",
                      color: "#F97316",
                    }}
                  >
                    {t.category}
                  </span>
                  <div className="flex items-center justify-between mt-1 mb-1">
                    <h3 className="font-display text-lg font-bold" style={{ color: "#1a1a1a" }}>
                      {t.name}
                    </h3>
                    <span className="font-display" style={{ fontSize: "1.8rem", color: "#F97316", fontWeight: 300, lineHeight: 1 }}>
                      {t.hp}
                    </span>
                  </div>
                  <p
                    className="flex-grow"
                    style={{ color: "#777", fontSize: "0.85rem", lineHeight: 1.6 }}
                  >
                    {t.shortDescription}
                  </p>
                  <span
                    className="mt-auto inline-flex items-center gap-2 font-semibold uppercase group-hover:tracking-wider transition-all duration-300"
                    style={{
                      color: "#F97316",
                      fontSize: "0.75rem",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Scopri di più
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;
