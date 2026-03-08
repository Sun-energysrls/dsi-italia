import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex flex-col justify-end overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Cinematic gradient — darker at bottom for text legibility */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* Content — left-aligned, bottom-anchored like Lamborghini */}
      <div className="relative z-[3] px-8 lg:px-16 pb-20 lg:pb-28">
        {/* Small label */}
        <p className="text-secondary font-bold text-[10px] lg:text-xs uppercase tracking-[0.4em] mb-4 animate-fade-in-up">
          DSI — For Industry & Agriculture
        </p>

        {/* Brand stamp */}
        <div className="flex items-center gap-4 mb-6 animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
          <span className="block w-10 h-px bg-white/30" />
          <div>
            <span className="block leading-none text-white" style={{ fontSize: "2.5rem", fontWeight: 300 }}>
              载新
            </span>
            <span className="block uppercase italic text-white/50 text-[9px] tracking-[0.25em] mt-1">
              Portare l'Innovazione
            </span>
          </div>
        </div>

        {/* Main headline — massive, left-aligned */}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-display font-black text-white leading-[0.9] uppercase tracking-tighter mb-6 animate-fade-in-up max-w-5xl"
          style={{ animationDelay: "0.1s" }}
        >
          Importazione
          <br />
          Diretta di
          <br />
          <span className="text-secondary">Macchine Agricole</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/40 text-[10px] sm:text-xs uppercase tracking-[0.4em] mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Potenza. Affidabilità. Controllo Totale.
        </p>

        {/* CTAs — clean, minimal */}
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            to="/trattori"
            className="gradient-accent text-accent-foreground px-10 py-4 text-[11px] font-bold uppercase tracking-[0.25em] inline-flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
          >
            Scopri i modelli
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/configuratore"
            className="border border-white/25 text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.25em] inline-flex items-center justify-center gap-3 hover:bg-white/5 transition-colors"
          >
            Configura il tuo trattore
          </Link>
        </div>
      </div>

      {/* Scroll indicator — right side */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-10 right-8 lg:right-16 flex flex-col items-center gap-2 text-white/40 hover:text-white/60 transition-colors animate-fade-in z-[3]"
        style={{ animationDelay: "0.6s" }}
      >
        <span className="text-[9px] uppercase tracking-[0.4em] font-medium [writing-mode:vertical-lr]">
          Scorri
        </span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
