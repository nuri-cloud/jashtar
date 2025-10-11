import { useEffect, useState } from "react";
import styles from "./Result.module.scss";
import { MultiContainer, Typography } from "@/shared/ui";
import { axiosInstance } from "@/app/api/apiclient"; // если ты используешь общий axiosInstance
import { useTranslation } from "react-i18next";

interface ResultItem {
  id: number;
  title: string;
  description: string;
}

export function Result() {
  const { i18n } = useTranslation(); // берем текущий язык
  const [result, setResult] = useState<ResultItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchResult = async (lang: string) => {
    try {
      setLoading(true);
      setError(null);

      // 🔥 если бэк поддерживает ?lang=
      const response = await axiosInstance.get<ResultItem[]>(
        `/content/results/?lang=${lang}`
      );

      if (response.data && response.data.length > 0) {
        setResult(response.data[0]);
      } else {
        setResult(null);
      }
    } catch (err) {
      console.error("Ошибка при загрузке результатов:", err);
      setError("Не удалось загрузить данные");
    } finally {
      setLoading(false);
    }
  };

  // 👇 загружаем при монтировании и при смене языка
  useEffect(() => {
    fetchResult(i18n.language || "ru");
  }, [i18n.language]);

  if (loading) {
    return (
      <section className={styles.resultSection}>
        <MultiContainer>
          <p>Загрузка...</p>
        </MultiContainer>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.resultSection}>
        <MultiContainer>
          <p style={{ color: "red" }}>{error}</p>
        </MultiContainer>
      </section>
    );
  }

  if (!result) return null;

  // 🔥 description может приходить как длинный текст — делим его на предложения
  const descriptionParts = result.description
    ? result.description.split(/\r?\n|\. ?/).filter(Boolean)
    : [];

  return (
    <section className={styles.resultSection}>
      <MultiContainer>
        <div className={styles.content}>
          <Typography variant="h2" className={styles.title} color="black">
            {result.title}
          </Typography>

          <ul className={styles.list}>
            {descriptionParts.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>
      </MultiContainer>
    </section>
  );
}
