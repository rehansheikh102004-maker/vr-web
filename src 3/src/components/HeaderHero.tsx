import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, TrendingUp, Target, Award } from 'lucide-react';

interface HeaderHeroProps {
  onStatClick?: (stat: string) => void;
}

export const HeaderHero: React.FC<HeaderHeroProps> = ({ onStatClick }) => {
  return (
    <header id="header-hero" className="w-full max-w-7xl mx-auto px-6 pt-10 pb-16">
      {/* Top logo dot */}
      <div id="top-branding" className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-3">
          <span className="w-3.5 h-3.5 bg-blue-600 rounded-full inline-block animate-pulse"></span>
          <span className="text-white text-xs tracking-widest uppercase font-semibold">
            Next Level Agency
          </span>
        </div>
      </div>

      {/* Main Grid Header */}
      <div id="hero-heading-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
        {/* Left Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <h1 className="text-[60px] font-normal tracking-tight text-white leading-[1.1]">
            We offer next level{' '}
            <span className="italic underline decoration-1 underline-offset-8 font-serif font-normal block sm:inline">
              solutions
            </span>
          </h1>
        </motion.div>

        {/* Right Paragraph Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 lg:pt-4"
        >
          <p className="text-white text-base sm:text-lg leading-relaxed font-normal opacity-100">
            After working with us, your business will achieve the new heights. We will return to you with in-depth analysis, tailored strategies and business problems solved. We transform your problems. After working with us, your business will achieve the new heights.
          </p>
        </motion.div>
      </div>

      {/* 3 Stats Columns */}
      <div id="stats-section" className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/30">
        {/* Stat 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group cursor-pointer p-4 rounded-xl border border-transparent hover:border-white/20 transition-all duration-300"
          onClick={() => onStatClick?.('revenue')}
        >
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-5xl sm:text-6xl md:text-7xl font-light text-white italic tracking-tight">
              43k
            </span>
            <span className="text-2xl sm:text-3xl font-light text-white align-top">
              $
            </span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">
              Average Revenue
            </h3>
            <ArrowUpRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-xs text-white leading-relaxed font-light">
            We deliver measurable growth with data-driven tailored strategies that elevate performance.
          </p>
        </motion.div>

        {/* Stat 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group cursor-pointer p-4 rounded-xl border border-transparent hover:border-white/20 transition-all duration-300"
          onClick={() => onStatClick?.('campaigns')}
        >
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-5xl sm:text-6xl md:text-7xl font-light text-white italic tracking-tight">
              200
            </span>
            <span className="text-2xl sm:text-3xl font-light text-white align-top">
              ⁺
            </span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">
              Campaigns
            </h3>
            <ArrowUpRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-xs text-white leading-relaxed font-light">
            Executed campaigns across diverse commercial sectors with maximum precision and reach.
          </p>
        </motion.div>

        {/* Stat 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="group cursor-pointer p-4 rounded-xl border border-transparent hover:border-white/20 transition-all duration-300"
          onClick={() => onStatClick?.('projects')}
        >
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-5xl sm:text-6xl md:text-7xl font-light text-white italic tracking-tight">
              380
            </span>
            <span className="text-2xl sm:text-3xl font-light text-white align-top">
              ⁺
            </span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">
              Successful Projects
            </h3>
            <ArrowUpRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-xs text-white leading-relaxed font-light">
            Transforming ambitious ideas into scalable market leaders through strategic creative execution.
          </p>
        </motion.div>
      </div>
    </header>
  );
};
