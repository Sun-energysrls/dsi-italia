import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, ShieldCheck, MapPin, ChevronRight, Settings } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const Assistenza = () => {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section
        data-bg-color="#1b3a2d"
        className="relative overflow-hidden"
        style={{ background: "var(--dsi-green-gradient)", minHeight: 380 }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px]" style={{ background: "rgba(249,115,22,0.3)" }} />
        </div>

        <div className="relative z-10 px-4 md:px-10 lg:px-20" style={{ paddingTop: 60, paddingBottom: 40 }}>
          <AnimatedSection>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span style={{ color: "rgba(255,255,255,0.7)" }}>Assistenza</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Wrench className="h-5 w-5" style={{ color: "#F97316" }} />
              <span className="uppercase font-bold" style={{ color: "#F97316", fontSize: "0.75rem", letterSpacing: "0.2em" }}>
                Supporto Dedicato
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4 uppercase tracking-tight">
              Assistenza DSI
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", maxWidth: 600 }}>
              Con l'acquisto di ogni nostro trattore, garantiamo un'officina dedicata a tua completa disposizione per qualsiasi evenienza.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-8">
              {[
                { val: "100%", label: "Copertura" },
                { val: "24h", label: "Risposta" },
                { val: "Zero", label: "Pensieri" },
              ].map((s) => (
                <div key={s.label}>
                  <span className="font-display font-black text-white" style={{ fontSize: "1.8rem" }}>{s.val}</span>
                  <span className="block" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section style={{ background: "#F5F2EE", padding: "80px 0" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div
                className="bg-white rounded-xl p-8 h-full transition-transform duration-300 hover:-translate-y-2"
                style={{ border: "1px solid #E8E4DF", boxShadow: "0 10px 40px rgba(0,0,0,0.04)" }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ background: "rgba(249,115,22,0.1)" }}>
                  <MapPin className="h-6 w-6" style={{ color: "#F97316" }} />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-3 uppercase tracking-wider">
                  Vicini alla Tua Zona
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Individuiamo l'officina specializzata più vicina al tuo campo. In caso di necessità, non dovrai percorrere chilometri o affrontare lunghe attese.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div
                className="bg-white rounded-xl p-8 h-full transition-transform duration-300 hover:-translate-y-2"
                style={{ border: "1px solid #E8E4DF", boxShadow: "0 10px 40px rgba(0,0,0,0.04)" }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ background: "rgba(249,115,22,0.1)" }}>
                  <ShieldCheck className="h-6 w-6" style={{ color: "#F97316" }} />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-3 uppercase tracking-wider">
                  Garanzia Integrata
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ogni mezzo include una copertura garantita sui principali componenti. Il nostro team tecnico approva in modo rapido e diretto eventuali interventi.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div
                className="bg-white rounded-xl p-8 h-full transition-transform duration-300 hover:-translate-y-2"
                style={{ border: "1px solid #E8E4DF", boxShadow: "0 10px 40px rgba(0,0,0,0.04)" }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ background: "rgba(249,115,22,0.1)" }}>
                  <Settings className="h-6 w-6" style={{ color: "#F97316" }} />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-3 uppercase tracking-wider">
                  Ricambi Veloci
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Gestiamo magazzini di ricambi originali con spedizione express all'officina di riferimento, per farti tornare subito produttivo sul campo.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section style={{ background: "var(--dsi-green-gradient)", padding: "80px 0" }}>
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <ShieldCheck className="h-10 w-10 mx-auto mb-4" style={{ color: "#F97316" }} />
            <h2 className="text-2xl md:text-3xl font-display font-black mb-4 uppercase tracking-tight text-white">
              Sempre al Tuo Fianco
            </h2>
            <p className="mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Il legame con il cliente non finisce con la vendita, ma inizia. Contatta il Team per qualsiasi informazione sui nostri servizi post-vendita.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contatti"
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
                Parla con il Team <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/trattori"
                className="inline-flex items-center gap-2 font-bold uppercase tracking-widest transition-opacity hover:opacity-90"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  padding: "14px 32px",
                  borderRadius: 4,
                  fontSize: "0.8rem",
                  letterSpacing: "0.12em",
                }}
              >
                Esplora i Trattori
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Assistenza;
