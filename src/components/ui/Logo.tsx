import React from 'react'
import logoDark from '@/images/logo-dark.png'
import logoLight from '@/images/logo-light.png'
import { useThemeStore } from '@/stores/themeStore'

interface LogoProps {
  className?: string
  alt?: string
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-full w-full object-contain",
  alt = "DevMantse Logo"
}) => {
  const { theme } = useThemeStore()

  // Determine which logo to use based on theme
  const getLogoSrc = () => {
    if (theme === 'dark') {
      return logoDark
    } else if (theme === 'light') {
      return logoLight
    } else {
      // System theme - check if user prefers dark mode
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      return prefersDark ? logoDark : logoLight
    }
  }

  return (
    <img
      src={getLogoSrc()}
      alt={alt}
      className={className}
    />
  )
}
