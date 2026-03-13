import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Wrench, Truck, Cog, ShieldCheck, Tractor } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import trailerImg from "@/assets/accessory-trailer.jpg";
import equipmentImg from "@/assets/accessory-equipment.jpg";
import partsImg from "@/assets/accessory-parts.jpg";

const accessoryCategories = [
  {
    title: "Rimorchi Agricoli",
    icon: Truck,
    description: "Rimorchi ribaltabili, a cassone fisso e specializzati per il trasporto di materiali agricoli.",
    image: trailerImg,
    items: [
      { name: "Rimorchio ribaltabile monoasse", desc: "Capacità fino a 8 tonnellate" },
      { name: "Rimorchio ribaltabile biasse", desc: "Stabilità su terreni irregolari" },
      { name: "Rimorchio a cassone fisso", desc: "Trasporto materiali sfusi" },
      { name: "Rimorchio cisterna", desc: "Irrigazione e distribuzione liquidi" },
      { name: "Carro botte", desc: "Distribuzione liquami e fertilizzanti" },
    ],
  },
  {
    title: "Attrezzature per Campo",
    icon: Wrench,
    description: "Attrezzature professionali per lavorazione terreno, semina e raccolta.",
    image: equipmentImg,
    items: [
      { name: "Aratro reversibile", desc: "Lavorazione profonda del terreno" },
      { name: "Erpice rotante", desc: "Preparazione letto di semina" },
      { name: "Fresa", desc: "Sminuzzamento e interramento residui" },
      { name: "Seminatrice", desc: "Semina di precisione" },
      { name: "Trinciasarmenti", desc: "Gestione residui colturali" },
      { name: "Atomizzatore", desc: "Trattamenti fitosanitari" },
    ],
  },
  {
    title: "Accessori Trattori",
    icon: Cog,
    description: "Componenti per migliorare prestazioni e comfort del trattore.",
    image: partsImg,
    items: [
      { name: "Cabina climatizzata", desc: "Comfort in ogni stagione" },
      { name: "Zavorre frontali e posteriori", desc: "Bilanciamento ottimale" },
      { name: "Impianto idraulico potenziato", desc: "Più uscite e pressione" },
      { name: "Caricatore frontale", desc: "Movimentazione materiali" },
      { name: "Kit luci LED", desc: "Visibilità notturna premium" },
      { name: "Sedile pneumatico premium", desc: "Massimo comfort operatore" },
    ],
  },
];

const Accessori = () => {
  return (
    <Layout>
      {/* HERO */}
      <section
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
              <span style={{ color: "rgba(255,255,255,0.7)" }}>Accessori</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Wrench className="h-5 w-5" style={{ color: "#F97316" }} />
              <span className="uppercase font-bold" style={{ color: "#F97316", fontSize: "0.75rem", letterSpacing: "0.2em" }}>
                Catalogo completo
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4 uppercase tracking-tight">
              Accessori & Attrezzature
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", maxWidth: 600 }}>
              Una gamma completa di soluzioni per massimizzare la produttività della tua azienda agricola.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-8">
              {[
                { val: "3", label: "Categorie principali" },
                { val: "50+", label: "Prodotti disponibili" },
                { val: "100%", label: "Compatibili DSI" },
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

      {/* CATEGORIES */}
      <section style={{ background: "#F5F2EE", padding: "80px 0" }}>
        <div className="container mx-auto px-4 lg:px-8">
          {accessoryCategories.map((cat, catIndex) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} className="mb-20 last:mb-0">
                {/* Category header */}
                <AnimatedSection>
                  <div className="flex items-center gap-4 mb-8">
                    <div style={{ width: 4, height: 28, backgroundColor: "#F97316", borderRadius: 2 }} />
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(249,115,22,0.1)" }}
                    >
                      <Icon className="h-5 w-5" style={{ color: "#F97316" }} />
                    </div>
                    <div>
                      <h2 className="font-display font-bold uppercase" style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "#333" }}>
                        {cat.title}
                      </h2>
                      <p style={{ color: "#999", fontSize: "0.8rem" }}>{cat.description}</p>
                    </div>
                    <div className="flex-1 h-px" style={{ background: "#DDD" }} />
                    <span style={{ color: "#999", fontSize: "0.75rem" }}>{cat.items.length} prodotti</span>
                  </div>
                </AnimatedSection>

                {/* Image + Items grid */}
                <div className={`grid grid-cols-1 lg:grid-cols-5 gap-8 items-start ${catIndex % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                  {/* Image */}
                  <AnimatedSection className="lg:col-span-2">
                    <div className="overflow-hidden rounded-lg" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}>
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-64 object-cover hover:scale-[1.04] transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                  </AnimatedSection>

                  {/* Product cards */}
                  <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cat.items.map((item, i) => (
                      <AnimatedSection key={item.name} delay={i * 0.05}>
                        <div
                          className="flex items-start gap-3 transition-all duration-300"
                          style={{
                            background: "white",
                            border: "1px solid #E8E4DF",
                            borderRadius: 8,
                            padding: "16px 20px",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "rgba(249,115,22,0.4)";
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "#E8E4DF";
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          <div
                            className="shrink-0 flex items-center justify-center mt-0.5"
                            style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(249,115,22,0.1)" }}
                          >
                            <ShieldCheck className="h-3.5 w-3.5" style={{ color: "#F97316" }} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="block font-semibold text-sm" style={{ color: "#1a1a1a" }}>
                              {item.name}
                            </span>
                            <span className="block" style={{ color: "#999", fontSize: "0.78rem" }}>
                              {item.desc}
                            </span>
                          </div>
                          <Link
                            to="/contatti"
                            className="shrink-0 self-center"
                            style={{ color: "#F97316", fontSize: "0.65rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}
                          >
                            Info
                          </Link>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--dsi-green-gradient)", padding: "80px 0" }}>
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <Tractor className="h-10 w-10 mx-auto mb-4" style={{ color: "#F97316" }} />
            <h2 className="text-2xl md:text-3xl font-display font-black mb-4 uppercase tracking-tight text-white">
              Hai bisogno di un accessorio specifico?
            </h2>
            <p className="mb-10" style={{ color: "rgba(255,255,255,0.55)" }}>
              Contattaci per ricevere una consulenza personalizzata sugli accessori compatibili
            </p>
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
              Contattaci Ora <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Accessori;
