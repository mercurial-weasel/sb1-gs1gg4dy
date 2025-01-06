import React from 'react';

const links = ['Home', 'Services', 'About', 'Blog', 'Contact'];

export default function NavLinks() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
        >
          {link}
        </a>
      ))}
    </div>
  );
}