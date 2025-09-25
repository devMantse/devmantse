import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserState {
  isGuest: boolean
  sessionStartTime: Date
  visitedModules: string[]
  completedTours: string[]
  easterEggsFound: string[]
  setGuest: (isGuest: boolean) => void
  addVisitedModule: (module: string) => void
  addCompletedTour: (tour: string) => void
  addEasterEgg: (egg: string) => void
  resetSession: () => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      isGuest: true,
      sessionStartTime: new Date(),
      visitedModules: [],
      completedTours: [],
      easterEggsFound: [],
      setGuest: (isGuest) => set({ isGuest }),
      addVisitedModule: (module) => set((state) => ({
        visitedModules: [...new Set([...state.visitedModules, module])]
      })),
      addCompletedTour: (tour) => set((state) => ({
        completedTours: [...new Set([...state.completedTours, tour])]
      })),
      addEasterEgg: (egg) => set((state) => ({
        easterEggsFound: [...new Set([...state.easterEggsFound, egg])]
      })),
      resetSession: () => set({
        isGuest: true,
        sessionStartTime: new Date(),
        visitedModules: [],
        completedTours: [],
        easterEggsFound: [],
      }),
    }),
    {
      name: 'devmantse-user',
      partialize: (state) => ({
        visitedModules: state.visitedModules,
        completedTours: state.completedTours,
        easterEggsFound: state.easterEggsFound,
      }),
    }
  )
)
