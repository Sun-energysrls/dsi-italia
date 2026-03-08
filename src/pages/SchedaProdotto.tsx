import { useParams, Link } from "react-router-dom";
import { Settings, CheckCircle, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { getTractorById } from "@/data/tractors";
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
    { label: "Potenza", value: `${tractor.hp} HP` },
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
      {/* Hero */}
      <section className="bg-background border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <Link to="/trattori" className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary text-[11px] uppercase tracking-[0.15em] mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Torna alla gamma
          </Link>
        </div>
        <div className="container mx-auto px-4 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="overflow-hidden group">
                <img src={imageMap[tractor.image]} alt={tractor.name} className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <span className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em]">{tractor.category} — {tractor.hpRange}</span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black mt-2 mb-4 uppercase tracking-tight text-foreground">{tractor.name}</h1>
              <p className="text-muted-foreground text-base mb-10 leading-relaxed">{tractor.shortDescription}</p>
              <Link
                to={`/configuratore?modello=${tractor.id}`}
                className="border border-secondary text-secondary px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] inline-flex items-center gap-2 hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                <Settings className="h-4 w-4" />
                Configura questo Trattore
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-black text-foreground mb-8 uppercase tracking-tight">Specifiche Tecniche</h2>
            <div className="bg-card border border-border/30 overflow-hidden">
              <table className="w-full">
                <tbody>
                  {specs.map((spec, i) => (
                    <tr key={spec.label} className={`border-b border-border/20 last:border-0 ${i % 2 === 0 ? "bg-card" : "bg-muted/20"}`}>
                      <td className="px-6 py-4 font-bold text-foreground/80 text-[10px] w-1/3 uppercase tracking-[0.15em]">{spec.label}</td>
                      <td className="px-6 py-4 text-muted-foreground text-sm">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-card border-y border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-black mb-8 uppercase tracking-tight text-foreground">Caratteristiche Principali</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30">
            {tractor.features.map((f, i) => (
              <AnimatedSection key={f} delay={i * 0.05}>
                <div className="flex items-center gap-3 bg-card p-5">
                  <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                  <span className="text-sm font-medium text-foreground/80">{f}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-black text-foreground mb-8 uppercase tracking-tight">Accessori Disponibili</h2>
            <div className="flex flex-wrap gap-2">
              {tractor.accessories.map((a) => (
                <span key={a} className="bg-card text-foreground/80 px-4 py-2 text-sm font-medium border border-border/30">{a}</span>
              ))}
            </div>
            <div className="mt-14">
              <Link
                to={`/configuratore?modello=${tractor.id}`}
                className="border border-secondary text-secondary px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] inline-flex items-center gap-2 hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                <Settings className="h-4 w-4" />
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
