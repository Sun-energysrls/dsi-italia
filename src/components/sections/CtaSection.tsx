import { Link } from "react-router-dom";
import { Settings } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const CtaSection = () => {
  return (
    <section
      className="relative py-24 lg:py-32"
      style={{ background: "transparent", color: "hsl(40,100%,97%)" }}
    >
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-[2]">
        <AnimatedSection from="up" distance={40} duration={0.9} delay={0}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-6 uppercase tracking-tight text-white"
          >
            Pronto a Trovare il Trattore Perfetto?
          </h2>
        </AnimatedSection>
        <AnimatedSection from="none" duration={0.6} delay={0.2}>
          <p
            className="text-lg mb-12 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Configura il tuo trattore ideale e ricevi un preventivo personalizzato senza impegno.
          </p>
        </AnimatedSection>
        <AnimatedSection from="none" duration={0.5} delay={0.35}>
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
