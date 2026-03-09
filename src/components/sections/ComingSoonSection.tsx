import { useState } from "react";
import { Lock, Check } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import tractorLarge from "@/assets/tractor-large.jpg";
import tractorMedium from "@/assets/tractor-medium.jpg";
import tractorCompact from "@/assets/tractor-compact.jpg";

const comingSoonModels = [
  {
    category: "Alta Potenza",
    name: "SD 3204 Pro",
    eta: "Primavera 2025",
    image: tractorLarge,
  },
  {
    category: "Media Potenza",
    name: "NH Compact 120",
    eta: "Estate 2025",
    image: tractorMedium,
  },
  {
    category: "Compatti / Serre",
    name: "Fendt 200 Vario",
    eta: "Autunno 2025",
    image: tractorCompact,
  },
];

const ComingSoonCard = ({
  model,
}: {
  model: (typeof comingSoonModels)[0];
}) => {
  const [expanded, setExpanded] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = () => {
    setExpanded(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setExpanded(false);
    }
  };

  return (
    <div
      className="flex flex-col overflow-hidden transition-all duration-300"
      style={{
        background: "white",
        borderRadius: 8,
        border: "1px solid #EDE9E3",
        height: 420,
      }}
    >
      {/* Image area */}
      <div className="relative" style={{ height: 240, overflow: "hidden" }}>
        <img
          src={model.image}
          alt={model.name}
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(100%) opacity(0.5)" }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.45)" }}
        >
          <Lock className="text-white" style={{ width: 40, height: 40 }} />
        </div>
        {/* COMING SOON badge */}
        <span
          className="absolute uppercase"
          style={{
            top: 0,
            right: 0,
            background: "#F97316",
            color: "white",
            fontSize: "0.6rem",
            letterSpacing: "0.12em",
            padding: "5px 10px",
            borderRadius: "0 0 0 6px",
            fontWeight: 700,
          }}
        >
          Coming Soon
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow" style={{ padding: 24 }}>
        <span style={{ color: "#aaa", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.4 }}>
          {model.category}
        </span>
        <h3 className="font-display" style={{ color: "#999", fontSize: "1rem", fontWeight: 600, fontStyle: "italic", margin: "4px 0" }}>
          {model.name}
        </h3>
        <p style={{ color: "#bbb", fontSize: "0.8rem", marginBottom: 16 }}>
          Disponibilità prevista: {model.eta}
        </p>

        {submitted ? (
          <div className="flex items-center gap-2 mt-auto" style={{ color: "#22c55e", fontSize: "0.85rem", fontWeight: 600 }}>
            <Check className="h-4 w-4" />
            Ti avviseremo!
          </div>
        ) : expanded ? (
          <form onSubmit={handleSubmit} className="flex gap-2 mt-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="La tua email"
              required
              className="flex-1 text-sm px-3 py-2 rounded-[4px]"
              style={{
                border: "1.5px solid #EDE9E3",
                fontSize: "0.8rem",
                outline: "none",
              }}
              autoFocus
            />
            <button
              type="submit"
              className="uppercase font-semibold"
              style={{
                background: "#F97316",
                color: "white",
                borderRadius: 4,
                padding: "8px 14px",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                border: "none",
                cursor: "pointer",
              }}
            >
              Registrati
            </button>
          </form>
        ) : (
          <button
            onClick={handleNotify}
            className="mt-auto w-full text-center uppercase font-semibold transition-all duration-250"
            style={{
              border: "1.5px solid #F97316",
              color: "#F97316",
              borderRadius: 4,
              padding: "10px 20px",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              background: "transparent",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#F97316";
              (e.currentTarget as HTMLElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#F97316";
            }}
          >
            Avvisami →
          </button>
        )}
      </div>
    </div>
  );
};

const ComingSoonSection = () => {
  return (
    <section
      className="relative"
      style={{
        background: "linear-gradient(160deg, #F5F2EE 0%, #EDE8E0 100%)",
        padding: "100px 0",
      }}
    >
      {/* Orange line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F97316]" />

      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span
            className="inline-block mb-4"
            style={{
              background: "rgba(249,115,22,0.1)",
              color: "#F97316",
              borderRadius: 2,
              padding: "6px 16px",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            ● PROSSIMAMENTE
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase tracking-tight mb-4"
            style={{ color: "#1a1a1a" }}
          >
            IN ARRIVO
          </h2>
          <p
            className="mx-auto"
            style={{ color: "#888", maxWidth: 500, fontSize: "1rem" }}
          >
            Nuovi modelli in fase di importazione. Registrati per essere il primo ad essere avvisato.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {comingSoonModels.map((model, i) => (
            <AnimatedSection key={model.name} delay={i * 0.15}>
              <ComingSoonCard model={model} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
