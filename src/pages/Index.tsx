import { Link } from "react-router-dom";
import { ArrowRight, Shield, Settings, Truck, Award, CheckCircle, Tractor, Wrench, Headphones } from "lucide-react";
import Layout from "@/components/Layout";
import TractorCard from "@/components/TractorCard";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-tractor.jpg";
import { categories, tractors } from "@/data/tractors";

const Index = () => {
  const featuredTractors = [
    tractors.find((t) => t.id === "dsi-titan-280")!,
    tractors.find((t) => t.id === "dsi-forza-180")!,
    tractors.find((t) => t.id === "dsi-campo-90")!,
    tractors.find((t) => t.id === "dsi-agile-45")!,
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center">
        <img src={heroImage} alt="Trattore in campo" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative container mx-auto px-4 lg:px-8 py-28">
          <div className="max-w-3xl">
            <p className="text-secondary font-bold text-xs uppercase tracking-[0.25em] mb-4 animate-fade-in-up">
              DSI — For Industry & Agriculture
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary-foreground leading-[1.08] mb-6 uppercase tracking-tight animate-fade-in-up">
              Trattori Professionali per l'Agricoltura Moderna
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-14 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Importazione diretta, configurazione personalizzata e soluzioni complete per aziende agricole professionali
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/trattori"
                className="gradient-accent text-accent-foreground px-10 py-4 rounded-sm text-base font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-elevated"
              >
                Scopri i Modelli
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/configuratore"
                className="border-2 border-primary-foreground/25 text-primary-foreground px-10 py-4 rounded-sm text-base font-semibold uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:bg-primary-foreground/10 transition-colors"
              >
                Configura il tuo Trattore
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Chi siamo */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-6 uppercase tracking-tight">
              Chi siamo
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              DSI Import è specializzata nell'importazione diretta di trattori professionali e attrezzature agricole di alta qualità. Con anni di esperienza nel settore, offriamo ai nostri clienti macchine affidabili, assistenza dedicata e soluzioni personalizzate per ogni esigenza agricola.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Truck, title: "Importazione Diretta", desc: "Selezioniamo e importiamo direttamente i migliori trattori dal produttore, garantendo qualità e prezzi competitivi." },
              { icon: Shield, title: "Affidabilità Garantita", desc: "Ogni macchina viene testata e certificata prima della consegna. Garanzia completa su tutti i nostri prodotti." },
              { icon: Award, title: "Esperienza nel Settore", desc: "Un team di esperti con conoscenza approfondita del mondo agricolo, pronti ad assistervi nella scelta." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="text-center p-10 bg-muted/40 border border-border/50">
                  <div className="w-14 h-14 gradient-primary flex items-center justify-center mx-auto mb-6">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 text-foreground uppercase tracking-wide">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gamma per potenza — DARK */}
      <section className="section-dark py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-4 uppercase tracking-tight">
              La Nostra Gamma
            </h2>
            <p className="text-[hsl(120,10%,55%)] text-lg">Trattori per ogni fascia di potenza</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.id} delay={i * 0.08}>
                <Link
                  to={`/trattori?categoria=${cat.id}`}
                  className="group p-8 bg-[hsl(156,32%,14%)] border border-[hsl(156,20%,20%)] hover:border-secondary/50 shadow-card hover:shadow-elevated transition-all duration-300 text-center block"
                >
                  <Tractor className="h-10 w-10 text-secondary mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold mb-2">{cat.label}</h3>
                  <p className="text-[hsl(120,10%,55%)] text-sm">{cat.description}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-secondary text-sm font-bold uppercase tracking-widest">
                    Scopri <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured tractors */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-4 uppercase tracking-tight">
              Modelli in Evidenza
            </h2>
            <p className="text-muted-foreground text-lg">Un trattore per ogni esigenza</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTractors.map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 0.08}>
                <TractorCard tractor={t} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Perché DSI — DARK */}
      <section className="section-dark py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-4 uppercase tracking-tight">
              Perché Scegliere DSI
            </h2>
            <p className="text-[hsl(120,10%,55%)] text-lg max-w-2xl mx-auto">
              Qualità, assistenza e configurazione personalizzata per la vostra azienda agricola
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: Truck, title: "Importazione Diretta", desc: "Acquistiamo direttamente dal produttore eliminando gli intermediari." },
              { icon: Settings, title: "Configurazione Personalizzata", desc: "Ogni trattore configurato sulle vostre esigenze specifiche." },
              { icon: Wrench, title: "Soluzioni Professionali", desc: "Attrezzature e accessori per ogni tipologia di lavoro agricolo." },
              { icon: Headphones, title: "Assistenza Dedicata", desc: "Supporto tecnico post-vendita su tutto il territorio nazionale." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1} className="text-center">
                <div className="w-16 h-16 bg-[hsl(156,32%,16%)] flex items-center justify-center mx-auto mb-5">
                  <item.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2 uppercase tracking-wide">{item.title}</h3>
                <p className="text-[hsl(120,10%,55%)] text-sm leading-relaxed">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits list */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-4 uppercase tracking-tight">I Nostri Vantaggi</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
              {[
                "Importazione diretta dal produttore",
                "Configurazione personalizzata di ogni trattore",
                "Assistenza tecnica dedicata post-vendita",
                "Consegna su tutto il territorio nazionale",
                "Ampia gamma di accessori e attrezzature",
                "Consulenza agronomica specializzata",
                "Finanziamenti e leasing agevolati",
                "Garanzia estesa su tutti i modelli",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 py-2">
                  <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA finale — DARK */}
      <section className="section-dark py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-6 uppercase tracking-tight">
              Pronto a Trovare il Trattore Perfetto?
            </h2>
            <p className="text-[hsl(120,10%,55%)] text-lg mb-12 max-w-2xl mx-auto">
              Configura il tuo trattore ideale e ricevi un preventivo personalizzato senza impegno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/configuratore"
                className="gradient-accent text-accent-foreground px-10 py-4 rounded-sm text-base font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-elevated"
              >
                Configura il tuo Trattore
                <Settings className="h-5 w-5" />
              </Link>
              <Link
                to="/contatti"
                className="border-2 border-[hsl(40,100%,97%)]/25 text-[hsl(40,100%,97%)] px-10 py-4 rounded-sm text-base font-semibold uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:bg-[hsl(40,100%,97%)]/10 transition-colors"
              >
                Contattaci
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
