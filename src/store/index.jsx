import { create } from "zustand";

export const domain = "http://127.0.0.1:5000";

export const useSideHeader = create((set) => ({
  index: false,
  openSideHeader: () => set(() => ({ index: true })),
  closeSideHeader: () => set(() => ({ index: false })),
}));

export const useDetails = create((set) => ({
  isDetailsOpen: false,
  activeDetailsId: null,

  openDetails: (id) =>
    set({
      activeDetailsId: id,
      isDetailsOpen: true,
    }),

  closeDetails: () =>
    set({
      activeDetailsId: null,
      isDetailsOpen: false,
    }),

  setActiveDetailsId: (productId) => set({ activeDetailsId: productId}),
    
  resetActiveDetailsId: () => set({ activeDetailsId: null }),
}));


// Add this to your store/index.jsx file

export const useCart = create((set) => ({
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,

  addToCart: (product, quantity = 1) => set((state) => {
    // Check if item already exists in cart
    const existingItemIndex = state.cartItems.findIndex(item => item.id === product.id);
    let newCartItems = [...state.cartItems];
    
    if (existingItemIndex >= 0) {
      // Update quantity if item exists
      newCartItems[existingItemIndex] = {
        ...newCartItems[existingItemIndex],
        quantity: newCartItems[existingItemIndex].quantity + quantity
      };
    } else {
      // Add new item to cart
      newCartItems.push({ ...product, quantity });
    }
    
    // Calculate new totals
    const newTotalItems = newCartItems.reduce((sum, item) => sum + item.quantity, 0);
    const newTotalPrice = newCartItems.reduce((sum, item) => {
      const price = item.discount_price || item.price;
      return sum + (price * item.quantity);
    }, 0);
    
    return { 
      cartItems: newCartItems,
      totalItems: newTotalItems,
      totalPrice: newTotalPrice
    };
  }),

  removeFromCart: (productId) => set((state) => {
    const newCartItems = state.cartItems.filter(item => item.id !== productId);
    
    // Calculate new totals
    const newTotalItems = newCartItems.reduce((sum, item) => sum + item.quantity, 0);
    const newTotalPrice = newCartItems.reduce((sum, item) => {
      const price = item.discount_price || item.price;
      return sum + (price * item.quantity);
    }, 0);
    
    return { 
      cartItems: newCartItems,
      totalItems: newTotalItems,
      totalPrice: newTotalPrice
    };
  }),

  updateQuantity: (productId, quantity) => set((state) => {
    // Update quantity for specific item
    const newCartItems = state.cartItems.map(item => 
      item.id === productId ? { ...item, quantity: quantity } : item
    );
    
    // Calculate new totals
    const newTotalItems = newCartItems.reduce((sum, item) => sum + item.quantity, 0);
    const newTotalPrice = newCartItems.reduce((sum, item) => {
      const price = item.discount_price || item.price;
      return sum + (price * item.quantity);
    }, 0);
    
    return { 
      cartItems: newCartItems,
      totalItems: newTotalItems,
      totalPrice: newTotalPrice
    };
  }),

  clearCart: () => set({ 
    cartItems: [],
    totalItems: 0,
    totalPrice: 0
  })
}));