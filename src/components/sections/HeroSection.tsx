import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

const HERO_LINES = ["IMPORTAZIONE", "DIRETTA DI MACCHINE", "AGRICOLE"];

const HeroSection = ({ videoReady = true }: { videoReady?: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoReady && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [videoReady]);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ position: "sticky", top: 0, zIndex: 1, height: "100vh" }}
    >
      <video
        ref={videoRef}
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

        {/* Eyebrow */}
        <p
          className="text-secondary font-bold text-xs uppercase tracking-[0.3em] mb-8"
          style={{ animation: "dsiHeroLine 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both" }}
        >
          DSI — FOR INDUSTRY & AGRICULTURE
        </p>

        {/* Brand stamp */}
        <div
          className="flex items-center justify-center gap-5 mb-8"
          style={{ animation: "dsiHeroLine 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both" }}
        >
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

        {/* Title — line-by-line reveal with overflow:hidden clip */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white leading-[1.05] mb-6 uppercase tracking-tight max-w-4xl mx-auto">
          {HERO_LINES.map((line, i) => (
            <span
              key={i}
              style={{ display: "block", overflow: "hidden", lineHeight: 1.1 }}
            >
              <span
                style={{
                  display: "block",
                  animation: `dsiHeroLine 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + i * 0.15}s both`,
                }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <p
          className="text-white/55 text-xs md:text-sm uppercase tracking-[0.35em] mb-14"
          style={{ animation: "dsiHeroLine 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.65s both" }}
        >
          POTENZA. AFFIDABILITÀ. CONTROLLO TOTALE.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animation: "dsiHeroLine 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both" }}
        >
          <Link to="/trattori" className="btn-orange">
            Scopri i modelli
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link to="/configuratore" className="btn-outline-light">
            Configura il tuo trattore
          </Link>
        </div>
      </div>

      {/* Scroll indicator — pulsing arrow */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/70 transition-colors z-[3]"
        style={{ animation: "dsiHeroLine 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.1s both" }}
      >
        <span className="text-xs uppercase tracking-[0.3em] font-medium">
          Scorri
        </span>
        <ArrowDown className="h-5 w-5 dsi-scroll-pulse" />
      </button>
    </section>
  );
};

export default HeroSection;
