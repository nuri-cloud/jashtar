import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://grubworm-calm-vaguely.ngrok-free.app/",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

axiosInstance.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});


