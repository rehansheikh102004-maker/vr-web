import React from 'react';
import {
  ShieldCheck,
  UserCheck,
  Cpu,
  BarChart3,
  Cloud,
  RefreshCw,
  Zap,
  Activity,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

export const FeatureCards: React.FC = () => {
  const leftCards = [
    {
      icon: <ShieldCheck className="w-4 h-4 stroke-[1.5]" />,
      title: 'Advanced secure system',
      desc: 'Advanced protection to keep transactions safe and reliable.'
    },
    {
      icon: <Activity className="w-4 h-4 stroke-[1.5]" />,
      title: 'Real-time monitoring',
      desc: 'Direct connection to system telemetry and continuous analytics.'
    },
    {
      icon: <Cpu className="w-4 h-4 stroke-[1.5]" />,
      title: 'AI-driven automation',
      desc: 'Intelligent workflows designed to eliminate manual overhead.'
    },
    {
      icon: <Cloud className="w-4 h-4 stroke-[1.5]" />,
      title: 'Cloud infrastructure',
      desc: 'Scalable serverless deployment optimized for zero latency.'
    }
  ];

  const rightCards = [
    {
      icon: <UserCheck className="w-4 h-4 stroke-[1.5]" />,
      title: 'Seamless user access',
      desc: 'Seamless experience for managing finances anytime, anywhere.'
    },
    {
      icon: <RefreshCw className="w-4 h-4 stroke-[1.5]" />,
      title: 'Cross-platform sync',
      desc: 'Instant synchronization across mobile, desktop, and web.'
    },
    {
      icon: <Zap className="w-4 h-4 stroke-[1.5]" />,
      title: 'Custom API integrations',
      desc: 'Connect effortlessly with enterprise endpoints and tools.'
    },
    {
      icon: <BarChart3 className="w-4 h-4 stroke-[1.5]" />,
      title: 'Predictive analytics',
      desc: 'Smart metrics and forecasting for decision making.'
    }
  ];

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 border-t border-white/10 font-sans">
      {/* 2-Column Staggered Grid with Wide Negative Space */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-32 items-start">
        {/* Left Column (4 Cards) */}
        <div className="flex flex-col gap-12 sm:gap-16">
          {leftCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-black border border-zinc-800/80 hover:border-zinc-700 rounded-[28px] p-8 shadow-2xl flex flex-col justify-between min-h-[240px] sm:min-h-[260px] max-w-sm w-full transition-all group font-sans"
            >
              {/* Icon Badge Top Left */}
              <div className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center text-white group-hover:border-zinc-600 transition-colors">
                {card.icon}
              </div>

              {/* Text Content Bottom */}
              <div className="space-y-2 pt-8">
                <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight font-sans">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed font-sans">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column (4 Cards) - Staggered Downward Shift */}
        <div className="flex flex-col gap-12 sm:gap-16 md:pt-24">
          {rightCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx + 4) * 0.1 }}
              className="bg-black border border-zinc-800/80 hover:border-zinc-700 rounded-[28px] p-8 shadow-2xl flex flex-col justify-between min-h-[240px] sm:min-h-[260px] max-w-sm w-full md:ml-auto transition-all group font-sans"
            >
              {/* Icon Badge Top Left */}
              <div className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center text-white group-hover:border-zinc-600 transition-colors">
                {card.icon}
              </div>

              {/* Text Content Bottom */}
              <div className="space-y-2 pt-8">
                <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight font-sans">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed font-sans">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Action Footer Controls */}
      <div className="flex items-center justify-between pt-16">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-medium text-sm transition-all shadow-lg hover:bg-zinc-200 cursor-pointer font-sans"
        >
          <ArrowUpRight className="w-4 h-4" />
          <span>Visit site</span>
        </motion.button>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-11 h-11 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center text-white shadow-lg cursor-pointer font-sans"
        >
          <Sparkles className="w-4 h-4 text-white" />
        </motion.div>
      </div>
    </section>
  );
};

