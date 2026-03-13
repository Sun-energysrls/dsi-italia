import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Send, CheckCircle, ChevronRight, ChevronLeft, Check, Tractor as TractorIcon } from "lucide-react";
import Layout from "@/components/Layout";
import { tractors, globalColorOptions } from "@/data/tractors";
import { brands as brandData } from "@/data/brands";
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

const stepLabels = ["Brand", "Modello", "Motore", "Cambio", "Colore", "Accessori", "Riepilogo"];
const transmissionAllOptions = ["Manuale", "Automatico", "CVT"];

const Configuratore = () => {
  const [searchParams] = useSearchParams();
  const preselectedModel = searchParams.get("modello") || "";

  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
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
  const [animKey, setAnimKey] = useState(0);

  const selectedTractor = tractors.find((t) => t.id === model);
  const brandTractors = tractors.filter((t) => t.brand === selectedBrand);
  const accessoryOptions = selectedTractor?.accessories ?? [];
  const powerOptions = selectedTractor
    ? [selectedTractor.hp - 10, selectedTractor.hp, selectedTractor.hp + 10].filter((v) => v > 0)
    : [];

  const handleBrandSelect = (brand: string) => {
    setSelectedBrand(brand);
    setModel(""); setPower(""); setTransmission(""); setColor(""); setAccessories([]);
  };
  const handleModelSelect = (id: string) => {
    setModel(id); setPower(""); setTransmission(""); setColor(""); setAccessories([]);
  };
  const toggleAccessory = (acc: string) => {
    setAccessories((prev) => prev.includes(acc) ? prev.filter((a) => a !== acc) : [...prev, acc]);
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
  const goNext = () => {
    if (!canGoNext()) return;
    setDirection("next");
    setAnimKey((k) => k + 1);
    setStep((s) => s + 1);
  };
  const goBack = () => {
    setDirection("prev");
    setAnimKey((k) => k + 1);
    setStep((s) => s - 1);
  };
  const handleSubmit = () => {
    toast.success("Richiesta inviata con successo!");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="min-h-[80vh] flex items-center justify-center" style={{ background: "#F5F2EE" }}>
          <div className="text-center max-w-md px-4">
            <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 rounded-full" style={{ background: "#F97316" }}>
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl font-display font-black uppercase mb-4" style={{ color: "#1a1a1a" }}>
              Richiesta Inviata!
            </h1>
            <p style={{ color: "#666", fontSize: "1.1rem" }} className="mb-8">
              Il nostro team vi risponderà entro 24 ore con un preventivo personalizzato.
            </p>
            <Link to="/" className="btn-orange">Torna alla Home</Link>
          </div>
        </section>
      </Layout>
    );
  }

  const progressWidth = ((step + 1) / 7) * 100;

  return (
    <Layout>
      <div className="min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row">
        {/* LEFT PANEL */}
        <div
          className="w-full lg:w-[42%] flex flex-col relative"
          style={{ background: "var(--dsi-green-gradient)" }}
        >
          {/* Stepper */}
          <div className="px-6 lg:px-10 pt-8 pb-6" style={{ marginBottom: 0 }}>
            <div className="flex items-start justify-between">
              {stepLabels.map((label, i) => {
                const isDone = step > i;
                const isActive = step === i;
                return (
                  <div key={i} className="flex flex-col items-center flex-1">
                    <div className="flex items-center w-full">
                      {i > 0 && (
                        <div
                          className="flex-1 h-px"
                          style={{ background: step > i - 1 ? "#F97316" : "rgba(255,255,255,0.15)" }}
                        />
                      )}
                      <div
                        className="shrink-0 flex items-center justify-center"
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          ...(isDone
                            ? { background: "#F97316", border: "none" }
                            : isActive
                            ? { background: "transparent", border: "2px solid #F97316" }
                            : { background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)" }),
                        }}
                      >
                        {isDone ? (
                          <Check className="h-4 w-4 text-white" />
                        ) : (
                          <span
                            style={{
                              fontSize: "0.7rem",
                              fontWeight: 700,
                              color: isActive ? "#F97316" : "rgba(255,255,255,0.35)",
                            }}
                          >
                            {i + 1}
                          </span>
                        )}
                      </div>
                      {i < stepLabels.length - 1 && (
                        <div
                          className="flex-1 h-px"
                          style={{ background: step > i ? "#F97316" : "rgba(255,255,255,0.15)" }}
                        />
                      )}
                    </div>
                    <span
                      className="mt-1.5 whitespace-nowrap"
                      style={{
                        fontSize: "0.55rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: isActive ? "#F97316" : "rgba(255,255,255,0.4)",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step content - scrollable */}
          <div className="flex-1 overflow-y-auto px-6 lg:px-10 pb-4">
            <div
              key={animKey}
              style={{
                animation: `slideIn${direction === "next" ? "Right" : "Left"} 0.35s ease forwards`,
              }}
            >
              {/* Step title */}
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>
                PASSO {step + 1} DI 7
              </p>

              {step === 0 && (
                <div>
                  <h2 className="font-display font-black text-white uppercase tracking-tight mb-8" style={{ fontSize: "1.4rem" }}>
                    Seleziona il Brand
                  </h2>
                  <div className="space-y-3">
                    {brandData.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => handleBrandSelect(b.name)}
                        className="w-full flex items-center gap-4 transition-all duration-200"
                        style={{
                          background: selectedBrand === b.name ? "rgba(249,115,22,0.12)" : "rgba(255,255,255,0.06)",
                          border: selectedBrand === b.name ? "1px solid #F97316" : "1px solid rgba(255,255,255,0.12)",
                          borderRadius: 6,
                          padding: "20px 24px",
                          ...(selectedBrand === b.name ? { boxShadow: "0 0 0 1px #F97316, 0 8px 24px rgba(249,115,22,0.15)" } : {}),
                        }}
                      >
                        <div
                          className="shrink-0 flex items-center justify-center"
                          style={{ width: 36, height: 36, borderRadius: 4, background: "white", color: "#1a1a1a", fontWeight: 700, fontSize: "0.85rem" }}
                        >
                          {b.initials}
                        </div>
                        <div className="text-left flex-1">
                          <span className="text-white font-semibold block" style={{ fontSize: "1rem" }}>{b.name}</span>
                          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{b.country}</span>
                        </div>
                        <div
                          className="shrink-0"
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: "50%",
                            border: selectedBrand === b.name ? "none" : "2px solid rgba(255,255,255,0.3)",
                            background: selectedBrand === b.name ? "#F97316" : "transparent",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {selectedBrand === b.name && <Check className="h-3 w-3 text-white" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h2 className="font-display font-black text-white uppercase tracking-tight mb-4" style={{ fontSize: "1.4rem" }}>
                    Seleziona il Modello
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", marginBottom: 16 }}>
                    {brandTractors.length} modelli Tavol disponibili
                  </p>
                  {/* Horizontal scroll container */}
                  <div
                    className="overflow-x-auto pb-4 -mx-2"
                    style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(249,115,22,0.4) transparent" }}
                  >
                    <div className="flex gap-3 px-2" style={{ minWidth: "max-content" }}>
                      {brandTractors.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => handleModelSelect(t.id)}
                          className="shrink-0 flex flex-col items-center transition-all duration-200"
                          style={{
                            width: 192,
                            background: model === t.id ? "rgba(249,115,22,0.12)" : "rgba(255,255,255,0.06)",
                            border: model === t.id ? "2px solid #F97316" : "1px solid rgba(255,255,255,0.12)",
                            borderRadius: 8,
                            padding: "16px 12px",
                            ...(model === t.id ? { boxShadow: "0 0 0 1px #F97316, 0 8px 24px rgba(249,115,22,0.15)" } : {}),
                          }}
                        >
                          <div className="w-full h-20 overflow-hidden rounded mb-3" style={{ background: "rgba(255,255,255,0.08)" }}>
                            <img src={imageMap[t.image]} alt={t.name} className="w-full h-full object-contain p-1" />
                          </div>
                          <span className="text-white font-semibold text-sm text-center block">{t.name}</span>
                          <span style={{ color: "#F97316", fontWeight: 700, fontSize: "0.85rem", marginTop: 4 }}>{t.hp} HP</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="font-display font-black text-white uppercase tracking-tight mb-8" style={{ fontSize: "1.4rem" }}>
                    Seleziona la Potenza
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {powerOptions.map((hp) => (
                      <button
                        key={hp}
                        onClick={() => setPower(String(hp))}
                        className="transition-all duration-200"
                        style={{
                          border: power === String(hp) ? "1px solid #F97316" : "1px solid rgba(255,255,255,0.2)",
                          background: power === String(hp) ? "#F97316" : "transparent",
                          color: power === String(hp) ? "white" : "rgba(255,255,255,0.7)",
                          borderRadius: 4,
                          padding: "10px 20px",
                          fontWeight: 700,
                          fontSize: "1rem",
                        }}
                      >
                        {hp} HP
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="font-display font-black text-white uppercase tracking-tight mb-8" style={{ fontSize: "1.4rem" }}>
                    Tipo di Cambio
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {transmissionAllOptions.map((t) => (
                      <button
                        key={t}
                        onClick={() => setTransmission(t)}
                        className="transition-all duration-200"
                        style={{
                          border: transmission === t ? "1px solid #F97316" : "1px solid rgba(255,255,255,0.2)",
                          background: transmission === t ? "#F97316" : "transparent",
                          color: transmission === t ? "white" : "rgba(255,255,255,0.7)",
                          borderRadius: 4,
                          padding: "10px 20px",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h2 className="font-display font-black text-white uppercase tracking-tight mb-8" style={{ fontSize: "1.4rem" }}>
                    Scegli il Colore
                  </h2>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {globalColorOptions.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setColor(c.name)}
                        className="flex flex-col items-center gap-2"
                      >
                        <span
                          className="transition-all duration-200"
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            backgroundColor: c.value,
                            display: "block",
                            border: color === c.name ? "2px solid #F97316" : "2px solid transparent",
                            boxShadow: color === c.name ? "0 0 0 3px rgba(249,115,22,0.3)" : "none",
                            transform: color === c.name ? "scale(1.15)" : "scale(1)",
                          }}
                        />
                        <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.6rem", textAlign: "center", maxWidth: 60 }}>
                          {c.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 5 && (
                <div>
                  <h2 className="font-display font-black text-white uppercase tracking-tight mb-8" style={{ fontSize: "1.4rem" }}>
                    Accessori Opzionali
                  </h2>
                  <div>
                    {accessoryOptions.map((acc) => (
                      <button
                        key={acc}
                        onClick={() => toggleAccessory(acc)}
                        className="w-full flex items-center gap-3 transition-all duration-200"
                        style={{
                          padding: "14px 0",
                          borderBottom: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        <span
                          className="shrink-0 flex items-center justify-center"
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: 3,
                            border: accessories.includes(acc) ? "none" : "1.5px solid rgba(255,255,255,0.3)",
                            background: accessories.includes(acc) ? "#F97316" : "transparent",
                          }}
                        >
                          {accessories.includes(acc) && <Check className="h-3 w-3 text-white" />}
                        </span>
                        <span className="text-white text-left" style={{ fontSize: "0.9rem" }}>{acc}</span>
                      </button>
                    ))}
                    {accessoryOptions.length === 0 && (
                      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>
                        Nessun accessorio disponibile per questo modello.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {step === 6 && (
                <div>
                  <h2 className="font-display font-black text-white uppercase tracking-tight mb-8" style={{ fontSize: "1.4rem" }}>
                    Riepilogo e Contatto
                  </h2>
                  <div
                    className="mb-6"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      borderRadius: 8,
                      padding: 24,
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    {[
                      { label: "Brand", value: selectedBrand },
                      { label: "Modello", value: selectedTractor?.name },
                      { label: "Potenza", value: `${power} HP` },
                      { label: "Cambio", value: transmission },
                      { label: "Colore", value: color },
                      { label: "Accessori", value: accessories.length > 0 ? accessories.join(", ") : "Nessuno" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex justify-between py-2"
                        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                          {item.label}
                        </span>
                        <span className="text-white text-right" style={{ fontSize: "0.85rem" }}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Nome *", value: name, setter: setName, ph: "Mario Rossi" },
                      { label: "Email *", value: email, setter: setEmail, ph: "email@esempio.it", type: "email" },
                      { label: "Telefono *", value: phone, setter: setPhone, ph: "+39 333 000 0000", type: "tel" },
                    ].map((f) => (
                      <div key={f.label}>
                        <label
                          className="block mb-1.5"
                          style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}
                        >
                          {f.label}
                        </label>
                        <input
                          type={f.type || "text"}
                          value={f.value}
                          onChange={(e) => f.setter(e.target.value)}
                          placeholder={f.ph}
                          className="w-full"
                          style={{
                            background: "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(255,255,255,0.15)",
                            borderRadius: 4,
                            color: "white",
                            padding: "12px 16px",
                            fontSize: "0.9rem",
                            outline: "none",
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = "#F97316";
                            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(249,115,22,0.15)";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        />
                      </div>
                    ))}
                    <div>
                      <label
                        className="block mb-1.5"
                        style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}
                      >
                        Note
                      </label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        rows={3}
                        placeholder="Richieste particolari..."
                        className="w-full resize-none"
                        style={{
                          background: "rgba(255,255,255,0.08)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          borderRadius: 4,
                          color: "white",
                          padding: "12px 16px",
                          fontSize: "0.9rem",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation bar */}
          <div
            className="px-6 lg:px-10 py-5 flex items-center justify-between"
            style={{
              background: "rgba(0,0,0,0.2)",
              backdropFilter: "blur(10px)",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {step > 0 ? (
              <button
                onClick={goBack}
                className="transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.5)", background: "none", border: "none", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}
              >
                <ChevronLeft className="h-4 w-4" /> Indietro
              </button>
            ) : (
              <div />
            )}

            {step < 6 ? (
              <button
                onClick={goNext}
                disabled={!canGoNext()}
                className="btn-orange !py-3 !px-8 !text-xs"
                style={!canGoNext() ? { opacity: 0.4, cursor: "not-allowed" } : {}}
              >
                Avanti <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={() => canGoNext() && handleSubmit()}
                disabled={!canGoNext()}
                className="btn-orange !py-3 !px-8 !text-xs w-full lg:w-auto"
                style={!canGoNext() ? { opacity: 0.4, cursor: "not-allowed" } : {}}
              >
                <Send className="h-4 w-4" /> Invia Preventivo
              </button>
            )}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div
          className="hidden lg:flex w-[58%] flex-col items-center justify-center relative"
          style={{ background: "#F5F2EE", padding: "60px 40px" }}
        >
          <p
            className="uppercase mb-10"
            style={{ color: "#999", fontSize: "0.65rem", letterSpacing: "0.2em" }}
          >
            ANTEPRIMA CONFIGURAZIONE
          </p>

          {selectedTractor ? (
            <div className="w-full max-w-[500px]">
              <img
                key={selectedTractor.id}
                src={imageMap[selectedTractor.image]}
                alt={selectedTractor.name}
                className="w-full h-auto object-contain"
                style={{
                  maxHeight: 340,
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.12))",
                  animation: "fadeSlideIn 0.4s ease forwards",
                }}
              />

              {color && (
                <div className="flex items-center justify-center gap-3 mt-4">
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      border: "2px solid #F97316",
                      backgroundColor: globalColorOptions.find((c) => c.name === color)?.value,
                      display: "inline-block",
                    }}
                  />
                  <span style={{ color: "#666", fontSize: "0.85rem", fontWeight: 600 }}>{color}</span>
                </div>
              )}

              <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  { label: "Potenza", value: power ? `${power} HP` : `${selectedTractor.hp} HP` },
                  { label: "Brand", value: selectedBrand || selectedTractor.brand },
                  { label: "Accessori", value: accessories.length > 0 ? `${accessories.length} sel.` : "—" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="text-center"
                    style={{
                      background: "white",
                      borderRadius: 6,
                      border: "1px solid #EDE9E3",
                      padding: "16px 20px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <span style={{ color: "#1a1a1a", fontSize: "1.1rem", fontWeight: 600, display: "block" }}>
                      {s.value}
                    </span>
                    <span style={{ color: "#999", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <TractorIcon style={{ width: 80, height: 80, color: "#D0CBC3" }} className="mx-auto mb-4" />
              <p className="uppercase" style={{ color: "#C0BAB2", fontSize: "0.75rem", letterSpacing: "0.15em", marginBottom: 8 }}>
                SELEZIONA UN MODELLO
              </p>
              <p style={{ color: "#D0CBC3", fontSize: "0.8rem" }}>
                L'anteprima apparirà qui
              </p>
            </div>
          )}

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div style={{ width: 200, height: 2, background: "#EDE9E3", borderRadius: 1, overflow: "hidden" }}>
              <div style={{ width: `${progressWidth}%`, height: "100%", background: "#F97316", transition: "width 0.4s ease" }} />
            </div>
            <span style={{ color: "#999", fontSize: "0.65rem" }}>
              Step {step + 1} di 7
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        input::placeholder, textarea::placeholder {
          color: rgba(255,255,255,0.35) !important;
        }
      `}</style>
    </Layout>
  );
};

export default Configuratore;
