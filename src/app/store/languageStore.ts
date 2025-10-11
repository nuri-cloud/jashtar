import { create } from "zustand";
import { setLanguage } from "../api/apiclient";

import { useImagesStore } from "./Media/images";
import { useVideoStore } from "./Media/video";
import { useAboutMovementStore } from "./about-movement/aboutMovementStore";
import { useAboutMovementStore2 } from "./aboutmovement/aboutmovement";
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
    // ✅ Обновляем язык в API
    setLanguage(lang);
    localStorage.setItem("lang", lang);
    set({ currentLang: lang });

    // ✅ После смены языка обновляем все данные
    try {
      useAboutMovementStore.getState().fetchAboutMovement();
      useAboutMovementStore2.getState().fetchAboutMovement();

      NewsStore.getState().fetchnews();
      eventsStore.getState().fetchevents();
      BannerStore.getState().fetchBanners();
      useAdvantagesStore.getState().fetchAdvantages();

      useVideoStore.getState().fetchVideos();
      useImagesStore.getState().fetchImages();
    } catch (error) {
      console.error("Ошибка при обновлении данных после смены языка:", error);
    }
  },
}));
