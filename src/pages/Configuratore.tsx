import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Send, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { tractors } from "@/data/tractors";
import { toast } from "sonner";

const transmissionOptions = ["Manuale", "Sincronizzato", "Powershift"];
const tractionOptions = ["2WD", "4WD"];
const colorOptions = [
  { name: "Verde", value: "hsl(156, 32%, 17%)" },
  { name: "Rosso", value: "hsl(0, 70%, 45%)" },
  { name: "Arancione", value: "hsl(27, 82%, 52%)" },
  { name: "Blu", value: "hsl(220, 60%, 40%)" },
  { name: "Nero", value: "hsl(0, 0%, 11%)" },
];
const accessoryOptions = [
  "Rimorchio",
  "Attrezzatura agricola",
  "Cabina climatizzata",
  "Zavorre",
  "Impianto idraulico potenziato",
];

const SectionLabel = ({ number, title }: { number: string; title: string }) => (
  <div className="flex items-center gap-3 mb-5">
    <span className="w-8 h-8 rounded-full gradient-accent text-accent-foreground text-sm font-bold flex items-center justify-center shrink-0">
      {number}
    </span>
    <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
  </div>
);

const Configuratore = () => {
  const [searchParams] = useSearchParams();
  const preselectedModel = searchParams.get("modello") || "";

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
  const [step, setStep] = useState<"config" | "summary">("config");
  const [submitted, setSubmitted] = useState(false);

  const selectedTractor = tractors.find((t) => t.id === model);

  const toggleAccessory = (acc: string) => {
    setAccessories((prev) => prev.includes(acc) ? prev.filter((a) => a !== acc) : [...prev, acc]);
  };

  const canProceed = model && transmission && traction && color && name && email && phone && gdpr;

  const handleSubmit = () => {
    toast.success("Richiesta inviata con successo! Vi contatteremo al più presto.");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-28 lg:py-36 bg-muted/30">
          <div className="container mx-auto px-4 text-center max-w-xl">
            <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-display font-bold text-foreground mb-4">Richiesta Inviata!</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Grazie per averci contattato. Il nostro team vi risponderà entro 24 ore con un preventivo personalizzato.
            </p>
            <a href="/" className="gradient-accent text-accent-foreground px-8 py-3 rounded-md font-semibold uppercase tracking-wide inline-block hover:opacity-90 transition-opacity">
              Torna alla Home
            </a>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-14">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Configura il Tuo Trattore
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Personalizza la tua configurazione e richiedi un preventivo senza impegno
            </p>
          </div>

          {step === "config" ? (
            <div className="bg-card rounded-lg border border-border p-6 lg:p-10 shadow-card space-y-10">
              
              {/* Step 1: Vehicle */}
              <div>
                <SectionLabel number="1" title="Scegli il Modello" />
                <select
                  value={model}
                  onChange={(e) => { setModel(e.target.value); setPower(""); }}
                  className="w-full border border-input rounded-md px-4 py-3 bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                >
                  <option value="">Seleziona un modello</option>
                  {tractors.map((t) => (
                    <option key={t.id} value={t.id}>{t.name} — {t.hp} HP</option>
                  ))}
                </select>

                {selectedTractor && (
                  <div className="mt-5">
                    <label className="block text-sm font-semibold text-foreground mb-2">Potenza motore</label>
                    <div className="flex flex-wrap gap-3">
                      {[selectedTractor.hp - 10, selectedTractor.hp, selectedTractor.hp + 10].filter(v => v > 0).map((hp) => (
                        <label key={hp} className={`cursor-pointer px-4 py-2 rounded-md border text-sm font-medium transition-all ${power === String(hp) ? "border-secondary bg-secondary/10 text-secondary" : "border-border text-foreground hover:border-secondary/50"}`}>
                          <input type="radio" name="power" value={hp} className="sr-only" onChange={() => setPower(String(hp))} checked={power === String(hp)} />
                          {hp} HP
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="section-divider" />

              {/* Step 2: Configuration */}
              <div>
                <SectionLabel number="2" title="Configurazione Tecnica" />

                <div className="space-y-6">
                  {/* Transmission */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Tipo cambio *</label>
                    <div className="flex flex-wrap gap-3">
                      {transmissionOptions.map((t) => (
                        <label key={t} className={`cursor-pointer px-4 py-2 rounded-md border text-sm font-medium transition-all ${transmission === t ? "border-secondary bg-secondary/10 text-secondary" : "border-border text-foreground hover:border-secondary/50"}`}>
                          <input type="radio" name="transmission" value={t} className="sr-only" onChange={() => setTransmission(t)} checked={transmission === t} />
                          {t}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Color swatches */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Colore *</label>
                    <div className="flex flex-wrap gap-4">
                      {colorOptions.map((c) => (
                        <button
                          key={c.name}
                          type="button"
                          onClick={() => setColor(c.name)}
                          className="flex flex-col items-center gap-1.5 group"
                          title={c.name}
                        >
                          <span
                            className={`w-10 h-10 rounded-full border-2 transition-all ${color === c.name ? "border-secondary ring-2 ring-secondary/30 scale-110" : "border-border group-hover:border-secondary/50"}`}
                            style={{ backgroundColor: c.value }}
                          />
                          <span className={`text-xs font-medium ${color === c.name ? "text-secondary" : "text-muted-foreground"}`}>
                            {c.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Traction */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Trazione *</label>
                    <div className="flex gap-3">
                      {tractionOptions.map((t) => (
                        <label key={t} className={`cursor-pointer px-4 py-2 rounded-md border text-sm font-medium transition-all ${traction === t ? "border-secondary bg-secondary/10 text-secondary" : "border-border text-foreground hover:border-secondary/50"}`}>
                          <input type="radio" name="traction" value={t} className="sr-only" onChange={() => setTraction(t)} checked={traction === t} />
                          {t}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-divider" />

              {/* Step 3: Accessories */}
              <div>
                <SectionLabel number="3" title="Accessori e Quantità" />

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Accessori opzionali</label>
                    <div className="flex flex-wrap gap-3">
                      {accessoryOptions.map((acc) => (
                        <label key={acc} className={`cursor-pointer px-4 py-2 rounded-md border text-sm font-medium transition-all ${accessories.includes(acc) ? "border-secondary bg-secondary/10 text-secondary" : "border-border text-foreground hover:border-secondary/50"}`}>
                          <input type="checkbox" className="sr-only" checked={accessories.includes(acc)} onChange={() => toggleAccessory(acc)} />
                          {acc}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Quantità</label>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-24 border border-input rounded-md px-4 py-3 bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="section-divider" />

              {/* Step 4: Customer data */}
              <div>
                <SectionLabel number="4" title="I Tuoi Dati" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">Nome e Cognome *</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-input rounded-md px-4 py-3 bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" placeholder="Mario Rossi" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">Azienda</label>
                    <input value={company} onChange={(e) => setCompany(e.target.value)} className="w-full border border-input rounded-md px-4 py-3 bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" placeholder="Azienda Agricola..." />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">Email *</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-input rounded-md px-4 py-3 bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" placeholder="email@esempio.it" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">Telefono *</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border border-input rounded-md px-4 py-3 bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" placeholder="+39 333 000 0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">Ettari lavorati</label>
                    <input value={hectares} onChange={(e) => setHectares(e.target.value)} className="w-full border border-input rounded-md px-4 py-3 bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" placeholder="es. 50" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-semibold text-foreground mb-1">Messaggio aggiuntivo</label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={3} className="w-full border border-input rounded-md px-4 py-3 bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none resize-none" placeholder="Scrivi qui eventuali richieste..." />
                </div>
              </div>

              {/* GDPR */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={gdpr} onChange={(e) => setGdpr(e.target.checked)} className="mt-1 h-4 w-4 rounded border-border text-secondary focus:ring-ring" />
                <span className="text-sm text-muted-foreground">
                  Acconsento al trattamento dei miei dati personali ai sensi del GDPR (Regolamento UE 2016/679). *
                </span>
              </label>

              <button
                onClick={() => setStep("summary")}
                disabled={!canProceed}
                className="w-full gradient-accent text-accent-foreground py-4 rounded-md text-base font-bold uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity shadow-elevated"
              >
                Visualizza Riepilogo
              </button>
            </div>
          ) : (
            <div className="bg-card rounded-lg border border-border p-6 lg:p-10 shadow-card space-y-6">
              <h2 className="font-display text-2xl font-bold text-foreground">Riepilogo Configurazione</h2>

              <div className="bg-muted/40 rounded-lg p-6 space-y-3">
                {[
                  { label: "Modello", value: selectedTractor?.name || model },
                  { label: "Potenza", value: power ? `${power} HP` : "Standard" },
                  { label: "Cambio", value: transmission },
                  { label: "Colore", value: color },
                  { label: "Trazione", value: traction },
                  { label: "Accessori", value: accessories.length > 0 ? accessories.join(", ") : "Nessuno" },
                  { label: "Quantità", value: quantity },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between py-2 border-b border-border/50 last:border-0">
                    <span className="text-sm font-semibold text-foreground">{item.label}</span>
                    <span className="text-sm text-muted-foreground">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-muted/40 rounded-lg p-6 space-y-2">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">Dati di Contatto</h3>
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
                  onClick={() => setStep("config")}
                  className="flex-1 border-2 border-primary text-primary py-3 rounded-md font-semibold uppercase tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Modifica
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 gradient-accent text-accent-foreground py-4 rounded-md font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-elevated text-base"
                >
                  <Send className="h-4 w-4" />
                  Richiedi Preventivo Personalizzato
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Configuratore;
