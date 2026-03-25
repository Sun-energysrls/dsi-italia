const ChiSiamoSection = () => {
  return (
    <section
      className="chi-siamo-section relative overflow-hidden"
      style={{
        background: '#FDFBF7',
        padding: '160px 0 100px',
        marginTop: '-5rem',
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="reveal from-left">
            <p
              className="uppercase font-bold mb-4"
              style={{ color: '#D4781C', fontSize: '0.7rem', letterSpacing: '0.25em', fontFamily: "'DM Sans', sans-serif" }}
            >
              CHI SIAMO
            </p>
            <h2
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, color: '#2A2520', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.15, marginBottom: '1.5rem' }}
            >
              Il ponte diretto tra la tecnologia cinese e l'agricoltura italiana
            </h2>
            <p style={{ color: '#4A443D', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1rem' }}>
              DSI nasce dall'esigenza concreta degli agricoltori italiani di accedere direttamente alle migliori macchine agricole cinesi, senza intermediari e a prezzi competitivi.
            </p>
            <p style={{ color: '#4A443D', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Importiamo, certifichiamo e consegniamo trattori professionali con configurazione su misura per ogni azienda agricola.
            </p>

            {/* Counters */}
            <div className="flex gap-8 flex-wrap">
              {[
                { end: 150, suffix: '+', label: 'Macchine Consegnate' },
                { end: 45, suffix: '', label: 'Modelli Disponibili' },
                { end: 98, suffix: '%', label: 'Soddisfazione Cliente' },
              ].map((c) => (
                <div key={c.label} className="text-center">
                  <span
                    data-counter
                    data-end={c.end}
                    data-suffix={c.suffix}
                    className="counter-value block"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '3rem', color: '#D4781C', lineHeight: 1 }}
                  >
                    0{c.suffix}
                  </span>
                  <span
                    className="uppercase block mt-1"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', color: '#4A443D' }}
                  >
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dark block */}
          <div className="reveal clip-reveal">
            <div
              className="relative overflow-hidden"
              style={{
                background: '#1B3A2D',
                borderRadius: 12,
                padding: '48px',
                minHeight: 400,
              }}
            >
              {/* DSI watermark */}
              <span
                className="absolute select-none pointer-events-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '8rem',
                  color: 'rgba(255,255,255,0.04)',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  lineHeight: 1,
                }}
              >
                DSI
              </span>

              {/* Content text */}
              <div className="relative z-10" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                <p className="mb-4">
                  La nostra missione è rendere accessibile la migliore tecnologia agricola cinese al mercato italiano, con un servizio completo dalla selezione alla consegna.
                </p>
                <p>
                  Ogni trattore viene sottoposto a rigorosi controlli qualità e certificazione CE prima della consegna al cliente finale.
                </p>
              </div>

              {/* Accent block */}
              <div
                className="reveal scale-in absolute"
                style={{
                  bottom: 32,
                  right: 32,
                  background: '#D4781C',
                  padding: '20px 28px',
                  borderRadius: 8,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Noto Serif SC', serif",
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: 'white',
                    display: 'block',
                    lineHeight: 1.2,
                  }}
                >
                  载新
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginTop: 4,
                  }}
                >
                  Portare l'Innovazione
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .chi-siamo-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 110%;
          height: 5rem;
          background: #FDFBF7;
          border-radius: 50% 50% 0 0 / 100% 100% 0 0;
          z-index: 1;
        }
      `}</style>
    </section>
  );
};

export default ChiSiamoSection;
