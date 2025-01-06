import React, { useState, useEffect } from 'react';
import Logo from './navigation/Logo';
import NavLinks from './navigation/NavLinks';
import MobileMenu from './navigation/MobileMenu';
import Button from './shared/Button';
import { openCalendly } from '../utils/calendly';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300" style={{ top: '16px' }}>
      <div className={`max-w-7xl mx-auto bg-gray-900/95 backdrop-blur-sm rounded-2xl transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg shadow-black/10' : ''
      }`}>
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <Logo />
            <NavLinks />
            <div className="flex items-center space-x-4">
              <Button 
                onClick={openCalendly}
                className="hidden md:inline-flex text-sm font-medium px-5 py-2.5"
              >
                Contact us
              </Button>
              <MobileMenu 
                isOpen={isMenuOpen} 
                onToggle={() => setIsMenuOpen(!isMenuOpen)} 
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}