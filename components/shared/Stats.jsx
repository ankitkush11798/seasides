'use client';

import { Map, Users, CalendarDays, Globe } from 'lucide-react';
import React, { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ConferenceGlance() {
  const sectionRef = useRef(null);
  const lettersRef = useRef([]);
  const subheadingRef = useRef(null);
  const statsRef = useRef(null);
  const [hoveredStat, setHoveredStat] = useState(null);

  const headingText = 'Conference at a Glance';

  const stats = [
    {
      icon: Map,
      label: 'Villages',
      value: '8+',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Globe,
      label: 'Trainings',
      value: '10+',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: CalendarDays,
      label: 'Days of Learning',
      value: '3',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Users,
      label: 'Expected Attendees',
      value: '1000+',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const subheading = subheadingRef.current;
      const statsGrid = statsRef.current;
      const letters = lettersRef.current.filter(Boolean);

      if (!section || !subheading || !statsGrid || letters.length === 0) return;

      gsap.set(letters, { opacity: 0, y: 40, force3D: true });
      gsap.set(subheading, {
        opacity: 1,
        backgroundImage: 'linear-gradient(90deg, transparent 0%, transparent 50%, transparent 100%)',
        backgroundSize: '200% 100%',
        backgroundPosition: '100% 0',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        force3D: true
      });
      gsap.set(statsGrid, { opacity: 0, y: 80, force3D: true });
      gsap.set(section, { backgroundColor: '#ffffff', force3D: true });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          scrub: 0.5,
          pin: false,
          invalidateOnRefresh: true,
          refreshPriority: -1
        }
      });

      tl.to(letters, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.02, force3D: true });

      tl.to(
        subheading,
        {
          backgroundImage: 'linear-gradient(90deg, black 0%, orange 50%, black 100%)',
          backgroundPosition: '0% 0',
          duration: 1,
          ease: 'power2.inOut',
          force3D: true
        },
        '+=0.2'
      );

      tl.to(statsGrid, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', force3D: true }, '+=0.3');

      tl.to(
        section,
        {
          backgroundColor: '#fafafa',
          ease: 'power2.inOut',
          duration: 0.8,
          force3D: true
        },
        '+=0.2'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-24 flex flex-col justify-center items-center text-center overflow-hidden z-30 bg-gradient-to-br from-white via-orange-50 to-white"
      style={{ willChange: 'transform' }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-200 rounded-full opacity-15 blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6">
          {headingText.split('').map((letter, index) => (
            <span
              key={index}
              ref={el => {
                lettersRef.current[index] = el;
              }}
              className="inline-block"
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>

        <div
          ref={subheadingRef}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-16 font-medium"
          style={{
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}
        >
          Where brilliant minds come together to shape the future of cybersecurity
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto will-change-transform px-4"
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            const isHovered = hoveredStat === i;
            return (
              <div
                key={i}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                onMouseEnter={() => setHoveredStat(i)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Animated border */}
                <div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    borderImage: `linear-gradient(135deg, ${s.color.replace('from-', '').replace('to-', ',')}) 1`
                  }}
                />

                <div className="relative z-10 flex flex-col items-center">
                  {/* Icon with background */}
                  <div
                    className={`p-4 rounded-2xl mb-4 transition-all duration-300 ${
                      isHovered ? s.bgColor : 'bg-gray-50'
                    } group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon
                      className={`w-10 h-10 transition-colors duration-300 ${
                        isHovered ? s.iconColor : 'text-gray-600'
                      }`}
                    />
                  </div>

                  {/* Value with animation */}
                  <p
                    className={`text-4xl md:text-5xl font-bold mb-2 transition-all duration-300 ${
                      isHovered ? 'text-gray-900 scale-110' : 'text-gray-800'
                    }`}
                  >
                    {s.value}
                  </p>

                  {/* Label */}
                  <p
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isHovered ? 'text-gray-700' : 'text-gray-600'
                    }`}
                  >
                    {s.label}
                  </p>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${s.color} blur-xl`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA or Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join us for an unforgettable experience filled with learning, networking, and innovation
          </p>
        </div>
      </div>
    </section>
  );
}
