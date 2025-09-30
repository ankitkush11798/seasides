'use client';

import Image from 'next/image';
import { Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';
import { SiX } from 'react-icons/si'; // New X logo
import { useTheme } from '@/contexts/ThemeContext';
import { EVENT_DATE_LONG } from '@/lib/eventConfig';

const Footer = () => {
  const { isDark } = useTheme();

  const socialIcons = [
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/seasides/' },
    { Icon: SiX, href: 'https://x.com/seasides_conf/' }, // X logo
    { Icon: Instagram, href: 'https://www.instagram.com/seasides_conf/' },
    { Icon: Facebook, href: 'https://www.facebook.com/seasidesconference' },
    { Icon: Youtube, href: 'https://www.youtube.com/@seasidesgoa' }
  ];

  return (
    <footer
      className={`w-full py-12 border-t-2 ${
        isDark ? 'bg-deep-ocean-depth text-white border-gray-700' : 'bg-white text-gray-900 border-gray-200'
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Top Row: Logo + Description | Event Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={isDark ? '/light-logo.png' : '/dark-logo.png'}
                alt="Seasides Logo"
                width={140}
                height={60}
                className="object-contain"
              />
            </div>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-base leading-relaxed`}>
              India's premier cybersecurity conference bringing together experts, enthusiasts, and innovators to explore
              the future of digital security in the beautiful coastal setting of Goa.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-2 text-left lg:ml-auto">
            <h4 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Event Details</h4>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{EVENT_DATE_LONG}</p>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>International Centre Goa</p>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Cybersecurity & Innovation</p>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Goa, India</p>
          </div>
        </div>

        {/* Divider inside footer */}
        <div className={`my-8 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`} />

        {/* Bottom Row: Copyright + Social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
            © 2026 Organized by <span className="font-semibold">Seasides Social Welfare Foundation</span>
          </p>

          <div className="flex items-center gap-4">
            {socialIcons.map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-transform duration-300 hover:scale-110 hover:text-orange-500 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
