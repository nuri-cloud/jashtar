import axios from "axios";

const language = localStorage.getItem("lang") || "ru";

export const axiosUser = axios.create({

    baseURL: "https://grubworm-calm-vaguely.ngrok-free.app/api",
    headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "ngrok-skip-browser-warning": "true",
        "Accept-Language": language,
    },
});

const token = localStorage.getItem("access") || ""

if (token) {
    axiosUser.defaults.headers["Authorization"] = `Bearer ${token}`;
}

export const setLanguage = (lang: "ky" | "ru" | "en") => {
    localStorage.setItem("lang", lang);
    axiosUser.defaults.headers["Accept-Language"] = lang;
};