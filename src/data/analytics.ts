import { DashboardStats, Skill } from '@/types'

export const skills: Skill[] = [
  {
    name: 'React',
    level: 95,
    category: 'frontend',
    yearsOfExperience: 4,
    lastUsed: '2024-12-15',
    certifications: ['React Developer Certification']
  },
  {
    name: 'TypeScript',
    level: 90,
    category: 'frontend',
    yearsOfExperience: 3,
    lastUsed: '2024-12-15',
    certifications: ['TypeScript Fundamentals']
  },
  {
    name: 'Node.js',
    level: 85,
    category: 'backend',
    yearsOfExperience: 3,
    lastUsed: '2024-12-10',
    certifications: ['Node.js Developer Certification']
  },
  {
    name: 'Python',
    level: 80,
    category: 'backend',
    yearsOfExperience: 2,
    lastUsed: '2024-12-05',
    certifications: ['Python for Data Science']
  },
  {
    name: 'PostgreSQL',
    level: 75,
    category: 'backend',
    yearsOfExperience: 2,
    lastUsed: '2024-12-08',
    certifications: []
  },
  {
    name: 'MongoDB',
    level: 70,
    category: 'backend',
    yearsOfExperience: 1,
    lastUsed: '2024-11-20',
    certifications: []
  },
  {
    name: 'AWS',
    level: 65,
    category: 'devops',
    yearsOfExperience: 1,
    lastUsed: '2024-11-15',
    certifications: ['AWS Cloud Practitioner']
  },
  {
    name: 'Docker',
    level: 60,
    category: 'devops',
    yearsOfExperience: 1,
    lastUsed: '2024-11-10',
    certifications: []
  },
  {
    name: 'Figma',
    level: 70,
    category: 'design',
    yearsOfExperience: 2,
    lastUsed: '2024-12-01',
    certifications: []
  },
  {
    name: 'React Native',
    level: 60,
    category: 'mobile',
    yearsOfExperience: 1,
    lastUsed: '2024-10-15',
    certifications: []
  }
]

export const dashboardStats: DashboardStats = {
  totalProjects: 12,
  activeProjects: 3,
  blogPosts: 8,
  githubRepos: 25,
  totalCommits: 1247,
  languages: {
    'TypeScript': 35,
    'JavaScript': 25,
    'Python': 20,
    'CSS': 10,
    'HTML': 5,
    'Other': 5
  },
  weeklyActivity: [
    { week: '2024-12-09', commits: 12, issues: 3, prs: 2 },
    { week: '2024-12-02', commits: 18, issues: 5, prs: 4 },
    { week: '2024-11-25', commits: 15, issues: 2, prs: 3 },
    { week: '2024-11-18', commits: 22, issues: 7, prs: 5 },
    { week: '2024-11-11', commits: 8, issues: 1, prs: 2 },
    { week: '2024-11-04', commits: 25, issues: 4, prs: 6 },
    { week: '2024-10-28', commits: 14, issues: 3, prs: 3 }
  ]
}
