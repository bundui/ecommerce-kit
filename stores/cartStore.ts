import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { CartItem } from "@/lib/schemas"

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  getTotal: () => number
  getItemCount: () => number
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (newItem) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.id === newItem.id)

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === newItem.id ? { ...item, quantity: item.quantity + newItem.quantity } : item,
              ),
            }
          }

          return { items: [...state.items, newItem] }
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id)
          return
        }

        set((state) => ({
          items: state.items.map((item) => (item.id === id ? { ...item, quantity } : item)),
        }))
      },

      getTotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
      },

      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0)
      },

      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
    },
  ),
)
