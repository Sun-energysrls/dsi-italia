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
    if (step === 5) return true;
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
            <div className="w-20 h-20 border border-secondary flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-secondary" />
            </div>
            <h1 className="text-3xl font-display font-black text-foreground mb-4 uppercase tracking-tight">
              Richiesta Inviata!
            </h1>
            <p className="text-muted-foreground text-base mb-8">
              Il nostro team vi risponderà entro 24 ore con un preventivo personalizzato.
            </p>
            <a
              href="/"
              className="border border-secondary text-secondary px-8 py-3 font-bold uppercase tracking-[0.2em] text-[11px] inline-block hover:bg-secondary hover:text-secondary-foreground transition-all"
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
        {/* LEFT PANEL */}
        <div className="w-full lg:w-[40%] bg-card border-r border-border/30 flex flex-col">
          {/* Step progress */}
          <div className="px-6 pt-8 pb-4 border-b border-border/30 overflow-x-auto">
            <div className="flex items-center min-w-max">
              {stepLabels.map((label, i) => {
                const isDone = step > i;
                const isActive = step === i;
                return (
                  <div key={i} className="flex items-center">
                    <div className="flex flex-col items-center gap-1">
                      <div
                        className={`w-8 h-8 flex items-center justify-center text-[10px] font-black transition-all ${
                          isDone
                            ? "bg-secondary text-secondary-foreground"
                            : isActive
                            ? "border-2 border-secondary text-secondary"
                            : "border border-border text-muted-foreground"
                        }`}
                      >
                        {isDone ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          i + 1
                        )}
                      </div>
                      <span
                        className={`text-[8px] font-bold uppercase tracking-[0.15em] whitespace-nowrap ${
                          isDone || isActive ? "text-secondary" : "text-muted-foreground/50"
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                    {i < stepLabels.length - 1 && (
                      <div
                        className={`w-6 h-[1px] mx-1 mt-[-12px] ${
                          step > i ? "bg-secondary" : "bg-border"
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
            {step === 0 && (
              <StepContent title="Seleziona il Brand">
                <div className="grid grid-cols-1 gap-3">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => handleBrandSelect(brand)}
                      className={`p-4 border text-left font-bold text-sm uppercase tracking-[0.15em] transition-all ${
                        selectedBrand === brand
                          ? "border-secondary text-secondary bg-secondary/5"
                          : "border-border text-foreground/70 hover:border-foreground/30"
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </StepContent>
            )}

            {step === 1 && (
              <StepContent title="Seleziona il Modello">
                <div className="grid grid-cols-1 gap-3">
                  {brandTractors.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => handleModelSelect(t.id)}
                      className={`p-4 border text-left transition-all ${
                        model === t.id
                          ? "border-secondary bg-secondary/5"
                          : "border-border hover:border-foreground/30"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display font-black text-foreground uppercase text-sm">
                          {t.name}
                        </span>
                        <span className="text-secondary font-black text-lg">{t.hp} HP</span>
                      </div>
                      <p className="text-muted-foreground text-xs mt-1">{t.shortDescription}</p>
                    </button>
                  ))}
                </div>
              </StepContent>
            )}

            {step === 2 && selectedTractor && (
              <StepContent title="Seleziona la Potenza">
                <div className="grid grid-cols-1 gap-3">
                  {powerOptions.map((hp) => (
                    <button
                      key={hp}
                      onClick={() => setPower(String(hp))}
                      className={`p-4 border text-center font-black text-lg uppercase transition-all ${
                        power === String(hp)
                          ? "bg-secondary text-secondary-foreground border-secondary"
                          : "border-border text-foreground hover:border-foreground/30"
                      }`}
                    >
                      {hp} HP
                    </button>
                  ))}
                </div>
              </StepContent>
            )}

            {step === 3 && (
              <StepContent title="Tipo di Cambio">
                <div className="grid grid-cols-1 gap-3">
                  {transmissionAllOptions.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTransmission(t)}
                      className={`p-4 border text-left font-bold text-sm uppercase tracking-[0.15em] transition-all ${
                        transmission === t
                          ? "border-secondary text-secondary bg-secondary/5"
                          : "border-border text-foreground/70 hover:border-foreground/30"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </StepContent>
            )}

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
                        className={`w-16 h-16 transition-all ${
                          color === c.name
                            ? "ring-2 ring-secondary ring-offset-2 ring-offset-card scale-110"
                            : "border border-border group-hover:border-foreground/30"
                        }`}
                        style={{ backgroundColor: c.value }}
                      />
                      <span
                        className={`text-[9px] font-bold uppercase tracking-[0.15em] text-center ${
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

            {step === 5 && selectedTractor && (
              <StepContent title="Accessori Opzionali">
                <div className="grid grid-cols-1 gap-3">
                  {accessoryOptions.map((acc) => (
                    <button
                      key={acc}
                      onClick={() => toggleAccessory(acc)}
                      className={`p-4 border text-left font-medium text-sm flex items-center gap-3 transition-all ${
                        accessories.includes(acc)
                          ? "border-secondary text-secondary bg-secondary/5"
                          : "border-border text-foreground/70 hover:border-foreground/30"
                      }`}
                    >
                      <span
                        className={`w-4 h-4 border flex items-center justify-center shrink-0 ${
                          accessories.includes(acc)
                            ? "bg-secondary border-secondary"
                            : "border-border"
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

            {step === 6 && (
              <StepContent title="Riepilogo e Contatto">
                <div className="bg-muted/30 border border-border/30 p-4 mb-6 space-y-2">
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
                    <div key={item.label} className="flex justify-between text-sm py-1 border-b border-border/20 last:border-0">
                      <span className="font-bold text-foreground/80 uppercase tracking-[0.15em] text-[10px]">
                        {item.label}
                      </span>
                      <span className="text-muted-foreground text-right text-xs">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Nome *", value: name, setter: setName, placeholder: "Mario Rossi" },
                    { label: "Email *", value: email, setter: setEmail, placeholder: "email@esempio.it", type: "email" },
                    { label: "Telefono *", value: phone, setter: setPhone, placeholder: "+39 333 000 0000", type: "tel" },
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="block text-[9px] font-bold text-muted-foreground mb-1.5 uppercase tracking-[0.2em]">
                        {field.label}
                      </label>
                      <input
                        type={field.type || "text"}
                        value={field.value}
                        onChange={(e) => field.setter(e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full border border-border px-4 py-3 bg-background text-foreground text-sm focus:ring-1 focus:ring-secondary focus:outline-none"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-[9px] font-bold text-muted-foreground mb-1.5 uppercase tracking-[0.2em]">
                      Note
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={3}
                      placeholder="Richieste particolari..."
                      className="w-full border border-border px-4 py-3 bg-background text-foreground text-sm focus:ring-1 focus:ring-secondary focus:outline-none resize-none"
                    />
                  </div>
                </div>
              </StepContent>
            )}
          </div>

          {/* Navigation buttons */}
          <div className="px-6 py-4 border-t border-border/30 flex items-center gap-3">
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-5 py-3 border border-border text-foreground/70 font-bold uppercase tracking-[0.15em] text-[10px] hover:border-foreground/30 transition-all inline-flex items-center gap-2"
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
                className="px-6 py-3 bg-secondary text-secondary-foreground font-bold uppercase tracking-[0.15em] text-[10px] hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed inline-flex items-center gap-2"
              >
                Avanti
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={() => canGoNext() && handleSubmit()}
                disabled={!canGoNext()}
                className="px-6 py-3 bg-secondary text-secondary-foreground font-bold uppercase tracking-[0.15em] text-[10px] hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed inline-flex items-center gap-2"
              >
                <Send className="h-4 w-4" />
                Invia Preventivo
              </button>
            )}
          </div>
        </div>

        {/* RIGHT PANEL */}
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
              <div className="grid grid-cols-3 gap-px bg-border/30">
                <StatBox label="Potenza" value={power ? `${power} HP` : `${selectedTractor.hp} HP`} />
                <StatBox label="Brand" value={selectedBrand || selectedTractor.brand} />
                <StatBox
                  label="Accessori"
                  value={accessories.length > 0 ? `${accessories.length} sel.` : "Nessuno"}
                />
              </div>
              {color && (
                <div className="mt-6 flex items-center justify-center gap-3">
                  <span
                    className="w-6 h-6 border border-secondary"
                    style={{
                      backgroundColor: globalColorOptions.find((c) => c.name === color)?.value,
                    }}
                  />
                  <span className="text-xs font-bold text-foreground/80 uppercase tracking-[0.15em]">{color}</span>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center">
              <div className="w-32 h-32 border border-border flex items-center justify-center mx-auto mb-6">
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
    <h2 className="font-display text-lg font-black text-foreground uppercase tracking-[0.1em] mb-6">
      {title}
    </h2>
    {children}
  </div>
);

const StatBox = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-card p-4 text-center">
    <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.2em] block mb-1">
      {label}
    </span>
    <span className="font-display text-lg font-black text-foreground">{value}</span>
  </div>
);

export default Configuratore;
