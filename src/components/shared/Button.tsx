import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, variant = 'primary', onClick, className = '' }: ButtonProps) {
  const baseStyles = "px-6 py-2 rounded-full transition-colors shadow-sm hover:shadow-md font-medium";
  const variantStyles = {
    primary: "bg-[#249826] hover:bg-[#1d7a1e] text-white",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}