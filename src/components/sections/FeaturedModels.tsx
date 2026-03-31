import { useState } from "react";
import { Link } from "react-router-dom";
import { tractors } from "@/data/tractors";
import { getTractorPhoto } from "@/data/tractor-images";
import { useScrollAnimation, AnimatedSection } from "@/hooks/useScrollAnimation";

const MODELS = [
  { id: "tavol-2404", description: "240 HP • 6 Cilindri Turbo • Cabina Premium" },
  { id: "tavol-1204", description: "120 CV • 6 Cilindri • Cabina Condizionata" },
  { id: "tavol-704",  description: "70 CV • 4 Cilindri • Cabina Condizionata" },
  { id: "tavol-1804", description: "180 HP • 6 Cilindri • Cabina Condizionata" },
];

const ease = "cubic-bezier(0.16, 1, 0.3, 1)";

const FeaturedModels = () => {
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null);

  // One observer per row — triggers independently as user scrolls
  const { ref: row0Ref, isVisible: row0Vis } = useScrollAnimation(0.15);
  const { ref: row1Ref, isVisible: row1Vis } = useScrollAnimation(0.15);
  const rowRefs = [row0Ref, row1Ref];
  const rowVis  = [row0Vis,  row1Vis];

  const cards = MODELS.map((m) => ({
    ...m,
    tractor: tractors.find((t) => t.id === m.id),
  })).filter((m) => m.tractor);

  if (!cards.length) return null;

  const getFlex = (row: number, col: number) => {
    if (!hovered || hovered.row !== row) return 1;
    return hovered.col === col ? 1.08 : 0.92;
  };

  const rows = [cards.slice(0, 2), cards.slice(2, 4)];

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
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          display: block;
        }
        .pgamma-card:hover .pgamma-photo {
          transform: scale(1.05);
        }
        .pgamma-inner {
          position: relative;
          width: 100%;
          height: 380px;
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          background-color: #1a1a1a;
        }
        .pgamma-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0,0,0,0.15) 0%,
            transparent 35%,
            rgba(0,0,0,0.7) 100%
          );
          z-index: 1;
        }
        .pgamma-name {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          text-align: center;
          padding-top: 1.4rem;
          z-index: 2;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 2rem;
          font-weight: 700;
          font-style: italic;
          color: #ffffff;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
          pointer-events: none;
        }
        .pgamma-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.25rem 1.5rem;
          z-index: 2;
          pointer-events: none;
        }
        .pgamma-badge {
          display: inline-block;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          color: #ffffff;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 20px;
          margin-bottom: 0.4rem;
        }
        .pgamma-desc {
          display: block;
          color: rgba(255,255,255,0.7);
          font-size: 0.8rem;
          line-height: 1.5;
        }
        .pgamma-arrow {
          position: absolute;
          bottom: 1.25rem;
          right: 1.5rem;
          color: #ffffff;
          font-size: 1.1rem;
          z-index: 2;
          pointer-events: none;
          transition: transform 0.3s ease;
        }
        .pgamma-card:hover .pgamma-arrow {
          transform: translateX(4px);
        }
      `}</style>

      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        {/* Section header — granular animations per element */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
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
                className="font-display font-black"
                style={{ color: "#1b3a2d", fontSize: "3rem", lineHeight: 1.05 }}
              >
                Trattori <em style={{ fontStyle: "italic" }}>potenti</em>, pronti per ogni sfida
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection from="none" duration={0.5} delay={0.3} style={{ alignSelf: "center" }}>
            <Link
              to="/trattori"
              style={{
                color: "#e8860c",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span>Catalogo Completo</span>
              <span aria-hidden="true">→</span>
            </Link>
          </AnimatedSection>
        </div>

        {/* 2×2 grid — row-level observer + per-card stagger */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {rows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              ref={rowRefs[rowIdx]}
              style={{ display: "flex", gap: "12px" }}
            >
              {row.map(({ id, description, tractor }, colIdx) => {
                const delay = colIdx * 0.1;
                const visible = rowVis[rowIdx];
                return (
                  <div
                    key={id}
                    className="pgamma-card"
                    style={{
                      flex: getFlex(rowIdx, colIdx),
                      /* flex animates on hover (0s delay); opacity+transform animate on scroll-in */
                      transition: `flex 0.5s cubic-bezier(0.4,0,0.2,1) 0s, opacity 0.7s ${ease} ${delay}s, transform 0.7s ${ease} ${delay}s`,
                      minWidth: 0,
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
                    }}
                    onMouseEnter={() => setHovered({ row: rowIdx, col: colIdx })}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <Link to={`/trattori/${id}`} style={{ display: "block", textDecoration: "none" }}>
                      <div className="pgamma-inner">
                        <img
                          className="pgamma-photo"
                          src={getTractorPhoto(id)}
                          alt={tractor!.name}
                          loading="lazy"
                        />
                        <div className="pgamma-overlay" />
                        <div className="pgamma-name">{tractor!.name}</div>
                        <div className="pgamma-bottom">
                          <span className="pgamma-badge">{tractor!.category}</span>
                          <span className="pgamma-desc">{description}</span>
                        </div>
                        <span className="pgamma-arrow">→</span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;
