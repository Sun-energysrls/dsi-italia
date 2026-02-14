import { useParams, Link } from "react-router-dom";
import { Settings, CheckCircle, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
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
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-display font-bold text-foreground mb-4">Prodotto non trovato</h1>
          <Link to="/trattori" className="text-secondary font-semibold">Torna alla gamma</Link>
        </div>
      </Layout>
    );
  }

  const specs = [
    { label: "Potenza", value: `${tractor.hp} HP` },
    { label: "Tipo motore", value: tractor.engine },
    { label: "Tipo cambio", value: tractor.transmission },
    { label: "Trazione", value: tractor.traction },
    { label: "Peso", value: tractor.weight },
    { label: "Dimensioni", value: tractor.dimensions },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <Link to="/trattori" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Torna alla gamma
          </Link>
        </div>
        <div className="container mx-auto px-4 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-elevated">
              <img src={imageMap[tractor.image]} alt={tractor.name} className="w-full h-auto object-cover" />
            </div>
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">{tractor.hpRange}</span>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2 mb-4">{tractor.name}</h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{tractor.shortDescription}</p>
              <Link
                to={`/configuratore?modello=${tractor.id}`}
                className="gradient-accent text-accent-foreground px-8 py-4 rounded-md text-base font-semibold uppercase tracking-wide inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Settings className="h-5 w-5" />
                Configura questo Trattore
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">Specifiche Tecniche</h2>
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <table className="w-full">
              <tbody>
                {specs.map((spec, i) => (
                  <tr key={spec.label} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                    <td className="px-6 py-4 font-semibold text-foreground text-sm w-1/3">{spec.label}</td>
                    <td className="px-6 py-4 text-muted-foreground text-sm">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">Caratteristiche Principali</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tractor.features.map((f) => (
              <div key={f} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border">
                <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-foreground text-sm font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">Accessori Disponibili</h2>
          <div className="flex flex-wrap gap-3">
            {tractor.accessories.map((a) => (
              <span key={a} className="bg-muted text-foreground px-4 py-2 rounded-md text-sm font-medium">{a}</span>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to={`/configuratore?modello=${tractor.id}`}
              className="gradient-accent text-accent-foreground px-8 py-4 rounded-md text-base font-semibold uppercase tracking-wide inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Settings className="h-5 w-5" />
              Configura questo Trattore
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SchedaProdotto;
