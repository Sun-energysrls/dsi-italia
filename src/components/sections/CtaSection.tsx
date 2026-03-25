import { Link } from "react-router-dom";
import { Settings } from "lucide-react";

const CtaSection = () => {
  return (
    <section
      className="section-diag-dark relative"
      style={{ background: '#1B3A2D', padding: '140px 0 100px', color: 'white' }}
    >
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-[2]">
        <div className="reveal from-bottom">
          <h2
            className="mb-6 uppercase tracking-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'white' }}
          >
            Pronto a Trovare il Trattore Perfetto?
          </h2>
          <p
            className="text-lg mb-12 max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.65)' }}
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
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
