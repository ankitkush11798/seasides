'use client';
import { useTheme } from '@/contexts/ThemeContext';
import { EVENT_START_ISO } from '@/lib/eventConfig';
import { useEffect, useState } from 'react';

const Countdown = () => {
  const { isDark } = useTheme();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const targetDate = new Date(EVENT_START_ISO);

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 2000);

    return () => clearInterval(timer);
  }, [isClient]);

  if (!isClient) {
    return (
      <div className="flex justify-center items-center space-x-4 mb-8">
        <div className="animate-pulse bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
          <div className="h-8 w-16 bg-white/20 rounded mb-2"></div>
          <div className="h-4 w-12 bg-white/20 rounded"></div>
        </div>
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' }
  ];

  return (
    <div
      className="flex justify-center items-center flex-wrap gap-4 mb-8"
      style={{ animation: 'fadeInUp 1.2s ease-out 1.6s both' }}
    >
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className={`backdrop-blur-md rounded-lg p-4 border shadow-lg min-w-[80px] text-center ${
            isDark ? 'bg-white/20 border-white/30' : 'bg-white/70 border-white/50'
          }`}
          style={{
            animation: `fadeInUp 1.2s ease-out ${1.6 + index * 0.1}s both`,
            transition: 'all 0.3s ease-in-out'
          }}
        >
          <div
            className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-1 font-mono ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {unit.value.toString().padStart(2, '0')}
          </div>
          <div
            className={`text-sm md:text-base font-medium uppercase tracking-wider ${
              isDark ? 'text-white/80' : 'text-gray-800'
            }`}
          >
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
