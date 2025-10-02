import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";
import { AxiosError } from "axios";

export interface News {
    id: number;
    title: string;
    description: string;
    date: string;
    image: string
}



interface NewsState {
    news: News[];
    loading: boolean;
    error: string | null;
    fetchnews: () => Promise<void>;
}

export const NewsStore = create<NewsState>((set) => ({
    news: [],
    loading: false,
    error: null,

    fetchnews: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axiosInstance.get<News[]>("content/news/");
            console.log("API response:", response);
            set({ news: response.data });
        } catch (err) {
            const error = err as AxiosError<{ message: string }>;
            set({ error: error.response?.data?.message || "Something went wrong" });
        } finally {
            set({ loading: false });
        }
    },
}));
