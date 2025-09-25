import { ArrowRight, Code, Globe, Palette, Smartphone } from 'lucide-react'
import React, { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/Logo'
import { motion } from 'framer-motion'
import { useNavigationStore } from '@/stores/navigationStore'

export const LandingModule: React.FC = () => {
  const { setCurrentModule } = useNavigationStore()
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const fullText = `Hi, I'm Nii Lomotey, a passionate full-stack developer from Ghana. I specialize in creating modern, scalable web applications using React, TypeScript, and Node.js. With a keen eye for design and a love for clean code, I transform ideas into digital experiences that make a difference.`

  useEffect(() => {
    if (currentIndex < fullText.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 50) // Typing speed

      return () => clearTimeout(timeout)
    } else if (currentIndex >= fullText.length) {
      setIsTyping(false)
    }
  }, [currentIndex, isTyping, fullText])

  const handleGuestLogin = () => {
    setCurrentModule('projects')
  }

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile solutions'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces'
    },
    {
      icon: Globe,
      title: 'Full-Stack Solutions',
      description: 'End-to-end development services'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20 flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="h-32 w-32 rounded-full overflow-hidden bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-2xl">
                <Logo
                  className="h-full w-full object-contain p-2"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 h-8 w-8 bg-accent rounded-full border-4 border-background flex items-center justify-center">
                <div className="h-3 w-3 bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DevMantse
            </h1>
            <p className="text-xl text-muted-foreground">
              Full-Stack Developer & Digital Craftsman
            </p>
          </motion.div>

          {/* Typewriter Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-lg md:text-xl text-foreground leading-relaxed min-h-[120px] flex items-center justify-center">
              <span className="text-left">
                {displayedText}
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="ml-1"
                  >
                    |
                  </motion.span>
                )}
              </span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Button
              onClick={handleGuestLogin}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Login as Guest
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 rounded-lg bg-accent/20">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-sm">{service.title}</h3>
                  <p className="text-xs text-muted-foreground text-center">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8"
        >
          {[
            { number: '50+', label: 'Projects' },
            { number: '5+', label: 'Years Experience' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-accent">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
