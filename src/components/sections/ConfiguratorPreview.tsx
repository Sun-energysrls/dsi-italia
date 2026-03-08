import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import AnimatedCounter from "@/components/AnimatedCounter";
import tractorGreen from "@/assets/tractor-green.png";

const previewFeatures = ["Colore", "Potenza", "Cambio", "Accessori"];

const ConfiguratorPreview = () => {
  return (
    <section className="py-28 lg:py-36 bg-card border-y border-border/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: text */}
          <AnimatedSection>
            <p className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
              CONFIGURA LA TUA MACCHINA
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-6 uppercase tracking-tight text-foreground">
              Configura il tuo trattore ideale
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Il nostro configuratore avanzato ti permette di personalizzare ogni aspetto della tua macchina agricola.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {previewFeatures.map((feat) => (
                <span
                  key={feat}
                  className="px-4 py-2 bg-muted border border-border/50 text-[11px] font-medium text-foreground/80 uppercase tracking-[0.15em]"
                >
                  {feat}
                </span>
              ))}
            </div>

            <Link
              to="/configuratore"
              className="border border-secondary text-secondary px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] inline-flex items-center gap-2 hover:bg-secondary hover:text-secondary-foreground transition-all"
            >
              Configura il tuo trattore
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>

          {/* Right: tractor image + stats */}
          <AnimatedSection delay={0.15}>
            <div className="relative">
              <div className="text-center">
                <p className="text-muted-foreground text-[10px] uppercase tracking-[0.3em] mb-6 font-medium">
                  ANTEPRIMA CONFIGURAZIONE
                </p>
                <img
                  src={tractorGreen}
                  alt="Trattore configurabile"
                  className="w-full max-w-lg mx-auto h-auto"
                />
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-px bg-border/30 mt-10">
                <div className="text-center p-5 bg-card">
                  <div className="text-2xl font-display font-black text-foreground">
                    <AnimatedCounter end={180} />-<AnimatedCounter end={620} />
                  </div>
                  <p className="text-muted-foreground text-[10px] uppercase tracking-[0.2em] mt-1">CV</p>
                </div>
                <div className="text-center p-5 bg-card">
                  <div className="text-2xl font-display font-black text-foreground">
                    <AnimatedCounter end={4} />
                  </div>
                  <p className="text-muted-foreground text-[10px] uppercase tracking-[0.2em] mt-1">Brand</p>
                </div>
                <div className="text-center p-5 bg-card">
                  <div className="text-2xl font-display font-black text-foreground">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <p className="text-muted-foreground text-[10px] uppercase tracking-[0.2em] mt-1">Accessori</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ConfiguratorPreview;
