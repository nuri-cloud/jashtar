import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";
import { AxiosError } from "axios";

interface Images {
    id: number;
    event: number;
    image: string
}

export interface Events {
    id: number;
    title: string;
    description: string;
    date: string;
    event_status: string;
    images: Images[];
}



interface EventsState {
    event: Events[];
    loading: boolean;
    error: string | null;
    fetchevents: () => Promise<void>;
}

export const eventsStore = create<EventsState>((set) => ({
    event: [],
    loading: false,
    error: null,

    fetchevents: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axiosInstance.get<Events[]>("content/events/");
            // console.log("API response:", response);

            set({ event: response.data });
        } catch (err) {
            const error = err as AxiosError<{ message: string }>;
            set({ error: error.response?.data?.message || "Something went wrong" });
        } finally {
            set({ loading: false });
        }
    },
}));
