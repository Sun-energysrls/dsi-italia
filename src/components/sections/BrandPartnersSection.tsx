import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { brands } from "@/data/brands";

const PX = {
  forestDeep: '#0f2a1f',
  copper: '#d4781c',
  orange: '#F97316',
};

const brandData = [
  {
    id: 'tavol',
    name: 'Tavol',
    wordmark: 'TAVOL',
    country: 'Cina',
    since: 'Dal 1988',
    tagline: 'Heritage · Precision · Agricolture',
    description: 'Produttore storico cinese di trattori agricoli professionali. Partner strategico di DSI per il mercato italiano, con una gamma che spazia da 25 a oltre 260 HP.',
    stats: [
      { v: '260', l: 'Modelli disponibili', s: 'HP max' },
      { v: '36+', l: 'Paesi di export', s: 'in attivo' },
      { v: '1988', l: 'Anno di fondazione', s: '' },
    ],
    locked: false,
  },
  {
    id: 'zoomlion',
    name: 'Zoomlion',
    wordmark: 'ZOOMLION',
    country: 'Cina',
    since: 'Dal 1992',
    tagline: 'Smart Agriculture · 5G · AI',
    description: "Colosso globale della meccanizzazione, pioniere dell'agricoltura intelligente. Quotato a Shenzhen e Hong Kong. In arrivo nel portfolio DSI dal 2026.",
    stats: [
      { v: '1992', l: 'Anno di fondazione', s: '' },
      { v: '50+', l: 'Paesi di export', s: 'a livello globale' },
      { v: 'AI', l: 'Agricoltura smart', s: 'flotte connesse' },
    ],
    color: '#1a5fa8',
    locked: true,
  },
];

const marqueeItems = [
  'Porto di Shanghai · Partenza diretta',
  '36 Paesi di export',
  '260 HP massimi in gamma',
  'Produzione certificata ISO 9001',
  'Omologazione CE inclusa',
  'Ricambi originali 48 ore',
  'Linea dedicata DSI Import',
  'Network tecnici certificati',
];

const BrandPartnersSection = () => {
  const [active, setActive] = useState(0);
  const brand = brandData[active];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "transparent",
        color: '#fff',
        padding: 'clamp(80px, 10vw, 160px) 0 clamp(60px, 8vw, 120px)',
      }}
    >
      {/* Subtle grain */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.6,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)',
          backgroundSize: '22px 22px',
        }}
      />
      {/* Top copper rule */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0"
        style={{
          height: 1,
          background: `linear-gradient(90deg, transparent 0%, ${PX.copper} 30%, ${PX.copper} 70%, transparent 100%)`,
          opacity: 0.4,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 lg:gap-12 mb-12 lg:mb-16">
          <div>
            <AnimatedSection from="left" distance={20} duration={0.7} delay={0.05}>
              <span
                className="inline-flex items-center gap-3"
                style={{
                  color: PX.copper,
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                }}
              >
                I nostri partner
              </span>
            </AnimatedSection>
            <AnimatedSection from="up" distance={30} duration={0.9} delay={0.1}>
              <h2
                style={{
                  
                  fontWeight: 400,
                  fontSize: 'clamp(36px, 5vw, 72px)',
                  lineHeight: 1.02,
                  letterSpacing: '-0.025em',
                  color: '#fff',
                  margin: '28px 0 0',
                  textWrap: 'balance',
                }}
              >
                Selezionati tra le migliori <em style={{ color: PX.copper, fontStyle: 'italic', fontWeight: 400 }}>manifatture</em>
                <br className="hidden lg:block" /> del mondo.
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection from="none" duration={0.6} delay={0.2}>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.55)',
                maxWidth: 340,
                margin: 0,
              }}
            >
              Due brand oggi, più in arrivo. Ogni partnership nasce da anni di relazione
              diretta con le linee di produzione.
            </p>
          </AnimatedSection>
        </div>

        {/* Tab selector */}
        <AnimatedSection from="up" distance={16} duration={0.6} delay={0.2}>
          <div
            className="flex gap-0 overflow-x-auto hide-scroll"
            style={{ 
              borderBottom: '1px solid rgba(255,255,255,0.1)', 
              marginBottom: 48,
              scrollbarWidth: 'none',
              msOverflowStyle: 'none', 
            }}
          >
            <style>
              {`
                .hide-scroll::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            {brandData.map((b, i) => (
              <button
                key={b.id}
                onClick={() => setActive(i)}
                className="relative whitespace-nowrap"
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '20px 24px',
                  color: active === i ? '#fff' : 'rgba(255,255,255,0.4)',
                  fontWeight: 600,
                  fontSize: 12,
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  transition: 'color .3s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <span
                  style={{
                    
                    fontStyle: 'italic',
                    fontWeight: 400,
                    fontSize: 13,
                    color: active === i ? PX.copper : 'rgba(255,255,255,0.3)',
                  }}
                >
                  0{i + 1}
                </span>
                {b.name}
                {b.locked && (
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: 2,
                      background: 'rgba(212,120,28,0.15)',
                      color: PX.copper,
                      letterSpacing: '0.2em',
                    }}
                  >
                    SOON
                  </span>
                )}
                {active === i && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: 0,
                      bottom: -1,
                      width: '100%',
                      height: 2,
                      background: PX.copper,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Featured showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-stretch">
          {/* Big wordmark card */}
          <AnimatedSection from="left" distance={30} duration={0.8} delay={0.3}>
            <div
              className="relative overflow-hidden flex flex-col justify-between"
              style={{
                padding: 'clamp(36px, 5vw, 72px) clamp(28px, 4vw, 64px)',
                minHeight: 'clamp(400px, 50vw, 520px)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 2,
              }}
            >
              {/* Background wordmark */}
              <div
                aria-hidden="true"
                className="absolute pointer-events-none select-none hidden md:block"
                style={{
                  left: -20,
                  bottom: -40,
                  
                  fontWeight: 900,
                  fontStyle: 'italic',
                  fontSize: 'clamp(120px, 25vw, 360px)',
                  lineHeight: 0.85,
                  color: 'rgba(255,255,255,0.025)',
                  letterSpacing: '-0.05em',
                }}
              >
                {brand.wordmark}
              </div>

              {/* Corner ribbon */}
              <div
                className="absolute top-4 right-4 lg:top-6 lg:right-6 flex items-center gap-2"
                style={{
                  fontSize: 11,
                  color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: brand.locked ? PX.copper : '#4ade80',
                  }}
                />
                {brand.locked ? 'In arrivo · 2026' : 'Attivo · disponibile'}
              </div>

              <div className="relative z-[2]">
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: PX.copper,
                    marginBottom: 16,
                  }}
                >
                  {brand.country} · {brand.since}
                </div>
                <h3
                  style={{
                    
                    fontWeight: 700,
                    fontSize: 'clamp(48px, 8vw, 84px)',
                    lineHeight: 0.9,
                    letterSpacing: '-0.03em',
                    color: '#fff',
                    margin: 0,
                    textTransform: 'uppercase',
                  }}
                >
                  {brand.name}
                </h3>
                <p
                  style={{
                    
                    fontStyle: 'italic',
                    fontWeight: 400,
                    fontSize: 18,
                    color: PX.copper,
                    margin: '16px 0 0',
                  }}
                >
                  {brand.tagline}
                </p>
              </div>

              <div className="relative z-[2]" style={{ marginTop: 48 }}>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: 'rgba(255,255,255,0.7)',
                    margin: 0,
                    maxWidth: 520,
                  }}
                >
                  {brand.description}
                </p>

                {/* Stat row */}
                <div
                  className="grid grid-cols-3 gap-4 lg:gap-6"
                  style={{
                    marginTop: 40,
                    paddingTop: 32,
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {brand.stats.map(s => (
                    <div key={s.l}>
                      <div
                        style={{
                          
                          fontWeight: 400,
                          fontSize: 'clamp(24px, 3vw, 36px)',
                          color: '#fff',
                          letterSpacing: '-0.02em',
                          lineHeight: 1,
                        }}
                      >
                        {s.v}
                      </div>
                      <div
                        style={{
                          fontSize: 10,
                          letterSpacing: '0.22em',
                          textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.5)',
                          marginTop: 10,
                        }}
                      >
                        {s.l}
                      </div>
                      {s.s && (
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>
                          {s.s}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 36, display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                  {brand.locked ? (
                    <span
                      className="inline-flex items-center gap-2"
                      style={{
                        padding: '14px 24px',
                        border: `1px solid ${PX.copper}`,
                        color: PX.copper,
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Richiedi accesso anticipato <ArrowRight size={14} />
                    </span>
                  ) : (
                    <Link to="/trattori" className="btn-orange">
                      Scopri i modelli <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Side column — fact card + coming soon */}
          <div className="flex flex-col gap-6">
            <AnimatedSection from="right" distance={30} duration={0.8} delay={0.4}>
              {/* Fact card */}
              <div
                style={{
                  padding: 36,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 2,
                }}
              >
                <span
                  className="inline-flex items-center gap-3"
                  style={{
                    color: PX.copper,
                    fontWeight: 600,
                    fontSize: 11,
                    letterSpacing: '0.32em',
                    textTransform: 'uppercase',
                  }}
                >
                  Garanzia DSI
                </span>
                <h4
                  style={{
                    
                    fontWeight: 400,
                    fontSize: 'clamp(22px, 3vw, 28px)',
                    color: '#fff',
                    margin: '16px 0 12px',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.15,
                  }}
                >
                  Ogni partner passa <em style={{ color: PX.copper, fontStyle: 'italic' }}>il protocollo</em>.
                </h4>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.55)',
                    margin: 0,
                  }}
                >
                  Visita dei siti produttivi, audit qualità, certificazioni CE, omologazione italiana
                  e un accordo di assistenza vincolante. Senza questi quattro criteri, la trattativa si ferma.
                </p>
                <div style={{ marginTop: 24, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['Visita on-site', 'Audit qualità', 'CE · Omologazione', 'Accordo assistenza'].map(t => (
                    <span
                      key={t}
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        padding: '6px 12px',
                        borderRadius: 2,
                        background: 'rgba(212,120,28,0.1)',
                        color: PX.copper,
                        letterSpacing: '0.06em',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection from="right" distance={30} duration={0.8} delay={0.5}>
              {/* Dotted "coming soon" card */}
              <div
                style={{
                  padding: 36,
                  border: '1.5px dashed rgba(212,120,28,0.3)',
                  borderRadius: 2,
                  background: 'rgba(212,120,28,0.02)',
                }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div
                      style={{
                        fontSize: 10,
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: PX.copper,
                        marginBottom: 12,
                      }}
                    >
                      03 · In arrivo
                    </div>
                    <h4
                      style={{
                        
                        fontWeight: 400,
                        fontStyle: 'italic',
                        fontSize: 'clamp(22px, 3vw, 28px)',
                        color: 'rgba(255,255,255,0.9)',
                        margin: 0,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      Nuovi partner<br />in valutazione.
                    </h4>
                  </div>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      border: `1px solid ${PX.copper}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: PX.copper,
                      
                      fontStyle: 'italic',
                      fontSize: 24,
                      flexShrink: 0,
                    }}
                  >
                    +
                  </div>
                </div>
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.5)',
                    margin: '20px 0 0',
                  }}
                >
                  Portfolio in espansione. Partner europei e asiatici in fase di qualifica per l'annata 2026.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div
        style={{
          marginTop: 'clamp(48px, 6vw, 96px)',
          padding: '28px 0',
          overflow: 'hidden',
          position: 'relative',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 64,
            whiteSpace: 'nowrap',
            animation: 'dsiPartnersMarquee 40s linear infinite',
          }}
        >
          {[...Array(2)].flatMap((_, ri) =>
            marqueeItems.map((t, i) => (
              <span
                key={`${ri}-${i}`}
                style={{
                  
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 'clamp(20px, 3vw, 32px)',
                  color: 'rgba(255,255,255,0.7)',
                  letterSpacing: '-0.01em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 64,
                }}
              >
                {t}
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: PX.copper }} />
              </span>
            ))
          )}
        </div>
        <style>{`@keyframes dsiPartnersMarquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>
      </div>
    </section>
  );
};

export default BrandPartnersSection;
