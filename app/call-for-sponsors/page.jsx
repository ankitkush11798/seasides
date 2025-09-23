'use client';
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const CallForSponsorsPage = () => {
  const { isDark } = useTheme();
  const [activePackage, setActivePackage] = useState(null);

  const sponsorshipPackages = [
    {
      name: 'Diamond Sponsor',
      icon: '💎',
      description: 'Maximum visibility and premium partnership',
      benefits: [
        'Logo on badge and lanyard',
        'Lead logo on sponsorship page',
        'Social media shoutouts',
        'Logo on promotional materials',
        'Standee at venue',
        'Acknowledgement in conference materials'
      ],
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Platinum Sponsor',
      icon: '🥈',
      description: 'Premium visibility and recognition',
      benefits: [
        'Logo on sponsorship page',
        'Social media shoutouts',
        'Logo on promotional materials',
        'Standee at venue',
        'Periodic sponsor recognition tweets'
      ],
      color: 'from-gray-400 to-gray-600'
    },
    {
      name: 'Gold Sponsor',
      icon: '🥇',
      description: 'Excellent brand exposure opportunity',
      benefits: [
        'Company logo on sponsorship page',
        'Social media shoutouts',
        'Logo on promotional materials',
        'Standee at venue'
      ],
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'Food & Beverage Sponsor',
      icon: '🍽️',
      description: 'Special food and beverage partnership',
      benefits: [
        'Daily venue credit',
        'Company logo on sponsors page',
        'Social media recognition',
        'Venue acknowledgement'
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      name: 'Silver Sponsor',
      icon: '🥉',
      description: 'Evening snacks sponsorship opportunity',
      benefits: [
        'Evening snacks sponsorship',
        'Company logo on sponsors page',
        'Social media shoutout',
        'Standee at venue',
        'Venue recognition'
      ],
      color: 'from-gray-300 to-gray-500'
    },
    {
      name: 'Bronze Sponsor',
      icon: '🏆',
      description: 'Entry-level sponsorship with good visibility',
      benefits: ['Company logo on sponsors page', 'Social media shoutouts', 'Venue recognition'],
      color: 'from-orange-400 to-orange-600'
    },
    {
      name: 'Special Supporter',
      icon: '⭐',
      description: 'Community supporter package',
      benefits: ['Thank you tweets', 'Event mention'],
      color: 'from-pink-400 to-pink-600'
    }
  ];

  const conferenceStats = [
    { number: '9000+', label: 'Total Attendees', icon: '👥' },
    { number: '3', label: 'Days of Learning', icon: '📅' },
    { number: '50+', label: 'Expert Speakers', icon: '🎤' },
    { number: '25+', label: 'Workshops', icon: '🛠️' }
  ];

  const togglePackage = index => {
    setActivePackage(activePackage === index ? null : index);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-charcoal-gray' : 'bg-light-gray'}`}>
      <Navbar />

      {/* Hero Section */}
      <section className={`relative py-20 ${isDark ? 'bg-deep-ocean' : 'bg-tropical-sunset'} overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">Partner With Seasides</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join us in inspiring, educating, and empowering the next generation of cybersecurity leaders
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                disabled
                className="px-8 py-4 bg-white/20 text-white rounded-lg font-semibold transition-all duration-300 cursor-not-allowed opacity-60"
              >
                Download Sponsorship Kit
              </button>
              <button
                disabled
                className="px-8 py-4 bg-sunset-orange/60 text-white rounded-lg font-semibold transition-all duration-300 cursor-not-allowed opacity-60"
              >
                Become a Sponsor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Impact Stats */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
              isDark ? 'text-white' : 'text-charcoal-gray'
            }`}
          >
            Conference Reach & Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {conferenceStats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                  isDark
                    ? 'bg-deep-ocean/20 border border-gray-600 hover:bg-deep-ocean/30'
                    : 'bg-white shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div
                  className={`text-3xl md:text-4xl font-bold mb-2 ${isDark ? 'text-sunset-orange' : 'text-deep-ocean'}`}
                >
                  {stat.number}
                </div>
                <div className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-4 ${
              isDark ? 'text-white' : 'text-charcoal-gray'
            }`}
          >
            Sponsorship Packages
          </h2>
          <p className={`text-lg text-center mb-12 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Choose the sponsorship level that best fits your marketing objectives and budget. Each package offers
            progressively more visibility and recognition opportunities.
          </p>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sponsorshipPackages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                  isDark
                    ? 'bg-deep-ocean/10 border border-gray-600 hover:bg-deep-ocean/20'
                    : 'bg-white shadow-lg hover:shadow-xl'
                } ${activePackage === index ? 'ring-2 ring-sunset-orange' : ''}`}
                onClick={() => togglePackage(index)}
              >
                <div className={`p-6 bg-gradient-to-r ${pkg.color} text-white`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{pkg.icon}</span>
                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                  </div>
                  <p className="text-white/90">{pkg.description}</p>
                </div>

                <div className="p-6">
                  <h4 className={`font-semibold mb-4 text-lg ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>
                    Package Benefits:
                  </h4>
                  <ul className="space-y-3">
                    {pkg.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className={`flex items-start gap-3 transition-all duration-300 ${
                          activePackage === index ? 'opacity-100' : 'opacity-80 hover:opacity-100'
                        }`}
                      >
                        <div className="flex-shrink-0 w-2 h-2 bg-sunset-orange rounded-full mt-2"></div>
                        <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    disabled
                    className={`w-full mt-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-not-allowed opacity-60 ${
                      isDark ? 'bg-sunset-orange/40 text-white' : 'bg-sunset-orange/40 text-white'
                    }`}
                  >
                    Contact for Pricing
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section
        className={`py-16 ${isDark ? 'bg-deep-ocean/10' : 'bg-gradient-to-r from-sunset-orange/5 to-sunny-yellow/5'}`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2
              className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
                isDark ? 'text-white' : 'text-charcoal-gray'
              }`}
            >
              Why Sponsor Seasides?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div
                className={`p-6 rounded-xl ${
                  isDark ? 'bg-deep-ocean/20 border border-gray-600' : 'bg-white shadow-lg'
                }`}
              >
                <div className="text-4xl mb-4">🎯</div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>
                  Targeted Audience
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Reach 9000+ cybersecurity professionals, students, and enthusiasts who are passionate about security
                  and looking for cutting-edge solutions.
                </p>
              </div>

              <div
                className={`p-6 rounded-xl ${
                  isDark ? 'bg-deep-ocean/20 border border-gray-600' : 'bg-white shadow-lg'
                }`}
              >
                <div className="text-4xl mb-4">🌟</div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>
                  Brand Visibility
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Get maximum exposure through our multi-platform approach including social media, conference materials,
                  and on-site branding opportunities.
                </p>
              </div>

              <div
                className={`p-6 rounded-xl ${
                  isDark ? 'bg-deep-ocean/20 border border-gray-600' : 'bg-white shadow-lg'
                }`}
              >
                <div className="text-4xl mb-4">🤝</div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>
                  Community Impact
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Support the growth of India's cybersecurity community and help shape the next generation of security
                  professionals.
                </p>
              </div>

              <div
                className={`p-6 rounded-xl ${
                  isDark ? 'bg-deep-ocean/20 border border-gray-600' : 'bg-white shadow-lg'
                }`}
              >
                <div className="text-4xl mb-4">📈</div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>
                  Networking Opportunities
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Connect with industry leaders, potential customers, and top talent in an engaging, educational
                  environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div
            className={`max-w-2xl mx-auto text-center p-8 rounded-2xl ${
              isDark ? 'bg-deep-ocean/10 border border-gray-600' : 'bg-white shadow-xl'
            }`}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-charcoal-gray'}`}>
              Ready to Partner With Us?
            </h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Join our amazing sponsors and help make Seasides 2026 the most impactful cybersecurity conference in
              India.
            </p>

            <div className="space-y-4">
              <button
                disabled
                className="w-full sm:w-auto px-8 py-4 bg-sunset-orange/60 text-white rounded-lg font-semibold transition-all duration-300 cursor-not-allowed opacity-60"
              >
                Download Sponsorship Kit
              </button>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Contact us for custom sponsorship packages and partnership opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CallForSponsorsPage;
