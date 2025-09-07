import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AudienceSection } from "@/components/audience-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 sm:pt-20">
        <HeroSection />
        <AudienceSection />
      </main>
    </div>
  );
};

export default Index;
