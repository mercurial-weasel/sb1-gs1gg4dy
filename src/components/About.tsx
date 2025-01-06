import React from 'react';
import GridBackground from './effects/GridBackground';
import JourneyTimeline from './timeline/JourneyTimeline';
import AboutHighlights from './about/AboutHighlights';
import AboutApproaches from './about/AboutApproaches';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden">
      <GridBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">
            Transforming Businesses in the AI Age
          </h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              At GoGetAI, we specialize in empowering businesses to thrive in the AI age. Led by a seasoned digital transformation strategist with over two decades of experience across industries and continents, we bring a unique blend of technical expertise, strategic vision, and practical implementation to every project.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our founder has successfully spearheaded digital initiatives for billion-dollar infrastructure projects, pioneered innovative AI solutions, and built teams that deliver lasting impact. With a background that includes leading roles in cutting-edge AI development, data integration, and digital consulting, their journey has been shaped by a relentless drive to solve complex challenges with smart, scalable solutions.
            </p>
          </div>
        </div>

        <AboutHighlights />
        <JourneyTimeline />
        <AboutApproaches />

        <div className="mt-12">
          <p className="text-gray-300">
            At the heart of our mission is a passion for innovation and a commitment to delivering measurable results. We believe AI isn't just about technology—it's about empowering people, transforming businesses, and creating a future where your goals are within reach.
          </p>
        </div>
      </div>
    </section>
  );
}