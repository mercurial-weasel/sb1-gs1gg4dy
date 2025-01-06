import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Approach {
  title: string;
  description: string;
}

const approaches: Approach[] = [
  {
    title: 'Strategic Consulting',
    description: 'We help businesses uncover opportunities, identify quick wins, and map out a roadmap for long-term AI success.'
  },
  {
    title: 'Custom AI Solutions',
    description: 'From boosting sales to streamlining operations, our AI agents are built to meet your goals while putting you in control.'
  },
  {
    title: 'Flexible Partnerships',
    description: "Whether it's a pilot project, a dedicated AI development team, or ongoing support, we scale our offerings to match your needs."
  }
];

export default function AboutApproaches() {
  return (
    <div className="mt-16 bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
      <h3 className="text-xl font-semibold text-white mb-6">Our Approach</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {approaches.map((item) => (
          <div key={item.title} className="flex flex-col">
            <h4 className="text-lg font-medium text-white mb-2">{item.title}</h4>
            <p className="text-gray-300 mb-4">{item.description}</p>
            <div className="mt-auto">
              <button className="inline-flex items-center text-[#249826] hover:text-[#1d7a1e] transition-colors">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}