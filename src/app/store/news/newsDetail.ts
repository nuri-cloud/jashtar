import { axiosInstance } from "@/app/api/apiclient";
import { AxiosError } from "axios";
import { create } from "zustand";

interface NewsDetail {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

interface NewsDetailState {
  newsdetail: NewsDetail | null; // <-- объект, а не массив
  loading: boolean;
  error: string | null;
  fetchNewsDetail: (id: number) => Promise<void>;
  reset: () => void; // <-- для очистки
}

export const NewsDetailStore = create<NewsDetailState>((set) => ({
  newsdetail: null,
  loading: false,
  error: null,

  fetchNewsDetail: async (id: number) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get<NewsDetail>(`content/news/${id}/`);
      console.log("API response:", response.data);

      set({ newsdetail: response.data });
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      set({ error: error.response?.data?.message || "Something went wrong" });
    } finally {
      set({ loading: false });
    }
  },

  reset: () => set({ newsdetail: null, error: null, loading: false }),
}));
