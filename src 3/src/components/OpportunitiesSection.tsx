import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Share2, 
  Layers, 
  PieChart, 
  Sliders, 
  TrendingUp 
} from 'lucide-react';

interface CardProps {
  number?: string;
  text: string;
  title?: string;
  icon: React.ReactNode;
  variant?: 'glass' | 'blue';
  className?: string;
  onClick?: () => void;
}

const OpportunityCard: React.FC<CardProps> = ({
  number,
  text,
  title,
  icon,
  className = '',
  onClick
}) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={`p-6 rounded-2xl border border-white/20 hover:border-white/50 bg-transparent text-white transition-all duration-300 cursor-pointer flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 rounded-xl border border-white/20 text-white bg-transparent">
            {icon}
          </div>
          <div className="p-1.5 rounded-lg border border-white/20 text-white bg-transparent">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {number && (
          <span className="text-xs font-semibold tracking-wider text-white uppercase block mb-2 opacity-90">
            {number}
          </span>
        )}

        {title && (
          <h4 className="text-sm font-bold text-white mb-2 leading-snug">
            {title}
          </h4>
        )}

        <p className="text-xs text-white leading-relaxed font-normal">
          {text}
        </p>
      </div>
    </motion.div>
  );
};

interface OpportunitiesSectionProps {
  onCardClick?: (id: string) => void;
}

export const OpportunitiesSection: React.FC<OpportunitiesSectionProps> = ({ onCardClick }) => {
  return (
    <section id="challenges-opportunities" className="w-full max-w-7xl mx-auto px-6 py-12">
      {/* Cards Grid on Plain Black Background */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-black">
        {/* Card 01 */}
        <OpportunityCard 
          number="01"
          icon={<Share2 className="w-4 h-4" />}
          text="We deliver scalable growth with data-driven creative marketing strategies."
          onClick={() => onCardClick?.('card-01')}
        />

        {/* Card 02 */}
        <OpportunityCard 
          number="02"
          icon={<Layers className="w-4 h-4" />}
          text="Tailored ad solutions that make a real difference and drive actionable result."
          onClick={() => onCardClick?.('card-02')}
        />

        {/* Card 03 */}
        <OpportunityCard 
          number="03"
          icon={<PieChart className="w-4 h-4" />}
          text="Data guidance derived from industry benchmark tests to optimize overall performance in the market."
          onClick={() => onCardClick?.('card-03')}
        />

        {/* Card 04 */}
        <OpportunityCard 
          number="04"
          icon={<Sliders className="w-4 h-4" />}
          text="Tailoring precision campaigns to convert audience attention into brand growth."
          onClick={() => onCardClick?.('card-04')}
        />

        {/* Card 05 */}
        <OpportunityCard 
          icon={<TrendingUp className="w-4 h-4" />}
          title="We turn complex data into actionable insight for growth."
          text="We craft tailored strategies including Brand Activation, Paid Media, and Messaging analysis to ensure high ROI and brand longevity."
          onClick={() => onCardClick?.('card-05')}
          className="sm:col-span-2 lg:col-span-2"
        />
      </div>
    </section>
  );
};
