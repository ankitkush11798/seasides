'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSponsorsOpen, setIsSponsorsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isVillagesOpen, setIsVillagesOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md border-b shadow-md transition-all duration-300 ${
        isDark ? 'bg-modern-sleek border-gray-600' : 'bg-white/95 border-deep-ocean-blue/20'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src={isDark ? '/light-logo.png' : '/dark-logo.png'}
            alt="Seasides Logo"
            width={80}
            height={40}
            className="object-contain cursor-pointer transition-transform duration-300 hover:scale-110"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <Link href="/" className="hover:text-orange-500 transition-colors">
            Home
          </Link>
          <Link href="/cfp" className="hover:text-orange-500 transition-colors">
            CFP
          </Link>
          {/* Sponsors Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsSponsorsOpen(true)}
            onMouseLeave={() => setIsSponsorsOpen(false)}
          >
            <button className="flex items-center gap-1 cursor-pointer focus:outline-none hover:text-orange-500 transition-colors">
              Sponsors
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isSponsorsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            <div
              className={`absolute top-full left-0 mt-2 w-56 border rounded-lg shadow-lg overflow-hidden transition-all duration-200
                ${isSponsorsOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}
                ${isDark ? 'bg-charcoal-gray border-gray-600' : 'bg-white border-gray-200'}
              `}
            >
              <Link
                href="/call-for-sponsors"
                className={`block px-4 py-2 transition-colors ${
                  isDark ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-800 hover:bg-orange-50'
                }`}
              >
                Call for Sponsors
              </Link>
            </div>
          </div>

          {/* Villages Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsVillagesOpen(true)}
            onMouseLeave={() => setIsVillagesOpen(false)}
          >
            <button className="flex items-center gap-1 cursor-pointer focus:outline-none hover:text-orange-500 transition-colors">
              Villages
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isVillagesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            <div
              className={`absolute top-full left-0 mt-2 w-56 border rounded-lg shadow-lg overflow-hidden transition-all duration-200
                ${isVillagesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}
                ${isDark ? 'bg-charcoal-gray border-gray-600' : 'bg-white border-gray-200'}
              `}
            >
              <a
                href="https://hw101.me"
                target="_blank"
                rel="noopener noreferrer"
                className={`block px-4 py-2 transition-colors ${
                  isDark ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-800 hover:bg-orange-50'
                }`}
              >
                Hardware Village
              </a>
              <a
                href="https://village.scagoat.dev"
                target="_blank"
                rel="noopener noreferrer"
                className={`block px-4 py-2 transition-colors ${
                  isDark ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-800 hover:bg-orange-50'
                }`}
              >
                SAST SCA Village
              </a>
            </div>
          </div>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
          >
            <button className="flex items-center gap-1 cursor-pointer focus:outline-none hover:text-orange-500 transition-colors">
              About
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            <div
              className={`absolute top-full left-0 mt-2 w-56 border rounded-lg shadow-lg overflow-hidden transition-all duration-200
                ${isAboutOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}
                ${isDark ? 'bg-charcoal-gray border-gray-600' : 'bg-white border-gray-200'}
              `}
            >
              <Link
                href="/about"
                className={`block px-4 py-2 transition-colors ${
                  isDark ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-800 hover:bg-orange-50'
                }`}
              >
                About Us
              </Link>
              <Link
                href="/faq"
                className={`block px-4 py-2 transition-colors ${
                  isDark ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-800 hover:bg-orange-50'
                }`}
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden focus:outline-none transition-colors duration-300 ${
            isDark ? 'text-white hover:text-sunny-yellow' : 'text-gray-800 hover:text-sunset-orange'
          }`}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden px-6 pb-4 flex flex-col space-y-2 font-medium ${
            isDark ? 'bg-modern-sleek' : 'bg-white/95'
          }`}
        >
          <Link
            href="/"
            className={`px-2 py-1 rounded hover:bg-orange-50 ${
              isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-800'
            }`}
          >
            Home
          </Link>
          <Link
            href="/cfp"
            className={`px-2 py-1 rounded hover:bg-orange-50 ${
              isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-800'
            }`}
          >
            CFP
          </Link>
          <div className={`pt-2 text-sm tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Villages</div>
          {/* Villages - external links */}
          <a
            href="https://hw101.me"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-1 rounded hover:bg-orange-50 ${
              isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-800'
            }`}
          >
            Hardware Village
          </a>
          <a
            href="https://village.scagoat.dev"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-1 rounded hover:bg-orange-50 ${
              isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-800'
            }`}
          >
            SAST SCA Village
          </a>
          <Link
            href="/call-for-sponsors"
            className={`px-2 py-1 rounded hover:bg-orange-50 ${
              isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-800'
            }`}
          >
            Call for Sponsors
          </Link>
          <Link
            href="/about"
            className={`px-2 py-1 rounded hover:bg-orange-50 ${
              isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-800'
            }`}
          >
            About Us
          </Link>
          <Link
            href="/faq"
            className={`px-2 py-1 rounded hover:bg-orange-50 ${
              isDark ? 'hover:bg-gray-700 text-gray-200' : 'text-gray-800'
            }`}
          >
            FAQ
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
