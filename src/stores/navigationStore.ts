import { create } from 'zustand'

export type Module = 'projects' | 'analytics' | 'blog' | 'playground' | 'contact'

interface NavigationState {
  currentModule: Module
  sidebarOpen: boolean
  breadcrumbs: string[]
  setCurrentModule: (module: Module) => void
  setSidebarOpen: (open: boolean) => void
  setBreadcrumbs: (breadcrumbs: string[]) => void
  toggleSidebar: () => void
}

export const useNavigationStore = create<NavigationState>((set) => ({
  currentModule: 'projects',
  sidebarOpen: true,
  breadcrumbs: ['Dashboard', 'Projects'],
  setCurrentModule: (currentModule) => set((state) => ({
    currentModule,
    breadcrumbs: ['Dashboard', currentModule.charAt(0).toUpperCase() + currentModule.slice(1)]
  })),
  setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
  setBreadcrumbs: (breadcrumbs) => set({ breadcrumbs }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}))
