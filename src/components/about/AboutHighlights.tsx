import React from 'react';
import { Award, Users, Lightbulb } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    icon: Award,
    title: '20+ Years Experience',
    description: 'Decades of expertise in digital transformation and AI implementation'
  },
  {
    icon: Users,
    title: 'Global Impact',
    description: 'Successfully led billion-dollar infrastructure projects across continents'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Focus',
    description: 'Pioneering AI solutions that deliver measurable business results'
  }
];

export default function AboutHighlights() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      {highlights.map((item) => (
        <div key={item.title} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
          <div className="w-12 h-12 rounded-lg bg-[#249826]/10 flex items-center justify-center mb-4">
            <item.icon className="h-6 w-6 text-[#249826]" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
          <p className="text-gray-300">{item.description}</p>
        </div>
      ))}
    </div>
  );
}