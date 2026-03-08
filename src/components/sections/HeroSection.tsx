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

      {/* Dark cinematic overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.55) 100%)",
        }}
      />


      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 text-center py-28 z-[3]">
        <p className="text-secondary font-bold text-xs uppercase tracking-[0.3em] mb-8 animate-fade-in-up">
          DSI — FOR INDUSTRY & AGRICULTURE
        </p>

        {/* Premium brand stamp */}
        <div className="flex items-center justify-center gap-5 mb-8 animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
          <span className="block w-[60px] h-px" style={{ backgroundColor: "rgba(255,255,255,0.3)" }} />
          <div className="text-center">
            <span
              className="block leading-tight"
              style={{ fontSize: "3.5rem", fontWeight: 300, color: "white" }}
            >
              载新
            </span>
            <span
              className="block uppercase italic mt-1"
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.25em",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Portare l'Innovazione
            </span>
          </div>
          <span className="block w-[60px] h-px" style={{ backgroundColor: "rgba(255,255,255,0.3)" }} />
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white leading-[1.05] mb-6 uppercase tracking-tight animate-fade-in-up max-w-4xl mx-auto">
          IMPORTAZIONE
          <br />
          DIRETTA DI MACCHINE
          <br />
          AGRICOLE
        </h1>
        <p
          className="text-white/55 text-xs md:text-sm uppercase tracking-[0.35em] mb-14 animate-fade-in-up"
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
            className="gradient-accent text-accent-foreground px-10 py-4 rounded-[6px] text-base font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-elevated"
          >
            Scopri i modelli
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/configuratore"
            className="border-2 border-white/30 text-white px-10 py-4 rounded-[6px] text-base font-semibold uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
          >
            Configura il tuo trattore
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/70 transition-colors animate-fade-in z-[3]"
        style={{ animationDelay: "0.6s" }}
      >
        <span className="text-xs uppercase tracking-[0.3em] font-medium">
          Scorri
        </span>
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
