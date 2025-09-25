import { create } from 'zustand'

export type Module = 'landing' | 'projects' | 'analytics' | 'blog' | 'blog-detail' | 'playground' | 'contact'

interface NavigationState {
  currentModule: Module
  breadcrumbs: string[]
  blogPostId?: string
  setCurrentModule: (module: Module, blogPostId?: string) => void
  setBreadcrumbs: (breadcrumbs: string[]) => void
}

export const useNavigationStore = create<NavigationState>((set) => ({
  currentModule: 'landing',
  breadcrumbs: ['Home'],
  blogPostId: undefined,
  setCurrentModule: (currentModule, blogPostId) => set((state) => ({
    currentModule,
    blogPostId,
    breadcrumbs: currentModule === 'landing'
      ? ['Home']
      : currentModule === 'blog-detail'
      ? ['Blog', 'Article']
      : [currentModule.charAt(0).toUpperCase() + currentModule.slice(1)]
  })),
  setBreadcrumbs: (breadcrumbs) => set({ breadcrumbs }),
}))
