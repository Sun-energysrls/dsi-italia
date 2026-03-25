import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { tractors } from "@/data/tractors";
import { getTractorPhoto } from "@/data/tractor-images";

const featuredIds = ["tavol-1804", "tavol-704", "tavol-1204"];

const GammaTrattoriSection = () => {
  const featured = featuredIds
    .map((id) => tractors.find((t) => t.id === id))
    .filter(Boolean) as typeof tractors;

  const [main, ...small] = featured;

  return (
    <section
      className="section-diag-dark relative overflow-hidden"
      style={{ background: '#1B3A2D', padding: '140px 0 100px', color: 'white' }}
    >
      {/* Background text */}
      <span
        className="absolute select-none pointer-events-none whitespace-nowrap overflow-hidden"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(6rem, 14vw, 12rem)',
          color: 'rgba(255,255,255,0.03)',
          bottom: '-2rem',
          left: 0,
          lineHeight: 1,
        }}
      >
        TRATTORI
      </span>

      <div className="container mx-auto px-4 lg:px-8 relative z-[2]">
        <div className="mb-12 reveal from-bottom">
          <p
            className="uppercase font-bold mb-3"
            style={{ color: '#D4781C', fontSize: '0.7rem', letterSpacing: '0.25em', fontFamily: "'DM Sans', sans-serif" }}
          >
            I NOSTRI MODELLI
          </p>
          <h2
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', letterSpacing: '0.04em' }}
          >
            GAMMA TRATTORI
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 stagger-children">
          {/* Featured large card */}
          {main && (
            <TractorCard tractor={main} large />
          )}

          {/* Right column: 2 smaller cards */}
          <div className="flex flex-col gap-5">
            {small.map((t) => (
              <TractorCard key={t.id} tractor={t} />
            ))}
          </div>
        </div>

        <div className="text-center mt-12 reveal from-bottom">
          <Link to="/trattori" className="btn-outline-light">
            Vedi tutta la gamma <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

function TractorCard({ tractor, large }: { tractor: typeof tractors[0]; large?: boolean }) {
  const photo = getTractorPhoto(tractor.id);

  return (
    <Link
      to={`/trattori/${tractor.id}`}
      className="relative block overflow-hidden group"
      style={{
        borderRadius: 8,
        minHeight: large ? 500 : 230,
        border: '1px solid rgba(255,255,255,0.1)',
        transition: 'transform 0.5s ease',
        ...(large ? { gridRow: 'span 2' } : {}),
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 5;
        const rotateX = -((y / rect.height) - 0.5) * 5;
        e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        e.currentTarget.style.transition = 'transform 0.5s ease';
        const img = e.currentTarget.querySelector('img');
        if (img) { img.style.transform = 'scale(1)'; img.style.transition = 'transform 0.5s ease'; }
      }}
    >
      <img
        src={photo}
        alt={tractor.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
        loading="lazy"
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(27,58,45,0.95) 0%, rgba(27,58,45,0.3) 50%, transparent 100%)' }}
      />
      {/* HP Badge */}
      <div
        className="absolute top-4 right-4 font-bold"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          background: '#D4781C',
          borderRadius: 4,
          padding: '4px 12px',
          fontSize: '0.85rem',
          color: 'white',
        }}
      >
        {tractor.hp} HP
      </div>
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <span
          className="uppercase block mb-1"
          style={{ color: '#D4781C', fontSize: '0.65rem', letterSpacing: '0.18em', fontFamily: "'DM Sans', sans-serif" }}
        >
          {tractor.category}
        </span>
        <h3
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: large ? '2rem' : '1.4rem', color: 'white', marginBottom: 6 }}
        >
          {tractor.name}
        </h3>
        {large && (
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: 12, maxWidth: 400 }}>
            {tractor.shortDescription}
          </p>
        )}
        <span
          className="inline-flex items-center gap-1 uppercase font-semibold transition-all duration-300"
          style={{ color: '#D4781C', fontSize: '0.75rem', letterSpacing: '0.1em' }}
        >
          Scopri <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}

export default GammaTrattoriSection;
