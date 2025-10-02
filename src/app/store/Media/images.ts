// store/useImagesStore.ts
import { create } from "zustand";
import axios from "axios";
import { axiosInstance } from "@/app/api/apiclient";
import { log } from "console";

interface ImageItem {
  id: number;
  gallery: number;
  image: string;
}

interface ImagesState {
  imagesCards: ImageItem[];
  loading: boolean;
  error: string | null;
  fetchImages: () => Promise<void>;
}

export const useImagesStore = create<ImagesState>((set) => ({
  imagesCards: [],
  loading: false,
  error: null,

  fetchImages: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get("content/events/");

      // маппинг под твой интерфейс
      const mappedData: ImageItem[] = response.data.map((item: any) => ({
        id: item.id,
        title: `Gallery ${item.gallery}`, // можно придумать лейбл
        images: [item.image],             // делаем массив
        date: new Date().toISOString(),   // временно подставляем текущую дату
      }));
      console.log("Fetched images:", mappedData);

      set({ imagesCards: mappedData, loading: false });
    } catch (err) {
      set({ error: "Не удалось загрузить изображения", loading: false });
    }
  },
}));
