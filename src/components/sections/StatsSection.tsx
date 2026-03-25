const stats = [
  { end: 500, suffix: '+', label: 'Clienti Soddisfatti' },
  { end: 45, suffix: '', label: 'Modelli Disponibili' },
  { end: 12, suffix: '', label: 'Anni di Esperienza' },
  { end: 100, suffix: '%', label: 'Made to Order' },
];

const StatsSection = () => {
  return (
    <section
      className="relative"
      style={{
        background: '#D4781C',
        clipPath: 'polygon(0 6%, 100% 0, 100% 94%, 0 100%)',
        padding: '120px 0',
        marginTop: '-3rem',
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-[2]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-children">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center relative">
              {i > 0 && (
                <div
                  className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2"
                  style={{ width: 1, height: '60%', background: 'rgba(255,255,255,0.3)' }}
                />
              )}
              <span
                data-counter
                data-end={s.end}
                data-suffix={s.suffix}
                className="counter-value block"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                  color: 'white',
                  lineHeight: 1,
                }}
              >
                0{s.suffix}
              </span>
              <span
                className="uppercase block mt-2"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.75)',
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
