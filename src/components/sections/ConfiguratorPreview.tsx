import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import AnimatedCounter from "@/components/AnimatedCounter";
import tractorGreen from "@/assets/tractor-green.png";

const previewFeatures = ["Colore", "Potenza", "Cambio", "Accessori"];

const ConfiguratorPreview = () => {
  return (
    <section className="section-dark py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <AnimatedSection>
            <p className="text-secondary font-bold text-xs uppercase tracking-[0.25em] mb-3">
              CONFIGURA LA TUA MACCHINA
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-6 uppercase tracking-tight">
              Configura il tuo trattore ideale
            </h2>
            <p className="text-[hsl(120,10%,55%)] text-base leading-relaxed mb-8">
              Il nostro configuratore avanzato ti permette di personalizzare ogni aspetto della tua macchina agricola.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {previewFeatures.map((feat) => (
                <span
                  key={feat}
                  className="px-4 py-2 bg-[hsl(156,32%,14%)] border border-[hsl(156,20%,20%)] text-sm font-medium"
                >
                  {feat}
                </span>
              ))}
            </div>

            <Link
              to="/configuratore"
              className="gradient-accent text-accent-foreground px-10 py-4 rounded-sm text-base font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-elevated"
            >
              Configura il tuo trattore
              <ArrowRight className="h-5 w-5" />
            </Link>
          </AnimatedSection>

          {/* Right: tractor image + stats */}
          <AnimatedSection delay={0.15}>
            <div className="relative">
              <div className="text-center">
                <p className="text-[hsl(120,10%,45%)] text-xs uppercase tracking-[0.2em] mb-4 font-medium">
                  ANTEPRIMA CONFIGURAZIONE
                </p>
                <img
                  src={tractorGreen}
                  alt="Trattore configurabile"
                  className="w-full max-w-lg mx-auto h-auto"
                />
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-[hsl(156,32%,14%)] border border-[hsl(156,20%,20%)]">
                  <div className="text-2xl font-display font-black">
                    <AnimatedCounter end={180} />-<AnimatedCounter end={620} />
                  </div>
                  <p className="text-[hsl(120,10%,45%)] text-xs uppercase tracking-wider mt-1">CV</p>
                </div>
                <div className="text-center p-4 bg-[hsl(156,32%,14%)] border border-[hsl(156,20%,20%)]">
                  <div className="text-2xl font-display font-black">
                    <AnimatedCounter end={4} />
                  </div>
                  <p className="text-[hsl(120,10%,45%)] text-xs uppercase tracking-wider mt-1">Brand</p>
                </div>
                <div className="text-center p-4 bg-[hsl(156,32%,14%)] border border-[hsl(156,20%,20%)]">
                  <div className="text-2xl font-display font-black">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <p className="text-[hsl(120,10%,45%)] text-xs uppercase tracking-wider mt-1">Accessori</p>
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
