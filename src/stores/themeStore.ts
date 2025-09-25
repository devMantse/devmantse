import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Theme = 'light' | 'dark' | 'system'
export type ColorPalette = 'blue' | 'purple' | 'green' | 'orange'
export type TypographySize = 'compact' | 'default' | 'comfortable'

interface ThemeState {
  theme: Theme
  colorPalette: ColorPalette
  typographySize: TypographySize
  reducedMotion: boolean
  highContrast: boolean
  setTheme: (theme: Theme) => void
  setColorPalette: (palette: ColorPalette) => void
  setTypographySize: (size: TypographySize) => void
  setReducedMotion: (reduced: boolean) => void
  setHighContrast: (high: boolean) => void
  resetTheme: () => void
}

const defaultState = {
  theme: 'system' as Theme,
  colorPalette: 'blue' as ColorPalette,
  typographySize: 'default' as TypographySize,
  reducedMotion: false,
  highContrast: false,
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      ...defaultState,
      setTheme: (theme) => set({ theme }),
      setColorPalette: (colorPalette) => set({ colorPalette }),
      setTypographySize: (typographySize) => set({ typographySize }),
      setReducedMotion: (reducedMotion) => set({ reducedMotion }),
      setHighContrast: (highContrast) => set({ highContrast }),
      resetTheme: () => set(defaultState),
    }),
    {
      name: 'devmantse-theme',
      partialize: (state) => ({
        theme: state.theme,
        colorPalette: state.colorPalette,
        typographySize: state.typographySize,
        reducedMotion: state.reducedMotion,
        highContrast: state.highContrast,
      }),
    }
  )
)
