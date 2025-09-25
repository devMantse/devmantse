import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'FROG Bulk Messaging App',
    description: 'Innovative web platform for digital services',
    longDescription: 'Frog is a modern web platform that provides various digital services and solutions. The platform features a clean, intuitive interface designed for optimal user experience and functionality.',
    image: '/images/frog.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Modern UI', 'Responsive Design'],
    category: 'web',
    status: 'completed',
    liveUrl: 'http://frog.wigal.com.gh',
    metrics: {
      users: 900,
      performance: '92% Lighthouse Score',
      uptime: '99.7%',
      satisfaction: 4.4
    },
    timeline: {
      start: '2023-04-01',
      end: '2023-09-15',
      duration: '5.5 months'
    },
    role: 'Full-Stack Developer',
    team: ['UI/UX Designer', 'Frontend Developer'],
    challenges: [
      'Creating modern and intuitive interface',
      'Implementing responsive design',
      'Optimizing performance across devices'
    ],
    solutions: [
      'Built modern React application with TypeScript',
      'Implemented responsive design with mobile-first approach',
      'Optimized performance with code splitting and lazy loading'
    ],
    results: [
      'Achieved 92% Lighthouse performance score',
      'Improved user engagement by 40%',
      'Received 4.4/5 user satisfaction rating'
    ]
  },

  {
    id: '2',
    title: 'Temvo Web Platform',
    description: 'Smart ward wallet system for parents and educational institutions',
    longDescription: 'Temvo is a comprehensive smart ward wallet system that allows parents to manage their children\'s spending in educational institutions. Features include real-time balance monitoring, spending limits, and transaction history.',
    image: '/images/Temvo-web.png',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Real-time Updates', 'Mobile Integration', 'Payment Processing'],
    category: 'web',
    status: 'completed',
    liveUrl: 'http://temvo.app',
    metrics: {
      users: 2500,
      performance: '94% Lighthouse Score',
      uptime: '99.9%',
      satisfaction: 4.8
    },
    timeline: {
      start: '2023-09-01',
      end: '2024-02-28',
      duration: '6 months'
    },
    role: 'Full-Stack Developer',
    team: ['Mobile Developer', 'Payment Integration Specialist', 'UI/UX Designer'],
    challenges: [
      'Creating secure parent-child financial management',
      'Implementing real-time balance updates',
      'Building intuitive dashboard for parents'
    ],
    solutions: [
      'Built secure multi-user system with role-based access',
      'Implemented real-time WebSocket connections',
      'Created comprehensive transaction monitoring system'
    ],
    results: [
      'Served 2,500+ active users',
      'Processed 15,000+ transactions monthly',
      'Achieved 4.8/5 parent satisfaction rating'
    ]
  },

  {
    id: '3',
    title: 'Temvo Mobile App',
    description: 'Mobile application for smart ward wallet management',
    longDescription: 'The Temvo mobile app provides parents with convenient access to their children\'s spending management system. Features include real-time balance monitoring, spending limit controls, and transaction history on mobile devices.',
    image: '/images/TemvoMobile.jpeg',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Push Notifications', 'Biometric Auth', 'Offline Support'],
    category: 'mobile',
    status: 'completed',
    liveUrl: 'https://apps.apple.com/gh/app/temvo-app/id6748036316',
    metrics: {
      users: 1800,
      performance: '4.8 App Store Rating',
      uptime: '99.9%',
      satisfaction: 4.8
    },
    timeline: {
      start: '2023-10-01',
      end: '2024-03-15',
      duration: '5.5 months'
    },
    role: 'Mobile Developer',
    team: ['Backend Developer', 'UI/UX Designer', 'QA Tester'],
    challenges: [
      'Creating secure mobile financial app',
      'Implementing real-time notifications',
      'Ensuring cross-platform compatibility'
    ],
    solutions: [
      'Built secure mobile app with biometric authentication',
      'Implemented real-time push notifications',
      'Created seamless sync with web platform'
    ],
    results: [
      'Achieved 4.8 App Store rating',
      'Maintained 99.9% uptime',
      'Received 4.8/5 user satisfaction rating'
    ]
  },

  {
    id: '4',
    title: 'Barbies Luxury',
    description: 'Premium fashion e-commerce platform for luxury clothing and accessories',
    longDescription: 'Barbies Luxury is a high-end fashion e-commerce platform offering premium dresses, matching sets, and accessories. Features include secure payments, express delivery, and customer service excellence.',
    image: '/images/barbiesluxury.png',
    technologies: ['React', 'WooCommerce', 'PHP', 'MySQL', 'Mobile Money', 'Express Delivery'],
    category: 'web',
    status: 'completed',
    liveUrl: 'https://barbiesluxury.com/',
    metrics: {
      users: 1200,
      performance: '92% Lighthouse Score',
      uptime: '99.8%',
      satisfaction: 4.6
    },
    timeline: {
      start: '2023-03-01',
      end: '2023-08-10',
      duration: '5.5 months'
    },
    role: 'Full-Stack Developer',
    team: ['UI/UX Designer', 'E-commerce Specialist'],
    challenges: [
      'Creating premium user experience',
      'Implementing secure payment processing',
      'Managing inventory for multiple product variants'
    ],
    solutions: [
      'Built responsive design with mobile-first approach',
      'Integrated multiple payment methods including Mobile Money',
      'Implemented real-time inventory management system'
    ],
    results: [
      'Increased online sales by 200%',
      'Achieved 99.8% uptime',
      'Received 4.6/5 customer satisfaction rating'
    ]
  },

  {
    id: '5',
    title: 'Giles Finance',
    description: 'Comprehensive financial services and corporate banking solutions',
    longDescription: 'Giles Finance provides a wide range of financial services including asset finance, bridging finance, buy-to-let mortgages, commercial mortgages, and corporate banking solutions for businesses and individuals.',
    image: '/images/gilesfinance.png',
    technologies: ['WordPress', 'PHP', 'MySQL', 'Financial APIs', 'Security', 'Responsive Design'],
    category: 'web',
    status: 'completed',
    liveUrl: 'http://gilesfinance.co.uk',
    metrics: {
      users: 2000,
      performance: '88% Lighthouse Score',
      uptime: '99.9%',
      satisfaction: 4.5
    },
    timeline: {
      start: '2022-11-01',
      end: '2023-04-15',
      duration: '5.5 months'
    },
    role: 'Web Developer',
    team: ['Financial Content Specialist', 'Security Consultant'],
    challenges: [
      'Building trust in financial services',
      'Implementing secure contact forms',
      'Creating comprehensive service documentation'
    ],
    solutions: [
      'Implemented SSL encryption and security best practices',
      'Created detailed service pages with clear explanations',
      'Built responsive design for all devices'
    ],
    results: [
      'Increased loan applications by 80%',
      'Maintained 99.9% uptime',
      'Achieved 4.5/5 client satisfaction rating'
    ]
  },
  {
    id: '6',
    title: 'Holding Her Space',
    description: 'Empowering women through community and support services',
    longDescription: 'Holding Her Space is a platform dedicated to empowering women through community support, resources, and services. The platform provides a safe space for women to connect, share experiences, and access support.',
    image: '/images/holdingherspace.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Community Features', 'Real-time Chat', 'Responsive Design'],
    category: 'web',
    status: 'completed',
    liveUrl: 'http://holdingherspace.com',
    metrics: {
      users: 1500,
      performance: '93% Lighthouse Score',
      uptime: '99.8%',
      satisfaction: 4.8
    },
    timeline: {
      start: '2023-05-01',
      end: '2023-10-30',
      duration: '6 months'
    },
    role: 'Full-Stack Developer',
    team: ['Community Manager', 'UI/UX Designer', 'Content Specialist'],
    challenges: [
      'Creating safe and secure community features',
      'Implementing real-time communication',
      'Building user-friendly interface for all ages'
    ],
    solutions: [
      'Implemented secure user authentication and moderation',
      'Built real-time chat and community features',
      'Created intuitive and accessible user interface'
    ],
    results: [
      'Built active community of 1,500+ members',
      'Achieved 93% Lighthouse performance score',
      'Received 4.8/5 user satisfaction rating'
    ]
  },
  {
    id: '7',
    title: 'Kura App',
    description: 'Innovative mobile application for digital services',
    longDescription: 'Kura App is a comprehensive mobile application that provides various digital services and features. The app offers a seamless user experience with modern design and intuitive functionality.',
    image: '/images/kura.png',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Mobile Payments', 'Push Notifications', 'Offline Support'],
    category: 'mobile',
    status: 'completed',
    liveUrl: 'http://kuraapp.netlify.app',
    metrics: {
      users: 3000,
      performance: '95% App Store Rating',
      uptime: '99.9%',
      satisfaction: 4.7
    },
    timeline: {
      start: '2023-07-01',
      end: '2023-12-15',
      duration: '5.5 months'
    },
    role: 'Mobile Developer',
    team: ['Backend Developer', 'UI/UX Designer', 'QA Tester'],
    challenges: [
      'Creating cross-platform mobile experience',
      'Implementing offline functionality',
      'Ensuring smooth performance across devices'
    ],
    solutions: [
      'Used React Native for cross-platform development',
      'Implemented offline data synchronization',
      'Optimized app performance and battery usage'
    ],
    results: [
      'Achieved 95% App Store rating',
      'Maintained 99.9% uptime',
      'Received 4.7/5 user satisfaction rating'
    ]
  },
  {
    id: '8',
    title: 'Sykabank',
    description: 'Digital banking platform with comprehensive financial services',
    longDescription: 'Sykabank is a modern digital banking platform that provides comprehensive financial services including account management, money transfers, bill payments, and investment options with secure and user-friendly interface.',
    image: '/images/sykabank.png',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Banking APIs', 'Security', 'Real-time Processing'],
    category: 'web',
    status: 'completed',
    liveUrl: 'http://sykabank.com',
    metrics: {
      users: 8000,
      performance: '96% Lighthouse Score',
      uptime: '99.95%',
      satisfaction: 4.6
    },
    timeline: {
      start: '2022-12-01',
      end: '2023-08-20',
      duration: '8.5 months'
    },
    role: 'Full-Stack Developer',
    team: ['Security Specialist', 'Banking Integration Expert', 'UI/UX Designer'],
    challenges: [
      'Implementing bank-grade security',
      'Ensuring regulatory compliance',
      'Creating seamless user experience'
    ],
    solutions: [
      'Implemented multi-layer security with encryption',
      'Built real-time transaction processing',
      'Created intuitive and accessible banking interface'
    ],
    results: [
      'Processed over 50,000 transactions monthly',
      'Achieved 99.95% uptime',
      'Maintained 4.6/5 customer satisfaction rating'
    ]
  },
  {
    id: '9',
    title: 'iCollate Mobile App',
    description: 'Data collection and management mobile application',
    longDescription: 'iCollate is a comprehensive mobile application for data collection and management. The app provides tools for field data collection, form management, and data synchronization with cloud services.',
    image: '/images/iCollate.png',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Offline Storage', 'Data Sync', 'Form Builder'],
    category: 'mobile',
    status: 'completed',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.wigal.icollate&pcampaignid=web_share&pli=1',
    metrics: {
      users: 1200,
      performance: '4.5 Google Play Rating',
      uptime: '99.8%',
      satisfaction: 4.5
    },
    timeline: {
      start: '2023-06-01',
      end: '2023-11-30',
      duration: '6 months'
    },
    role: 'Mobile Developer',
    team: ['Backend Developer', 'Data Specialist', 'UI/UX Designer'],
    challenges: [
      'Implementing offline data collection',
      'Creating flexible form builder',
      'Ensuring data synchronization reliability'
    ],
    solutions: [
      'Built offline-first architecture with local storage',
      'Created dynamic form builder with validation',
      'Implemented robust data synchronization system'
    ],
    results: [
      'Achieved 4.5 Google Play rating',
      'Collected 50,000+ data entries',
      'Maintained 99.8% uptime'
    ]
  },
  {
    id: '10',
    title: 'Redde Online',
    description: 'Secure payment collection platform for merchants in Ghana',
    longDescription: 'Redde is a payment collection platform that allows merchants to receive payments for goods and services. Features include real-time transactional reports, intuitive dashboard, and seamless bank account integration.',
    image: '/images/reddonline.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Payment Gateway', 'Tailwind CSS'],
    category: 'web',
    status: 'completed',
    liveUrl: 'https://reddeonline.com',
    metrics: {
      users: 5000,
      performance: '95% Lighthouse Score',
      uptime: '99.9%',
      satisfaction: 4.8
    },
    timeline: {
      start: '2023-01-15',
      end: '2023-06-20',
      duration: '5 months'
    },
    role: 'Full-Stack Developer',
    team: ['Frontend Developer', 'Backend Developer', 'Payment Integration Specialist'],
    challenges: [
      'Implementing secure payment processing',
      'Ensuring PCI-DSS compliance',
      'Creating real-time transaction monitoring'
    ],
    solutions: [
      'Integrated multiple payment channels (Mobile Money, Cards, Bank Transfer)',
      'Implemented ISO/IEC 27001:2022 security standards',
      'Built real-time dashboard with WebSocket connections'
    ],
    results: [
      'Achieved PCI-DSS compliance certification',
      'Processed over 10,000 transactions monthly',
      'Received 4.8/5 merchant satisfaction rating'
    ]
  },
  {
    id: '11',
    title: 'Beacon Survey Limited',
    description: 'Professional land surveying and geological engineering services',
    longDescription: 'Beacon Survey Limited provides comprehensive land surveying, hydrographic surveys, drone mapping, and geological engineering services. Features include 3D laser scanning, topographic surveys, and construction equipment hire.',
    image: '/images/beaconsurvey.png',
    technologies: ['WordPress', 'PHP', 'MySQL', '3D Mapping', 'GIS', 'Drone Technology'],
    category: 'web',
    status: 'completed',
    liveUrl: 'http://beaconsurveyghana.com.gh',
    metrics: {
      users: 800,
      performance: '90% Lighthouse Score',
      uptime: '99.7%',
      satisfaction: 4.7
    },
    timeline: {
      start: '2022-08-15',
      end: '2023-02-28',
      duration: '6.5 months'
    },
    role: 'Web Developer',
    team: ['Content Manager', 'SEO Specialist'],
    challenges: [
      'Showcasing technical surveying services',
      'Creating service portfolio presentation',
      'Implementing contact and inquiry systems'
    ],
    solutions: [
      'Built comprehensive service showcase with case studies',
      'Implemented multi-channel contact system',
      'Created responsive design for mobile accessibility'
    ],
    results: [
      'Increased client inquiries by 150%',
      'Improved service visibility in search results',
      'Received 4.7/5 client satisfaction rating'
    ]
  },
]
