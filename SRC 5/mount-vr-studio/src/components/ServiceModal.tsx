import React from 'react';
import { ServiceCard } from '../types';
import { X, Check, ArrowRight, Glasses } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceModalProps {
  card: ServiceCard | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ card, onClose, onContactClick }) => {
  if (!card) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 text-white shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 text-xs font-medium mb-4">
            <Glasses className="w-3.5 h-3.5 text-cyan-400" />
            {card.category}
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold mb-3">{card.title}</h3>
          <p className="text-zinc-400 leading-relaxed mb-6">{card.description}</p>

          <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 mb-6 flex items-center justify-between">
            <span className="text-sm text-zinc-400 font-medium">VR Performance Metric</span>
            <span className="text-lg font-bold text-cyan-400">{card.metrics}</span>
          </div>

          <div className="mb-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Technical Deliverables & Architecture
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {card.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-zinc-900 bg-zinc-900/30">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-sm text-zinc-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-900">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-zinc-800 text-zinc-400 hover:text-white text-sm font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors cursor-pointer"
            >
              <span>Request VR Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
