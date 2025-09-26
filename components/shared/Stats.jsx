'use client';

import { Map, Users, CalendarDays, Globe } from 'lucide-react';
import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ConferenceGlance() {
  const sectionRef = useRef(null);
  const lettersRef = useRef([]);
  const subheadingRef = useRef(null);
  const statsRef = useRef(null);

  const headingText = 'Conference at a Glance';

  const stats = [
    { icon: Map, label: 'Workshops', value: '8+' },
    { icon: Globe, label: 'FREE Conference', value: '100%' },
    { icon: CalendarDays, label: 'Days of Learning', value: '3' },
    { icon: Users, label: 'Expected Attendees', value: '1000+' }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const subheading = subheadingRef.current;
      const statsGrid = statsRef.current;
      const letters = lettersRef.current.filter(Boolean);

      if (!section || !subheading || !statsGrid || letters.length === 0) return;

      gsap.set(letters, { opacity: 0, y: 40 });
      gsap.set(subheading, {
        opacity: 1,
        backgroundImage: 'linear-gradient(90deg, transparent 0%, transparent 50%, transparent 100%)',
        backgroundSize: '200% 100%',
        backgroundPosition: '100% 0',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent'
      });
      gsap.set(statsGrid, { opacity: 0, y: 80 });
      gsap.set(section, { backgroundColor: '#ffffff' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=300%',
          scrub: true,
          pin: true,
          pinSpacing: true
        }
      });

      letters.forEach((letter, i) => {
        tl.to(letter, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, i * 0.1);
      });

      tl.to(
        subheading,
        {
          backgroundImage: 'linear-gradient(90deg, black 0%, orange 50%, black 100%)',
          backgroundPosition: '0% 0',
          duration: 1.5,
          ease: 'power2.inOut'
        },
        '+=0.4'
      );

      tl.to(statsGrid, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '+=0.6');

      tl.to(
        section,
        {
          backgroundColor: '#ffd9b3',
          ease: 'none',
          duration: 1
        },
        '+=0.5'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
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
        className="text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium"
        style={{
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        }}
      >
        Join us for an unprecedented gathering of minds across coastal communities
      </div>

      <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={i}
              className="p-6 rounded-2xl shadow-lg bg-white flex flex-col items-center hover:scale-105 transition-transform"
            >
              <Icon className="w-12 h-12 text-orange-600 mb-3" />
              <p className="text-3xl font-bold text-gray-900">{s.value}</p>
              <p className="text-sm text-gray-700 mt-1">{s.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
