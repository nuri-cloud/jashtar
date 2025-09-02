import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";
import { AxiosError } from "axios";

export interface Material {
    id: number;
    title: string;
    description: string;
    slug:string;
    image:string;
}

interface MaterialsState {
    materials: Material[];
    loading: boolean;
    error: string | null;
    fetchMaterials: () => Promise<void>;
}

export const useMaterialsStore = create<MaterialsState>((set) => ({
    materials: [],
    loading: false,
    error: null,

    fetchMaterials: async () => {
    set({ loading: true, error: null });
    try {
        const response = await axiosInstance.get<Material[]>("content/brand-materials/");
        console.log("API response:", response);

        set({ materials: response.data });
    } catch (err) {
        const error = err as AxiosError<{ message: string }>;
        set({ error: error.response?.data?.message || "Something went wrong" });
    } finally {
        set({ loading: false });
    }
},
}));