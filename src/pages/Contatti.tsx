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
      <section className="bg-background pt-28 pb-16 lg:pt-36 lg:pb-20 border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black mb-4 uppercase tracking-tight text-foreground">Contattaci</h1>
            <p className="text-muted-foreground text-base">Siamo a disposizione per qualsiasi richiesta</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <AnimatedSection>
              <div className="bg-card border border-border/30 p-8 lg:p-10">
                <h2 className="font-display text-xl font-black text-foreground mb-8 uppercase tracking-[0.1em]">Scrivici</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-[0.2em]">Nome e Cognome *</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-border bg-background px-4 py-3 text-foreground text-sm focus:ring-1 focus:ring-secondary focus:outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-[0.2em]">Email *</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-border bg-background px-4 py-3 text-foreground text-sm focus:ring-1 focus:ring-secondary focus:outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-[0.2em]">Telefono</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border border-border bg-background px-4 py-3 text-foreground text-sm focus:ring-1 focus:ring-secondary focus:outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-[0.2em]">Messaggio *</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="w-full border border-border bg-background px-4 py-3 text-foreground text-sm focus:ring-1 focus:ring-secondary focus:outline-none resize-none transition-all" />
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" checked={gdpr} onChange={(e) => setGdpr(e.target.checked)} className="mt-1 h-4 w-4 border-border accent-secondary" />
                    <span className="text-sm text-muted-foreground">
                      Acconsento al trattamento dei dati personali ai sensi del GDPR. *
                    </span>
                  </label>
                  <button type="submit" className="w-full bg-secondary text-secondary-foreground py-4 font-bold uppercase tracking-[0.2em] text-[11px] inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                    <Send className="h-4 w-4" /> Invia Messaggio
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.15}>
              <div className="space-y-8">
                <div className="bg-card border border-border/30 p-8 space-y-6">
                  <h2 className="font-display text-xl font-black text-foreground uppercase tracking-[0.1em]">Informazioni</h2>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                      <div>
                        <p className="font-bold text-foreground text-[10px] uppercase tracking-[0.2em]">Sede</p>
                        <p className="text-muted-foreground text-sm mt-1">Via dell'Industria 42, 00100 Roma, Italia</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                      <div>
                        <p className="font-bold text-foreground text-[10px] uppercase tracking-[0.2em]">Telefono</p>
                        <a href="tel:+390000000000" className="text-muted-foreground text-sm hover:text-secondary transition-colors mt-1 block">+39 000 000 0000</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                      <div>
                        <p className="font-bold text-foreground text-[10px] uppercase tracking-[0.2em]">Email</p>
                        <a href="mailto:info@dsi-import.it" className="text-muted-foreground text-sm hover:text-secondary transition-colors mt-1 block">info@dsi-import.it</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-px bg-border/30">
                  <a
                    href="tel:+390000000000"
                    className="flex-1 bg-card text-foreground py-4 font-bold uppercase tracking-[0.15em] text-[11px] inline-flex items-center justify-center gap-2 hover:text-secondary transition-colors"
                  >
                    <Phone className="h-4 w-4" /> Chiamaci
                  </a>
                  <a
                    href="https://wa.me/390000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-card text-foreground py-4 font-bold uppercase tracking-[0.15em] text-[11px] inline-flex items-center justify-center gap-2 hover:text-secondary transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>

                <div className="overflow-hidden border border-border/30 h-64">
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
