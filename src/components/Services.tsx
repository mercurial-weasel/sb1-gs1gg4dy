import React from 'react';
import { Lightbulb, Target, Shield, BarChart } from 'lucide-react';

const services = [
  {
    title: 'AI Strategy Development',
    description: 'Custom roadmaps for integrating AI into your business operations',
    icon: Lightbulb,
  },
  {
    title: 'Implementation Planning',
    description: 'Detailed execution plans with clear milestones and deliverables',
    icon: Target,
  },
  {
    title: 'Risk Assessment',
    description: 'Comprehensive analysis of AI implementation risks and mitigation strategies',
    icon: Shield,
  },
  {
    title: 'Performance Optimization',
    description: 'Continuous monitoring and optimization of AI systems',
    icon: BarChart,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive AI consulting solutions for your business needs
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                <service.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}