// src/app/store/activity/activityStore.ts
import { create } from 'zustand';
import { axiosInstance } from '@/app/api/apiclient';

interface Activity {
  id: number;
  title: string;
  short_description: string;
  description: string;
  image?: string;
  telegram_link?: string;
  instagram_link?: string;
}

interface ActivityState {
  data: Activity[];
  loading: boolean;
  error: string | null;
  fetchActivities: () => Promise<void>;
}

export const useActivityStore = create<ActivityState>((set) => ({
  data: [],
  loading: false,
  error: null,
  fetchActivities: async () => {
    try {
      set({ loading: true });
      const res = await axiosInstance.get('/content/activity_direction/');
      // проверим, если API возвращает results
      const activities = res.data.results || res.data;
      set({ data: activities, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));
