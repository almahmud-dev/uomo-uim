import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],

      addToCart: (item) => set((state) => {
        const existing = state.cartItems.find((i) => i.id === item.id);
        if (existing) {
          return {
            cartItems: state.cartItems.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          };
        }
        return { cartItems: [...state.cartItems, item] };
      }),

      removeFromCart: (id) => set((state) => ({
        cartItems: state.cartItems.filter((item) => item.id !== id),
      })),

      increaseQty: (id) => set((state) => ({
        cartItems: state.cartItems.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      })),

      decreaseQty: (id) => set((state) => ({
        cartItems: state.cartItems.map((i) =>
          i.id === id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i
        ),
      })),

      clearCart: () => set({ cartItems: [] }),

      wishlistItems: [],

      addToWishlist: (item) => set((state) => {
        const exists = state.wishlistItems.find((i) => i.id === item.id);
        if (exists) return state;
        return { wishlistItems: [...state.wishlistItems, item] };
      }),

      removeFromWishlist: (id) => set((state) => ({
        wishlistItems: state.wishlistItems.filter((item) => item.id !== id),
      })),
    }),
    {
      name: 'cart-storage',
      version: 2,
      migrate: () => ({ cartItems: [], wishlistItems: [] }),
    }
  )
)

export default useCartStore
