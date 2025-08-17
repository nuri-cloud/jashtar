import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://38.180.136.75/api/",
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


