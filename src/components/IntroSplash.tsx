import { useState, useEffect } from "react";
import dsiLogo from "@/assets/dsi-logo-white.png";

const IntroSplash = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"initial" | "visible" | "fade-out" | "done">("initial");

  useEffect(() => {
    const t0 = setTimeout(() => setPhase("visible"), 50);
    const t1 = setTimeout(() => setPhase("fade-out"), 4000);
    const t2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 5500);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        backgroundColor: "#000000",
        opacity: phase === "fade-out" ? 0 : 1,
        transition: "opacity 1.5s ease-in-out",
        pointerEvents: phase === "fade-out" ? "none" : "auto",
      }}
    >
      <img
        src={dsiLogo}
        alt="DSI"
        style={{
          width: 280,
          opacity: phase === "initial" ? 0 : 1,
          transition: "opacity 2.0s ease-in-out",
        }}
        onLoad={() => {
          // Force re-render after image loads for smooth fade
        }}
      />
    </div>
  );
};

export default IntroSplash;
