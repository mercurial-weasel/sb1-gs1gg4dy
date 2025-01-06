import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function CTAButton({ children, onClick }: CTAButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[#249826] text-white px-8 py-4 rounded-lg text-lg font-medium 
        hover:bg-[#1d7a1e] transition-colors shadow-lg hover:shadow-xl"
    >
      {children}
    </button>
  );
}