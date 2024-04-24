import { create } from "zustand";
import { IUser } from "../api/types";
import { persist } from "zustand/middleware";

type Store = {
  authUser: IUser | null;
  requestLoading: boolean;
  setAuthUser: (user: IUser | null) => void;
  setRequestLoading: (isLoading: boolean) => void;
};

const useStore = create<Store>()(
  persist(
    (set) => ({
      authUser: null,
      requestLoading: false,
      setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
      setRequestLoading: (isLoading) =>
        set((state) => ({ ...state, requestLoading: isLoading })),
    }),
    {
      name: "user-storage",
    }
  )
);

export default useStore;
