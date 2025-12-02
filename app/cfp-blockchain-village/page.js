'use client';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const CFPBlockchainVillage = () => {
  const { isDark } = useTheme();

  const focusAreas = [
    'Smart Contract Vulnerabilities',
    'Blockchain Protocol Security',
    'DeFi & NFT Attack Surfaces',
    'Cryptography Misuse and Key Management',
    'Wallet Forensics',
    'Threat Modeling for Decentralized Systems',
    'Bridges, and Cross-chain Exploits',
    'AI in Blockchain Security'
  ];

  const submissionRequirements = [
    { title: 'Abstract', description: '200–300 words describing your presentation' },
    { title: 'Bio + Previous Talks', description: 'Your background and any prior speaking experience' },
    { title: 'Demo / PoC', description: 'Optional but highly encouraged' },
    { title: 'Category', description: 'Talk / Workshop / Panel' }
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600 via-purple-500 to-indigo-900 animate-[gradientMove_15s_ease-in-out_infinite] w-full" />
        <div className="absolute inset-0 bg-black/20 w-full" />

        <div className="relative z-10 max-w-4xl px-6">
          <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-bold mb-6">
            Blockchain Security Village
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl shadow-black/50">
            Call for Speakers 2026
          </h1>
          <p className="text-lg md:text-xl text-white font-medium drop-shadow-lg shadow-black/50 backdrop-blur-sm bg-white/10 rounded-lg p-4">
            Share your expertise in blockchain security at Seasides 2026! We&apos;re looking for researchers,
            practitioners, and enthusiasts to present cutting-edge research on decentralized system security.
          </p>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section
        className={`${isDark ? 'bg-slate-900 text-white' : 'bg-white text-charcoal-gray'} py-16 w-full overflow-x-hidden`}
      >
        <div className="max-w-5xl mx-auto px-6 w-full">
          <h2 className="text-3xl font-bold text-center text-purple-500 mb-6">Focus Areas</h2>
          <p className="text-center mb-8 text-lg md:text-xl">
            We&apos;re seeking submissions on the following blockchain security topics:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-4 rounded-xl ${
                  isDark ? 'bg-slate-800 border border-slate-700' : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <svg
                  className="w-6 h-6 text-purple-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Requirements Section */}
      <section className={`py-16 px-6 w-full ${isDark ? 'bg-slate-800' : 'bg-gray-50'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">Submission Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {submissionRequirements.map((req, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl ${isDark ? 'bg-slate-900 border border-slate-700' : 'bg-white border border-gray-200'}`}
              >
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{req.title}</h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{req.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSew3EE_vuUKWnsyuPF22r35F_SAdAKxd4WgHTdNq4SR9hk0OQ/viewform?usp=dialog"
              target="_blank"
              className="px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-500 text-white shadow-lg hover:scale-105 transition-transform"
            >
              Submit Your Proposal
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto w-full">
        <div
          className={`p-8 rounded-3xl shadow-lg ${
            isDark ? 'bg-slate-700/80 border border-slate-600' : 'bg-white/90 border border-gray-200'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-500">Questions?</h2>
          <div className="space-y-4 text-center text-base md:text-lg">
            <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              Have questions about the Blockchain Security Village or your submission?
            </p>
            <p>
              Reach us at{' '}
              <a href="mailto:admin@seasides.net" className="text-purple-500 underline font-medium">
                admin@seasides.net
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background: linear-gradient(45deg, #9333ea, #a855f7, #6366f1, #4f46e5);
            background-position: 0% 50%;
          }
          50% {
            background: linear-gradient(45deg, #6366f1, #4f46e5, #9333ea, #a855f7);
            background-position: 100% 50%;
          }
          100% {
            background: linear-gradient(45deg, #9333ea, #a855f7, #6366f1, #4f46e5);
            background-position: 0% 50%;
          }
        }
        .animate-[gradientMove_15s_ease-in-out_infinite] {
          background-size: 200% 200%;
          width: 100%;
          max-width: 100vw;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default CFPBlockchainVillage;
