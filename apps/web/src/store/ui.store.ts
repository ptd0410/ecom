import type { ModalType } from "#/types";
import { create } from "zustand";

export type UIStore = {
  modal: ModalType;
  openModal: (input: ModalType) => void;
  closeModal: () => void;
};
export const useUIStore = create<UIStore>()((set) => ({
  modal: "",
  openModal: (modal) => set({ modal }),
  closeModal: () => set({ modal: "" }),
}));
export function getUIStore() {
  return useUIStore.getState();
}
