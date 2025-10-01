import { create } from "zustand";
import { setLanguage } from "../api/apiclient";
import { useAboutMovementStore } from "./about-movement/aboutMovementStore"; // пример стора с запросами

interface LanguageState {
  currentLang: "ky" | "ru" | "en";
  changeLang: (lang: "ky" | "ru" | "en") => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  currentLang: (localStorage.getItem("lang") as "ky" | "ru" | "en") || "ru",
  changeLang: (lang) => {
    setLanguage(lang); // меняем axios хедер
    localStorage.setItem("lang", lang);
    set({ currentLang: lang });

    // сразу дергаем стор, чтобы обновить данные
    useAboutMovementStore.getState().fetchAboutMovement();
  },
}));
