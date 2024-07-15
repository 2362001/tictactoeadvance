import { create } from 'zustand'

export const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state: A) => ({ bears: state.bears + 1 })),
}))