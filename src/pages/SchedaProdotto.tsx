import { useParams, Link } from "react-router-dom";
import { Settings, CheckCircle, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { getTractorById } from "@/data/tractors";
import { getBrandById } from "@/data/brands";
import tractorLarge from "@/assets/tractor-large.jpg";
import tractorMedium from "@/assets/tractor-medium.jpg";
import tractorSmall from "@/assets/tractor-small.jpg";
import tractorCompact from "@/assets/tractor-compact.jpg";

const imageMap: Record<string, string> = {
  "tractor-large": tractorLarge,
  "tractor-medium": tractorMedium,
  "tractor-small": tractorSmall,
  "tractor-compact": tractorCompact,
};

const SchedaProdotto = () => {
  const { id } = useParams<{ id: string }>();
  const tractor = getTractorById(id || "");

  if (!tractor) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-28 text-center">
          <h1 className="text-3xl font-display font-bold text-foreground mb-4">Prodotto non trovato</h1>
          <Link to="/trattori" className="text-secondary font-semibold">Torna alla gamma</Link>
        </div>
      </Layout>
    );
  }

  const brand = getBrandById(tractor.brandId);

  const specLabels: Record<string, string> = {
    cilindrata: "Cilindrata",
    coppia: "Coppia max",
    normativa: "Normativa emissioni",
    sollevatore: "Capacità sollevatore",
    pto: "PTO",
    serbatoio: "Serbatoio",
    impianto_idraulico: "Impianto idraulico",
  };

  const baseSpecs = [
    { label: "Brand", value: brand?.name || "" },
    { label: "Potenza", value: `${tractor.hp} CV` },
    { label: "Tipo motore", value: tractor.engine },
    { label: "Tipo cambio", value: tractor.transmission },
    { label: "Trazione", value: tractor.traction },
    { label: "Peso", value: tractor.weight },
    { label: "Dimensioni", value: tractor.dimensions },
  ];

  const fullSpecs = Object.entries(tractor.fullTechnicalSpecs).map(([key, value]) => ({
    label: specLabels[key] || key,
    value,
  }));

  const specs = [...baseSpecs, ...fullSpecs];

  return (
    <Layout>
      <SeoHead
        title={`${tractor.name} ${brand?.name || ""} — DSI Import`}
        description={tractor.shortDescription}
        canonical={`https://dsi-italia.com/trattori/${tractor.id}`}
      />

      <section style={{ backgroundColor: "#1B4332" }}>
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <Link to="/trattori" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Torna alla gamma
          </Link>
        </div>
        <div className="container mx-auto px-4 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="overflow-hidden shadow-elevated group relative">
                <img src={imageMap[tractor.image]} alt={tractor.name} className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" />
                {brand && (
                  <span
                    className="absolute top-4 left-4 px-3 py-1.5 text-sm font-bold text-white uppercase tracking-wider"
                    style={{ backgroundColor: brand.color }}
                  >
                    {brand.name}
                  </span>
                )}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em]">{tractor.category} — {tractor.hpRange}</span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white mt-2 mb-4 uppercase tracking-tight">{tractor.name}</h1>
              <p className="text-white/50 text-lg mb-10 leading-relaxed">{tractor.shortDescription}</p>
              <Link
                to={`/configuratore?brand=${tractor.brandId}&modello=${tractor.id}`}
                className="gradient-accent text-accent-foreground px-10 py-4 rounded-sm text-base font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-elevated"
              >
                <Settings className="h-5 w-5" />
                Configura questo Trattore
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-black text-foreground mb-8 uppercase tracking-tight">Specifiche Tecniche</h2>
            <div className="bg-card border border-border overflow-hidden shadow-card">
              <table className="w-full">
                <tbody>
                  {specs.map((spec, i) => (
                    <tr key={spec.label} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                      <td className="px-6 py-4 font-bold text-foreground text-sm w-1/3 uppercase tracking-wide">{spec.label}</td>
                      <td className="px-6 py-4 text-muted-foreground text-sm">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-28" style={{ backgroundColor: "#1B4332" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-8 uppercase tracking-tight">Caratteristiche Principali</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tractor.features.map((f, i) => (
              <AnimatedSection key={f} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-4 border" style={{ backgroundColor: "hsl(154, 25%, 20%)", borderColor: "hsl(154, 25%, 28%)" }}>
                  <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                  <span className="text-sm font-medium text-white">{f}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-black text-foreground mb-8 uppercase tracking-tight">Accessori Disponibili</h2>
            <div className="flex flex-wrap gap-3">
              {tractor.accessories.map((a) => (
                <span key={a} className="bg-muted text-foreground px-4 py-2 text-sm font-medium border border-border">{a}</span>
              ))}
            </div>
            <div className="mt-14">
              <Link
                to={`/configuratore?brand=${tractor.brandId}&modello=${tractor.id}`}
                className="gradient-accent text-accent-foreground px-10 py-4 rounded-sm text-base font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-elevated"
              >
                <Settings className="h-5 w-5" />
                Configura questo Trattore
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default SchedaProdotto;
