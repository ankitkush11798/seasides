'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSponsorsDropdownOpen, setIsSponsorsDropdownOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <nav
      className={`backdrop-blur-md shadow-lg border-b sticky top-0 z-50 transition-all duration-300 ${
        isDark ? 'bg-modern-sleek border-gray-600' : 'bg-white/95 border-deep-ocean-blue/20'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer group">
                <Image
                  src={isDark ? '/light-logo.png' : '/dark-logo.png'}
                  alt="Seasides Logo"
                  width={80}
                  height={40}
                  priority
                  sizes="80px"
                  quality={60}
                  className="w-20 h-10 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    width: '80px',
                    height: '40px',
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span
                className={`font-medium cursor-pointer transition-all duration-300 hover:scale-105 relative group ${
                  isDark ? 'text-white hover:text-sunny-yellow' : 'text-gray-800 hover:text-sunset-orange'
                }`}
              >
                Home
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    isDark ? 'bg-sunny-yellow' : 'bg-sunset-orange'
                  }`}
                />
              </span>
            </Link>

            <Link href="/cfp">
              <span
                className={`font-medium cursor-pointer transition-all duration-300 hover:scale-105 relative group ${
                  isDark ? 'text-white hover:text-sunny-yellow' : 'text-gray-800 hover:text-sunset-orange'
                }`}
              >
                CFP
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    isDark ? 'bg-sunny-yellow' : 'bg-sunset-orange'
                  }`}
                />
              </span>
            </Link>

            {/* Sponsors Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsSponsorsDropdownOpen(true)}
              onMouseLeave={() => setIsSponsorsDropdownOpen(false)}
            >
              <span
                className={`font-medium cursor-pointer transition-all duration-300 hover:scale-105 relative group flex items-center gap-1 ${
                  isDark ? 'text-white hover:text-sunny-yellow' : 'text-gray-800 hover:text-sunset-orange'
                }`}
              >
                Sponsors
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isSponsorsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    isDark ? 'bg-sunny-yellow' : 'bg-sunset-orange'
                  }`}
                />
              </span>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-56 rounded-lg shadow-lg border transition-all duration-200 ${
                  isSponsorsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                } ${isDark ? 'bg-charcoal-gray border-gray-600' : 'bg-white border-gray-200'}`}
              >
                <div className="py-2">
                  <Link href="/sponsors">
                    <span
                      className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                        isDark
                          ? 'text-gray-300 hover:bg-deep-ocean/20 hover:text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      Our Sponsors
                    </span>
                  </Link>
                  <Link href="/call-for-sponsors">
                    <span
                      className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                        isDark
                          ? 'text-gray-300 hover:bg-deep-ocean/20 hover:text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      Call for Sponsors
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/scholarship">
              <span
                className={`font-medium cursor-pointer transition-all duration-300 hover:scale-105 relative group ${
                  isDark ? 'text-white hover:text-sunny-yellow' : 'text-gray-800 hover:text-sunset-orange'
                }`}
              >
                Scholarship
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    isDark ? 'bg-sunny-yellow' : 'bg-sunset-orange'
                  }`}
                />
              </span>
            </Link>

            <Link href="/about">
              <span
                className={`font-medium cursor-pointer transition-all duration-300 hover:scale-105 relative group ${
                  isDark ? 'text-white hover:text-sunny-yellow' : 'text-gray-800 hover:text-sunset-orange'
                }`}
              >
                About
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    isDark ? 'bg-sunny-yellow' : 'bg-sunset-orange'
                  }`}
                />
              </span>
            </Link>

            <Link href="/gallery">
              <span
                className={`font-medium cursor-pointer transition-all duration-300 hover:scale-105 relative group ${
                  isDark ? 'text-white hover:text-sunny-yellow' : 'text-gray-800 hover:text-sunset-orange'
                }`}
              >
                Gallery
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    isDark ? 'bg-sunny-yellow' : 'bg-sunset-orange'
                  }`}
                />
              </span>
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors duration-300 ${
                isDark ? 'text-white hover:text-sunny-yellow' : 'text-gray-800 hover:text-sunset-orange'
              }`}
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4 pb-4`}>
          <div className="flex flex-col space-y-3">
            <Link href="/">
              <span
                className={`block font-medium cursor-pointer transition-colors duration-300 py-2 ${
                  isDark ? 'text-white hover:text-sunny-yellow' : 'text-gray-800 hover:text-sunset-orange'
                }`}
              >
                Home
              </span>
            </Link>
            <Link href="/cfp">
              <span
                className={`block font-medium cursor-pointer transition-colors duration-300 py-2 ${
                  isDark ? 'text-white hover:text-sunny-yellow' : 'text-gray-800 hover:text-sunset-orange'
                }`}
              >
                CFP
              </span>
            </Link>
            <Link href="/sponsors">
              <span
                className={`block font-medium cursor-pointer transition-colors duration-300 py-2 ${
                  isDark ? 'text-white hover:text-sunny-yellow' : 'text-gray-800 hover:text-sunset-orange'
                }`}
              >
                Our Sponsors
              </span>
            </Link>
            <Link href="/call-for-sponsors">
              <span
                className={`block font-medium cursor-pointer transition-colors duration-300 py-2 ${
                  isDark ? 'text-white hover:text-sunny-yellow' : 'text-gray-800 hover:text-sunset-orange'
                }`}
              >
                Call for Sponsors
              </span>
            </Link>
            <Link href="/scholarship">
              <span
                className={`block font-medium cursor-pointer transition-colors duration-300 py-2 ${
                  isDark ? 'text-white hover:text-sunny-yellow' : 'text-gray-800 hover:text-sunset-orange'
                }`}
              >
                Scholarship
              </span>
            </Link>
            <Link href="/about">
              <span
                className={`block font-medium cursor-pointer transition-colors duration-300 py-2 ${
                  isDark ? 'text-white hover:text-sunny-yellow' : 'text-gray-800 hover:text-sunset-orange'
                }`}
              >
                About
              </span>
            </Link>
            <Link href="/gallery">
              <span
                className={`block font-medium cursor-pointer transition-colors duration-300 py-2 ${
                  isDark ? 'text-white hover:text-sunny-yellow' : 'text-gray-800 hover:text-sunset-orange'
                }`}
              >
                Gallery
              </span>
            </Link>
            <Link href="/#reach-us">
              <span
                className={`
                block font-medium cursor-pointer transition-colors duration-300 py-2
                ${isDark ? 'text-slate-300 hover:text-sunny-yellow' : 'text-gray-700 hover:text-sunset-orange'}
              `}
                onClick={() => setIsOpen(false)}
              >
                Venue
              </span>
            </Link>
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
