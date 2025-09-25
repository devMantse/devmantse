import React from 'react'
import { motion } from 'framer-motion'
import {
  Menu,
  Sun,
  Moon,
  Settings,
  Bell,
  FolderOpen,
  BarChart3,
  FileText,
  Mail
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/Logo'
import { useThemeStore } from '@/stores/themeStore'
import { useNavigationStore, type Module } from '@/stores/navigationStore'
import { useUserStore } from '@/stores/userStore'

const navigationItems = [
  { id: 'projects' as Module, label: 'Projects', icon: FolderOpen },
  { id: 'analytics' as Module, label: 'Analytics', icon: BarChart3 },
  { id: 'blog' as Module, label: 'Blog', icon: FileText },
  // { id: 'playground' as Module, label: 'Playground', icon: Play },
  { id: 'contact' as Module, label: 'Contact', icon: Mail },
]

export const Header: React.FC = () => {
  const { theme, setTheme } = useThemeStore()
  const { currentModule, setCurrentModule } = useNavigationStore()
  const { easterEggsFound, addVisitedModule } = useUserStore()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const handleModuleChange = (module: Module) => {
    setCurrentModule(module)
    addVisitedModule(module)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="h-28 w-36  overflow-hidden flex items-center justify-center">
              <Logo />
            </div>
            {/* <div className="hidden md:block">
              <h1 className="text-xl font-bold">DevMantse</h1>

            </div> */}
          </div>
        </div>

        {/* Navigation Items */}
        {currentModule !== 'landing' && (
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = currentModule === item.id

            return (
              <Button
                key={item.id}
                variant={isActive ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => handleModuleChange(item.id)}
                className="flex items-center space-x-2"
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Button>
            )
          })}
          </nav>
        )}

        {currentModule !== 'landing' && (
          <div className="flex items-center space-x-2">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="relative"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {easterEggsFound.length > 0 && (
                <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                  {easterEggsFound.length}
                </span>
              )}
              <span className="sr-only">Notifications</span>
            </Button>

            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
          </div>
        )}
      </div>
    </motion.header>
  )
}
