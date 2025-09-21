'use client';
import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { isDark } = useTheme();
  
  // Check if device is mobile/low-power
  const isMobile = typeof window !== 'undefined' && (
    window.innerWidth <= 768 || 
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  );

  useEffect(() => {
    // Shorter loading time on mobile to reduce impact
    const timeout = isMobile ? 2000 : 4000;
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, timeout);
    return () => clearTimeout(timer);
  }, [isMobile]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-all duration-1000 ${
        isDark
          ? 'bg-gradient-to-b from-[#1a0f0a] via-[#2d1b14] to-[#4a3428]'
          : 'bg-gradient-to-b from-[#ff7f50] via-[#ff8f65] to-[#ffa85c]'
      }`}
    >
      {/* Sunset Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Upper sunset glow */}
        <div className={`absolute top-0 left-0 w-full h-1/2 ${
          isDark
            ? 'bg-gradient-to-b from-orange-900/20 via-red-800/15 to-transparent'
            : 'bg-gradient-to-b from-yellow-200/30 via-orange-300/20 to-transparent'
        }`} />

        {/* Lower warmth */}
        <div className={`absolute bottom-0 left-0 w-full h-1/3 ${
          isDark
            ? 'bg-gradient-to-t from-amber-900/30 via-orange-800/15 to-transparent'
            : 'bg-gradient-to-t from-orange-200/40 via-amber-200/20 to-transparent'
        }`} />

        {/* Soft center glow around sun area */}
        <div
          className="absolute top-0 right-0 w-2/5 h-2/5 rounded-full blur-3xl"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, rgba(245,158,11,0.05) 50%, transparent 100%)'
              : 'radial-gradient(circle, rgba(253,224,71,0.2) 0%, rgba(251,146,60,0.1) 50%, transparent 100%)'
          }}
        />
      </div>

      {/* Sunset Sun */}
      <div
        className={`absolute w-40 h-40 rounded-full transition-all duration-1000 ${
          isDark
            ? 'top-16 right-16 bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 shadow-[0_0_150px_rgba(255,140,0,0.8)]'
            : 'top-12 right-12 bg-gradient-to-br from-yellow-200 via-orange-400 to-red-500 shadow-[0_0_200px_rgba(255,165,0,1)]'
        }`}
        style={{ animation: 'sunsetGlow 6s ease-in-out infinite' }}
      >
        {/* Sun rays */}
        <div className="absolute inset-0 rounded-full">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 bg-gradient-to-t ${
                isDark
                  ? 'from-orange-400 to-transparent'
                  : 'from-yellow-300 to-transparent'
              }`}
              style={{
                height: '60px',
                left: '50%',
                top: '-30px',
                transformOrigin: '50% 60px',
                transform: `rotate(${i * 45}deg)`,
                animation: `sunRays ${4 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>

        {/* Inner sun core */}
        <div className={`absolute inset-4 rounded-full ${
          isDark
            ? 'bg-gradient-to-br from-yellow-300 to-orange-400'
            : 'bg-gradient-to-br from-white to-yellow-200'
        } animate-pulse`} />
      </div>

      {/* Floating clouds - simplified on mobile */}
      {!isMobile && (
        <div className="absolute inset-0">
          <div
            className={`absolute w-24 h-12 rounded-full opacity-60 ${
              isDark ? 'bg-orange-600/40' : 'bg-orange-200/70'
            }`}
            style={{ 
              top: '15%', 
              left: '10%',
              animation: 'floatSlow 20s linear infinite'
            }}
          />
          <div
            className={`absolute w-32 h-16 rounded-full opacity-40 ${
              isDark ? 'bg-orange-500/30' : 'bg-orange-100/80'
            }`}
            style={{ 
              top: '25%', 
              left: '70%',
              animation: 'floatSlow 25s linear infinite reverse'
            }}
          />
          <div
            className={`absolute w-20 h-10 rounded-full opacity-50 ${
              isDark ? 'bg-orange-600/35' : 'bg-orange-200/75'
            }`}
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

      {/* Center logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          <Image
            src={isDark ? "/light-logo.png" : "/dark-logo.png"}
            alt="Seasides"
            width={isMobile ? 280 : 400}
            height={isMobile ? 112 : 160}
            priority
            sizes={isMobile ? "280px" : "400px"}
            quality={isMobile ? 60 : 75}
            className="object-contain drop-shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            style={{
              animation: isMobile ? 'none' : 'gentleBob 4s ease-in-out infinite',
              maxWidth: '90vw',
              height: 'auto'
            }}
          />
          
          {/* Logo reflection in water - desktop only */}
          {!isMobile && (
            <div className="absolute top-full left-0 w-full h-full opacity-20 overflow-hidden">
              <Image
                src={isDark ? "/light-logo.png" : "/dark-logo.png"}
                alt=""
                width={400}
                height={160}
                className="object-contain scale-y-[-1] blur-sm"
                style={{
                  animation: 'waveDistort 3s ease-in-out infinite',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 80%)'
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Waves container - simplified on mobile */}
      <div className="absolute bottom-0 left-0 w-full h-2/5">
        {isMobile ? (
          <>
            {/* Mobile: Only 2 simple waves for performance */}
            <Wave
              speed={20}
              amplitude={10}
              opacity={isDark ? 0.4 : 0.3}
              color={isDark ? '#ea580c' : '#f97316'}
              height="60%"
              waveType="medium"
              delay={-2}
            />
            <Wave
              speed={15}
              amplitude={14}
              opacity={isDark ? 0.6 : 0.5}
              color={isDark ? '#fed7aa' : '#fff7ed'}
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
              color={isDark ? '#c2410c' : '#ea580c'}
              height="45%"
              waveType="deep"
              delay={-4}
            />
            <Wave
              speed={20}
              amplitude={10}
              opacity={isDark ? 0.4 : 0.3}
              color={isDark ? '#ea580c' : '#f97316'}
              height="58%"
              waveType="medium"
              delay={-2.5}
            />
            <Wave
              speed={15}
              amplitude={14}
              opacity={isDark ? 0.6 : 0.5}
              color={isDark ? '#fb923c' : '#fb923c'}
              height="68%"
              waveType="surface"
              delay={-1}
            />
            <Wave
              speed={12}
              amplitude={18}
              opacity={0.75}
              color={isDark ? '#fed7aa' : '#fff7ed'}
              height="75%"
              waveType="foam"
              delay={0}
            />
            <Wave
              speed={8}
              amplitude={22}
              opacity={0.4}
              color={isDark ? '#ffedd5' : '#fefcfb'}
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
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        @keyframes waveChop {
          0%, 100% {
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
          0%, 100% {
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
        
        /* Original animations */
        @keyframes gentleBob {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) rotate(1deg);
          }
          50% {
            transform: translateY(-4px) rotate(0deg);
          }
          75% {
            transform: translateY(-8px) rotate(-1deg);
          }
        }
        @keyframes sunsetGlow {
          0%, 100% {
            transform: scale(1) translateY(0);
            opacity: 0.9;
            filter: brightness(1) saturate(1);
          }
          33% {
            transform: scale(1.05) translateY(-2px);
            opacity: 1;
            filter: brightness(1.2) saturate(1.3);
          }
          66% {
            transform: scale(1.02) translateY(1px);
            opacity: 0.95;
            filter: brightness(1.1) saturate(1.1);
          }
        }

        @keyframes sunRays {
          0%, 100% {
            opacity: 0.6;
            transform: scaleY(1);
          }
          50% {
            opacity: 1;
            transform: scaleY(1.3);
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
          0%, 100% {
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
const Wave = ({
  speed,
  opacity = 0.6,
  color,
  height = '60%',
  invert = false,
  delay = 0,
  waveType = 'medium',
}) => {
  // Different wave paths for different types of waves
  const wavePaths = {
    deep: 'M0 180 C 240,120 480,240 720,180 C 960,120 1200,240 1440,180 C 1680,120 1920,240 1920,180 V 360 H 0 V 180 Z',
    medium: 'M0 150 C 160,80 320,220 480,150 C 640,80 800,220 960,150 C 1120,80 1280,220 1440,150 C 1600,80 1760,220 1920,150 V 360 H 0 V 150 Z',
    surface: 'M0 120 C 120,60 240,180 360,120 C 480,60 600,180 720,120 C 840,60 960,180 1080,120 C 1200,60 1320,180 1440,120 C 1560,60 1680,180 1800,120 C 1860,60 1920,180 1920,120 V 360 H 0 V 120 Z',
    foam: 'M0 100 C 80,40 160,160 240,100 C 320,40 400,160 480,100 C 560,40 640,160 720,100 C 800,40 880,160 960,100 C 1040,40 1120,160 1200,100 C 1280,40 1360,160 1440,100 C 1520,40 1600,160 1680,100 C 1760,40 1840,160 1920,100 V 360 H 0 V 100 Z',
    splash: 'M0 80 C 60,20 120,140 180,80 C 240,20 300,140 360,80 C 420,20 480,140 540,80 C 600,20 660,140 720,80 C 780,20 840,140 900,80 C 960,20 1020,140 1080,80 C 1140,20 1200,140 1260,80 C 1320,20 1380,140 1440,80 C 1500,20 1560,140 1620,80 C 1680,20 1740,140 1800,80 C 1860,20 1920,140 1920,80 V 360 H 0 V 80 Z'
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
    <div
      className="absolute bottom-0 left-0 w-full overflow-hidden"
      style={{ height }}
    >
      <div
        className="absolute bottom-0 left-0 h-full"
        style={{
          width: '200%',
          animation: getAnimationStyle(),
          transform: 'translateZ(0)',
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
