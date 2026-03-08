import { AnimatedSection } from "@/hooks/useScrollAnimation";

const advantages = [
  { number: "01", title: "Import Diretto", desc: "Importiamo direttamente dalla produzione, eliminando intermediari e garantendo il miglior rapporto qualità-prezzo." },
  { number: "02", title: "Personalizzazione Totale", desc: "Ogni macchina viene configurata secondo le tue esigenze specifiche: colori, potenza, accessori e allestimenti." },
  { number: "03", title: "Supporto Tecnico", desc: "Team di tecnici specializzati per assistenza, manutenzione e formazione sulle macchine consegnate." },
  { number: "04", title: "Accessori e Rimorchi", desc: "Fornitura completa di accessori originali e rimorchi compatibili per ogni modello di trattore." },
];

const AdvantagesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-secondary font-bold text-xs uppercase tracking-[0.25em] mb-3">
            I NOSTRI VANTAGGI
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-4 uppercase tracking-tight">
            Perché scegliere DSI
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, i) => (
            <AnimatedSection key={adv.number} delay={i * 0.08}>
              <div className="p-8 bg-muted/30 border border-border hover:border-secondary/30 transition-all duration-300">
                <span className="text-secondary font-display font-black text-3xl block mb-4">
                  {adv.number}
                </span>
                <h3 className="font-display text-lg font-bold text-foreground mb-3 uppercase tracking-wide">
                  {adv.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{adv.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
