import React from 'react';
import { BarChart3, Lightbulb, Bot } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { openCalendly } from '../../utils/calendly';

const services = [
  {
    title: 'AI Strategy Development',
    description: 'Expert guidance',
    features: [
      'Strategic roadmap development',
      'AI audits',
      'Implementation planning'
    ],
    price: '$150/hr',
    icon: BarChart3,
    buttonText: 'Book Call',
    onClick: openCalendly
  },
  {
    title: 'Pilot Projects',
    description: 'Have a specific project in mind?',
    features: [
      'Proof of concept development',
      'Test AI solutions in your environment',
      'Measurable outcomes'
    ],
    price: 'Get Quote',
    icon: Lightbulb,
    buttonText: 'Get Quote',
    onClick: openCalendly
  },
  {
    title: 'AI Agent Development',
    description: 'Managed team',
    features: [
      'Project Manager and AI Developer',
      'Month to month',
      'Scale up based on your needs'
    ],
    price: '$4,500/m',
    icon: Bot,
    buttonText: 'Book Call',
    onClick: openCalendly
  }
];

export default function ServiceCards() {
  return (
    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
}