import React from 'react';
import HeroContent from './HeroContent';
import ServiceCards from './ServiceCards';
import GridBackground from '../effects/GridBackground';

export default function HeroSection() {
  return (
    <section className="relative bg-black pt-32 pb-24 overflow-hidden">
      <GridBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroContent />
        <ServiceCards />
      </div>
    </section>
  );
}