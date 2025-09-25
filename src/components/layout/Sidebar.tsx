import React from 'react'
import { motion } from 'framer-motion'
import {
  FolderOpen,
  BarChart3,
  FileText,
  Play,
  Mail,
  Home,
  ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigationStore, type Module } from '@/stores/navigationStore'
import { useUserStore } from '@/stores/userStore'
import { cn } from '@/lib/utils'

const navigationItems = [
  { id: 'projects' as Module, label: 'Projects', icon: FolderOpen, description: 'Portfolio showcase' },
  { id: 'analytics' as Module, label: 'Analytics', icon: BarChart3, description: 'Skills & metrics' },
  { id: 'blog' as Module, label: 'Blog', icon: FileText, description: 'Technical writing' },
  { id: 'playground' as Module, label: 'Playground', icon: Play, description: 'Interactive demos' },
  { id: 'contact' as Module, label: 'Contact', icon: Mail, description: 'Get in touch' },
]

export const Sidebar: React.FC = () => {
  const { currentModule, setCurrentModule, sidebarOpen } = useNavigationStore()
  const { addVisitedModule } = useUserStore()

  const handleModuleChange = (module: Module) => {
    setCurrentModule(module)
    addVisitedModule(module)
  }

  return (
    <motion.aside
      initial={{ x: -300, opacity: 0 }}
      animate={{
        x: sidebarOpen ? 0 : -300,
        opacity: sidebarOpen ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-background transition-all duration-300",
        "md:relative md:top-0 md:h-full",
        !sidebarOpen && "md:w-16"
      )}
    >
      <div className="flex h-full flex-col">
        <nav className="flex-1 space-y-1 p-4">
          <div className="mb-4">
            <Button
              variant={currentModule === 'projects' ? 'secondary' : 'ghost'}
              className="w-full justify-start"
              onClick={() => handleModuleChange('projects')}
            >
              <Home className="h-4 w-4" />
              {sidebarOpen && <span className="ml-2">Dashboard</span>}
            </Button>
          </div>

          <div className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = currentModule === item.id

              return (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant={isActive ? 'secondary' : 'ghost'}
                    className={cn(
                      "w-full justify-start group",
                      !sidebarOpen && "px-2"
                    )}
                    onClick={() => handleModuleChange(item.id)}
                  >
                    <Icon className="h-4 w-4" />
                    {sidebarOpen && (
                      <>
                        <span className="ml-2 flex-1 text-left">{item.label}</span>
                        <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </>
                    )}
                  </Button>

                  {sidebarOpen && (
                    <p className="ml-6 text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              )
            })}
          </div>
        </nav>

        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border-t p-4"
          >
            <div className="text-xs text-muted-foreground">
              <p>Welcome to my portfolio!</p>
              <p className="mt-1">Explore different modules to see my work.</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.aside>
  )
}
