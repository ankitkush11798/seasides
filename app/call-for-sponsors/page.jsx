'use client';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const Sponsors = () => {
  const { isDark } = useTheme();

  const sponsorships = [
    {
      tier: 'Diamond',
      benefits: [
        'Logo printed on the badge, Lanyard and lead logo placed on sponsorship page as Diamond sponsors',
        'LinkedIn and Twitter Shout Outs featuring your brand/Logo and during Seasides and periodic posts',
        'Logo printed on all promotional materials (standees) which will be displayed at event venues',
        'Standee with the company logo to be kept at the venue',
        'Acknowledgement/Thank You in Seasides materials developed for the conference',
        'Periodic tweets thanking the sponsors'
      ]
    },
    {
      tier: 'Platinum',
      benefits: [
        'Logo placed on sponsorship page as Platinum sponsors',
        'LinkedIn and Twitter Shout Outs featuring your brand/Logo and during Seasides and periodic posts',
        'Logo printed on all promotional materials (standees) which will be displayed at event venues',
        'Standee with the company logo to be kept at the venue',
        'Periodic tweets thanking the sponsors'
      ]
    },
    {
      tier: 'Gold',
      benefits: [
        'Company logo featured sponsorship page as Gold sponsors',
        'LinkedIn and Twitter Shout Outs featuring your brand/Logo and during Seasides and periodic posts',
        'Logo printed on all promotional materials (standees) which will be displayed at event venues',
        'Standee with the company logo to be kept at the venue'
      ]
    },
    {
      tier: 'Food & Beverage',
      benefits: [
        'Credit as Food and Beverage sponsors for each day, announced at the venues',
        'Company logo featured on sponsors pages',
        'LinkedIn and Twitter shoutout featuring your brand/Logo',
        'Sponsor recognition and acknowledgement featured at the venue'
      ]
    },
    {
      tier: 'Silver',
      benefits: [
        'Credit as Evening snacks sponsors, announced at the venue',
        'Company logo featured on Seasides’ Sponsors page',
        'LinkedIn and Twitter shoutout featuring your brand/Logo',
        'Standee with the company logo to be kept at the venue',
        'Sponsor recognition and acknowledgement at the venue'
      ]
    },
    {
      tier: 'Bronze',
      benefits: [
        'Company logo featured on Seasides’ Sponsors page',
        'LinkedIn and Twitter Shout Outs featuring your brand/Logo and during Seasides and periodic posts',
        'Sponsor recognition and acknowledgement at the venue'
      ]
    },
    {
      tier: 'Special Supporter',
      benefits: ['As special supporter we will send thankyou tweets and Mention at the event']
    }
  ];

  const arrangedSponsorships = [
    sponsorships[0],
    sponsorships[1],
    sponsorships[2],
    sponsorships[3],
    sponsorships[4],
    sponsorships[5],
    sponsorships[6]
  ];

  return (
    <>
      <Navbar />
      <section className="relative flex flex-col justify-center items-center text-center py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-900 animate-[gradientMove_15s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl shadow-black/50">
            Call For Sponsors - Join Our Hands
          </h1>
          <p className="text-lg md:text-xl text-white font-medium drop-shadow-lg shadow-black/50 backdrop-blur-sm bg-white/10 rounded-lg p-4">
            Be a part of something bigger! You’ll play a key role in shaping the future of our community.
          </p>
          <p className="text-lg md:text-xl text-white font-medium drop-shadow-lg shadow-black/50 backdrop-blur-sm bg-white/10 rounded-lg p-4">
            Together, we can inspire, educate, and empower the next generation of leaders. Join hands with us to make a
            lasting impact!
          </p>
        </div>
      </section>

      <section className={`${isDark ? 'bg-slate-900 text-white' : 'bg-white text-charcoal-gray'} py-16`}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-orange-500 mb-8">Our Presence</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Linkedin className="w-8 h-8 text-blue-600" />, label: '9000+' },
              { icon: <Twitter className="w-8 h-8 text-blue-400" />, label: '4500+' },
              { icon: <Instagram className="w-8 h-8 text-pink-500" />, label: '2000+' },
              { icon: <Facebook className="w-8 h-8 text-blue-800" />, label: '1200+' }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl shadow-lg flex flex-col items-center gap-2 ${
                  isDark ? 'bg-slate-700/80 border border-slate-600' : 'bg-white/90 border border-white/30'
                }`}
              >
                {item.icon}
                <span className="text-lg font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 text-center">
        <a
          href="/Seasides_Proposal.pdf"
          download
          className="px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-orange-400 via-orange-500 to-cyan-400 text-white shadow-lg hover:scale-105 transition-transform inline-block"
        >
          Download Sponsorship Kit
        </a>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-12">Sponsorship Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {arrangedSponsorships.map((sponsor, index) => {
            const isLast = index === arrangedSponsorships.length - 1;
            return (
              <div
                key={index}
                className={`p-6 h-full min-h-[250px] rounded-3xl shadow-lg flex flex-col justify-start text-xs sm:text-sm md:text-sm ${
                  isDark ? 'bg-slate-700/80 border border-slate-600' : 'bg-white/90 border border-white/30'
                } ${isLast ? 'lg:col-start-2' : ''}`}
              >
                <h3 className="text-sm md:text-base font-bold text-center text-cyan-400 mb-3">{sponsor.tier}</h3>
                <ul className="list-disc list-inside space-y-1 flex-1">
                  {sponsor.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background: linear-gradient(45deg, #f97316, #fb923c, #06b6d4, #0891b2);
            background-position: 0% 50%;
          }
          50% {
            background: linear-gradient(45deg, #06b6d4, #0891b2, #f97316, #fb923c);
            background-position: 100% 50%;
          }
          100% {
            background: linear-gradient(45deg, #f97316, #fb923c, #06b6d4, #0891b2);
            background-position: 0% 50%;
          }
        }
        .animate-[gradientMove_15s_ease-in-out_infinite] {
          background-size: 300% 300%;
        }
      `}</style>
    </>
  );
};

export default Sponsors;
