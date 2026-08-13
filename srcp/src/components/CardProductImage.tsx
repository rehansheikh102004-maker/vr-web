import React, { useRef } from 'react';
import { Upload } from 'lucide-react';

interface CardProductImageProps {
  customImage?: string | null;
  planName: string;
  onImageUpload?: (dataUrl: string) => void;
}

export const CardProductImage: React.FC<CardProductImageProps> = ({
  customImage,
  planName,
  onImageUpload,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onImageUpload) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onImageUpload(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      className="relative w-full h-48 sm:h-56 mb-6 -mt-1 -mx-1 rounded-t-[24px] overflow-hidden flex items-center justify-center bg-[#070b08] border-b border-white/10 group-hover:border-emerald-500/30 transition-all cursor-pointer group/img"
      title="Click to replace with your exact image"
    >
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Atmospheric dark green radial gradient background directly inspired by the user's VR headset render */}
      <div
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-500 group-hover/img:opacity-100"
        style={{
          background:
            'radial-gradient(circle at 72% 55%, rgba(0, 230, 80, 0.45) 0%, rgba(0, 100, 35, 0.22) 40%, rgba(4, 10, 6, 0.98) 80%)',
        }}
      />

      {/* Hover upload prompt pill */}
      <div className="absolute top-3 right-3 z-30 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 bg-black/70 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-lg">
        <Upload className="w-3 h-3 text-emerald-400" />
        <span>Use Your Image</span>
      </div>

      {customImage ? (
        <div className="relative z-10 w-full h-full p-2 flex items-center justify-center">
          <img
            src={customImage}
            alt={`${planName} VR Headset`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover/img:scale-105 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          />
        </div>
      ) : (
        /* Hyper-realistic 3D Photorealistic VR Headset SVG matching the exact green glow photo */
        <div className="relative z-10 w-full h-full flex items-center justify-center p-3">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Volumetric Neon Glow Aura */}
            <div className="absolute w-48 h-20 bg-[#00FF55] rounded-full blur-3xl opacity-50 top-1/3 right-10 pointer-events-none animate-pulse" />

            <svg
              viewBox="0 0 500 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full max-h-[190px] drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)] transition-transform duration-500 group-hover/img:scale-105"
            >
              <defs>
                {/* Photorealistic Soft Glow Filters */}
                <filter id="ultraGreenBloom" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="12" result="blur1" />
                  <feGaussianBlur stdDeviation="4" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur1" />
                    <feMergeNode in="blur2" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* 3D Visor Neon Green Gradient */}
                <linearGradient id="visorGreenGrad" x1="120" y1="100" x2="380" y2="180" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#A7F3D0" />
                  <stop offset="20%" stopColor="#00FF66" />
                  <stop offset="60%" stopColor="#00DD44" />
                  <stop offset="100%" stopColor="#007722" />
                </linearGradient>

                {/* Realistic Curved Metallic Chassis Shader */}
                <linearGradient id="chassis3DShader" x1="100" y1="80" x2="400" y2="240" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#2c3038" />
                  <stop offset="25%" stopColor="#1a1c21" />
                  <stop offset="65%" stopColor="#0f1013" />
                  <stop offset="100%" stopColor="#050607" />
                </linearGradient>

                {/* Strap Rear Ambient Gradient */}
                <linearGradient id="strap3D" x1="60" y1="180" x2="320" y2="80" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#1c1f24" />
                  <stop offset="50%" stopColor="#121317" />
                  <stop offset="100%" stopColor="#08090a" />
                </linearGradient>
              </defs>

              {/* Rear Cushion Headband Strap (3/4 angle) */}
              <path
                d="M 90 170 C 65 140, 75 95, 140 70 C 215 45, 330 55, 400 95 C 430 115, 435 145, 410 170 C 380 195, 320 205, 260 195"
                fill="none"
                stroke="url(#strap3D)"
                strokeWidth="28"
                strokeLinecap="round"
              />
              <path
                d="M 92 170 C 68 142, 78 98, 140 72 C 213 48, 328 58, 398 97"
                fill="none"
                stroke="#323742"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.6"
              />

              {/* Main Dark Matte Chassis Base Shell */}
              <path
                d="M 170 100 C 210 88, 325 90, 380 115 C 405 128, 412 160, 392 190 C 372 220, 320 238, 260 230 C 215 224, 180 210, 162 190 C 142 168, 142 120, 170 100 Z"
                fill="url(#chassis3DShader)"
                stroke="#3f4552"
                strokeWidth="1.5"
              />

              {/* Nose Ergonomic Indentation Shadow */}
              <path
                d="M 285 230 C 308 220, 322 190, 310 172 C 298 158, 280 168, 262 185 C 245 202, 250 222, 285 230 Z"
                fill="#030405"
              />

              {/* Sleek Curved Neon Green Visor Light Bar */}
              <path
                d="M 175 122 C 215 108, 325 110, 385 132 C 398 138, 398 156, 385 164 C 335 182, 215 176, 175 152 C 162 144, 162 130, 175 122 Z"
                fill="url(#visorGreenGrad)"
                filter="url(#ultraGreenBloom)"
              />

              {/* Bright Visor Reflection Specular Highlight */}
              <path
                d="M 185 126 C 222 114, 318 114, 375 135"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.95"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Glossy gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-90 pointer-events-none" />
    </div>
  );
};
