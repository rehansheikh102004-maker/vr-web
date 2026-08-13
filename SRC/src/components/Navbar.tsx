import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenMenu: () => void;
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMenu, onOpenChat }) => {
  const [activeNav, setActiveNav] = useState('Home');
  const [productDropdown, setProductDropdown] = useState(false);

  const navItems = [
    { name: 'Home', hasDropdown: false },
    { name: 'Product', hasDropdown: true },
    { name: 'About', hasDropdown: false },
    { name: 'Brands', hasDropdown: false },
    { name: 'Careers', hasDropdown: false },
    { name: 'Partners', hasDropdown: false },
  ];

  return (
    <header className="relative z-40 w-full px-6 py-6 lg:px-12 flex items-center justify-between border-b border-white/10 font-sans">
      {/* Brand Logo */}
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className="relative w-8 h-8 flex items-center justify-center">
          {/* Zenrixa custom mark */}
          <div className="grid grid-cols-2 gap-1 w-6 h-6 transform group-hover:rotate-45 transition-transform duration-300">
            <div className="bg-white rounded-xs"></div>
            <div className="bg-white/40 rounded-xs"></div>
            <div className="bg-white/40 rounded-xs"></div>
            <div className="bg-white rounded-xs"></div>
          </div>
        </div>
        <span className="text-2xl font-bold tracking-tight text-white font-sans">
          Zenrixa
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 bg-zinc-900/60 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 font-sans">
        {navItems.map((item) => (
          <div key={item.name} className="relative">
            <button
              onClick={() => {
                setActiveNav(item.name);
                if (item.hasDropdown) {
                  setProductDropdown(!productDropdown);
                } else {
                  setProductDropdown(false);
                }
              }}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-white font-sans ${
                activeNav === item.name ? 'text-white' : 'text-white/80'
              }`}
            >
              <span>{item.name}</span>
              {item.hasDropdown && (
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productDropdown ? 'rotate-180' : ''}`} />
              )}
            </button>

            {/* Active dot indicator */}
            {activeNav === item.name && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            {/* Product Dropdown menu */}
            {item.hasDropdown && productDropdown && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-3 w-48 bg-zinc-900 border border-white/10 rounded-xl p-2 shadow-2xl z-50 font-sans"
                >
                  <a href="#branding" className="block px-3 py-2 text-xs text-white hover:bg-white/10 rounded-lg transition-colors font-sans">
                    Brand Strategy
                  </a>
                  <a href="#digital" className="block px-3 py-2 text-xs text-white hover:bg-white/10 rounded-lg transition-colors font-sans">
                    Digital Products
                  </a>
                  <a href="#spatial" className="block px-3 py-2 text-xs text-white hover:bg-white/10 rounded-lg transition-colors font-sans">
                    Spatial Design
                  </a>
                  <a href="#ai-experience" className="block px-3 py-2 text-xs text-white hover:bg-white/10 rounded-lg transition-colors font-sans">
                    AI Interfaces
                  </a>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        ))}
      </nav>

      {/* Right Controls: MENU button */}
      <div className="flex items-center gap-4">
        {/* Menu Pill Button */}
        <button
          onClick={onOpenMenu}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold uppercase tracking-wider text-white transition-all active:scale-95 cursor-pointer font-sans"
        >
          <span className="text-[10px] text-white/70 font-sans">01</span>
          <span className="font-sans">MENU</span>
        </button>
      </div>
    </header>
  );
};
