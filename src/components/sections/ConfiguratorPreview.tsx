import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import AnimatedCounter from "@/components/AnimatedCounter";
import tractorGreen from "@/assets/tractor-green.png";

const previewFeatures = ["Colore", "Potenza", "Cambio", "Accessori"];

const ConfiguratorPreview = () => {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden section-fade-top section-fade-bottom-warm"
      style={{ background: "var(--dsi-green-gradient)" }}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <AnimatedSection>
            <p
              className="font-bold uppercase mb-3"
              style={{ color: "#F97316", fontSize: "0.75rem", letterSpacing: "0.25em" }}
            >
              CONFIGURA LA TUA MACCHINA
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-6 uppercase tracking-tight text-white">
              Configura il tuo trattore ideale
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Il nostro configuratore avanzato ti permette di personalizzare ogni aspetto della tua macchina agricola.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {previewFeatures.map((feat) => (
                <span
                  key={feat}
                  className="font-medium transition-all duration-200 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: 4,
                    color: "white",
                    padding: "8px 16px",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#F97316";
                    (e.currentTarget as HTMLElement).style.color = "#F97316";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                >
                  {feat}
                </span>
              ))}
            </div>

            <Link to="/configuratore" className="btn-orange">
              Configura il tuo trattore
              <ArrowRight className="h-5 w-5" />
            </Link>
          </AnimatedSection>

          {/* Right: tractor image + stats */}
          <AnimatedSection delay={0.15}>
            <div className="relative">
              {/* Elegant card */}
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  padding: 40,
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 32px 64px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                <p
                  className="text-center uppercase font-medium mb-4"
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                  }}
                >
                  ANTEPRIMA CONFIGURAZIONE
                </p>
                <img
                  src={tractorGreen}
                  alt="Trattore configurabile"
                  className="w-full max-w-lg mx-auto h-auto"
                  style={{ maxHeight: 380, objectFit: "contain" }}
                />
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { label: "CV", content: <><AnimatedCounter end={180} />-<AnimatedCounter end={620} /></> },
                  { label: "Brand", content: <AnimatedCounter end={3} /> },
                  { label: "Accessori", content: <AnimatedCounter end={50} suffix="+" /> },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 6,
                      padding: "16px 20px",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(249,115,22,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                    }}
                  >
                    <div className="text-white font-display font-black" style={{ fontSize: "1.5rem" }}>
                      {stat.content}
                    </div>
                    <p
                      className="uppercase mt-1"
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.12em",
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ConfiguratorPreview;
