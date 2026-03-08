import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import AnimatedCounter from "@/components/AnimatedCounter";

const checkpoints = [
  "Selezione rigorosa dei migliori brand mondiali",
  "Configurazione personalizzata su richiesta",
  "Logistica integrata e consegna puntuale",
  "Supporto post-vendita dedicato",
];

const miniStats = [
  { value: 15, suffix: "+", label: "ANNI DI ESPERIENZA" },
  { value: 500, suffix: "+", label: "MACCHINE CONSEGNATE" },
  { value: 4, suffix: "", label: "BRAND PARTNER" },
  { value: 100, suffix: "%", label: "IMPORT DIRETTO" },
];

const ApproachSection = () => {
  return (
    <section className="py-28 lg:py-36 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="mb-6">
          <p className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
            IL NOSTRO APPROCCIO
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-4 uppercase tracking-tight">
            DSI importa direttamente dalla produzione.
          </h2>
          <p className="text-xl md:text-2xl font-display font-bold text-muted-foreground mb-2">
            Selezioniamo, configuriamo e consegniamo.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection delay={0.1}>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Non siamo un semplice rivenditore. Siamo un importatore strutturato con relazioni dirette con i principali produttori mondiali di macchine agricole.
            </p>
            <div className="space-y-4 mb-10">
              {checkpoints.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                  <span className="text-foreground/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/trattori"
              className="inline-flex items-center gap-2 text-secondary font-bold text-[11px] uppercase tracking-[0.2em] hover:opacity-80 transition-opacity"
            >
              Scopri i nostri brand <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative bg-card border border-border/50 p-10 lg:p-14">
              <div className="grid grid-cols-2 gap-8">
                {miniStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-display font-black text-foreground mb-1">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-muted-foreground text-[10px] uppercase tracking-[0.2em] font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border/30 text-center">
                <span className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em]">
                  100% IMPORT DIRETTO
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
