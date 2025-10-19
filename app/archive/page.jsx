'use client';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { gsap } from 'gsap';

const Archive = () => {
  const { isDark } = useTheme();
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const autoRotateRef = useRef(null);

  // Archive items - can be customized with your conference data
  const archiveItems = [
    {
      id: 1,
      year: '2019',
      title: 'Seasides 2019',
      description: 'The inaugural conference that started it all',
      image: '/gallery/gallery-2.jpeg',
      stats: { attendees: '500+', talks: '30+', workshops: '10+' },
      theme: 'from-blue-600 to-cyan-600'
    },
    {
      id: 2,
      year: '2020',
      title: 'Seasides 2020',
      description: 'Virtual edition connecting the community',
      image: '/gallery/gallery-3.jpeg',
      stats: { attendees: '1000+', talks: '40+', workshops: '15+' },
      theme: 'from-purple-600 to-pink-600'
    },
    {
      id: 3,
      year: '2021',
      title: 'Seasides 2021',
      description: 'Hybrid format bringing everyone together',
      image: '/gallery/gallery-4.jpeg',
      stats: { attendees: '1500+', talks: '50+', workshops: '20+' },
      theme: 'from-green-600 to-teal-600'
    },
    {
      id: 4,
      year: '2022',
      title: 'Seasides 2022',
      description: 'Return to Goa with record attendance',
      image: '/gallery/gallery-5.jpeg',
      stats: { attendees: '2000+', talks: '60+', workshops: '25+' },
      theme: 'from-orange-600 to-red-600'
    },
    {
      id: 5,
      year: '2023',
      title: 'Seasides 2023',
      description: 'Expanding horizons and community',
      image: '/gallery/gallery-6.jpeg',
      stats: { attendees: '2500+', talks: '70+', workshops: '30+' },
      theme: 'from-indigo-600 to-blue-600'
    },
    {
      id: 6,
      year: '2024',
      title: 'Seasides 2024',
      description: 'Our biggest conference yet',
      image: '/gallery/gallery-7.jpeg',
      stats: { attendees: '3000+', talks: '80+', workshops: '35+' },
      theme: 'from-cyan-600 to-blue-600'
    }
  ];

  const totalItems = archiveItems.length;

  // Initialize 3D carousel with larger radius
  useEffect(() => {
    if (!carouselRef.current) return;

    const items = carouselRef.current.querySelectorAll('.carousel-item');
    const radius = 750; // Increased for bigger spread
    const angleStep = (2 * Math.PI) / totalItems;

    items.forEach((item, index) => {
      const angle = angleStep * index;
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;
      const rotateY = -(angle * 180) / Math.PI;

      // Calculate distance-based effects
      const distance = Math.abs(z);
      const opacity = z > 0 ? 1 : 0.3; // Front items are visible, back items very faded
      const scale = z > 0 ? 1 : 0.8;

      gsap.set(item, {
        x: x,
        z: z,
        rotateY: rotateY,
        transformOrigin: 'center center',
        opacity: opacity,
        scale: scale
      });
    });
  }, [totalItems]);

  // Smooth auto rotation
  useEffect(() => {
    if (isAutoRotating) {
      autoRotateRef.current = setInterval(() => {
        rotateCarousel(1);
      }, 5000); // Slightly longer interval for better viewing
    }

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    };
  }, [isAutoRotating, activeIndex]);

  const rotateCarousel = direction => {
    setIsAutoRotating(false);
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
    }

    const newIndex = (activeIndex + direction + totalItems) % totalItems;
    setActiveIndex(newIndex);

    const items = carouselRef.current?.querySelectorAll('.carousel-item');
    if (!items) return;

    const angleStep = (2 * Math.PI) / totalItems;
    const rotationAngle = -(angleStep * direction * 180) / Math.PI;
    const radius = 750;

    items.forEach((item, index) => {
      const currentRotation = gsap.getProperty(item, 'rotateY');
      const newRotation = currentRotation + rotationAngle;

      // Calculate new position for depth-based effects
      const angle = (newRotation * Math.PI) / 180;
      const z = Math.cos(-angle) * radius;
      const newOpacity = z > 0 ? 1 : 0.3;
      const newScale = z > 0 ? 1 : 0.8;

      gsap.to(item, {
        rotateY: `+=${rotationAngle}`,
        opacity: newOpacity,
        scale: newScale,
        duration: 1.2,
        ease: 'power3.inOut',
        onUpdate: function () {
          // Dynamic z-index based on rotation
          const currentZ = Math.cos(-(gsap.getProperty(item, 'rotateY') * Math.PI) / 180) * radius;
          item.style.zIndex = Math.round(currentZ + 1000);
        }
      });
    });

    // Resume auto-rotation after 10 seconds
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  // Enhanced mouse move interaction with card bending
  const handleMouseMove = e => {
    if (!carouselRef.current) return;

    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const xPercent = (clientX / innerWidth - 0.5) * 2;
    const yPercent = (clientY / innerHeight - 0.5) * 2;

    setMousePosition({ x: xPercent, y: yPercent });

    // Rotate entire carousel with smooth easing
    gsap.to(carouselRef.current, {
      rotateX: -yPercent * 12,
      rotateY: xPercent * 12,
      duration: 1.2,
      ease: 'power1.out',
      overwrite: 'auto'
    });

    // Apply smooth bending effect to active card
    const items = carouselRef.current.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
      const card = item.querySelector('.card-inner');
      if (!card) return;

      const isActive = index === activeIndex;
      if (isActive) {
        gsap.to(card, {
          rotateX: -yPercent * 6,
          rotateY: xPercent * 6,
          duration: 0.5,
          ease: 'power1.out',
          overwrite: 'auto'
        });
      }
    });
  };

  return (
    <main className="relative">
      <Navbar />
      <section
        className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
          isDark
            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900'
            : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'
        }`}
        onMouseMove={handleMouseMove}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* Header */}
        <div className="container mx-auto px-6 pt-20 pb-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span
                className={`font-medium text-lg ${
                  isDark
                    ? 'text-cyan-400'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'
                }`}
              >
                Conference Archive
              </span>
            </div>
            <h1
              className={`text-5xl md:text-6xl font-bold mb-6 ${
                isDark ? 'text-white' : 'bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent'
              }`}
            >
              Journey Through Time
            </h1>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Explore the history of Seasides conferences through our interactive timeline
            </p>
          </div>
        </div>

        {/* 3D Carousel Container - Much Larger */}
        <div className="relative h-[900px] flex items-center justify-center perspective-container mb-12">
          <div ref={carouselRef} className="carousel-3d">
            {archiveItems.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div key={item.id} className={`carousel-item ${isActive ? 'active' : ''}`}>
                  <div className={`card-inner ${isActive ? 'card-active' : ''}`}>
                    <div
                      className={`relative w-[550px] h-[700px] rounded-3xl overflow-hidden transform-gpu transition-all duration-700 ${
                        isActive ? 'shadow-mega' : 'shadow-2xl'
                      }`}
                    >
                      {/* Glass morphism background */}
                      <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-black/40 via-black/20 to-black/40" />

                      {/* Image Background with Next.js Image optimization */}
                      <div className="absolute inset-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className={`object-cover transition-all duration-1000 ease-out ${
                            isActive ? 'scale-100 brightness-100' : 'scale-110 brightness-50 grayscale'
                          }`}
                          sizes="550px"
                          priority={index === activeIndex}
                        />
                      </div>

                      {/* Gradient Overlay with theme color */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90`}
                      />

                      {/* Glowing border effect */}
                      <div
                        className={`absolute inset-0 rounded-3xl transition-all duration-1000 ease-out ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                          boxShadow: isActive
                            ? `0 0 60px rgba(0, 200, 255, 0.4), inset 0 0 60px rgba(0, 200, 255, 0.1)`
                            : 'none',
                          transition: 'opacity 1s ease-out, box-shadow 1s ease-out'
                        }}
                      />

                      {/* Reflection effect */}
                      {isActive && (
                        <div
                          className="absolute inset-0 pointer-events-none transition-all duration-300"
                          style={{
                            background: `radial-gradient(circle at ${50 + mousePosition.x * 30}% ${50 + mousePosition.y * 30}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
                          }}
                        />
                      )}

                      {/* Content */}
                      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-10">
                        {/* Year with massive gradient */}
                        <div
                          className={`text-8xl md:text-9xl font-black mb-4 leading-none bg-gradient-to-r ${item.theme} bg-clip-text text-transparent drop-shadow-2xl`}
                          style={{
                            textShadow: isActive ? '0 0 30px rgba(0,200,255,0.5)' : 'none'
                          }}
                        >
                          {item.year}
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">{item.title}</h3>

                        {/* Description */}
                        <p className="text-lg text-gray-200 mb-6 drop-shadow-md max-w-md">{item.description}</p>

                        {/* Stats with glass morphism */}
                        <div className="grid grid-cols-3 gap-6">
                          {Object.entries(item.stats).map(([key, value]) => (
                            <div
                              key={key}
                              className="text-center backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20"
                            >
                              <div
                                className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${item.theme} bg-clip-text text-transparent`}
                              >
                                {value}
                              </div>
                              <div className="text-xs uppercase tracking-wider text-gray-300 mt-1">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom glow */}
                      {isActive && (
                        <div
                          className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${item.theme} opacity-30 blur-2xl transition-opacity duration-1000 ease-out`}
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-8 mt-12 relative z-10">
          <button
            onClick={() => rotateCarousel(-1)}
            className={`group p-5 rounded-full transition-all duration-300 hover:scale-110 ${
              isDark
                ? 'bg-gradient-to-br from-slate-800 to-slate-900 hover:from-cyan-500 hover:to-blue-500 border-2 border-cyan-500/50 hover:border-cyan-400 shadow-xl hover:shadow-cyan-500/50'
                : 'bg-gradient-to-br from-white to-gray-100 hover:from-blue-500 hover:to-indigo-500 border-2 border-blue-500/70 hover:border-blue-400 shadow-2xl hover:shadow-blue-500/50'
            } backdrop-blur-md`}
            aria-label="Previous"
          >
            <svg
              className={`w-7 h-7 transition-colors duration-300 ${
                isDark ? 'text-cyan-400 group-hover:text-white' : 'text-blue-600 group-hover:text-white'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-3">
            {archiveItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  const diff = index - activeIndex;
                  rotateCarousel(diff);
                }}
                className={`h-3 rounded-full transition-all duration-500 ${
                  index === activeIndex
                    ? isDark
                      ? 'w-12 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50'
                      : 'w-12 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/50'
                    : isDark
                      ? 'w-3 bg-slate-600 hover:bg-slate-500 hover:w-6'
                      : 'w-3 bg-slate-400 hover:bg-slate-600 hover:w-6'
                }`}
                aria-label={`Go to ${item.year}`}
              />
            ))}
          </div>

          <button
            onClick={() => rotateCarousel(1)}
            className={`group p-5 rounded-full transition-all duration-300 hover:scale-110 ${
              isDark
                ? 'bg-gradient-to-br from-slate-800 to-slate-900 hover:from-cyan-500 hover:to-blue-500 border-2 border-cyan-500/50 hover:border-cyan-400 shadow-xl hover:shadow-cyan-500/50'
                : 'bg-gradient-to-br from-white to-gray-100 hover:from-blue-500 hover:to-indigo-500 border-2 border-blue-500/70 hover:border-blue-400 shadow-2xl hover:shadow-blue-500/50'
            } backdrop-blur-md`}
            aria-label="Next"
          >
            <svg
              className={`w-7 h-7 transition-colors duration-300 ${
                isDark ? 'text-cyan-400 group-hover:text-white' : 'text-blue-600 group-hover:text-white'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Auto-rotate indicator */}
        <div className="text-center mt-8 relative z-10">
          <button
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className={`text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 ${
              isDark
                ? isAutoRotating
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-800/80 text-slate-300 border border-slate-600/50 shadow-lg'
                : isAutoRotating
                  ? 'bg-blue-500/20 text-blue-700 border border-blue-500/40 shadow-lg shadow-blue-500/20'
                  : 'bg-white/90 text-slate-700 border border-slate-400/50 shadow-xl'
            } backdrop-blur-md`}
          >
            {isAutoRotating ? '⏸ Pause Auto-Rotate' : '▶ Resume Auto-Rotate'}
          </button>
        </div>

        <style jsx>{`
          .perspective-container {
            perspective: 2500px;
            perspective-origin: 50% 50%;
          }

          .carousel-3d {
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transition: transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .carousel-item {
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -275px;
            margin-top: -350px;
            transform-style: preserve-3d;
            will-change: transform, opacity, scale;
            backface-visibility: hidden;
          }

          .carousel-item.active {
            z-index: 100;
          }

          .card-inner {
            transform-style: preserve-3d;
            transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            will-change: transform;
          }

          .card-active .card-inner {
            transform: scale(1.1);
          }

          /* Mega shadow for active card */
          .shadow-mega {
            box-shadow:
              0 50px 100px -20px rgba(0, 0, 0, 0.8),
              0 30px 60px -30px rgba(0, 200, 255, 0.3),
              0 -10px 40px -10px rgba(0, 200, 255, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
            transition: box-shadow 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }

          /* Enhanced floating animation */
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotateX(0deg) scale(1.1);
            }
            33% {
              transform: translateY(-8px) rotateX(1deg) scale(1.1);
            }
            66% {
              transform: translateY(-5px) rotateX(-1deg) scale(1.1);
            }
          }

          .card-active {
            animation: float 8s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
          }

          /* Smooth fade transitions */
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          /* Glass morphism enhancement */
          @supports (backdrop-filter: blur(20px)) {
            .backdrop-blur-xl {
              backdrop-filter: blur(20px) saturate(180%);
            }
            .backdrop-blur-md {
              backdrop-filter: blur(12px) saturate(160%);
            }
          }

          /* Responsive adjustments */
          @media (max-width: 1024px) {
            .carousel-item {
              margin-left: -225px;
              margin-top: -300px;
            }
            .carousel-item > div > div {
              width: 450px !important;
              height: 600px !important;
            }
          }

          @media (max-width: 768px) {
            .perspective-container {
              height: 700px !important;
              perspective: 1500px;
            }

            .carousel-item {
              margin-left: -175px;
              margin-top: -275px;
            }

            .carousel-item > div > div {
              width: 350px !important;
              height: 550px !important;
            }
          }

          @media (max-width: 640px) {
            .perspective-container {
              height: 600px !important;
            }

            .carousel-item {
              margin-left: -140px;
              margin-top: -225px;
            }

            .carousel-item > div > div {
              width: 280px !important;
              height: 450px !important;
            }

            .card-active .card-inner {
              transform: scale(1.05);
            }
          }

          /* Smooth GPU acceleration */
          .transform-gpu {
            transform: translateZ(0);
            backface-visibility: hidden;
            -webkit-font-smoothing: antialiased;
          }
        `}</style>
      </section>
      <Footer />
    </main>
  );
};

export default Archive;
