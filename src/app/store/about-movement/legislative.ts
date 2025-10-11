// src/app/store/legislative/legislative.ts

import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";

// --- ИНТЕРФЕЙСЫ API ---
interface LawApi {
  id: number;
  law: string; // Название закона
  description: string;
  file: string | null; // Ссылка на PDF-файл
  date: string; // Дата
}

// --- ИНТЕРФЕЙСЫ СТОРА ---
interface Law {
  id: number;
  date: string;
  title: string;
  description: string;
  link: string; // Абсолютная ссылка на файл
}

interface LegislativeState {
  laws: Law[];
  loading: boolean;
  error: string | null;
  fetchLaws: () => Promise<void>;
}

// --- ФУНКЦИИ-ХЕЛПЕРЫ ---
// Предполагаем, что вам может понадобиться getFullImageUrl, если ссылки относительные
const mediaPrefix = axiosInstance.defaults.baseURL?.replace('/api', '') || '';

const getFullImageUrl = (relativePath: string): string => {
  if (!relativePath || relativePath.startsWith('http')) {
    return relativePath; 
  }
  const normalizedPath = relativePath.startsWith('/') ? relativePath.substring(1) : relativePath;
  return `${mediaPrefix}/${normalizedPath}`;
};

// --- СОЗДАНИЕ И ЭКСПОРТ СТОРА ---
export const useLegislativeStore = create<LegislativeState>((set) => ({
  laws: [],
  loading: false,
  error: null,

  fetchLaws: async () => {
    set({ loading: true, error: null }); 
    try {
      const response = await axiosInstance.get<LawApi[]>("/about_direction/legislative/");
      
      const transformedLaws: Law[] = response.data.map((item) => ({
        id: item.id,
        date: item.date,
        title: item.law, // Используем 'law' API как 'title' стора
        description: item.description,
        link: item.file ? getFullImageUrl(item.file) : '#', // Преобразуем и используем 'file' как 'link'
      }));

      set({ laws: transformedLaws, loading: false });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Неизвестная ошибка при загрузке законов";
      set({ laws: [], loading: false, error: errorMessage });
    }
  },
}));