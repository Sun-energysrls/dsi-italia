import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import dsiLogo from "@/assets/dsi-logo-white.png";
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
  { value: 3, suffix: "", label: "BRAND PARTNER" },
  { value: 100, suffix: "%", label: "IMPORT DIRETTO" },
];

const ApproachSection = () => {
  return (
    <section className="py-24 lg:py-32 overflow-hidden" style={{ background: "transparent" }}>
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
            <p className="text-muted-foreground text-base mb-8" style={{ lineHeight: 1.8 }}>
              Non siamo un semplice rivenditore. Siamo un importatore strutturato con relazioni dirette con i principali produttori mondiali di macchine agricole.
            </p>
            <div className="space-y-4 mb-10">
              {checkpoints.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                  style={{ willChange: "transform" }}
                >
                  <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/trattori"
              className="group inline-flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-widest"
            >
              <span className="relative">
                Scopri i nostri brand
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div
              className="relative overflow-hidden group transition-all duration-400 hover:-translate-y-1"
              style={{
                background: "var(--dsi-green-gradient)",
                borderRadius: 12,
                padding: 48,
                boxShadow: "0 32px 64px rgba(0,0,0,0.15)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* DSI watermark */}
              <img
                src={dsiLogo}
                alt=""
                className="absolute pointer-events-none select-none"
                style={{
                  bottom: 20,
                  right: 20,
                  width: 180,
                  opacity: 0.06,
                }}
              />

              <div className="relative grid grid-cols-2 gap-8">
                {miniStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-display font-black text-white mb-1">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p
                      className="uppercase font-medium"
                      style={{
                        fontSize: "0.7rem",
                        letterSpacing: "0.15em",
                        color: "#F97316",
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative mt-8 pt-6 text-center" style={{ borderTop: "1px solid #F97316" }}>
                <span
                  className="font-bold uppercase"
                  style={{
                    color: "#F97316",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                  }}
                >
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
