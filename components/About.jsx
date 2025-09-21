'use client';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const sectionRef = useRef(null);
  const { isDark } = useTheme();

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
      "name": "Prashant KV",
      "image": "Prashant_KV.jpeg",
      "role": "Co-Founder Seasides",
      "nickname": "Sardaar Khan",
      "quote": "Guilty as charged—we throw epic parties! 😉",
      "fullDescription": "He is the Co-Founder of the Seasides Community, known for his passion for helping others and, guilty as charged, for throwing amazing parties. With over 20 years of experience in the security domain, he has mentored countless cybersecurity enthusiasts and is like family to many. The team lovingly calls him the 'Sardaar Khan.'",
      "experience": "20+ years",
      "socialMedia": {
        "twitter": "https://twitter.com/goodbestguy",
        "linkedin": "https://www.linkedin.com/in/prashant-venkatesh-99018999"
      },
      "keyTraits": [
        "Passionate about helping others",
        "Amazing party organizer",
        "Mentor to countless cybersecurity enthusiasts",
        "Like family to many in the community"
      ]
    },
    {
      "name": "Parveen Yadav",
      "image": "Parveen_Yadav.jpeg",
      "role": "Co-Founder Seasides",
      "nickname": "Munna Bhaiya",
      "fullDescription": "As the Co-Founder of Seasides, he embodies the essence of leadership through his genuine care for the team, fostering an environment where every member feels valued and supported—like family. His leadership style is characterized by empathy and accessibility, making him approachable for team members seeking guidance or mentorship. With extensive expertise in cybersecurity, he not only stays at the forefront of industry trends but also actively engages in the community through bug hunting on major platforms like Hackerone & Bugcrowd. This hands-on involvement not only keeps his skills sharp but also serves as an inspiring example for the team, demonstrating the importance of continuous learning and innovation. His commitment to nurturing newcomers in cybersecurity reflects his passion for mentorship. He takes the time to guide them through the complexities of the field, sharing insights and resources that empower them to thrive. This investment in their growth helps cultivate a culture of knowledge-sharing and collaboration within the team. Affectionately referred to as \"Munna Bhaiya,\" he has created an undeniable presence that resonates with the team.",
      "expertise": ["Bug Hunting", "Vulnerability Research", "Team Leadership", "Mentorship"],
      "platforms": ["Hackerone", "Bugcrowd"],
      "socialMedia": {
        "twitter": "https://twitter.com/parveen1015"
      },
      "keyTraits": [
        "Leadership through genuine care",
        "Empathy and accessibility",
        "Active bug hunter",
        "Passionate mentor for newcomers",
        "Culture of knowledge-sharing"
      ]
    },
    {
      "name": "Abhinav Khanna",
      "image": "Abhinav_Khanna.jpeg",
      "role": "Information Security Professional",
      "fullDescription": "Abhinav Khanna is an Information Security Professional with 6+ years of experience. His areas of expertise include web apps, mobile apps, APIs and cloud. He has spoken at conferences like BlackHat Asia, BlackHat MEA, BSides Vancouver etc. He is always eager to help and guide others in the field, sharing his knowledge and experience to support the growth of fellow security enthusiasts. His dedication to both advancing security practices and nurturing the next generation of professionals is widely recognized within the community.",
      "experience": "6+ years",
      "expertise": ["Web Applications", "Mobile Applications", "APIs", "Cloud Security"],
      "conferences": ["BlackHat Asia", "BlackHat MEA", "BSides Vancouver"],
      "socialMedia": {
        "linkedin": "https://www.linkedin.com/in/abhinav-khanna-a2633b114/"
      },
      "keyTraits": [
        "Eager to help and guide others",
        "Knowledge sharing advocate",
        "Supports growth of security enthusiasts",
        "Recognized community contributor"
      ]
    },
    {
      "name": "Seedon Adlin D'souza",
      "image": "seedon.jpeg",
      "role": "Hardware Security Expert",
      "fullDescription": "He is a distinguished hardware security expert with over seven years of experience in the field of information security. Since 2019, he has been a prominent speaker at various conferences, where he shares his expertise in drone security, RF hacking and hardware exploitation. Currently employed at Sony, Seedon is recognised for his collaborative spirit, having contributed to the design of conference badges and the village at Seasides. His dedication to advancing the cybersecurity community is evident in his continuous effort to share knowledge and foster innovation.",
      "experience": "7+ years",
      "currentCompany": "Sony",
      "expertise": ["Hardware Security", "Drone Security", "RF Hacking", "Hardware Exploitation"],
      "speakingExperience": "Since 2019",
      "contributions": ["Conference Badge Design", "Village Design"],
      "socialMedia": {
        "twitter": "https://x.com/SeedonD",
        "linkedin": "https://www.linkedin.com/in/seedon/"
      },
      "keyTraits": [
        "Distinguished hardware security expert",
        "Prominent conference speaker",
        "Collaborative spirit",
        "Continuous knowledge sharing",
        "Innovation fostering"
      ]
    },
    {
      "name": "Kartheek Lade",
      "image": "Karteek.jpeg",
      "role": "Security Researcher",
      "fullDescription": "Kartheek Lade is a passionate security researcher with a strong focus on enhancing the security landscape of the Internet of Vehicles (IoV). He actively contributes to the Seasides community and serves as a technical committee member of the ASRG Vulnerability Management team, focusing on fortifying vehicle and embedded security. Kartheek is also a regular speaker and trainer at renowned international security conferences, including Seasides, DEFCON Car Hacking Village, BlackHat Arsenal, Secure Our Streets (SOS), C0c0n, and NullCon. Whether it's breaking down security barriers or sparking insightful discussions, he's always up for the challenge. 😉",
      "expertise": ["Internet of Vehicles (IoV)", "Vehicle Security", "Embedded Security", "Vulnerability Management"],
      "roles": ["ASRG Technical Committee Member"],
      "conferences": ["Seasides", "DEFCON Car Hacking Village", "BlackHat Arsenal", "Secure Our Streets (SOS)", "C0c0n", "NullCon"],
      "socialMedia": {
        "twitter": "https://twitter.com/0xh3nry",
        "linkedin": "https://www.linkedin.com/in/kartheeklade/"
      },
      "keyTraits": [
        "Passionate security researcher",
        "IoV security focus",
        "Regular international speaker",
        "Always up for challenges"
      ]
    },
    {
      "name": "Pankaj Upadhyay",
      "image": "Pankaj_Upadhyay.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "https://twitter.com/lazyhack3r",
        "linkedin": "https://www.linkedin.com/in/p4nk4j/"
      }
    },
    {
      "name": "Arun Mishra",
      "image": "Arun_Mishra.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "https://twitter.com/arun_2512",
        "linkedin": "https://www.linkedin.com/in/arun-k-mishra-049836163/"
      }
    },
    {
      "name": "Honey Merrin Sam",
      "image": "Honey_Merrin_Sam.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "https://twitter.com/missaug27",
        "linkedin": "https://www.linkedin.com/in/honey-merrin-sam/"
      }
    },
    {
      "name": "Narendra",
      "image": "Narendra_Team.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "https://twitter.com/0ddhawk",
        "linkedin": "https://www.linkedin.com/in/narendra-k-0981b7104/"
      }
    },
    {
      "name": "Parag Dave",
      "image": "Parag_Dave.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "https://twitter.com/parag_dave",
        "linkedin": "https://www.linkedin.com/in/daveparag/"
      }
    },
    {
      "name": "Sunita Sharma",
      "image": "sunita.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "https://twitter.com/0ddblade",
        "linkedin": "https://www.linkedin.com/in/sunita-sharma-681bbba2/"
      }
    },
    {
      "name": "Ashish Huria",
      "image": "ashish.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "https://twitter.com/AshishHuria",
        "linkedin": "https://www.linkedin.com/in/ashish-huria-219b49111/"
      }
    },
    {
      "name": "Devendra Kumar Sinha",
      "image": "Devendra_Kumar_Sinha.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "https://twitter.com/Debuhkzr",
        "linkedin": "https://www.linkedin.com/in/devendrakumarsinha/"
      }
    },
    {
      "name": "Rahul Kumar",
      "image": "Rahul_Kumar.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "",
        "linkedin": ""
      }
    },
    {
      "name": "Anurag Mishra",
      "image": "Anurag_Mishra.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "",
        "linkedin": ""
      }
    },
    {
      "name": "Shivam Goyal",
      "image": "Shivam_Goyal.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "",
        "linkedin": ""
      }
    },
    {
      "name": "Pulkit Talwar",
      "image": "Pulkit_Talwar.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "",
        "linkedin": ""
      }
    },
    {
      "name": "Hare Krishna Rai",
      "image": "Hare_Krishna_Rai.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "",
        "linkedin": ""
      }
    },
    {
      "name": "Vedant Jain",
      "image": "Vedant_Jain.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "",
        "linkedin": ""
      }
    },
    {
      "name": "Gaurav Joshi",
      "image": "Gaurav_Joshi.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "",
        "linkedin": ""
      }
    },
    {
      "name": "Fazalu Rahman",
      "image": "Fazalu_Rahman.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "",
        "linkedin": ""
      }
    },
    {
      "name": "Arif",
      "image": "Arif.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "",
        "linkedin": ""
      }
    }
  ];

  const TeamMemberModal = ({ member, onClose }) => {
    if (!member) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex items-center justify-center p-4" onClick={onClose}>
        <div className={`max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-2xl shadow-2xl ${
          isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
        }`} onClick={(e) => e.stopPropagation()}>
          <div className="p-6">
            <div className="flex items-start gap-4 mb-6">
              {member.image && (
                <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-blue-500/30">
                  <Image
                    src={`/team-photos/${member.image}`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex-1">
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {member.name}
                  {member.nickname && (
                    <span className="text-lg font-medium text-blue-500 ml-2">&quot;{member.nickname}&quot;</span>
                  )}
                </h2>
                <p className={`text-lg ${isDark ? 'text-sunset-orange' : 'text-blue-600'}`}>
                  {member.role}
                </p>
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
              <blockquote className={`mb-6 p-4 rounded-lg border-l-4 ${
                isDark
                  ? 'bg-slate-700/50 border-cyan-400 text-cyan-100'
                  : 'bg-blue-50 border-blue-400 text-blue-800'
              }`}>
                <p className="italic text-lg">&quot;{member.quote}&quot;</p>
              </blockquote>
            )}

            {member.fullDescription && (
              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  About
                </h3>
                <p className={`leading-relaxed ${isDark ? 'text-slate-200' : 'text-gray-700'}`}>
                  {member.fullDescription}
                </p>
              </div>
            )}

            {member.expertise && (
              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Expertise
                </h3>
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
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
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
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
      className={`transition-colors duration-300 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sunset-orange rounded-full opacity-5 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-deep-ocean rounded-full opacity-6 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-block mb-6">
              <span className={`font-semibold text-lg px-4 py-2 rounded-full ${
                isDark
                  ? 'text-sunset-orange bg-sunset-orange/10'
                  : 'text-deep-ocean bg-deep-ocean/10'
              }`}>
                About Seasides
              </span>
            </div>

            <h1 className={`text-6xl md:text-7xl font-black mb-8 leading-tight ${
              isDark ? 'text-white' : 'text-deep-ocean'
            }`}>
              India&apos;s Premier
              <span className="text-sunset-orange block">
                FREE Cybersecurity
              </span>
              Conference
            </h1>

            <div className="w-48 h-2 bg-gradient-to-r from-sunset-orange to-deep-ocean mx-auto rounded-full shadow-lg mb-12"></div>

            <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium ${
              isDark ? 'text-gray-200' : 'text-gray-800'
            }`}>
              Empowering the next generation of cybersecurity professionals through
              <span className="text-sunset-orange font-bold"> world-class education</span>,
              <span className={`font-bold ${isDark ? 'text-blue-400' : 'text-deep-ocean'}`}> hands-on training</span>, and
              <span className={`font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}> community building</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={`py-24 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className={`text-5xl font-black mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  WHO
                  <span className="text-sunset-orange block text-3xl font-semibold mt-2">
                    Born from Necessity
                  </span>
                </h2>

                <p className={`text-xl leading-relaxed mb-8 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                  In 2019, a group of passionate cybersecurity enthusiasts recognized a critical gap in the industry – quality security education was becoming a privilege, not a right. Too many brilliant minds were being left behind due to financial barriers.
                </p>

                <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Seasides emerged from the null security community in India, inspired by a simple yet revolutionary idea: what if world-class cybersecurity education was completely free? What if anyone, regardless of their background or financial situation, could access the same high-quality training that was previously available only to the privileged few?
                </p>

                <blockquote className={`text-2xl font-bold italic mb-8 p-6 rounded-lg border-l-4 ${
                  isDark
                    ? 'bg-slate-700/50 border-cyan-400 text-cyan-100'
                    : 'bg-blue-50 border-blue-400 text-blue-800'
                }`}>
                  &quot;We believe that cybersecurity knowledge should be a fundamental right, not a luxury.&quot;
                </blockquote>
              </div>

              <div className="grid grid-cols-1 gap-8">
                <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-700/50' : 'bg-white'} shadow-lg`}>
                  <div className="text-5xl font-black text-sunset-orange mb-4">2019</div>
                  <h4 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Founded</h4>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Born from the null security community</p>
                </div>

                <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-700/50' : 'bg-white'} shadow-lg`}>
                  <div className="text-5xl font-black text-deep-ocean mb-4">100%</div>
                  <h4 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Free Education</h4>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>No barriers, just learning</p>
                </div>

                <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-700/50' : 'bg-white'} shadow-lg`}>
                  <div className="text-5xl font-black text-sunny-yellow mb-4">5000+</div>
                  <h4 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Students Impacted</h4>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Across India and beyond</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-5xl font-black mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                WHAT
                <span className="text-sunset-orange block text-3xl font-semibold mt-2">
                  Democratizing Digital Defense
                </span>
              </h2>

              <p className={`text-xl leading-relaxed max-w-4xl mx-auto ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                Our mission transcends traditional conference boundaries. We&apos;re building a movement that transforms how cybersecurity education is delivered, consumed, and scaled across communities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className={`p-8 rounded-2xl text-center ${isDark ? 'bg-gray-800/60' : 'bg-white'} shadow-lg`}>
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  isDark ? 'bg-sunset-orange/20' : 'bg-sunset-orange/10'
                }`}>
                  <svg className={`w-8 h-8 ${isDark ? 'text-sunset-orange' : 'text-deep-ocean'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Accessible Education
                </h4>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Breaking down financial barriers to provide world-class cybersecurity training to everyone.
                </p>
              </div>

              <div className={`p-8 rounded-2xl text-center ${isDark ? 'bg-gray-800/60' : 'bg-white'} shadow-lg`}>
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  isDark ? 'bg-deep-ocean/20' : 'bg-deep-ocean/10'
                }`}>
                  <svg className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-deep-ocean'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Community Building
                </h4>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Creating lasting connections and fostering collaboration among security professionals.
                </p>
              </div>

              <div className={`p-8 rounded-2xl text-center ${isDark ? 'bg-gray-800/60' : 'bg-white'} shadow-lg`}>
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  isDark ? 'bg-green-500/20' : 'bg-green-100'
                }`}>
                  <svg className={`w-8 h-8 ${isDark ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Practical Skills
                </h4>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Hands-on training that translates directly to real-world cybersecurity challenges.
                </p>
              </div>
            </div>
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
                <span className="text-sunset-orange block text-3xl font-semibold mt-2">
                  Meet the Visionaries
                </span>
              </h2>

              <p className={`text-xl leading-relaxed max-w-4xl mx-auto ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                The passionate individuals who make Seasides possible, bringing together decades of experience in cybersecurity, education, and community building.
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
                  <div className={`relative mb-6 mx-auto w-32 h-32 overflow-hidden rounded-full ring-4 transition-all duration-300 ${
                    member.nickname === 'Sardaar Khan'
                      ? 'ring-yellow-500/30 group-hover:ring-yellow-500/70'
                      : member.nickname === 'Munna Bhaiya'
                      ? 'ring-red-500/30 group-hover:ring-red-500/70'
                      : 'ring-blue-500/20 group-hover:ring-blue-500/50'
                  }`}>
                    {member.image ? (
                      <Image
                        src={`/team-photos/${member.image}`}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="128px"
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center text-3xl font-bold ${
                        isDark ? 'bg-slate-700 text-slate-300' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <h4 className={`font-semibold text-lg mb-2 transition-colors duration-300 text-center ${
                    member.nickname === 'Sardaar Khan'
                      ? isDark ? 'text-yellow-300 group-hover:text-yellow-200' : 'text-yellow-600 group-hover:text-yellow-700'
                      : member.nickname === 'Munna Bhaiya'
                      ? isDark ? 'text-red-300 group-hover:text-red-200' : 'text-red-600 group-hover:text-red-700'
                      : isDark
                      ? 'text-white group-hover:text-sunset-orange'
                      : 'text-slate-800 group-hover:text-blue-600'
                  }`}>
                    {member.name}
                    {member.nickname && (
                      <span className={`block text-base font-normal ${
                        member.nickname === 'Sardaar Khan'
                          ? 'text-yellow-500'
                          : member.nickname === 'Munna Bhaiya'
                          ? 'text-red-500'
                          : 'text-blue-500'
                      }`}>
                        &quot;{member.nickname}&quot;
                      </span>
                    )}
                  </h4>
                  <p className={`text-sm transition-colors duration-300 text-center ${
                    isDark
                      ? 'text-slate-400 group-hover:text-slate-300'
                      : 'text-slate-500 group-hover:text-slate-700'
                  }`}>
                    {member.role}
                  </p>
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