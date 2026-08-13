import React from 'react';
import { motion } from 'motion/react';

export const HeroRightCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="w-full max-w-md bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden font-sans"
    >
      <span className="text-xs font-sans font-medium uppercase tracking-widest text-white/70 block mb-3">
        Project Showcase
      </span>
      <h3 className="text-3xl sm:text-4xl font-medium text-white tracking-tight leading-snug font-sans mb-3">
        Design to explore.
      </h3>
      <p className="text-sm font-sans font-normal text-white/80 leading-relaxed">
        Crafting immersive digital experiences, bespoke brand identities, and next-generation interactive systems built for impact.
      </p>
    </motion.div>
  );
};
