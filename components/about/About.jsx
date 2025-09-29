'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, HelpCircle } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

const About = () => {
  const { isDark } = useTheme();
  const [activeSection, setActiveSection] = useState('story');
  const [selectedMember, setSelectedMember] = useState(null);

  const sections = [
    { key: 'story', title: "What's our Story ?" },
    { key: 'mission', title: "What's our Mission ?" },
    { key: 'achieved', title: 'What we Achieved ?' },
    { key: 'attend', title: 'Who should Attend ?' }
  ];

  const teamMembers = [
    {
      name: 'Prashant KV',
      image: 'team-photos/Prashant_KV.jpeg',
      role: 'Co-Founder Seasides',
      nickname: 'Sardaar Khan',
      quote: 'Guilty as charged—we throw epic parties! 😉',
      fullDescription:
        "He is the Co-Founder of the Seasides Community, known for his passion for helping others and, guilty as charged, for throwing amazing parties. With over 20 years of experience in the security domain, he has mentored countless cybersecurity enthusiasts and is like family to many. The team lovingly calls him the 'Sardaar Khan.'",
      experience: '20+ years',
      socialMedia: {
        twitter: 'https://twitter.com/goodbestguy',
        linkedin: 'https://www.linkedin.com/in/prashant-venkatesh-99018999'
      },
      keyTraits: [
        'Passionate about helping others',
        'Amazing party organizer',
        'Mentor to countless cybersecurity enthusiasts',
        'Like family to many in the community'
      ]
    },
    {
      name: 'Parveen Yadav',
      image: 'team-photos/Parveen_Yadav.jpeg',
      role: 'Co-Founder Seasides',
      nickname: 'Munna Bhaiya',
      fullDescription:
        'As the Co-Founder of Seasides, he embodies the essence of leadership through his genuine care for the team, fostering an environment where every member feels valued and supported—like family. His leadership style is characterized by empathy and accessibility, making him approachable for team members seeking guidance or mentorship. With extensive expertise in cybersecurity, he not only stays at the forefront of industry trends but also actively engages in the community through bug hunting on major platforms like Hackerone & Bugcrowd. This hands-on involvement not only keeps his skills sharp but also serves as an inspiring example for the team, demonstrating the importance of continuous learning and innovation. His commitment to nurturing newcomers in cybersecurity reflects his passion for mentorship. He takes the time to guide them through the complexities of the field, sharing insights and resources that empower them to thrive. This investment in their growth helps cultivate a culture of knowledge-sharing and collaboration within the team. Affectionately referred to as "Munna Bhaiya," he has created an undeniable presence that resonates with the team.',
      expertise: ['Bug Hunting', 'Vulnerability Research', 'Team Leadership', 'Mentorship'],
      platforms: ['Hackerone', 'Bugcrowd'],
      socialMedia: {
        twitter: 'https://twitter.com/parveen1015'
      },
      keyTraits: [
        'Leadership through genuine care',
        'Empathy and accessibility',
        'Active bug hunter',
        'Passionate mentor for newcomers',
        'Culture of knowledge-sharing'
      ]
    },
    {
      name: 'Abhinav Khanna',
      image: 'team-photos/Abhinav_Khanna.jpeg',
      role: 'Information Security Professional',
      fullDescription:
        'Abhinav Khanna is an Information Security Professional with 6+ years of experience. His areas of expertise include web apps, mobile apps, APIs and cloud. He has spoken at conferences like BlackHat Asia, BlackHat MEA, BSides Vancouver etc. He is always eager to help and guide others in the field, sharing his knowledge and experience to support the growth of fellow security enthusiasts. His dedication to both advancing security practices and nurturing the next generation of professionals is widely recognized within the community.',
      experience: '6+ years',
      expertise: ['Web Applications', 'Mobile Applications', 'APIs', 'Cloud Security'],
      conferences: ['BlackHat Asia', 'BlackHat MEA', 'BSides Vancouver'],
      socialMedia: {
        linkedin: 'https://www.linkedin.com/in/abhinav-khanna-a2633b114/'
      },
      keyTraits: [
        'Eager to help and guide others',
        'Knowledge sharing advocate',
        'Supports growth of security enthusiasts',
        'Recognized community contributor'
      ]
    },
    {
      name: "Seedon Adlin D'souza",
      image: 'team-photos/seedon.jpeg',
      role: 'Hardware Security Expert',
      fullDescription:
        'He is a distinguished hardware security expert with over seven years of experience in the field of information security. Since 2019, he has been a prominent speaker at various conferences, where he shares his expertise in drone security, RF hacking and hardware exploitation. Currently employed at Sony, Seedon is recognised for his collaborative spirit, having contributed to the design of conference badges and the village at Seasides. His dedication to advancing the cybersecurity community is evident in his continuous effort to share knowledge and foster innovation.',
      experience: '7+ years',
      currentCompany: 'Sony',
      expertise: ['Hardware Security', 'Drone Security', 'RF Hacking', 'Hardware Exploitation'],
      speakingExperience: 'Since 2019',
      contributions: ['Conference Badge Design', 'Village Design'],
      socialMedia: {
        twitter: 'https://x.com/SeedonD',
        linkedin: 'https://www.linkedin.com/in/seedon/'
      },
      keyTraits: [
        'Distinguished hardware security expert',
        'Prominent conference speaker',
        'Collaborative spirit',
        'Continuous knowledge sharing',
        'Innovation fostering'
      ]
    },
    {
      name: 'Kartheek Lade',
      image: 'team-photos/Karteek.webp',
      role: 'Security Researcher',
      fullDescription:
        "Kartheek Lade is a passionate security researcher with a strong focus on enhancing the security landscape of the Internet of Vehicles (IoV). He actively contributes to the Seasides community and serves as a technical committee member of the ASRG Vulnerability Management team, focusing on fortifying vehicle and embedded security. Kartheek is also a regular speaker and trainer at renowned international security conferences, including Seasides, DEFCON Car Hacking Village, BlackHat Arsenal, Secure Our Streets (SOS), C0c0n, and NullCon. Whether it's breaking down security barriers or sparking insightful discussions, he's always up for the challenge. 😉",
      expertise: ['Internet of Vehicles (IoV)', 'Vehicle Security', 'Embedded Security', 'Vulnerability Management'],
      roles: ['ASRG Technical Committee Member'],
      conferences: [
        'Seasides',
        'DEFCON Car Hacking Village',
        'BlackHat Arsenal',
        'Secure Our Streets (SOS)',
        'C0c0n',
        'NullCon'
      ],
      socialMedia: {
        twitter: 'https://twitter.com/0xh3nry',
        linkedin: 'https://www.linkedin.com/in/kartheeklade/'
      },
      keyTraits: [
        'Passionate security researcher',
        'IoV security focus',
        'Regular international speaker',
        'Always up for challenges'
      ]
    },
    // Core Team Members
    {
      name: 'Pankaj Upadhyay',
      image: 'team-photos/Pankaj_Upadhyay.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/lazyhack3r',
        linkedin: 'https://www.linkedin.com/in/p4nk4j/'
      }
    },
    {
      name: 'Arun Mishra',
      image: 'team-photos/Arun_Mishra.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/arun_2512',
        linkedin: 'https://www.linkedin.com/in/arun-k-mishra-049836163/'
      }
    },
    {
      name: 'Honey Merrin Sam',
      image: 'team-photos/Honey_Merrin_Sam.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/missaug27',
        linkedin: 'https://www.linkedin.com/in/honey-merrin-sam/'
      }
    },
    {
      name: 'Narendra',
      image: 'team-photos/Narendra_Team.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/0ddhawk',
        linkedin: 'https://www.linkedin.com/in/narendra-k-0981b7104/'
      }
    },
    {
      name: 'Parag Dave',
      image: 'team-photos/Parag_Dave.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/parag_dave',
        linkedin: 'https://www.linkedin.com/in/daveparag/'
      }
    },
    {
      name: 'Sunita Sharma',
      image: 'team-photos/sunita.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/0ddblade',
        linkedin: 'https://www.linkedin.com/in/sunita-sharma-681bbba2/'
      }
    },
    {
      name: 'Ashish Huria',
      image: 'team-photos/ashish.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/AshishHuria',
        linkedin: 'https://www.linkedin.com/in/ashish-huria-219b49111/'
      }
    },
    {
      name: 'Devendra Kumar Sinha',
      image: 'team-photos/Devendra_Kumar_Sinha.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/Debuhkzr',
        linkedin: 'https://www.linkedin.com/in/devendrakumarsinha/'
      }
    },
    {
      name: 'Rahul Kumar',
      image: 'team-photos/Rahul_Kumar.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/aarnav_rahul',
        linkedin: 'https://www.linkedin.com/in/rahul-kumar-/'
      }
    },
    {
      name: 'Anurag Mishra',
      image: 'team-photos/Anurag_Mishra.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/mishr_a_nurag',
        linkedin: 'https://www.linkedin.com/in/anuragmishra06/'
      }
    },
    {
      name: 'Shivam Goyal',
      image: 'team-photos/Shivam_Goyal.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/g33kyshivam',
        linkedin: 'https://www.linkedin.com/in/g33kyshivam/'
      }
    },
    {
      name: 'Pulkit Talwar',
      image: 'team-photos/Pulkit_Talwar.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://x.com/PulkitTalwar26',
        linkedin: 'https://www.linkedin.com/in/pulkit-talwar-397636120/'
      }
    },
    {
      name: 'Hare Krishna Rai',
      image: 'team-photos/Hare_Krishna_Rai.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/harekrishna_rai',
        linkedin: 'https://linkedin.com/in/harekrishnarai'
      }
    },
    {
      name: 'Vedant Jain',
      image: 'team-photos/Vedant_Jain.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://x.com/Vedant__Jain',
        linkedin: 'https://www.linkedin.com/in/ved-ant-jain'
      }
    },
    {
      name: 'Gaurav Joshi',
      image: 'team-photos/Gaurav_Joshi.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/gaurav_joshi38'
      }
    },
    {
      name: 'Fazalu Rahman',
      image: 'team-photos/Fazalu_Rahman.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/f4z41u?s=20',
        linkedin: 'https://www.linkedin.com/in/fazalu-rahman/'
      }
    },
    {
      name: 'Arif',
      image: 'team-photos/Arif.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/Zero0x00',
        linkedin: 'https://www.linkedin.com/in/mohd--arif/'
      }
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'story':
        return (
          <div className="space-y-4 text-base md:text-lg">
            <p>
              Seasides Information Security Conference is a leading conference dedicated to empowering students and
              professionals in the field of information security and ethical hacking.
            </p>
            <p>
              Our conference is designed to provide high-quality educational experiences and hands-on training at no
              cost, ensuring that everyone, regardless of their financial background, has the opportunity to enhance
              their skills and knowledge in cybersecurity.
            </p>
          </div>
        );
      case 'mission':
        return (
          <div className="space-y-4 text-base md:text-lg">
            <p>
              Our mission is to democratize access to top-tier cybersecurity education by offering free workshops and
              training sessions led by industry experts along with fun and parties.
            </p>
            <p>
              We strive to create an inclusive environment where students and aspiring professionals can learn,
              collaborate, and grow together, equipping them with the tools they need to succeed in the rapidly evolving
              cybersecurity landscape.
            </p>
          </div>
        );
      case 'achieved':
        return (
          <div className="space-y-4 text-base md:text-lg">
            <p>
              Since our inception, Seasides's commitment to providing free, high-quality education has made a
              significant impact on the cybersecurity community, particularly among students. Key achievements:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Record-breaking Attendance</li>
              <li>Cutting-edge Workshops and Training</li>
              <li>Advancing Cybersecurity Education</li>
              <li>Scholarships and Awards</li>
              <li>Community Building and Networking</li>
            </ul>
          </div>
        );
      case 'attend':
        return (
          <div className="space-y-4 text-base md:text-lg">
            <p>
              Whether you're a professional or just starting your journey in cybersecurity, this conference is designed
              for everyone passionate about protecting the digital world.
            </p>
            <p className="font-semibold">Target Audience:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>IT & Cybersecurity Professionals</li>
              <li>Government officials & policy makers</li>
              <li>Business leaders & entrepreneurs</li>
              <li>Students & researchers interested in cybersecurity</li>
              <li>Guilty as charged—we throw epic parties!</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className={`${isDark ? 'bg-slate-900 text-white' : 'bg-white text-gray-900'}`}>
      <section className="relative flex flex-col justify-center items-center text-center py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-900 animate-[gradientMove_15s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl shadow-black/50">
            About Seasides
          </h1>
          <p className="text-lg md:text-xl text-white font-medium drop-shadow-lg shadow-black/50 backdrop-blur-sm bg-white/10 rounded-lg p-4">
            Empowering students and professionals in the field of information security and ethical hacking.
          </p>
        </div>
      </section>

      {/* Sections */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {sections.map(({ key, title }) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 border-2 ${
                activeSection === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-600 shadow-lg transform scale-105'
                  : isDark
                    ? 'bg-slate-800 text-gray-200 border-slate-600 hover:bg-slate-700 hover:border-blue-500 hover:text-blue-300'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 shadow-sm'
              }`}
            >
              {title}
            </button>
          ))}
        </div>

        <div className="mb-12">{renderContent()}</div>

        {/* Quick Links Section */}
        <div className="mb-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient-fallback">Quick Links</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/faq"
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border-2 shadow-lg ${
                isDark
                  ? 'bg-gradient-to-r from-slate-700 to-slate-800 text-white border-slate-600 hover:from-blue-700 hover:to-purple-700 hover:border-blue-500'
                  : 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200 hover:from-blue-100 hover:to-purple-100 hover:border-blue-400'
              }`}
            >
              <HelpCircle size={22} />
              Frequently Asked Questions
            </Link>
          </div>
        </div>

        {/* Team Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-fallback">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedMember(member)}
              className={`p-6 rounded-2xl shadow-xl flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 ${
                isDark
                  ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-600 hover:border-blue-500 hover:from-slate-700 hover:to-slate-800'
                  : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-300 hover:from-blue-50 hover:to-purple-50'
              }`}
              style={{ minHeight: '320px' }}
            >
              <div className="w-32 h-32 relative mb-4">
                <Image src={`/${member.image}`} alt={member.name} fill className="rounded-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gradient-fallback">{member.name}</h3>
              <p className={`text-sm font-medium mt-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{member.role}</p>
              {member.quote && (
                <p className={`mt-3 text-sm italic font-medium ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>
                  {member.quote}
                </p>
              )}
              <div className="flex gap-4 mt-4">
                {member.socialMedia?.twitter && (
                  <a
                    href={member.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                      isDark
                        ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/30'
                        : 'text-gray-600 hover:text-blue-500 hover:bg-blue-100'
                    }`}
                  >
                    <Twitter size={22} />
                  </a>
                )}
                {member.socialMedia?.linkedin && (
                  <a
                    href={member.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                      isDark
                        ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/30'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-100'
                    }`}
                  >
                    <Linkedin size={22} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className={`rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] p-8 overflow-y-auto relative border-2 ${
              isDark
                ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-600'
                : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
            }`}
            onClick={e => e.stopPropagation()}
          >
            <button
              className={`absolute top-6 right-6 p-2 rounded-full font-bold text-xl transition-all duration-200 hover:scale-110 ${
                isDark
                  ? 'text-gray-300 hover:text-white hover:bg-red-600/20'
                  : 'text-gray-600 hover:text-red-600 hover:bg-red-100'
              }`}
              onClick={() => setSelectedMember(null)}
            >
              &times;
            </button>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-40 h-40 relative flex-shrink-0 mx-auto md:mx-0">
                <Image
                  src={`/${selectedMember.image}`}
                  alt={selectedMember.name}
                  fill
                  className="rounded-full object-cover border-4 border-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gradient-fallback">{selectedMember.name}</h3>
                {selectedMember.nickname && (
                  <p className={`text-base mt-1 italic font-medium ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>
                    "{selectedMember.nickname}"
                  </p>
                )}
                <p className={`text-base font-semibold mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {selectedMember.role}
                </p>
                {selectedMember.experience && (
                  <p className="mt-1 text-sm font-semibold">Experience: {selectedMember.experience}</p>
                )}
                {selectedMember.currentCompany && (
                  <p className="mt-1 text-sm font-semibold">Company: {selectedMember.currentCompany}</p>
                )}
                {selectedMember.fullDescription && (
                  <p className="mt-4 text-sm md:text-base">{selectedMember.fullDescription}</p>
                )}
                {selectedMember.keyTraits && (
                  <ul className="mt-4 list-disc list-inside space-y-1">
                    {selectedMember.keyTraits.map((trait, idx) => (
                      <li key={idx}>{trait}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

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

        @keyframes waveBounce {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-5%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-waveBounce {
          animation: waveBounce 12s ease-in-out infinite;
        }
      `}</style>

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
    </section>
  );
};

export default About;
