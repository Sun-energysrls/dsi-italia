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
    <section className="py-28 lg:py-40 bg-background overflow-hidden">
      <div className="px-8 lg:px-16 max-w-[1600px] mx-auto">
        <AnimatedSection className="mb-8">
          <p className="text-secondary font-bold text-[10px] uppercase tracking-[0.4em] mb-4">
            IL NOSTRO APPROCCIO
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-foreground leading-[0.95] uppercase tracking-tight max-w-3xl">
            DSI importa direttamente dalla produzione.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mt-16">
          <AnimatedSection delay={0.1} className="lg:col-span-5">
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-10">
              Non siamo un semplice rivenditore. Siamo un importatore strutturato con relazioni dirette con i principali produttori mondiali di macchine agricole.
            </p>
            <div className="space-y-5 mb-12">
              {checkpoints.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <CheckCircle className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/trattori"
              className="inline-flex items-center gap-3 text-secondary font-bold text-[11px] uppercase tracking-[0.3em] hover:opacity-80 transition-opacity group"
            >
              Scopri i nostri brand
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:col-span-7">
            <div className="relative bg-muted/20 border border-border p-12 lg:p-16">
              {/* Watermark logo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
                <img src={logoDark} alt="" className="w-56 h-auto" />
              </div>

              <div className="relative grid grid-cols-2 gap-10 lg:gap-14">
                {miniStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-4xl lg:text-5xl font-display font-black text-foreground mb-2">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-muted-foreground text-[10px] uppercase tracking-[0.25em] font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <span className="text-secondary font-bold text-[10px] uppercase tracking-[0.35em]">
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
