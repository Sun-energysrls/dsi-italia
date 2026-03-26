import { useEffect, useRef } from "react";
import processStep1 from "@/assets/process-step1.jpg";
import processStep2 from "@/assets/process-step2.jpg";
import processStep3 from "@/assets/process-step3.jpg";
import processStep4 from "@/assets/process-step4.jpg";

const steps = [
  {
    num: "01",
    title: "Scegli il Modello",
    desc: "Esplora la nostra gamma completa di trattori e macchine agricole. Utilizza il configuratore online per selezionare il modello ideale per le tue esigenze.",
    side: "left" as const,
    image: processStep1,
  },
  {
    num: "02",
    title: "Personalizza",
    desc: "Configura colori, cambio, accessori e allestimento con il nostro configuratore guidato. Ogni dettaglio è tuo, dalla potenza all'ultimo accessorio.",
    side: "right" as const,
    image: processStep2,
  },
  {
    num: "03",
    title: "Certificazione & Spedizione",
    desc: "Gestiamo tutta la documentazione CE, l'omologazione italiana e la logistica direttamente dall'origine. Zero pensieri per te.",
    side: "left" as const,
    image: processStep3,
  },
  {
    num: "04",
    title: "Consegna & Assistenza",
    desc: "Il tuo trattore arriva pronto all'uso con supporto tecnico dedicato e assistenza post-vendita inclusi. Dal campo al tuo terreno.",
    side: "right" as const,
    image: processStep4,
  },
];

const ProcessoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".processo-animate");
    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    elements.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden" style={{ background: "transparent" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div
          className="processo-animate text-center mb-20 md:mb-28"
          style={{ opacity: 0, transform: "translateY(0)", transition: "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="block h-px w-12" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
            <span
              className="uppercase font-semibold"
              style={{ color: "#F97316", fontSize: "0.7rem", letterSpacing: "0.25em" }}
            >
              COME FUNZIONA
            </span>
            <span className="block h-px w-12" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
          </div>
          <h2
            className="w-full text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[1.08] text-white"
          >
            Dal{" "}
            <em className="not-italic" style={{ color: "#F97316", fontStyle: "italic" }}>
              configuratore
            </em>{" "}
            al tuo campo in 4 semplici passi
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop only */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
          />

          <div className="flex flex-col gap-16 md:gap-0">
            {steps.map((step, i) => {
              const isLeft = step.side === "left";

              return (
                <div key={step.num}>
                  {/* DESKTOP */}
                  <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_96px_minmax(0,1fr)] items-center gap-8 mb-28 last:mb-0">
                    {/* Left column */}
                    <div className="flex justify-end">
                      {isLeft ? (
                        <div
                          className="processo-animate max-w-lg w-full pr-10 text-left relative"
                          style={{
                            opacity: 0,
                            transform: "translateY(40px)",
                            transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
                          }}
                        >
                          <span
                            className="absolute -top-10 left-0 font-display font-black pointer-events-none select-none"
                            style={{ fontSize: "7.5rem", color: "rgba(255,255,255,0.06)", lineHeight: 1 }}
                            aria-hidden="true"
                          >
                            {step.num}
                          </span>
                          <h3
                            className="font-display font-bold mb-3 text-white"
                            style={{ fontSize: "1.6rem" }}
                          >
                            {step.title}
                          </h3>
                          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.8 }}>
                            {step.desc}
                          </p>
                        </div>
                      ) : (
                        <div
                          className="processo-animate max-w-lg w-full overflow-hidden group"
                          style={{
                            opacity: 0,
                            transform: "translateY(40px)",
                            transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
                            borderRadius: 16,
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                        >
                          <div className="relative overflow-hidden" style={{ height: 320 }}>
                            <img
                              src={step.image}
                              alt={step.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                              width={704}
                              height={512}
                            />
                            <div
                              className="absolute inset-0 pointer-events-none"
                              style={{ background: "linear-gradient(to top, rgba(27,67,50,0.3), transparent)" }}
                            />
                            <span
                              className="absolute bottom-4 right-4 font-display font-black"
                              style={{ fontSize: "3.25rem", color: "rgba(255,255,255,0.14)", lineHeight: 1 }}
                            >
                              {step.num}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Center — dot */}
                    <div className="flex justify-center">
                      <div
                        className="w-4 h-4 rounded-full border-4 z-10"
                        style={{ backgroundColor: "#F97316", borderColor: "#1B4332" }}
                      />
                    </div>

                    {/* Right column */}
                    <div className="flex justify-start">
                      {!isLeft ? (
                        <div
                          className="processo-animate max-w-lg w-full pl-10 text-left relative"
                          style={{
                            opacity: 0,
                            transform: "translateY(40px)",
                            transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
                          }}
                        >
                          <span
                            className="absolute -top-10 left-0 font-display font-black pointer-events-none select-none"
                            style={{ fontSize: "7.5rem", color: "rgba(255,255,255,0.06)", lineHeight: 1 }}
                            aria-hidden="true"
                          >
                            {step.num}
                          </span>
                          <h3
                            className="font-display font-bold mb-3 text-white"
                            style={{ fontSize: "1.6rem" }}
                          >
                            {step.title}
                          </h3>
                          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.8 }}>
                            {step.desc}
                          </p>
                        </div>
                      ) : (
                        <div
                          className="processo-animate max-w-lg w-full overflow-hidden group"
                          style={{
                            opacity: 0,
                            transform: "translateY(40px)",
                            transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
                            borderRadius: 16,
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                        >
                          <div className="relative overflow-hidden" style={{ height: 320 }}>
                            <img
                              src={step.image}
                              alt={step.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                              width={704}
                              height={512}
                            />
                            <div
                              className="absolute inset-0 pointer-events-none"
                              style={{ background: "linear-gradient(to top, rgba(27,67,50,0.3), transparent)" }}
                            />
                            <span
                              className="absolute bottom-4 right-4 font-display font-black"
                              style={{ fontSize: "3.25rem", color: "rgba(255,255,255,0.14)", lineHeight: 1 }}
                            >
                              {step.num}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* MOBILE */}
                  <div className="md:hidden flex flex-col gap-4">
                    <div
                      className="processo-animate overflow-hidden group"
                      style={{
                        opacity: 0,
                        transform: "translateY(30px)",
                        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
                        borderRadius: 16,
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <div className="relative overflow-hidden" style={{ height: 200 }}>
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <span
                          className="absolute bottom-3 right-3 font-display font-black"
                          style={{ fontSize: "2rem", color: "rgba(255,255,255,0.2)", lineHeight: 1 }}
                        >
                          {step.num}
                        </span>
                      </div>
                      <div className="p-6 relative text-left">
                        <span
                          className="absolute -top-6 left-6 font-display font-black pointer-events-none select-none"
                          style={{ fontSize: "4rem", color: "rgba(255,255,255,0.08)", lineHeight: 1 }}
                          aria-hidden="true"
                        >
                          {step.num}
                        </span>
                        <h3
                          className="font-display font-bold mb-2 text-white"
                          style={{ fontSize: "1.2rem" }}
                        >
                          {step.title}
                        </h3>
                        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", lineHeight: 1.7 }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessoSection;
