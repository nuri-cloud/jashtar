import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";

interface RegisterData {
  email: string;
  password: string;
}

interface RegisterState {
  formData: RegisterData;
  setField: (field: keyof RegisterData, value: string) => void;
  submit: () => Promise<void>;
  loading: boolean;
  error: string | null;
  success: boolean;
}

export const useLogeinStore = create<RegisterState>((set, get) => ({
  formData: {
    email: "",
    password: "",
  },
  loading: false,
  error: null,
  success: false,
  data: null,

  setField: (field, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [field]: value,
      },
    })),

  submit: async () => {
    set({ loading: true, error: null, success: false });

    try {
      const { formData } = get();
        await axiosInstance.post("account/login/", formData);
      set({ success: true });
    } catch (err: any) {
      set({ error: err.response?.data?.message || "Something went wrong" });
    } finally {
      set({ loading: false });
    }
  },
}));
