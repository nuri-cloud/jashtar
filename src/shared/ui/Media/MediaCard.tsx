import React from "react";
import { ImageIcon } from "lucide-react";
import styles from "./AlbumCard.module.scss";
import { useTranslation } from "react-i18next";

interface PhotoCardProps {
  id: number;
  date?: string | null;
  title?: string | null;
  imageUrl?: string;
}

export const AlbumCard: React.FC<PhotoCardProps> = ({id, date, imageUrl, title}) => {
  const { t } = useTranslation();
  return (
    <article className={styles.card} >
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={title || ""} className={styles.image} />
        <div className={styles.count}>
          <ImageIcon className={styles.icon} />
          {/* <span>{count}</span> */}
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title || t("PhotoGallery.noTitle")}</h3>
        {/* <p className={styles.event}>&quot;{event}&quot;</p> */}
      </div>
    </article>
  );
};
