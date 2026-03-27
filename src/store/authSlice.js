import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      showLoginModal: false,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
      openLoginModal: () => set({ showLoginModal: true }),
      closeLoginModal: () => set({ showLoginModal: false }),
    }),
    { name: 'auth-storage' }
  )
)

export default useAuthStore