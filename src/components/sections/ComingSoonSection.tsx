import { Lock } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import tractorLarge from "@/assets/tractor-large.jpg";

const comingSoonBrands = [
  {
    name: "Zoomlion",
    country: "Cina",
    initials: "ZL",
    tagline: "Smart Agriculture Leader",
    description:
      "Colosso globale fondato nel 1992 a Changsha. Pioniere nell'agricoltura intelligente con integrazione di AI e tecnologia 5G nelle macchine agricole. In arrivo una gamma completa di trattori high-tech.",
    eta: "Prossimamente",
    color: "#1a5fa8",
  },
  {
    name: "Nuovi Modelli in Arrivo",
    country: "Cina",
    initials: "+",
    tagline: "Direttamente dalla Produzione",
    description:
      "DSI amplia continuamente il proprio portfolio selezionando i migliori produttori cinesi. Nuovi trattori ad alta efficienza e tecnologia avanzata saranno disponibili nei prossimi mesi.",
    eta: "In Arrivo",
    color: "#556b5a",
  },
];

const ComingSoonSection = () => {
  return (
    <section
      className="relative"
      style={{
        background: "transparent",
        padding: "100px 0",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lock className="h-5 w-5" style={{ color: "#F97316" }} />
            <span
              className="uppercase font-bold"
              style={{
                color: "#F97316",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
              }}
            >
              Prossimamente
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-display font-normal uppercase tracking-tight mb-4"
            style={{ color: "white" }}
          >
            In Arrivo
          </h2>
          <p
            className="mx-auto"
            style={{ color: "rgba(255,255,255,0.65)", maxWidth: 560, fontSize: "1rem" }}
          >
            Nuovi brand partner e modelli esclusivi in fase di importazione.
            Seguici per essere il primo a saperlo.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {comingSoonBrands.map((brand, i) => (
            <AnimatedSection key={brand.name} delay={i * 0.12} duration={0.7} withScale>
              <div
                className="relative overflow-hidden transition-all duration-300"
                style={{
                  borderRadius: 8,
                  border: "1px solid #EDE9E3",
                  minHeight: 380,
                  background: "white",
                }}
              >
                {/* Blurred image background */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${tractorLarge})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "grayscale(100%) opacity(0.08)",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col h-full" style={{ minHeight: 380 }}>
                  {/* Top: brand badge + lock */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      {/* Brand initials circle */}
                      <div
                        className="flex items-center justify-center shrink-0"
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: "50%",
                          background: brand.color,
                          color: "white",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                        }}
                      >
                        {brand.initials}
                      </div>
                      <div>
                        <span
                          className="block font-display font-bold"
                          style={{ color: "#1a1a1a", fontSize: "1.1rem" }}
                        >
                          {brand.name}
                        </span>
                        <span
                          style={{
                            color: "#999",
                            fontSize: "0.7rem",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                          }}
                        >
                          {brand.country}
                        </span>
                      </div>
                    </div>

                    {/* Lock icon */}
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

                  {/* Tagline */}
                  <p
                    className="font-semibold italic mb-3"
                    style={{ color: brand.color, fontSize: "0.85rem" }}
                  >
                    {brand.tagline}
                  </p>

                  {/* Description */}
                  <p
                    className="flex-grow"
                    style={{
                      color: "#666",
                      fontSize: "0.88rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {brand.description}
                  </p>

                  {/* ETA badge */}
                  <div className="mt-6">
                    <span
                      className="inline-block uppercase font-semibold"
                      style={{
                        background: "rgba(249,115,22,0.08)",
                        color: "#F97316",
                        padding: "6px 16px",
                        borderRadius: 4,
                        fontSize: "0.7rem",
                        letterSpacing: "0.12em",
                      }}
                    >
                      {brand.eta}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
