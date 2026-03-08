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
    <section className="py-28 lg:py-36 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
            I NOSTRI VANTAGGI
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-4 uppercase tracking-tight">
            Perché scegliere DSI
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/30 max-w-4xl mx-auto">
          {advantages.map((adv, i) => (
            <AnimatedSection key={adv.number} delay={i * 0.08}>
              <div className="p-10 bg-background hover:bg-card transition-all duration-500">
                <span className="text-secondary font-display font-black text-3xl block mb-5">
                  {adv.number}
                </span>
                <h3 className="font-display text-lg font-bold text-foreground mb-3 uppercase tracking-[0.1em]">
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
