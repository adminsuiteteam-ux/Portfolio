import React from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { WhatsAppButton } from './components/WhatsAppButton';

export const App: React.FC = () => {
  return (
    <div className="bg-[#0C0C0C] font-sans text-[#D7E2EA] min-h-screen overflow-x-clip relative">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <ProjectsSection />
      <ContactSection />
      <WhatsAppButton />
    </div>
  );
};

export default App;
