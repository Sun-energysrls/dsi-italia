import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, CheckCircle, ClipboardList, PackageCheck, Send, Ship, SlidersHorizontal } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { getBrandById } from "@/data/brands";
import { globalColorOptions } from "@/data/tractors";

const usageOptions = ["Campo aperto", "Frutteto / Vigneto", "Zootecnia", "Trasporto", "Manutenzione del verde", "Serre"];
const cabOptions = ["Cabina climatizzata", "Arco di protezione (ROPS)", "Nessuna preferenza"];
const accessoryOptions = [
  "Caricatore frontale",
  "Sollevatore anteriore",
  "Presa di forza anteriore",
  "Zavorre",
  "Distributori idraulici aggiuntivi",
  "Kit guida GPS",
  "Ruote gemellate",
];
const timingOptions = ["Il prima possibile", "Entro 3 mesi", "Entro 6 mesi", "Sto solo valutando"];
const NO_PREFERENCE = "Nessuna preferenza";
const ORIGINAL_COLOR = "Colore originale del marchio";

const steps = [
  { icon: <ClipboardList className="h-5 w-5" />, title: "Indichi le preferenze", text: "Potenza, utilizzo, trasmissione, colore e accessori: tutto ciò che serve alla tua azienda." },
  { icon: <SlidersHorizontal className="h-5 w-5" />, title: "Ti proponiamo il modello", text: "Il Team DSI seleziona il trattore più adatto e ti invia una proposta personalizzata, senza impegno." },
  { icon: <Ship className="h-5 w-5" />, title: "Importazione diretta", text: "Confermato l'ordine, gestiamo produzione, trasporto e pratiche di importazione." },
  { icon: <PackageCheck className="h-5 w-5" />, title: "Consegna in Italia", text: "Ricevi il tuo trattore pronto al lavoro, con assistenza e ricambi DSI." },
];

const SchedaBrand = () => {
  const { id } = useParams<{ id: string }>();
  const { hash } = useLocation();
  const brand = getBrandById(id || "");

  const [power, setPower] = useState("");
  const [usage, setUsage] = useState<string[]>([]);
  const [transmission, setTransmission] = useState("");
  const [cab, setCab] = useState("");
  const [color, setColor] = useState("");
  const [accessories, setAccessories] = useState<string[]>([]);
  const [timing, setTiming] = useState("");
  const [notes, setNotes] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [gdpr, setGdpr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (hash !== "#preordina") return;
    const t = setTimeout(() => document.getElementById("preordina")?.scrollIntoView({ behavior: "smooth" }), 300);
    return () => clearTimeout(t);
  }, [hash, id]);

  if (!brand || !brand.preorder) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center" style={{ background: "#F5F2EE" }}>
          <div className="text-center">
            <h1 className="text-3xl font-display font-bold mb-4" style={{ color: "#1a1a1a" }}>
              Marchio non trovato
            </h1>
            <Link to="/trattori" className="font-semibold" style={{ color: "#F97316" }}>
              Torna al catalogo
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const gallery = brand.gallery ?? [];
  const fit = brand.imageFit ?? "cover";
  const toggle = (list: string[], set: (v: string[]) => void, value: string) =>
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!power) return toast.error("Seleziona la fascia di potenza.");
    if (!name.trim() || !email.trim() || !phone.trim()) return toast.error("Compila nome, email e telefono.");
    if (!gdpr) return toast.error("Devi acconsentire al trattamento dei dati personali.");

    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "preordine",
          name,
          email,
          phone,
          company,
          location,
          brand: brand.name,
          power,
          usage: usage.join(", "),
          transmission: transmission || NO_PREFERENCE,
          cab: cab || NO_PREFERENCE,
          color: color || NO_PREFERENCE,
          accessories: accessories.join(", "),
          timing,
          notes,
        }),
      });

      if (res.ok) {
        toast.success("Preordine inviato con successo!");
        setSubmitted(true);
      } else if (res.status === 429) {
        toast.error("Troppe richieste, riprova tra qualche minuto.");
      } else if (res.status === 400) {
        const data = await res.json();
        toast.error(data.error || "Dati non validi.");
      } else {
        toast.error("Si è verificato un errore, riprova o contattaci direttamente a vendite@dsimportsrl.com");
      }
    } catch {
      toast.error("Si è verificato un errore, riprova o contattaci direttamente a vendite@dsimportsrl.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* HERO */}
      <section data-bg-color="#1b3a2d" className="relative" style={{ background: "var(--dsi-green-gradient)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 20% 80%, rgba(249,115,22,0.08), transparent 50%)" }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-10" style={{ paddingTop: 32, paddingBottom: 60 }}>
          <Link
            to="/trattori"
            className="inline-flex items-center gap-2 text-sm mb-8 transition-colors"
            style={{ color: "rgba(255,255,255,0.5)" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "white"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
          >
            <ArrowLeft className="h-4 w-4" /> Torna alla gamma
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div
                className="relative overflow-hidden rounded-lg"
                style={{
                  background: fit === "contain" ? "#F9F7F5" : "transparent",
                  border: "1px solid rgba(255,255,255,0.08)",
                  aspectRatio: "16 / 10",
                }}
              >
                {gallery[gallery.length - 1] && (
                  <img
                    src={gallery[gallery.length - 1].image}
                    alt={`Trattore ${brand.name}`}
                    className="absolute inset-0 w-full h-full"
                    style={{ objectFit: fit, padding: fit === "contain" ? 24 : 0, mixBlendMode: fit === "contain" ? "multiply" : "normal" }}
                  />
                )}
                <div
                  className="absolute top-4 right-4 font-bold text-white uppercase"
                  style={{ background: "#F97316", borderRadius: 6, padding: "8px 14px", fontSize: "0.7rem", letterSpacing: "0.12em" }}
                >
                  Su ordinazione
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div>
                <span
                  className="inline-block uppercase font-bold mb-3"
                  style={{ color: "#F97316", fontSize: "0.7rem", letterSpacing: "0.2em" }}
                >
                  {brand.tagline}
                </span>
                <h1
                  className="font-display font-normal uppercase tracking-tight mb-4 text-white"
                  style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", lineHeight: 1.05 }}
                >
                  Trattori {brand.name}
                </h1>
                <div style={{ width: 48, height: 3, backgroundColor: "#F97316", borderRadius: 2, marginBottom: 16 }} />
                <p className="mb-8" style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", lineHeight: 1.7 }}>
                  {brand.description}
                </p>

                <div className="grid grid-cols-3 gap-3 mb-8">
                  {[
                    { label: "Gamma", value: brand.powerRange },
                    { label: "Origine", value: brand.country },
                    { label: "Dal", value: brand.since },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="text-center"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: 6,
                        padding: "12px 8px",
                      }}
                    >
                      <span
                        className="block uppercase"
                        style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.6rem", letterSpacing: "0.12em", marginBottom: 4 }}
                      >
                        {item.label}
                      </span>
                      <span className="text-white font-semibold" style={{ fontSize: "0.85rem" }}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#preordina"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("preordina")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 font-bold uppercase tracking-widest transition-opacity hover:opacity-90"
                  style={{ background: "#F97316", color: "white", padding: "14px 32px", borderRadius: 4, fontSize: "0.8rem", letterSpacing: "0.12em" }}
                >
                  Preordina e personalizza
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* GAMMA / GALLERY */}
      <section data-bg-color="#F5F2EE" style={{ background: "#F5F2EE", padding: "80px 0" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-3">
              <div style={{ width: 4, height: 28, backgroundColor: "#F97316", borderRadius: 2 }} />
              <h2 className="font-display font-normal uppercase tracking-tight" style={{ fontSize: "1.5rem", color: "#1a1a1a" }}>
                La gamma {brand.name}
              </h2>
            </div>
            <p className="mb-8" style={{ color: "#777", fontSize: "0.9rem", maxWidth: 640 }}>
              Dai trattori compatti alle macchine di alta potenza. Le immagini sono indicative: modello e allestimento
              definitivi vengono concordati insieme a te in base alle tue esigenze.
            </p>
          </AnimatedSection>
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${gallery.length >= 4 ? "xl:grid-cols-4" : "lg:grid-cols-3"}`}>
            {gallery.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.08}>
                <div
                  className="overflow-hidden h-full flex flex-col"
                  style={{ background: "white", borderRadius: 8, border: "1px solid #EDE9E3", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
                >
                  <div className="relative" style={{ aspectRatio: "4 / 3", background: "#F9F7F5" }}>
                    <img
                      src={item.image}
                      alt={`Trattore ${brand.name} ${item.label.toLowerCase()}`}
                      className="absolute inset-0 w-full h-full"
                      style={{ objectFit: fit, padding: fit === "contain" ? 16 : 0, mixBlendMode: fit === "contain" ? "multiply" : "normal" }}
                      loading="lazy"
                    />
                  </div>
                  <div style={{ padding: "18px 20px" }}>
                    <span className="uppercase font-semibold block" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", color: "#F97316" }}>
                      {item.hp}
                    </span>
                    <h3 className="font-display text-lg font-bold mt-1" style={{ color: "#1a1a1a" }}>{item.label}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CARATTERISTICHE GENERALI */}
      <section data-bg-color="#1b3a2d" style={{ background: "var(--dsi-green-gradient)", padding: "80px 0" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div style={{ width: 4, height: 28, backgroundColor: "#F97316", borderRadius: 2 }} />
              <h2 className="font-display font-normal uppercase tracking-tight text-white" style={{ fontSize: "1.5rem" }}>
                Caratteristiche generali
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {(brand.highlights ?? []).map((h, i) => (
              <AnimatedSection key={h} delay={i * 0.05}>
                <div
                  className="flex items-center gap-4 h-full"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "16px 20px" }}
                >
                  <div
                    className="shrink-0 flex items-center justify-center"
                    style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(249,115,22,0.15)" }}
                  >
                    <CheckCircle className="h-4 w-4" style={{ color: "#F97316" }} />
                  </div>
                  <span className="text-white font-medium" style={{ fontSize: "0.9rem" }}>{h}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* How pre-order works */}
          <AnimatedSection>
            <div className="flex items-center gap-3 mt-16 mb-8">
              <div style={{ width: 4, height: 28, backgroundColor: "#F97316", borderRadius: 2 }} />
              <h2 className="font-display font-normal uppercase tracking-tight text-white" style={{ fontSize: "1.5rem" }}>
                Come funziona il preordine
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <div className="h-full" style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: 22 }}>
                  <div className="flex items-center gap-3 mb-3" style={{ color: "#F97316" }}>
                    {s.icon}
                    <span className="font-display" style={{ fontSize: "0.8rem", letterSpacing: "0.15em" }}>0{i + 1}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", lineHeight: 1.6 }}>{s.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PREORDER FORM */}
      <section id="preordina" data-bg-color="#F5F2EE" style={{ background: "#F5F2EE", padding: "80px 0", scrollMarginTop: 80 }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 rounded-full" style={{ background: "#F97316" }}>
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-display font-normal uppercase mb-4" style={{ color: "#1a1a1a" }}>
                Preordine inviato!
              </h2>
              <p style={{ color: "#666", fontSize: "1.05rem" }} className="mb-8 max-w-md mx-auto">
                Grazie {name.split(" ")[0]}. Il Team DSI analizzerà le tue preferenze e ti contatterà entro 24 ore con una
                proposta personalizzata per il tuo {brand.name}.
              </p>
              <Link to="/trattori" className="btn-orange">Torna alla gamma</Link>
            </div>
          ) : (
            <>
              <AnimatedSection>
                <span className="uppercase font-bold block mb-2" style={{ color: "#F97316", fontSize: "0.7rem", letterSpacing: "0.2em" }}>
                  Preordine senza impegno
                </span>
                <h2 className="font-display font-normal uppercase tracking-tight mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", color: "#1a1a1a" }}>
                  Prenota il tuo {brand.name} su misura
                </h2>
                <p className="mb-10" style={{ color: "#666", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  Ogni trattore viene ordinato e personalizzato su tua richiesta. Indicaci le tue preferenze: non serve
                  conoscere il modello esatto, ti aiutiamo noi a scegliere quello giusto.
                </p>
              </AnimatedSection>

              <form onSubmit={handleSubmit} className="space-y-8">
                <Field label="Fascia di potenza *">
                  <ChipGroup options={[...(brand.powerClasses ?? []), "Da valutare insieme"]} isActive={(o) => power === o} onToggle={setPower} />
                </Field>

                <Field label="Utilizzo principale" hint="Puoi selezionarne più di uno">
                  <ChipGroup options={usageOptions} isActive={(o) => usage.includes(o)} onToggle={(o) => toggle(usage, setUsage, o)} multi />
                </Field>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Field label="Trasmissione">
                    <ChipGroup options={[...(brand.transmissions ?? []), NO_PREFERENCE]} isActive={(o) => transmission === o} onToggle={setTransmission} />
                  </Field>
                  <Field label="Posto di guida">
                    <ChipGroup options={cabOptions} isActive={(o) => cab === o} onToggle={setCab} />
                  </Field>
                </div>

                <Field label="Colore" hint="Personalizza il tuo trattore con i colori DSI o mantieni quello originale">
                  <div className="flex flex-wrap gap-4">
                    {[{ name: ORIGINAL_COLOR, value: "conic-gradient(#F97316, #a4ce4e, #1a5fa8, #c8102e, #F97316)" }, ...globalColorOptions].map((c) => (
                      <button key={c.name} type="button" onClick={() => setColor(c.name)} className="flex flex-col items-center gap-2" style={{ width: 72 }}>
                        <span
                          className="transition-all duration-200 block"
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            background: c.value,
                            border: color === c.name ? "2px solid #F97316" : "1px solid #DDD",
                            boxShadow: color === c.name ? "0 0 0 3px rgba(249,115,22,0.3)" : "none",
                            transform: color === c.name ? "scale(1.12)" : "scale(1)",
                          }}
                        />
                        <span style={{ color: "#555", fontSize: "0.65rem", textAlign: "center", lineHeight: 1.3 }}>
                          {c.name === ORIGINAL_COLOR ? "Originale del marchio" : c.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </Field>

                <Field label="Accessori e allestimenti" hint="Seleziona quelli che ti interessano">
                  <ChipGroup options={accessoryOptions} isActive={(o) => accessories.includes(o)} onToggle={(o) => toggle(accessories, setAccessories, o)} multi />
                </Field>

                <Field label="Quando ti servirebbe?">
                  <ChipGroup options={timingOptions} isActive={(o) => timing === o} onToggle={setTiming} />
                </Field>

                <Field label="Altre richieste o personalizzazioni">
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                    maxLength={2000}
                    placeholder="Es. pneumatici stretti per vigneto, sedile pneumatico, radio, attacco rimorchio..."
                    className={inputClass}
                  />
                </Field>

                <div style={{ borderTop: "1px solid #E3DED7", paddingTop: 28 }}>
                  <h3 className="font-display uppercase tracking-tight mb-5" style={{ fontSize: "1.1rem", color: "#1a1a1a" }}>I tuoi dati</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Nome e cognome *" value={name} onChange={setName} maxLength={100} />
                    <Input label="Azienda agricola" value={company} onChange={setCompany} maxLength={100} />
                    <Input label="Email *" type="email" value={email} onChange={setEmail} maxLength={254} />
                    <Input label="Telefono *" type="tel" value={phone} onChange={setPhone} maxLength={30} />
                    <Input label="Provincia / Località" value={location} onChange={setLocation} maxLength={100} />
                  </div>
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={gdpr} onChange={(e) => setGdpr(e.target.checked)} className="mt-1 h-4 w-4" />
                  <span className="text-sm" style={{ color: "#666" }}>
                    Acconsento al trattamento dei dati personali ai sensi del GDPR. *
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 font-bold uppercase transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: "#F97316", color: "white", padding: "16px 32px", borderRadius: 4, fontSize: "0.85rem", letterSpacing: "0.12em" }}
                >
                  <Send className="h-4 w-4" /> {loading ? "Invio in corso..." : `Invia preordine ${brand.name}`}
                </button>
                <p className="text-center" style={{ color: "#999", fontSize: "0.75rem" }}>
                  Il preordine non è vincolante: riceverai una proposta con modello, allestimento e prezzo prima di confermare.
                </p>
              </form>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

const inputClass =
  "w-full px-4 py-3 text-sm rounded bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 border border-[#E3DED7] text-[#1a1a1a]";

const Field = ({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) => (
  <div>
    <span className="block font-bold uppercase mb-1" style={{ color: "#1a1a1a", fontSize: "0.75rem", letterSpacing: "0.1em" }}>
      {label}
    </span>
    {hint && <span className="block mb-3" style={{ color: "#999", fontSize: "0.75rem" }}>{hint}</span>}
    <div className={hint ? "" : "mt-3"}>{children}</div>
  </div>
);

const ChipGroup = ({
  options,
  isActive,
  onToggle,
  multi,
}: {
  options: string[];
  isActive: (o: string) => boolean;
  onToggle: (o: string) => void;
  multi?: boolean;
}) => (
  <div className="flex flex-wrap gap-2">
    {options.map((o) => {
      const active = isActive(o);
      return (
        <button
          key={o}
          type="button"
          onClick={() => onToggle(o)}
          aria-pressed={active}
          className="inline-flex items-center gap-1.5 transition-all duration-200"
          style={{
            border: active ? "1px solid #F97316" : "1px solid #DDD6CC",
            background: active ? "#F97316" : "white",
            color: active ? "white" : "#444",
            borderRadius: 4,
            padding: "9px 16px",
            fontWeight: 600,
            fontSize: "0.82rem",
          }}
        >
          {multi && active && <Check className="h-3.5 w-3.5" />}
          {o}
        </button>
      );
    })}
  </div>
);

const Input = ({
  label,
  value,
  onChange,
  type = "text",
  maxLength,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  maxLength?: number;
}) => (
  <label className="block">
    <span className="block font-semibold mb-1" style={{ color: "#555", fontSize: "0.75rem", letterSpacing: "0.05em" }}>{label}</span>
    <input type={type} value={value} onChange={(e) => onChange(e.target.value)} maxLength={maxLength} className={inputClass} />
  </label>
);

export default SchedaBrand;
