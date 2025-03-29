import { create } from "zustand";

export const domain = 'http://127.0.0.1:5000';

export const useSideHeader = create((set) => ({
  index: false,
  openSideHeader: () => set(() => ({ index: true })),
  closeSideHeader: () => set(() => ({ index: false })),
}));
