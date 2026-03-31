import { Link } from "react-router-dom";
import { ArrowRight, Lock } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { brands } from "@/data/brands";

const comingSoonBrands = [
  {
    name: "Zoomlion",
    initials: "ZL",
    country: "Cina",
    tagline: "Smart Agriculture Leader",
    description: "Colosso globale fondato nel 1992. Pioniere nell'agricoltura intelligente con tecnologia AI e 5G.",
    color: "#1a5fa8",
  },
  {
    name: "Nuovi Modelli in Arrivo",
    initials: "+",
    country: "Cina",
    tagline: "Direttamente dalla Produzione",
    description: "DSI amplia continuamente il proprio portfolio selezionando i migliori produttori cinesi. Nuovi trattori ad alta efficienza saranno disponibili nei prossimi mesi.",
    color: "#556b5a",
  },
];

const BrandPartnersSection = () => {
  return (
    <section
      className="relative py-24 lg:py-32"
      style={{ background: "transparent", color: "hsl(40,100%,97%)" }}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-[2]">
        <div className="text-center mb-16">
          <AnimatedSection from="left" distance={20} duration={0.7} delay={0.05}>
            <p className="text-secondary font-bold text-xs uppercase tracking-[0.25em] mb-3">
              I NOSTRI PARTNER
            </p>
          </AnimatedSection>
          <AnimatedSection from="up" distance={40} duration={0.9} delay={0}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-4 uppercase tracking-tight text-white">
              Brand di Eccellenza
            </h2>
          </AnimatedSection>
          <AnimatedSection from="none" duration={0.6} delay={0.2}>
            <p style={{ color: "rgba(255,255,255,0.55)" }} className="text-lg max-w-2xl mx-auto">
              I nostri brand partner selezionati tra i migliori produttori mondiali.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {/* Active Tavol card */}
          {brands.map((brand, i) => (
            <AnimatedSection key={brand.id} delay={i * 0.12} duration={0.7} className="h-full" withScale>
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

          {/* Coming Soon locked cards */}
          {comingSoonBrands.map((brand, i) => (
            <AnimatedSection key={brand.name} delay={(brands.length + i) * 0.15} className="h-full">
              <div
                className="relative flex flex-col justify-between h-full overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 8,
                  padding: 40,
                  minHeight: 320,
                }}
              >
                {/* Subtle overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "rgba(0,0,0,0.15)" }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="flex items-center justify-center"
                      style={{
                        background: brand.color,
                        borderRadius: 6,
                        padding: "12px 16px",
                        width: "fit-content",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "white",
                        opacity: 0.7,
                      }}
                    >
                      {brand.initials}
                    </div>
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "rgba(249,115,22,0.1)",
                      }}
                    >
                      <Lock className="h-4 w-4" style={{ color: "#F97316" }} />
                    </div>
                  </div>
                  <h3 className="font-display font-bold mb-1" style={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.6)" }}>
                    {brand.name}
                  </h3>
                  <span
                    className="block mb-1"
                    style={{
                      color: "rgba(249,115,22,0.6)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                    }}
                  >
                    {brand.country}
                  </span>
                  <p
                    className="italic mb-3"
                    style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}
                  >
                    {brand.tagline}
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontSize: "0.85rem",
                      lineHeight: 1.7,
                      margin: "16px 0",
                    }}
                  >
                    {brand.description}
                  </p>
                </div>
                <div className="relative z-10">
                  <span
                    className="inline-block uppercase font-semibold"
                    style={{
                      background: "rgba(249,115,22,0.15)",
                      color: "#F97316",
                      padding: "6px 16px",
                      borderRadius: 4,
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                    }}
                  >
                    In Arrivo
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartnersSection;
