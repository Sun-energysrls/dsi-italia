import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import AnimatedCounter from "@/components/AnimatedCounter";
import tractorGreen from "@/assets/tractor-green.png";

const previewFeatures = ["Colore", "Potenza", "Cambio", "Accessori"];

const ConfiguratorPreview = () => {
  return (
    <section className="section-dark overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left: text */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-20 lg:py-28">
          <AnimatedSection>
            <p className="text-secondary font-bold text-[10px] uppercase tracking-[0.4em] mb-4">
              CONFIGURA LA TUA MACCHINA
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black leading-[0.95] uppercase tracking-tight mb-8">
              Configura il tuo
              <br />
              trattore ideale
            </h2>
            <p className="text-[hsl(120,10%,50%)] text-base lg:text-lg leading-relaxed mb-10 max-w-lg">
              Il nostro configuratore avanzato ti permette di personalizzare ogni aspetto della tua macchina agricola.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              {previewFeatures.map((feat) => (
                <span
                  key={feat}
                  className="px-5 py-2.5 border border-[hsl(156,20%,20%)] text-[10px] font-bold uppercase tracking-[0.25em] text-primary-foreground/70"
                >
                  {feat}
                </span>
              ))}
            </div>

            <Link
              to="/configuratore"
              className="gradient-accent text-accent-foreground px-10 py-4 text-[11px] font-bold uppercase tracking-[0.25em] inline-flex items-center gap-3 hover:opacity-90 transition-opacity shadow-elevated w-fit"
            >
              Configura il tuo trattore
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>

        {/* Right: tractor image + stats */}
        <div className="flex flex-col justify-center items-center px-8 lg:px-16 py-20 lg:py-28 bg-[hsl(156,32%,8%)]">
          <AnimatedSection delay={0.15}>
            <p className="text-[hsl(120,10%,40%)] text-[9px] uppercase tracking-[0.4em] mb-6 font-bold text-center">
              ANTEPRIMA CONFIGURAZIONE
            </p>
            <img
              src={tractorGreen}
              alt="Trattore configurabile"
              className="w-full max-w-xl mx-auto h-auto mb-12"
            />

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-px bg-[hsl(156,20%,14%)]">
              <div className="text-center p-6 bg-[hsl(156,32%,8%)]">
                <div className="text-2xl lg:text-3xl font-display font-black">
                  <AnimatedCounter end={180} />-<AnimatedCounter end={620} />
                </div>
                <p className="text-[hsl(120,10%,40%)] text-[9px] uppercase tracking-[0.3em] mt-2 font-bold">CV</p>
              </div>
              <div className="text-center p-6 bg-[hsl(156,32%,8%)]">
                <div className="text-2xl lg:text-3xl font-display font-black">
                  <AnimatedCounter end={4} />
                </div>
                <p className="text-[hsl(120,10%,40%)] text-[9px] uppercase tracking-[0.3em] mt-2 font-bold">Brand</p>
              </div>
              <div className="text-center p-6 bg-[hsl(156,32%,8%)]">
                <div className="text-2xl lg:text-3xl font-display font-black">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <p className="text-[hsl(120,10%,40%)] text-[9px] uppercase tracking-[0.3em] mt-2 font-bold">Accessori</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ConfiguratorPreview;
