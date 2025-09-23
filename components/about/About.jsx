'use client';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';
import { colors, gradients, shadows } from '@/lib/colors';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const sectionRef = useRef(null);
  const { isDark } = useTheme();
  const [activeSection, setActiveSection] = useState('story');
  const [hoveredCard, setHoveredCard] = useState(null);

  const sections = {
    story: {
      title: 'How are we?',
      subtitle: "What's our Story ?",
      content:
        'Seasides Information Security Conference is a leading conference dedicated to empowering students and professionals in the field of information security and ethical hacking.\n\nOur conference is designed to provide high-quality educational experiences and hands-on training at no cost, ensuring that everyone, regardless of their financial background, has the opportunity to enhance their skills and knowledge in cybersecurity.'
    },
    mission: {
      title: 'Democratizing Cybersecurity',
      subtitle: "What's our Mission ?",
      content:
        'Our mission is to democratize access to top-tier cybersecurity education by offering free workshops and training sessions led by industry experts along with fun and parties.\n\nWe strive to create an inclusive environment where students and aspiring professionals can learn, collaborate, and grow together, equipping them with the tools they need to succeed in the rapidly evolving cybersecurity landscape.\n\nJoin us for three days of insightful keynote speeches, technical sessions, hands-on workshops, and networking opportunities, as we address the most critical challenges in cybersecurity today.'
    },
    achievements: {
      title: 'Empowering the Future',
      subtitle: 'What we Achieved ?',
      content:
        "Since our inception, Seasides's commitment to providing free, high-quality education has made a significant impact on the cybersecurity community, particularly among students.\n\nHere's a look at the key achievements from past conferences:",
      keyAchievements: [
        'Record-breaking Attendance',
        'Cutting-edge Workshops and Training',
        'Advancing Cybersecurity Education',
        'Scholarships and Awards',
        'Community Building and Networking'
      ],
      conclusion:
        'We take pride in fostering a supportive environment where talent can flourish and where attendees leave inspired and equipped to tackle the challenges of the cybersecurity field.'
    },
    attend: {
      title: 'Join the Cyber Revolution',
      subtitle: 'Who should Attend ?',
      description:
        "Whether you're a professional or just starting your journey in cybersecurity, this conference is designed for everyone passionate about protecting the digital world.",
      targetAudience: [
        'IT & Cybersecurity Professionals',
        'Government officials & policy makers',
        'Business leaders & entrepreneurs',
        'Students & researchers interested in cybersecurity'
      ],
      eventHighlights: [
        { title: 'Free Workshops', description: 'Hands-on sessions by top experts.' },
        { title: 'Networking', description: 'Connect with peers and mentors.' },
        { title: 'Career Growth', description: 'Discover opportunities and insights.' },
        { title: 'Community', description: 'Join a collaborative learning space.' },
        { title: 'Trends & Threats', description: 'Stay updated on latest cyber issues.' },
        { title: 'After Party', description: 'Relax, network, and celebrate!' }
      ],
      partyNote: 'Guilty as charged—we throw epic parties!'
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: 'Prashant KV',
      image: 'Prashant_KV.jpeg',
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
      image: 'Parveen_Yadav.jpeg',
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
      image: 'Abhinav_Khanna.jpeg',
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
      image: 'seedon.jpeg',
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
      image: 'Karteek.jpeg',
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
    {
      name: 'Pankaj Upadhyay',
      image: 'Pankaj_Upadhyay.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/lazyhack3r',
        linkedin: 'https://www.linkedin.com/in/p4nk4j/'
      }
    },
    {
      name: 'Arun Mishra',
      image: 'Arun_Mishra.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/arun_2512',
        linkedin: 'https://www.linkedin.com/in/arun-k-mishra-049836163/'
      }
    },
    {
      name: 'Honey Merrin Sam',
      image: 'Honey_Merrin_Sam.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/missaug27',
        linkedin: 'https://www.linkedin.com/in/honey-merrin-sam/'
      }
    },
    {
      name: 'Narendra',
      image: 'Narendra_Team.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/0ddhawk',
        linkedin: 'https://www.linkedin.com/in/narendra-k-0981b7104/'
      }
    },
    {
      name: 'Parag Dave',
      image: 'Parag_Dave.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/parag_dave',
        linkedin: 'https://www.linkedin.com/in/daveparag/'
      }
    },
    {
      name: 'Sunita Sharma',
      image: 'sunita.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/0ddblade',
        linkedin: 'https://www.linkedin.com/in/sunita-sharma-681bbba2/'
      }
    },
    {
      name: 'Ashish Huria',
      image: 'ashish.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/AshishHuria',
        linkedin: 'https://www.linkedin.com/in/ashish-huria-219b49111/'
      }
    },
    {
      name: 'Devendra Kumar Sinha',
      image: 'Devendra_Kumar_Sinha.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/Debuhkzr',
        linkedin: 'https://www.linkedin.com/in/devendrakumarsinha/'
      }
    },
    {
      name: 'Rahul Kumar',
      image: 'Rahul_Kumar.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/aarnav_rahul',
        linkedin: 'https://www.linkedin.com/in/rahul-kumar-/'
      }
    },
    {
      name: 'Anurag Mishra',
      image: 'Anurag_Mishra.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/mishr_a_nurag',
        linkedin: 'https://www.linkedin.com/in/anuragmishra06/'
      }
    },
    {
      name: 'Shivam Goyal',
      image: 'Shivam_Goyal.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/g33kyshivam',
        linkedin: 'https://www.linkedin.com/in/g33kyshivam/'
      }
    },
    {
      name: 'Pulkit Talwar',
      image: 'Pulkit_Talwar.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://x.com/PulkitTalwar26',
        linkedin: 'https://www.linkedin.com/in/pulkit-talwar-397636120/'
      }
    },
    {
      name: 'Hare Krishna Rai',
      image: 'Hare_Krishna_Rai.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/harekrishna_rai',
        linkedin: 'https://linkedin.com/in/harekrishnarai'
      }
    },
    {
      name: 'Vedant Jain',
      image: 'Vedant_Jain.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://x.com/Vedant__Jain',
        linkedin: 'https://www.linkedin.com/in/ved-ant-jain'
      }
    },
    {
      name: 'Gaurav Joshi',
      image: 'Gaurav_Joshi.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/gaurav_joshi38'
      }
    },
    {
      name: 'Fazalu Rahman',
      image: 'Fazalu_Rahman.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/f4z41u?s=20',
        linkedin: 'https://www.linkedin.com/in/fazalu-rahman/'
      }
    },
    {
      name: 'Arif',
      image: 'Arif.jpeg',
      role: 'Core Team Member',
      socialMedia: {
        twitter: 'https://twitter.com/Zero0x00',
        linkedin: 'https://www.linkedin.com/in/mohd--arif/'
      }
    }
  ];

  const TeamMemberModal = ({ member, onClose }) => {
    if (!member) {
      return null;
    }

    return (
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className={`max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-2xl shadow-2xl ${
            isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
          }`}
          onClick={e => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex items-start gap-4 mb-6">
              {member.image && (
                <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-blue-500/30">
                  <Image src={`/team-photos/${member.image}`} alt={member.name} fill className="object-cover" />
                </div>
              )}
              <div className="flex-1">
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {member.name}
                  {member.nickname && (
                    <span className="text-lg font-medium text-blue-500 ml-2">&quot;{member.nickname}&quot;</span>
                  )}
                </h2>
                <p className={`text-lg ${isDark ? 'text-sunset-orange' : 'text-blue-600'}`}>{member.role}</p>
                {member.experience && (
                  <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                    {member.experience} experience
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                className={`p-2 rounded-full transition-colors ${
                  isDark ? 'hover:bg-slate-700 text-slate-400' : 'hover:bg-gray-100 text-gray-500'
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {member.quote && (
              <blockquote
                className={`mb-6 p-4 rounded-lg border-l-4 ${
                  isDark ? 'bg-slate-700/50 border-cyan-400 text-cyan-100' : 'bg-blue-50 border-blue-400 text-blue-800'
                }`}
              >
                <p className="italic text-lg">&quot;{member.quote}&quot;</p>
              </blockquote>
            )}

            {member.fullDescription && (
              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>About</h3>
                <p className={`leading-relaxed ${isDark ? 'text-slate-200' : 'text-gray-700'}`}>
                  {member.fullDescription}
                </p>
              </div>
            )}

            {member.expertise && (
              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDark
                          ? 'bg-blue-900/50 text-blue-300 border border-blue-700'
                          : 'bg-blue-100 text-blue-800 border border-blue-200'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {member.socialMedia && (
              <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-slate-600">
                {member.socialMedia.twitter && (
                  <a
                    href={member.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    Twitter
                  </a>
                )}
                {member.socialMedia.linkedin && (
                  <a
                    href={member.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-700 hover:text-blue-800 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      ref={sectionRef}
      className={`transition-colors duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
            style={{ backgroundColor: colors.sunsetOrange }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-6 blur-3xl animate-pulse"
            style={{ backgroundColor: colors.deepOceanBlue, animationDelay: '1s' }}
          />
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block mb-6">
              <span
                className={`font-semibold text-lg px-4 py-2 rounded-full ${
                  isDark ? 'bg-orange-900/20' : 'bg-blue-900/10'
                }`}
                style={{
                  color: isDark ? colors.sunsetOrange : colors.deepOceanBlue
                }}
              >
                About Seasides
              </span>
            </div>

            <h1
              className={`text-6xl md:text-7xl font-black mb-8 leading-tight ${isDark ? 'text-white' : ''}`}
              style={{
                color: isDark ? colors.white : colors.deepOceanBlue
              }}
            >
              India&apos;s Premier
              <span className="block" style={{ color: colors.sunsetOrange }}>
                FREE Cybersecurity
              </span>
              Conference
            </h1>

            <div
              className="w-48 h-2 mx-auto rounded-full shadow-lg mb-12"
              style={{ background: gradients.warmSunset }}
            />

            <p
              className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}
            >
              Empowering the next generation of cybersecurity professionals through
              <span className="font-bold" style={{ color: colors.sunsetOrange }}>
                {' '}
                world-class education
              </span>
              ,
              <span className={`font-bold`} style={{ color: isDark ? '#60a5fa' : colors.deepOceanBlue }}>
                {' '}
                hands-on training
              </span>
              , and
              <span className={`font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}> community building</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Sections */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Navigation */}
            <div className="flex justify-center mb-16">
              <div
                className="flex gap-2 p-2 rounded-full"
                style={{ backgroundColor: isDark ? colors.charcoalGray + '30' : colors.lightGray }}
              >
                {Object.keys(sections).map(key => (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm ${
                      activeSection === key
                        ? 'text-white shadow-lg transform scale-105'
                        : isDark
                          ? 'text-gray-300 hover:text-white'
                          : 'text-gray-600 hover:text-gray-900'
                    }`}
                    style={{
                      background: activeSection === key ? gradients.warmSunset : 'transparent'
                    }}
                  >
                    {sections[key].subtitle}
                  </button>
                ))}
              </div>
            </div>

            {/* Story Section */}
            {activeSection === 'story' && (
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <h2 className={`text-4xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {sections.story.title}
                    <span className="block text-2xl font-semibold mt-2" style={{ color: colors.sunsetOrange }}>
                      {sections.story.subtitle}
                    </span>
                  </h2>
                  <div className={`text-lg leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    {sections.story.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Interactive Timeline */}
                <div className="relative">
                  <div className="space-y-8">
                    {[
                      { year: '2019', title: 'Foundation', desc: 'Born from passion' },
                      { year: '2020', title: 'Growth', desc: 'Community expansion' },
                      { year: '2021', title: 'Innovation', desc: 'Virtual excellence' },
                      { year: '2022', title: 'Impact', desc: 'Thousands reached' },
                      { year: '2023', title: 'Excellence', desc: 'Industry recognition' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-6 group cursor-pointer">
                        <div className="relative">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-110"
                            style={{ background: gradients.deepOceanDepth }}
                          >
                            {item.year.slice(-2)}
                          </div>
                          {index < 4 && (
                            <div
                              className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-8"
                              style={{ backgroundColor: colors.sunsetOrange + '40' }}
                            />
                          )}
                        </div>
                        <div
                          className={`flex-1 p-4 rounded-lg transition-all duration-300 group-hover:shadow-lg ${
                            isDark ? 'bg-gray-800/60 group-hover:bg-gray-800/80' : 'bg-white group-hover:bg-gray-50'
                          }`}
                        >
                          <h4 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {item.year} - {item.title}
                          </h4>
                          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Mission Section */}
            {activeSection === 'mission' && (
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <h2 className={`text-4xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {sections.mission.title}
                    <span className="block text-2xl font-semibold mt-2" style={{ color: colors.sunsetOrange }}>
                      {sections.mission.subtitle}
                    </span>
                  </h2>
                  <div className={`text-lg leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    {sections.mission.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Interactive Mission Icons */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Education',
                      desc: 'Free quality training',
                      icon: (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      )
                    },
                    {
                      title: 'Community',
                      desc: 'Building connections',
                      icon: (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      )
                    },
                    {
                      title: 'Innovation',
                      desc: 'Cutting-edge content',
                      icon: (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      )
                    },
                    {
                      title: 'Fun',
                      desc: 'Epic parties included!',
                      icon: (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9 5a9 9 0 1118 0 21 21 0 01-18 0z"
                          />
                        </svg>
                      )
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-xl text-center transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl ${
                        isDark ? 'bg-gray-800/60 hover:bg-gray-800/80' : 'bg-white hover:bg-gray-50'
                      }`}
                      style={{ boxShadow: shadows.cardShadow }}
                    >
                      <div className="mb-4 flex justify-center" style={{ color: colors.sunsetOrange }}>
                        {item.icon}
                      </div>
                      <h4 className={`font-bold text-lg mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {item.title}
                      </h4>
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Achievements Section */}
            {activeSection === 'achievements' && (
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <h2 className={`text-4xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {sections.achievements.title}
                    <span className="block text-2xl font-semibold mt-2" style={{ color: colors.sunsetOrange }}>
                      {sections.achievements.subtitle}
                    </span>
                  </h2>
                  <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    {sections.achievements.content}
                  </p>
                  <div className="space-y-4">
                    {sections.achievements.keyAchievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: colors.sunsetOrange }}
                        >
                          {index + 1}
                        </div>
                        <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{achievement}</span>
                      </div>
                    ))}
                  </div>
                  <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    {sections.achievements.conclusion}
                  </p>
                </div>

                {/* Interactive Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: '5000+', label: 'Students Trained', progress: 90 },
                    { number: '50+', label: 'Expert Speakers', progress: 75 },
                    { number: '3', label: 'Days of Learning', progress: 100 },
                    { number: '100%', label: 'Free Content', progress: 100 }
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-xl text-center transition-all duration-500 ${
                        isDark ? 'bg-gray-800/60' : 'bg-white'
                      }`}
                      style={{ boxShadow: shadows.cardShadow }}
                    >
                      <div className="text-3xl font-black mb-2" style={{ color: colors.deepOceanBlue }}>
                        {stat.number}
                      </div>
                      <div className={`text-sm font-medium mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {stat.label}
                      </div>
                      <div className={`w-full h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${stat.progress}%`,
                            background: gradients.warmSunset
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Attend Section */}
            {activeSection === 'attend' && (
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-6">
                  <h2 className={`text-4xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {sections.attend.title}
                    <span className="block text-2xl font-semibold mt-2" style={{ color: colors.sunsetOrange }}>
                      {sections.attend.subtitle}
                    </span>
                  </h2>
                  <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    {sections.attend.description}
                  </p>

                  <div className="space-y-4">
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Target Audience:</h3>
                    {sections.attend.targetAudience.map((audience, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full" style={{ backgroundColor: colors.deepOceanBlue }} />
                        <span className={`${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{audience}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    className={`p-4 rounded-lg text-center font-medium ${
                      isDark ? 'bg-orange-900/20' : 'bg-orange-100'
                    }`}
                    style={{ color: colors.sunsetOrange }}
                  >
                    {sections.attend.partyNote}
                  </div>
                </div>

                {/* Interactive Event Highlights */}
                <div className="grid grid-cols-2 gap-4">
                  {sections.attend.eventHighlights.map((highlight, index) => {
                    const icons = [
                      // Free Workshops
                      <svg key="workshops" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>,
                      // Networking
                      <svg key="networking" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>,
                      // Career Growth
                      <svg key="career" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>,
                      // Community
                      <svg key="community" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                        />
                      </svg>,
                      // Trends & Threats
                      <svg key="trends" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>,
                      // After Party
                      <svg key="party" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9 5a9 9 0 1118 0 21 21 0 01-18 0z"
                        />
                      </svg>
                    ];

                    return (
                      <div
                        key={index}
                        className={`p-6 rounded-xl text-center transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                          hoveredCard === index ? 'shadow-2xl' : 'shadow-lg'
                        } ${isDark ? 'bg-gray-800/60 hover:bg-gray-800/80' : 'bg-white hover:bg-gray-50'}`}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                        style={{
                          boxShadow: hoveredCard === index ? `0 20px 40px ${colors.sunsetOrange}20` : shadows.cardShadow
                        }}
                      >
                        <div className="mb-4 flex justify-center" style={{ color: colors.deepOceanBlue }}>
                          {icons[index]}
                        </div>
                        <h4 className={`font-bold text-lg mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {highlight.title}
                        </h4>
                        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {highlight.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`py-24 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-5xl font-black mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                THE TEAM
                <span className="block text-3xl font-semibold mt-2" style={{ color: colors.sunsetOrange }}>
                  Meet the Visionaries
                </span>
              </h2>

              <p className={`text-xl leading-relaxed max-w-4xl mx-auto ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                The passionate individuals who make Seasides possible, bringing together decades of experience in
                cybersecurity, education, and community building.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedMember(member)}
                  className={`cursor-pointer group relative transition-all duration-300 transform hover:scale-105 ${
                    isDark
                      ? 'bg-gray-700/60 hover:bg-gray-700/80 shadow-lg hover:shadow-xl'
                      : 'bg-white hover:bg-white/90 shadow-lg hover:shadow-xl'
                  } p-8 rounded-2xl backdrop-blur-sm`}
                >
                  <div
                    className={`relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-full ring-4 transition-all duration-300 ${
                      member.nickname === 'Sardaar Khan'
                        ? 'group-hover:ring-yellow-500/70'
                        : member.nickname === 'Munna Bhaiya'
                          ? 'group-hover:ring-red-500/70'
                          : 'group-hover:ring-blue-500/50'
                    }`}
                    style={{
                      boxShadow: shadows.cardShadow,
                      borderColor:
                        member.nickname === 'Sardaar Khan'
                          ? colors.sunnyYellow + '50'
                          : member.nickname === 'Munna Bhaiya'
                            ? '#ef444450'
                            : colors.deepOceanBlue + '30'
                    }}
                  >
                    {member.image ? (
                      <Image
                        src={`/team-photos/${member.image}`}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="192px"
                      />
                    ) : (
                      <div
                        className={`w-full h-full flex items-center justify-center text-3xl font-bold ${
                          isDark ? 'bg-slate-700 text-slate-300' : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {member.name
                          .split(' ')
                          .map(n => n[0])
                          .join('')}
                      </div>
                    )}
                  </div>
                  <h4
                    className={`font-semibold text-lg mb-2 transition-colors duration-300 text-center ${
                      member.nickname === 'Sardaar Khan'
                        ? isDark
                          ? 'text-yellow-300 group-hover:text-yellow-200'
                          : 'text-yellow-600 group-hover:text-yellow-700'
                        : member.nickname === 'Munna Bhaiya'
                          ? isDark
                            ? 'text-red-300 group-hover:text-red-200'
                            : 'text-red-600 group-hover:text-red-700'
                          : isDark
                            ? 'text-white'
                            : 'text-slate-800'
                    }`}
                    style={{
                      color:
                        member.nickname === 'Sardaar Khan' || member.nickname === 'Munna Bhaiya'
                          ? undefined
                          : isDark
                            ? colors.white
                            : colors.charcoalGray
                    }}
                  >
                    {member.name}
                    {member.nickname && (
                      <span
                        className={`block text-base font-normal`}
                        style={{
                          color:
                            member.nickname === 'Sardaar Khan'
                              ? colors.sunnyYellow
                              : member.nickname === 'Munna Bhaiya'
                                ? '#ef4444'
                                : colors.deepOceanBlue
                        }}
                      >
                        &quot;{member.nickname}&quot;
                      </span>
                    )}
                  </h4>
                  <p
                    className={`text-sm transition-colors duration-300 text-center mb-4 ${
                      isDark ? 'text-slate-400 group-hover:text-slate-300' : 'text-slate-500 group-hover:text-slate-700'
                    }`}
                  >
                    {member.role}
                  </p>

                  {/* Social Media Buttons */}
                  <div className="flex justify-center gap-2 mb-4">
                    {member.socialMedia?.linkedin && (
                      <a
                        href={member.socialMedia.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{ backgroundColor: colors.deepOceanBlue }}
                        onClick={e => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                    {member.socialMedia?.twitter && (
                      <a
                        href={member.socialMedia.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{ backgroundColor: colors.sunsetOrange }}
                        onClick={e => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Learn More Button */}
                  <button
                    className="w-full py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{
                      background: gradients.warmSunset,
                      color: colors.white,
                      boxShadow: shadows.buttonShadow
                    }}
                    onClick={() => setSelectedMember(member)}
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      <TeamMemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  );
};

export default About;
