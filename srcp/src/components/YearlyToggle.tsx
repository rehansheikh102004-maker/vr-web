import React from 'react';
import { motion } from 'motion/react';
import { BillingInterval } from '../types';

interface YearlyToggleProps {
  billingInterval: BillingInterval;
  onChange: (interval: BillingInterval) => void;
  savePercentage?: number;
}

export const YearlyToggle: React.FC<YearlyToggleProps> = ({
  billingInterval,
  onChange,
  savePercentage = 20,
}) => {
  const isYearly = billingInterval === 'yearly';

  return (
    <div className="inline-flex items-center gap-3">
      <button
        type="button"
        role="switch"
        aria-checked={isYearly}
        onClick={() => onChange(isYearly ? 'monthly' : 'yearly')}
        className="relative w-12 h-6 rounded-full bg-neutral-800 border border-white/20 p-0.5 cursor-pointer transition-colors duration-200 focus:outline-none"
      >
        <motion.div
          animate={{ x: isYearly ? 24 : 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="w-5 h-5 rounded-full bg-white shadow-sm"
        />
      </button>
      <span
        onClick={() => onChange(isYearly ? 'monthly' : 'yearly')}
        className="text-sm font-medium text-white cursor-pointer select-none flex items-center gap-2"
      >
        Yearly
        {isYearly && savePercentage > 0 && (
          <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-full">
            Save {savePercentage}%
          </span>
        )}
      </span>
    </div>
  );
};
