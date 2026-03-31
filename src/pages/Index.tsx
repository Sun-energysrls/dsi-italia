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

const Index = () => {
  const alreadyPlayed = sessionStorage.getItem("dsi-splash-played") === "1";
  const [showSplash, setShowSplash] = useState(!alreadyPlayed);
  const [splashDone, setSplashDone] = useState(alreadyPlayed);

  const handleSplashComplete = useCallback(() => {
    sessionStorage.setItem("dsi-splash-played", "1");
    setShowSplash(false);
    setSplashDone(true);
  }, []);

  return (
    <>
      {showSplash && <IntroSplash onComplete={handleSplashComplete} />}
      <Layout>
        {/* Hero — sticky, sits behind page-content */}
        <HeroSection videoReady={splashDone} />

        {/* ── page-content wrapper ──
            This div's background-color transitions via useScrollColorMorph.
            ALL sections inside have background: transparent so the wrapper shows through.
            Exception: StatsBanner keeps its own orange gradient. */}
        <div
          id="page-content"
          style={{
            position: "relative",
            zIndex: 2,
            backgroundColor: "#faf8f4",
            borderRadius: "24px 24px 0 0",
            boxShadow: "0 -15px 50px rgba(0,0,0,0.2)",
          }}
        >
          {/* 2. DSI importa — light */}
          <div data-bg-color="#faf8f4">
            <ApproachSection />
          </div>

          {/* 3. Brand di Eccellenza — dark */}
          <div data-bg-color="#1b3a2d">
            <BrandPartnersSection />
          </div>

          {/* 4. Perché scegliere DSI — light */}
          <div data-bg-color="#faf8f4">
            <AdvantagesSection />
          </div>

          {/* 5. Dal configuratore al tuo campo — dark */}
          <div data-bg-color="#1b3a2d">
            <ProcessoSection />
          </div>

          {/* 6. Banner arancione — keeps its own gradient, excluded from morph */}
          <div style={{ overflow: "hidden" }}>
            <StatsBanner />
          </div>

          {/* 7. Configura il tuo trattore — dark */}
          <div data-bg-color="#1b3a2d">
            <ConfiguratorPreview />
          </div>

          {/* 8. Trattori potenti — light */}
          <div data-bg-color="#faf8f4">
            <FeaturedModels />
          </div>

          {/* 9. In Arrivo — dark */}
          <div data-bg-color="#1b3a2d">
            <ComingSoonSection />
          </div>

          {/* 10. CTA finale — dark */}
          <div data-bg-color="#1b3a2d">
            <CtaSection />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
