import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Send, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { tractors, globalColorOptions, globalAccessories, getTractorsByBrand } from "@/data/tractors";
import { brands } from "@/data/brands";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "393330000000";

const Configuratore = () => {
  const [searchParams] = useSearchParams();
  const preselectedBrand = searchParams.get("brand") || "";
  const preselectedModel = searchParams.get("modello") || "";

  const [step, setStep] = useState<number>(preselectedModel ? 3 : preselectedBrand ? 2 : 1);
  const [brandId, setBrandId] = useState(preselectedBrand);
  const [modelId, setModelId] = useState(preselectedModel);
  const [power, setPower] = useState("");
  const [transmission, setTransmission] = useState("");
  const [color, setColor] = useState("");
  const [accessories, setAccessories] = useState<string[]>([]);
  const [showSummary, setShowSummary] = useState(false);

  // Form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selectedBrand = brands.find((b) => b.id === brandId);
  const brandModels = brandId ? getTractorsByBrand(brandId) : [];
  const selectedTractor = tractors.find((t) => t.id === modelId);
  const transmissionOptions = selectedTractor?.transmissionOptions ?? [];
  const powerOptions = selectedTractor?.powerOptions ?? [];

  const handleBrandSelect = (id: string) => {
    setBrandId(id);
    setModelId("");
    setPower("");
    setTransmission("");
    setColor("");
    setAccessories([]);
    setStep(2);
  };

  const handleModelSelect = (id: string) => {
    setModelId(id);
    setPower("");
    setTransmission("");
    setColor("");
    setAccessories([]);
    setStep(3);
  };

  const toggleAccessory = (acc: string) => {
    setAccessories((prev) => prev.includes(acc) ? prev.filter((a) => a !== acc) : [...prev, acc]);
  };

  const buildSummaryText = () => {
    return [
      `Brand: ${selectedBrand?.name}`,
      `Modello: ${selectedTractor?.name}`,
      `Potenza: ${power || "Standard"}`,
      `Cambio: ${transmission}`,
      `Colore: ${color}`,
      `Accessori: ${accessories.length > 0 ? accessories.join(", ") : "Nessuno"}`,
      `---`,
      `Nome: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Telefono: ${phone}`,
      notes ? `Note: ${notes}` : "",
    ].filter(Boolean).join("\n");
  };

  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !phone) {
      toast.error("Compila tutti i campi obbligatori.");
      return;
    }
    toast.success("Richiesta inviata con successo! Vi contatteremo al più presto.");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <SeoHead title="Richiesta Inviata — DSI Import" description="La tua richiesta di preventivo è stata inviata." />
        <section className="py-28 lg:py-36 bg-background">
          <div className="container mx-auto px-4 text-center max-w-xl">
            <div className="w-20 h-20 gradient-accent flex items-center justify-center mx-auto mb-6 rounded-full">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl font-display font-black text-foreground mb-4 uppercase">Richiesta Inviata!</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Grazie per averci contattato. Il nostro team vi risponderà entro 24 ore con un preventivo personalizzato.
            </p>
            <a href="/" className="gradient-accent text-accent-foreground px-8 py-3 rounded-sm font-bold uppercase tracking-widest inline-block hover:opacity-90 transition-opacity">
              Torna alla Home
            </a>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SeoHead
        title="Configuratore — Configura la tua Macchina Agricola"
        description="Configura il tuo trattore ideale con il configuratore DSI Import. Preventivo gratuito."
        canonical="https://dsi-italia.com/configuratore"
      />

      {/* Header */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#1B4332" }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <AnimatedSection className="text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4 uppercase tracking-tight">
              Configura il Tuo Trattore
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Personalizza la tua configurazione e richiedi un preventivo senza impegno
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          {!showSummary ? (
            <AnimatedSection>
              <div className="bg-card border border-border p-6 lg:p-10 shadow-card space-y-10">

                {/* Step 1: Brand */}
                <div>
                  <StepLabel number="1" title="Scegli il Brand" active={step >= 1} />
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {brands.map((brand) => (
                      <button
                        key={brand.id}
                        type="button"
                        onClick={() => handleBrandSelect(brand.id)}
                        className={`p-6 border-2 text-center transition-all duration-200 ${
                          brandId === brand.id
                            ? "border-secondary shadow-elevated"
                            : "border-border hover:border-secondary/40"
                        }`}
                      >
                        <div
                          className="w-12 h-12 flex items-center justify-center mx-auto mb-3"
                          style={{ backgroundColor: brand.color }}
                        >
                          <span className="font-display font-black text-white text-sm">{brand.code}</span>
                        </div>
                        <span className="font-display font-bold text-foreground text-sm block">{brand.name}</span>
                        <span className="text-xs text-muted-foreground">{brand.flag} {brand.country}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="section-divider" />

                {/* Step 2: Model */}
                <div>
                  <StepLabel number="2" title="Scegli il Modello" active={step >= 2} />
                  {brandModels.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {brandModels.map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => handleModelSelect(t.id)}
                          className={`p-5 border-2 text-left transition-all ${
                            modelId === t.id
                              ? "border-secondary shadow-elevated"
                              : "border-border hover:border-secondary/40"
                          }`}
                        >
                          <span className="font-display font-bold text-foreground block">{t.name}</span>
                          <span className="text-secondary font-black text-sm">{t.hp} CV</span>
                          <span className="text-xs text-muted-foreground block mt-1">{t.category}</span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-sm">Seleziona un brand per visualizzare i modelli.</p>
                  )}
                </div>

                {step >= 3 && selectedTractor && (
                  <>
                    <div className="section-divider" />

                    {/* Step 3: Power */}
                    <div>
                      <StepLabel number="3" title="Potenza" active />
                      <div className="flex flex-wrap gap-3">
                        {powerOptions.map((p) => (
                          <RadioPill key={p} label={p} selected={power === p} onClick={() => setPower(p)} />
                        ))}
                      </div>
                    </div>

                    <div className="section-divider" />

                    {/* Step 4: Transmission */}
                    <div>
                      <StepLabel number="4" title="Cambio" active />
                      <div className="flex flex-wrap gap-3">
                        {transmissionOptions.map((t) => (
                          <RadioPill key={t} label={t} selected={transmission === t} onClick={() => setTransmission(t)} />
                        ))}
                      </div>
                    </div>

                    <div className="section-divider" />

                    {/* Step 5: Color */}
                    <div>
                      <StepLabel number="5" title="Colore" active />
                      <div className="flex flex-wrap gap-5">
                        {globalColorOptions.map((c) => (
                          <button
                            key={c.name}
                            type="button"
                            onClick={() => setColor(c.name)}
                            className="flex flex-col items-center gap-1.5 group"
                          >
                            <span
                              className={`w-12 h-12 rounded-full border-2 transition-all ${
                                color === c.name ? "border-secondary ring-2 ring-secondary/30 scale-110" : "border-border group-hover:border-secondary/50"
                              }`}
                              style={{ backgroundColor: c.value }}
                            />
                            <span className={`text-xs font-medium ${color === c.name ? "text-secondary" : "text-muted-foreground"}`}>
                              {c.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="section-divider" />

                    {/* Step 6: Accessories */}
                    <div>
                      <StepLabel number="6" title="Accessori" active />
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {globalAccessories.map((acc) => (
                          <label
                            key={acc}
                            className={`cursor-pointer px-4 py-3 border text-sm font-medium transition-all flex items-center gap-2 ${
                              accessories.includes(acc)
                                ? "border-secondary bg-secondary/10 text-secondary"
                                : "border-border text-foreground hover:border-secondary/50"
                            }`}
                          >
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={accessories.includes(acc)}
                              onChange={() => toggleAccessory(acc)}
                            />
                            <CheckCircle className={`h-4 w-4 shrink-0 ${accessories.includes(acc) ? "text-secondary" : "text-muted-foreground/30"}`} />
                            {acc}
                          </label>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Proceed to summary */}
                {step >= 3 && transmission && color && (
                  <button
                    onClick={() => setShowSummary(true)}
                    className="w-full gradient-accent text-accent-foreground py-4 text-base font-black uppercase tracking-widest hover:opacity-90 transition-opacity shadow-elevated"
                  >
                    Visualizza Riepilogo
                  </button>
                )}
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection>
              <div className="bg-card border border-border p-6 lg:p-10 shadow-card space-y-8">
                <h2 className="font-display text-2xl font-black text-foreground uppercase tracking-tight">Riepilogo Configurazione</h2>

                {/* Summary card */}
                <div className="bg-muted/50 p-6 space-y-3 border border-border">
                  {[
                    { label: "Brand", value: selectedBrand?.name || "" },
                    { label: "Modello", value: selectedTractor?.name || "" },
                    { label: "Potenza", value: power || "Standard" },
                    { label: "Cambio", value: transmission },
                    { label: "Colore", value: color },
                    { label: "Accessori", value: accessories.length > 0 ? accessories.join(", ") : "Nessuno" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between py-2 border-b border-border/50 last:border-0">
                      <span className="text-sm font-bold text-foreground uppercase tracking-wide">{item.label}</span>
                      <span className="text-sm text-muted-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Form */}
                <div className="space-y-4">
                  <h3 className="font-display text-lg font-bold text-foreground uppercase">I Tuoi Dati</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-1 uppercase tracking-wide">Nome *</label>
                      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full border border-input px-4 py-3 bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" placeholder="Mario" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-1 uppercase tracking-wide">Cognome *</label>
                      <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full border border-input px-4 py-3 bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" placeholder="Rossi" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-1 uppercase tracking-wide">Email *</label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-input px-4 py-3 bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" placeholder="email@esempio.it" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-1 uppercase tracking-wide">Telefono *</label>
                      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border border-input px-4 py-3 bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" placeholder="+39 333 000 0000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-1 uppercase tracking-wide">Note</label>
                    <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} className="w-full border border-input px-4 py-3 bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none resize-none" placeholder="Richieste aggiuntive..." />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleSubmit}
                    className="flex-1 gradient-accent text-accent-foreground py-4 text-base font-black uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-elevated"
                  >
                    <Send className="h-4 w-4" />
                    Richiedi Preventivo Gratuito
                  </button>
                  <button
                    onClick={() => setShowSummary(false)}
                    className="px-6 py-4 border-2 border-border text-foreground text-sm font-bold uppercase tracking-widest hover:bg-muted transition-colors"
                  >
                    Modifica
                  </button>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </Layout>
  );
};

// Sub-components
const StepLabel = ({ number, title, active }: { number: string; title: string; active: boolean }) => (
  <div className="flex items-center gap-3 mb-5">
    <span className={`w-9 h-9 text-sm font-black flex items-center justify-center shrink-0 ${active ? "gradient-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>
      {number}
    </span>
    <h3 className="font-display text-lg font-bold text-foreground uppercase tracking-wide">{title}</h3>
  </div>
);

const RadioPill = ({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-5 py-2.5 border text-sm font-medium transition-all ${
      selected ? "border-secondary bg-secondary/10 text-secondary" : "border-border text-foreground hover:border-secondary/50"
    }`}
  >
    {label}
  </button>
);

export default Configuratore;
