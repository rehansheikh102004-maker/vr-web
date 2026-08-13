import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/services';
import { ServiceCard } from '../types';
import { Globe, ShieldCheck, Glasses, Cpu, ShoppingBag, Headphones, ArrowUpRight, Check, Box } from 'lucide-react';

interface CardsSectionProps {
  onSelectCard: (card: ServiceCard) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-white" />,
  Globe: <Globe className="w-6 h-6 text-white" />,
  Glasses: <Glasses className="w-6 h-6 text-white" />,
  Cpu: <Cpu className="w-6 h-6 text-white" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-white" />,
  Headphones: <Headphones className="w-6 h-6 text-white" />,
};

export const CardsSection: React.FC<CardsSectionProps> = ({ onSelectCard }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Simulations', 'WebXR', 'Spatial Apps', 'Enterprise VR', 'Interactive 3D'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section id="services-section" className="w-full py-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-2 block">
            Virtual Reality Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Comprehensive VR & Spatial Solutions
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-white text-black font-semibold'
                  : 'bg-transparent text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Transparent Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            onClick={() => onSelectCard(service)}
            className="group relative bg-transparent border border-zinc-800 hover:border-zinc-600 rounded-2xl p-8 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Header inside Card */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl border border-zinc-800 bg-transparent group-hover:border-zinc-600 transition-colors">
                  {ICON_MAP[service.iconName] || <Box className="w-6 h-6 text-white" />}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md border border-zinc-800 text-zinc-400">
                    {service.metrics}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-500 transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Title & Category */}
              <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider block mb-1">
                {service.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                {service.description}
              </p>
            </div>

            {/* Features List */}
            <div className="pt-6 border-t border-zinc-900/80">
              <ul className="space-y-2.5">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
