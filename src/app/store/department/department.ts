import { create } from "zustand";
import { axiosInstance } from "@/app/api/apiclient";

interface Employee {
  id: number;
  name: string;
  position: string;
  image: string | null;
}

interface Department {
  id: number;
  title: string;
  description: string;
  address: string;
  employees: Employee[];
}

const mediaPrefix = axiosInstance.defaults.baseURL?.replace("/api", "") || "";
const getFullImageUrl = (relativePath: string | null): string => {
  if (!relativePath || relativePath.startsWith("http")) {
    return relativePath || "";
  }
  const normalizedPath = relativePath.startsWith("/")
    ? relativePath.substring(1)
    : relativePath;
  return `${mediaPrefix}/${normalizedPath}`;
};

interface DepartmentState {
  departments: Department[];
  loading: boolean;
  error: string | null;
  fetchDepartments: () => Promise<void>;
}

export const useDepartmentStore = create<DepartmentState>((set) => ({
  departments: [],
  loading: false,
  error: null,

  fetchDepartments: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get<any[]>("/content/departments/");
      const transformedDepartments: Department[] = response.data.map((item) => ({
        id: item.id,
        title: item.title.replace(/"/g, ""),
        description: item.description.replace(/"/g, ""),
        address: item.address,
        employees: item.employees.map((emp: any) => ({
          id: emp.id,
          name: emp.name,
          position: emp.position,
          image: getFullImageUrl(emp.image),
        })),
      }));
      set({ departments: transformedDepartments, loading: false });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Неизвестная ошибка при загрузке отделений";
      set({ departments: [], loading: false, error: errorMessage });
    }
  },
}));
