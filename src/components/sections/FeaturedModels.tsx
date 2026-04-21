import { Link } from "react-router-dom";
import { tractors } from "@/data/tractors";
import { getTractorPhoto } from "@/data/tractor-images";
import { useScrollAnimation, AnimatedSection } from "@/hooks/useScrollAnimation";

const MODELS = [
  { id: "tavol-2404", description: "240 HP • 6 Cilindri Turbo", categoryLabel: "Serie TH — Alta Potenza" },
  { id: "tavol-1204", description: "120 CV • 6 Cilindri • Versatile", categoryLabel: "Serie TM — Media Potenza" },
  { id: "tavol-704",  description: "70 CV • 4 Cilindri • Compatto", categoryLabel: "Serie TC — Utility" },
];

const ease = "cubic-bezier(0.16, 1, 0.3, 1)";

const FeaturedModels = () => {
  const { ref: gridRef, isVisible } = useScrollAnimation(0.15);

  const cards = MODELS.map((m) => ({
    ...m,
    tractor: tractors.find((t) => t.id === m.id),
  })).filter((m) => m.tractor);

  if (cards.length < 3) return null;

  return (
    <section style={{ background: "transparent", padding: "5rem 3rem" }}>
      <style>{`
        .pgamma-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          display: block;
        }
        .pgamma-card:hover .pgamma-photo {
          transform: scale(1.06);
        }
        .pgamma-inner {
          position: relative;
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          background-color: #1a1a1a;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2.5rem;
        }
        /* Gradient overlay limited to the bottom just to keep text readable */
        .pgamma-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(18, 42, 33, 0.9) 0%,
            transparent 50%
          );
          z-index: 1;
          transition: opacity 0.5s ease;
        }
        
        .pgamma-content {
          position: relative;
          z-index: 3;
          text-align: left;
        }

        .pgamma-watermark {
          position: absolute;
          top: 50%;
          right: 2rem;
          transform: translateY(-50%);
          font-family: var(--font-display, sans-serif);
          font-size: 14rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.05);
          z-index: 2;
          pointer-events: none;
          line-height: 1;
          letter-spacing: -0.05em;
          transition: transform 0.8s ease, color 0.5s ease;
        }

        .pgamma-card:hover .pgamma-watermark {
          transform: translateY(-50%) translateX(-10px);
          color: rgba(255, 255, 255, 0.08);
        }

        .small-card .pgamma-watermark {
          font-size: 8rem;
          top: 50%;
          right: 1.5rem;
        }

        .pgamma-badge {
          display: block;
          color: #e8860c;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          font-weight: 700;
        }

        .pgamma-name {
          font-family: var(--font-display, serif);
          font-size: 2.75rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }

        .small-card .pgamma-name {
          font-size: 2rem;
        }

        .pgamma-desc {
          display: block;
          color: rgba(255,255,255,0.8);
          font-size: 0.85rem;
          letter-spacing: 0.02em;
          margin-bottom: 1.5rem;
        }

        .pgamma-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #e8860c;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: transform 0.3s ease;
        }

        .pgamma-card:hover .pgamma-link {
          transform: translateX(4px);
        }
      `}</style>

      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
            marginBottom: "4rem",
          }}
        >
          <div>
            <AnimatedSection from="left" distance={20} duration={0.7} delay={0.05}>
              <div
                style={{
                  color: "#e8860c",
                  fontSize: "0.65rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginBottom: 10,
                }}
              >
                La Nostra Gamma
              </div>
            </AnimatedSection>
            <AnimatedSection from="up" distance={40} duration={0.9} delay={0}>
              <h2
                className="font-display font-normal"
                style={{ color: "currentColor", fontSize: "3rem", lineHeight: 1.05 }}
              >
                Trattori <em style={{ fontStyle: "italic", color: "#e8860c" }}>potenti</em>, pronti per ogni sfida
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection from="none" duration={0.5} delay={0.3} style={{ alignSelf: "center" }}>
            <Link
              to="/trattori"
              className="btn-outline-dark hover:!bg-[#e8860c] hover:!border-[#e8860c] hover:!text-white transition-all duration-300" style={{ borderColor: "currentColor" }}
            >
              Vedi tutta la gamma
            </Link>
          </AnimatedSection>
        </div>

        {/* 3 Cards Grid (1 Large Left, 2 Small Right) */}
        <div 
          ref={gridRef} 
          className="flex flex-col lg:flex-row gap-[24px]"
        >
          {/* Left Large Card */}
          <div
            className="pgamma-card relative group flex-1 lg:flex-[1.1]"
            style={{
              transition: `opacity 0.8s ${ease} 0s, transform 0.8s ${ease} 0s`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
            }}
          >
            <Link to={`/trattori/${cards[0].id}`} className="block h-full outline-none">
              <div className="pgamma-inner lg:h-[700px] h-[450px]">
                <img
                  className="pgamma-photo"
                  src={getTractorPhoto(cards[0].id)}
                  alt={cards[0].tractor!.name}
                  loading="lazy"
                />
                <div className="pgamma-overlay" />
                
                {/* Simulated Watermark extracted from ID (e.g., TH) */}
                <div className="pgamma-watermark">TH</div>

                <div className="pgamma-content">
                  <span className="pgamma-badge">{cards[0].categoryLabel}</span>
                  <div className="pgamma-name">{cards[0].tractor!.name}</div>
                  <span className="pgamma-desc">{cards[0].description}</span>
                  <span className="pgamma-link">Scopri di più &rarr;</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Small Cards Stack */}
          <div className="flex-1 flex flex-col gap-[24px]">
            {cards.slice(1).map((item, idx) => {
              const delay = (idx + 1) * 0.2;
              const watermark = idx === 0 ? "TM" : "TC"; // Simulating series identifiers
              
              return (
                <div
                  key={item.id}
                  className="pgamma-card small-card relative group h-full"
                  style={{
                    transition: `opacity 0.8s ${ease} ${delay}s, transform 0.8s ${ease} ${delay}s`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  }}
                >
                  <Link to={`/trattori/${item.id}`} className="block h-full outline-none">
                    <div className="pgamma-inner lg:h-[338px] h-[350px]">
                      <img
                        className="pgamma-photo"
                        src={getTractorPhoto(item.id)}
                        alt={item.tractor!.name}
                        loading="lazy"
                      />
                      <div className="pgamma-overlay" />
                      
                      <div className="pgamma-watermark">{watermark}</div>

                      <div className="pgamma-content">
                        <span className="pgamma-badge">{item.categoryLabel}</span>
                        <div className="pgamma-name">{item.tractor!.name}</div>
                        <span className="pgamma-desc">{item.description}</span>
                        <span className="pgamma-link">Scopri di più &rarr;</span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;
