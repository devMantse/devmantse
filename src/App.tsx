import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect } from 'react'

import { AnalyticsModule } from '@/components/modules/AnalyticsModule'
import { BlogDetailModule } from '@/components/modules/BlogDetailModule'
import { BlogModule } from '@/components/modules/BlogModule'
import { ContactModule } from '@/components/modules/ContactModule'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { LandingModule } from '@/components/modules/LandingModule'
import { PlaygroundModule } from '@/components/modules/PlaygroundModule'
import { ProjectsModule } from '@/components/modules/ProjectsModule'
import { useNavigationStore } from '@/stores/navigationStore'
import { useThemeStore } from '@/stores/themeStore'

const moduleComponents = {
  landing: LandingModule,
  projects: ProjectsModule,
  analytics: AnalyticsModule,
  blog: BlogModule,
  'blog-detail': BlogDetailModule,
  // playground: PlaygroundModule,
  contact: ContactModule,
}

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

  const CurrentModule = moduleComponents[currentModule]

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
            {currentModule === 'blog-detail' && blogPostId ? (
              <CurrentModule postId={blogPostId} />
            ) : (
              <CurrentModule />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {currentModule !== 'landing' && <Footer />}
    </div>
  )
}
