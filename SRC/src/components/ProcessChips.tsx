import React from 'react';
import { motion } from 'motion/react';

export const ProcessChips: React.FC = () => {
  const chipRows = [
    [
      { label: 'Market research' },
      { label: 'Product design' },
      { label: 'Beta launch' },
    ],
    [
      { label: 'User needs analysis' },
      { label: 'System development' },
      { label: 'User feedback' },
    ],
    [
      { label: 'System development' },
      { label: 'Performance optimization' },
    ],
  ];

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-10 border-t border-white/10 font-sans">
      <div className="flex flex-col items-center justify-center space-y-4">
        {chipRows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
            className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 ${
              rowIndex === 1 ? 'sm:-translate-x-4' : rowIndex === 2 ? 'sm:translate-x-8' : ''
            }`}
          >
            {row.map((chip, chipIndex) => (
              <motion.div
                key={chipIndex}
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-zinc-900/80 border border-white/10 text-white font-sans text-sm font-normal tracking-tight shadow-lg backdrop-blur-md cursor-pointer transition-all duration-200"
              >
                <span className="w-2 h-2 rounded-full bg-white shrink-0 shadow-sm" />
                <span className="whitespace-nowrap">{chip.label}</span>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
