import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://grubworm-calm-vaguely.ngrok-free.app/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    "ngrok-skip-browser-warning": "true", // ← обязательный хедер
  },
});
