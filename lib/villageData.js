import { Anchor, Bot, Code2, Cpu, Drama, Link as LinkIcon, Search, Server } from 'lucide-react';

export const villages = [
  {
    id: 'ai-security',
    name: 'AI Security Village',
    shortName: 'AI Security',
    description: 'Explore AI/ML security, adversarial attacks, and LLM vulnerabilities with hands-on challenges.',
    location: 'Tech Hub - Room A',
    days: { day1: true, day2: true, day3: true },
    icon: Bot,
    url: '/ai-village',
    gradient: 'from-violet-600 via-purple-600 to-indigo-600',
    schedule: {
      day1: { start: '10:00 AM', end: '05:00 PM' },
      day2: { start: '10:00 AM', end: '05:00 PM' },
      day3: { start: '10:00 AM', end: '04:00 PM' }
    },
    topics: ['Adversarial ML', 'LLM Injection', 'Model Theft', 'AI Forensics'],
    sessions: {},
    team: []
  },
  {
    id: 'blockchain',
    name: 'Blockchain Security Village',
    shortName: 'Blockchain',
    description: 'Smart contract security, DeFi exploits, and decentralized system vulnerabilities.',
    location: 'Tech Hub - Room B',
    days: { day1: true, day2: false, day3: false },
    icon: LinkIcon,
    url: '/blockchain-village',
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    schedule: {
      day1: { start: '10:00 AM', end: '05:30 PM' },
      day2: null,
      day3: null
    },
    topics: ['Smart Contracts', 'DeFi Security', 'Web3 Attacks', 'Wallet Security'],
    sessions: {
      day1: [
        {
          time: '10:00 AM',
          type: 'Talk',
          title: 'Bridging Legal Gaps in Blockchain',
          presenter: 'Satyendra Prajapati'
        },
        { time: '11:00 AM', type: 'Talk', title: 'Securing Agentic Fintech', presenter: 'Deepak Rathore' },
        { time: '12:00 PM', type: 'Talk', title: 'When "Audited" Means Nothing', presenter: 'Bhavesh Thakur' },
        { time: '02:30 PM', type: 'Workshop', title: 'Securing the Chain', presenter: 'Harsh Tandel' }
      ]
    },
    team: []
  },
  {
    id: 'hardware-hacking',
    name: 'Hardware Hacking Village',
    shortName: 'Hardware',
    description:
      'Three days of soldering, hardware security talks, challenges, and hands-on hacking. Join us for the ultimate hardware security experience.',
    location: 'Maker Space',
    days: { day1: true, day2: true, day3: true },
    icon: Cpu,
    url: 'https://hw101.me',
    gradient: 'from-orange-600 via-red-600 to-rose-600',
    schedule: {
      day1: { start: '10:00 AM', end: '06:00 PM' },
      day2: { start: '10:00 AM', end: '06:00 PM' },
      day3: { start: '10:00 AM', end: '04:00 PM' }
    },
    topics: [
      'Embedded Systems',
      'IoT Security',
      'Satellite Security',
      'Side-Channel',
      'OT/ICS Hacking',
      'Firmware Analysis',
      'Hardware RE',
      'RF Hacking'
    ],
    sessions: {
      day1: [
        { time: 'All Day', type: 'Activity', title: 'Swag Distribution', presenter: 'Village Team' },
        { time: 'Drop-in', type: 'Workshop', title: 'Soldering Village Opens', presenter: 'Village Team' },
        { time: 'Ongoing', type: 'Challenge', title: 'Badge Challenge', presenter: 'Village Team' }
      ],
      day2: [
        { time: 'All Day', type: 'Track', title: 'Hardware Track Talks', presenter: 'Multiple Speakers' },
        { time: 'Drop-in', type: 'Workshop', title: 'Soldering Village', presenter: 'Village Team' }
      ],
      day3: [
        { time: 'All Day', type: 'Competition', title: 'CTF Challenge', presenter: 'Village Team' },
        { time: 'Tournament', type: 'Competition', title: 'GeoGuessr Tournament', presenter: 'Village Team' }
      ]
    },
    team: [
      { name: "Adlin Seedon D'Souza", role: 'Village Lead' },
      { name: 'Mohd. Arif', role: 'Village Lead' },
      { name: 'Fazalu', role: 'Technical Lead' },
      { name: 'Abhinav', role: 'Challenge Designer' },
      { name: 'Minhaj', role: 'Swags Designer' },
      { name: 'Muhsin', role: 'Operations Lead' },
      { name: 'Rageet', role: 'Resource Manager' },
      { name: 'Kiran Gupta', role: 'Event Coordinator' },
      { name: 'Kartheek', role: 'Dr. IoT' },
      { name: 'Chanchal Kalnarayan', role: 'Event Coordinator' }
    ]
  },
  {
    id: 'container-security',
    name: 'Container Security Village',
    shortName: 'Container Sec',
    description: 'Where Kubernetes and containers meet security! Hardening, Runtime Defense, and Supply Chain.',
    location: 'Tech Hub - Room D',
    days: { day1: true, day2: true, day3: true },
    icon: Anchor,
    url: 'https://containersecurityvillage.kubernetesvillage.com',
    gradient: 'from-blue-400 via-cyan-400 to-teal-400',
    schedule: {
      day1: { start: '10:00 AM', end: '05:00 PM' },
      day2: { start: '10:00 AM', end: '05:00 PM' },
      day3: { start: '10:00 AM', end: '04:00 PM' }
    },
    topics: [
      'Container Hardening',
      'Runtime Defense',
      'Kubernetes Security',
      'Supply Chain Security',
      'Secrets Management',
      'RBAC',
      'Cloud-Native Security'
    ],
    sessions: {
      day1: [{ time: 'TBA', type: 'Info', title: 'Schedule Coming Soon', presenter: 'TBA' }]
    },
    team: [
      { name: 'Anjali', role: 'Founder & Lead' },
      { name: 'Divyanshu', role: 'Volunteer & Co-lead' }
    ]
  },
  {
    id: 'sast-sca',
    name: 'SAST & SCA Village',
    shortName: 'SAST & SCA',
    description:
      'A focused village on SAST, SCA, and supply chain integrity. Hands-on labs, real tooling, and evidence-driven practices.',
    location: 'Main Hall & Workshop Room',
    days: { day1: true, day2: true, day3: false },
    icon: Code2,
    url: 'https://village.scagoat.dev',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    schedule: {
      day1: { start: '10:00 AM', end: '05:00 PM' },
      day2: { start: '10:00 AM', end: '02:00 PM' },
      day3: null
    },
    topics: [
      'Secure Code Velocity',
      'Supply Chain Integrity',
      'Defensive Engineering',
      'DevSecOps at Scale',
      'Resilient Supply Chains',
      'Secure Code Review'
    ],
    sessions: {
      day1: [
        {
          time: '10:00 AM',
          type: 'Talk',
          title: 'Introduction to SAST with Enterprise Tools',
          presenter: 'Gaurav Joshi'
        },
        {
          time: '11:15 AM',
          type: 'Talk',
          title: 'Broken Chains: Hidden Attack Surface in Package Managers',
          presenter: 'Kartik Singh'
        },
        {
          time: '01:30 PM',
          type: 'Workshop',
          title: 'Attacking and Defending CI/CD Pipelines',
          presenter: 'Hare Krishna Rai'
        },
        {
          time: '02:45 PM',
          type: 'Workshop',
          title: 'Lightweight Secure Code Review with Semgrep (Part 1)',
          presenter: 'Nikhil Sahoo & Ravindra Penumarthi'
        }
      ],
      day2: [
        {
          time: '10:00 AM',
          type: 'Workshop',
          title: 'Lightweight Secure Code Review with Semgrep (Part 2)',
          presenter: 'Nikhil Sahoo & Ravindra Penumarthi'
        },
        {
          time: '12:45 PM',
          type: 'Talk',
          title: 'Introduction to SCA & evaluating Enterprise tools with SCAGoat',
          presenter: 'TBA'
        },
        { time: '12:45 PM', type: 'Talk', title: 'How to Build Your Own SCA Tool?', presenter: 'TBA' }
      ]
    },
    team: []
  },
  {
    id: 'infrasec',
    name: 'InfraSec Village',
    shortName: 'InfraSec',
    description:
      'A focused village on infrastructure attack and defense. A day of hands-on labs, live demos, and deep dives covering the entire stack.',
    location: 'Tech Hub',
    days: { day1: true, day2: true, day3: true },
    icon: Server,
    url: 'https://infrasec-village.seasides.net/',
    gradient: 'from-slate-700 via-slate-600 to-slate-500',
    schedule: {
      day1: { start: '10:00 AM', end: '05:00 PM' },
      day2: { start: '10:00 AM', end: '05:00 PM' },
      day3: { start: '10:00 AM', end: '05:00 PM' }
    },
    topics: [
      'Cloud Attack & Defense',
      'Zero Trust Networking',
      'Secure Infrastructure as Code',
      'Cloud Incident Response',
      'Resilient CI/CD Pipelines'
    ],
    sessions: {},
    team: []
  },
  {
    id: 'social-engineering',
    name: 'Social Engineering Village',
    shortName: 'Social Eng',
    description:
      'Welcome to the intersection of psychology, technology, and security. We explore the art of human manipulation, OSINT gathering, and the cognitive biases.',
    location: 'Interactive Zone',
    days: { day1: true, day2: true, day3: true },
    icon: Drama,
    url: 'https://www.sevillage.in/',
    gradient: 'from-pink-600 via-rose-500 to-red-500',
    schedule: {
      day1: { start: '10:00 AM', end: '05:00 PM' },
      day2: { start: '10:00 AM', end: '05:00 PM' },
      day3: { start: '10:00 AM', end: '04:00 PM' }
    },
    topics: ['Psychological Warfare', 'Advanced OSINT', 'Human Exploitation'],
    sessions: {
      day1: [{ time: 'All Day', type: 'Workshop', title: 'Advanced OSINT Workshops', presenter: 'SE Team' }],
      day2: [{ time: 'All Day', type: 'CTF', title: 'SE Village CTF Finale', presenter: 'SE Team' }]
    },
    team: [
      { name: 'Prathmesh Dharkar', role: 'Founder & Lead' },
      { name: 'Sagar Tiwari', role: 'Threat Intel' },
      { name: 'Shubham Kumar', role: 'Security Analyst' }
    ]
  },
  {
    id: 'threat-hunting',
    name: 'Threat Hunting Village',
    shortName: 'Threat Hunt',
    description:
      'An immersive experience in threat hunting—where defenders sharpen their skills, learn advanced techniques, and collaborate with experts in the field.',
    location: 'Tech Hub',
    days: { day1: true, day2: true, day3: true },
    icon: Search,
    url: 'https://threathuntingvillage.com/',
    gradient: 'from-green-600 via-emerald-600 to-teal-600',
    schedule: {
      day1: { start: '10:00 AM', end: '06:00 PM' },
      day2: { start: '10:00 AM', end: '06:00 PM' },
      day3: { start: '10:00 AM', end: '06:00 PM' }
    },
    topics: ['Threat Hunting', 'Blue Teaming', 'CTF', 'SOC Skills'],
    sessions: {
      day1: [{ time: 'All Day', type: 'CTF', title: 'Amazing CTF War!', presenter: 'THV Team' }]
    },
    team: []
  }
];
