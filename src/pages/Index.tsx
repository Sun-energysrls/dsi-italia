import { useState, useCallback } from "react";
import Layout from "@/components/Layout";
import IntroSplash from "@/components/IntroSplash";
import HeroSection from "@/components/sections/HeroSection";
import ApproachSection from "@/components/sections/ApproachSection";
import StatsBanner from "@/components/sections/StatsBanner";
import ProcessoSection from "@/components/sections/ProcessoSection";
import BrandPartnersSection from "@/components/sections/BrandPartnersSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import ConfiguratorPreview from "@/components/sections/ConfiguratorPreview";
import FeaturedModels from "@/components/sections/FeaturedModels";
import ComingSoonSection from "@/components/sections/ComingSoonSection";
import CtaSection from "@/components/sections/CtaSection";
import { useScrollColorMorph } from "@/hooks/useScrollColorMorph";

const above: React.CSSProperties = { position: "relative", zIndex: 2 };

const Index = () => {
  const alreadyPlayed = sessionStorage.getItem("dsi-splash-played") === "1";
  const [showSplash, setShowSplash] = useState(!alreadyPlayed);
  const [splashDone, setSplashDone] = useState(alreadyPlayed);
  const { isDark } = useScrollColorMorph();

  const handleSplashComplete = useCallback(() => {
    sessionStorage.setItem("dsi-splash-played", "1");
    setShowSplash(false);
    setSplashDone(true);
  }, []);

  return (
    <>
      {showSplash && <IntroSplash onComplete={handleSplashComplete} />}
      <Layout navDark={isDark}>
        {/* Hero — NO wrapper div. Direct child of <main> so sticky works. */}
        <HeroSection videoReady={splashDone} />

        {/* First section slides over the hero — SOLID bg required */}
        <div
          data-bg="#faf8f4"
          style={{
            ...above,
            background: "#faf8f4",
            borderRadius: "24px 24px 0 0",
            boxShadow: "0 -15px 50px rgba(0,0,0,0.2)",
          }}
        >
          <ApproachSection />
        </div>

        <div data-bg="#1b3a2d" style={{ ...above, background: "#1b3a2d" }}>
          <BrandPartnersSection />
        </div>

        <div data-bg="#faf8f4" style={{ ...above, background: "#faf8f4" }}>
          <AdvantagesSection />
        </div>

        <div data-bg="#1b3a2d" style={{ ...above, background: "#1b3a2d" }}>
          <ProcessoSection />
        </div>

        {/* StatsBanner — own gradient bg, NOT in color morph (no data-bg) */}
        <div style={{ ...above, overflow: "hidden" }}>
          <StatsBanner />
        </div>

        <div data-bg="#1b3a2d" style={{ ...above, background: "#1b3a2d" }}>
          <ConfiguratorPreview />
        </div>

        <div data-bg="#faf8f4" style={{ ...above, background: "#faf8f4" }}>
          <FeaturedModels />
        </div>

        <div data-bg="#1b3a2d" style={{ ...above, background: "#1b3a2d" }}>
          <ComingSoonSection />
        </div>

        <div data-bg="#1b3a2d" style={{ ...above, background: "#1b3a2d" }}>
          <CtaSection />
        </div>
      </Layout>
    </>
  );
};

export default Index;
