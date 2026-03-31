import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { AnimatedSection, AnimatedLine } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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
  { value: 2, suffix: "", label: "BRAND NEL PORTFOLIO" },
  { value: 100, suffix: "%", label: "IMPORT DIRETTO" },
];

const AmberCard = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);
  return (
    <div
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #d4781c 0%, #e8860c 50%, #c06a10 100%)",
        borderRadius: 12,
        padding: 48,
        boxShadow: "0 32px 64px rgba(0,0,0,0.18)",
        border: "1px solid rgba(255,255,255,0.12)",
        minHeight: 320,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(100px)",
        transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
        willChange: "transform, opacity",
      }}
    >
      {/* Subtle radial highlight */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "60%",
          background: "radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Dot-grid texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
          backgroundSize: "20px 20px",
          pointerEvents: "none",
        }}
      />

      {/* Chinese characters */}
      <div
        className="relative"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "5rem",
          fontWeight: 300,
          color: "rgba(255,255,255,0.95)",
          lineHeight: 1,
          letterSpacing: "0.08em",
          textShadow: "0 4px 24px rgba(0,0,0,0.2)",
          marginBottom: "1.5rem",
        }}
      >
        载新
      </div>

      {/* Divider */}
      <div
        style={{
          width: 48,
          height: 1,
          background: "rgba(255,255,255,0.4)",
          margin: "0 auto 1.25rem",
        }}
      />

      {/* Tagline */}
      <p
        style={{
          color: "rgba(255,255,255,0.8)",
          textTransform: "uppercase",
          letterSpacing: "0.25em",
          fontSize: "0.7rem",
          fontWeight: 600,
          marginBottom: "0.5rem",
        }}
      >
        PORTARE L'INNOVAZIONE
      </p>
      <p
        style={{
          color: "rgba(255,255,255,0.55)",
          fontSize: "0.75rem",
          lineHeight: 1.6,
          maxWidth: 220,
        }}
      >
        Import diretto dalla Cina — tecnologia avanzata per l'agricoltura italiana
      </p>
    </div>
  );
};

const ApproachSection = () => {
  return (
    <section className="py-24 lg:py-32 overflow-hidden" style={{ background: "transparent" }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-6">
          <AnimatedLine className="mb-4" delay={0} />
          <AnimatedSection delay={0.02} from="up" distance={20}>
            <p className="text-secondary font-bold text-xs uppercase tracking-[0.25em] mb-3">
              IL NOSTRO APPROCCIO
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.12} from="up" distance={24}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-4 uppercase tracking-tight">
              DSI importa direttamente dalla produzione.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2} from="up" distance={24}>
            <p className="text-2xl md:text-3xl font-display font-bold text-muted-foreground mb-2">
              Selezioniamo, configuriamo e consegniamo.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={0.1} from="left" distance={26}>
            <p className="text-muted-foreground text-base mb-8" style={{ lineHeight: 1.8 }}>
              Non siamo un semplice rivenditore. Siamo un importatore strutturato con relazioni dirette con i principali produttori mondiali di macchine agricole.
            </p>
            <div className="space-y-4 mb-10">
              {checkpoints.map((item, i) => (
                <AnimatedSection key={item} delay={0.2 + i * 0.07} from="left" distance={18} duration={0.6}>
                  <div
                    className="flex items-center gap-3"
                    style={{ willChange: "transform" }}
                  >
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-foreground text-sm font-medium">{item}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={0.48} from="left" distance={18} duration={0.6}>
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
          </AnimatedSection>

          {/* Amber Japanese premium card — MODIFICA 4 */}
          <AmberCard />
        </div>

        {/* Horizontal stats row — MODIFICA 3 */}
        <div
          style={{
            marginTop: "4rem",
            paddingTop: "3rem",
            borderTop: "1px solid rgba(0,0,0,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          {miniStats.map((stat, i) => (
            <AnimatedSection
              key={stat.label}
              from="up"
              distance={24}
              duration={0.7}
              delay={0.6 + i * 0.1}
              style={{ textAlign: "center", flex: "1 1 140px" }}
            >
              <div
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "3rem",
                  fontWeight: 700,
                  color: "#e8860c",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000} />
              </div>
              <p
                style={{
                  color: "var(--muted-foreground, #888)",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  fontSize: "0.62rem",
                  fontWeight: 600,
                }}
              >
                {stat.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
