import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Plan, BillingInterval, DecimalFormat } from '../types';

interface CheckoutModalProps {
  plan: Plan | null;
  billingInterval: BillingInterval;
  decimalFormat: DecimalFormat;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  plan,
  billingInterval,
  decimalFormat,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);

  if (!plan) return null;

  const getPrice = () => {
    if (plan.monthlyPrice === 'Free') return 'Free';
    let raw = billingInterval === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
    if (typeof raw === 'string' && decimalFormat === 'dot') raw = raw.replace(',', '.');
    return `${plan.currencySymbol}${raw}${plan.priceSuffix}`;
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-neutral-900 border border-white/20 text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
              Selected Plan
            </span>
            <h2 className="text-2xl font-semibold mt-1 mb-2">{plan.name} Tier</h2>
            <div className="text-3xl font-bold font-['Space_Grotesk'] text-white mb-4">
              {getPrice()}
            </div>

            <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
              {plan.description}
            </p>

            <form onSubmit={handleConfirm} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="creator@forma.ai"
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-800 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/40"
                />
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-300 space-y-1">
                <div className="flex justify-between">
                  <span>Billing Interval:</span>
                  <span className="capitalize font-medium text-white">{billingInterval}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cancel Anytime:</span>
                  <span className="text-emerald-400 font-medium">Yes</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Continue with {plan.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h2 className="text-xl font-semibold">Welcome to Forma AI {plan.name}!</h2>
            <p className="text-xs text-neutral-400 max-w-xs mx-auto">
              Your registration key has been activated. Enjoy high-speed cloud generation and tools.
            </p>
            <button
              onClick={onClose}
              className="mt-4 py-2.5 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/15 transition-all"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
