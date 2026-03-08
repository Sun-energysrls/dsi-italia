import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import ApproachSection from "@/components/sections/ApproachSection";
import BrandPartnersSection from "@/components/sections/BrandPartnersSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import ConfiguratorPreview from "@/components/sections/ConfiguratorPreview";
import FeaturedModels from "@/components/sections/FeaturedModels";
import CtaSection from "@/components/sections/CtaSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsBar />
      <ApproachSection />
      <BrandPartnersSection />
      <AdvantagesSection />
      <ConfiguratorPreview />
      
      <FeaturedModels />
      <CtaSection />
    </Layout>
  );
};

export default Index;
