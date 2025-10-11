// src/app/store/project/project.ts

import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";

// --- ИНТЕРФЕЙСЫ API: Как данные приходят с сервера ---
interface ProjectImageApi {
  id: number;
  project: number;
  image: string; // Поле в массиве 'images'
}

interface ProjectListApi {
    id: number;
    title: string;
    description: string;
    image: string; // Главная картинка приходит здесь
}

interface ProjectDetailApi {
  id: number;
  title: string;
  description: string;
  goals: string; 
  tasks: string; 
  images?: ProjectImageApi[]; // Доп. фото приходят здесь
}

// --- ИНТЕРФЕЙСЫ СТОРА: Как данные хранятся во фронтенде ---
interface Project {
  id: number;
  title: string;
  description: string;
  image: string; // Главная картинка
  goals: string; 
  tasks: string; 
  photos: { url: string }[]; // Преобразованный массив для галереи
}

interface ProjectState {
  data: Project[];
  loading: boolean;
  error: string | null;
  currentProject: Project | null; 
  fetchProjects: () => Promise<void>;
  fetchProjectById: (id: number) => Promise<void>;
}

// --- ФУНКЦИИ-ХЕЛПЕРЫ ---
// Предполагаем, что медиа лежит по адресу без /api
const mediaPrefix = axiosInstance.defaults.baseURL?.replace('/api', '') || '';

const getFullImageUrl = (relativePath: string): string => {
  if (!relativePath || relativePath.startsWith('http')) {
    return relativePath; 
  }
  const normalizedPath = relativePath.startsWith('/') ? relativePath.substring(1) : relativePath;
  return `${mediaPrefix}/${normalizedPath}`;
};

// --- СОЗДАНИЕ И ЭКСПОРТ СТОРА ---
export const useProjectStore = create<ProjectState>((set) => ({
  data: [], 
  loading: false,
  error: null,
  currentProject: null,

  // 1. Загрузка списка проектов (для /project)
  fetchProjects: async () => {
    set({ data: [], loading: true, error: null }); 
    try {
      const response = await axiosInstance.get<ProjectListApi[]>("/content/projects/");
      
      const transformedData: Project[] = response.data.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        image: getFullImageUrl(item.image), // Главное фото приходит здесь
        goals: "", // Здесь этих полей нет
        tasks: "", // Здесь этих полей нет
        photos: [], // Здесь доп. фото нет
      }));

      set({ data: transformedData, loading: false });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Неизвестная ошибка при загрузке списка";
      set({ data: [], loading: false, error: errorMessage });
    }
  },

  // 2. Загрузка деталей проекта (для /project/:id)
  fetchProjectById: async (id: number) => {
    set({ currentProject: null, loading: true, error: null }); 
    try {
      const response = await axiosInstance.get<ProjectDetailApi>(`/content/projects/${id}/`);
      const item = response.data;
      
      // Преобразуем массив 'images' в массив 'photos' с абсолютными URL
      const rawImages = item.images || [];
      const transformedPhotos = rawImages.map(p => ({ url: getFullImageUrl(p.image) }));
      
      // ✅ ФИКС: Главное фото = первое фото из массива 'images'
      const mainImage = transformedPhotos[0] ? transformedPhotos[0].url : '';
      
      const transformedData: Project = {
        id: item.id,
        title: item.title,
        description: item.description,
        image: mainImage, // Главное фото
        goals: item.goals, 
        tasks: item.tasks, 
        photos: transformedPhotos, // Весь массив фото для галереи
      };

      set({ currentProject: transformedData, loading: false });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Неизвестная ошибка при загрузке деталей";
      set({ currentProject: null, loading: false, error: errorMessage });
    }
  },
}));