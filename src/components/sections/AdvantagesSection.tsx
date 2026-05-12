import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const PX = {
  ink: '#1a1a1a',
  paper: '#f3eee5',
  line: '#E6DFD2',
  muted: '#7a7366',
  copper: '#d4781c',
};

const items = [
  {
    n: '01',
    kicker: 'Filiera',
    t: 'Import diretto, zero intermediari.',
    d: "Trattiamo con le linee di produzione e gestiamo in autonomia la logistica internazionale. Nessuna catena di rivenditori che gonfia i costi: dalla manifattura all'azienda agricola.",
    kpi: [{ v: '−24%', l: 'Rispetto al listino ufficiale medio' }, { v: '100%', l: 'Import gestito da DSI' }],
    link: '/trattori',
  },
  {
    n: '02',
    kicker: 'Configurazione',
    t: 'Costruito sulla tua azienda.',
    d: 'Potenza, trasmissione, cabina, idraulica, pneumatici e allestimenti. Ogni trattore viene configurato prima della produzione, non assemblato al volo sul piazzale.',
    kpi: [{ v: '50+', l: 'Variabili di configurazione' }, { v: '4–8 sett.', l: 'Tempo medio di consegna' }],
    link: '/configuratore',
  },
  {
    n: '03',
    kicker: 'Assistenza',
    t: 'Ricambi originali e autodiagnosi.',
    d: "Sistemi di autodiagnosi integrati per monitorare l'efficienza della macchina. Fornitura rapida di ricambi originali garantiti direttamente dalla casa madre.",
    kpi: [{ v: '100%', l: 'Ricambi originali' }, { v: 'Smart', l: 'Autodiagnosi integrata' }],
    link: '/assistenza',
  },
  {
    n: '04',
    kicker: 'Consegna',
    t: 'Chiavi in mano, documentazione inclusa.',
    d: "Sdoganamento, omologazione italiana, immatricolazione e formazione all'uso. Tu firmi una volta: a noi il resto.",
    kpi: [{ v: 'CE', l: 'Omologazione inclusa' }, { v: '1 firma', l: 'Un unico referente contrattuale' }],
    link: '/contatti',
  },
];

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)');
    setMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return mobile;
}

const AdvantagesSection = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const isMobile = useIsMobile();
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Mobile: auto-highlight items as they scroll into view
  useEffect(() => {
    if (!isMobile) return;
    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setOpenIdx(i);
        },
        { threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [isMobile]);

  return (
    <section
      className="relative"
      style={{ background: "transparent", padding: "clamp(80px, 10vw, 160px) 0", overflowX: 'clip' }}
    >
      <div
        aria-hidden="true"
        className="absolute w-full flex justify-center pointer-events-none select-none hidden lg:flex"
        style={{
          top: '25%',
          left: 0,
          fontWeight: 900,
          fontStyle: 'italic',
          fontSize: 'clamp(120px, 18vw, 300px)',
          color: 'rgba(249,115,22,0.06)',
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}
      >
        Vantaggi
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-16 lg:mb-24">
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
                <span aria-hidden="true" style={{ width: 28, height: 1, background: 'currentColor', opacity: 0.5 }} />
                I nostri vantaggi
              </span>
            </AnimatedSection>
            <AnimatedSection from="up" distance={30} duration={0.9} delay={0.1}>
              <h2
                style={{
                  fontWeight: 400,
                  fontSize: 'clamp(36px, 5vw, 72px)',
                  lineHeight: 1.02,
                  letterSpacing: '-0.025em',
                  color: PX.ink,
                  margin: '28px 0 0',
                  textWrap: 'balance',
                }}
              >
                Quattro promesse,<br />
                <em style={{ color: PX.copper, fontStyle: 'italic', fontWeight: 400 }}>messe nero su bianco.</em>
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection from="none" duration={0.6} delay={0.2}>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.75,
                color: PX.muted,
                margin: 0,
                maxWidth: 460,
              }}
              className="lg:justify-self-end"
            >
              Quello che ci rende diversi non è una lista di slogan, ma un protocollo operativo che
              ogni cliente verifica al primo ordine.
            </p>
          </AnimatedSection>
        </div>

        {/* Timeline */}
        <div className="relative">
          {items.map((it, i) => {
            const open = openIdx === i;
            return (
              <AnimatedSection key={it.n} from="up" distance={20} duration={0.7} delay={0.2 + i * 0.1}>
                <div
                  ref={el => { itemRefs.current[i] = el; }}
                  className="cursor-pointer"
                  onMouseEnter={() => { if (!isMobile) setOpenIdx(i); }}
                  onClick={() => setOpenIdx(i)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr',
                    gap: 0,
                    padding: '32px 0',
                    borderBottom: i === items.length - 1 ? 'none' : `1px solid ${PX.line}`,
                    position: 'relative',
                    transition: 'all .4s ease',
                  }}
                >
                  {/* ── Desktop: numeral + line ── */}
                  <div
                    className="relative text-right hidden lg:flex items-start justify-end"
                    style={{ width: 160, paddingRight: 40 }}
                  >
                    <span
                      style={{
                        fontWeight: 300,
                        fontStyle: 'italic',
                        fontSize: 'clamp(60px, 8vw, 120px)',
                        lineHeight: 0.9,
                        color: open ? PX.copper : 'rgba(26,26,26,0.12)',
                        letterSpacing: '-0.04em',
                        display: 'inline-block',
                        transition: 'color .4s ease',
                      }}
                    >
                      {it.n}
                    </span>
                    {/* Vertical segment with dot */}
                    <div
                      aria-hidden="true"
                      className="absolute"
                      style={{
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: 1,
                        background: i === 0
                          ? `linear-gradient(180deg, transparent 0%, ${PX.copper}55 40%, ${PX.copper}55 100%)`
                          : i === items.length - 1
                          ? `linear-gradient(180deg, ${PX.copper}55 0%, ${PX.copper}55 60%, transparent 100%)`
                          : `${PX.copper}55`,
                      }}
                    />
                    <span
                      aria-hidden="true"
                      className="absolute"
                      style={{
                        right: -7,
                        top: 32,
                        width: 14,
                        height: 14,
                        borderRadius: '50%',
                        background: open ? PX.copper : PX.paper,
                        border: `2px solid ${open ? PX.copper : PX.copper + '55'}`,
                        boxShadow: open ? `0 0 0 5px ${PX.copper}22` : 'none',
                        transition: 'all .3s ease',
                        zIndex: 1,
                      }}
                    />
                  </div>

                  {/* ── Desktop content (second column) ── */}
                  <div className="hidden lg:block pl-10 pt-1">
                    <div
                      style={{
                        fontSize: 11,
                        letterSpacing: '0.28em',
                        textTransform: 'uppercase',
                        color: PX.copper,
                        fontWeight: 600,
                        marginBottom: 14,
                      }}
                    >
                      {it.kicker}
                    </div>
                    <h3
                      style={{
                        fontWeight: 400,
                        fontSize: 'clamp(22px, 3vw, 42px)',
                        lineHeight: 1.15,
                        letterSpacing: '-0.015em',
                        color: PX.ink,
                        margin: 0,
                        textWrap: 'balance',
                        maxWidth: 720,
                      }}
                    >
                      {it.t}
                    </h3>
                    <p
                      style={{
                        fontSize: 16,
                        lineHeight: 1.75,
                        color: PX.muted,
                        margin: '20px 0 0',
                        maxWidth: 680,
                      }}
                    >
                      {it.d}
                    </p>

                    {/* KPI strip */}
                    <div
                      style={{
                        maxHeight: open ? 500 : 0,
                        overflow: 'hidden',
                        transition: 'max-height .5s cubic-bezier(.2,.8,.2,1), opacity .4s ease .1s, margin-top .3s ease',
                        opacity: open ? 1 : 0,
                        marginTop: open ? 28 : 0,
                      }}
                    >
                      <div
                        className="flex flex-row gap-10 items-start pb-6"
                        style={{ paddingTop: 24, borderTop: `1px solid ${PX.line}` }}
                      >
                        {it.kpi.map(k => (
                          <div key={k.l}>
                            <div
                              style={{
                                fontWeight: 400,
                                fontSize: 'clamp(24px, 3vw, 36px)',
                                color: PX.copper,
                                letterSpacing: '-0.02em',
                                lineHeight: 1,
                              }}
                            >
                              {k.v}
                            </div>
                            <div
                              style={{
                                fontSize: 12,
                                color: PX.muted,
                                marginTop: 8,
                                maxWidth: 220,
                                lineHeight: 1.5,
                              }}
                            >
                              {k.l}
                            </div>
                          </div>
                        ))}
                        <div className="flex flex-1 items-end justify-end">
                          <Link
                            to={it.link}
                            className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                            style={{
                              fontSize: 11,
                              letterSpacing: '0.2em',
                              textTransform: 'uppercase',
                              color: PX.copper,
                              fontWeight: 600,
                            }}
                          >
                            Approfondisci <ArrowRight size={14} color={PX.copper} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── Mobile layout ── */}
                  <div className="lg:hidden" style={{ gridColumn: '1 / -1' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        style={{
                          fontStyle: 'italic',
                          fontWeight: 300,
                          fontSize: 48,
                          color: open ? PX.copper : 'rgba(26,26,26,0.15)',
                          transition: 'color .4s ease',
                          lineHeight: 1,
                        }}
                      >
                        {it.n}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          letterSpacing: '0.28em',
                          textTransform: 'uppercase',
                          color: open ? PX.copper : PX.muted,
                          fontWeight: 600,
                          transition: 'color .4s ease',
                        }}
                      >
                        {it.kicker}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontWeight: 400,
                        fontSize: 'clamp(22px, 3vw, 42px)',
                        lineHeight: 1.15,
                        letterSpacing: '-0.015em',
                        color: open ? PX.ink : 'rgba(26,26,26,0.35)',
                        margin: 0,
                        textWrap: 'balance',
                        transition: 'color .4s ease',
                      }}
                    >
                      {it.t}
                    </h3>
                    <p
                      style={{
                        fontSize: 16,
                        lineHeight: 1.75,
                        color: open ? PX.muted : 'rgba(26,26,26,0.2)',
                        margin: '16px 0 0',
                        transition: 'color .4s ease',
                      }}
                    >
                      {it.d}
                    </p>

                    {/* Mobile KPI */}
                    <div
                      style={{
                        maxHeight: open ? 500 : 0,
                        overflow: 'hidden',
                        transition: 'max-height .5s cubic-bezier(.2,.8,.2,1), opacity .4s ease .1s, margin-top .3s ease',
                        opacity: open ? 1 : 0,
                        marginTop: open ? 20 : 0,
                      }}
                    >
                      <div
                        className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-start pb-4"
                        style={{ paddingTop: 20, borderTop: `1px solid ${PX.line}` }}
                      >
                        {it.kpi.map(k => (
                          <div key={k.l}>
                            <div
                              style={{
                                fontWeight: 400,
                                fontSize: 24,
                                color: PX.copper,
                                letterSpacing: '-0.02em',
                                lineHeight: 1,
                              }}
                            >
                              {k.v}
                            </div>
                            <div style={{ fontSize: 12, color: PX.muted, marginTop: 6, lineHeight: 1.5 }}>
                              {k.l}
                            </div>
                          </div>
                        ))}
                      </div>
                      <Link
                        to={it.link}
                        className="inline-flex items-center gap-2"
                        style={{
                          fontSize: 11,
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: PX.copper,
                          fontWeight: 600,
                          paddingBottom: 8,
                        }}
                      >
                        Approfondisci <ArrowRight size={14} color={PX.copper} />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
