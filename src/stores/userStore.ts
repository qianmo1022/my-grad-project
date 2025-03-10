import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/lib/definitions';

type Order = {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  date: string;
};

type UserState = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  orders: Order[];
  setUser: (user: User | null) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  addOrder: (order: Order) => void;
  clearOrders: () => void;
  logout: () => void;
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      orders: [],
      setUser: (user) => set({ user }),
      setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
      setIsLoading: (isLoading) => set({ isLoading }),
      addOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
      clearOrders: () => set({ orders: [] }),
      logout: () => set({ user: null, isAuthenticated: false, orders: [] }),
    }),
    {
      name: 'user-storage',
    }
  )
);