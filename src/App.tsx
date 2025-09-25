import { AnimatePresence, motion } from 'framer-motion'

import { AnalyticsModule } from '@/components/modules/AnalyticsModule'
import { BlogDetailModule } from '@/components/modules/BlogDetailModule'
import { BlogModule } from '@/components/modules/BlogModule'
import { ContactModule } from '@/components/modules/ContactModule'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { LandingModule } from '@/components/modules/LandingModule'
import { PlaygroundModule } from '@/components/modules/PlaygroundModule'
import { ProjectsModule } from '@/components/modules/ProjectsModule'
import { useEffect } from 'react'
import { useNavigationStore } from '@/stores/navigationStore'
import { useThemeStore } from '@/stores/themeStore'

export default function App() {
  const { currentModule, blogPostId } = useNavigationStore()
  const { theme } = useThemeStore()

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      // System theme
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      if (systemTheme === 'dark') {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    }
  }, [theme])

  const renderModule = () => {
    switch (currentModule) {
      case 'landing':
        return <LandingModule />
      case 'projects':
        return <ProjectsModule />
      case 'analytics':
        return <AnalyticsModule />
      case 'blog':
        return <BlogModule />
      case 'blog-detail':
        return blogPostId ? <BlogDetailModule postId={blogPostId} /> : <BlogModule />
      case 'playground':
        return <PlaygroundModule />
      case 'contact':
        return <ContactModule />
      default:
        return <LandingModule />
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentModule === 'blog-detail' ? `${currentModule}-${blogPostId}` : currentModule}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-[calc(100vh-4rem)] overflow-auto"
          >
            {renderModule()}
          </motion.div>
        </AnimatePresence>
      </main>

      {currentModule !== 'landing' && <Footer />}
    </div>
  )
}
