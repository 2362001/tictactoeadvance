import { create } from "zustand";

export type State = {
  sizeBox: number | string;
};

export type Action = {
  setSizeBox: (sizeBox: State["sizeBox"]) => void;
};

export const useStore = create<State & Action>((set) => ({
  sizeBox: 3,
  setSizeBox: (size) => {
    set(() => ({ sizeBox: size }));
  },
}));
