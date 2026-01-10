'use client';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Award, Linkedin } from 'lucide-react';
import Image from 'next/image';

const CFPReviewersPage = () => {
  const { isDark } = useTheme();

  // CFP Reviewers data
  const reviewers = [
    {
      id: 1,
      name: 'Kashish Mittal',
      role: 'Chief Information Security Officer',
      expertise: 'Security Leadership & Startup Security',
      image: '/review-panel/kashish_mitta.jpg',
      bio: 'Security leader helping startups build security from 0 to 1. Former Head of Security at Microsoft Modern Life Experiences, Security Lead at Brex, and Forbes Technology Council member. CMU alumni with extensive experience presenting at national and international security conferences. Passionate about advising startups and entrepreneurs on building robust security foundations.',
      social: {
        linkedin: 'https://www.linkedin.com/in/kashishmittalcmu/',
        twitter: '#'
      }
    },
    {
      id: 2,
      name: 'Anirudh Duggal',
      role: 'Senior Security Engineer at YouTube',
      expertise: 'AI Security, Product Security & Cloud Security',
      image: '/review-panel/anirudh-duggal.jpg',
      bio: 'Senior Security Engineer at YouTube specializing in AI, product, and service security through offensive operations. Former offensive security leader for Azure Data at Microsoft with 5+ years of experience in penetration testing, red teaming, and threat modeling. Creator of "medaudit," an open-source HL7 auditing tool. Presented research on side-channel attacks at Black Hat, HITB, and Nullcon. Expert in healthcare, cloud, and AI security.',
      social: {
        linkedin: 'https://www.linkedin.com/in/anirudh-duggal/',
        twitter: '#'
      }
    },
    {
      id: 3,
      name: 'Debrup Ghosh',
      role: 'Review Panelist',
      expertise: 'Application Security & Product Management',
      image: '/review-panel/Debrup Ghosh.jpg',
      bio: "With over 8 years of product management experience in the SaaS application security domain, I am a strategic and results-oriented product leader at Synopsys, the world's leading provider of software security solutions. I specialize in crafting cutting-edge SaaS solutions that redefine industry standards and enable security and development teams to build secure, high-quality software faster. As the Lead Product Manager on the Polaris SaaS Platform for Application Security, I spearhead end-to-end product development, leveraging user research, competitive and market analysis, and data analytics to inform decision-making.",
      social: {
        linkedin: 'https://www.linkedin.com/in/debrupghosh',
        twitter: '#'
      }
    },
    {
      id: 4,
      name: 'Nandan Gupta',
      role: 'Review Panelist',
      expertise: 'Information Security & Risk Assessment',
      image: '/review-panel/nandan-gupta.jpg',
      bio: 'Application security professional with 10 years experience in Information security, penetration testing, Static code review & software development. Currently working as a Senior Information Security Analyst and have adept skills in Penetration testing and code review. Has good knowledge of tools like IBM AppScan, HP fortify, Hp WebInspect, CheckMarx , Veracode Burp suite, NMAP & Nessus etc. Responsible for Penetration Testing, Web Application Vulnerability Assessments, and assisting developers in fixing vulnerabilities.',
      social: {
        linkedin: 'https://www.linkedin.com/in/nandan-gupta-698aa11b/',
        twitter: '#'
      }
    },
    {
      id: 5,
      name: 'Swarup Natukula',
      role: 'Review Panelist',
      expertise: 'Threat Modeling & Penetration Testing',
      image: '/review-panel/swarup-natukula.jpg',
      bio: 'Offensive Security Certificated Professional (OSCP) and Certified Ethical Hacker (CEH) with around Twelve years of experience in Threatmodeling, Secure Code Review, Penetration Testing, security architecture review, Application Security, Mobile Security, Cloud Security and Vulnerability Management. Rich experience in integrating security with SDLC. Expertise in developing Policy Checklists for Source code review and Threatmodeling. Good knowledge on Javascript security and Magecart attacks. Red teaming experience.',
      social: {
        linkedin: 'https://www.linkedin.com/in/swarup-natukula-81775230/',
        twitter: '#'
      }
    }
  ];

  return (
    <main className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-amber-500/10 to-yellow-500/10" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 mb-6 font-semibold tracking-wide uppercase text-sm"
          >
            <Award className="w-4 h-4" />
            Review Committee
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            CFP{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
              Reviewers
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
          >
            Meet the expert security professionals who carefully evaluate each submission to ensure the highest quality
            talks and workshops at Seasides.
          </motion.p>
        </div>
      </section>

      {/* Reviewers Grid */}
      <section className={`py-20 px-4 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Our Review Panel
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviewers.map((reviewer, index) => (
              <motion.div
                key={reviewer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-800 border border-slate-700 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10'
                    : 'bg-white border border-slate-200 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-500/10'
                }`}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-amber-500/0 to-yellow-500/0 group-hover:from-orange-500/5 group-hover:via-amber-500/5 group-hover:to-yellow-500/5 transition-all duration-300" />

                <div className="relative z-10 p-8">
                  {/* Image */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 p-1 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900">
                          <Image
                            src={reviewer.image}
                            alt={reviewer.name}
                            width={128}
                            height={128}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="absolute -bottom-2 -right-2 p-2 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <h3
                      className={`text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-blue-500 transition-all ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {reviewer.name}
                    </h3>
                    <p className={`text-lg font-semibold mb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                      {reviewer.role}
                    </p>
                    <p className={`text-sm font-medium mb-4 ${isDark ? 'text-pink-400' : 'text-pink-600'}`}>
                      {reviewer.expertise}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className={`text-center mb-6 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {reviewer.bio}
                  </p>

                  {/* Divider */}
                  <div className={`h-px w-full mb-6 ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`} />

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <a
                      href={reviewer.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        isDark
                          ? 'bg-slate-700 hover:bg-orange-600 text-slate-300 hover:text-white'
                          : 'bg-gradient-to-br from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-md'
                      } hover:scale-110 hover:shadow-lg`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CFPReviewersPage;
