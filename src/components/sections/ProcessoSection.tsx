import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Scegli il Modello",
    desc: "Esplora la gamma Tavol e scegli il modello giusto per la tua azienda. Dai 70 ai 240 HP, hai il trattore perfetto per ogni terreno.",
    side: "left" as const,
    icon: "🚜",
  },
  {
    num: "02",
    title: "Personalizza",
    desc: "Configura colori, cambio, accessori e allestimento con il nostro configuratore guidato. Ogni dettaglio è tuo.",
    side: "right" as const,
    icon: "⚙️",
  },
  {
    num: "03",
    title: "Certificazione & Spedizione",
    desc: "Gestiamo tutta la documentazione CE, l'omologazione italiana e la logistica direttamente dall'origine.",
    side: "left" as const,
    icon: "✅",
  },
  {
    num: "04",
    title: "Consegna & Assistenza",
    desc: "Il tuo trattore arriva pronto all'uso con supporto tecnico dedicato e assistenza post-vendita inclusi.",
    side: "right" as const,
    icon: "📦",
  },
];

const ProcessoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".processo-card");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateX(0) translateY(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-[#1B4332] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-emerald-400 font-semibold tracking-widest uppercase text-sm mb-3">
            Come Lavoriamo
          </span>
          <p className="text-emerald-300/60 text-xs tracking-[0.3em] uppercase mb-4">
            COME FUNZIONA
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Il Nostro Processo in 4 Step
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Linea verticale — solo desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-emerald-500/30 -translate-x-1/2" />

          <div className="flex flex-col gap-12 md:gap-0">
            {steps.map((step, i) => (
              <div key={step.num}>
                {/* DESKTOP */}
                <div className="hidden md:grid md:grid-cols-[1fr_64px_1fr] items-center gap-4 mb-16 last:mb-0">
                  {/* Colonna sinistra */}
                  <div className="flex justify-end">
                    {step.side === "left" ? (
                      <div
                        className="processo-card max-w-md w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-700"
                        style={{
                          opacity: 0,
                          transform: "translateX(-60px)",
                        }}
                      >
                        <span className="text-emerald-400/40 text-5xl font-black">{step.num}</span>
                        <div className="flex items-center gap-3 mt-2 mb-2">
                          <span className="text-2xl">{step.icon}</span>
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>

                  {/* Centro — pallino */}
                  <div className="flex justify-center">
                    <div className="w-4 h-4 rounded-full bg-emerald-400 border-4 border-[#1B4332] z-10" />
                  </div>

                  {/* Colonna destra */}
                  <div className="flex justify-start">
                    {step.side === "right" ? (
                      <div
                        className="processo-card max-w-md w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-700"
                        style={{
                          opacity: 0,
                          transform: "translateX(60px)",
                        }}
                      >
                        <span className="text-emerald-400/40 text-5xl font-black">{step.num}</span>
                        <div className="flex items-center gap-3 mt-2 mb-2">
                          <span className="text-2xl">{step.icon}</span>
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>

                {/* MOBILE */}
                <div className="md:hidden flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#1B4332] z-10 shrink-0" />
                    {i < steps.length - 1 && <div className="w-px flex-1 bg-emerald-500/30 mt-1" />}
                  </div>
                  <div
                    className="processo-card flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 mb-2 transition-all duration-700"
                    style={{
                      opacity: 0,
                      transform: "translateY(30px)",
                    }}
                  >
                    <span className="text-emerald-400/40 text-3xl font-black">{step.num}</span>
                    <div className="flex items-center gap-2 mt-1 mb-1">
                      <span className="text-xl">{step.icon}</span>
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessoSection;
