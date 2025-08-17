import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./BannerSlider.module.scss";
import funChildImage from "@/shared/assets/images/fun-child.jpg";
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
