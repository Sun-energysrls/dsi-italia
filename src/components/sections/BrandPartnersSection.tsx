import { Link } from "react-router-dom";
import { ArrowRight, Lock } from "lucide-react";
import { brands } from "@/data/brands";

const comingSoonBrands = [
  {
    name: "Zoomlion",
    initials: "ZL",
    country: "Cina",
    tagline: "Smart Agriculture Leader",
    description: "Colosso globale fondato nel 1992. Pioniere nell'agricoltura intelligente con tecnologia AI e 5G.",
    color: "#1a5fa8",
  },
  {
    name: "Nuovi Modelli in Arrivo",
    initials: "+",
    country: "Cina",
    tagline: "Direttamente dalla Produzione",
    description: "DSI amplia continuamente il proprio portfolio selezionando i migliori produttori cinesi. Nuovi trattori ad alta efficienza saranno disponibili nei prossimi mesi.",
    color: "#556b5a",
  },
];

const BrandPartnersSection = () => {
  return (
    <section
      id="brand-partner"
      className="section-diag-dark relative"
      style={{ background: '#1B3A2D', padding: '140px 0 100px', color: 'white' }}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-[2]">
        <div className="text-center mb-16 reveal from-bottom">
          <p
            className="uppercase font-bold mb-3"
            style={{ color: '#D4781C', fontSize: '0.7rem', letterSpacing: '0.25em', fontFamily: "'DM Sans', sans-serif" }}
          >
            I NOSTRI PARTNER
          </p>
          <h2
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'white', letterSpacing: '0.04em' }}
          >
            Brand di Eccellenza
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', maxWidth: 540, margin: '12px auto 0' }}>
            I nostri brand partner selezionati tra i migliori produttori mondiali.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch stagger-children">
          {/* Active Tavol card */}
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group flex flex-col justify-between transition-all duration-350 h-full"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 8,
                padding: 40,
                minHeight: 320,
                willChange: 'transform',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = 'rgba(255,255,255,0.1)';
                el.style.borderColor = 'rgba(212,120,28,0.4)';
                el.style.transform = 'translateY(-6px)';
                el.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = 'rgba(255,255,255,0.06)';
                el.style.borderColor = 'rgba(255,255,255,0.12)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}
            >
              <div>
                <div
                  className="flex items-center justify-center mb-5"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: 6,
                    padding: '12px 16px',
                    width: 'fit-content',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'white',
                  }}
                >
                  {brand.initials}
                </div>
                <h3
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: 'white', marginBottom: 4 }}
                >
                  {brand.name}
                </h3>
                <span
                  className="block mb-3"
                  style={{ color: '#D4781C', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}
                >
                  {brand.country}
                </span>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.7, margin: '16px 0' }}>
                  {brand.description}
                </p>
              </div>
              <Link
                to="/trattori"
                className="group/link inline-flex items-center gap-1 transition-all duration-300"
                style={{ color: '#D4781C', fontWeight: 600, letterSpacing: '0.08em', fontSize: '0.8rem', textTransform: 'uppercase' }}
              >
                Scopri modelli <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}

          {/* Coming Soon locked cards */}
          {comingSoonBrands.map((brand) => (
            <div
              key={brand.name}
              className="relative flex flex-col justify-between h-full overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8,
                padding: 40,
                minHeight: 320,
              }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(0,0,0,0.15)' }} />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="flex items-center justify-center"
                    style={{
                      background: brand.color,
                      borderRadius: 6,
                      padding: '12px 16px',
                      width: 'fit-content',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'white',
                      opacity: 0.7,
                    }}
                  >
                    {brand.initials}
                  </div>
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(212,120,28,0.1)' }}
                  >
                    <Lock className="h-4 w-4" style={{ color: '#D4781C' }} />
                  </div>
                </div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: 'rgba(255,255,255,0.6)', marginBottom: 4 }}>
                  {brand.name}
                </h3>
                <span
                  className="block mb-1"
                  style={{ color: 'rgba(212,120,28,0.6)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}
                >
                  {brand.country}
                </span>
                <p className="italic mb-3" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>
                  {brand.tagline}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', lineHeight: 1.7, margin: '16px 0' }}>
                  {brand.description}
                </p>
              </div>
              <div className="relative z-10">
                <span
                  className="inline-block uppercase font-semibold"
                  style={{ background: 'rgba(212,120,28,0.15)', color: '#D4781C', padding: '6px 16px', borderRadius: 4, fontSize: '0.7rem', letterSpacing: '0.12em' }}
                >
                  In Arrivo
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartnersSection;
