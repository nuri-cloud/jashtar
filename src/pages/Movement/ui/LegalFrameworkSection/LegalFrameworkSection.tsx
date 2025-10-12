import { FC, useEffect } from "react";
import { MultiContainer, Typography } from "@/shared/ui";
import styles from "./LegalFrameworkSection.module.scss";
import CalendarIcon from "@/shared/assets/images/Legalframeworksection1.svg";
import { useTranslation } from "react-i18next";
import { useLegislativeStore } from "@/app/store/about-movement/legislative";

export const LegalFrameworkSection: FC = () => {
  const { t, i18n } = useTranslation();
  const { laws, loading, error, fetchLaws } = useLegislativeStore();

  useEffect(() => {
    fetchLaws();
  }, [fetchLaws, i18n.language]);

  return (
    <section className={styles.legalFrameworkSection}>
      <MultiContainer>
        <div className={styles.content}>
          <Typography variant="h6" color="white" className={styles.title}>
            {t("aboutTheMovement.laws")}
          </Typography>

          {loading && <p>Загрузка...</p>}
          {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}

          <div className={styles.cardsWrapper}>
            {laws.map((law) => (
              <div key={law.id} className={styles.card}>
                <div className={styles.date}>
                  <span className={styles.icon}>
                    <img src={CalendarIcon} alt="calendar icon" />
                  </span>
                  <span>
                    {new Date(law.date).toLocaleDateString("ru-RU", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className={styles.lawTitle}>{law.title}</div>
                <div className={styles.lawDesc}>{law.description}</div>

                {law.link && law.link !== "#" ? (
                  <a
                    className={styles.downloadBtn}
                    href={law.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Скачать PDF
                  </a>
                ) : (
                  <button className={styles.disabledBtn} disabled>
                    Нет файла
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </MultiContainer>
    </section>
  );
};
