import { Link } from "react-router-dom";
import { useScrollAnimation, AnimatedSection } from "@/hooks/useScrollAnimation";

const AccessoriPreviewSection = () => {
  const { ref: gridRef, isVisible } = useScrollAnimation(0.1);

  const accessories = [
    { title: "Aratri & Frese", icon: "⚙️", text: "Attrezzature per la lavorazione del terreno: aratri reversibili, frese rotative e vangatrici per ogni tipo di suolo." },
    { title: "Seminatrici", icon: "★", text: "Seminatrici di precisione per colture cerealicole, orticole e industriali. Tecnologia GPS integrata disponibile." },
    { title: "Barre Falcianti", icon: "✿", text: "Sistemi di taglio e raccolta per fieno, erba medica e colture foraggere. Larghezze di lavoro personalizzabili." },
    { title: "Rimorchi", icon: "⚖", text: "Rimorchi agricoli ribaltabili mono e triassiali, con portate da 5 a 30 tonnellate per ogni esigenza di trasporto." },
    { title: "Sistemi Irrigazione", icon: "⛋", text: "Pompe, irrigatori e sistemi di fertirrigazione per un'irrigazione efficiente e controllata delle colture." },
    { title: "Ricambi Originali", icon: "⚡", text: "Magazzino ricambi originali sempre fornito. Spedizione rapida in tutta Italia per minimizzare i fermi macchina." }
  ];

  return (
    <section className="accessori" id="accessori" style={{ paddingBottom: "5rem", paddingTop: "2rem" }}>
      <div className="marquee-wrap opacity-90" style={{ 
          padding: "1.5rem 0", 
          marginBottom: "4rem", 
          overflow: "hidden",
          borderTop: "1px solid currentColor",
          borderBottom: "1px solid currentColor",
      }}>
        <div className="marquee dsi-marquee-container">
          {[1, 2].map((k) => (
            <span key={k} className="marquee-item dsi-marquee-text" style={{ paddingRight: "4rem", display: "inline-flex", alignItems: "center" }}>
              ARATRI <span className="dot" style={{ margin: "0 2rem", opacity: 0.8, color: "#ffffff" }}>•</span> 
              FRESE <span className="dot" style={{ margin: "0 2rem", opacity: 0.8, color: "#ffffff" }}>•</span> 
              SEMINATRICI <span className="dot" style={{ margin: "0 2rem", opacity: 0.8, color: "#ffffff" }}>•</span> 
              BARRE FALCIANTI <span className="dot" style={{ margin: "0 2rem", opacity: 0.8, color: "#ffffff" }}>•</span> 
              RIMORCHI <span className="dot" style={{ margin: "0 2rem", opacity: 0.8, color: "#ffffff" }}>•</span> 
              SISTEMI IRRIGAZIONE <span className="dot" style={{ margin: "0 2rem", opacity: 0.8, color: "#ffffff" }}>•</span> 
              RICAMBI ORIGINALI <span className="dot" style={{ margin: "0 2rem", opacity: 0.8, color: "#ffffff" }}>•</span>
            </span>
          ))}
        </div>
      </div>
      
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 3rem 1rem" }}>
        <AnimatedSection from="left" delay={0.1}>
          <div className="intro-eyebrow" style={{
              color: "#e8860c", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 600, marginBottom: "10px"
          }}>Accessori & Attrezzature</div>
        </AnimatedSection>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "2rem", marginBottom: "3rem" }}>
          <AnimatedSection from="up" delay={0.2} style={{ flex: 1 }}>
            <h2 className="vantaggi-heading font-display font-black" style={{
                fontSize: "3rem", lineHeight: 1.05, margin: 0, maxWidth: "800px"
            }}>
              Tutto ciò che serve per <em style={{ fontStyle: "italic", color: "#e8860c" }}>massimizzare</em> la produttività
            </h2>
          </AnimatedSection>
          <AnimatedSection from="none" delay={0.3}>
            <Link to="/accessori" className="btn-outline-dark hover:!bg-[#F97316] hover:!border-[#F97316] hover:!text-white transition-all duration-300" style={{ borderColor: "currentColor" }}>
              Richiedi Catalogo al Team
            </Link>
          </AnimatedSection>
        </div>

        <div ref={gridRef} className="accessori-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accessories.map((acc, i) => (
            <div key={i} className="acc-card" style={{
                border: "1px solid currentColor", 
                borderRadius: "12px", 
                padding: "2rem", 
                cursor: "default",
                opacity: isVisible ? 0.9 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`
            }}>
              <div className="acc-card-icon" style={{
                  fontSize: "2.5rem", marginBottom: "1.5rem", color: "#e8860c", transition: "transform 0.4s ease", display: "inline-block"
              }}>
                {acc.icon}
              </div>
              <div className="acc-card-title font-display font-bold" style={{
                  fontSize: "1.25rem", marginBottom: "0.75rem", letterSpacing: "0.02em"
              }}>{acc.title}</div>
              <div className="acc-card-text" style={{
                  fontSize: "0.95rem", lineHeight: 1.6, opacity: 0.8
              }}>{acc.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessoriPreviewSection;
