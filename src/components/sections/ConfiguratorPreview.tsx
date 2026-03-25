import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import tavol2604Preview from "@/assets/tavol-2604-2.png";

const previewFeatures = ["Colore", "Potenza", "Cambio", "Accessori"];
const pills = ["16 Modelli", "7 Step guidati", "Preventivo Gratuito", "Consegna in Italia"];

const ConfiguratorPreview = () => {
  return (
    <section
      className="section-diag-light relative overflow-hidden"
      style={{ background: '#FDFBF7', padding: '140px 0 100px' }}
    >
      {/* Decorative Chinese text */}
      <span
        className="absolute select-none pointer-events-none"
        style={{
          fontFamily: "'Noto Serif SC', serif",
          fontSize: 'clamp(6rem, 14vw, 12rem)',
          color: 'rgba(212,120,28,0.04)',
          top: '10%',
          right: '-5%',
          lineHeight: 1,
        }}
      >
        配置器
      </span>

      <div className="container mx-auto px-4 lg:px-8 relative z-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div className="reveal from-left">
            <p
              className="font-bold uppercase mb-3"
              style={{ color: '#D4781C', fontSize: '0.75rem', letterSpacing: '0.25em', fontFamily: "'DM Sans', sans-serif" }}
            >
              CONFIGURA LA TUA MACCHINA
            </p>
            <h2
              className="mb-4 uppercase tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, color: '#2A2520', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              Configura il tuo trattore ideale
            </h2>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {pills.map((pill) => (
                <span
                  key={pill}
                  style={{
                    border: '1px solid rgba(212,120,28,0.5)',
                    borderRadius: 20,
                    padding: '4px 14px',
                    fontSize: '0.65rem',
                    color: '#D4781C',
                    letterSpacing: '0.05em',
                    fontWeight: 600,
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>

            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: '#4A443D' }}
            >
              Il nostro configuratore avanzato ti permette di personalizzare ogni aspetto della tua macchina agricola.
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
              {previewFeatures.map((feat) => (
                <span
                  key={feat}
                  className="font-medium transition-all duration-200 cursor-default"
                  style={{
                    background: 'rgba(27,58,45,0.08)',
                    border: '1px solid rgba(27,58,45,0.2)',
                    borderRadius: 4,
                    color: '#2A2520',
                    padding: '8px 16px',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#D4781C';
                    (e.currentTarget as HTMLElement).style.color = '#D4781C';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(27,58,45,0.2)';
                    (e.currentTarget as HTMLElement).style.color = '#2A2520';
                  }}
                >
                  {feat}
                </span>
              ))}
            </div>

            <p style={{ color: '#4A443D', fontSize: '0.75rem', marginBottom: 24, opacity: 0.6 }}>
              Ricevi il tuo preventivo personalizzato in 24 ore
            </p>

            <Link to="/configuratore" className="btn-orange">
              Configura il tuo trattore
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Right: Image + animated cards */}
          <div className="reveal from-right">
            <div className="relative" style={{ minHeight: 420 }}>
              {/* Main card */}
              <div
                style={{
                  background: '#1B3A2D',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 12,
                  padding: '32px 24px 24px',
                  boxShadow: '0 32px 64px rgba(0,0,0,0.2)',
                }}
              >
                <p
                  className="text-center uppercase font-medium mb-4"
                  style={{
                    color: 'rgba(255,255,255,0.45)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.2em',
                  }}
                >
                  ANTEPRIMA CONFIGURAZIONE
                </p>

                {/* Tractor image */}
                <div className="flex justify-center mb-6">
                  <div
                    style={{
                      width: '100%',
                      maxWidth: 360,
                      background: 'hsl(0 0% 100%)',
                      borderRadius: 14,
                      padding: '14px',
                    }}
                  >
                    <img
                      src={tavol2604Preview}
                      alt="Trattore TAVOL 2604 configurabile"
                      style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.2))',
                      }}
                    />
                  </div>
                </div>

                {/* Floating config cards */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Colore', value: 'Verde DSI', dot: '#1B4332' },
                    { label: 'Potenza', value: '180 HP', dot: '#D4781C' },
                    { label: 'Cambio', value: 'Shuttle 16+8', dot: null },
                    { label: 'Status', value: 'Configurato ✓', dot: '#22c55e' },
                  ].map((card, i) => (
                    <div
                      key={card.label}
                      className="configurator-float-card"
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: 8,
                        padding: '12px 16px',
                        animationDelay: `${i * 0.8}s`,
                      }}
                    >
                      <span
                        className="block uppercase"
                        style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.55rem', letterSpacing: '0.12em', marginBottom: 4 }}
                      >
                        {card.label}
                      </span>
                      <div className="flex items-center gap-2">
                        {card.dot && (
                          <span
                            className="shrink-0 block"
                            style={{
                              width: 10,
                              height: 10,
                              borderRadius: '50%',
                              backgroundColor: card.dot,
                              ...(card.label === 'Colore' ? { animation: 'colorCycle 4s ease-in-out infinite' } : {}),
                            }}
                          />
                        )}
                        <span className="text-white font-semibold" style={{ fontSize: '0.8rem' }}>
                          {card.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mini stepper */}
                <div className="flex items-center justify-center gap-0 mt-5">
                  {['Scegli', 'Configura', 'Ricevi'].map((label, i) => (
                    <div key={label} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: '50%',
                            background: i <= 1 ? '#D4781C' : 'rgba(255,255,255,0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <span style={{ color: 'white', fontSize: '0.5rem', fontWeight: 700 }}>{i + 1}</span>
                        </div>
                        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.5rem', marginTop: 2 }}>{label}</span>
                      </div>
                      {i < 2 && (
                        <div style={{ width: 40, height: 1, background: i === 0 ? '#D4781C' : 'rgba(255,255,255,0.15)', margin: '0 4px', marginBottom: 14 }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .configurator-float-card {
          animation: floatIn 4s ease-in-out infinite;
          opacity: 0;
        }
        @keyframes floatIn {
          0%, 100% { opacity: 0; transform: translateY(8px); }
          15%, 85% { opacity: 1; transform: translateY(0); }
        }
        @keyframes colorCycle {
          0% { background-color: #1B4332; }
          25% { background-color: #D4781C; }
          50% { background-color: #1a5fa8; }
          75% { background-color: #8B0000; }
          100% { background-color: #1B4332; }
        }
      `}</style>
    </section>
  );
};

export default ConfiguratorPreview;
