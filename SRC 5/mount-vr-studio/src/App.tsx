import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { CardsSection } from './components/CardsSection';
import { ServiceModal } from './components/ServiceModal';
import { ContactModal } from './components/ContactModal';
import { ServiceCard } from './types';

export default function App() {
  const [selectedCard, setSelectedCard] = useState<ServiceCard | null>(null);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  const handleExploreClick = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Section 1: Hero Section */}
      <HeroSection
        onExploreClick={handleExploreClick}
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* Section 2: Core Solutions / Transparent Cards */}
      <CardsSection
        onSelectCard={(card) => setSelectedCard(card)}
      />

      {/* Interactive Modals */}
      <ServiceModal
        card={selectedCard}
        onClose={() => setSelectedCard(null)}
        onContactClick={() => setIsContactOpen(true)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
