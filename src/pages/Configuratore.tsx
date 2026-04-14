import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Send, CheckCircle, ChevronRight, ChevronLeft, Check, Tractor as TractorIcon } from "lucide-react";
import Layout from "@/components/Layout";
import { tractors, globalColorOptions } from "@/data/tractors";
import { brands as brandData } from "@/data/brands";
import { toast } from "sonner";
import { getTractorImage } from "@/data/tractor-images";

const stepLabels = ["Brand", "Modello", "Cambio", "Colore", "Accessori", "Riepilogo"];

const Configuratore = () => {
  const [searchParams] = useSearchParams();

  // Preselect from query params
  const paramBrand = searchParams.get("brand") || "";
  const paramModel = searchParams.get("model") || "";
  const preselectedTractor = paramModel ? tractors.find((t) => t.id === paramModel) : null;

  const initialStep = preselectedTractor ? 2 : paramBrand ? 1 : 0;
  const initialBrand = preselectedTractor ? preselectedTractor.brand : paramBrand || "";
  const initialModel = preselectedTractor ? preselectedTractor.id : "";

  const [step, setStep] = useState(initialStep);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [model, setModel] = useState(initialModel);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [transmission, setTransmission] = useState("");
  const [color, setColor] = useState("");
  const [accessories, setAccessories] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const selectedTractor = tractors.find((t) => t.id === model);
  const brandTractors = tractors.filter((t) => t.brand === selectedBrand);
  const accessoryOptions = selectedTractor?.accessories ?? [];
  const transmissionOptions = selectedTractor?.transmissionOptions ?? [];

  const handleBrandSelect = (brand: string) => {
    setSelectedBrand(brand);
    setModel(""); setTransmission(""); setColor(""); setAccessories(""); setSelectedCategory("");
  };
  const handleModelSelect = (id: string) => {
    setModel(id); setTransmission(""); setColor(""); setAccessories("");
  };
  // toggleAccessory removed
  const canGoNext = () => {
    if (step === 0) return !!selectedBrand;
    if (step === 1) return !!model;
    if (step === 2) return !!transmission;
    if (step === 3) return !!color;
    if (step === 4) return true;
    if (step === 5) return !!name && !!email && !!phone;
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

  const progressWidth = ((step + 1) / 6) * 100;

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

          {/* Mobile Preview Tractors */}
          <div className="lg:hidden flex flex-col items-center px-6 py-4 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.2)] shadow-inner">
            <span style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontWeight: 600, marginBottom: 8 }}>In Configurazione</span>
            {selectedTractor ? (
              <div className="flex flex-col items-center">
                <img key={selectedTractor.id} src={getTractorImage(selectedTractor.id)} alt={selectedTractor.name} className="h-28 object-contain drop-shadow-2xl mb-3" style={{ animation: "fadeSlideIn 0.4s ease forwards" }} />
                <div className="flex bg-[#F97316] text-white px-3 py-1.5 rounded text-[0.75rem] font-bold items-center gap-2 drop-shadow">
                  {selectedTractor.name} {color ? `(Color: ${color})` : ""}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center py-2">
                <TractorIcon className="h-10 w-10 text-white/20 mb-2" />
                <span className="text-[0.7rem] text-white/40 italic">Nessun modello</span>
              </div>
            )}
          </div>

          {/* Step content - scrollable */}
          <div className="flex-1 overflow-y-auto px-6 lg:px-10 pb-4 pt-4" data-lenis-prevent="true">
            <div
              key={animKey}
              style={{
                animation: `slideIn${direction === "next" ? "Right" : "Left"} 0.35s ease forwards`,
              }}
            >
              {/* Step title */}
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>
                PASSO {step + 1} DI 6
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
                  
                  {/* Category Filter Buttons */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <button
                        onClick={() => setSelectedCategory("")}
                        className="px-3 py-1.5 md:px-4 md:py-2 rounded text-[0.7rem] md:text-[0.8rem] transition-colors whitespace-nowrap flex-grow-0"
                        style={{
                            background: selectedCategory === "" ? "#F97316" : "rgba(255,255,255,0.06)",
                            color: selectedCategory === "" ? "white" : "rgba(255,255,255,0.6)",
                            border: selectedCategory === "" ? "1px solid #F97316" : "1px solid rgba(255,255,255,0.12)",
                            fontWeight: selectedCategory === "" ? 700 : 500
                        }}
                    >
                        Tutti
                    </button>
                    {Array.from(new Set(brandTractors.map(t => t.category))).map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className="px-3 py-1.5 md:px-4 md:py-2 rounded text-[0.7rem] md:text-[0.8rem] transition-colors whitespace-nowrap flex-grow-0"
                            style={{
                                background: selectedCategory === cat ? "#F97316" : "rgba(255,255,255,0.06)",
                                color: selectedCategory === cat ? "white" : "rgba(255,255,255,0.6)",
                                border: selectedCategory === cat ? "1px solid #F97316" : "1px solid rgba(255,255,255,0.12)",
                                fontWeight: selectedCategory === cat ? 700 : 500
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                  </div>

                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", marginBottom: 12 }}>
                    {brandTractors.filter(t => selectedCategory === "" || t.category === selectedCategory).length} modelli disponibili
                  </p>

                  {/* Vertical scroll container with fixed height simulating a dropdown/list */}
                  <div
                    className="overflow-y-auto pr-2"
                    data-lenis-prevent="true"
                    style={{ maxHeight: "40vh", minHeight: "250px", scrollbarWidth: "thin", scrollbarColor: "rgba(249,115,22,0.4) transparent" }}
                  >
                    <div className="flex flex-col gap-3">
                      {brandTractors.filter(t => selectedCategory === "" || t.category === selectedCategory).map((t) => (
                        <button
                          key={t.id}
                          onClick={() => handleModelSelect(t.id)}
                          className="w-full flex items-center gap-3 transition-all duration-200"
                          style={{
                            background: model === t.id ? "rgba(249,115,22,0.12)" : "rgba(255,255,255,0.06)",
                            border: model === t.id ? "2px solid #F97316" : "1px solid rgba(255,255,255,0.12)",
                            borderRadius: 8,
                            padding: "10px 14px",
                            height: 80,
                            ...(model === t.id ? { boxShadow: "0 0 0 1px #F97316, 0 8px 24px rgba(249,115,22,0.15)" } : {}),
                          }}
                        >
                          <div className="shrink-0 w-[72px] h-[72px] overflow-hidden rounded" style={{ background: "rgba(255,255,255,0.08)" }}>
                            <img src={getTractorImage(t.id)} alt={t.name} className="w-full h-full object-contain p-1" />
                          </div>
                          <div className="flex-1 text-left min-w-0">
                            <span className="text-white font-semibold text-sm block truncate">{t.name}</span>
                            <span
                              className="inline-block mt-1 font-bold text-white"
                              style={{ background: "#F97316", borderRadius: 3, padding: "2px 8px", fontSize: "0.7rem" }}
                            >
                              {t.hp} HP
                            </span>
                            <span className="block mt-0.5 truncate" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.65rem" }}>
                              {t.category}
                            </span>
                          </div>
                          <div
                            className="shrink-0"
                            style={{
                              width: 22,
                              height: 22,
                              borderRadius: "50%",
                              border: model === t.id ? "none" : "2px solid rgba(255,255,255,0.3)",
                              background: model === t.id ? "#F97316" : "transparent",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {model === t.id && <Check className="h-3 w-3 text-white" />}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="font-display font-black text-white uppercase tracking-tight mb-8" style={{ fontSize: "1.4rem" }}>
                    Tipo di Cambio
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {transmissionOptions.map((t) => (
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

              {step === 3 && (
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
                            background: c.value,
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

              {step === 4 && (
                <div>
                  <h2 className="font-display font-black text-white uppercase tracking-tight mb-4" style={{ fontSize: "1.4rem" }}>
                    Richiedi Accessori
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", marginBottom: 16 }}>
                    Al momento non abbiamo gli accessori in pronta consegna. Usa questo spazio per inviare una richiesta specifica al Team DSI e ti proporremo le migliori soluzioni per {selectedTractor?.name || "il tuo modello"}.
                  </p>
                  <textarea
                    value={accessories}
                    onChange={(e) => setAccessories(e.target.value)}
                    rows={6}
                    placeholder="Esempio: Vorrei installare un caricatore frontale e avere un preventivo per un rimorchio ribaltabile..."
                    className="w-full resize-none"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: 6,
                      color: "white",
                      padding: "16px",
                      fontSize: "0.95rem",
                      lineHeight: "1.5",
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
              )}

              {step === 5 && (
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
                      { label: "Potenza", value: `${selectedTractor?.hp} HP` },
                      { label: "Cambio", value: transmission },
                      { label: "Colore", value: color },
                      { label: "Accessori", value: accessories.trim() !== "" ? "Richiesti (vedi note)" : "Nessuno" },
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

            {step < 5 ? (
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
              <div
                style={{
                  background: "var(--dsi-green-gradient)",
                  borderRadius: 12,
                  padding: "14px 14px 12px",
                  boxShadow: "0 22px 44px rgba(0,0,0,0.16)",
                  marginBottom: 18,
                  border: "1px solid rgba(255,255,255,0.14)",
                }}
              >
                <div className="flex justify-end mb-2">
                  <span
                    style={{
                      background: "rgba(255,255,255,0.14)",
                      color: "hsl(var(--primary-foreground))",
                      borderRadius: 4,
                      padding: "4px 10px",
                      fontSize: "0.62rem",
                      letterSpacing: "0.18em",
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    DSI
                  </span>
                </div>

                <img
                  key={selectedTractor.id}
                  src={getTractorImage(selectedTractor.id)}
                  alt={selectedTractor.name}
                  className="w-full h-auto object-contain"
                  style={{
                    maxHeight: 310,
                    filter: "drop-shadow(0 16px 30px rgba(0,0,0,0.18))",
                    animation: "fadeSlideIn 0.4s ease forwards",
                  }}
                />

                {color && (
                  <div className="flex items-center justify-center gap-3 mt-3">
                    <span
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        border: "2px solid #F97316",
                        background: globalColorOptions.find((c) => c.name === color)?.value,
                        display: "inline-block",
                      }}
                    />
                    <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.85rem", fontWeight: 600 }}>{color}</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  { label: "Potenza", value: `${selectedTractor.hp} HP` },
                  { label: "Brand", value: selectedBrand || selectedTractor.brand },
                  { label: "Accessori", value: accessories.trim() !== "" ? "Richiesti" : "—" },
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
              Step {step + 1} di 6
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
      `}
      </style>
    </Layout>
  );
};

export default Configuratore;
