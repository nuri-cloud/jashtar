// src/app/store/about-movement/ourmissionsection.ts (Исправленная версия)

import { create } from 'zustand';
import { axiosInstance } from '@/app/api/apiclient';
import { useLanguageStore } from '../languageStore';

interface Goal {
  id: number;
  title: string;
  description: string;
  images: string[]; // Массив строк-URL
}

interface AboutGoalState {
  data: Goal | null;
  loading: boolean;
  error: string | null;
  fetchAboutGoal: () => Promise<void>;
}

export const useAboutGoalStore = create<AboutGoalState>((set, get) => ({
  data: null,
  loading: false,
  error: null,

  fetchAboutGoal: async () => {
    const lang = useLanguageStore.getState().currentLang;
    axiosInstance.defaults.headers['Accept-Language'] = lang;

    set({ loading: true, error: null });
    try {
      // Убедитесь, что ответ является массивом
      const response = await axiosInstance.get('/about_direction/goals/');
      
      // Бэкенд возвращает массив, поэтому берем первый элемент
      const apiData = response.data[0]; 

      if (!apiData) {
        throw new Error("Данные о целях не найдены.");
      }
      
      // ИСПРАВЛЕНИЕ #1: Преобразование массива объектов в массив строк-URL
      const imageURLs = (apiData.images || []).map((imgObj: any) => imgObj.image);

      const transformedData: Goal = {
        id: apiData.id ?? 1,
        title: apiData.title,
        description: apiData.description,
        images: imageURLs, // Теперь здесь массив чистых URL
      };

      set({ data: transformedData, loading: false });
    } catch (err: any) {
      console.error("Ошибка при загрузке целей:", err.message);
      set({ data: null, loading: false, error: err.message });
    }
  },
}));