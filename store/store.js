import create from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set, get) => ({
      user: {},
      setUser: (params) => {
        set(() => ({ user: params }));
      },
      logoutUser: () => {
        set(() => ({ user: {} }));
      },
    }),
    { name: 'users' }
  )
);

export { useUserStore};
