import React from 'react';
import { X, ArrowUpRight, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const menuLinks = [
    { title: '01. Home', desc: 'Main agency hub & showcase' },
    { title: '02. Selected Work', desc: 'Case studies & design system' },
    { title: '03. Products & AI', desc: 'Custom software & design' },
    { title: '04. About Zenrixa', desc: 'Philosophy & global team' },
    { title: '05. Careers', desc: 'Join our studio' },
    { title: '06. Contact Us', desc: 'Start a project conversation' },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-6 md:p-12 text-white overflow-y-auto"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs font-sans">
              ZX
            </div>
            <span className="text-xl font-bold tracking-tight font-sans">Zenrixa Agency</span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold uppercase tracking-wider text-white transition-all cursor-pointer"
          >
            <span>CLOSE</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Menu Navigation Grid */}
        <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full font-sans">
          {menuLinks.map((link, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              onClick={onClose}
              className="group border-b border-white/10 pb-6 cursor-pointer flex items-center justify-between hover:border-white transition-colors font-sans"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-medium font-sans tracking-tight text-white transition-colors">
                  {link.title}
                </h3>
                <p className="text-xs text-white/80 mt-1 font-sans">{link.desc}</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/20 group-hover:bg-white group-hover:text-black flex items-center justify-center transition-all duration-300 text-white">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer info inside menu */}
        <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/80 font-sans">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white">
              <Mail className="w-3.5 h-3.5 text-white" />
              hello@zenrixa.com
            </span>
            <span className="flex items-center gap-1.5 text-white">
              <MapPin className="w-3.5 h-3.5 text-white" />
              San Francisco • Tokyo • Zurich
            </span>
          </div>
          <div className="text-white font-sans">© {new Date().getFullYear()} Zenrixa Agency. All Rights Reserved.</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
