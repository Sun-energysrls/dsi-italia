import { useRef } from "react";

const advantages = [
  {
    number: "01",
    title: "Import Diretto",
    desc: "Importiamo direttamente dalla produzione, eliminando intermediari e garantendo il miglior rapporto qualità-prezzo.",
    icon: "🌏",
  },
  {
    number: "02",
    title: "Personalizzazione Totale",
    desc: "Ogni macchina viene configurata secondo le tue esigenze specifiche: colori, potenza, accessori e allestimenti.",
    icon: "⚙️",
  },
  {
    number: "03",
    title: "Supporto Tecnico",
    desc: "Team di tecnici specializzati per assistenza, manutenzione e formazione sulle macchine consegnate.",
    icon: "🛠️",
  },
  {
    number: "04",
    title: "Consegna Chiavi in Mano",
    desc: "Gestiamo logistica, documentazione doganale e omologazione per una consegna completa e senza pensieri.",
    icon: "🔑",
  },
];

const AdvantagesSection = () => {
  return (
    <section
      className="section-diag-light relative"
      style={{ background: '#FDFBF7', padding: '140px 0 100px' }}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-[2]">
        <div className="text-center mb-16 reveal from-bottom">
          <div className="mx-auto mb-6" style={{ width: 40, height: 2, backgroundColor: '#D4781C' }} />
          <p
            className="uppercase font-bold mb-3"
            style={{ color: '#D4781C', fontSize: '0.7rem', letterSpacing: '0.25em', fontFamily: "'DM Sans', sans-serif" }}
          >
            I NOSTRI VANTAGGI
          </p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, color: '#2A2520', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            Perché scegliere DSI
          </h2>
          <p style={{ color: '#4A443D', fontSize: '1rem', maxWidth: 540, margin: '12px auto 0' }}>
            Quattro pilastri che ci rendono il partner ideale per la tua azienda agricola
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto stagger-children">
          {advantages.map((adv) => (
            <AdvantageCard key={adv.number} adv={adv} />
          ))}
        </div>
      </div>
    </section>
  );
};

function AdvantageCard({ adv }: { adv: typeof advantages[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className="relative transition-all duration-300 flex flex-col overflow-hidden group"
      style={{
        background: '#FFFFFF',
        border: '1px solid #E8E4DF',
        borderRadius: 8,
        padding: '40px 40px 36px',
        minHeight: 240,
        willChange: 'transform',
      }}
      onMouseMove={(e) => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(212,120,28,0.06), rgba(255,255,255,0.04) 70%), #FFFFFF`;
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = '#D4781C';
        el.style.transform = 'translateY(-8px)';
        el.style.boxShadow = '0 24px 48px rgba(212,120,28,0.15)';
        // Scale the top bar
        const bar = el.querySelector('.accent-bar') as HTMLElement;
        if (bar) bar.style.transform = 'scaleX(1)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = '#E8E4DF';
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = 'none';
        el.style.background = '#FFFFFF';
        const bar = el.querySelector('.accent-bar') as HTMLElement;
        if (bar) bar.style.transform = 'scaleX(0)';
      }}
    >
      {/* Top accent bar */}
      <div
        className="accent-bar absolute top-0 left-0 right-0"
        style={{
          height: 3,
          background: '#D4781C',
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.4s ease',
        }}
      />

      {/* Decorative number */}
      <span
        className="absolute select-none pointer-events-none"
        style={{
          top: -10,
          right: 16,
          fontSize: '7rem',
          fontWeight: 800,
          fontFamily: "'Bebas Neue', sans-serif",
          color: 'rgba(212,120,28,0.06)',
          lineHeight: 1,
        }}
      >
        {adv.number}
      </span>

      {/* Icon + title */}
      <div className="flex items-center gap-3 mb-4 relative z-[1]">
        <span style={{ fontSize: '1.6rem' }}>{adv.icon}</span>
        <h3
          className="uppercase"
          style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#2A2520', fontSize: '1.1rem', letterSpacing: '0.06em' }}
        >
          {adv.title}
        </h3>
      </div>

      <p className="relative z-[1]" style={{ color: '#4A443D', lineHeight: 1.75, fontSize: '0.9rem' }}>
        {adv.desc}
      </p>
    </div>
  );
}

export default AdvantagesSection;
