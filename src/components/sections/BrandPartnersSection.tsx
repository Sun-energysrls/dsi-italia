import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { brands } from "@/data/brands";

const BrandPartnersSection = () => {
  return (
    <section
      className="relative py-24 lg:py-32"
      style={{ background: "transparent", color: "hsl(40,100%,97%)" }}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-[2]">
        <AnimatedSection className="text-center mb-16">
          <p className="text-secondary font-bold text-xs uppercase tracking-[0.25em] mb-3">
            I NOSTRI PARTNER
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-4 uppercase tracking-tight text-white">
            Brand di Eccellenza
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)" }} className="text-lg max-w-2xl mx-auto">
            Selezioniamo solo i migliori produttori mondiali di macchine agricole.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {brands.map((brand, i) => (
            <AnimatedSection key={brand.id} delay={i * 0.15} className="h-full">
              <div
                className="group flex flex-col justify-between transition-all duration-350 h-full"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 8,
                  padding: 40,
                  minHeight: 320,
                  willChange: "transform",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(255,255,255,0.1)";
                  el.style.borderColor = "rgba(249,115,22,0.4)";
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(255,255,255,0.06)";
                  el.style.borderColor = "rgba(255,255,255,0.12)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <div>
                  {/* Initials badge */}
                  <div
                    className="flex items-center justify-center mb-5"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: 6,
                      padding: "12px 16px",
                      width: "fit-content",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "white",
                    }}
                  >
                    {brand.initials}
                  </div>
                  <h3 className="font-display font-bold mb-1 text-white" style={{ fontSize: "1.5rem" }}>
                    {brand.name}
                  </h3>
                  <span
                    className="block mb-3"
                    style={{
                      color: "#F97316",
                      fontSize: "0.7rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                    }}
                  >
                    {brand.country}
                  </span>
                  <p
                    className="flex-grow"
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      margin: "16px 0",
                    }}
                  >
                    {brand.description}
                  </p>
                </div>
                <Link
                  to="/trattori"
                  className="group/link inline-flex items-center gap-1 transition-all duration-300"
                  style={{
                    color: "#F97316",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                  }}
                >
                  Scopri modelli <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartnersSection;
