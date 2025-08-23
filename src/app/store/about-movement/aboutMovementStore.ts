import { create } from 'zustand';
import { axiosInstance } from '@/app/api/apiclient';

interface AboutMovement {
  id: number;
  title: string;
  description: string;
  image: string;
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
      const response = await axiosInstance.get('/about_direction/history/');
      
      const apiData = response.data;

      const transformedData = {
        id: apiData.id,
        title: apiData.title,
        description: apiData.description, 
        image: `http://38.180.136.75/${apiData.image}`,
      };
      
      set({ data: transformedData, loading: false });
    } catch (err: any) {
      set({ data: null, loading: false, error: err.message });
    }
  },
}));