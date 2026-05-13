import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Tractor, Wrench, Headphones } from "lucide-react";
import Layout from "@/components/Layout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";

const subjects = [
  { id: "trattori", label: "Trattori", icon: Tractor },
  { id: "accessori", label: "Accessori", icon: Wrench },
  { id: "assistenza", label: "Assistenza", icon: Headphones },
];

const Contatti = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [gdpr, setGdpr] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message || !gdpr) {
      toast.error("Compila tutti i campi obbligatori");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });

      if (res.ok) {
        toast.success("Grazie! Ti ricontatteremo a breve.");
        setName(""); setEmail(""); setPhone(""); setSubject(""); setMessage(""); setGdpr(false);
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
      {/* Hero */}
      <section
        data-bg-color="#1b3a2d"
        className="relative overflow-hidden"
        style={{
          background: "var(--dsi-green-gradient)",
          minHeight: 420,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px]" style={{ background: "rgba(249,115,22,0.3)" }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[80px]" style={{ background: "rgba(249,115,22,0.2)" }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20 lg:py-28">
          <div className="max-w-2xl">
            <AnimatedSection from="left" distance={20} duration={0.7} delay={0.05}>
              <span
                className="inline-flex items-center gap-3"
                style={{
                  color: "#F97316",
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                }}
              >
                Contatti
              </span>
            </AnimatedSection>
            <AnimatedSection from="up" distance={30} duration={0.9} delay={0.1}>
              <h1
                className="font-display font-normal uppercase tracking-tight mt-5"
                style={{ color: "#ffffff", fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
              >
                Parliamo del tuo{" "}
                <em style={{ color: "#F97316", fontStyle: "italic" }}>prossimo trattore.</em>
              </h1>
            </AnimatedSection>
            <AnimatedSection from="none" duration={0.6} delay={0.2}>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.75, marginTop: 20, maxWidth: 500 }}>
                Preventivi, informazioni tecniche, assistenza post-vendita. Un unico referente per ogni esigenza.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section data-bg-color="#faf8f4" className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <AnimatedSection>
              <div className="bg-card border border-border p-6 lg:p-8 shadow-card rounded-lg">
                <h2 className="font-display text-2xl font-normal text-foreground mb-6 uppercase tracking-tight">Scrivici</h2>

                {/* Subject selector */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-foreground mb-3 uppercase tracking-wide">Di cosa hai bisogno? *</label>
                  <div className="grid grid-cols-3 gap-3">
                    {subjects.map((s) => {
                      const Icon = s.icon;
                      const active = subject === s.id;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSubject(s.id)}
                          className="flex flex-col items-center gap-2 py-4 px-3 rounded-lg border-2 transition-all duration-200"
                          style={{
                            borderColor: active ? "#F97316" : "#EDE9E3",
                            background: active ? "rgba(249,115,22,0.06)" : "transparent",
                            boxShadow: active ? "0 0 0 1px #F97316" : "none",
                          }}
                        >
                          <Icon
                            className="h-5 w-5 transition-colors"
                            style={{ color: active ? "#F97316" : "#999" }}
                          />
                          <span
                            className="text-xs font-semibold uppercase tracking-wide transition-colors"
                            style={{ color: active ? "#F97316" : "#666" }}
                          >
                            {s.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-1 uppercase tracking-wide">Nome e Cognome *</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-input px-4 py-3 bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none rounded" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-1 uppercase tracking-wide">Email *</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-input px-4 py-3 bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none rounded" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-1 uppercase tracking-wide">Telefono</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border border-input px-4 py-3 bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none rounded" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-1 uppercase tracking-wide">Messaggio *</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="w-full border border-input px-4 py-3 bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none resize-none rounded" />
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" checked={gdpr} onChange={(e) => setGdpr(e.target.checked)} className="mt-1 h-4 w-4 border-border" />
                    <span className="text-sm text-muted-foreground">
                      Acconsento al trattamento dei dati personali ai sensi del GDPR. *
                    </span>
                  </label>
                  <button type="submit" disabled={loading} className="w-full gradient-accent text-accent-foreground py-4 font-normal uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-elevated rounded disabled:opacity-50 disabled:cursor-not-allowed">
                    <Send className="h-4 w-4" /> {loading ? "Invio in corso..." : "Invia Messaggio"}
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.15}>
              <div className="space-y-8">
                <div className="bg-card border border-border p-6 shadow-card space-y-6 rounded-lg">
                  <h2 className="font-display text-2xl font-normal text-foreground uppercase tracking-tight">Informazioni</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-foreground text-sm uppercase tracking-wide">Sede Operativa e Legale</p>
                        <p className="text-muted-foreground text-sm">
                          DSI IMPORT S.R.L.<br />
                          Via Cesare Battisti 101<br />
                          67051 Avezzano (AQ)<br />
                          <span className="text-xs mt-1 block opacity-80">P.IVA / C.F. 02217120662 | REA: AQ - 218903</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-2">
                        <div>
                          <p className="font-bold text-foreground text-sm uppercase tracking-wide">Contatti Telefonici</p>
                          <a href="tel:+393338590639" className="text-muted-foreground text-sm hover:text-secondary transition-colors block">
                            Ugo Di Stefano: +39 333 8590639
                          </a>
                          <a href="tel:+393384116588" className="text-muted-foreground text-sm hover:text-secondary transition-colors block mt-1">
                            Alessio Iannotti: +39 338 411 6588
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-2">
                        <div>
                          <p className="font-bold text-foreground text-sm uppercase tracking-wide">Email & PEC</p>
                          <a href="mailto:vendite@dsimportsrl.com" className="text-muted-foreground text-sm hover:text-secondary transition-colors block">
                            vendite@dsimportsrl.com
                          </a>
                          <a href="mailto:dsiimportsrl@pec.it" className="text-muted-foreground text-sm hover:text-secondary transition-colors block mt-1">
                            dsiimportsrl@pec.it
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+393338590639"
                    className="flex-1 gradient-primary text-primary-foreground py-4 font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2 shadow-card rounded"
                  >
                    <Phone className="h-4 w-4" /> Chiamaci
                  </a>
                  <a
                    href="https://wa.me/393338590639"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[hsl(142,70%,40%)] text-primary-foreground py-4 font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2 shadow-card rounded"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>

                {/* Map */}
                <div className="overflow-hidden shadow-card border border-border h-64 rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6!2d12.4964!3d41.9028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDU0JzEwLjEiTiAxMsKwMjknNDcuMCJF!5e0!3m2!1sit!2sit!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DSI Import Sede"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contatti;
