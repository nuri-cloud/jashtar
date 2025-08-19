import funChildImage from "@/shared/assets/images/fun-child.jpg";
import { SwiperSlide } from "swiper/react";
import styles from "./../BannerSlider.module.scss";

const FirstSlide = () => {
  return (
    <SwiperSlide>
      <div className={styles.banner}>
        <img src={funChildImage} alt="banner" className={styles.bannerBg} />
        <div className={styles.bannerOverlay}></div>

        <div className={styles.bannerContent}>
          <h2>Banner</h2>
          <p>
            Предварительные выводы неутешительны: высококачественный прототип
            будущего проекта создаёт необходимость включения
          </p>
          <button>Вступить в движение →</button>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default FirstSlide;
