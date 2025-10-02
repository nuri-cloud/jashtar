import React, { useEffect } from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { PhotoCard } from '../PhotoCard/PhotoCard';
import styles from './PhotoGallery.module.scss';
import { useNavigate } from 'react-router-dom';
import { useImagesStore } from '@/app/store/Media/images';
import { log } from 'console';

// Определение интерфейсов
interface GalleryImage {
  id: number;
  gallery: number;
  image: string;
}

interface ApiImageItem {
  id: number;
  title: string;
  date?: string;
  images: GalleryImage[];
}

interface ImageItem {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
}

export const PhotoGallery: React.FC = () => {
  const navigate = useNavigate();
  const { imagesCards, loading, error, fetchImages } = useImagesStore();
  
  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  console.log(imagesCards);
  

  // Безопасное преобразование с проверкой типов
  // const typedImages: ImageItem[] = imagesCards.map((item: any) => {
  //   // Проверяем, что item имеет нужную структуру
  //   const imagesArray = item.images && Array.isArray(item.images) ? item.images : [];
  //   const firstImage = imagesArray.length > 0 ? imagesArray[0] : null;
    
  //   return {
  //     id: item.id || 0,
  //     title: item.title || 'Без названия',
  //     date: item.date || 'default-date',
  //     imageUrl: firstImage?.image || ''
  //   };
  // });
    return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Фотогалерея</h1>

        <button onClick={() => navigate("/photoGallery")} className={styles.button}>
          <span className={styles.buttonText}>Все фото</span>
          <ArrowRightIcon className={styles.buttonIcon} />
        </button>
      </header>

      <main className={styles.gallery}>
        {loading ? (
          <p>Загрузка...</p>
        ) : error ? (
          <p className={styles.error}>Ошибка: {error}</p>
        ) : imagesCards.length === 0 ? (
          <p>Нет доступных изображений.</p>
        ) : (
          imagesCards.slice(0, 6).map((item) => (
            <PhotoCard
              key={item.id}
              id={item.id}
              // date={item.date}
              // title={item.title}
              // imageUrl={item.imageUrl}
            />
          ))
        )}
      </main>
    </div>
  );
};