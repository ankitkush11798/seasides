'use client';
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const CfpPage = () => {
  const { isDark } = useTheme();
  const [expandedTopic, setExpandedTopic] = useState(null);

  const acceptedTopics = [
    {
      name: 'Cloud Security',
      icon: '☁️',
      description: 'AWS, Azure, GCP security, container security, serverless security'
    },
    {
      name: 'Network and Router Hacking',
      icon: '🌐',
      description: 'Network protocols, router vulnerabilities, network penetration testing'
    },
    {
      name: 'WLAN and Bluetooth Security',
      icon: '📶',
      description: 'Wireless attacks, Bluetooth exploitation, WiFi security'
    },
    {
      name: 'Lockpicking & Physical Security',
      icon: '🔒',
      description: 'Physical security assessments, lock bypassing, facility security'
    },
    { name: 'IoT Security', icon: '🔗', description: 'Internet of Things vulnerabilities, embedded device security' },
    {
      name: 'Web Application Security & Hacking',
      icon: '🌍',
      description: 'OWASP Top 10, web app vulnerabilities, secure coding'
    },
    {
      name: 'Malware Analysis & Reverse Engineering',
      icon: '🔍',
      description: 'Malware dissection, reverse engineering techniques, threat analysis'
    },
    {
      name: 'Bug Bounty Hunting',
      icon: '🎯',
      description: 'Bug hunting methodologies, disclosure processes, hunting strategies'
    },
    {
      name: 'Web Penetration Testing',
      icon: '🕸️',
      description: 'Web app pentesting, methodology, tools and techniques'
    },
    {
      name: 'Mobile Application Security',
      icon: '📱',
      description: 'iOS/Android security, mobile app testing, mobile malware'
    },
    {
      name: 'Threat Hunting & Intelligence',
      icon: '🕵️',
      description: 'Threat detection, intelligence gathering, hunting methodologies'
    },
    { name: 'DevSecOps', icon: '⚙️', description: 'Security in CI/CD, secure development practices, automation' },
    {
      name: 'Blockchain & Smart Contract Security',
      icon: '⛓️',
      description: 'Cryptocurrency security, smart contract auditing, DeFi security'
    },
    {
      name: 'Open-Source Security Tools',
      icon: '🛠️',
      description: 'Security tool development, open-source contributions'
    },
    {
      name: 'New Vulnerabilities/Exploits',
      icon: '💥',
      description: 'Zero-day discoveries, novel attack techniques, exploit development'
    }
  ];

  const submissionGuidelines = [
    {
      title: 'Session Duration',
      description: '1-2 day training sessions focused on practical, hands-on learning',
      icon: '⏰'
    },
    {
      title: 'Audience Level',
      description: 'Sessions should cater to beginner to advanced skill levels',
      icon: '📊'
    },
    {
      title: 'Practical Focus',
      description: 'Emphasis on hands-on exercises, demos, and real-world applications',
      icon: '💻'
    },
    {
      title: 'Teaching Passion',
      description: 'Speakers passionate about teaching and sharing expertise are encouraged',
      icon: '❤️'
    }
  ];

  const importantNotes = [
    {
      title: 'No Internet Provided',
      description: 'Please prepare all materials for offline use during the conference',
      icon: '🚫',
      type: 'warning'
    },
    {
      title: 'Speaker Remuneration',
      description: 'Potential speaker compensation based on available sponsorship funding',
      icon: '💰',
      type: 'info'
    },
    {
      title: 'Free Conference',
      description: 'Seasides 2026 is completely free for all attendees',
      icon: '🎉',
      type: 'success'
    }
  ];

  const toggleTopic = index => {
    setExpandedTopic(expandedTopic === index ? null : index);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-charcoal-gray' : 'bg-light-gray'}`}>
      <Navbar />

      {/* Hero Section */}
      <section className={`relative py-20 ${isDark ? 'bg-deep-ocean' : 'bg-tropical-sunset'} overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">Call for Papers</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Share your expertise with India's cybersecurity community at Seasides 2026
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                disabled
                className="px-8 py-4 bg-white/20 text-white rounded-lg font-semibold transition-all duration-300 cursor-not-allowed opacity-60"
              >
                Submit Your Proposal
              </button>
              <div
                className={`inline-flex items-center px-6 py-3 rounded-lg text-lg font-semibold ${
                  isDark ? 'bg-sunny-yellow/20 text-sunny-yellow' : 'bg-white/20 text-white'
                }`}
              >
                📧 Contact: ADMIN@SEASIDES.NET
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div
            className={`rounded-2xl p-8 mb-12 ${
              isDark ? 'bg-deep-ocean/10 border border-gray-600' : 'bg-white shadow-xl'
            }`}
          >
            <div className="text-center mb-8">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>
                About Seasides
              </h2>
              <p className={`max-w-4xl mx-auto text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Seasides 2026 is India's premier{' '}
                <span className="font-semibold text-sunset-orange">FREE cybersecurity conference</span> bringing
                together security professionals, researchers, students, and enthusiasts for an intensive learning
                experience. We're looking for passionate speakers who want to share their knowledge through hands-on
                training sessions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className={`text-center p-6 rounded-lg ${isDark ? 'bg-deep-ocean/20' : 'bg-gray-50'}`}>
                <div className="text-3xl mb-3">🎓</div>
                <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>
                  Educational Focus
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Practical, hands-on training sessions
                </p>
              </div>
              <div className={`text-center p-6 rounded-lg ${isDark ? 'bg-deep-ocean/20' : 'bg-gray-50'}`}>
                <div className="text-3xl mb-3">🌟</div>
                <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>
                  Community Driven
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  By the community, for the community
                </p>
              </div>
              <div className={`text-center p-6 rounded-lg ${isDark ? 'bg-deep-ocean/20' : 'bg-gray-50'}`}>
                <div className="text-3xl mb-3">🆓</div>
                <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>
                  Completely Free
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  No registration fees for attendees
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
              isDark ? 'text-white' : 'text-charcoal-gray'
            }`}
          >
            Submission Guidelines
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {submissionGuidelines.map((guideline, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'bg-deep-ocean/20 border border-gray-600 hover:bg-deep-ocean/30'
                    : 'bg-white shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="text-4xl mb-4">{guideline.icon}</div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>
                  {guideline.title}
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{guideline.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accepted Topics */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-4 ${
              isDark ? 'text-white' : 'text-charcoal-gray'
            }`}
          >
            Accepted Topics
          </h2>
          <p className={`text-lg text-center mb-12 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            We welcome proposals on any of these cybersecurity domains. Click on each topic to learn more about what
            we're looking for.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {acceptedTopics.map((topic, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                  isDark
                    ? 'bg-deep-ocean/10 border border-gray-600 hover:bg-deep-ocean/20'
                    : 'bg-white shadow-lg hover:shadow-xl'
                } ${expandedTopic === index ? 'ring-2 ring-sunset-orange' : ''}`}
                onClick={() => toggleTopic(index)}
              >
                <div
                  className={`p-6 ${
                    expandedTopic === index ? (isDark ? 'bg-sunset-orange/20' : 'bg-sunset-orange/10') : ''
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{topic.icon}</span>
                    <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>
                      {topic.name}
                    </h3>
                  </div>
                  {expandedTopic === index && (
                    <p
                      className={`text-sm mt-3 transition-all duration-300 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {topic.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section
        className={`py-16 ${isDark ? 'bg-deep-ocean/10' : 'bg-gradient-to-r from-sunset-orange/5 to-sunny-yellow/5'}`}
      >
        <div className="container mx-auto px-6">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
              isDark ? 'text-white' : 'text-charcoal-gray'
            }`}
          >
            Important Information
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {importantNotes.map((note, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-l-4 ${
                  note.type === 'warning'
                    ? 'border-red-500 bg-red-50'
                    : note.type === 'info'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-green-500 bg-green-50'
                } ${isDark ? 'bg-opacity-10 border-opacity-50' : ''} ${
                  isDark ? 'bg-deep-ocean/20 border border-gray-600' : 'bg-white shadow-lg'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{note.icon}</div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>
                      {note.title}
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{note.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div
            className={`max-w-3xl mx-auto text-center p-8 rounded-2xl ${
              isDark ? 'bg-deep-ocean/10 border border-gray-600' : 'bg-white shadow-xl'
            }`}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>
              Ready to Share Your Expertise?
            </h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Join our community of passionate educators and help shape the next generation of cybersecurity
              professionals. We're looking for speakers who love teaching and sharing their knowledge.
            </p>

            <div className="space-y-6">
              <button
                disabled
                className="px-8 py-4 bg-sunset-orange/60 text-white rounded-lg font-semibold transition-all duration-300 cursor-not-allowed opacity-60 text-lg"
              >
                Submit Your Proposal
              </button>

              <div className={`p-4 rounded-lg ${isDark ? 'bg-deep-ocean/20' : 'bg-gray-50'}`}>
                <p className={`text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Have questions about submitting a proposal?
                </p>
                <p className={`font-semibold ${isDark ? 'text-sunset-orange' : 'text-deep-ocean'}`}>
                  📧 Contact us at: ADMIN@SEASIDES.NET
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CfpPage;
