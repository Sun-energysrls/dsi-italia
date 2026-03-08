import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Warm overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.35) 100%)' }} />

      {/* Bottom-right patch to cover Runway watermark */}
      <div
        className="absolute bottom-0 right-0 w-48 h-16 z-10"
        style={{ background: 'linear-gradient(to left, rgba(30,20,10,0.85) 0%, transparent 100%)' }}
      />

      <div className="relative container mx-auto px-4 lg:px-8 text-center py-28 z-20">
        <p className="text-secondary font-bold text-xs uppercase tracking-[0.3em] mb-6 animate-fade-in-up">
          DSI — FOR INDUSTRY & AGRICULTURE
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-display font-black text-white leading-[1.0] mb-8 uppercase tracking-tight animate-fade-in-up max-w-5xl mx-auto">
          IMPORTAZIONE
          <br />
          DIRETTA
          <br />
          DI MACCHINE
          <br />
          AGRICOLE
        </h1>
        <p
          className="text-white/60 text-sm md:text-base uppercase tracking-[0.35em] mb-14 animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          POTENZA. AFFIDABILITÀ. CONTROLLO TOTALE.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            to="/trattori"
            className="gradient-accent text-accent-foreground px-10 py-4 rounded-full text-base font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-elevated"
          >
            Scopri i modelli
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/configuratore"
            className="border-2 border-white/30 text-white px-10 py-4 rounded-full text-base font-semibold uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
          >
            Configura il tuo trattore
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/70 transition-colors animate-fade-in z-20"
        style={{ animationDelay: "0.6s" }}
      >
        <span className="text-xs uppercase tracking-[0.3em] font-medium">Scorri</span>
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
