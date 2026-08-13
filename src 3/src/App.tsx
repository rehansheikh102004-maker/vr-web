import React, { useState } from 'react';
import { HeaderHero } from './components/HeaderHero';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { InteractiveModal } from './components/InteractiveModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const handleOpenModal = (id: string) => {
    setActiveItemId(id);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-white selection:text-black">
      {/* Top Header & Hero with 3 Stats */}
      <HeaderHero onStatClick={handleOpenModal} />

      {/* Second Section: Transparent Strategy Cards on Plain Black Background */}
      <OpportunitiesSection onCardClick={handleOpenModal} />

      {/* Interactive Modal */}
      <InteractiveModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        activeId={activeItemId} 
      />
    </div>
  );
}
