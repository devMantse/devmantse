import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect } from 'react'

import { AnalyticsModule } from '@/components/modules/AnalyticsModule'
import { BlogModule } from '@/components/modules/BlogModule'
import { ContactModule } from '@/components/modules/ContactModule'
import { Header } from '@/components/layout/Header'
import { PlaygroundModule } from '@/components/modules/PlaygroundModule'
import { ProjectsModule } from '@/components/modules/ProjectsModule'
import { Sidebar } from '@/components/layout/Sidebar'
import { useNavigationStore } from '@/stores/navigationStore'
import { useThemeStore } from '@/stores/themeStore'

const moduleComponents = {
  projects: ProjectsModule,
  analytics: AnalyticsModule,
  blog: BlogModule,
  playground: PlaygroundModule,
  contact: ContactModule,
}

export default function App() {
  const { currentModule, sidebarOpen } = useNavigationStore()
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
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className={`
          flex-1 transition-all duration-300
          ${sidebarOpen ? 'md:ml-0' : 'md:ml-16'}
        `}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentModule}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-[calc(100vh-4rem)] overflow-auto"
            >
              <CurrentModule />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
