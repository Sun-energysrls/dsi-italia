import { useParams, Link } from "react-router-dom";
import { Settings, ArrowLeft, CheckCircle, Zap, Cpu, Settings2, Weight, Gauge, ArrowRight } from "lucide-react";
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
        <div className="min-h-[60vh] flex items-center justify-center" style={{ background: "#F5F2EE" }}>
          <div className="text-center">
            <h1 className="text-3xl font-display font-bold mb-4" style={{ color: "#1a1a1a" }}>
              Trattore non trovato
            </h1>
            <Link to="/trattori" className="font-semibold" style={{ color: "#F97316" }}>
              Torna al catalogo
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const tractorImage = imageMap[tractor.image] || tractorMedium;
  const specs = tractor.fullTechnicalSpecs || {};

  const specLabels: Record<string, { label: string; icon: React.ReactNode }> = {
    potenza_kw: { label: "Potenza kW", icon: <Zap className="h-4 w-4" /> },
    cilindrata: { label: "Cilindrata", icon: <Cpu className="h-4 w-4" /> },
    pto: { label: "Presa di Forza", icon: <Settings2 className="h-4 w-4" /> },
    pneumatici_ant: { label: "Pneumatici Ant.", icon: <Gauge className="h-4 w-4" /> },
    pneumatici_post: { label: "Pneumatici Post.", icon: <Gauge className="h-4 w-4" /> },
    frizione: { label: "Frizione", icon: <Settings2 className="h-4 w-4" /> },
    idraulica: { label: "Idraulica", icon: <Settings2 className="h-4 w-4" /> },
  };

  return (
    <Layout>
      {/* HERO SEZIONE */}
      <section style={{ background: "var(--dsi-green-gradient)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 80%, rgba(249,115,22,0.08), transparent 50%)",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-10" style={{ paddingTop: 32, paddingBottom: 60 }}>
          <Link
            to="/trattori"
            className="inline-flex items-center gap-2 text-sm mb-8 transition-colors"
            style={{ color: "rgba(255,255,255,0.5)" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "white"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
          >
            <ArrowLeft className="h-4 w-4" /> Torna alla gamma
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <AnimatedSection>
              <div className="relative overflow-hidden rounded-lg" style={{ background: "rgba(255,255,255,0.05)" }}>
                <img src={tractorImage} alt={tractor.name} className="w-full h-auto object-cover" />
                {/* HP Badge */}
                <div
                  className="absolute top-4 right-4 font-display font-bold text-white"
                  style={{
                    background: "#F97316",
                    borderRadius: 6,
                    padding: "8px 16px",
                    fontSize: "1rem",
                  }}
                >
                  {tractor.hpRange}
                </div>
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.15}>
              <div>
                {/* Category badge */}
                <span
                  className="inline-block uppercase font-bold mb-3"
                  style={{
                    color: "#F97316",
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                  }}
                >
                  {tractor.category}
                </span>

                <h1
                  className="font-display font-black uppercase tracking-tight mb-4 text-white"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
                >
                  {tractor.name}
                </h1>

                {/* Orange separator */}
                <div style={{ width: 48, height: 3, backgroundColor: "#F97316", borderRadius: 2, marginBottom: 16 }} />

                <p
                  className="mb-8"
                  style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", lineHeight: 1.7 }}
                >
                  {tractor.shortDescription}
                </p>

                {/* Quick specs row */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {[
                    { label: "Potenza", value: tractor.hpRange },
                    { label: "Cambio", value: tractor.transmission },
                    { label: "Trazione", value: tractor.traction },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="text-center"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: 6,
                        padding: "12px 8px",
                      }}
                    >
                      <span
                        className="block uppercase"
                        style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.6rem", letterSpacing: "0.12em", marginBottom: 4 }}
                      >
                        {item.label}
                      </span>
                      <span className="text-white font-semibold" style={{ fontSize: "0.85rem" }}>{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={`/configuratore?modello=${tractor.id}`}
                  className="inline-flex items-center gap-2 font-bold uppercase tracking-widest transition-opacity hover:opacity-90"
                  style={{
                    background: "#F97316",
                    color: "white",
                    padding: "14px 32px",
                    borderRadius: 4,
                    fontSize: "0.8rem",
                    letterSpacing: "0.12em",
                  }}
                >
                  <Settings className="h-5 w-5" />
                  Configura questo trattore
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CARATTERISTICHE PRINCIPALI */}
      <section style={{ background: "#F5F2EE", padding: "80px 0" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div style={{ width: 4, height: 28, backgroundColor: "#F97316", borderRadius: 2 }} />
              <h2 className="font-display font-black uppercase tracking-tight" style={{ fontSize: "1.5rem", color: "#1a1a1a" }}>
                Caratteristiche Principali
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tractor.features.map((feature, i) => (
              <AnimatedSection key={feature} delay={i * 0.05}>
                <div
                  className="flex items-center gap-3 transition-all duration-300"
                  style={{
                    background: "white",
                    border: "1px solid #E8E4DF",
                    borderRadius: 6,
                    padding: "16px 20px",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(249,115,22,0.4)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#E8E4DF"; }}
                >
                  <div
                    className="shrink-0 flex items-center justify-center"
                    style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(249,115,22,0.1)" }}
                  >
                    <CheckCircle className="h-4 w-4" style={{ color: "#F97316" }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#333" }}>
                    {feature}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIFICHE TECNICHE */}
      <section style={{ background: "var(--dsi-green-gradient)", padding: "80px 0" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div style={{ width: 4, height: 28, backgroundColor: "#F97316", borderRadius: 2 }} />
              <h2 className="font-display font-black uppercase tracking-tight text-white" style={{ fontSize: "1.5rem" }}>
                Specifiche Tecniche
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { label: "Potenza", value: `${tractor.hp} HP`, icon: <Zap className="h-4 w-4" /> },
              { label: "Tipo Motore", value: tractor.engine, icon: <Cpu className="h-4 w-4" /> },
              { label: "Tipo Cambio", value: tractor.transmission, icon: <Settings2 className="h-4 w-4" /> },
              { label: "Trazione", value: tractor.traction, icon: <Gauge className="h-4 w-4" /> },
              { label: "Peso", value: tractor.weight, icon: <Weight className="h-4 w-4" /> },
              ...(tractor.dimensions !== "N/D" ? [{ label: "Dimensioni", value: tractor.dimensions, icon: <Gauge className="h-4 w-4" /> }] : []),
              ...Object.entries(specs).map(([key, value]) => ({
                label: specLabels[key]?.label || key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
                value: value as string,
                icon: specLabels[key]?.icon || <Settings2 className="h-4 w-4" />,
              })),
            ].map((spec, i) => (
              <AnimatedSection key={spec.label + i} delay={i * 0.03}>
                <div
                  className="flex items-center gap-4"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 6,
                    padding: "14px 20px",
                  }}
                >
                  <div
                    className="shrink-0 flex items-center justify-center"
                    style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(249,115,22,0.15)" }}
                  >
                    <span style={{ color: "#F97316" }}>{spec.icon}</span>
                  </div>
                  <div>
                    <span
                      className="block uppercase"
                      style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.6rem", letterSpacing: "0.12em" }}
                    >
                      {spec.label}
                    </span>
                    <span className="text-white font-semibold" style={{ fontSize: "0.9rem" }}>{spec.value}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ACCESSORI */}
      {tractor.accessories && tractor.accessories.length > 0 && (
        <section style={{ background: "#F5F2EE", padding: "80px 0" }}>
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <div style={{ width: 4, height: 28, backgroundColor: "#F97316", borderRadius: 2 }} />
                <h2 className="font-display font-black uppercase tracking-tight" style={{ fontSize: "1.5rem", color: "#1a1a1a" }}>
                  Accessori Compatibili
                </h2>
              </div>
            </AnimatedSection>
            <div className="flex flex-wrap gap-3">
              {tractor.accessories.map((acc, i) => (
                <AnimatedSection key={acc} delay={i * 0.05}>
                  <span
                    className="inline-block font-medium"
                    style={{
                      background: "white",
                      border: "1px solid #E8E4DF",
                      borderRadius: 4,
                      padding: "10px 20px",
                      fontSize: "0.85rem",
                      color: "#333",
                    }}
                  >
                    {acc}
                  </span>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BOTTOM CTA */}
      <section style={{ background: "var(--dsi-green-gradient)", padding: "60px 0" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <p
                className="uppercase font-bold mb-2"
                style={{ color: "#F97316", fontSize: "0.7rem", letterSpacing: "0.2em" }}
              >
                Interessato a questo modello?
              </p>
              <h2
                className="font-display font-black text-white uppercase tracking-tight mb-6"
                style={{ fontSize: "1.8rem" }}
              >
                Configura il tuo {tractor.name}
              </h2>
              <Link
                to={`/configuratore?modello=${tractor.id}`}
                className="inline-flex items-center gap-2 font-bold uppercase tracking-widest transition-opacity hover:opacity-90"
                style={{
                  background: "#F97316",
                  color: "white",
                  padding: "14px 32px",
                  borderRadius: 4,
                  fontSize: "0.8rem",
                  letterSpacing: "0.12em",
                }}
              >
                <Settings className="h-5 w-5" />
                Inizia la configurazione
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default SchedaProdotto;
