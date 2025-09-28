'use client';
import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const { isDark } = useTheme();

  // Check if device is mobile/low-power
  const isMobile =
    typeof window !== 'undefined' &&
    (window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

  useEffect(() => {
    // Prevent scrolling when loader is visible
    if (isVisible) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
    }

    // Progress animation
    const progressInterval = setInterval(
      () => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 1;
        });
      },
      isMobile ? 20 : 35
    );

    // Start exit animation before hiding
    const exitTimeout = setTimeout(
      () => {
        setIsAnimatingOut(true);
      },
      isMobile ? 1800 : 3500
    );

    // Hide loader after exit animation
    const hideTimeout = setTimeout(
      () => {
        setIsVisible(false);
      },
      isMobile ? 2200 : 4000
    );

    return () => {
      clearTimeout(exitTimeout);
      clearTimeout(hideTimeout);
      clearInterval(progressInterval);
      // Clean up styles when component unmounts
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMobile]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-1000 ${
        isAnimatingOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      } ${
        isDark
          ? 'bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#415a77]'
          : 'bg-gradient-to-br from-[#87ceeb] via-[#b0e0e6] to-[#f0f8ff]'
      }`}
      style={{
        overflow: 'hidden',
        overscrollBehavior: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        backdropFilter: 'blur(0px)',
        WebkitBackdropFilter: 'blur(0px)'
      }}
    >
      {/* Enhanced Sun/Moon with rays */}
      <div className="absolute top-16 right-16 md:top-20 md:right-20">
        <div
          className={`w-32 h-32 rounded-full blur-sm transition-all duration-1000 ${
            isDark
              ? 'bg-gradient-to-br from-yellow-200 to-orange-300 shadow-[0_0_100px_rgba(255,215,0,0.6)]'
              : 'bg-gradient-to-br from-yellow-300 to-orange-400 shadow-[0_0_120px_rgba(255,165,0,0.8)]'
          }`}
          style={{ animation: 'sunPulse 4s ease-in-out infinite' }}
        />
        {/* Sun rays */}
        {!isMobile && (
          <div className="absolute inset-0 animate-spin" style={{ animation: 'sunRotate 20s linear infinite' }}>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-8 ${isDark ? 'bg-yellow-200' : 'bg-yellow-300'} opacity-40 rounded-full`}
                style={{
                  top: '-20px',
                  left: '50%',
                  transformOrigin: '50% 84px',
                  transform: `translateX(-50%) rotate(${i * 45}deg)`
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Floating clouds - simplified on mobile */}
      {!isMobile && (
        <div className="absolute inset-0">
          <div
            className={`absolute w-24 h-12 rounded-full opacity-60 ${isDark ? 'bg-gray-600/40' : 'bg-white/70'}`}
            style={{
              top: '15%',
              left: '10%',
              animation: 'floatSlow 20s linear infinite'
            }}
          />
          <div
            className={`absolute w-32 h-16 rounded-full opacity-40 ${isDark ? 'bg-gray-500/30' : 'bg-white/80'}`}
            style={{
              top: '25%',
              left: '70%',
              animation: 'floatSlow 25s linear infinite reverse'
            }}
          />
          <div
            className={`absolute w-20 h-10 rounded-full opacity-50 ${isDark ? 'bg-gray-600/35' : 'bg-white/75'}`}
            style={{
              top: '35%',
              left: '40%',
              animation: 'floatSlow 30s linear infinite'
            }}
          />
        </div>
      )}

      {/* Seagulls - desktop only */}
      {!isMobile && (
        <div className="absolute inset-0">
          <div
            className="absolute text-white text-xl opacity-70"
            style={{
              top: '20%',
              left: '30%',
              animation: 'seagullFly 15s linear infinite',
              transform: 'rotate(-10deg)'
            }}
          >
            ⌒
          </div>
          <div
            className="absolute text-white text-lg opacity-60"
            style={{
              top: '30%',
              left: '60%',
              animation: 'seagullFly 18s linear infinite reverse',
              animationDelay: '-5s'
            }}
          >
            ⌒
          </div>
        </div>
      )}

      {/* Center logo with enhanced animations */}
      <div className="flex flex-col items-center justify-center pointer-events-none z-10">
        <div className="relative mb-8">
          <Image
            src={isDark ? '/light-logo.png' : '/dark-logo.png'}
            alt="Seasides"
            width={isMobile ? 280 : 400}
            height={isMobile ? 112 : 160}
            priority
            sizes={isMobile ? '280px' : '400px'}
            quality={isMobile ? 60 : 75}
            className="object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-500"
            style={{
              animation: isMobile ? 'logoFadeIn 1s ease-out' : 'gentleBob 4s ease-in-out infinite',
              maxWidth: '90vw',
              height: 'auto',
              filter: isAnimatingOut ? 'blur(4px)' : 'blur(0px)'
            }}
          />

          {/* Glow effect behind logo */}
          <div
            className={`absolute inset-0 rounded-lg blur-xl opacity-30 ${isDark ? 'bg-blue-400' : 'bg-orange-400'}`}
            style={{ animation: 'logoGlow 3s ease-in-out infinite alternate' }}
          />
        </div>

        {/* Enhanced loading section */}
        <div className="flex flex-col items-center space-y-4">
          {/* Progress bar */}
          <div className="w-64 h-1.5 bg-gray-300/30 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className={`h-full bg-gradient-to-r transition-all duration-300 ${
                isDark ? 'from-blue-400 via-cyan-400 to-blue-500' : 'from-orange-400 via-yellow-400 to-orange-500'
              }`}
              style={{
                width: `${progress}%`,
                boxShadow: isDark ? '0 0 10px rgba(59, 130, 246, 0.5)' : '0 0 10px rgba(251, 146, 60, 0.5)'
              }}
            />
          </div>

          {/* Loading text with typewriter effect */}
          <div className="flex items-center space-x-3">
            <div
              className={`w-6 h-6 border-2 border-t-transparent rounded-full animate-spin ${
                isDark ? 'border-blue-400' : 'border-orange-500'
              }`}
            />
            <span
              className={`text-lg font-medium tracking-wide ${isDark ? 'text-gray-200' : 'text-gray-700'}`}
              style={{ animation: 'textPulse 2s ease-in-out infinite' }}
            >
              Loading Seasides...
            </span>
          </div>

          {/* Progress percentage */}
          <div className={`text-sm font-mono ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{progress}%</div>
        </div>
      </div>

      {/* Waves container - background only */}
      <div className="absolute bottom-0 left-0 w-full h-2/5 -z-10">
        {isMobile ? (
          <>
            {/* Mobile: Only 2 simple waves for performance */}
            <Wave
              speed={20}
              amplitude={10}
              opacity={isDark ? 0.4 : 0.3}
              color={isDark ? '#2563eb' : '#0ea5e9'}
              height="60%"
              waveType="medium"
              delay={-2}
            />
            <Wave
              speed={15}
              amplitude={14}
              opacity={isDark ? 0.6 : 0.5}
              color={isDark ? '#dbeafe' : '#ffffff'}
              height="70%"
              waveType="foam"
              delay={0}
            />
          </>
        ) : (
          <>
            {/* Desktop: Full wave experience */}
            <Wave
              speed={28}
              amplitude={6}
              opacity={isDark ? 0.2 : 0.15}
              color={isDark ? '#1e40af' : '#0284c7'}
              height="45%"
              waveType="deep"
              delay={-4}
            />
            <Wave
              speed={20}
              amplitude={10}
              opacity={isDark ? 0.4 : 0.3}
              color={isDark ? '#2563eb' : '#0ea5e9'}
              height="58%"
              waveType="medium"
              delay={-2.5}
            />
            <Wave
              speed={15}
              amplitude={14}
              opacity={isDark ? 0.6 : 0.5}
              color={isDark ? '#3b82f6' : '#06b6d4'}
              height="68%"
              waveType="surface"
              delay={-1}
            />
            <Wave
              speed={12}
              amplitude={18}
              opacity={0.75}
              color={isDark ? '#dbeafe' : '#ffffff'}
              height="75%"
              waveType="foam"
              delay={0}
            />
            <Wave
              speed={8}
              amplitude={22}
              opacity={0.4}
              color={isDark ? '#f1f5f9' : '#f8fafc'}
              height="65%"
              waveType="splash"
              delay={-0.5}
            />
          </>
        )}
      </div>

      {/* Enhanced animations */}
      <style jsx>{`
        /* Base wave animations */
        @keyframes wave-deep {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes wave-medium {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes wave-surface {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes wave-foam {
          0% {
            transform: translateX(0) scaleY(1);
          }
          50% {
            transform: translateX(-25%) scaleY(1.05);
          }
          100% {
            transform: translateX(-50%) scaleY(1);
          }
        }
        @keyframes wave-splash {
          0% {
            transform: translateX(0) scaleY(1);
          }
          25% {
            transform: translateX(-12.5%) scaleY(0.95);
          }
          50% {
            transform: translateX(-25%) scaleY(1.1);
          }
          75% {
            transform: translateX(-37.5%) scaleY(0.98);
          }
          100% {
            transform: translateX(-50%) scaleY(1);
          }
        }

        /* Additional wave physics */
        @keyframes waveVertical {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        @keyframes waveChop {
          0%,
          100% {
            transform: scaleY(1);
          }
          25% {
            transform: scaleY(1.02);
          }
          50% {
            transform: scaleY(0.98);
          }
          75% {
            transform: scaleY(1.01);
          }
        }
        @keyframes waveSplash {
          0%,
          100% {
            transform: scaleY(1) scaleX(1);
          }
          20% {
            transform: scaleY(1.05) scaleX(0.98);
          }
          40% {
            transform: scaleY(0.95) scaleX(1.02);
          }
          60% {
            transform: scaleY(1.03) scaleX(0.99);
          }
          80% {
            transform: scaleY(0.98) scaleX(1.01);
          }
        }

        /* Foam and splash particle animations */
        @keyframes foamBubble {
          0% {
            transform: translateY(0) scale(0.8);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) scale(1.2);
            opacity: 0.9;
          }
          100% {
            transform: translateY(-20px) scale(0.6);
            opacity: 0.3;
          }
        }
        @keyframes splashDrop {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-15px) scale(1.5);
            opacity: 0.8;
          }
          70% {
            transform: translateY(-5px) scale(0.8);
            opacity: 0.6;
          }
          100% {
            transform: translateY(10px) scale(0.3);
            opacity: 0;
          }
        }

        /* Enhanced animations */
        @keyframes gentleBob {
          0%,
          100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-8px) rotate(1deg) scale(1.02);
          }
          50% {
            transform: translateY(-4px) rotate(0deg) scale(1.01);
          }
          75% {
            transform: translateY(-8px) rotate(-1deg) scale(1.02);
          }
        }
        @keyframes sunPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.15);
            opacity: 1;
          }
        }
        @keyframes sunRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes logoGlow {
          0% {
            opacity: 0.2;
            transform: scale(0.95);
          }
          100% {
            opacity: 0.4;
            transform: scale(1.05);
          }
        }
        @keyframes logoFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes textPulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        @keyframes floatSlow {
          0% {
            transform: translateX(-100px);
          }
          100% {
            transform: translateX(calc(100vw + 100px));
          }
        }
        @keyframes seagullFly {
          0% {
            transform: translateX(-50px) translateY(0px) rotate(-10deg);
          }
          25% {
            transform: translateX(25vw) translateY(-10px) rotate(-5deg);
          }
          50% {
            transform: translateX(50vw) translateY(-5px) rotate(-10deg);
          }
          75% {
            transform: translateX(75vw) translateY(-15px) rotate(-8deg);
          }
          100% {
            transform: translateX(calc(100vw + 50px)) translateY(-5px) rotate(-10deg);
          }
        }
        @keyframes waveDistort {
          0%,
          100% {
            transform: scaleY(-1) scaleX(1);
          }
          50% {
            transform: scaleY(-1) scaleX(1.02);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;

/* ---------- Wave component ---------- */
const Wave = ({ speed, opacity = 0.6, color, height = '60%', invert = false, delay = 0, waveType = 'medium' }) => {
  // Different wave paths for different types of waves
  const wavePaths = {
    deep: 'M0 180 C 240,120 480,240 720,180 C 960,120 1200,240 1440,180 C 1680,120 1920,240 1920,180 V 360 H 0 V 180 Z',
    medium:
      'M0 150 C 160,80 320,220 480,150 C 640,80 800,220 960,150 C 1120,80 1280,220 1440,150 C 1600,80 1760,220 1920,150 V 360 H 0 V 150 Z',
    surface:
      'M0 120 C 120,60 240,180 360,120 C 480,60 600,180 720,120 C 840,60 960,180 1080,120 C 1200,60 1320,180 1440,120 C 1560,60 1680,180 1800,120 C 1860,60 1920,180 1920,120 V 360 H 0 V 120 Z',
    foam: 'M0 100 C 80,40 160,160 240,100 C 320,40 400,160 480,100 C 560,40 640,160 720,100 C 800,40 880,160 960,100 C 1040,40 1120,160 1200,100 C 1280,40 1360,160 1440,100 C 1520,40 1600,160 1680,100 C 1760,40 1840,160 1920,100 V 360 H 0 V 100 Z',
    splash:
      'M0 80 C 60,20 120,140 180,80 C 240,20 300,140 360,80 C 420,20 480,140 540,80 C 600,20 660,140 720,80 C 780,20 840,140 900,80 C 960,20 1020,140 1080,80 C 1140,20 1200,140 1260,80 C 1320,20 1380,140 1440,80 C 1500,20 1560,140 1620,80 C 1680,20 1740,140 1800,80 C 1860,20 1920,140 1920,80 V 360 H 0 V 80 Z'
  };

  const path = wavePaths[waveType] || wavePaths.medium;

  // Different animation styles for different wave types
  const getAnimationStyle = () => {
    const baseAnimation = `wave-${waveType} ${speed}s linear ${delay}s infinite`;
    switch (waveType) {
      case 'deep':
        return `${baseAnimation}, waveVertical ${speed * 1.5}s ease-in-out infinite`;
      case 'foam':
        return `${baseAnimation}, waveChop ${speed * 0.7}s ease-in-out infinite`;
      case 'splash':
        return `${baseAnimation}, waveSplash ${speed * 0.5}s ease-in-out infinite`;
      default:
        return baseAnimation;
    }
  };

  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height }}>
      <div
        className="absolute bottom-0 left-0 h-full"
        style={{
          width: '200%',
          animation: getAnimationStyle(),
          transform: 'translateZ(0)'
        }}
      >
        <svg
          viewBox="0 0 1920 360"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 h-full"
          style={{ width: '100%' }}
        >
          <path
            d={path}
            fill={color}
            fillOpacity={opacity}
            transform={invert ? 'scale(1,-1) translate(0,-360)' : undefined}
          />
          {/* Add gradient for more realistic depth */}
          <defs>
            <linearGradient id={`waveGradient-${waveType}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity={opacity * 0.6} />
              <stop offset="100%" stopColor={color} stopOpacity={opacity} />
            </linearGradient>
          </defs>
        </svg>

        {/* second copy to tile seamlessly */}
        <svg
          viewBox="0 0 1920 360"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-[50%] h-full"
          style={{ width: '100%' }}
        >
          <path
            d={path}
            fill={color}
            fillOpacity={opacity}
            transform={invert ? 'scale(1,-1) translate(0,-360)' : undefined}
          />
        </svg>
      </div>

      {/* Add foam particles for foam waves */}
      {waveType === 'foam' && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-60"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + Math.sin(i) * 15}%`,
                animation: `foamBubble ${2 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Add splash effects for splash waves */}
      {waveType === 'splash' && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-40"
              style={{
                left: `${15 + i * 20}%`,
                top: `${10 + Math.cos(i) * 20}%`,
                animation: `splashDrop ${1.5 + i * 0.2}s ease-out infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
