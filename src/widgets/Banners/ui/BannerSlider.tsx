import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./BannerSlider.module.scss";
import FirstSlide from "./Slides/FirstSlide";

export default function BannerSlider() {
  const sliders = [FirstSlide, FirstSlide];

  
  return (
    <div className={styles.bannerWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true, el: `.${styles.customPagination}` }}
        navigation
        loop
        className={styles.bannerSwiper}
      >
        {sliders.map((Slide, index) => {
          return (
            <SwiperSlide key={index}>
              <Slide />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles.customPagination}></div>
    </div>
  );
}
