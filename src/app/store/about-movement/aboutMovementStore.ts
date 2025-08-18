// src/store/about-movement/aboutMovementStore.ts
import { create } from 'zustand';
import { axiosInstance } from '@/app/api/apiclient';

interface AboutMovement {
  id: number;
  title: string;
  description: string;
  image: string;
  image1: string; // Предполагаю, что второе изображение также приходит с API
}

interface AboutMovementState {
  data: AboutMovement | null;
  loading: boolean;
  error: string | null;
  fetchAboutMovement: () => Promise<void>;
}

export const useAboutMovementStore = create<AboutMovementState>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchAboutMovement: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get('/home/about-movement/');
      
      // Предполагаем, что API возвращает один объект.
      // Если возвращается массив, нужно выбрать первый элемент: response.data[0]
      const apiData = response.data;

      // Трансформируем данные, если ключи отличаются
      const transformedData = {
        id: apiData.id,
        title: apiData.title,
        description: apiData.text, // Пример: API использует ключ 'text'
        image: `http://38.180.136.75${apiData.image_url}`, // Пример: API возвращает относительный путь
        image1: `http://38.180.136.75${apiData.second_image_url}`, // Предполагаем второй ключ
      };
      
      set({ data: transformedData, loading: false });
    } catch (err: any) {
      set({ data: null, loading: false, error: err.message });
    }
  },
}));