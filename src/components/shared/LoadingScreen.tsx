import React from 'react';
import GridBackground from '../effects/GridBackground';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <GridBackground />
      <div className="relative flex flex-col items-center">
        {/* Container to properly position and size both rings and logo */}
        <div className="relative w-24 h-24">
          {/* Pulse ring animation */}
          <div className="absolute inset-0 animate-ping rounded-full bg-[#249826]/20" />
          
          {/* Rotating ring animation */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#249826] animate-spin" />
          
          {/* Inner circle with logo - centered within the rings */}
          <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#249826]/10 flex items-center justify-center">
            <div className="w-8 h-8 text-[#249826]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pulse"
              >
                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                <path d="M12 8v-2" />
                <path d="M12 18v-2" />
                <path d="M16 12h2" />
                <path d="M6 12h2" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="mt-8 text-[#249826] font-medium animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
}