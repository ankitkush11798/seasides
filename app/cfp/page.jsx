'use client';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const CFP = () => {
  const { isDark } = useTheme();

  const topics = [
    'Cloud Security',
    'Network and Router Hacking',
    'WLAN and Bluetooth Security',
    'Lockpicking & Physical Security',
    'IoT Security',
    'Web Application Security & Hacking',
    'Malware Analysis & Reverse Engineering',
    'Bug Bounty Hunting',
    'Web Penetration Testing Techniques',
    'Mobile Application Security - Threats and Exploits',
    'Threat Hunting & Threat Intelligence',
    'DevSecOps',
    'Blockchain & Smart Contract Security',
    'Open-Source Security and Hacking Tools',
    'New Vulnerabilities and Exploits/0-days'
  ];

  return (
    <>
      <Navbar />

      {/* Hero / Title Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-400 via-orange-300 to-orange-200 animate-[gradientMove_15s_ease-in-out_infinite]" />

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Call for Papers - Seasides 2026</h1>
          <p className="text-lg md:text-xl text-white/90">
            We’re excited to announce the Call for Papers (CFP) for Seasides 2025! Submit your 1-2 day training sessions
            proposal and inspire others. Seasides is completely free for all attendees.
          </p>
        </div>
      </section>

      {/* Topics Section */}
      <section className={`${isDark ? 'bg-slate-900 text-white' : 'bg-white text-charcoal-gray'} py-16`}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">Expected Topics</h2>
          <p className="text-center mb-8 text-lg md:text-xl">
            We are expecting conference and workshop submissions on the following topics, but not limited to:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside max-w-3xl mx-auto text-base md:text-lg">
            {topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>

          {/* Decoy CTA */}
          <div className="mt-10 flex justify-center">
            <button className="px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-orange-400 via-orange-500 to-cyan-400 text-white shadow-lg hover:scale-105 transition-transform">
              Submit Your Proposal
            </button>
          </div>
        </div>
      </section>

      {/* Submission Guidelines Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div
          className={`p-8 rounded-3xl shadow-lg ${
            isDark ? 'bg-slate-700/80 border border-slate-600' : 'bg-white/90 border border-white/30'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-cyan-400">Submission Guidelines</h2>
          <div className="space-y-4 text-center text-base md:text-lg">
            <p>Attendees will not be provided with the internet. They’ll be utilizing their very own hotspots.</p>
            <p>
              Still not sure or have more questions? You can reach us at{' '}
              <a href="mailto:ADMIN@SEASIDES.NET" className="text-orange-500 underline">
                ADMIN@SEASIDES.NET
              </a>
            </p>
            <p>
              <strong>Note:</strong> We will make every effort to offer remuneration. However, as the conference is
              funded through sponsorships, the amount will be determined based on the support we receive from our
              sponsors.
            </p>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-[gradientMove_15s_ease-in-out_infinite] {
          background-size: 200% 200%;
        }
      `}</style>
    </>
  );
};

export default CFP;
