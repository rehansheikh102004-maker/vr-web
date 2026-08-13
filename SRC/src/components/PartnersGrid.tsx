import React from 'react';
import { motion } from 'motion/react';

export const PartnersGrid: React.FC = () => {
  const partners = [
    {
      name: 'zantic',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      name: 'BookStore',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      )
    },
    {
      name: 'Wagn',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 12h20M12 2v20" />
        </svg>
      )
    },
    {
      name: 'Chime',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      )
    },
    {
      name: 'Mora',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 12 12 22 22 12 12 2" />
        </svg>
      )
    },
    {
      name: 'Omni',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      )
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full max-w-md pt-6 font-sans"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-medium uppercase tracking-wider text-white font-sans">
          Our Partners
        </span>
        <span className="w-12 h-px bg-white/20" />
      </div>

      <div className="grid grid-cols-3 gap-y-4 gap-x-6 items-center">
        {partners.map((partner, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 text-white hover:text-white transition-colors cursor-pointer group"
          >
            <span className="text-white/80 group-hover:text-white transition-colors">
              {partner.icon}
            </span>
            <span className="text-xs font-medium tracking-tight font-sans text-white">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
