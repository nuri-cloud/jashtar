import { useEffect } from "react";
import { useDepartmentStore } from "@/app/store/department/department";
import location from "@/shared/assets/images/locastion.svg";
import styles from "./BranchName.module.scss";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import right from "@/shared/assets/icons/arrow-right.svg";
import left from "@/shared/assets/icons/arrow-left.svg";
import { useTranslation } from "react-i18next";

function SampleNextArrow({ onClick }: CustomArrowProps) {
  return (
    <button
      className={`${styles["custom-arrow"]} ${styles["next"]}`}
      onClick={onClick}
    >
      <img src={left} alt="Previous" />
    </button>
  );
}

function SamplePrevArrow({ onClick }: CustomArrowProps) {
  return (
    <button
      className={`${styles["custom-arrow"]} ${styles["prev"]}`}
      onClick={onClick}
    >
      <img src={right} alt="Next" />
    </button>
  );
}

export const BranchName = () => {
  const { departments, loading, error, fetchDepartments } = useDepartmentStore();
  const { i18n } = useTranslation();

  useEffect(() => {
    fetchDepartments();
  }, [i18n.language, fetchDepartments]);
  

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  if (loading) return <p>Загрузка отделений...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className={styles.branchesContainer}>
      {departments.map((department) => (
        <section key={department.id} className={styles.branch}>
          <div className={styles.header}>
            <h2 className={styles.title}>{department.title}</h2>
            <p className={styles.subtitle}>{department.description}</p>
            <div className={styles.location}>
              <img src={location} alt="Location Icon" />
              <span>{department.address}</span>
            </div>
          </div>

          <Slider {...sliderSettings} className={styles.slider}>
            {department.employees.map((emp) => (
              <div key={emp.id} className={styles.cardWrapper}>
                <div className={styles.card}>
                  <img
                    src={emp.image || ""}
                    alt={emp.name}
                    className={styles.photo}
                  />
                  <div className={styles.info}>
                    <h4>{emp.name}</h4>
                    <p>{emp.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      ))}
    </div>
  );
};
