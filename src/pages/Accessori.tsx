import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Accessori e Attrezzature
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Una gamma completa di rimorchi, attrezzature e accessori per completare la vostra dotazione agricola.
            </p>
          </div>

          <div className="space-y-20">
            {accessoryCategories.map((cat, i) => (
              <div key={cat.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="rounded-lg overflow-hidden shadow-elevated group">
                    <img src={cat.image} alt={cat.title} className="w-full h-80 object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out" loading="lazy" />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">{cat.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{cat.description}</p>
                  <ul className="space-y-2 mb-6">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contatti"
                    className="inline-flex items-center gap-2 text-secondary font-semibold text-sm uppercase tracking-wide hover:text-primary transition-colors"
                  >
                    Richiedi informazioni <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Hai bisogno di un accessorio specifico?</h2>
          <p className="text-primary-foreground/60 mb-10">Contattaci per ricevere una consulenza personalizzata</p>
          <Link
            to="/contatti"
            className="gradient-accent text-accent-foreground px-10 py-4 rounded-md font-bold uppercase tracking-wider inline-block hover:opacity-90 transition-opacity shadow-elevated"
          >
            Contattaci Ora
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Accessori;
