'use client';
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const ScholarshipPage = () => {
  const { isDark } = useTheme();
  const [expandedSection, setExpandedSection] = useState(null);

  const scholarshipBenefits = [
    {
      icon: '💰',
      title: 'INR 5,000 Scholarship',
      description: 'Each scholarship worth INR 5,000 to cover travel and conference attendance expenses'
    },
    {
      icon: '🎓',
      title: '100 Scholarships Available',
      description: 'We are offering 100 scholarships to deserving students across India'
    },
    {
      icon: '🏖️',
      title: 'Full Conference Access',
      description: 'Complete access to all 3 days of workshops, sessions, and networking events'
    },
    {
      icon: '🤝',
      title: 'Community Support',
      description: 'Join a supportive community of cybersecurity enthusiasts and professionals'
    }
  ];

  const requirements = [
    'Must attend the conference for 2 full days',
    'Submit a detailed explanation of why you deserve the scholarship',
    'Demonstrate genuine interest in cybersecurity',
    'Show commitment to learning and professional growth',
    'Engage with sponsors through social media interactions'
  ];

  const toggleSection = section => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-charcoal-gray' : 'bg-light-gray'}`}>
      <Navbar />

      {/* Hero Section */}
      <section className={`relative py-20 ${isDark ? 'bg-deep-ocean' : 'bg-tropical-sunset'} overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Seasides Scholarship 2025
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Take that next big step towards your dreams with our scholarship program
            </p>
            <div
              className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold ${
                isDark ? 'bg-sunny-yellow text-charcoal-gray' : 'bg-white text-deep-ocean'
              }`}
            >
              💼 Scholarship Form Currently Closed
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Scholarship Overview */}
          <div
            className={`rounded-2xl p-8 mb-12 ${
              isDark ? 'bg-deep-ocean/10 border border-gray-600' : 'bg-white shadow-xl'
            }`}
          >
            <div className="text-center mb-8">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>
                Our Scholarship Philosophy
              </h2>
              <div
                className={`max-w-4xl mx-auto text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
              >
                <blockquote className="italic border-l-4 border-sunset-orange pl-6 py-4 mb-6">
                  "We want to make sure you can join the event without the stress of financial worries—just come, learn,
                  and enjoy the experience"
                </blockquote>
                <p>
                  Our scholarship program is designed to support hardworking students who are passionate about
                  cybersecurity but may face financial barriers to attending conferences. We believe that learning
                  opportunities should be accessible to everyone.
                </p>
              </div>
            </div>
          </div>

          {/* Scholarship Benefits Grid */}
          <div className="mb-16">
            <h2
              className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
                isDark ? 'text-white' : 'text-charcoal-gray'
              }`}
            >
              Scholarship Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {scholarshipBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 cursor-pointer ${
                    isDark
                      ? 'bg-deep-ocean/20 border border-gray-600 hover:bg-deep-ocean/30'
                      : 'bg-white shadow-lg hover:shadow-xl'
                  }`}
                  onClick={() => toggleSection(`benefit-${index}`)}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>
                    {benefit.title}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements Section */}
          <div
            className={`rounded-2xl p-8 mb-12 ${
              isDark ? 'bg-deep-ocean/10 border border-gray-600' : 'bg-white shadow-xl'
            }`}
          >
            <h2
              className={`text-3xl md:text-4xl font-bold text-center mb-8 ${
                isDark ? 'text-white' : 'text-charcoal-gray'
              }`}
            >
              Eligibility Requirements
            </h2>
            <div className="max-w-3xl mx-auto">
              {requirements.map((requirement, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-lg mb-4 transition-all duration-300 hover:scale-[1.02] ${
                    isDark ? 'bg-deep-ocean/20 hover:bg-deep-ocean/30' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-sunset-orange text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{requirement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Engagement Section */}
          <div
            className={`rounded-2xl p-8 mb-12 bg-gradient-to-r ${
              isDark ? 'from-deep-ocean/30 to-sunset-orange/20' : 'from-sunset-orange/10 to-sunny-yellow/10'
            } border ${isDark ? 'border-gray-600' : 'border-sunset-orange/20'}`}
          >
            <h2
              className={`text-2xl md:text-3xl font-bold text-center mb-6 ${
                isDark ? 'text-white' : 'text-charcoal-gray'
              }`}
            >
              Social Engagement Component
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                As part of your scholarship application, we encourage you to engage with our amazing sponsors:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className={`p-4 rounded-lg ${isDark ? 'bg-deep-ocean/20' : 'bg-white/50'}`}>
                  <div className="text-3xl mb-2">👍</div>
                  <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>Like Posts</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Show appreciation for sponsor content
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${isDark ? 'bg-deep-ocean/20' : 'bg-white/50'}`}>
                  <div className="text-3xl mb-2">💬</div>
                  <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>Comment</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Engage with meaningful comments
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${isDark ? 'bg-deep-ocean/20' : 'bg-white/50'}`}>
                  <div className="text-3xl mb-2">📤</div>
                  <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>Share Posts</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Help spread the word</p>
                </div>
              </div>
            </div>
          </div>

          {/* Application Process */}
          <div
            className={`rounded-2xl p-8 text-center ${
              isDark ? 'bg-deep-ocean/10 border border-gray-600' : 'bg-white shadow-xl'
            }`}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>
              Application Process
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className={`p-6 rounded-lg ${isDark ? 'bg-deep-ocean/20' : 'bg-gray-50'}`}>
                  <div className="text-4xl mb-4">📝</div>
                  <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>
                    Step 1: Application Form
                  </h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Fill out the scholarship application form with your personal details and background
                  </p>
                </div>
                <div className={`p-6 rounded-lg ${isDark ? 'bg-deep-ocean/20' : 'bg-gray-50'}`}>
                  <div className="text-4xl mb-4">✍️</div>
                  <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>
                    Step 2: Personal Story
                  </h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Write a compelling personal story explaining why you deserve the scholarship
                  </p>
                </div>
              </div>

              <div
                className={`p-6 rounded-lg ${
                  isDark
                    ? 'bg-sunset-orange/20 border border-sunset-orange/30'
                    : 'bg-sunset-orange/10 border border-sunset-orange/20'
                }`}
              >
                <p className={`text-lg font-semibold ${isDark ? 'text-sunset-orange' : 'text-sunset-orange'}`}>
                  📅 Applications will open soon! Keep an eye on our social media for updates.
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

export default ScholarshipPage;
