import { Lock } from "lucide-react";
import tractorLarge from "@/assets/tractor-large.jpg";

const comingSoonBrands = [
  {
    name: "Zoomlion",
    country: "Cina",
    initials: "ZL",
    tagline: "Smart Agriculture Leader",
    description:
      "Colosso globale fondato nel 1992 a Changsha. Pioniere nell'agricoltura intelligente con integrazione di AI e tecnologia 5G nelle macchine agricole. In arrivo una gamma completa di trattori high-tech.",
    eta: "Prossimamente",
    color: "#1a5fa8",
  },
  {
    name: "Nuovi Modelli in Arrivo",
    country: "Cina",
    initials: "+",
    tagline: "Direttamente dalla Produzione",
    description:
      "DSI amplia continuamente il proprio portfolio selezionando i migliori produttori cinesi. Nuovi trattori ad alta efficienza e tecnologia avanzata saranno disponibili nei prossimi mesi.",
    eta: "In Arrivo",
    color: "#556b5a",
  },
];

const ComingSoonSection = () => {
  return (
    <section
      className="relative"
      style={{ background: '#FDFBF7', padding: '100px 0' }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 reveal from-bottom">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lock className="h-5 w-5" style={{ color: '#D4781C' }} />
            <span
              className="uppercase font-bold"
              style={{ color: '#D4781C', fontSize: '0.75rem', letterSpacing: '0.2em', fontFamily: "'DM Sans', sans-serif" }}
            >
              Prossimamente
            </span>
          </div>
          <h2
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, color: '#2A2520', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            In Arrivo
          </h2>
          <p style={{ color: '#4A443D', maxWidth: 560, fontSize: '1rem', margin: '12px auto 0' }}>
            Nuovi brand partner e modelli esclusivi in fase di importazione.
            Seguici per essere il primo a saperlo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto stagger-children">
          {comingSoonBrands.map((brand) => (
            <div
              key={brand.name}
              className="relative overflow-hidden transition-all duration-300"
              style={{
                borderRadius: 8,
                border: '1px solid #E8E4DF',
                minHeight: 380,
                background: 'white',
              }}
            >
              {/* Blurred image background */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${tractorLarge})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'grayscale(100%) opacity(0.08)',
                }}
              />

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col h-full" style={{ minHeight: 380 }}>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{
                        width: 48, height: 48, borderRadius: '50%',
                        background: brand.color, color: 'white',
                        fontWeight: 700, fontSize: '0.9rem',
                      }}
                    >
                      {brand.initials}
                    </div>
                    <div>
                      <span className="block font-bold" style={{ color: '#2A2520', fontSize: '1.1rem', fontFamily: "'Bebas Neue', sans-serif" }}>
                        {brand.name}
                      </span>
                      <span style={{ color: '#999', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        {brand.country}
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(212,120,28,0.1)' }}
                  >
                    <Lock className="h-4 w-4" style={{ color: '#D4781C' }} />
                  </div>
                </div>

                <p className="font-semibold italic mb-3" style={{ color: brand.color, fontSize: '0.85rem' }}>
                  {brand.tagline}
                </p>
                <p className="flex-grow" style={{ color: '#4A443D', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  {brand.description}
                </p>

                <div className="mt-6">
                  <span
                    className="inline-block uppercase font-semibold"
                    style={{
                      background: 'rgba(212,120,28,0.08)', color: '#D4781C',
                      padding: '6px 16px', borderRadius: 4,
                      fontSize: '0.7rem', letterSpacing: '0.12em',
                    }}
                  >
                    {brand.eta}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
