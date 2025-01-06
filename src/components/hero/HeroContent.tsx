import React from 'react';

export default function HeroContent() {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
        We build custom{' '}
        <span className="text-indigo-400">AI agents</span> and offer{' '}
        <span className="text-indigo-400">strategic AI consulting</span>
      </h1>
      <p className="mt-8 text-xl text-gray-300 leading-relaxed">
        Grow without hiring. Our AI solutions reduce cost and enhance sales, streamline customer support, 
        optimize data management, and put your team in charge, while our consulting expertise ensures 
        a seamless transition from planning to execution.
      </p>
    </div>
  );
}