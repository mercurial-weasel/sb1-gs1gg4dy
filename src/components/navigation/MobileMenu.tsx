import React from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../shared/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <>
      <button
        className="md:hidden p-2 rounded-md text-gray-300 hover:text-white"
        onClick={onToggle}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 md:hidden">
          <div className="px-4 py-3 space-y-3">
            {['Home', 'Services', 'About', 'Blog', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            ))}
            <Button className="w-full text-sm">Contact us</Button>
          </div>
        </div>
      )}
    </>
  );
}