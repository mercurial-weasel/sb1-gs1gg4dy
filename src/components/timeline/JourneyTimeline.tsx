import React from 'react';
import TimelineItem from './TimelineItem';

const milestones = [
  {
    date: '2008',
    title: 'Founder completes PhD on Hardware Accelerated Neural Networks',
    description: 'Pioneering research in neural network acceleration laying the groundwork for modern AI systems'
  },
  {
    date: '2012',
    title: 'Launch of First AI Consulting Practice',
    description: 'Established dedicated AI consulting services focusing on enterprise implementation'
  },
  {
    date: '2015',
    title: 'Major Infrastructure Project Success',
    description: 'Led AI integration for $2B infrastructure project, reducing costs by 35%'
  },
  {
    date: '2019',
    title: 'AI Innovation Lab Foundation',
    description: 'Created research lab focused on developing practical AI solutions for business challenges'
  },
  {
    date: '2023',
    title: 'GoGetAI Launch',
    description: 'Founded GoGetAI to democratize access to enterprise-grade AI solutions'
  }
];

export default function JourneyTimeline() {
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold text-white mb-12">Our Journey</h2>
      <div className="relative">
        {milestones.map((milestone, index) => (
          <TimelineItem
            key={index}
            date={milestone.date}
            title={milestone.title}
            description={milestone.description}
            isFirst={index === 0}
            isLast={index === milestones.length - 1}
          />
        ))}
      </div>
    </div>
  );
}