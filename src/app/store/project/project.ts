import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ProjectState {
  data: Project[];
  loading: boolean;
  error: string | null;
  fetchProjects: () => Promise<void>;
}


export const useProjectStore = create<ProjectState>((set) => ({
  data: [],
  loading: false,
  error: null,

  fetchProjects: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get("/content/projects/");
      const apiData = response.data;

      const transformedData: Project[] = apiData.map((item: any) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        image: item.image,
      }));

      set({ data: transformedData, loading: false });
    } catch (err: any) {
      console.error("Ошибка при загрузке проектов:", err.message);
      set({ data: [], loading: false, error: err.message });
    }
  },
}));
