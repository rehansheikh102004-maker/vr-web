import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { Plan, BillingInterval, DecimalFormat } from '../types';
import { CardProductImage } from './CardProductImage';

interface PricingCardProps {
  plan: Plan;
  billingInterval: BillingInterval;
  decimalFormat: DecimalFormat;
  cardBgOpacity: number;
  blurLevel: number;
  borderOpacity: number;
  isGlowEnabled: boolean;
  customProductImage?: string | null;
  onImageUpload?: (dataUrl: string) => void;
  onSelectPlan: (plan: Plan) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  billingInterval,
  decimalFormat,
  cardBgOpacity,
  blurLevel,
  borderOpacity,
  isGlowEnabled,
  customProductImage,
  onImageUpload,
  onSelectPlan,
}) => {
  const getFormattedPrice = () => {
    if (plan.monthlyPrice === 'Free') return 'Free';

    let rawPrice = billingInterval === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
    if (typeof rawPrice === 'string' && decimalFormat === 'dot') {
      rawPrice = rawPrice.replace(',', '.');
    } else if (typeof rawPrice === 'string' && decimalFormat === 'comma') {
      rawPrice = rawPrice.replace('.', ',');
    }

    return `${plan.currencySymbol}${rawPrice}${plan.priceSuffix}`;
  };

  const isPro = plan.id === 'pro';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-[28px] transition-all duration-300 group overflow-hidden ${
        isPro && isGlowEnabled ? 'ring-1 ring-white/30 shadow-[0_0_40px_rgba(255,255,255,0.08)]' : ''
      }`}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${cardBgOpacity})`,
        backdropFilter: `blur(${blurLevel}px)`,
        WebkitBackdropFilter: `blur(${blurLevel}px)`,
        border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
      }}
    >
      {/* Top subtle highlight reflection on card edge */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      {/* Product Image Section at the top of the card - clean, no dotted outlines, no placeholder text */}
      <CardProductImage
        customImage={customProductImage || plan.productImage}
        planName={plan.name}
        onImageUpload={onImageUpload}
      />

      <div>
        {/* Tier Name */}
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight">
            {plan.name}
          </h3>
          {plan.isPopular && (
            <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-white/10 text-white/90 border border-white/20">
              Popular
            </span>
          )}
        </div>

        {/* Price Display */}
        <div className="my-3 flex items-baseline gap-1">
          <span className="text-4xl sm:text-5xl font-medium tracking-tight text-white font-['Space_Grotesk']">
            {getFormattedPrice()}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed min-h-[40px] mb-8">
          {plan.description}
        </p>

        {/* Features Checklist */}
        <div className="space-y-4 mb-8">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
              <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
              </div>
              <span className="leading-tight text-neutral-300/90 font-light">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-2">
        <button
          onClick={() => onSelectPlan(plan)}
          className="w-full py-3 px-6 rounded-full bg-white text-black font-semibold text-xs sm:text-sm tracking-wide hover:bg-neutral-200 active:scale-[0.98] transition-all duration-200 shadow-sm cursor-pointer"
        >
          {plan.buttonText}
        </button>
      </div>
    </motion.div>
  );
};
