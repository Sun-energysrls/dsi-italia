import { useState, useCallback } from "react";
import Layout from "@/components/Layout";
import IntroSplash from "@/components/IntroSplash";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import ApproachSection from "@/components/sections/ApproachSection";
import ProcessoSection from "@/components/sections/ProcessoSection";
import BrandPartnersSection from "@/components/sections/BrandPartnersSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import ConfiguratorPreview from "@/components/sections/ConfiguratorPreview";
import FeaturedModels from "@/components/sections/FeaturedModels";
import ComingSoonSection from "@/components/sections/ComingSoonSection";
import CtaSection from "@/components/sections/CtaSection";
import { useScrollColorMorph } from "@/hooks/useScrollColorMorph";

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
        <div data-section-color="#1B4332">
          <HeroSection videoReady={splashDone} />
        </div>
        <div data-section-color="#1B4332">
          <StatsBar />
        </div>
        <div data-section-color="#ffffff">
          <ApproachSection />
        </div>
        <div data-section-color="#1B4332">
          <BrandPartnersSection />
        </div>
        <div data-section-color="#ffffff">
          <AdvantagesSection />
        </div>
        <div data-section-color="#1B4332">
          <ProcessoSection />
        </div>
        <div data-section-color="#1B4332">
          <ConfiguratorPreview />
        </div>
        <div data-section-color="#F5F2EE">
          <FeaturedModels />
        </div>
        <div data-section-color="#EDE8E0">
          <ComingSoonSection />
        </div>
        <div data-section-color="#1B4332">
          <CtaSection />
        </div>
      </Layout>
    </>
  );
};

export default Index;
