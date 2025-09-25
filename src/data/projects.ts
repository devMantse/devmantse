import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL',
    longDescription: 'A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment processing, and admin dashboard.',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    category: 'web',
    status: 'completed',
    githubUrl: 'https://github.com/devmantse/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.devmantse.com',
    demoUrl: 'https://demo.devmantse.com/ecommerce',
    caseStudy: 'A detailed case study of building a scalable e-commerce platform...',
    metrics: {
      users: 1500,
      performance: '95% Lighthouse Score',
      uptime: '99.9%',
      satisfaction: 4.8
    },
    timeline: {
      start: '2024-01-15',
      end: '2024-03-20',
      duration: '2 months'
    },
    role: 'Full-Stack Developer',
    team: ['Frontend Developer', 'Backend Developer', 'UI/UX Designer'],
    challenges: [
      'Implementing real-time inventory management',
      'Optimizing database queries for large product catalogs',
      'Creating responsive design for mobile devices'
    ],
    solutions: [
      'Used Redis for caching and real-time updates',
      'Implemented database indexing and query optimization',
      'Adopted mobile-first design approach with Tailwind CSS'
    ],
    results: [
      'Reduced page load time by 40%',
      'Achieved 99.9% uptime',
      'Received 4.8/5 user satisfaction rating'
    ]
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates and team features',
    longDescription: 'A modern task management application that enables teams to collaborate effectively. Features include real-time updates, file sharing, time tracking, and project analytics.',
    image: '/api/placeholder/400/300',
    technologies: ['Vue.js', 'Firebase', 'Vuetify', 'WebSocket', 'Chart.js'],
    category: 'web',
    status: 'completed',
    githubUrl: 'https://github.com/devmantse/task-manager',
    liveUrl: 'https://tasks.devmantse.com',
    metrics: {
      users: 800,
      performance: '92% Lighthouse Score',
      uptime: '99.8%',
      satisfaction: 4.6
    },
    timeline: {
      start: '2023-11-01',
      end: '2024-01-10',
      duration: '2.5 months'
    },
    role: 'Frontend Developer',
    team: ['Backend Developer', 'UI/UX Designer'],
    challenges: [
      'Implementing real-time collaboration features',
      'Managing complex state across multiple components',
      'Creating intuitive drag-and-drop interface'
    ],
    solutions: [
      'Used Firebase Realtime Database for instant updates',
      'Implemented Vuex for centralized state management',
      'Created custom drag-and-drop components with Vue Draggable'
    ],
    results: [
      'Improved team productivity by 35%',
      'Reduced project completion time by 25%',
      'Achieved 4.6/5 user satisfaction rating'
    ]
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Real-time weather monitoring with interactive maps and forecasts',
    longDescription: 'A comprehensive weather dashboard that provides real-time weather data, interactive maps, and detailed forecasts. Features include location-based weather, severe weather alerts, and historical data visualization.',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'D3.js', 'OpenWeather API', 'Mapbox', 'Styled Components'],
    category: 'web',
    status: 'completed',
    githubUrl: 'https://github.com/devmantse/weather-dashboard',
    liveUrl: 'https://weather.devmantse.com',
    metrics: {
      users: 2500,
      performance: '98% Lighthouse Score',
      uptime: '99.9%',
      satisfaction: 4.7
    },
    timeline: {
      start: '2023-08-15',
      end: '2023-10-30',
      duration: '2.5 months'
    },
    role: 'Frontend Developer',
    team: ['Data Visualization Specialist'],
    challenges: [
      'Creating smooth animations for weather data',
      'Implementing responsive design for mobile devices',
      'Optimizing API calls for better performance'
    ],
    solutions: [
      'Used D3.js for smooth data visualizations',
      'Implemented progressive web app features',
      'Added intelligent caching and request batching'
    ],
    results: [
      'Achieved 98% Lighthouse performance score',
      'Reduced API calls by 60% through caching',
      'Received 4.7/5 user satisfaction rating'
    ]
  },
  {
    id: '4',
    title: 'AI Chat Assistant',
    description: 'Intelligent chatbot with natural language processing capabilities',
    longDescription: 'An AI-powered chat assistant that can understand context, provide helpful responses, and learn from interactions. Built with modern NLP techniques and machine learning models.',
    image: '/api/placeholder/400/300',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'WebSocket'],
    category: 'ai',
    status: 'in-progress',
    githubUrl: 'https://github.com/devmantse/ai-chatbot',
    metrics: {
      users: 500,
      performance: '90% Response Accuracy',
      uptime: '99.5%',
      satisfaction: 4.5
    },
    timeline: {
      start: '2024-02-01',
      duration: '3 months'
    },
    role: 'AI/ML Engineer',
    team: ['Backend Developer', 'Data Scientist'],
    challenges: [
      'Training accurate NLP models',
      'Implementing real-time conversation flow',
      'Handling edge cases and error recovery'
    ],
    solutions: [
      'Used pre-trained BERT models with fine-tuning',
      'Implemented WebSocket for real-time communication',
      'Added comprehensive error handling and fallback responses'
    ],
    results: [
      'Achieved 90% response accuracy',
      'Reduced response time to under 2 seconds',
      'Maintained 99.5% uptime'
    ]
  },
  {
    id: '5',
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication',
    longDescription: 'A comprehensive mobile banking application that provides secure financial services. Features include account management, money transfers, bill payments, and investment tracking.',
    image: '/api/placeholder/400/300',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Biometric Auth'],
    category: 'mobile',
    status: 'planned',
    metrics: {
      users: 0,
      performance: 'Target: 95% Lighthouse Score',
      uptime: 'Target: 99.9%',
      satisfaction: 0
    },
    timeline: {
      start: '2024-04-01',
      duration: '4 months'
    },
    role: 'Mobile Developer',
    team: ['Backend Developer', 'Security Specialist', 'UI/UX Designer'],
    challenges: [
      'Implementing secure authentication',
      'Ensuring compliance with financial regulations',
      'Creating intuitive mobile user experience'
    ],
    solutions: [
      'Multi-factor authentication with biometric support',
      'End-to-end encryption for all transactions',
      'User-centered design with accessibility features'
    ],
    results: [
      'Planned: 95% Lighthouse performance score',
      'Planned: 99.9% uptime target',
      'Planned: 4.8+ user satisfaction rating'
    ]
  }
]
