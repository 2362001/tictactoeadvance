import { create } from "zustand";

export type State = {
  sizeBox: number | string;
  sizeCss: number | string;
};

export type Action = {
  setSizeBox: (sizeBox: State["sizeBox"]) => void;
  setSizeCss: (sizeCss: State["sizeCss"]) => void;
  // resetSizeBox: (lastName: State['sizeBox']) => void
};

export const useStore = create<State & Action>((set) => ({
  sizeBox: 9,
  sizeCss: 3,
  setSizeBox: (size) => {
    set(() => ({ sizeBox: size }));
  },
  setSizeCss: (size) => {
    set(() => ({ sizeCss: size }));
  },
}));
