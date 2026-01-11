import { Anchor, BarChart3, Bot, Cloud, Drama, Link as LinkIcon, Search, Shield, Wrench } from 'lucide-react';

/**
 * Centralized village data with website-extracted branding
 * Merged from navbar (Villages.jsx) and schedule page (village-schedule/page.jsx)
 */

export const villages = [
  {
    id: 'ai-security',
    name: 'AI Security Village',
    shortName: 'AI Security',
    description:
      'Explore AI/ML security, adversarial attacks, and LLM vulnerabilities with hands-on challenges and expert-led workshops.',
    url: null,
    location: 'Tech Hub - Room A',
    days: { day1: true, day2: true, day3: true },
    schedule: {
      day1: { start: '10:00 AM', end: '05:00 PM' },
      day2: { start: '10:00 AM', end: '05:00 PM' },
      day3: { start: '10:00 AM', end: '04:00 PM' }
    },
    branding: {
      logo: null,
      primaryColor: '#7c3aed', // violet-600
      secondaryColor: '#4f46e5', // indigo-600
      gradient: 'from-violet-600 via-purple-600 to-indigo-600',
      accentColor: 'violet',
      designStyle: 'modern'
    },
    topics: ['LLM Jailbreaking', 'Model Poisoning', 'Adversarial ML', 'Prompt Injection'],
    difficulty: 'Intermediate',
    capacity: '50 participants',
    icon: Bot
  },
  {
    id: 'blockchain',
    name: 'Blockchain Security Village',
    shortName: 'Blockchain',
    description:
      'Explore the security landscape of decentralized systems, from smart contract vulnerabilities to DeFi exploits.',
    url: '/cfp-blockchain-village',
    location: 'Tech Hub - Room B',
    days: { day1: true, day2: false, day3: false },
    schedule: {
      day1: { start: '10:00 AM', end: '05:30 PM' },
      day2: null,
      day3: null
    },
    branding: {
      logo: null,
      primaryColor: '#8b5cf6', // violet-500
      secondaryColor: '#a855f7', // purple-500
      gradient: 'from-violet-500 to-purple-600',
      accentColor: 'violet',
      designStyle: 'modern'
    },
    topics: ['Smart Contract Auditing', 'DeFi Security', 'Web3 Compliance', 'Agentic Fintech'],
    difficulty: 'Advanced',
    capacity: '40 participants',
    icon: LinkIcon,
    sessions: {
      day1: [
        {
          time: '10:00 AM - 11:00 AM',
          title: 'Bridging Legal Gaps in Blockchain: Compliance Requirements in Smart Contract Auditing',
          type: 'Talk',
          presenter: 'Satyendra Prajapati'
        },
        {
          time: '11:00 AM - 12:00 PM',
          title: 'When AI Starts Moving Money: Securing Agentic Fintech on the Blockchain',
          type: 'Talk',
          presenter: 'Deepak Rathore'
        },
        {
          time: '12:00 PM - 1:00 PM',
          title: 'When "Audited" Means Nothing: How Real-World Smart Contract Attacks Bypass Clean Audit Reports',
          type: 'Talk',
          presenter: 'Bhavesh Thakur'
        },
        {
          time: '2:30 PM - 5:30 PM',
          title: 'Securing the Chain: Smart Contracts, Compliance & the AI Frontier',
          type: 'Workshop',
          presenter: 'Harsh Tandel'
        }
      ]
    }
  },
  {
    id: 'cloud',
    name: 'Cloud Security Village',
    shortName: 'Cloud Security',
    description: 'Master AWS, Azure, and GCP security testing with hands-on labs and real-world scenarios.',
    url: null,
    location: 'Tech Hub - Room C',
    days: { day1: true, day2: true, day3: true },
    schedule: {
      day1: { start: '10:00 AM', end: '05:00 PM' },
      day2: { start: '10:00 AM', end: '05:00 PM' },
      day3: { start: '10:00 AM', end: '04:00 PM' }
    },
    branding: {
      logo: null,
      primaryColor: '#0ea5e9', // sky-500
      secondaryColor: '#3b82f6', // blue-500
      gradient: 'from-sky-500 via-blue-500 to-indigo-500',
      accentColor: 'sky',
      designStyle: 'modern'
    },
    topics: ['AWS Pentesting', 'IAM Exploitation', 'Container Escapes', 'Serverless Security'],
    difficulty: 'Intermediate',
    capacity: '60 participants',
    icon: Cloud
  },
  {
    id: 'hardware',
    name: 'Hardware Hacking Village',
    shortName: 'Hardware',
    description:
      'Three days of soldering, hardware security talks, challenges, and hands-on hacking. Join us for the ultimate hardware security experience.',
    url: 'https://hw101.me',
    location: 'Maker Space',
    days: { day1: true, day2: true, day3: true },
    schedule: {
      day1: { start: '11:00 AM', end: '05:00 PM' },
      day2: { start: '10:00 AM', end: '05:00 PM' },
      day3: { start: '10:00 AM', end: '03:00 PM' }
    },
    branding: {
      logo: null, // Text-based logo
      primaryColor: '#00d4ff', // Extracted cyan
      secondaryColor: '#ff006e', // Extracted hot pink
      gradient: 'from-cyan-400 via-cyan-500 to-pink-500',
      accentColor: 'cyan',
      designStyle: 'technical'
    },
    topics: ['Embedded Systems Security', 'Satellite & RF Hacking', 'Hardware Reverse Engineering', 'OT/ICS Security'],
    difficulty: 'Advanced',
    capacity: '30 participants',
    icon: Wrench
  },
  {
    id: 'infrasec',
    name: 'Infrastructure Security Village',
    shortName: 'Infrasec',
    description:
      'A focused village on infrastructure attack and defense with hands-on labs and live demonstrations covering the entire stack.',
    url: 'https://infrasec-village.seasides.net/',
    location: 'Tech Hub - Room G',
    days: { day1: true, day2: true, day3: true },
    schedule: {
      day1: { start: '10:00 AM', end: '05:00 PM' },
      day2: { start: '10:00 AM', end: '05:00 PM' },
      day3: { start: '10:00 AM', end: '04:00 PM' }
    },
    branding: {
      logo: 'https://infrasec-village.seasides.net/logo.png',
      primaryColor: '#f43f5e', // rose-500
      secondaryColor: '#ec4899', // pink-500
      gradient: 'from-rose-500 to-pink-600',
      accentColor: 'rose',
      designStyle: 'technical'
    },
    topics: ['Cloud Attack & Defense', 'Zero Trust Networking', 'Secure IaC', 'Cloud Incident Response'],
    difficulty: 'Advanced',
    capacity: '45 participants',
    icon: Shield
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes Security Village',
    shortName: 'Kubernetes',
    description:
      'Explore the world of container and Kubernetes security. Learn about securing containerized applications and orchestration platforms.',
    url: 'https://containersecurityvillage.kubernetesvillage.com',
    location: 'Tech Hub - Room D',
    days: { day1: false, day2: true, day3: true },
    schedule: {
      day1: null,
      day2: { start: '10:00 AM', end: '05:00 PM' },
      day3: { start: '10:00 AM', end: '04:00 PM' }
    },
    branding: {
      logo: null,
      primaryColor: '#06b6d4', // cyan-500
      secondaryColor: '#14b8a6', // teal-500
      gradient: 'from-cyan-500 via-teal-500 to-emerald-500',
      accentColor: 'cyan',
      designStyle: 'modern'
    },
    topics: ['Kubernetes Security', 'Docker Security', 'Container Runtime', 'Pod Security'],
    difficulty: 'Intermediate',
    capacity: '45 participants',
    icon: Anchor
  },
  {
    id: 'sast-sca',
    name: 'SAST/SCA Village',
    shortName: 'SAST/SCA',
    description:
      'Master static code analysis and software composition analysis. Discover vulnerabilities in source code and open-source dependencies.',
    url: 'https://village.scagoat.dev',
    location: 'Tech Hub - Room E',
    days: { day1: true, day2: true, day3: false },
    schedule: {
      day1: { start: '10:00 AM', end: '05:00 PM' },
      day2: { start: '10:00 AM', end: '05:00 PM' },
      day3: null
    },
    branding: {
      logo: null,
      primaryColor: '#6366f1', // indigo-500
      secondaryColor: '#a855f7', // purple-500
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      accentColor: 'indigo',
      designStyle: 'modern'
    },
    topics: ['Code Review', 'Vulnerability Scanning', 'Dependency Analysis', 'SAST Tools'],
    difficulty: 'Beginner',
    capacity: '55 participants',
    icon: BarChart3
  },
  {
    id: 'social-engineering',
    name: 'Social Engineering Village',
    shortName: 'Social Eng',
    description:
      'Welcome to the intersection of psychology, technology, and security. Explore the art of human manipulation, OSINT gathering, and the cognitive biases that define the human element of cybersecurity.',
    url: 'https://www.sevillage.in/',
    location: 'Interactive Zone',
    days: { day1: true, day2: true, day3: true },
    schedule: {
      day1: { start: '10:00 AM', end: '05:00 PM' },
      day2: { start: '10:00 AM', end: '05:00 PM' },
      day3: { start: '10:00 AM', end: '04:00 PM' }
    },
    branding: {
      logo: 'https://www.sevillage.in/images/favicon-removebg-preview.png',
      primaryColor: '#000000', // Black (extracted)
      secondaryColor: '#f97316', // orange-500 (using brand color for better visibility)
      gradient: 'from-slate-900 via-orange-900 to-amber-800',
      accentColor: 'orange',
      designStyle: 'technical'
    },
    topics: ['Psychological Warfare', 'Advanced OSINT', 'Social Engineering Tactics', 'Community Education'],
    difficulty: 'Beginner',
    capacity: '40 participants',
    icon: Drama
  },
  {
    id: 'threat-hunting',
    name: 'Threat Hunting Village',
    shortName: 'Threat Hunt',
    description:
      'An immersive experience in threat hunting where defenders sharpen skills, learn advanced techniques, and collaborate with experts in real-world attack scenarios.',
    url: 'https://threathuntingvillage.com/',
    location: 'Tech Hub - Room F',
    days: { day1: true, day2: true, day3: true },
    schedule: {
      day1: { start: '10:00 AM', end: '05:00 PM' },
      day2: { start: '10:00 AM', end: '05:00 PM' },
      day3: { start: '10:00 AM', end: '04:00 PM' }
    },
    branding: {
      logo: 'https://threathuntingvillage.com/wp-content/uploads/2025/02/cropped-logo.png',
      primaryColor: '#ff0c14', // Extracted bright red
      secondaryColor: '#0088cc', // Extracted blue
      gradient: 'from-red-500 via-orange-500 to-blue-500',
      accentColor: 'red',
      designStyle: 'technical'
    },
    topics: ['Hands-on Labs', 'CTF Competitions', 'Career Guidance', 'Threat Intelligence'],
    difficulty: 'Intermediate',
    capacity: '50 participants',
    icon: Search
  }
];

/**
 * Get default branding for villages without website data
 */
export const getDefaultBranding = villageId => {
  const defaults = {
    'ai-security': {
      primaryColor: '#7c3aed',
      secondaryColor: '#4f46e5',
      gradient: 'from-violet-600 via-purple-600 to-indigo-600',
      accentColor: 'violet',
      designStyle: 'modern'
    },
    cloud: {
      primaryColor: '#0ea5e9',
      secondaryColor: '#3b82f6',
      gradient: 'from-sky-500 via-blue-500 to-indigo-500',
      accentColor: 'sky',
      designStyle: 'modern'
    },
    kubernetes: {
      primaryColor: '#06b6d4',
      secondaryColor: '#14b8a6',
      gradient: 'from-cyan-500 via-teal-500 to-emerald-500',
      accentColor: 'cyan',
      designStyle: 'modern'
    }
  };

  return defaults[villageId] || defaults['ai-security'];
};
