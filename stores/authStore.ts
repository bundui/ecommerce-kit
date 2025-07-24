import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { User } from "@/lib/schemas"

interface AuthStore {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string, firstName: string, lastName: string) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,

      login: async (email, password) => {
        set({ isLoading: true })

        // Mock login - in a real app, you'd make an API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const mockUser: User = {
          id: "1",
          email,
          firstName: "John",
          lastName: "Doe",
        }

        set({ user: mockUser, isLoading: false })
      },

      signup: async (email, password, firstName, lastName) => {
        set({ isLoading: true })

        // Mock signup - in a real app, you'd make an API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const mockUser: User = {
          id: "1",
          email,
          firstName,
          lastName,
        }

        set({ user: mockUser, isLoading: false })
      },

      logout: () => {
        set({ user: null })
      },
    }),
    {
      name: "auth-storage",
    },
  ),
)
