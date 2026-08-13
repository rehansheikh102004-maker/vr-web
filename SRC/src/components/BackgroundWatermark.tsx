import React from 'react';

export const BackgroundWatermark: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none z-0">
      <h2 className="text-[14vw] sm:text-[18vw] font-black tracking-tighter text-white/[0.03] text-center whitespace-nowrap uppercase leading-none font-sans translate-y-1/4">
        ZENRIXA
      </h2>
    </div>
  );
};
