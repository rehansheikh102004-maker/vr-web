import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroLeft } from './components/HeroLeft';
import { HeroRightCard } from './components/HeroRightCard';
import { PartnersGrid } from './components/PartnersGrid';
import { ProcessChips } from './components/ProcessChips';
import { FeatureCards } from './components/FeatureCards';
import { ChatModal } from './components/ChatModal';
import { MenuOverlay } from './components/MenuOverlay';
import { BackgroundWatermark } from './components/BackgroundWatermark';
import { ScrollCanvas } from './components/ScrollCanvas';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans relative flex flex-col justify-between overflow-x-hidden selection:bg-white selection:text-black">
      {/* Interactive Background VR Scroll Canvas Animation */}
      <ScrollCanvas id="scroll-canvas-1" containerId="container-1" />

      <div id="container-1" className="relative z-10 flex flex-col justify-between min-h-screen pb-32">
        {/* Background Watermark Branding */}
        <BackgroundWatermark />

        {/* Top Navigation */}
        <Navbar
          onOpenMenu={() => setIsMenuOpen(true)}
          onOpenChat={() => setIsChatOpen(true)}
        />

        {/* Main Hero Container */}
        <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-6 lg:px-12 py-8 lg:py-16 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline & Action Controls */}
            <div className="lg:col-span-7">
              <HeroLeft
                onChatClick={() => setIsChatOpen(true)}
                onWorksClick={() => showNotification("Viewing Selected Works Portfolio")}
              />
            </div>

            {/* Right Column: Interactive Widget Card + Partners */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center space-y-8">
              <HeroRightCard />
              <PartnersGrid />
            </div>
          </div>
        </main>

        {/* Feature Cards Section */}
        <FeatureCards />

        {/* Process Chips Section (Moved to Bottom) */}
        <ProcessChips />
      </div>

      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-full bg-white text-black text-xs font-semibold shadow-2xl transition-all">
          {notification}
        </div>
      )}

      {/* Interactive Modals & Drawers */}
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}
