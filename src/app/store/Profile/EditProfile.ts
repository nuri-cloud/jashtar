import { create } from "zustand";
import { axiosUser } from "@/app/api/apiUser";

export interface Profile {
    telegram_channel: string;
    google_form_link: string;
}
interface EditProfileState {
    profile: Profile | null;
    loading: boolean;
    error: string | null;
    updateProfile: (data: Partial<Profile>) => Promise<void>;
}

export const useEditProfileStore = create<EditProfileState>((set) => ({
    profile: null,
    loading: false,
    error: null,
    updateProfile: async (data) => {
        set({ loading: true, error: null });
        try {
            const response = await axiosUser.patch<Profile>(`/account/cabinet/`, data);
            set({ profile: response.data, loading: false, error: null });
        } catch (error) {
            set({ error: "Failed to update profile", loading: false });
        }
    }
}));