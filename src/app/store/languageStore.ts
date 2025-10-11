import { create } from "zustand";
import { setLanguage } from "../api/apiclient";

// ИСПРАВЛЕНИЕ: Предполагаем, что путь и имя файла теперь верны
import { useAboutMovementStore } from "./about-movement/aboutMovementStore"; 
import { NewsStore } from "./news/news";
import { eventsStore } from "./events/events";
import { BannerStore } from "./banner/banner";
import { useAdvantagesStore } from "./advantages/advantages";

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

    // Сразу дергаем сторы, чтобы обновить данные
    useAboutMovementStore.getState().fetchAboutMovement(); // Используем один, исправленный стор
    NewsStore.getState().fetchnews();
    eventsStore.getState().fetchevents();
    BannerStore.getState().fetchBanners();
    
    // Если useAboutMovementStore2 и useAboutMovementStore — это один и тот же стор,
    // просто повторно вызываем его fetch-функцию.
    useAboutMovementStore.getState().fetchAboutMovement(); 
    useAdvantagesStore.getState().fetchAdvantages();
  },
}));