import { AnimatedSection } from "@/hooks/useScrollAnimation";

const advantages = [
  {
    number: "01",
    title: "Import Diretto",
    desc: "Importiamo direttamente dalla produzione, eliminando intermediari e garantendo il miglior rapporto qualità-prezzo.",
  },
  {
    number: "02",
    title: "Personalizzazione Totale",
    desc: "Ogni macchina viene configurata secondo le tue esigenze specifiche: colori, potenza, accessori e allestimenti.",
  },
  {
    number: "03",
    title: "Supporto Tecnico",
    desc: "Team di tecnici specializzati per assistenza, manutenzione e formazione sulle macchine consegnate.",
  },
  {
    number: "04",
    title: "Accessori e Rimorchi",
    desc: "Fornitura completa di accessori originali e rimorchi compatibili per ogni modello di trattore.",
  },
];

const AdvantagesSection = () => {
  return (
    <section style={{ padding: "100px 0", background: "transparent" }}>
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          {/* Orange line above title */}
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
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {advantages.map((adv, i) => (
            <AnimatedSection key={adv.number} delay={i * 0.1}>
              <div
                className="transition-all duration-300 flex flex-col"
                style={{
                  background: "#FAFAF8",
                  border: "1px solid #E8E4DF",
                  borderRadius: 8,
                  padding: 40,
                  minHeight: 220,
                  willChange: "transform",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "#F97316";
                  el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "#E8E4DF";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                <span
                  className="font-display block mb-4"
                  style={{ color: "#F97316", fontSize: "2.5rem", fontWeight: 300 }}
                >
                  {adv.number}
                </span>
                <h3
                  className="font-display font-bold uppercase mb-3"
                  style={{ color: "#1a1a1a", fontSize: "1rem", letterSpacing: "0.06em" }}
                >
                  {adv.title}
                </h3>
                <p style={{ color: "#666", lineHeight: 1.75, fontSize: "0.9rem" }}>
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
