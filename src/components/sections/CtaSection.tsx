import { Link } from "react-router-dom";
import { Settings } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const CtaSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-6 uppercase tracking-tight">
            Pronto a Trovare il Trattore Perfetto?
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Configura il tuo trattore ideale e ricevi un preventivo personalizzato senza impegno.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/configuratore"
              className="gradient-accent text-accent-foreground px-10 py-4 rounded-sm text-base font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-elevated"
            >
              Configura il tuo Trattore
              <Settings className="h-5 w-5" />
            </Link>
            <Link
              to="/contatti"
              className="border-2 border-border text-foreground px-10 py-4 rounded-sm text-base font-semibold uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:bg-muted transition-colors"
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
