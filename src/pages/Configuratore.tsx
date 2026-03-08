import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Send, MessageCircle, CheckCircle, ChevronRight, Settings2, Palette, Wrench, User } from "lucide-react";
import Layout from "@/components/Layout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { tractors, globalColorOptions, brands } from "@/data/tractors";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "393330000000";

const steps = [
  { id: 1, label: "Modello", icon: Settings2 },
  { id: 2, label: "Configurazione", icon: Palette },
  { id: 3, label: "Accessori", icon: Wrench },
  { id: 4, label: "Dati", icon: User },
];

const Configuratore = () => {
  const [searchParams] = useSearchParams();
  const preselectedModel = searchParams.get("modello") || "";

  const [currentStep, setCurrentStep] = useState(1);
  const [model, setModel] = useState(preselectedModel);
  const [power, setPower] = useState("");
  const [transmission, setTransmission] = useState("");
  const [color, setColor] = useState("");
  const [traction, setTraction] = useState("");
  const [accessories, setAccessories] = useState<string[]>([]);
  const [quantity, setQuantity] = useState("1");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hectares, setHectares] = useState("");
  const [message, setMessage] = useState("");
  const [gdpr, setGdpr] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selectedTractor = tractors.find((t) => t.id === model);
  const transmissionOptions = selectedTractor?.transmissionOptions ?? [];
  const tractionOptions = selectedTractor?.tractionOptions ?? [];
  const accessoryOptions = selectedTractor?.accessories ?? [];

  const handleModelChange = (newModel: string) => {
    setModel(newModel);
    setPower("");
    setTransmission("");
    setColor("");
    setTraction("");
    setAccessories([]);
  };

  const toggleAccessory = (acc: string) => {
    setAccessories((prev) => prev.includes(acc) ? prev.filter((a) => a !== acc) : [...prev, acc]);
  };

  const canGoNext = () => {
    if (currentStep === 1) return !!model;
    if (currentStep === 2) return !!transmission && !!traction && !!color;
    if (currentStep === 3) return true;
    if (currentStep === 4) return !!name && !!email && !!phone && gdpr;
    return false;
  };

  const buildSummaryText = () => {
    return [
      `Modello: ${selectedTractor?.name || model}`,
      `Potenza: ${power ? `${power} HP` : "Standard"}`,
      `Cambio: ${transmission}`,
      `Colore: ${color}`,
      `Trazione: ${traction}`,
      `Accessori: ${accessories.length > 0 ? accessories.join(", ") : "Nessuno"}`,
      `Quantità: ${quantity}`,
      `---`,
      `Nome: ${name}`,
      company ? `Azienda: ${company}` : "",
      `Email: ${email}`,
      `Telefono: ${phone}`,
      hectares ? `Ettari: ${hectares}` : "",
      message ? `Messaggio: ${message}` : "",
    ].filter(Boolean).join("\n");
  };

  const whatsappUrl = () => {
    const text = encodeURIComponent(`Richiesta Preventivo DSI\n\n${buildSummaryText()}`);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  const handleSubmit = () => {
    toast.success("Richiesta inviata con successo! Vi contatteremo al più presto.");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-28 lg:py-36 bg-background min-h-[70vh] flex items-center">
          <div className="container mx-auto px-4 text-center max-w-xl">
            <div className="w-20 h-20 bg-secondary flex items-center justify-center mx-auto mb-6 rounded-[6px]">
              <CheckCircle className="h-10 w-10 text-secondary-foreground" />
            </div>
            <h1 className="text-3xl font-display font-black text-foreground mb-4 uppercase">Richiesta Inviata!</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Grazie per averci contattato. Il nostro team vi risponderà entro 24 ore con un preventivo personalizzato.
            </p>
            <a href="/" className="bg-secondary text-secondary-foreground px-8 py-3 rounded-[6px] font-bold uppercase tracking-widest inline-block hover:opacity-90 transition-opacity">
              Torna alla Home
            </a>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary pt-28 pb-12 lg:pt-36 lg:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <Settings2 className="h-6 w-6 text-secondary" />
              <span className="text-secondary font-bold text-sm uppercase tracking-[0.2em]">
                Configuratore
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary-foreground mb-4 uppercase tracking-tight">
              Configura il Tuo Trattore
            </h1>
            <p className="text-primary-foreground/60 text-lg max-w-xl">
              Personalizza la tua configurazione e richiedi un preventivo senza impegno.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Progress bar */}
      {!showSummary && (
        <section className="bg-card border-b border-border sticky top-16 z-30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center py-4 overflow-x-auto">
              {steps.map((s, i) => {
                const StepIcon = s.icon;
                const isActive = currentStep === s.id;
                const isDone = currentStep > s.id;
                return (
                  <div key={s.id} className="flex items-center">
                    <button
                      onClick={() => isDone && setCurrentStep(s.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-[4px] text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                        isActive
                          ? "bg-secondary text-secondary-foreground"
                          : isDone
                          ? "text-secondary cursor-pointer hover:bg-secondary/10"
                          : "text-muted-foreground cursor-default"
                      }`}
                    >
                      <StepIcon className="h-4 w-4" />
                      <span className="hidden sm:inline">{s.label}</span>
                      <span className="sm:hidden">{s.id}</span>
                    </button>
                    {i < steps.length - 1 && (
                      <ChevronRight className="h-4 w-4 text-muted-foreground mx-1 shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-12 lg:py-20 bg-background min-h-[60vh]">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          {!showSummary ? (
            <AnimatedSection key={currentStep}>
              <div className="bg-card border border-border p-6 lg:p-10 shadow-sm">
                {/* Step 1: Model */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <StepHeader title="Scegli il Modello" subtitle="Seleziona brand e modello di trattore" />

                    {/* Brand quick filter */}
                    <div>
                      <label className="block text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-widest">Filtra per brand</label>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {brands.map((brand) => (
                          <button
                            key={brand}
                            type="button"
                            onClick={() => {
                              const brandTractors = tractors.filter(t => t.brand === brand);
                              if (brandTractors.length > 0 && (!model || !brandTractors.find(t => t.id === model))) {
                                handleModelChange(brandTractors[0].id);
                              }
                            }}
                            className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-[4px] border transition-all ${
                              selectedTractor?.brand === brand
                                ? "bg-secondary text-secondary-foreground border-secondary"
                                : "border-border text-foreground hover:border-secondary/50"
                            }`}
                          >
                            {brand}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-widest">Modello *</label>
                      <select
                        value={model}
                        onChange={(e) => handleModelChange(e.target.value)}
                        className="w-full border border-input px-4 py-3 bg-background text-foreground text-sm focus:ring-2 focus:ring-secondary focus:outline-none rounded-[4px]"
                      >
                        <option value="">Seleziona un modello</option>
                        {brands.map((brand) => (
                          <optgroup key={brand} label={brand}>
                            {tractors.filter(t => t.brand === brand).map((t) => (
                              <option key={t.id} value={t.id}>{t.name} — {t.hp} HP</option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>

                    {selectedTractor && (
                      <div className="bg-muted/50 border border-border p-4 rounded-[4px]">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-display text-lg font-black text-foreground uppercase">{selectedTractor.name}</span>
                          <span className="text-secondary font-black text-xl">{selectedTractor.hp} HP</span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">{selectedTractor.shortDescription}</p>
                        <div>
                          <label className="block text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-widest">Potenza motore</label>
                          <div className="flex flex-wrap gap-2">
                            {[selectedTractor.hp - 10, selectedTractor.hp, selectedTractor.hp + 10].filter(v => v > 0).map((hp) => (
                              <label key={hp} className={`cursor-pointer px-4 py-2 border text-sm font-bold rounded-[4px] transition-all ${
                                power === String(hp) ? "border-secondary bg-secondary/10 text-secondary" : "border-border text-foreground hover:border-secondary/50"
                              }`}>
                                <input type="radio" name="power" value={hp} className="sr-only" onChange={() => setPower(String(hp))} checked={power === String(hp)} />
                                {hp} HP
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 2: Configuration */}
                {currentStep === 2 && selectedTractor && (
                  <div className="space-y-8">
                    <StepHeader title="Configurazione Tecnica" subtitle={`Personalizza il tuo ${selectedTractor.name}`} />

                    {/* Transmission */}
                    <div>
                      <label className="block text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-widest">Tipo cambio *</label>
                      <div className="flex flex-wrap gap-3">
                        {transmissionOptions.map((t) => (
                          <label key={t} className={`cursor-pointer px-5 py-3 border text-sm font-bold rounded-[4px] transition-all ${
                            transmission === t ? "border-secondary bg-secondary/10 text-secondary" : "border-border text-foreground hover:border-secondary/50"
                          }`}>
                            <input type="radio" name="transmission" value={t} className="sr-only" onChange={() => setTransmission(t)} checked={transmission === t} />
                            {t}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Traction */}
                    <div>
                      <label className="block text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-widest">Trazione *</label>
                      <div className="flex flex-wrap gap-3">
                        {tractionOptions.map((t) => (
                          <label key={t} className={`cursor-pointer px-5 py-3 border text-sm font-bold rounded-[4px] transition-all ${
                            traction === t ? "border-secondary bg-secondary/10 text-secondary" : "border-border text-foreground hover:border-secondary/50"
                          }`}>
                            <input type="radio" name="traction" value={t} className="sr-only" onChange={() => setTraction(t)} checked={traction === t} />
                            {t}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Color */}
                    <div>
                      <label className="block text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-widest">Colore *</label>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                        {globalColorOptions.map((c) => (
                          <button
                            key={c.name}
                            type="button"
                            onClick={() => setColor(c.name)}
                            className="flex flex-col items-center gap-2 group"
                            title={c.name}
                          >
                            <span
                              className={`w-12 h-12 rounded-full border-2 transition-all ${
                                color === c.name ? "border-secondary ring-2 ring-secondary/30 scale-110" : "border-border group-hover:border-secondary/50"
                              }`}
                              style={{ backgroundColor: c.value }}
                            />
                            <span className={`text-[10px] font-bold uppercase tracking-wider text-center leading-tight ${
                              color === c.name ? "text-secondary" : "text-muted-foreground"
                            }`}>
                              {c.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Accessories */}
                {currentStep === 3 && selectedTractor && (
                  <div className="space-y-6">
                    <StepHeader title="Accessori e Quantità" subtitle="Aggiungi accessori opzionali al tuo trattore" />

                    <div>
                      <label className="block text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-widest">Accessori opzionali</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {accessoryOptions.map((acc) => (
                          <label key={acc} className={`cursor-pointer flex items-center gap-3 px-4 py-3 border rounded-[4px] text-sm font-medium transition-all ${
                            accessories.includes(acc) ? "border-secondary bg-secondary/10 text-secondary" : "border-border text-foreground hover:border-secondary/50"
                          }`}>
                            <input type="checkbox" className="sr-only" checked={accessories.includes(acc)} onChange={() => toggleAccessory(acc)} />
                            <span className={`w-5 h-5 border-2 rounded-[3px] flex items-center justify-center shrink-0 ${
                              accessories.includes(acc) ? "bg-secondary border-secondary" : "border-border"
                            }`}>
                              {accessories.includes(acc) && <CheckCircle className="h-3 w-3 text-secondary-foreground" />}
                            </span>
                            {acc}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-widest">Quantità</label>
                      <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-24 border border-input px-4 py-3 bg-background text-foreground text-sm rounded-[4px] focus:ring-2 focus:ring-secondary focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Contact */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <StepHeader title="I Tuoi Dati" subtitle="Inserisci le informazioni di contatto per ricevere il preventivo" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { label: "Nome e Cognome *", value: name, setter: setName, placeholder: "Mario Rossi" },
                        { label: "Azienda", value: company, setter: setCompany, placeholder: "Azienda Agricola..." },
                        { label: "Email *", value: email, setter: setEmail, placeholder: "email@esempio.it", type: "email" },
                        { label: "Telefono *", value: phone, setter: setPhone, placeholder: "+39 333 000 0000", type: "tel" },
                        { label: "Ettari lavorati", value: hectares, setter: setHectares, placeholder: "es. 50" },
                      ].map((field) => (
                        <div key={field.label}>
                          <label className="block text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-widest">{field.label}</label>
                          <input
                            type={field.type || "text"}
                            value={field.value}
                            onChange={(e) => field.setter(e.target.value)}
                            className="w-full border border-input px-4 py-3 bg-background text-foreground text-sm rounded-[4px] focus:ring-2 focus:ring-secondary focus:outline-none"
                            placeholder={field.placeholder}
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-widest">Messaggio aggiuntivo</label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={3}
                        className="w-full border border-input px-4 py-3 bg-background text-foreground text-sm rounded-[4px] focus:ring-2 focus:ring-secondary focus:outline-none resize-none"
                        placeholder="Scrivi qui eventuali richieste..."
                      />
                    </div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" checked={gdpr} onChange={(e) => setGdpr(e.target.checked)} className="mt-1 h-4 w-4 accent-secondary" />
                      <span className="text-sm text-muted-foreground">
                        Acconsento al trattamento dei miei dati personali ai sensi del GDPR (Regolamento UE 2016/679). *
                      </span>
                    </label>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
                  {currentStep > 1 ? (
                    <button
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="px-6 py-3 border-2 border-primary text-primary rounded-[4px] font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      Indietro
                    </button>
                  ) : (
                    <div />
                  )}
                  {currentStep < 4 ? (
                    <button
                      onClick={() => canGoNext() && setCurrentStep(currentStep + 1)}
                      disabled={!canGoNext()}
                      className="px-8 py-3 bg-secondary text-secondary-foreground rounded-[4px] font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-2"
                    >
                      Avanti
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => canGoNext() && setShowSummary(true)}
                      disabled={!canGoNext()}
                      className="px-8 py-3 bg-secondary text-secondary-foreground rounded-[4px] font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Vedi Riepilogo
                    </button>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ) : (
            /* Summary */
            <AnimatedSection>
              <div className="bg-card border border-border p-6 lg:p-10 shadow-sm space-y-6">
                <h2 className="font-display text-2xl font-black text-foreground uppercase tracking-tight">Riepilogo Configurazione</h2>

                <div className="bg-muted/50 p-6 border border-border rounded-[4px] space-y-3">
                  {[
                    { label: "Modello", value: `${selectedTractor?.brand} ${selectedTractor?.name}` },
                    { label: "Potenza", value: power ? `${power} HP` : `${selectedTractor?.hp} HP (standard)` },
                    { label: "Cambio", value: transmission },
                    { label: "Colore", value: color },
                    { label: "Trazione", value: traction },
                    { label: "Accessori", value: accessories.length > 0 ? accessories.join(", ") : "Nessuno" },
                    { label: "Quantità", value: quantity },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between py-2 border-b border-border/50 last:border-0">
                      <span className="text-sm font-bold text-foreground uppercase tracking-wide">{item.label}</span>
                      <span className="text-sm text-muted-foreground text-right">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-muted/50 p-6 border border-border rounded-[4px] space-y-2">
                  <h3 className="font-display text-lg font-bold text-foreground mb-3 uppercase">Dati di Contatto</h3>
                  {[
                    { label: "Nome", value: name },
                    { label: "Azienda", value: company || "—" },
                    { label: "Email", value: email },
                    { label: "Telefono", value: phone },
                    { label: "Ettari", value: hectares || "—" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between py-1">
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                      <span className="text-sm text-muted-foreground">{item.value}</span>
                    </div>
                  ))}
                  {message && <p className="text-sm text-muted-foreground mt-2 pt-2 border-t border-border/50">Messaggio: {message}</p>}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => setShowSummary(false)}
                    className="flex-1 border-2 border-primary text-primary py-3 rounded-[4px] font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    Modifica
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="flex-1 bg-secondary text-secondary-foreground py-4 rounded-[4px] font-black uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-base"
                  >
                    <Send className="h-4 w-4" />
                    Invia via Email
                  </button>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[hsl(142,70%,35%)] text-white py-4 rounded-[4px] font-black uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-base"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </Layout>
  );
};

const StepHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-6">
    <h2 className="font-display text-2xl font-black text-foreground uppercase tracking-tight">{title}</h2>
    <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
  </div>
);

export default Configuratore;
