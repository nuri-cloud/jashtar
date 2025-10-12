import { create } from "zustand";
import { axiosUser } from "@/app/api/apiUser";


export interface Profile {
    telegram_channel: string;
    google_form_link: string;
    projects: Array<{
        id: number;
        title: string;
        description: string;
        image: string;
    }>;
    education_materials: Array<{
        id: number;
        title: string;
        attachment_type: string;
        attachment: string;
        link: string;
    }>;
}

interface ProfileState {
    profile: Profile | null;
    loading: boolean;
    error: string | null;
    fetchProfile: () => Promise<void>;
}

export const useProfileStore = create<ProfileState>((set) => ({
    profile: null,
    loading: false,
    error: null,
    fetchProfile: async () => {
        try {
            const response = await axiosUser.get<Profile>(`/account/cabinet/`);
            set({ profile: response.data, loading: false, error: null });
        } catch (error) {
            set({ error: "Failed to fetch profile", loading: false });
        }
    }
}));
