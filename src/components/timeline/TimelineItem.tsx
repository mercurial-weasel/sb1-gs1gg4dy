import React from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  isLast?: boolean;
  isFirst?: boolean;
}

export default function TimelineItem({ date, title, description, isLast = false, isFirst = false }: TimelineItemProps) {
  return (
    <div className="flex gap-8 items-start">
      {/* Date */}
      <div className="w-24 flex-shrink-0 text-right">
        <span className="text-[#249826] font-medium">{date}</span>
      </div>

      {/* Line and Dot */}
      <div className="relative flex flex-col items-center flex-shrink-0">
        {/* Line above dot (except for first item) */}
        {!isFirst && (
          <div className="w-0.5 bg-[#249826] absolute -top-12 h-12" />
        )}
        
        {/* Dot */}
        <div className="w-3 h-3 rounded-full bg-[#249826] z-10 relative" />
        
        {/* Line below dot (except for last item) */}
        {!isLast && (
          <div className="w-0.5 bg-[#249826] absolute top-3 h-[calc(100%+3rem)]" />
        )}
      </div>

      {/* Content */}
      <div className={isLast ? 'pb-0' : 'pb-12'}>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}