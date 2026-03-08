import { Link } from "react-router-dom";
import { Settings } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const CtaSection = () => {
  return (
    <section className="py-28 lg:py-40 bg-background">
      <div className="px-8 lg:px-16 max-w-[1600px] mx-auto">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            <div className="max-w-2xl">
              <p className="text-secondary font-bold text-[10px] uppercase tracking-[0.4em] mb-4">
                INIZIA ORA
              </p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-foreground uppercase tracking-tight leading-[0.95] mb-6">
                Pronto a trovare il trattore perfetto?
              </h2>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                Configura il tuo trattore ideale e ricevi un preventivo personalizzato senza impegno.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0">
              <Link
                to="/configuratore"
                className="gradient-accent text-accent-foreground px-10 py-4 text-[11px] font-bold uppercase tracking-[0.25em] inline-flex items-center justify-center gap-3 hover:opacity-90 transition-opacity shadow-elevated"
              >
                Configura il tuo Trattore
                <Settings className="h-4 w-4" />
              </Link>
              <Link
                to="/contatti"
                className="border border-border text-foreground px-10 py-4 text-[11px] font-bold uppercase tracking-[0.25em] inline-flex items-center justify-center gap-3 hover:bg-muted/50 transition-colors"
              >
                Contattaci
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CtaSection;
