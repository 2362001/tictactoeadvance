import { create } from "zustand";

export type State = {
  sizeBox: number | string;
};

export type Action  = {
  setSizeBox: (firstName: State['sizeBox']) => void
  resetSizeBox: (lastName: State['sizeBox']) => void
};

export const useStore = create<State & Action>((set) => ({
  sizeBox: 0,
  setSizeBox: () => set((state: A) => ({ sizeBox: state.sizeBox })),
  resetSizeBox: () => set((state: A) => ({ sizeBox: state.sizeBox })),
}));
