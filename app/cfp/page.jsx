'use client';
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const CFP = () => {
  const { isDark } = useTheme();
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = index => {
    setOpenSection(openSection === index ? null : index);
  };

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
      <main
        className={`transition-colors duration-300 ${
          isDark ? 'bg-charcoal-gray text-white' : 'bg-light-gray text-charcoal-gray'
        }`}
      >
        {/* Hero Section */}
        <section className="py-20 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Call for Papers - Seasides 2025</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
            We’re excited to announce the Call for Papers (CFP) for Seasides 2025! Submit your 1-2 day training sessions
            proposal and inspire others. Seasides is completely free for all attendees.
          </p>
        </section>

        {/* Topics Section */}
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Expected Topics</h2>
          <p className="mb-6 text-center text-base md:text-lg">
            We are expecting conference and workshop submissions on the following topics, but not limited to:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside">
            {topics.map((topic, index) => (
              <li key={index} className="text-base md:text-lg">
                {topic}
              </li>
            ))}
          </ul>
        </section>

        {/* Guidelines Section */}
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Submission Guidelines</h2>
          <div className="space-y-4">
            <p>Attendees will not be provided with the internet. They’ll be utilizing their very own hotspots.</p>
            <p>
              Still not sure or have more questions? You can reach us at{' '}
              <a href="mailto:ADMIN@SEASIDES.NET" className="text-sunset-orange underline">
                ADMIN@SEASIDES.NET
              </a>
            </p>
            <p>
              <strong>Note:</strong> We will make every effort to offer remuneration. However, as the conference is
              funded through sponsorships, the amount will be determined based on the support we receive from our
              sponsors.
            </p>
          </div>
        </section>

        {/* Optional Collapsible Section Example */}
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Additional Information</h2>
          <div className="space-y-4">
            {[...topics].map((topic, index) => (
              <div
                key={index}
                className="border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full flex justify-between items-center p-4 text-left focus:outline-none bg-white dark:bg-slate-800"
                >
                  <span className="font-semibold">{topic}</span>
                  <span
                    className={`w-8 h-8 flex items-center justify-center bg-sunset-orange rounded-full text-white font-bold text-lg transform transition-transform duration-300 ${
                      openSection === index ? 'rotate-180' : ''
                    }`}
                  >
                    {openSection === index ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={`transition-max-height duration-500 overflow-hidden ${
                    openSection === index ? 'max-h-96' : 'max-h-0'
                  } p-4`}
                >
                  <p className="text-base md:text-lg">
                    Here you can add additional details about <strong>{topic}</strong> submissions.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CFP;
