import create from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(persist((set) => ({
  
  cartItems: [],
  addToCart: (item) => {
    set((state) => {
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        // If item already exists, update the quantity
        const updatedItems = state.cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
        return { cartItems: updatedItems };
      } else {
        // If item doesn't exist, add it to the cart
        return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
      }
    });
  },
  removeFromCart: (itemId) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== itemId),
    }));
  },
  updateQuantity: (itemId, quantity) => {
    set((state) => {
      const updatedItems = state.cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
      );
      return { cartItems: updatedItems };
    });
  },
}), { name: 'cart-store' }));

export default useCartStore;
