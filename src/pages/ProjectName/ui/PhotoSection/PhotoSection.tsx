import { MultiContainer } from "@/shared/ui";
import type { FC } from "react";
import styles from "./PhotoSection.module.scss";

interface PhotoSectionProps {
  photos: { url: string }[];
}

export const PhotoSection: FC<PhotoSectionProps> = ({ photos }) => {
  if (!photos || photos.length === 0) {
    return null;
  }

  const [photo1, photo2, photo3, photo4] = photos;

  return (
    <MultiContainer className={styles.photoGallery}>
      <div className={styles.gallery}>
        {photo1 && (
          <img
            src={photo1.url}
            alt="Фото проекта 1"
            className={styles.photo1}
          />
        )}
        <div className={styles.photoRow}>
          {photo2 && (
            <img
              src={photo2.url}
              alt="Фото проекта 2"
              className={styles.photo2}
            />
          )}
          {photo3 && (
            <img
              src={photo3.url}
              alt="Фото проекта 3"
              className={styles.photo2}
            />
          )}
        </div>
        {photo4 && (
          <img
            src={photo4.url}
            alt="Фото проекта 4"
            className={styles.photo3}
          />
        )}
      </div>
    </MultiContainer>
  );
};
