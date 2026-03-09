import { useState, useCallback } from "react";
import Layout from "@/components/Layout";
import IntroSplash from "@/components/IntroSplash";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import ApproachSection from "@/components/sections/ApproachSection";
import BrandPartnersSection from "@/components/sections/BrandPartnersSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import ConfiguratorPreview from "@/components/sections/ConfiguratorPreview";
import FeaturedModels from "@/components/sections/FeaturedModels";
import ComingSoonSection from "@/components/sections/ComingSoonSection";
import CtaSection from "@/components/sections/CtaSection";

const Index = () => {
  const alreadyPlayed = sessionStorage.getItem("dsi-splash-played") === "1";
  const [showSplash, setShowSplash] = useState(!alreadyPlayed);

  const handleSplashComplete = useCallback(() => {
    sessionStorage.setItem("dsi-splash-played", "1");
    setShowSplash(false);
  }, []);

  return (
    <>
      {showSplash && <IntroSplash onComplete={handleSplashComplete} />}
      <Layout>
        <HeroSection />
        <StatsBar />
        <ApproachSection />
        <BrandPartnersSection />
        <AdvantagesSection />
        <ConfiguratorPreview />
        <FeaturedModels />
        <ComingSoonSection />
        <CtaSection />
      </Layout>
    </>
  );
};

export default Index;
