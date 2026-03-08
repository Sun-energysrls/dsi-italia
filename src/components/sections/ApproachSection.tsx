import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import logoDark from "@/assets/logo-dark.png";
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
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="mb-6">
          <p className="text-secondary font-bold text-xs uppercase tracking-[0.25em] mb-3">
            IL NOSTRO APPROCCIO
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-4 uppercase tracking-tight">
            DSI importa direttamente dalla produzione.
          </h2>
          <p className="text-2xl md:text-3xl font-display font-bold text-muted-foreground mb-2">
            Selezioniamo, configuriamo e consegniamo.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={0.1}>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Non siamo un semplice rivenditore. Siamo un importatore strutturato con relazioni dirette con i principali produttori mondiali di macchine agricole.
            </p>
            <div className="space-y-4 mb-10">
              {checkpoints.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/trattori"
              className="inline-flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-widest hover:opacity-80 transition-opacity"
            >
              Scopri i nostri brand <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative bg-muted/30 border border-border p-10 lg:p-14">
              {/* Watermark logo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04]">
                <img src={logoDark} alt="" className="w-48 h-auto" />
              </div>

              <div className="relative grid grid-cols-2 gap-8">
                {miniStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-display font-black text-foreground mb-1">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-muted-foreground text-xs uppercase tracking-[0.15em] font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border text-center">
                <span className="text-secondary font-bold text-xs uppercase tracking-[0.25em]">
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
