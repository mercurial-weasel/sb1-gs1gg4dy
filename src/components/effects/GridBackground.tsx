import React from 'react';

export default function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(90deg, #fff 1px, transparent 1px),
                           linear-gradient(180deg, #fff 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      />
      
      {/* Purple blur effects */}
      <div className="absolute -left-[25%] top-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[128px]" />
      <div className="absolute -right-[25%] top-[20%] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[128px]" />
    </div>
  );
}