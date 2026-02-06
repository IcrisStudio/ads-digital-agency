import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Comparison } from "@/components/sections/Comparison";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AdSimulator } from "@/components/sections/AdBoostingSimulator";
import { Team } from "@/components/sections/Team";

const Index = () => {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Services />
        <Portfolio />
        <Comparison />
        <Testimonials />
        <Pricing />
<AdSimulator />
<Team />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </LanguageProvider>
  );
};

export default Index;
