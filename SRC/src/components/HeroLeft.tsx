import React from 'react';
import { Star, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroLeftProps {
  onChatClick: () => void;
  onWorksClick: () => void;
}

export const HeroLeft: React.FC<HeroLeftProps> = ({ onChatClick, onWorksClick }) => {
  return (
    <div className="flex flex-col justify-center space-y-8 max-w-2xl py-4 font-sans">
      {/* Category Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2"
      >
        <span className="text-white font-medium text-sm tracking-wide font-sans">
          | Creative Agency
        </span>
      </motion.div>

      {/* Main Headline with reduced font weight */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.1] font-sans"
      >
        The Future Is <br className="hidden sm:inline" />
        Closer Than <br className="hidden sm:inline" />
        You Think.
      </motion.h1>

      {/* Rating & Customer Proof */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center gap-3 pt-2"
      >
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-amber-400 text-amber-400"
            />
          ))}
        </div>
        <span className="text-sm font-medium text-white tracking-wide font-sans">
          3000+ Customers
        </span>
      </motion.div>

      {/* Action CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap items-center gap-4 pt-4 font-sans"
      >
        {/* Chat With Us Button */}
        <button
          onClick={onChatClick}
          className="group relative inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-300 font-medium text-sm cursor-pointer shadow-lg shadow-white/5 active:scale-98 font-sans"
        >
          <span className="font-sans">Chat With Us</span>
          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </button>

        {/* Our Works Button */}
        <button
          onClick={onWorksClick}
          className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-white/20 text-white font-medium text-sm transition-all duration-300 cursor-pointer hover:border-white/40 active:scale-98 font-sans"
        >
          Our Works
        </button>
      </motion.div>
    </div>
  );
};
