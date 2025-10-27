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
              className={`absolute top-full left-0 mt-3 w-64 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 z-50 backdrop-blur-sm
                ${isSponsorsOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible pointer-events-none'}
                ${isDark ? 'bg-slate-800/95 border-2 border-slate-600/50' : 'bg-white/95 border-2 border-orange-100'}
              `}
            >
              <div
                className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider ${
                  isDark ? 'text-gray-400 bg-slate-900/50' : 'text-gray-500 bg-orange-50/50'
                }`}
              >
                Sponsorship
              </div>
              <Link
                href="/call-for-sponsors"
                className={`group flex items-center gap-3 px-4 py-3.5 transition-all duration-200 border-l-4 ${
                  isDark
                    ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800 border-transparent hover:border-orange-500'
                    : 'text-gray-800 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 border-transparent hover:border-orange-500'
                }`}
              >
                <div
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    isDark ? 'bg-slate-700 group-hover:bg-orange-500/20' : 'bg-orange-100 group-hover:bg-orange-200'
                  }`}
                >
                  <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">Call for Sponsors</div>
                  <div className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Partner with us</div>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 ${
                    isDark ? 'text-gray-400' : 'text-gray-400'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Villages Dropdown */}
          <div
            className="relative dropdown-container"
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
              className={`absolute top-full right-0 mt-2 w-72 rounded-xl shadow-2xl overflow-hidden transition-all duration-200 pointer-events-auto
                ${isVillagesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible pointer-events-none'}
                ${isDark ? 'bg-charcoal-gray/95 backdrop-blur-sm border border-gray-700' : 'bg-white/95 backdrop-blur-sm border border-gray-200'}
              `}
            >
              <div className={`px-4 py-2 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                >
                  Security Villages
                </p>
              </div>
              <a
                href="https://hw101.me"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-start gap-3 px-4 py-3 transition-all duration-300 border-l-2 border-transparent hover:border-green-500 ${
                  isDark
                    ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800'
                    : 'text-gray-800 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50'
                }`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Hardware Village</p>
                    <svg
                      className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Hands-on hardware hacking
                  </p>
                </div>
              </a>
              <a
                href="https://village.scagoat.dev"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-start gap-3 px-4 py-3 transition-all duration-300 border-l-2 border-transparent hover:border-cyan-500 ${
                  isDark
                    ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800'
                    : 'text-gray-800 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-sky-50'
                }`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">SAST SCA Village</p>
                    <svg
                      className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Static code analysis & SCA
                  </p>
                </div>
              </a>
              <a
                href="https://containersecurityvillage.kubernetesvillage.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-start gap-3 px-4 py-3 transition-all duration-300 border-l-2 border-transparent hover:border-indigo-500 ${
                  isDark
                    ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800'
                    : 'text-gray-800 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-violet-50'
                }`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Container Security</p>
                    <svg
                      className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Kubernetes & container security
                  </p>
                </div>
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
              className={`absolute top-full right-0 mt-2 w-64 rounded-xl shadow-2xl overflow-hidden transition-all duration-200 pointer-events-auto
                ${isAboutOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible pointer-events-none'}
                ${isDark ? 'bg-charcoal-gray/95 backdrop-blur-sm border border-gray-700' : 'bg-white/95 backdrop-blur-sm border border-gray-200'}
              `}
            >
              <div className={`px-4 py-2 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                >
                  Information
                </p>
              </div>
              <Link
                href="/about"
                className={`flex items-start gap-3 px-4 py-3 transition-all duration-300 border-l-2 border-transparent hover:border-blue-500 ${
                  isDark
                    ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800'
                    : 'text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50'
                }`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">About Us</p>
                    <svg
                      className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Learn about the event
                  </p>
                </div>
              </Link>
              <Link
                href="/faq"
                className={`flex items-start gap-3 px-4 py-3 transition-all duration-300 border-l-2 border-transparent hover:border-purple-500 ${
                  isDark
                    ? 'text-gray-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800'
                    : 'text-gray-800 hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50'
                }`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">FAQ</p>
                    <svg
                      className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Common questions</p>
                </div>
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
