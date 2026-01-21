'use client';
import LoadingScreen from '@/components/layout/LoadingScreen';
import Countdown from '@/components/shared/Countdown';
import { useTheme } from '@/contexts/ThemeContext';
import { EVENT_DATE_LONG } from '@/lib/eventConfig';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const RevolutionHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const heroRef = useRef(null);
  const { isDark } = useTheme();

  const slides = [
    {
      id: 1,
      type: 'main',
      title: 'Seasides',
      subtitle: EVENT_DATE_LONG,
      location: 'International Centre Goa',
      description: 'Join us for insightful talks and hands-on training — completely free.',
      animation: 'fadeInUp',
      particles: true,
      showCountdown: true
    }
  ];

  useEffect(() => {
    if (!isAutoPlay || isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlay, isHovered, slides.length]);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    setIsLoading(false);

    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom < 0) {
          setIsAutoPlay(false);
        } else {
          setIsAutoPlay(true);
        }
      }
    };

    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  const throttle = (func, delay) => {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
      const currentTime = Date.now();
      if (currentTime - lastExecTime > delay) {
        func.apply(this, args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(
          () => {
            func.apply(this, args);
            lastExecTime = Date.now();
          },
          delay - (currentTime - lastExecTime)
        );
      }
    };
  };

  const handleLogoLoad = () => {
    setIsLogoLoaded(true);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <section
          ref={heroRef}
          className="relative w-full overflow-hidden z-10 py-24"
          style={{ height: '600px' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Dynamic Beach Background */}
          <div className="absolute inset-0 transition-all duration-700 transform-gpu">
            {/* Sky Layer with Stars */}
            <div
              className={`absolute inset-0 transition-colors duration-700 ${
                isDark
                  ? 'bg-gradient-to-b from-[#0a0d1a] via-[#1a1f35] to-[#2d3a59]'
                  : 'bg-gradient-to-b from-[#87CEEB] via-[#ADD8E6] to-[#4682B4]'
              }`}
            >
              {/* Stars - Only visible in dark mode and if motion is enabled */}
              {isDark && !reducedMotion && (
                <>
                  <div className="stars-small"></div>
                  <div className="stars-medium"></div>
                  <div className="stars-large"></div>
                </>
              )}
            </div>

            {/* Sun/Moon */}
            <div
              className={`absolute transition-all duration-1000
          ${
            isDark
              ? 'top-12 right-12 w-24 h-24 bg-gray-200 opacity-90 before:content-[""] before:absolute before:top-1 before:left-1 before:w-5 before:h-5 before:rounded-full before:bg-gray-800 before:opacity-10'
              : 'top-8 right-16 w-32 h-32 bg-[#FFD700] opacity-75'
          } rounded-full blur-sm`}
            />

            {/* Birds - Only visible in light mode and if motion is enabled */}
            {!isDark && !reducedMotion && (
              <div className="absolute top-1/4 left-0 right-0">
                <div className="bird-container bird-1">
                  <div className="bird"></div>
                </div>
                <div className="bird-container bird-2">
                  <div className="bird"></div>
                </div>
                <div className="bird-container bird-3">
                  <div className="bird"></div>
                </div>
              </div>
            )}

            {/* Ocean Waves */}
            <div className="ocean absolute bottom-[33%] left-0 right-0 h-1/3 overflow-hidden">
              <div className={`water ${isDark ? 'water-dark' : 'water-light'} ${reducedMotion ? 'no-animation' : ''}`}>
                <svg
                  className={`water-wave wave1 ${reducedMotion ? 'opacity-50' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                  preserveAspectRatio="none"
                  style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%' }}
                >
                  <path
                    className="wave-path"
                    d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,138.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    fill={isDark ? '#1e40af' : '#3b82f6'}
                    opacity="0.8"
                  ></path>
                </svg>
                {!reducedMotion && (
                  <>
                    <svg
                      className="water-wave wave2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                      preserveAspectRatio="none"
                      style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%' }}
                    >
                      <path
                        className="wave-path"
                        d="M0,128L48,122.7C96,117,192,107,288,101.3C384,96,480,96,576,112C672,128,768,160,864,160C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        fill={isDark ? '#2563eb' : '#60a5fa'}
                        opacity="0.6"
                      ></path>
                    </svg>
                    <svg
                      className="water-wave wave3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                      preserveAspectRatio="none"
                      style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%' }}
                    >
                      <path
                        className="wave-path"
                        d="M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,90.7C672,75,768,85,864,96C960,107,1056,117,1152,122.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        fill={isDark ? '#3b82f6' : '#93c5fd'}
                        opacity="0.4"
                      ></path>
                    </svg>
                  </>
                )}
              </div>
            </div>

            {/* Sand Layer with SVG Curves */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3">
              {/* Palm Trees */}
              <div className="absolute bottom-16 right-0 z-10">
                <Image
                  src="/palm-trees.png"
                  alt="Palm Trees"
                  width={400}
                  height={800}
                  className="object-contain"
                  priority={true}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
                {/* Sand Dunes Background */}
                <path
                  className={`transition-colors duration-700 ${isDark ? 'fill-[#2c1810]' : 'fill-[#f4a261]'}`}
                  d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,144C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
                {/* Sand Dunes Overlay */}
                <path
                  className={`transition-colors duration-700 ${isDark ? 'fill-[#3d261c]' : 'fill-[#e76f51]'}`}
                  d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,266.7C960,267,1056,245,1152,234.7C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
                {/* Small Sand Ripples */}
                <path
                  className={`transition-colors duration-700 opacity-30 ${isDark ? 'fill-[#4d3629]' : 'fill-[#f4d03f]'}`}
                  d="M0,256L48,261.3C96,267,192,277,288,277.3C384,277,480,267,576,245.3C672,224,768,192,864,192C960,192,1056,224,1152,234.7C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
              </svg>
            </div>
          </div>

          {/* Main content */}
          <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
            {/* Logo */}
            <div className="w-full max-w-3xl mx-auto mb-6">
              <div className="relative w-full flex justify-center items-center">
                <Image
                  src="/dark-logo.png"
                  alt="Seasides"
                  width={500}
                  height={200}
                  priority={true}
                  quality={90}
                  className="object-contain drop-shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 500px"
                />
              </div>
            </div>

            {/* Content that appears after logo loads */}
            <div
              className={`transform transition-all duration-700 translate-y-0 opacity-100 text-center space-y-4 max-w-4xl mx-auto will-change-transform px-4 py-3 rounded-xl ${isDark ? '' : 'bg-white/40 backdrop-blur-sm'}`}
            >
              <h2
                className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}
                style={{ textShadow: isDark ? '0 2px 4px rgba(0,0,0,0.5)' : '0 1px 2px rgba(255,255,255,0.8)' }}
              >
                {slides[currentSlide].subtitle}
              </h2>
              <h3
                className={`text-base md:text-lg font-semibold transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}
                style={{ textShadow: isDark ? '0 2px 4px rgba(0,0,0,0.5)' : '0 1px 2px rgba(255,255,255,0.8)' }}
              >
                {slides[currentSlide].location}
              </h3>

              <p
                className={`text-base md:text-lg font-medium transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}
                style={{ textShadow: isDark ? '0 2px 4px rgba(0,0,0,0.5)' : '0 1px 2px rgba(255,255,255,0.8)' }}
              >
                {slides[currentSlide].description}
              </p>

              {slides[currentSlide].showCountdown && (
                <div className="mt-6">
                  <Countdown />
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default RevolutionHero;
