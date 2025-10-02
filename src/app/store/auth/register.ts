// store/useAuthStore.ts
import { axiosInstance } from "@/app/api/apiclient";
import { create } from "zustand";

interface RegisterData {
  full_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface UserData {
  id?: number;
  full_name: string;
  email: string;
  token?: string; // если приходит с бэка
}

interface AuthState {
  loading: boolean;
  error: string | null;
  success: boolean;
  user: UserData | null;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => {
  // восстановление состояния из localStorage
  const storedUser = localStorage.getItem("user");
  const initialUser = storedUser ? JSON.parse(storedUser) : null;

  return {
    loading: false,
    error: null,
    success: false,
    user: initialUser,

    register: async (data) => {
      set({ loading: true, error: null, success: false });
      try {
        const response = await axiosInstance.post("account/register/", data);

        if (response.status >= 200 && response.status < 300) {
          const userData = response.data;

          // сохраняем в localStorage
          localStorage.setItem("user", JSON.stringify(userData));

          set({ success: true, user: userData });
        } else {
          throw new Error("Ошибка регистрации");
        }
      } catch (err: any) {
        const message =
          err.response?.data?.message ||
          err.response?.data?.detail ||
          err.message ||
          "Неизвестная ошибка";
        set({ error: message });
      } finally {
        set({ loading: false });
      }
    },

    logout: () => {
      localStorage.removeItem("user");
      set({ user: null, success: false });
    },
  };
});
