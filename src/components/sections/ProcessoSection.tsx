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
  const lineRef = useRef<HTMLDivElement>(null);
  const lineSweepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".processo-animate");
    if (!elements) return;

    const prefersReducedMotion =
      typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    elements.forEach((c) => observer.observe(c));

    if (prefersReducedMotion) {
      return () => observer.disconnect();
    }

    let raf = 0;
    const updateLineSweep = () => {
      raf = 0;
      const sectionEl = sectionRef.current;
      const sweepEl = lineSweepRef.current;
      if (!sectionEl || !sweepEl) return;

      const rect = sectionEl.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;

      // Progress 0..1 while the section crosses the viewport.
      // Start when the section top is near the bottom (80% viewport),
      // end when the section bottom is near the top (20% viewport).
      const startY = viewportH * 0.8;
      const endY = viewportH * 0.2;
      const denom = rect.height + (startY - endY);
      const t = (startY - rect.top) / (denom || 1);
      const progress = Math.max(0, Math.min(1, t));

      sweepEl.style.top = `${progress * 100}%`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(updateLineSweep);
    };

    updateLineSweep();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden" style={{ background: "transparent" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div
          className="processo-animate text-center mb-16 md:mb-20"
          style={{ opacity: 0, transform: "translateX(0)", transition: "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1)" }}
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
            className="text-3xl md:text-5xl lg:text-6xl font-display font-black leading-tight text-white"
          >
            Dal <em className="not-italic" style={{ color: "#F97316", fontStyle: "italic" }}>configuratore</em> al tuo
            <br className="hidden md:block" /> campo in 4 semplici passi
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop only */}
          <div
            ref={lineRef}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 overflow-hidden"
            style={{
              width: 1,
              backgroundColor: "rgba(249,115,22,0.22)",
              boxShadow: "0 0 0 1px rgba(249,115,22,0.06)",
            }}
            aria-hidden="true"
          >
            <div
              ref={lineSweepRef}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: "0%",
                transform: "translateY(-50%)",
                height: "44%",
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(249,115,22,0.0) 8%, rgba(249,115,22,0.95) 45%, rgba(249,115,22,0.0) 85%, transparent 100%)",
                filter: "drop-shadow(0 0 14px rgba(249,115,22,0.55))",
              }}
            />
          </div>

          <div className="flex flex-col gap-16 md:gap-0">
            {steps.map((step, i) => {
              const isLeft = step.side === "left";

              return (
                <div key={step.num}>
                  {/* DESKTOP */}
                  <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_96px_minmax(0,1fr)] items-center gap-8 mb-20 last:mb-0">
                    {/* Left column */}
                    <div className="flex justify-end">
                      {isLeft ? (
                        <div
                          className="processo-animate max-w-lg w-full pr-10 text-left relative"
                          style={{
                            opacity: 0,
                            transform: "translateX(-48px)",
                            transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
                          }}
                        >
                          <span
                            className="font-display font-black block mb-2 pointer-events-none select-none"
                            style={{
                              fontSize: "4rem",
                              lineHeight: 1,
                              backgroundImage: "linear-gradient(135deg, rgba(249,115,22,0.32), rgba(255,255,255,0.08))",
                              WebkitBackgroundClip: "text",
                              backgroundClip: "text",
                              color: "transparent",
                            }}
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
                            transform: "translateX(-48px)",
                            transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
                            borderRadius: 16,
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                        >
                          <div className="relative overflow-hidden" style={{ height: 240 }}>
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
                      <div className="relative z-10 flex items-center justify-center" style={{ width: 36, height: 36 }}>
                        <div
                          className="absolute inset-0 rounded-full"
                          style={{
                            border: "2px solid rgba(249,115,22,0.55)",
                            background: "transparent",
                            boxShadow: "0 10px 22px rgba(0,0,0,0.08)",
                          }}
                        />
                        <div
                          className="relative rounded-full"
                          style={{
                            width: 14,
                            height: 14,
                            backgroundColor: "#F97316",
                            boxShadow: "0 8px 18px rgba(249,115,22,0.25)",
                          }}
                        />
                      </div>
                    </div>

                    {/* Right column */}
                    <div className="flex justify-start">
                      {!isLeft ? (
                        <div
                          className="processo-animate max-w-lg w-full pl-10 text-left relative"
                          style={{
                            opacity: 0,
                            transform: "translateX(48px)",
                            transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
                          }}
                        >
                          <span
                            className="font-display font-black block mb-2 pointer-events-none select-none"
                            style={{
                              fontSize: "4rem",
                              lineHeight: 1,
                              backgroundImage: "linear-gradient(135deg, rgba(249,115,22,0.32), rgba(255,255,255,0.08))",
                              WebkitBackgroundClip: "text",
                              backgroundClip: "text",
                              color: "transparent",
                            }}
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
                            transform: "translateX(48px)",
                            transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
                            borderRadius: 16,
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                        >
                          <div className="relative overflow-hidden" style={{ height: 240 }}>
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
                        transform: i % 2 === 0 ? "translateX(-28px)" : "translateX(28px)",
                        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
                        borderRadius: 16,
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <div className="relative overflow-hidden" style={{ height: 170 }}>
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
                          className="font-display font-black block mb-2 pointer-events-none select-none"
                          style={{
                            fontSize: "2.25rem",
                            lineHeight: 1,
                            backgroundImage: "linear-gradient(135deg, rgba(249,115,22,0.34), rgba(255,255,255,0.1))",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            color: "transparent",
                          }}
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
