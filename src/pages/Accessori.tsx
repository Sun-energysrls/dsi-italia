import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import trailerImg from "@/assets/accessory-trailer.jpg";
import equipmentImg from "@/assets/accessory-equipment.jpg";
import partsImg from "@/assets/accessory-parts.jpg";

const accessoryCategories = [
  {
    title: "Rimorchi Agricoli",
    description: "Rimorchi ribaltabili, a cassone fisso e specializzati per il trasporto di materiali agricoli. Costruiti per durare e resistere alle condizioni di lavoro più impegnative.",
    image: trailerImg,
    items: ["Rimorchio ribaltabile monoasse", "Rimorchio ribaltabile biasse", "Rimorchio a cassone fisso", "Rimorchio cisterna", "Carro botte"],
  },
  {
    title: "Attrezzature per Campo",
    description: "Attrezzature professionali per la lavorazione del terreno, la semina e la raccolta. Compatibili con tutta la gamma di trattori DSI.",
    image: equipmentImg,
    items: ["Aratro reversibile", "Erpice rotante", "Fresa", "Seminatrice", "Trinciasarmenti", "Atomizzatore"],
  },
  {
    title: "Accessori Trattori",
    description: "Accessori e componenti per migliorare le prestazioni e il comfort del vostro trattore. Dalla cabina climatizzata all'impianto idraulico potenziato.",
    image: partsImg,
    items: ["Cabina climatizzata", "Zavorre frontali e posteriori", "Impianto idraulico potenziato", "Caricatore frontale", "Kit luci LED", "Sedile pneumatico premium"],
  },
];

const Accessori = () => {
  return (
    <Layout>
      <section className="section-dark py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black mb-4 uppercase tracking-tight">
              Accessori e Attrezzature
            </h1>
            <p className="text-[hsl(120,10%,55%)] text-lg max-w-2xl mx-auto">
              Una gamma completa di rimorchi, attrezzature e accessori per completare la vostra dotazione agricola.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {accessoryCategories.map((cat, i) => (
              <AnimatedSection key={cat.title}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="overflow-hidden shadow-elevated group">
                      <img src={cat.image} alt={cat.title} className="w-full h-80 object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out" loading="lazy" />
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="text-2xl md:text-3xl font-display font-black text-foreground mb-4 uppercase tracking-tight">{cat.title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{cat.description}</p>
                    <ul className="space-y-2 mb-6">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                          <span className="w-1.5 h-1.5 bg-secondary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contatti"
                      className="inline-flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-widest hover:text-primary transition-colors"
                    >
                      Richiedi informazioni <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-black mb-4 uppercase tracking-tight">Hai bisogno di un accessorio specifico?</h2>
            <p className="text-[hsl(120,10%,55%)] mb-10">Contattaci per ricevere una consulenza personalizzata</p>
            <Link
              to="/contatti"
              className="gradient-accent text-accent-foreground px-10 py-4 rounded-sm font-bold uppercase tracking-widest inline-block hover:opacity-90 transition-opacity shadow-elevated"
            >
              Contattaci Ora
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Accessori;
