import AnimatedCounter from "@/components/AnimatedCounter";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const bannerStats = [
  { value: 2,   suffix: "",   label: "BRAND PARTNER",      sub: "selezionati a livello mondiale" },
  { value: 16,  suffix: "+",  label: "MODELLI DISPONIBILI", sub: "in catalogo e configurabili" },
  { value: 50,  suffix: "+",  label: "CONFIGURAZIONI",      sub: "personalizzazioni possibili" },
  { value: 100, suffix: "%",  label: "CLIENTI SODDISFATTI", sub: "soddisfazione certificata" },
];

const StatsBanner = () => {
  return (
    <section
      style={{
        position: "relative",
        padding: "3rem 2rem",
        background: "linear-gradient(135deg, #c06a10 0%, #e8860c 40%, #d4781c 100%)",
        overflow: "hidden",
        margin: 0,
        borderRadius: 0,
      }}
    >
      {/* Dot-grid texture overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
          backgroundSize: "22px 22px",
          pointerEvents: "none",
        }}
      />

      {/* Soft vignette edges */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.12) 0%, transparent 18%, transparent 82%, rgba(0,0,0,0.12) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container mx-auto px-4 lg:px-8 relative"
        style={{ zIndex: 1 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          {bannerStats.map((stat, i) => (
            <AnimatedSection
              key={stat.label}
              from="up"
              distance={30}
              duration={0.7}
              delay={i * 0.12}
              style={{ textAlign: "center", flex: "1 1 180px", position: "relative" }}
            >
              {/* Vertical divider (right side, except last) */}
              {i < bannerStats.length - 1 && (
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 1,
                    height: 60,
                    background: "rgba(255,255,255,0.3)",
                  }}
                />
              )}

              {/* Number */}
              <div
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "3.5rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                  textShadow: "0 2px 12px rgba(0,0,0,0.15)",
                }}
              >
                <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2500} />
              </div>

              {/* Label */}
              <p
                style={{
                  color: "rgba(255,255,255,0.95)",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  marginBottom: "0.25rem",
                }}
              >
                {stat.label}
              </p>

              {/* Sub-label */}
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.08em",
                }}
              >
                {stat.sub}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
