const steps = [
  {
    num: '01',
    title: 'Scegli il Modello',
    desc: 'Esplora la gamma Tavol e scegli il modello che si adatta alla tua azienda agricola. Dai 70 ai 240 HP.',
    side: 'left' as const,
  },
  {
    num: '02',
    title: 'Personalizza',
    desc: 'Configura colori, cambio, accessori e allestimento con il nostro configuratore guidato.',
    side: 'right' as const,
  },
  {
    num: '03',
    title: 'Certificazione & Spedizione',
    desc: 'Gestiamo tutta la documentazione CE, omologazione e la logistica dall\'origine.',
    side: 'left' as const,
  },
  {
    num: '04',
    title: 'Consegna & Assistenza',
    desc: 'Il tuo trattore arriva pronto all\'uso con supporto tecnico dedicato post-vendita.',
    side: 'right' as const,
  },
];

const ProcessoSection = () => {
  return (
    <section
      className="relative"
      style={{ background: '#1B3A2D', padding: '100px 0', color: 'white' }}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-[2]">
        {/* Heading */}
        <div className="text-center mb-16 reveal from-bottom">
          <h2
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'white', letterSpacing: '0.04em' }}
          >
            COME FUNZIONA
          </h2>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', marginTop: 8 }}>
            Il Nostro Processo
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2"
            style={{
              width: 2,
              background: 'linear-gradient(to bottom, transparent 0%, #D4781C 20%, #D4781C 80%, transparent 100%)',
            }}
          />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`relative flex flex-col md:flex-row items-center gap-6 reveal ${step.side === 'left' ? 'from-left' : 'from-right'}`}
              >
                {/* Left content */}
                <div className={`md:w-[45%] ${step.side === 'right' ? 'md:order-2 md:text-left' : 'md:text-right'}`}>
                  {step.side === 'left' && <StepCard step={step} />}
                  {step.side === 'right' && <div className="hidden md:block" />}
                </div>

                {/* Center dot */}
                <div className="hidden md:flex items-center justify-center relative z-10" style={{ width: '10%' }}>
                  <div
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: '50%',
                      background: '#D4781C',
                      border: '3px solid #1B3A2D',
                      boxShadow: '0 0 0 4px rgba(212,120,28,0.3)',
                    }}
                  />
                </div>

                {/* Right content */}
                <div className={`md:w-[45%] ${step.side === 'left' ? 'md:order-2' : ''}`}>
                  {step.side === 'right' && <StepCard step={step} />}
                  {step.side === 'left' && <div className="hidden md:block" />}
                </div>

                {/* Mobile: show card always */}
                <div className="md:hidden w-full">
                  {step.side === 'left' ? null : <StepCard step={step} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function StepCard({ step }: { step: typeof steps[0] }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 8,
        padding: 32,
      }}
    >
      <span
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '3rem',
          color: 'rgba(212,120,28,0.5)',
          lineHeight: 1,
          display: 'block',
          marginBottom: 8,
        }}
      >
        {step.num}
      </span>
      <h3
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '1.5rem',
          color: 'white',
          letterSpacing: '0.04em',
          marginBottom: 8,
        }}
      >
        {step.title}
      </h3>
      <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.7 }}>
        {step.desc}
      </p>
    </div>
  );
}

export default ProcessoSection;
