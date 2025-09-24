'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors duration-300 ${
        isDark ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-800'
      }`}
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

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
                  style={{ width: '80px', height: '40px', maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">Home</Link>
            <Link href="/cfp">CFP</Link>

            {/* Sponsors Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsSponsorsDropdownOpen(true)}
              onMouseLeave={() => setIsSponsorsDropdownOpen(false)}
            >
              <span className="cursor-pointer flex items-center gap-1">
                Sponsors
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isSponsorsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-56 rounded-lg shadow-lg border transition-all duration-200 ${
                  isSponsorsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                } ${isDark ? 'bg-charcoal-gray border-gray-600' : 'bg-white border-gray-200'}`}
              >
                <div className="py-2">
                  <Link href="/sponsors">Our Sponsors</Link>
                  <Link href="/call-for-sponsors">Call for Sponsors</Link>
                </div>
              </div>
            </div>

            <Link href="/scholarship">Scholarship</Link>
            <Link href="/about">About</Link>
            <Link href="/gallery">Gallery</Link>

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
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-3">
            <Link href="/">Home</Link>
            <Link href="/cfp">CFP</Link>
            <Link href="/sponsors">Our Sponsors</Link>
            <Link href="/call-for-sponsors">Call for Sponsors</Link>
            <Link href="/scholarship">Scholarship</Link>
            <Link href="/about">About</Link>
            <Link href="/gallery">Gallery</Link>

            {/* Theme Toggle */}
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
