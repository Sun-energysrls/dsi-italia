import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const previewFeatures = ["Colore", "Potenza", "Cambio", "Accessori"];

const ConfiguratorPreview = () => {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "transparent", color: "hsl(40,100%,97%)" }}
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

          {/* Right: Animated configurator visualization */}
          <AnimatedSection delay={0.15}>
            <div className="relative" style={{ minHeight: 420 }}>
              {/* Main card */}
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  padding: "40px 32px",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 32px 64px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                <p
                  className="text-center uppercase font-medium mb-6"
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                  }}
                >
                  ANTEPRIMA CONFIGURAZIONE
                </p>

                {/* Tractor SVG */}
                <div className="flex justify-center mb-8">
                  <svg
                    viewBox="0 0 320 180"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full max-w-xs"
                    style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.3))" }}
                  >
                    {/* Body */}
                    <rect x="60" y="60" width="180" height="70" rx="8" fill="#1a3a2a" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                    {/* Cabin */}
                    <rect x="160" y="25" width="70" height="55" rx="6" fill="#1a3a2a" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    <rect x="165" y="30" width="40" height="35" rx="4" fill="rgba(100,180,255,0.15)" stroke="rgba(100,180,255,0.3)" strokeWidth="0.5" />
                    {/* Hood */}
                    <rect x="60" y="55" width="100" height="25" rx="4" fill="#1B4332" />
                    {/* Exhaust */}
                    <rect x="75" y="42" width="6" height="18" rx="3" fill="rgba(255,255,255,0.15)" />
                    {/* Rear wheel */}
                    <circle cx="200" cy="135" r="38" fill="#222" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <circle cx="200" cy="135" r="28" fill="#333" />
                    <circle cx="200" cy="135" r="12" fill="#555" />
                    <circle cx="200" cy="135" r="5" fill="#F97316" className="configurator-pulse" />
                    {/* Front wheel */}
                    <circle cx="90" cy="140" r="25" fill="#222" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <circle cx="90" cy="140" r="18" fill="#333" />
                    <circle cx="90" cy="140" r="8" fill="#555" />
                    <circle cx="90" cy="140" r="3" fill="#F97316" className="configurator-pulse" />
                    {/* Orange accent stripe */}
                    <rect x="60" y="75" width="180" height="3" rx="1.5" fill="#F97316" opacity="0.8" />
                  </svg>
                </div>

                {/* Floating config cards */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Colore", value: "Verde DSI", dot: "#1B4332" },
                    { label: "Potenza", value: "180 HP", dot: "#F97316" },
                    { label: "Cambio", value: "Shuttle 16+8", dot: null },
                    { label: "Status", value: "Configurato ✓", dot: "#22c55e" },
                  ].map((card, i) => (
                    <div
                      key={card.label}
                      className="configurator-float-card"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: 8,
                        padding: "12px 16px",
                        animationDelay: `${i * 0.8}s`,
                      }}
                    >
                      <span
                        className="block uppercase"
                        style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.55rem", letterSpacing: "0.12em", marginBottom: 4 }}
                      >
                        {card.label}
                      </span>
                      <div className="flex items-center gap-2">
                        {card.dot && (
                          <span
                            className="shrink-0 block"
                            style={{
                              width: 10,
                              height: 10,
                              borderRadius: "50%",
                              backgroundColor: card.dot,
                              ...(card.label === "Colore" ? { animation: "colorCycle 4s ease-in-out infinite" } : {}),
                            }}
                          />
                        )}
                        <span className="text-white font-semibold" style={{ fontSize: "0.8rem" }}>
                          {card.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <style>{`
        .configurator-float-card {
          animation: floatIn 4s ease-in-out infinite;
          opacity: 0;
        }
        .configurator-pulse {
          animation: pulse2 2s ease-in-out infinite;
        }
        @keyframes floatIn {
          0%, 100% { opacity: 0; transform: translateY(8px); }
          15%, 85% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse2 {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes colorCycle {
          0% { background-color: #1B4332; }
          25% { background-color: #F97316; }
          50% { background-color: #1a5fa8; }
          75% { background-color: #8B0000; }
          100% { background-color: #1B4332; }
        }
      `}</style>
    </section>
  );
};

export default ConfiguratorPreview;
