export const speakers = [
  {
    id: 'sarah-johnson',
    name: 'Dr. Sarah Johnson',
    role: 'Chief Security Officer',
    company: 'CyberGuard Systems',
    bio: 'Dr. Sarah Johnson is a renowned security researcher with over 15 years of experience in cryptography and network security. She has pioneered several breakthrough protocols in secure communications.',
    image: '/team-photos/Arun.jpeg', // Placeholder
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'john-smith',
    name: 'John Smith',
    role: 'Senior Pentester',
    company: 'RedTeam Ops',
    bio: 'John specializes in web application security and has identified critical vulnerabilities in major enterprise software. He is an active contributor to open-source security tools.',
    image: '/team-photos/Arun.jpeg',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'emily-chen',
    name: 'Emily Chen',
    role: 'Security Awareness Lead',
    company: 'Global Corp',
    bio: 'Emily is passionate about the human element of security. She designs security culture programs that have transformed organizations worldwide.',
    image: '/team-photos/Arun.jpeg',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'michael-rodriguez',
    name: 'Michael Rodriguez',
    role: 'Cloud Security Architect',
    company: 'Nebula Cloud',
    bio: 'Michael is a cloud native security expert, helping companies secure their infrastructure on AWS and Azure. He is a frequent speaker at cloud conferences.',
    image: '/team-photos/Arun.jpeg',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'alex-kumar',
    name: 'Alex Kumar',
    role: 'Mobile Security Researcher',
    company: 'AppSecure',
    bio: 'Alex focuses on Android and iOS security internals. His research has been featured in major tech publications.',
    image: '/team-photos/Arun.jpeg',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  }
];

export const sponsors = [
  {
    tier: 'Diamond',
    color: 'from-cyan-400 to-blue-500',
    sponsors: [
      {
        name: 'SecureLayer7',
        logo: '/sponsors-2025/securelayer7.png',
        website: 'https://securelayer7.net',
        isLight: true
      }
    ]
  },
  {
    tier: 'Platinum',
    color: 'from-slate-300 to-slate-400',
    sponsors: [{ name: 'DNIF', logo: '/sponsors-2025/dnif.png', website: 'https://dnif.it' }]
  },
  {
    tier: 'Gold',
    color: 'from-yellow-400 to-amber-500',
    sponsors: [
      { name: 'NII', logo: '/sponsors-2025/nii.png', website: 'https://nii.ac.in' },
      { name: 'Altered Security', logo: '/sponsors-2025/altered_security.png', website: 'https://alteredsecurity.com' },
      { name: 'Levo', logo: '/sponsors-2025/levo.webp', website: 'https://levo.ai' },
      { name: 'Loginsoft', logo: '/sponsors-2025/loginsoft.svg', website: 'https://loginsoft.com' },
      { name: 'Enciphers', logo: '/sponsors-2025/enciphers.webp', website: 'https://enciphers.com' },
      { name: 'Semgrep', logo: '/sponsors-2025/semgrep-1.png', website: 'https://semgrep.dev' }
    ]
  },
  {
    tier: 'Silver',
    color: 'from-gray-300 to-gray-400',
    sponsors: [
      { name: 'Domdog', logo: '/sponsors-2025/domdog.svg', website: 'https://domdog.io' },
      { name: 'Sqrx', logo: '/sponsors-2025/sqrx-logo-white.png', website: 'https://sqrx.com' },
      {
        name: 'CloudDefense',
        logo: '/sponsors-2025/clouddefenseai.png',
        website: 'https://clouddefense.ai',
        isLight: true
      },
      { name: 'PureID', logo: '/sponsors-2025/pureid.webp', website: 'https://pureid.io' },
      { name: 'RedHunt', logo: '/sponsors-2025/redhuntlabs.webp', website: 'https://redhuntlabs.com' },
      { name: 'AppSecure', logo: '/sponsors-2025/appsecuresecurity.webp', website: 'https://appsecure.security' },
      { name: 'Oligo', logo: '/sponsors-2025/oligo-security.svg', website: 'https://oligo.security' },
      { name: 'Offenso', logo: '/sponsors-2025/Offenso-Logo-black-02.png', website: 'https://offensoacademy.com' },
      { name: 'Delve', logo: '/sponsors-2025/delve.jpg', website: 'https://delve.co' },
      { name: 'Payatu', logo: '/sponsors-2025/payatu.png', website: 'https://payatu.com' },
      { name: 'Appsecco', logo: '/sponsors-2025/appsecco.webp', website: 'https://appsecco.com' },
      { name: 'Cloudanix', logo: '/sponsors-2025/cloudanix.svg', website: 'https://www.cloudanix.com' }
    ]
  },
  {
    tier: 'Bronze',
    color: 'from-orange-400 to-orange-600',
    sponsors: [
      { name: 'Data Theorem', logo: '/sponsors-2025/datatheorem.webp', website: 'https://datatheorem.com' },
      { name: 'AppKnox', logo: '/sponsors-2025/appknoxlogo.webp', website: 'https://appknox.com' },
      { name: 'Kloudle', logo: '/sponsors-2025/kloudle.svg', website: 'https://kloudle.com' },
      { name: 'Endor Labs', logo: '/sponsors-2025/endorlabs.webp', website: 'https://endorlabs.com' },
      { name: 'Corgea', logo: '/sponsors-2025/corgea.png', website: 'https://corgea.com', isLight: true },
      { name: 'Isecurion', logo: '/sponsors-2025/isecurion1.webp', website: 'https://www.isecurion.com' },
      { name: 'SafeDep', logo: '/sponsors-2025/safedep.svg', website: 'https://safedep.io', isLight: true }
    ]
  }
];

export const events = {
  day1: [
    {
      id: 'reg-d1',
      time: '09:00 AM',
      title: 'Registration & Breakfast',
      type: 'registration',
      track: 'all',
      location: 'Main Lobby',
      description: 'Check-in, collect your badges, and enjoy a healthy breakfast to kickstart the conference.',
      fullDescription:
        'Begin your Seasides experience by checking in at our registration desk. You will receive your conference badge, welcome kit, and schedule. Join fellow attendees for a networking breakfast.',
      speakerId: null
    },
    {
      id: 'keynote-d1',
      time: '10:00 AM',
      title: 'Keynote: The Future of Cybersecurity',
      type: 'keynote',
      track: 'all',
      location: 'Main Hall',
      speakerId: 'sarah-johnson',
      description: 'Exploring emerging trends in cybersecurity and what to expect in the next decade.',
      fullDescription:
        'In this opening keynote, Dr. Sarah Johnson will discuss the evolving landscape of cybersecurity. From AI-driven threats to quantum cryptography, discover the challenges and opportunities that lie ahead for security professionals.'
    },
    {
      id: 'workshop-web-pentest',
      time: '11:30 AM',
      title: 'Advanced Web Application Pentesting',
      type: 'workshop',
      track: 'technical',
      location: 'Workshop Room A',
      speakerId: 'john-smith',
      description: 'Hands-on workshop on modern web security techniques and exploiting complex vulnerabilities.',
      fullDescription:
        'This intensive workshop dives deep into modern web application attacks. Participants will learn to identify and exploit vulnerabilities such as SSTI, insecure deserialization, and advanced XSS. Prerequisites: Basic understanding of HTTP and web technologies.'
    },
    {
      id: 'session-sec-culture',
      time: '11:30 AM',
      title: 'Building a Security Culture in Enterprise',
      type: 'session',
      track: 'enterprise',
      location: 'Conference Room B',
      speakerId: 'emily-chen',
      description: 'Strategies for implementing effective security awareness programs in large organizations.',
      fullDescription:
        "Security is everyone's responsibility. Emily Chen shares proven strategies for building a robust security culture. Learn how to engage employees, measure behavior change, and turn your workforce into your strongest defense layer."
    },
    {
      id: 'lunch-d1',
      time: '01:00 PM',
      title: 'Lunch Break',
      type: 'lunch',
      track: 'all',
      location: 'Dining Hall',
      description: 'Networking lunch with attendees and speakers.',
      fullDescription: 'Enjoy a gourmet lunch while networking with peers. Special dietary options available.',
      speakerId: null
    },
    {
      id: 'workshop-cloud',
      time: '02:00 PM',
      title: 'Cloud Security Deep Dive',
      type: 'workshop',
      track: 'technical',
      location: 'Workshop Room A',
      speakerId: 'michael-rodriguez',
      description: 'Securing cloud infrastructure and services on major platforms.',
      fullDescription:
        'A comprehensive guide to securing cloud environments. We will cover IAM policies, VPC security, and container security. Participants will configure a secure cloud environment in real-time.'
    },
    {
      id: 'village-ctf',
      time: '02:00 PM',
      title: 'CTF Village',
      type: 'village',
      track: 'village',
      location: 'CTF Arena',
      description: 'Capture the Flag challenges running all day for all skill levels.',
      fullDescription:
        'Join the CTF Village to test your skills! We have challenges ranging from beginner to expert in categories like crypto, pwn, reverse engineering, and web. Prizes for top scorers!',
      speakerId: null
    },
    {
      id: 'arsenal-mobile',
      time: '04:00 PM',
      title: 'Mobile Security Arsenal',
      type: 'arsenal',
      track: 'technical',
      location: 'Demo Area',
      speakerId: 'alex-kumar',
      description: 'Showcase of the latest mobile security tools and techniques.',
      fullDescription:
        'Alex Kumar presents a curated list of open-source tools for mobile security analysis. See live demos of automated scanners, dynamic analysis frameworks, and deobfuscation tools.'
    }
  ],
  day2: [
    {
      id: 'day2-breakfast',
      time: '09:00 AM',
      title: 'Breakfast',
      type: 'registration',
      track: 'all',
      location: 'Main Lobby',
      description: 'Start your day with coffee and networking.',
      fullDescription: 'Fuel up for Day 2 with our breakfast spread.',
      speakerId: null
    }
    // Add more day 2 events as needed
  ],
  day3: [
    {
      id: 'day3-breakfast',
      time: '09:00 AM',
      title: 'Breakfast',
      type: 'registration',
      track: 'all',
      location: 'Main Lobby',
      description: 'Final day breakfast.',
      fullDescription: 'Networking breakfast.',
      speakerId: null
    }
    // Add more day 3 events as needed
  ]
};
