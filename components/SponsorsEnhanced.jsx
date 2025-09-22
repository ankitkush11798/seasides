import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { colors, gradients, shadows } from '@/lib/colors';

const SponsorsEnhanced = () => {
  const { isDark } = useTheme();
  const diamondSponsors = [
    { name: "HackerOne", logo: "https://logos-world.net/wp-content/uploads/2022/04/HackerOne-Logo.png" },
    { name: "Bugcrowd", logo: "https://logowik.com/content/uploads/images/bugcrowd4886.jpg" },
    { name: "Checkmarx", logo: "https://logowik.com/content/uploads/images/checkmarx8239.jpg" },
    { name: "DNIF", logo: "https://media.licdn.com/dms/image/C4D0BAQGn8tQjKpJ-JA/company-logo_200_200/0/1630587016834/dnif_logo?e=2147483647&v=beta&t=X8oI1QwmJJjpMfZ6q3_gX5G_6lMuJx3NG_1YnGfOQ6Y" },
    { name: "ArmorCode", logo: "https://media.licdn.com/dms/image/C4E0BAQEj9gD-hY-QKA/company-logo_200_200/0/1654172425531/armorcode_logo?e=2147483647&v=beta&t=JzKvX8qHzG_Jm_1CUQRLxZTzNqV5z_Zx_Qp4Wn9xZ3o" },
    { name: "CloudSEK", logo: "https://media.licdn.com/dms/image/C560BAQGxLJ4qRH3Rng/company-logo_200_200/0/1635859662821/cloudsek_logo?e=2147483647&v=beta&t=5c_6k8Y8zQ_V7Qg3j_9xU5n2R8_7oX_6pJ4fY1tA8Zw" }
  ];

  return (
    <section className={`py-20 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`} style={{ color: isDark ? colors.white : colors.charcoalGray }}>Our Sponsors</h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ background: gradients.warmSunset }}></div>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDark ? 'text-gray-200' : 'text-gray-600'
          }`}>
            We are grateful to our sponsors who make this free conference possible for the cybersecurity community.
          </p>
        </div>

         <div className="text-center">
          <p className={`text-lg mb-6 ${
            isDark ? 'text-gray-200' : 'text-gray-600'
          }`}>
            Help us nurture and shape the next generation passionate about cybersecurity, so they can create a safer and more peaceful world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sponsors">
              <button className="px-8 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105" style={{
                background: gradients.deepOceanDepth,
                boxShadow: shadows.buttonShadow
              }}>
                View All Sponsors
              </button>
            </Link>
            <button className="px-8 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105" style={{
              background: gradients.warmSunset,
              boxShadow: shadows.buttonShadow
            }}>
              Become a Sponsor
            </button>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="relative inline-block p-6" style={{
              background: isDark
                ? 'radial-gradient(ellipse at center, rgba(13, 71, 161, 0.3), rgba(255, 143, 0, 0.2), transparent)'
                : 'radial-gradient(ellipse at center, rgba(13, 71, 161, 0.1), rgba(255, 143, 0, 0.05), transparent)',
              borderRadius: '20px',
              border: `2px solid ${isDark ? colors.sunsetOrange + '50' : colors.deepOceanBlue + '30'}`
            }}>
              <h3 className={`text-4xl font-black mb-2 relative`} style={{
                background: isDark
                  ? 'linear-gradient(45deg, #ffffff, #60a5fa, #fbbf24, #ffffff, #3b82f6)'
                  : `linear-gradient(45deg, ${colors.deepOceanBlue}, ${colors.sunsetOrange}, #1e40af, ${colors.sunnyYellow}, ${colors.deepOceanBlue})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '300% 300%',
                animation: 'shimmer 2s ease-in-out infinite',
                textShadow: isDark
                  ? '0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(96, 165, 250, 0.6)'
                  : `0 4px 8px rgba(13, 71, 161, 0.3), 0 0 20px ${colors.sunsetOrange}40`,
                filter: 'drop-shadow(0 0 10px rgba(255, 143, 0, 0.5))'
              }}>
                💎 DIAMOND PARTNERS 💎
              </h3>

              {/* Enhanced Sparkle Effects */}
              <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full animate-ping" style={{
                background: 'radial-gradient(circle, #ffffff, #60a5fa)',
                boxShadow: '0 0 15px rgba(96, 165, 250, 0.8)'
              }}></div>
              <div className="absolute top-2 right-6 w-2 h-2 rounded-full animate-pulse" style={{
                background: 'radial-gradient(circle, #fbbf24, #f59e0b)',
                boxShadow: '0 0 10px rgba(251, 191, 36, 0.8)',
                animationDelay: '0.5s'
              }}></div>
              <div className="absolute bottom-1 left-12 w-2.5 h-2.5 rounded-full animate-bounce" style={{
                background: 'radial-gradient(circle, #ffffff, #e0f2fe)',
                boxShadow: '0 0 12px rgba(255, 255, 255, 0.9)',
                animationDelay: '1s'
              }}></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full animate-ping" style={{
                background: 'radial-gradient(circle, #3b82f6, #1e40af)',
                boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)',
                animationDelay: '1.5s'
              }}></div>
              <div className="absolute top-8 left-4 w-1.5 h-1.5 rounded-full animate-pulse" style={{
                background: 'radial-gradient(circle, #fbbf24, #ffffff)',
                boxShadow: '0 0 8px rgba(251, 191, 36, 0.6)',
                animationDelay: '2s'
              }}></div>
              <div className="absolute top-6 right-12 w-1 h-1 rounded-full animate-bounce" style={{
                background: '#ffffff',
                boxShadow: '0 0 6px rgba(255, 255, 255, 1)',
                animationDelay: '2.5s'
              }}></div>

              {/* Enhanced Diamond Shine Effect */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.6) 50%, transparent 60%)',
                  animation: 'diamond-shine 3s ease-in-out infinite',
                  transform: 'skewX(-20deg)'
                }}></div>
              </div>
            </div>

            <p className={`text-lg font-bold mt-4 ${
              isDark ? 'text-blue-300' : 'text-blue-700'
            }`} style={{
              color: colors.deepOceanBlue,
              textShadow: isDark ? '0 0 10px rgba(96, 165, 250, 0.5)' : '0 2px 4px rgba(13, 71, 161, 0.3)'
            }}>
              ✨ Premium Tier Partners ✨
            </p>
          </div>

          <style jsx>{`
            @keyframes shimmer {
              0% { background-position: 0% 50%; }
              25% { background-position: 50% 0%; }
              50% { background-position: 100% 50%; }
              75% { background-position: 50% 100%; }
              100% { background-position: 0% 50%; }
            }

            @keyframes diamond-shine {
              0% { transform: translateX(-150%) skewX(-20deg); opacity: 0; }
              50% { opacity: 1; }
              100% { transform: translateX(150%) skewX(-20deg); opacity: 0; }
            }
          `}</style>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {diamondSponsors.map((sponsor, index) => (
              <div key={index} className={`p-6 rounded-lg transition-all duration-300 hover:scale-105 ${
                isDark ? 'bg-gray-800/60' : 'bg-white'
              }`} style={{ boxShadow: shadows.cardShadow }}>
                <div className="h-16 flex items-center justify-center">
                  <span className={`font-semibold text-sm ${
                    isDark ? 'text-gray-200' : 'text-gray-600'
                  }`}>{sponsor.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className={`p-8 rounded-lg ${
            isDark ? 'bg-gray-800/60' : 'bg-white'
          }`} style={{ boxShadow: shadows.cardShadow }}>
            <h3 className={`text-xl font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`} style={{ color: isDark ? colors.white : colors.charcoalGray }}>Why Sponsor Us?</h3>
            <ul className={`space-y-2 ${
              isDark ? 'text-gray-200' : 'text-gray-600'
            }`}>
              <li>Reach 1000+ cybersecurity professionals</li>
              <li>Brand visibility throughout the 3-day event</li>
              <li>Direct engagement with potential customers</li>
              <li>Support the cybersecurity community</li>
              <li>Networking opportunities with industry leaders</li>
            </ul>
          </div>
          <div className={`p-8 rounded-lg ${
            isDark ? 'bg-gray-800/60' : 'bg-white'
          }`} style={{ boxShadow: shadows.cardShadow }}>
            <h3 className={`text-xl font-semibold mb-6 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`} style={{ color: isDark ? colors.white : colors.charcoalGray }}>Sponsorship Packages</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 rounded-lg transition-all duration-300 hover:scale-105" style={{
                background: isDark
                  ? 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(173,216,230,0.2))'
                  : 'linear-gradient(135deg, rgba(13, 71, 161, 0.1), rgba(173,216,230,0.15))',
                border: `2px solid ${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(13, 71, 161, 0.3)'}`,
                boxShadow: `0 4px 20px ${colors.deepOceanBlue}20`
              }}>
                <span className={`font-bold flex items-center gap-2 text-lg ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`} style={{
                  color: isDark ? colors.white : colors.charcoalGray,
                  textShadow: isDark ? '0 0 10px rgba(255,255,255,0.5)' : '0 2px 4px rgba(0,0,0,0.2)'
                }}>
                  💎 Diamond Partner
                </span>
                <span className="font-black text-xl" style={{
                  color: colors.sunsetOrange,
                  textShadow: `0 0 10px ${colors.sunsetOrange}50`
                }}>₹5,00,000</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-lg transition-all duration-300 hover:scale-105" style={{
                background: isDark
                  ? 'linear-gradient(135deg, rgba(192,192,192,0.15), rgba(169,169,169,0.2))'
                  : 'linear-gradient(135deg, rgba(192,192,192,0.2), rgba(169,169,169,0.15))',
                border: '2px solid rgba(192,192,192,0.4)',
                boxShadow: '0 4px 20px rgba(192,192,192,0.3)'
              }}>
                <span className={`font-bold flex items-center gap-2 text-lg ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`} style={{
                  color: isDark ? colors.white : colors.charcoalGray,
                  textShadow: isDark ? '0 0 10px rgba(255,255,255,0.5)' : '0 2px 4px rgba(0,0,0,0.2)'
                }}>
                  🏆 Platinum Partner
                </span>
                <span className="font-black text-xl" style={{
                  color: colors.sunsetOrange,
                  textShadow: `0 0 10px ${colors.sunsetOrange}50`
                }}>₹3,00,000</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-lg transition-all duration-300 hover:scale-105" style={{
                background: isDark
                  ? 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,193,7,0.2))'
                  : 'linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,193,7,0.15))',
                border: '2px solid rgba(255,215,0,0.4)',
                boxShadow: '0 4px 20px rgba(255,215,0,0.3)'
              }}>
                <span className={`font-bold flex items-center gap-2 text-lg ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`} style={{
                  color: isDark ? colors.white : colors.charcoalGray,
                  textShadow: isDark ? '0 0 10px rgba(255,255,255,0.5)' : '0 2px 4px rgba(0,0,0,0.2)'
                }}>
                  🥇 Gold Partner
                </span>
                <span className="font-black text-xl" style={{
                  color: colors.sunsetOrange,
                  textShadow: `0 0 10px ${colors.sunsetOrange}50`
                }}>₹2,00,000</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-lg transition-all duration-300 hover:scale-105" style={{
                background: isDark
                  ? 'linear-gradient(135deg, rgba(192,192,192,0.15), rgba(211,211,211,0.2))'
                  : 'linear-gradient(135deg, rgba(192,192,192,0.2), rgba(211,211,211,0.15))',
                border: '2px solid rgba(169,169,169,0.3)',
                boxShadow: '0 4px 20px rgba(169,169,169,0.2)'
              }}>
                <span className={`font-bold flex items-center gap-2 text-lg ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`} style={{
                  color: isDark ? colors.white : colors.charcoalGray,
                  textShadow: isDark ? '0 0 10px rgba(255,255,255,0.5)' : '0 2px 4px rgba(0,0,0,0.2)'
                }}>
                  🥈 Silver Partner
                </span>
                <span className="font-black text-xl" style={{
                  color: colors.sunsetOrange,
                  textShadow: `0 0 10px ${colors.sunsetOrange}50`
                }}>₹1,00,000</span>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default SponsorsEnhanced;
