import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
      </main>
    </div>
  );
};

export default Index;
