import React from 'react';
import { Infinity } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative w-8 h-8">
        <Infinity 
          className="h-8 w-8 text-[#249826] transform -rotate-90" 
          strokeWidth={2.5}
        />
      </div>
      <span className="text-xl font-bold tracking-tight text-white">
        GoGet<span className="text-[#249826]">AI</span>
      </span>
    </div>
  );
}