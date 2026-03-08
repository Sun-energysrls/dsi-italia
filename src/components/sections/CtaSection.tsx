import { Link } from "react-router-dom";
import { Settings } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const CtaSection = () => {
  return (
    <section className="py-28 lg:py-36 bg-card border-t border-border/30">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-6 uppercase tracking-tight">
            Pronto a Trovare il Trattore Perfetto?
          </h2>
          <p className="text-muted-foreground text-base mb-14 max-w-2xl mx-auto">
            Configura il tuo trattore ideale e ricevi un preventivo personalizzato senza impegno.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/configuratore"
              className="border border-secondary text-secondary px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] inline-flex items-center justify-center gap-2 hover:bg-secondary hover:text-secondary-foreground transition-all"
            >
              Configura il tuo Trattore
              <Settings className="h-4 w-4" />
            </Link>
            <Link
              to="/contatti"
              className="border border-border text-foreground/60 px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] inline-flex items-center justify-center gap-2 hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              Contattaci
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CtaSection;
