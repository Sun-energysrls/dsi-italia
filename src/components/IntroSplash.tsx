import { useState, useEffect } from "react";
import dsiLogo from "@/assets/dsi-logo-white.png";

const IntroSplash = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"fade-in" | "hold" | "fade-out" | "done">("fade-in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 1200);
    const t2 = setTimeout(() => setPhase("fade-out"), 2000);
    const t3 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        backgroundColor: "#000000",
        opacity: phase === "fade-out" ? 0 : 1,
        transition: "opacity 1.0s ease-in-out",
        pointerEvents: phase === "fade-out" ? "none" : "auto",
      }}
    >
      <img
        src={dsiLogo}
        alt="DSI"
        style={{
          width: 280,
          opacity: phase === "fade-in" ? 0 : 1,
          transition: "opacity 1.2s ease-in-out",
        }}
        onLoad={() => {
          // Force re-render after image loads for smooth fade
        }}
      />
    </div>
  );
};

export default IntroSplash;
