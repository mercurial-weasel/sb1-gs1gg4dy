import React from 'react';
import Button from '../shared/Button';
import { openCalendly } from '../../utils/calendly';

export default function AnimatedContactButton() {
  return (
    <div className="relative group">
      {/* Animated rings */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#249826]/20 to-[#1d7a1e]/20 blur-lg group-hover:blur-xl transition-all duration-300" />
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#249826]/10 to-[#1d7a1e]/10 blur-md opacity-75 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
      
      {/* Button */}
      <Button 
        onClick={openCalendly} 
        className="relative text-lg px-8 py-3 transform group-hover:scale-105 transition-transform duration-300"
      >
        Schedule a Call
      </Button>
    </div>
  );
}