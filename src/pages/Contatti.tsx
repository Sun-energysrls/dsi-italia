import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";

const Contatti = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [gdpr, setGdpr] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message || !gdpr) {
      toast.error("Compila tutti i campi obbligatori");
      return;
    }
    toast.success("Messaggio inviato con successo!");
    setName(""); setEmail(""); setPhone(""); setMessage(""); setGdpr(false);
  };

  return (
    <Layout>
      <section data-bg-color="#1b3a2d" className="section-dark py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-normal mb-4 uppercase tracking-tight">Contattaci</h1>
            <p className="text-[hsl(120,10%,55%)] text-lg">Siamo a disposizione per qualsiasi richiesta</p>
          </AnimatedSection>
        </div>
      </section>

      <section data-bg-color="#faf8f4" className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <AnimatedSection>
              <div className="bg-card border border-border p-6 lg:p-8 shadow-card">
                <h2 className="font-display text-2xl font-normal text-foreground mb-6 uppercase tracking-tight">Scrivici</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-1 uppercase tracking-wide">Nome e Cognome *</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-input px-4 py-3 bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-1 uppercase tracking-wide">Email *</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-input px-4 py-3 bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-1 uppercase tracking-wide">Telefono</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border border-input px-4 py-3 bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-1 uppercase tracking-wide">Messaggio *</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="w-full border border-input px-4 py-3 bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none resize-none" />
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" checked={gdpr} onChange={(e) => setGdpr(e.target.checked)} className="mt-1 h-4 w-4 border-border" />
                    <span className="text-sm text-muted-foreground">
                      Acconsento al trattamento dei dati personali ai sensi del GDPR. *
                    </span>
                  </label>
                  <button type="submit" className="w-full gradient-accent text-accent-foreground py-4 font-normal uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-elevated">
                    <Send className="h-4 w-4" /> Invia Messaggio
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.15}>
              <div className="space-y-8">
                <div className="bg-card border border-border p-6 shadow-card space-y-6">
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
                    className="flex-1 gradient-primary text-primary-foreground py-4 font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2 shadow-card"
                  >
                    <Phone className="h-4 w-4" /> Chiamaci
                  </a>
                  <a
                    href="https://wa.me/393338590639"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[hsl(142,70%,40%)] text-primary-foreground py-4 font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2 shadow-card"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>

                {/* Map */}
                <div className="overflow-hidden shadow-card border border-border h-64">
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
