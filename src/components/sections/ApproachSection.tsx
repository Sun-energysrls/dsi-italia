import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import customTractorImg from "@/assets/custom-black-tractor.jpg";
import tavol2604Img from "@/assets/tavol-2604.png";

const PX = {
  forest: '#1B4332',
  forestDeep: '#0f2a1f',
  ink: '#1a1a1a',
  cream: '#faf8f4',
  paper: '#f3eee5',
  line: '#E6DFD2',
  muted: '#7a7366',
  copper: '#d4781c',
  orange: '#F97316',
};

const principles = [
  { k: '01', t: 'Selezione diretta', d: 'Verifichiamo produttori, linee e catene di fornitura prima di firmare.' },
  { k: '02', t: 'Configurazione', d: 'Ogni trattore è costruito sulla tua azienda, non su un listino standard.' },
  { k: '03', t: 'Logistica integrata', d: 'Dogana, trasporto e omologazione gestiti da un unico referente.' },
  { k: '04', t: 'Post-vendita', d: 'Ricambi originali e tecnici certificati su tutto il territorio nazionale.' },
];

const ApproachSection = () => {
  return (
    <section
      className="relative"
      style={{ background: "transparent", padding: "clamp(80px, 10vw, 160px) 0", overflowX: 'clip' }}
    >
      {/* Faint paper texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.5,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(26,26,26,0.035) 1px, transparent 0)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Massive ghost word */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none select-none hidden lg:block"
        style={{
          top: 80,
          right: -40,
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          fontStyle: 'italic',
          fontSize: 'clamp(120px, 20vw, 320px)',
          color: 'rgba(26,26,26,0.03)',
          letterSpacing: '-0.05em',
          lineHeight: 1,
        }}
      >
        Approccio
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* LEFT — editorial column */}
          <div>
            <AnimatedSection from="left" distance={20} duration={0.7} delay={0.05}>
              <span
                className="inline-flex items-center gap-3 font-body"
                style={{
                  color: PX.copper,
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                }}
              >
                <span aria-hidden="true" style={{ width: 28, height: 1, background: 'currentColor', opacity: 0.5 }} />
                Il nostro approccio
              </span>
            </AnimatedSection>

            <AnimatedSection from="up" distance={30} duration={0.9} delay={0.1}>
              <h2
                className="font-display"
                style={{
                  fontWeight: 400,
                  fontSize: 'clamp(28px, 5vw, 72px)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.025em',
                  color: PX.ink,
                  margin: '28px 0 0',
                  wordBreak: 'break-word',
                }}
              >
                Importiamo{' '}
                <em style={{ fontStyle: 'italic', color: PX.copper, fontWeight: 400 }}>direttamente</em>.<br />
                Configuriamo.<br />
                Consegniamo.
              </h2>
            </AnimatedSection>

            <AnimatedSection from="up" distance={20} duration={0.7} delay={0.2}>
              <p
                className="font-body"
                style={{
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: PX.muted,
                  maxWidth: 520,
                  margin: '36px 0 0',
                }}
              >
                DSI Import non è un rivenditore. È una struttura di importazione con relazioni dirette con
                le principali manifatture mondiali di macchine agricole. Ogni passaggio — dal porto al campo —
                resta sotto il nostro controllo.
              </p>
            </AnimatedSection>

            {/* Principles list — indexed, no boxes */}
            <div style={{ marginTop: 64, borderTop: `1px solid ${PX.line}` }}>
              {principles.map((p, i) => (
                <AnimatedSection key={p.k} from="up" distance={16} duration={0.6} delay={0.25 + i * 0.08}>
                  <div
                    className="group cursor-pointer"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '60px 1fr auto',
                      gap: 24,
                      alignItems: 'baseline',
                      padding: '24px 0',
                      borderBottom: `1px solid ${PX.line}`,
                      transition: 'padding .25s ease, background .25s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.paddingLeft = '12px';
                      e.currentTarget.style.background = 'rgba(212,120,28,.04)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.paddingLeft = '0';
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <span
                      className="font-display"
                      style={{
                        fontStyle: 'italic',
                        fontWeight: 400,
                        fontSize: 22,
                        color: PX.copper,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {p.k}
                    </span>
                    <div>
                      <h3
                        className="font-display"
                        style={{
                          fontWeight: 700,
                          fontSize: 22,
                          color: PX.ink,
                          margin: 0,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {p.t}
                      </h3>
                      <p
                        className="font-body"
                        style={{
                          fontSize: 14,
                          color: PX.muted,
                          lineHeight: 1.6,
                          margin: '6px 0 0',
                          maxWidth: 440,
                        }}
                      >
                        {p.d}
                      </p>
                    </div>
                    <div 
                      style={{ color: PX.copper, alignSelf: 'center', transition: 'all .25s ease' }} 
                      className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1"
                    >
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection from="up" distance={16} duration={0.6} delay={0.6}>
              <div style={{ marginTop: 48, display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
                <Link to="/trattori" className="btn-outline-dark">
                  Scopri i nostri brand <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT — stacked images + manifesto card (Desktop) */}
          <div className="hidden lg:block">
            <AnimatedSection from="right" distance={40} duration={1} delay={0.2}>
              <div className="relative" style={{ minHeight: 1150 }}>
              {/* Main tractor image card */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '90%',
                  height: 480,
                  borderRadius: 16,
                  boxShadow: '0 50px 100px -20px rgba(0,0,0,0.12), inset 0 1px 2px rgba(255,255,255,0.8)',
                  background: 'linear-gradient(145deg, #ffffff 0%, #f7f7f7 100%)',
                  border: '1px solid rgba(0,0,0,0.02)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={customTractorImg}
                  alt="DSI Trattore Premium"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Floating manifesto card */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 360,
                  width: '65%',
                  background: PX.forestDeep,
                  color: '#fff',
                  padding: '44px 44px 40px',
                  borderRadius: 2,
                  boxShadow: '0 40px 80px -30px rgba(15,42,31,0.6)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  zIndex: 2,
                }}
              >
                <span
                  aria-hidden="true"
                  className="font-display"
                  style={{
                    fontSize: 120,
                    lineHeight: 0.6,
                    color: PX.copper,
                    position: 'absolute',
                    top: 20,
                    left: 28,
                    opacity: 0.8,
                  }}
                >
                  "
                </span>
                <p
                  className="font-display"
                  style={{
                    fontStyle: 'italic',
                    fontWeight: 400,
                    fontSize: 'clamp(18px, 2vw, 24px)',
                    lineHeight: 1.35,
                    color: '#fff',
                    margin: '24px 0 28px',
                    letterSpacing: '-0.005em',
                  }}
                >
                  Non vendiamo un mezzo. Scegliamo un compagno di lavoro per la tua terra, lo costruiamo e lo portiamo a destinazione.
                </p>
                <div
                  style={{
                    display: 'flex',
                    gap: 16,
                    alignItems: 'center',
                    paddingTop: 20,
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <div
                    className="font-display"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: PX.copper,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontStyle: 'italic',
                      fontWeight: 700,
                      color: '#fff',
                      fontSize: 20,
                    }}
                  >
                    D
                  </div>
                  <div>
                    <div className="font-body" style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>
                      Team DSI Import
                    </div>
                    <div
                      className="font-body"
                      style={{
                        fontSize: 11,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.5)',
                        marginTop: 2,
                      }}
                    >
                      Filosofia aziendale
                    </div>
                  </div>
                </div>
              </div>

              {/* Innovation card replacing bottom tractor */}
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 750,
                  width: '88%',
                  padding: '64px 40px',
                  background: 'linear-gradient(135deg, #e8860c 0%, #d4781c 100%)',
                  backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(135deg, #e8860c 0%, #d4781c 100%)',
                  backgroundSize: '12px 12px, 100% 100%',
                  borderRadius: 16,
                  boxShadow: '0 40px 80px -20px rgba(212,120,28,0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  zIndex: 3,
                }}
              >
                <div
                  className="font-display"
                  style={{
                    fontSize: '6rem',
                    color: '#ffffff',
                    lineHeight: 1,
                    letterSpacing: '0.08em',
                    textShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  }}
                >
                  载新
                </div>
                <div style={{ width: 48, height: 1, background: 'rgba(255,255,255,0.4)', margin: '1.5rem 0 1rem' }} />
                <p
                  className="font-body"
                  style={{
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    letterSpacing: '0.25em',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                  }}
                >
                  PORTARE L'INNOVAZIONE
                </p>
                <p
                  className="font-body"
                  style={{
                    color: '#ffffff',
                    opacity: 0.9,
                    fontSize: '0.85rem',
                    lineHeight: 1.6,
                    maxWidth: 340,
                    margin: 0,
                  }}
                >
                  Import diretto dalla Cina — tecnologia avanzata per l'agricoltura italiana.
                </p>
              </div>
            </div>
            </AnimatedSection>
          </div>

          {/* MOBILE LAYOUT STACK */}
          <div className="lg:hidden flex flex-col gap-6 mt-8 w-full max-w-[100vw] overflow-hidden">
            <AnimatedSection from="up" distance={20} duration={0.8}>
              {/* Mobile tractor image card */}
              <div
                style={{
                  width: '100%',
                  borderRadius: 16,
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
                  background: 'linear-gradient(145deg, #ffffff 0%, #f7f7f7 100%)',
                  border: '1px solid rgba(0,0,0,0.02)',
                  overflow: 'hidden',
                  position: 'relative',
                  aspectRatio: '4/3', // using proper aspect ratio property
                }}
              >
                <img
                  src={customTractorImg}
                  alt="DSI Trattore Premium"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </AnimatedSection>

            <AnimatedSection from="up" distance={20} duration={0.8} delay={0.1}>
              {/* Mobile manifesto card */}
              <div
                style={{
                  background: PX.forestDeep,
                  color: '#fff',
                  padding: '32px 24px',
                  borderRadius: 12,
                  position: 'relative',
                  boxShadow: '0 20px 40px -10px rgba(15,42,31,0.5)',
                  overflow: 'hidden', // prevent absolute quotes from breaking width
                }}
              >
                <span
                  aria-hidden="true"
                  className="font-display"
                  style={{
                    fontSize: 70,
                    lineHeight: 0.6,
                    color: PX.copper,
                    position: 'absolute',
                    top: 14,
                    left: 18,
                    opacity: 0.6,
                  }}
                >
                  "
                </span>
                <p
                  className="font-display relative z-10"
                  style={{
                    fontStyle: 'italic',
                    fontWeight: 400,
                    fontSize: 18,
                    lineHeight: 1.4,
                    color: '#fff',
                    margin: '12px 0 24px',
                  }}
                >
                  Non vendiamo un mezzo. Scegliamo un compagno di lavoro per la tua terra, lo costruiamo e lo portiamo a destinazione.
                </p>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <div
                    className="font-display"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: PX.copper,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontStyle: 'italic',
                      fontWeight: 700,
                      color: '#fff',
                      fontSize: 16,
                      flexShrink: 0,
                    }}
                  >
                    D
                  </div>
                  <div>
                    <div className="font-body" style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>Team DSI Import</div>
                    <div className="font-body" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                      Filosofia aziendale
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection from="up" distance={20} duration={0.8} delay={0.2}>
              {/* Mobile Innovation card */}
              <div
                style={{
                  width: '100%',
                  padding: '40px 20px',
                  background: 'linear-gradient(135deg, #e8860c 0%, #d4781c 100%)',
                  backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(135deg, #e8860c 0%, #d4781c 100%)',
                  backgroundSize: '12px 12px, 100% 100%',
                  borderRadius: 12,
                  boxShadow: '0 20px 40px -10px rgba(212,120,28,0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <div className="font-display" style={{ fontSize: 'clamp(3rem, 12vw, 4.5rem)', color: '#ffffff', lineHeight: 1, textShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                  载新
                </div>
                <div style={{ width: 48, height: 1, background: 'rgba(255,255,255,0.4)', margin: '1.25rem 0 1rem' }} />
                <p className="font-body" style={{ color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.25em', fontSize: '10px', fontWeight: 600, marginBottom: '0.5rem' }}>
                  PORTARE L'INNOVAZIONE
                </p>
                <p className="font-body" style={{ color: '#ffffff', opacity: 0.9, fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                  Import diretto dalla Cina — tecnologia avanzata per l'agricoltura italiana.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ApproachSection;
