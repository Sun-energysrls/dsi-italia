import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import AnimatedCounter from "@/components/AnimatedCounter";
import tractorGreen from "@/assets/tractor-green.png";

const previewFeatures = ["Colore", "Potenza", "Cambio", "Accessori"];

const ConfiguratorPreview = () => {
  return (
    <section className="py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: "#1B4332" }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="text-secondary font-bold text-xs uppercase tracking-[0.25em] mb-3">
              CONFIGURA LA TUA MACCHINA
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white mb-6 uppercase tracking-tight">
              Configura il tuo trattore ideale
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              Il nostro configuratore avanzato ti permette di personalizzare ogni aspetto della tua macchina agricola.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {previewFeatures.map((feat) => (
                <span
                  key={feat}
                  className="px-4 py-2 border text-white text-sm font-medium"
                  style={{ backgroundColor: "hsl(154, 25%, 20%)", borderColor: "hsl(154, 25%, 28%)" }}
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

          <AnimatedSection delay={0.15}>
            <div className="relative">
              <div className="text-center">
                <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-4 font-medium">
                  ANTEPRIMA CONFIGURAZIONE
                </p>
                <img
                  src={tractorGreen}
                  alt="Trattore configurabile"
                  className="w-full max-w-lg mx-auto h-auto"
                />
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { label: "CV", endA: 150, endB: 620, separator: "–" },
                  { label: "Brand", endA: 4, endB: 0 },
                  { label: "Accessori", endA: 50, endB: 0, suffix: "+" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 border"
                    style={{ backgroundColor: "hsl(154, 25%, 20%)", borderColor: "hsl(154, 25%, 28%)" }}
                  >
                    <div className="text-2xl font-display font-black text-white">
                      <AnimatedCounter end={stat.endA} />
                      {stat.separator && <>{stat.separator}<AnimatedCounter end={stat.endB} /></>}
                      {!stat.separator && stat.endB === 0 && (stat.suffix || "")}
                    </div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ConfiguratorPreview;
