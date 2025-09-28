'use client';

import React, { useState } from 'react';
import { ArrowRight, Users, Calendar, Award, Globe, Shield, Zap } from 'lucide-react';

function InteractiveHighlights() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const highlights = [
    {
      id: 1,
      icon: Users,
      title: '500+ Attendees',
      description: 'Join cybersecurity professionals from around the world',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      id: 2,
      icon: Calendar,
      title: '3 Days Event',
      description: 'Feb 19-21, 2026 packed with learning and networking',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      id: 3,
      icon: Award,
      title: 'Industry Leaders',
      description: 'Learn from the best minds in cybersecurity',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600'
    },
    {
      id: 4,
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with professionals worldwide',
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600'
    },
    {
      id: 5,
      icon: Shield,
      title: 'Cutting-edge Topics',
      description: 'Latest trends in cybersecurity and defense',
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600'
    },
    {
      id: 6,
      icon: Zap,
      title: 'Hands-on Labs',
      description: 'Interactive workshops and practical training',
      color: 'bg-yellow-500',
      hoverColor: 'hover:bg-yellow-600'
    }
  ];

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-8 text-gray-800">CONFERENCE HIGHLIGHTS</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-lg">
        {highlights.map(highlight => {
          const IconComponent = highlight.icon;
          const isHovered = hoveredCard === highlight.id;

          return (
            <div
              key={highlight.id}
              className={`
                relative p-6 rounded-xl shadow-lg cursor-pointer
                transform transition-all duration-300 ease-in-out
                ${isHovered ? 'scale-110 -translate-y-2 z-10' : 'scale-100'}
                ${highlight.color} text-white
                ${highlight.hoverColor}
                hover:shadow-2xl
              `}
              onMouseEnter={() => setHoveredCard(highlight.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`
                  p-3 rounded-full bg-white bg-opacity-20 mb-3
                  transform transition-transform duration-300
                  ${isHovered ? 'rotate-12 scale-110' : 'rotate-0 scale-100'}
                `}
                >
                  <IconComponent
                    className={`
                      w-6 h-6 transition-all duration-300
                      ${isHovered ? 'text-white drop-shadow-lg' : 'text-white'}
                    `}
                  />
                </div>
                <h4
                  className={`
                  text-sm font-bold mb-2 transition-all duration-300
                  ${isHovered ? 'text-lg' : 'text-sm'}
                `}
                >
                  {highlight.title}
                </h4>
                <p
                  className={`
                  text-xs opacity-90 transition-all duration-300 overflow-hidden
                  ${isHovered ? 'opacity-100 max-h-20' : 'max-h-0 opacity-0'}
                `}
                >
                  {highlight.description}
                </p>
              </div>

              <div
                className={`
                absolute inset-0 rounded-xl bg-gradient-to-br from-white to-transparent opacity-0
                transition-opacity duration-300
                ${isHovered ? 'opacity-10' : 'opacity-0'}
              `}
              />

              <div
                className={`
                absolute -inset-1 rounded-xl bg-gradient-to-r from-pink-400 to-yellow-400 opacity-0
                transition-opacity duration-300 -z-10 blur
                ${isHovered ? 'opacity-30' : 'opacity-0'}
              `}
              />
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <div
          className={`
          inline-flex items-center gap-2 px-6 py-3 rounded-full
          bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30
          transform transition-all duration-300 cursor-pointer
          hover:bg-opacity-30 hover:scale-105 hover:shadow-lg
          text-gray-800 font-semibold
        `}
        >
          <Globe className="w-5 h-5 animate-pulse" />
          Experience the Future of Cybersecurity
        </div>
      </div>
    </div>
  );
}

export default function AboutTheConference() {
  return (
    <section
      className="relative py-24 text-gray-800 min-h-screen flex items-center"
      style={{ backgroundColor: '#f7c474' }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">About The Conference</h2>
          <p class="text-lg text-gray-700 mb-4">
            To stay ahead in the rapidly changing world of security, continuous learning and meaningful connections are
            key. As cyber threats grow in complexity, sharpening our expertise becomes essential. Conferences like
            <span class="font-semibold"> Seasides Conference</span> provide the perfect platform to keep pace with this
            evolution.
          </p>

          <p class="text-lg text-gray-700 mb-8">
            Join us on <span class="font-semibold text-orange-600">February 19–21, 2026</span> at the
            <span class="font-semibold"> Seasides Conference </span> where you’ll gain valuable knowledge from industry
            leaders. With free, high-quality training sessions, we’re building a community-driven experience that
            reflects the spirit of global events such as <span class="font-semibold"> Blackhat</span> and
            <span class="font-semibold"> Defcon</span> ensuring equal learning opportunities for all.
          </p>

          <a href="about" className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:underline">
            Learn More About Us <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right Section - Interactive Highlights */}
        {/*
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">HIGHLIGHTS</h3>
          <div className="w-full aspect-video bg-gray-300 rounded-2xl shadow-md flex items-center justify-center text-gray-600 text-lg font-medium">
            Video Placeholder
          </div>
        </div>
        */}
        <InteractiveHighlights />
      </div>
    </section>
  );
}
