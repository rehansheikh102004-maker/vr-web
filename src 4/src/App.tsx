import React, { useRef } from 'react';

export default function App() {
  const bannerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-black text-white font-dm-sans flex items-center justify-center p-0 sm:p-4 md:p-8 select-none relative">
      {/* PURE BANNER ARTWORK ONLY */}
      <div
        ref={bannerRef}
        id="banner-canvas"
        className="w-full max-w-6xl aspect-[16/9] bg-black text-white relative flex flex-col justify-between p-6 sm:p-12 md:p-16 lg:p-20 overflow-hidden"
        style={{ backgroundColor: '#000000' }}
      >
        {/* Main Grid: Left Text - Center Empty Space - Right Text */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 items-center gap-2 sm:gap-4 my-auto relative z-10">
          {/* Left Text */}
          <div className="md:col-span-4 flex justify-center md:justify-end text-center md:text-right">
            <h2 className="text-white font-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight">
              <span className="block">Out of</span>
              <span className="block">time</span>
            </h2>
          </div>

          {/* Center Empty Space */}
          <div className="md:col-span-4 h-52 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center relative" />

          {/* Right Text */}
          <div className="md:col-span-4 flex justify-center md:justify-start text-center md:text-left">
            <h2 className="text-white font-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight">
              <span className="block">and</span>
              <span className="block">space</span>
            </h2>
          </div>
        </div>

        {/* Bottom Subtext */}
        <div className="mt-6 sm:mt-10 text-center relative z-10 space-y-1">
          <p className="text-neutral-400 text-xs sm:text-sm md:text-base font-normal max-w-lg mx-auto leading-relaxed tracking-wide">
            Coinflect has migrated to wrapped Coinflect.
          </p>
          <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-medium max-w-lg mx-auto">
            <span className="underline underline-offset-4 decoration-1">Read more in our new article</span>
          </p>
        </div>
      </div>
    </div>
  );
}
