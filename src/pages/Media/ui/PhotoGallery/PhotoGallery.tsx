import { ArrowRightIcon } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PhotoCard } from '../PhotoCard/PhotoCard';
import styles from './PhotoGallery.module.scss';
import { useTranslation } from 'react-i18next';

const photoData = [
  {
    id: 1,
    date: "12.03.2025",
    title: 'Название фото "Название"',
    imageUrl: "./image-5.png",
  },
  {
    id: 2,
    date: "12.03.2025",
    title: 'Название фото "Название"',
    imageUrl: "./image-5.png",
  },
  {
    id: 3,
    date: "12.03.2025",
    title: 'Название фото "Название"',
    imageUrl: "./image-5.png",
  },
  {
    id: 4,
    date: "12.03.2025",
    title: 'Название фото "Название"',
    imageUrl: "./image-5.png",
  },
  {
    id: 5,
    date: "12.03.2025",
    title: 'Название фото "Название"',
    imageUrl: "./image-5.png",
  },
  {
    id: 6,
    date: "12.03.2025",
    title: 'Название фото "Название"',
    imageUrl: "./image-5.png",
  },
];

export const PhotoGallery: React.FC = () => {
    const navigate = useNavigate();
    const {t , i18n} = useTranslation()
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{t('media.PhotoGallery')}</h1>
        
        <button onClick={() => navigate("/photoGallery")} className={styles.button}>
          <span className={styles.buttonText}>{t('media.allPhoto')}</span>
          <ArrowRightIcon className={styles.buttonIcon} />
        </button>
      </header>

      <main className={styles.gallery}>
        {photoData.map((photo) => (
          <PhotoCard
            key={photo.id}
            id={photo.id}
            date={photo.date}
            title={photo.title}
            imageUrl={photo.imageUrl}
          />
        ))}
      </main>
    </div>
  );
};