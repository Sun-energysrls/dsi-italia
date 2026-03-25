import { AnimatedSection } from "@/hooks/useScrollAnimation";

const advantages = [
  {
    number: "01",
    title: "Import Diretto",
    desc: "Importiamo direttamente dalla produzione, eliminando intermediari e garantendo il miglior rapporto qualità-prezzo.",
    icon: "🌏",
  },
  {
    number: "02",
    title: "Personalizzazione Totale",
    desc: "Ogni macchina viene configurata secondo le tue esigenze specifiche: colori, potenza, accessori e allestimenti.",
    icon: "⚙️",
  },
  {
    number: "03",
    title: "Supporto Tecnico",
    desc: "Team di tecnici specializzati per assistenza, manutenzione e formazione sulle macchine consegnate.",
    icon: "🛠️",
  },
  {
    number: "04",
    title: "Consegna Chiavi in Mano",
    desc: "Gestiamo logistica, documentazione doganale e omologazione per una consegna completa e senza pensieri.",
    icon: "🔑",
  },
];

const AdvantagesSection = () => {
  return (
    <section style={{ padding: "100px 0", background: "transparent" }}>
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          {/* Orange accent bar */}
          <div
            className="mx-auto mb-6"
            style={{ width: 40, height: 2, backgroundColor: "#F97316" }}
          />
          <p className="text-secondary font-bold text-xs uppercase tracking-[0.25em] mb-3">
            I NOSTRI VANTAGGI
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-4 uppercase tracking-tight">
            Perché scegliere DSI
          </h2>
          <p style={{ color: "#888", fontSize: "1rem", maxWidth: 540, margin: "0 auto" }}>
            Quattro pilastri che ci rendono il partner ideale per la tua azienda agricola
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {advantages.map((adv, i) => (
            <AnimatedSection key={adv.number} delay={i * 0.1}>
              <div
                className="relative transition-all duration-300 flex flex-col overflow-hidden"
                style={{
                  background: "#FAFAF8",
                  border: "1px solid #E8E4DF",
                  borderRadius: 8,
                  padding: "40px 40px 36px",
                  minHeight: 240,
                  willChange: "transform",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "#F97316";
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 12px 40px rgba(249,115,22,0.12)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "#E8E4DF";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Decorative number */}
                <span
                  className="absolute font-display select-none pointer-events-none"
                  style={{
                    top: -10,
                    right: 16,
                    fontSize: "7rem",
                    fontWeight: 800,
                    color: "rgba(249,115,22,0.06)",
                    lineHeight: 1,
                  }}
                >
                  {adv.number}
                </span>

                {/* Orange accent top-left bar */}
                <div
                  className="absolute top-0 left-0"
                  style={{ width: 4, height: 48, backgroundColor: "#F97316", borderRadius: "0 0 4px 0" }}
                />

                {/* Icon + title row */}
                <div className="flex items-center gap-3 mb-4 relative z-[1]">
                  <span style={{ fontSize: "1.6rem" }}>{adv.icon}</span>
                  <h3
                    className="font-display font-bold uppercase"
                    style={{ color: "#1a1a1a", fontSize: "1rem", letterSpacing: "0.06em" }}
                  >
                    {adv.title}
                  </h3>
                </div>

                <p className="relative z-[1]" style={{ color: "#666", lineHeight: 1.75, fontSize: "0.9rem" }}>
                  {adv.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
