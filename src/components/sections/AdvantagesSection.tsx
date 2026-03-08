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
    <section className="py-28 lg:py-40 bg-background">
      <div className="px-8 lg:px-16 max-w-[1600px] mx-auto">
        <AnimatedSection className="mb-20">
          <p className="text-secondary font-bold text-[10px] uppercase tracking-[0.4em] mb-4">
            I NOSTRI VANTAGGI
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-foreground uppercase tracking-tight leading-[0.95]">
            Perché scegliere DSI
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {advantages.map((adv, i) => (
            <AnimatedSection key={adv.number} delay={i * 0.08}>
              <div className="p-8 lg:p-10 bg-background hover:bg-muted/30 transition-all duration-500 h-full group">
                <span className="text-secondary font-display font-black text-4xl lg:text-5xl block mb-6 group-hover:translate-x-1 transition-transform">
                  {adv.number}
                </span>
                <h3 className="font-display text-lg font-bold text-foreground mb-4 uppercase tracking-wide">
                  {adv.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
