import React from 'react';
import GridBackground from './effects/GridBackground';
import AnimatedContactButton from './contact/AnimatedContactButton';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-gray-900 overflow-hidden">
      <GridBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in">Get in Touch</h2>
          <p className="mt-4 text-xl text-gray-300 animate-fade-in-delayed">
            Let's discuss how we can help transform your business
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <AnimatedContactButton />
        </div>
      </div>
    </section>
  );
}