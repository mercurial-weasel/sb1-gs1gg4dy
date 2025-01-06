import React from 'react';
import { LucideIcon } from 'lucide-react';
import Button from '../shared/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: LucideIcon;
  buttonText: string;
  onClick: () => void;
}

export default function ServiceCard({ 
  title, 
  description, 
  features, 
  price, 
  icon: Icon, 
  buttonText,
  onClick 
}: ServiceCardProps) {
  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-800 p-8 hover:shadow-xl transition-all hover:scale-[1.02] group">
      {/* Header section with icon and title */}
      <div className="flex items-start gap-4 mb-8">
        <div className="w-12 h-12 rounded-lg bg-[#249826]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#249826]/20 transition-colors">
          <Icon className="h-6 w-6 text-[#249826]" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>

      {/* Price section */}
      <div className="mb-6">
        <div className="text-3xl font-bold text-[#249826]">{price}</div>
      </div>

      {/* Separator line */}
      <div className="h-px bg-gray-800 mb-6" />

      {/* Features list */}
      <div className="mb-8">
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center text-gray-200">
              <span className="w-1.5 h-1.5 bg-[#249826] rounded-full mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="mt-auto">
        <Button onClick={onClick} className="w-full group-hover:shadow-lg transition-shadow">
          {buttonText}
        </Button>
      </div>
    </div>
  );
}