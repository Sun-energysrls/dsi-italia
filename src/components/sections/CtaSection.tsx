import { Link } from "react-router-dom";
import { Settings } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const CtaSection = () => {
  return (
    <section
      className="relative py-24 lg:py-32 section-fade-top-warm"
      style={{ background: "var(--dsi-green-gradient)" }}
    >
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-[2]">
        <AnimatedSection>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-6 uppercase tracking-tight text-white"
          >
            Pronto a Trovare il Trattore Perfetto?
          </h2>
          <p
            className="text-lg mb-12 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Configura il tuo trattore ideale e ricevi un preventivo personalizzato senza impegno.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/configuratore" className="btn-orange">
              Configura il tuo Trattore
              <Settings className="h-5 w-5" />
            </Link>
            <Link to="/contatti" className="btn-outline-light">
              Contattaci
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CtaSection;
