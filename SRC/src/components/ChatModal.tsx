import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { sender: 'Zenrixa AI', text: 'Hello! How can we help bring your digital vision to life?' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = inputText;
    setMessages((prev) => [...prev, { sender: 'You', text: userMsg }]);
    setInputText('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'Zenrixa AI',
          text: `Thank you for reaching out! We've received your inquiry: "${userMsg}". Our creative leads will contact you shortly.`
        }
      ]);
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="w-full max-w-lg bg-zinc-900 border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs">
                ZX
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-sans">Chat with Zenrixa</h3>
                <span className="text-xs text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                  Online & Ready
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="py-4 space-y-3 max-h-72 overflow-y-auto pr-1 font-sans">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  msg.sender === 'You' ? 'items-end' : 'items-start'
                }`}
              >
                <span className="text-[10px] text-white/70 mb-1 font-sans">{msg.sender}</span>
                <div
                  className={`px-4 py-2.5 rounded-2xl text-xs max-w-[85%] font-sans ${
                    msg.sender === 'You'
                      ? 'bg-white text-black font-medium'
                      : 'bg-zinc-800 text-white border border-white/10'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Suggestions */}
          <div className="flex items-center gap-2 overflow-x-auto py-2 mb-3 no-scrollbar font-sans">
            {['Brand Strategy', 'Product Design', 'Estimate Budget', 'Timeline'].map((tag) => (
              <button
                key={tag}
                onClick={() => setInputText(`I need help with ${tag}`)}
                className="shrink-0 px-3 py-1 rounded-full bg-zinc-800 hover:bg-zinc-700 text-[11px] text-white border border-white/10 transition-colors cursor-pointer font-sans"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Message Input */}
          <form onSubmit={handleSend} className="flex items-center gap-2 pt-2 border-t border-white/10">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message or project idea..."
              className="flex-1 bg-zinc-800/80 border border-white/10 rounded-full px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30"
            />
            <button
              type="submit"
              className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-transform active:scale-95 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
