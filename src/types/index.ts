export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: 'web' | 'mobile' | 'desktop' | 'ai' | 'other'
  status: 'completed' | 'in-progress' | 'planned'
  githubUrl?: string
  liveUrl?: string
  demoUrl?: string
  caseStudy?: string
  metrics: {
    users?: number
    performance?: string
    uptime?: string
    satisfaction?: number
  }
  timeline: {
    start: string
    end?: string
    duration: string
  }
  role: string
  team?: string[]
  challenges: string[]
  solutions: string[]
  results: string[]
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt: string
  tags: string[]
  readTime: number
  featured: boolean
  slug: string
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'mobile' | 'devops' | 'design' | 'other'
  yearsOfExperience: number
  lastUsed: string
  certifications?: string[]
}

export interface Activity {
  id: string
  type: 'github' | 'blog' | 'project' | 'achievement'
  title: string
  description: string
  timestamp: string
  url?: string
  metadata?: Record<string, any>
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  type: 'collaboration' | 'job' | 'consulting' | 'other'
}

export interface ThemeConfig {
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    foreground: string
  }
  typography: {
    fontFamily: string
    fontSize: {
      base: string
      scale: number
    }
  }
}

export interface DashboardStats {
  totalProjects: number
  activeProjects: number
  blogPosts: number
  githubRepos: number
  totalCommits: number
  languages: Record<string, number>
  weeklyActivity: Array<{
    week: string
    commits: number
    issues: number
    prs: number
  }>
}

export interface Notification {
  id: string
  type: 'info' | 'success' | 'warning' | 'error'
  title: string
  message: string
  timestamp: string
  read: boolean
  action?: {
    label: string
    url: string
  }
}
