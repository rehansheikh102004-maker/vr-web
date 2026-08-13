import React, { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import { FORMA_PLANS } from './data/plans';
import { PricingCard } from './components/PricingCard';
import { YearlyToggle } from './components/YearlyToggle';
import { Toolbar } from './components/Toolbar';
import { CheckoutModal } from './components/CheckoutModal';
import { Plan, BillingInterval, DecimalFormat } from './types';

export default function App() {
  const [billingInterval, setBillingInterval] = useState<BillingInterval>('monthly');
  const [decimalFormat, setDecimalFormat] = useState<DecimalFormat>('comma');
  const [cardBgOpacity, setCardBgOpacity] = useState<number>(0.03); // Highly transparent as requested
  const [borderOpacity, setBorderOpacity] = useState<number>(0.12);
  const [blurLevel, setBlurLevel] = useState<number>(16);
  const [showBackgroundVisual, setShowBackgroundVisual] = useState<boolean>(false); // Background visual removed as requested
  const [customProductImage, setCustomProductImage] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleResetDefaults = () => {
    setCardBgOpacity(0.03);
    setBorderOpacity(0.12);
    setBlurLevel(16);
    setShowBackgroundVisual(false);
    setDecimalFormat('comma');
    setCustomProductImage(null);
  };

  const handleExportImage = async () => {
    if (!containerRef.current) return;
    try {
      setIsExporting(true);
      const dataUrl = await toPng(containerRef.current, {
        cacheBust: true,
        backgroundColor: '#0a0a0c',
        style: {
          padding: '40px',
        },
      });
      const link = document.createElement('a');
      link.download = 'forma-ai-pricing-transparent.png';
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to export image:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-white flex flex-col justify-between selection:bg-white/20 relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Floating Control Bar */}
      <Toolbar
        cardBgOpacity={cardBgOpacity}
        setCardBgOpacity={setCardBgOpacity}
        borderOpacity={borderOpacity}
        setBorderOpacity={setBorderOpacity}
        blurLevel={blurLevel}
        setBlurLevel={setBlurLevel}
        decimalFormat={decimalFormat}
        setDecimalFormat={setDecimalFormat}
        showBackgroundVisual={showBackgroundVisual}
        setShowBackgroundVisual={setShowBackgroundVisual}
        customProductImage={customProductImage}
        setCustomProductImage={setCustomProductImage}
        onExportImage={handleExportImage}
        isExporting={isExporting}
        onReset={handleResetDefaults}
      />

      {/* Main Pricing Canvas */}
      <div
        ref={containerRef}
        className="relative flex-1 flex flex-col justify-center px-4 sm:px-8 py-12 max-w-7xl mx-auto w-full"
      >
        {/* Optional background visual (Disabled by default as requested: "remove the background visual") */}
        {showBackgroundVisual && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/30 via-blue-600/20 to-indigo-600/30 rounded-full blur-[140px] pointer-events-none -z-10" />
        )}

        {/* Large Aesthetic Display Heading Header */}
        <div className="relative mb-10 sm:mb-14 text-center sm:text-right flex flex-col items-center sm:items-end">
          <div className="relative inline-block">
            {/* "Forma AI" Eyebrow / Logo text */}
            <span className="text-xl sm:text-3xl font-light tracking-tight text-neutral-300 block mb-1">
              Forma AI
            </span>
            {/* Giant "Pricing" Display typography */}
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-semibold tracking-tighter text-white/10 select-none font-['Space_Grotesk'] leading-none">
              Pricing
            </h1>
          </div>
        </div>

        {/* Transparent Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-12 sm:mb-16">
          {FORMA_PLANS.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billingInterval={billingInterval}
              decimalFormat={decimalFormat}
              cardBgOpacity={cardBgOpacity}
              blurLevel={blurLevel}
              borderOpacity={borderOpacity}
              isGlowEnabled={!showBackgroundVisual}
              customProductImage={customProductImage}
              onImageUpload={(img) => setCustomProductImage(img)}
              onSelectPlan={(p) => setSelectedPlan(p)}
            />
          ))}
        </div>

        {/* Bottom Bar: Yearly Switch */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
          <div className="flex items-center">
            <YearlyToggle
              billingInterval={billingInterval}
              onChange={setBillingInterval}
              savePercentage={20}
            />
          </div>

          <div className="text-xs text-neutral-500 font-light text-center sm:text-right">
            Transparent glassmorphism layout • All prices include taxes
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        plan={selectedPlan}
        billingInterval={billingInterval}
        decimalFormat={decimalFormat}
        onClose={() => setSelectedPlan(null)}
      />
    </div>
  );
}
