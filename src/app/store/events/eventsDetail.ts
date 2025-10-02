import { axiosInstance } from "@/app/api/apiclient";
import { AxiosError } from "axios";
import { create } from "zustand";

interface Image {
  id: number; 
  event: number;
  image: string;
}

interface EventDetail {
  id: number;
  title: string;
  description: string;
  date: string;
  images: Image[]; // массив картинок
  time: string,
  place: string
}

interface EventDetailState {
  eventDetail: EventDetail | null; 
  loading: boolean;
  error: string | null;
  fetchEventDetail: (id: number) => Promise<void>;
  reset: () => void; 
}

export const EventDetailStore = create<EventDetailState>((set) => ({
  eventDetail: null,
  loading: false,
  error: null,

  fetchEventDetail: async (id: number) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get<EventDetail>(`content/events/${id}/`);
      console.log("API response:", response.data);

      set({ eventDetail: response.data });
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      set({ error: error.response?.data?.message || "Something went wrong" });
    } finally {
      set({ loading: false });
    }
  },

  reset: () => set({ eventDetail: null, error: null, loading: false }),
}));
