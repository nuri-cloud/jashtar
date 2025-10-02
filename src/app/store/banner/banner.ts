import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";
import { AxiosError } from "axios";

export interface Banner {
  id: number;
//   title: string;
  description: string;
  image: string;
  cta_text: string;
  ta_link: string
}

interface BannerState {
  banners: Banner[];
  loading: boolean;
  error: string | null;
  fetchBanners: () => Promise<void>;
}

export const BannerStore = create<BannerState>((set) => ({
  banners: [],
  loading: false,
  error: null,

  fetchBanners: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get<Banner[]>(`home/banners/`);
      console.log("Banners API:", response.data);
      set({ banners: response.data });
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      set({
        error: error.response?.data?.message || "Не удалось загрузить баннеры",
      });
    } finally {
      set({ loading: false });
    }
  },
}));
