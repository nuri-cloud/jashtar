// store/videoStore.ts
import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";

export interface VideoItem {
  id: number;
  title: string;
  video_url: string;
}

interface VideoState {
  videos: VideoItem[];
  loading: boolean;
  error: string | null;
  fetchVideos: () => Promise<void>;
}

export const useVideoStore = create<VideoState>((set) => ({
  videos: [],
  loading: false,
  error: null,
  fetchVideos: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get<VideoItem[]>("content/video-archives/");
      set({ videos: response.data, loading: false });
    } catch (err: any) {
      set({ error: err.message || "Ошибка при загрузке видео", loading: false });
    }
  },
}));
