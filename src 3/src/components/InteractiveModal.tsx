import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Send, BarChart3, ShieldCheck } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeId: string | null;
}

export const InteractiveModal: React.FC<ModalProps> = ({ isOpen, onClose, activeId }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$10k - $50k',
    message: ''
  });

  if (!isOpen) return null;

  const getTitleAndContent = () => {
    switch (activeId) {
      case 'revenue':
        return {
          title: "Average Revenue Growth ($43k+)",
          tagline: "Data-driven ROI optimization",
          details: "Our predictive modeling and audience targeting increase client quarterly revenue by an average of $43,000 within the first 90 days."
        };
      case 'campaigns':
        return {
          title: "200+ Executed Campaigns",
          tagline: "Cross-platform ad precision",
          details: "From multi-channel programmatic ads to high-converting social campaigns, we have planned and executed over 200 tailored growth pushes."
        };
      case 'projects':
        return {
          title: "380+ Successful Projects",
          tagline: "End-to-end strategy & execution",
          details: "We convert business hurdles into market opportunities across tech, finance, e-commerce, and luxury retail."
        };
      case 'card-01':
        return {
          title: "Scalable Growth & Creative Marketing",
          tagline: "Strategy 01",
          details: "Data-backed creative direction designed to capture audience attention and scale ad performance seamlessly."
        };
      case 'card-02':
        return {
          title: "Tailored Ad Solutions",
          tagline: "Strategy 02",
          details: "Custom attribution models and hyper-targeted messaging that drive direct business actions and measurable revenue."
        };
      case 'card-03':
        return {
          title: "Industry Benchmark Data Guidance",
          tagline: "Strategy 03",
          details: "Deep competitive benchmarking to optimize customer acquisition cost (CAC) and lifetime value (LTV)."
        };
      case 'card-04':
        return {
          title: "Precision Audience Conversion",
          tagline: "Strategy 04",
          details: "Behavioral segmentation and funnel optimization converting passive viewers into loyal brand advocates."
        };
      case 'card-05':
        return {
          title: "Actionable Insights & ROI Longevity",
          tagline: "Strategy 05",
          details: "Comprehensive Brand Activation, Paid Media optimization, and messaging telemetry ensuring long-term profitability."
        };
      default:
        return {
          title: "Work With Next Level Agency",
          tagline: "Get In Touch",
          details: "Transform your commercial challenges into long-term growth with our tailored ad strategies and data solutions."
        };
    }
  };

  const info = getTitleAndContent();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      <div id="interactive-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="w-full max-w-xl bg-black border border-white/30 rounded-3xl p-6 sm:p-8 text-white relative shadow-2xl overflow-hidden"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-6 pr-10">
            <span className="text-xs uppercase tracking-widest text-white font-semibold block mb-1">
              {info.tagline}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {info.title}
            </h3>
            <p className="text-sm text-white mt-3 leading-relaxed font-normal">
              {info.details}
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-white/20">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                Request Strategy Consultation
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white mb-1">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full bg-black border border-white/30 rounded-xl px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full bg-black border border-white/30 rounded-xl px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-white mb-1">Estimated Monthly Ad Spend</label>
                <select 
                  value={formData.budget}
                  onChange={e => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-black border border-white/30 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-white"
                >
                  <option value="< $10k">Under $10,000</option>
                  <option value="$10k - $50k">$10,000 - $50,000</option>
                  <option value="$50k - $200k">$50,000 - $200,000</option>
                  <option value="$200k+">$200,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-white mb-1">Brief Description of Your Goal</label>
                <textarea 
                  rows={3}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your brand challenges or targets..."
                  className="w-full bg-black border border-white/30 rounded-xl px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white"
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-white text-black font-semibold text-sm rounded-xl hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
              >
                <span>Submit Strategy Request</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="py-12 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-white mx-auto animate-bounce" />
              <h4 className="text-xl font-bold text-white">Strategy Request Received</h4>
              <p className="text-xs text-white">
                Our senior ad strategist will analyze your request and reach out shortly.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
