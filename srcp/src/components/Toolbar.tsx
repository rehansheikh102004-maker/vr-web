import React, { useState } from 'react';
import { Sliders, Download, RefreshCw, Sparkles, Upload, Image as ImageIcon } from 'lucide-react';
import { DecimalFormat } from '../types';

interface ToolbarProps {
  cardBgOpacity: number;
  setCardBgOpacity: (val: number) => void;
  borderOpacity: number;
  setBorderOpacity: (val: number) => void;
  blurLevel: number;
  setBlurLevel: (val: number) => void;
  decimalFormat: DecimalFormat;
  setDecimalFormat: (val: DecimalFormat) => void;
  showBackgroundVisual: boolean;
  setShowBackgroundVisual: (val: boolean) => void;
  customProductImage: string | null;
  setCustomProductImage: (val: string | null) => void;
  onExportImage: () => void;
  isExporting: boolean;
  onReset: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  cardBgOpacity,
  setCardBgOpacity,
  borderOpacity,
  setBorderOpacity,
  blurLevel,
  setBlurLevel,
  decimalFormat,
  setDecimalFormat,
  showBackgroundVisual,
  setShowBackgroundVisual,
  customProductImage,
  setCustomProductImage,
  onExportImage,
  isExporting,
  onReset,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomProductImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      {/* Quick Export Image Button */}
      <button
        onClick={onExportImage}
        disabled={isExporting}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-medium backdrop-blur-md transition-all shadow-lg cursor-pointer active:scale-95 disabled:opacity-50"
      >
        <Download className="w-3.5 h-3.5" />
        <span>{isExporting ? 'Exporting...' : 'Export PNG'}</span>
      </button>

      {/* Settings Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-white/20 text-white text-xs font-medium backdrop-blur-md transition-all shadow-lg cursor-pointer active:scale-95"
      >
        <Sliders className="w-3.5 h-3.5 text-neutral-300" />
        <span>Customize</span>
      </button>

      {/* Settings Dropdown Drawer */}
      {isOpen && (
        <div className="absolute top-12 right-0 w-80 p-5 rounded-2xl bg-neutral-900/95 border border-white/15 text-white shadow-2xl backdrop-blur-xl z-50 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              Card Transparency & Visuals
            </span>
            <button
              onClick={onReset}
              title="Reset defaults"
              className="p-1 rounded hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
            </button>
          </div>

          {/* Product Image Swap */}
          <div className="space-y-2 pt-1 border-b border-white/10 pb-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-300 flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
                Product Image
              </span>
              {customProductImage && (
                <button
                  onClick={() => setCustomProductImage(null)}
                  className="text-[10px] text-red-400 hover:underline"
                >
                  Reset Render
                </button>
              )}
            </div>
            <label className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-neutral-200 cursor-pointer transition-colors">
              <Upload className="w-3.5 h-3.5 text-neutral-400" />
              <span>{customProductImage ? 'Change Image File' : 'Upload Custom Image'}</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Card Fill Opacity */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-neutral-300">Card Transparency</span>
              <span className="font-mono text-neutral-400">
                {Math.round((1 - cardBgOpacity) * 100)}% transparent
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="0.25"
              step="0.01"
              value={cardBgOpacity}
              onChange={(e) => setCardBgOpacity(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-white"
            />
          </div>

          {/* Border Opacity */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-neutral-300">Border Opacity</span>
              <span className="font-mono text-neutral-400">
                {Math.round(borderOpacity * 100)}%
              </span>
            </div>
            <input
              type="range"
              min="0.05"
              max="0.4"
              step="0.01"
              value={borderOpacity}
              onChange={(e) => setBorderOpacity(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-white"
            />
          </div>

          {/* Backdrop Blur */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-neutral-300">Backdrop Blur</span>
              <span className="font-mono text-neutral-400">{blurLevel}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="30"
              step="1"
              value={blurLevel}
              onChange={(e) => setBlurLevel(parseInt(e.target.value))}
              className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-white"
            />
          </div>

          {/* Format $9,99 vs $9.99 */}
          <div className="flex items-center justify-between text-xs pt-1">
            <span className="text-neutral-300">Decimal Format</span>
            <div className="flex bg-neutral-800 p-0.5 rounded-lg border border-white/10">
              <button
                onClick={() => setDecimalFormat('comma')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  decimalFormat === 'comma' ? 'bg-white/20 text-white font-medium' : 'text-neutral-400 hover:text-white'
                }`}
              >
                $9,99
              </button>
              <button
                onClick={() => setDecimalFormat('dot')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  decimalFormat === 'dot' ? 'bg-white/20 text-white font-medium' : 'text-neutral-400 hover:text-white'
                }`}
              >
                $9.99
              </button>
            </div>
          </div>

          {/* Background Visual Toggle */}
          <div className="flex items-center justify-between text-xs pt-1">
            <span className="text-neutral-300">Background Visual</span>
            <button
              onClick={() => setShowBackgroundVisual(!showBackgroundVisual)}
              className={`px-3 py-1 rounded-lg border text-xs font-medium transition-colors ${
                showBackgroundVisual
                  ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                  : 'bg-neutral-800 text-neutral-400 border-white/10'
              }`}
            >
              {showBackgroundVisual ? 'With Visual' : 'Clean / Removed'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
