import React from 'react';
import { motion } from 'motion/react';
import { HERO_METRICS } from '../data/services';
import { ArrowRight, CheckCircle2, Sparkles, Glasses } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onContactClick }) => {
  return (
    <section className="relative w-full pt-16 pb-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col justify-center">
      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-8 flex-wrap"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-300 text-xs tracking-wide uppercase font-medium">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Virtual Reality & Spatial Studio
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-xs font-medium">
          <Glasses className="w-3.5 h-3.5 text-cyan-400" />
          Next-Gen VR Solutions
        </div>
      </motion.div>

      {/* Main Headline - MUST BE EXACTLY 60px */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-[38px] sm:text-[50px] lg:text-[60px] font-bold text-white tracking-tight leading-[1.15] mb-8 max-w-5xl"
        style={{ fontSize: '60px' }}
      >
        We build immersive Virtual Reality experiences & spatial computing worlds
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-zinc-400 text-lg sm:text-xl max-w-3xl leading-relaxed mb-10 font-normal"
      >
        Engineered for Meta Quest, Apple Vision Pro, and WebXR. We design, develop, and deploy interactive VR environments, 3D spatial applications, and enterprise simulations with photorealistic performance.
      </motion.p>

      {/* Action CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap items-center gap-4 mb-16"
      >
        <button
          onClick={onContactClick}
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition-all duration-200 cursor-pointer shadow-lg group"
        >
          <span>Schedule VR Demo</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={onExploreClick}
          className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-zinc-800 hover:border-zinc-700 text-zinc-200 font-medium rounded-xl transition-all duration-200 cursor-pointer hover:text-white"
        >
          <span>Explore VR Solutions</span>
        </button>
      </motion.div>

      {/* Key Metrics Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-zinc-900"
      >
        {HERO_METRICS.map((metric, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{metric.value}</span>
            </div>
            <span className="text-zinc-300 font-medium text-sm mt-1">{metric.label}</span>
            <span className="text-zinc-500 text-xs">{metric.subtext}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
