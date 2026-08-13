import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', headset: 'Meta Quest 3 & Vision Pro' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: '', email: '', company: '', headset: 'Meta Quest 3 & Vision Pro' });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 text-white shadow-2xl"
        >
          <button
            onClick={handleReset}
            className="absolute top-6 right-6 p-2 rounded-full border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle2 className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">VR Demo Session Requested</h3>
              <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6">
                Thank you, {form.name || 'there'}. Our Spatial Solutions Lead will review your company ({form.company || 'your team'}) requirements and contact you within 24 hours to schedule a live VR demonstration.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition-colors cursor-pointer"
              >
                Back to Site
              </button>
            </div>
          ) : (
            <div>
              <h3 className="text-2xl font-bold mb-2">Schedule Virtual Reality Demo</h3>
              <p className="text-zinc-400 text-sm mb-6">
                Direct consultation and live spatial demo with our senior VR developers.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Full Name</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Alex Rivera"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Work Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Company / Organization</label>
                  <input
                    required
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Acme VR Labs"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Target VR Hardware Platform</label>
                  <select
                    value={form.headset}
                    onChange={(e) => setForm({ ...form, headset: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-zinc-600"
                  >
                    <option value="Meta Quest 3 / Pro">Meta Quest 3 / Pro</option>
                    <option value="Apple Vision Pro">Apple Vision Pro</option>
                    <option value="WebXR (In-Browser 3D)">WebXR (In-Browser 3D)</option>
                    <option value="PCVR / SteamVR (HTC Vive / Index)">PCVR / SteamVR (HTC Vive / Index)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Request Demo Session</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
