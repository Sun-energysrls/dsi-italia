import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Send, CheckCircle, ChevronRight, ChevronLeft } from "lucide-react";
import Layout from "@/components/Layout";
import { tractors, globalColorOptions, brands } from "@/data/tractors";
import { toast } from "sonner";
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

const stepLabels = [
  "Brand",
  "Modello",
  "Motore",
  "Cambio",
  "Colore",
  "Accessori",
  "Riepilogo",
];

const transmissionAllOptions = ["Manuale", "Automatico", "CVT"];

const Configuratore = () => {
  const [searchParams] = useSearchParams();
  const preselectedModel = searchParams.get("modello") || "";

  const [step, setStep] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [model, setModel] = useState(preselectedModel);
  const [power, setPower] = useState("");
  const [transmission, setTransmission] = useState("");
  const [color, setColor] = useState("");
  const [accessories, setAccessories] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selectedTractor = tractors.find((t) => t.id === model);
  const brandTractors = tractors.filter((t) => t.brand === selectedBrand);
  const accessoryOptions = selectedTractor?.accessories ?? [];

  const powerOptions = selectedTractor
    ? [selectedTractor.hp - 10, selectedTractor.hp, selectedTractor.hp + 10].filter((v) => v > 0)
    : [];

  const handleBrandSelect = (brand: string) => {
    setSelectedBrand(brand);
    setModel("");
    setPower("");
    setTransmission("");
    setColor("");
    setAccessories([]);
  };

  const handleModelSelect = (id: string) => {
    setModel(id);
    setPower("");
    setTransmission("");
    setColor("");
    setAccessories([]);
  };

  const toggleAccessory = (acc: string) => {
    setAccessories((prev) =>
      prev.includes(acc) ? prev.filter((a) => a !== acc) : [...prev, acc]
    );
  };

  const canGoNext = () => {
    if (step === 0) return !!selectedBrand;
    if (step === 1) return !!model;
    if (step === 2) return !!power;
    if (step === 3) return !!transmission;
    if (step === 4) return !!color;
    if (step === 5) return true; // accessories optional
    if (step === 6) return !!name && !!email && !!phone;
    return false;
  };

  const handleSubmit = () => {
    toast.success("Richiesta inviata con successo! Vi contatteremo al più presto.");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="min-h-[80vh] flex items-center justify-center bg-background">
          <div className="text-center max-w-md px-4">
            <div className="w-20 h-20 bg-secondary flex items-center justify-center mx-auto mb-6 rounded-full">
              <CheckCircle className="h-10 w-10 text-secondary-foreground" />
            </div>
            <h1 className="text-3xl font-display font-black text-foreground mb-4 uppercase">
              Richiesta Inviata!
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Il nostro team vi risponderà entro 24 ore con un preventivo personalizzato.
            </p>
            <a
              href="/"
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-[4px] font-bold uppercase tracking-widest inline-block hover:opacity-90 transition-opacity"
            >
              Torna alla Home
            </a>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col lg:flex-row">
        {/* LEFT PANEL — 40% */}
        <div className="w-full lg:w-[40%] bg-card border-r border-border flex flex-col">
          {/* Step progress */}
          <div className="px-6 pt-8 pb-4 border-b border-border overflow-x-auto">
            <div className="flex items-center min-w-max">
              {stepLabels.map((label, i) => {
                const isDone = step > i;
                const isActive = step === i;
                const isFuture = step < i;
                return (
                  <div key={i} className="flex items-center">
                    <div className="flex flex-col items-center gap-1">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                          isDone
                            ? "bg-secondary text-secondary-foreground"
                            : isActive
                            ? "bg-transparent border-[3px] border-secondary text-secondary"
                            : "bg-transparent border-2 border-muted-foreground/30 text-muted-foreground/50"
                        }`}
                      >
                        {isDone ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          i + 1
                        )}
                      </div>
                      <span
                        className={`text-[9px] font-bold uppercase tracking-wider whitespace-nowrap ${
                          isDone || isActive ? "text-secondary" : "text-muted-foreground/50"
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                    {i < stepLabels.length - 1 && (
                      <div
                        className={`w-6 h-[2px] mx-1 mt-[-12px] ${
                          step > i ? "bg-secondary" : "bg-muted-foreground/20"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step content */}
          <div className="flex-1 px-6 py-8 overflow-y-auto">
            {/* Step 0: Brand */}
            {step === 0 && (
              <StepContent title="Seleziona il Brand">
                <div className="grid grid-cols-1 gap-3">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => handleBrandSelect(brand)}
                      className={`p-4 border-2 rounded-[4px] text-left font-bold text-base uppercase tracking-wide transition-all ${
                        selectedBrand === brand
                          ? "border-secondary bg-secondary/10 text-secondary"
                          : "border-border text-foreground hover:border-secondary/40"
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </StepContent>
            )}

            {/* Step 1: Modello */}
            {step === 1 && (
              <StepContent title="Seleziona il Modello">
                <div className="grid grid-cols-1 gap-3">
                  {brandTractors.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => handleModelSelect(t.id)}
                      className={`p-4 border-2 rounded-[4px] text-left transition-all ${
                        model === t.id
                          ? "border-secondary bg-secondary/10"
                          : "border-border hover:border-secondary/40"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display font-black text-foreground uppercase">
                          {t.name}
                        </span>
                        <span className="text-secondary font-black text-lg">{t.hp} HP</span>
                      </div>
                      <p className="text-muted-foreground text-sm mt-1">{t.shortDescription}</p>
                    </button>
                  ))}
                </div>
              </StepContent>
            )}

            {/* Step 2: Motore (power) */}
            {step === 2 && selectedTractor && (
              <StepContent title="Seleziona la Potenza">
                <div className="grid grid-cols-1 gap-3">
                  {powerOptions.map((hp) => (
                    <button
                      key={hp}
                      onClick={() => setPower(String(hp))}
                      className={`p-4 border-2 rounded-[4px] text-center font-black text-lg uppercase transition-all ${
                        power === String(hp)
                          ? "bg-secondary text-secondary-foreground border-secondary"
                          : "border-border text-foreground hover:border-secondary/40"
                      }`}
                    >
                      {hp} HP
                    </button>
                  ))}
                </div>
              </StepContent>
            )}

            {/* Step 3: Cambio */}
            {step === 3 && (
              <StepContent title="Tipo di Cambio">
                <div className="grid grid-cols-1 gap-3">
                  {transmissionAllOptions.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTransmission(t)}
                      className={`p-4 border-2 rounded-[4px] text-left font-bold text-base uppercase tracking-wide transition-all ${
                        transmission === t
                          ? "border-secondary bg-secondary/10 text-secondary"
                          : "border-border text-foreground hover:border-secondary/40"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </StepContent>
            )}

            {/* Step 4: Colore */}
            {step === 4 && (
              <StepContent title="Scegli il Colore">
                <div className="grid grid-cols-2 gap-4">
                  {globalColorOptions.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setColor(c.name)}
                      className="flex flex-col items-center gap-2 group"
                    >
                      <span
                        className={`w-16 h-16 rounded-full transition-all ${
                          color === c.name
                            ? "ring-4 ring-secondary ring-offset-2 ring-offset-card scale-110"
                            : "border-2 border-border group-hover:border-secondary/50"
                        }`}
                        style={{ backgroundColor: c.value }}
                      />
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider text-center ${
                          color === c.name ? "text-secondary" : "text-muted-foreground"
                        }`}
                      >
                        {c.name}
                      </span>
                    </button>
                  ))}
                </div>
              </StepContent>
            )}

            {/* Step 5: Accessori */}
            {step === 5 && selectedTractor && (
              <StepContent title="Accessori Opzionali">
                <div className="grid grid-cols-1 gap-3">
                  {accessoryOptions.map((acc) => (
                    <button
                      key={acc}
                      onClick={() => toggleAccessory(acc)}
                      className={`p-4 border-2 rounded-[4px] text-left font-medium text-sm flex items-center gap-3 transition-all ${
                        accessories.includes(acc)
                          ? "border-secondary bg-secondary/10 text-secondary"
                          : "border-border text-foreground hover:border-secondary/40"
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-[3px] border-2 flex items-center justify-center shrink-0 ${
                          accessories.includes(acc)
                            ? "bg-secondary border-secondary"
                            : "border-muted-foreground/30"
                        }`}
                      >
                        {accessories.includes(acc) && (
                          <CheckCircle className="h-3 w-3 text-secondary-foreground" />
                        )}
                      </span>
                      {acc}
                    </button>
                  ))}
                  {accessoryOptions.length === 0 && (
                    <p className="text-muted-foreground text-sm">
                      Nessun accessorio disponibile per questo modello.
                    </p>
                  )}
                </div>
              </StepContent>
            )}

            {/* Step 6: Riepilogo + Form */}
            {step === 6 && (
              <StepContent title="Riepilogo e Contatto">
                {/* Summary card */}
                <div className="bg-muted/50 border border-border rounded-[4px] p-4 mb-6 space-y-2">
                  {[
                    { label: "Brand", value: selectedBrand },
                    { label: "Modello", value: selectedTractor?.name },
                    { label: "Potenza", value: `${power} HP` },
                    { label: "Cambio", value: transmission },
                    { label: "Colore", value: color },
                    {
                      label: "Accessori",
                      value: accessories.length > 0 ? accessories.join(", ") : "Nessuno",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between text-sm py-1 border-b border-border/50 last:border-0">
                      <span className="font-bold text-foreground uppercase tracking-wide text-xs">
                        {item.label}
                      </span>
                      <span className="text-muted-foreground text-right">{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Contact form */}
                <div className="space-y-4">
                  {[
                    { label: "Nome *", value: name, setter: setName, placeholder: "Mario Rossi" },
                    { label: "Email *", value: email, setter: setEmail, placeholder: "email@esempio.it", type: "email" },
                    { label: "Telefono *", value: phone, setter: setPhone, placeholder: "+39 333 000 0000", type: "tel" },
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="block text-[10px] font-bold text-muted-foreground mb-1.5 uppercase tracking-widest">
                        {field.label}
                      </label>
                      <input
                        type={field.type || "text"}
                        value={field.value}
                        onChange={(e) => field.setter(e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full border border-input px-4 py-3 bg-background text-foreground text-sm rounded-[4px] focus:ring-2 focus:ring-secondary focus:outline-none"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-[10px] font-bold text-muted-foreground mb-1.5 uppercase tracking-widest">
                      Note
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={3}
                      placeholder="Richieste particolari..."
                      className="w-full border border-input px-4 py-3 bg-background text-foreground text-sm rounded-[4px] focus:ring-2 focus:ring-secondary focus:outline-none resize-none"
                    />
                  </div>
                </div>
              </StepContent>
            )}
          </div>

          {/* Navigation buttons */}
          <div className="px-6 py-4 border-t border-border flex items-center gap-3">
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-5 py-3 border-2 border-border text-foreground rounded-[4px] font-bold uppercase tracking-widest text-xs hover:border-foreground transition-all inline-flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Indietro
              </button>
            )}
            <div className="flex-1" />
            {step < 6 ? (
              <button
                onClick={() => canGoNext() && setStep(step + 1)}
                disabled={!canGoNext()}
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-[4px] font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-2"
              >
                Avanti
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={() => canGoNext() && handleSubmit()}
                disabled={!canGoNext()}
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-[4px] font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-2"
              >
                <Send className="h-4 w-4" />
                Invia Preventivo
              </button>
            )}
          </div>
        </div>

        {/* RIGHT PANEL — 60% preview */}
        <div className="hidden lg:flex w-[60%] bg-background flex-col items-center justify-center p-12 relative">
          {selectedTractor ? (
            <div className="w-full max-w-2xl">
              <div className="aspect-[16/10] mb-8">
                <img
                  src={imageMap[selectedTractor.image]}
                  alt={selectedTractor.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <StatBox label="Potenza" value={power ? `${power} HP` : `${selectedTractor.hp} HP`} />
                <StatBox label="Brand" value={selectedBrand || selectedTractor.brand} />
                <StatBox
                  label="Accessori"
                  value={accessories.length > 0 ? `${accessories.length} sel.` : "Nessuno"}
                />
              </div>
              {/* Color preview bar */}
              {color && (
                <div className="mt-6 flex items-center justify-center gap-3">
                  <span
                    className="w-8 h-8 rounded-full border-2 border-secondary"
                    style={{
                      backgroundColor: globalColorOptions.find((c) => c.name === color)?.value,
                    }}
                  />
                  <span className="text-sm font-bold text-foreground">{color}</span>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center">
              <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-muted-foreground/30">🚜</span>
              </div>
              <h3 className="font-display text-xl font-black text-muted-foreground/50 uppercase tracking-tight">
                Seleziona un modello
              </h3>
              <p className="text-muted-foreground/40 text-sm mt-2">
                L'anteprima apparirà qui
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

const StepContent = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h2 className="font-display text-xl font-black text-foreground uppercase tracking-tight mb-6">
      {title}
    </h2>
    {children}
  </div>
);

const StatBox = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-card border border-border p-4 text-center rounded-[4px]">
    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-1">
      {label}
    </span>
    <span className="font-display text-lg font-black text-foreground">{value}</span>
  </div>
);

export default Configuratore;
