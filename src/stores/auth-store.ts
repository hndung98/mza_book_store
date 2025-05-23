import { create } from "zustand";
import { persist } from "zustand/middleware";

type LoginModalState = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
};

export const useLoginModalStore = create<LoginModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));

type AccessTokenState = {
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;
};

export const useAccessTokenStore = create<AccessTokenState>()(
  persist(
    (set) => ({
      accessToken: null,
      setAccessToken: (token: string) => set({ accessToken: token }),
      clearAccessToken: () => set({ accessToken: null }),
    }),
    {
      name: "token-storage",
    }
  )
);
