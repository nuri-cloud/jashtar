// import type { FC } from 'react';
// import { useEffect } from 'react';
// import styles from './MovementSection.module.scss';
// import { MultiContainer, Typography } from '@/shared/ui';
// import { useAboutMovementStore } from '@/app/store/about-movement/aboutMovementStore';

// export const MovementSection: FC = () => {
//   const { data, loading, error, fetchAboutMovement } = useAboutMovementStore();

//   useEffect(() => {
//     fetchAboutMovement();
//   }, [fetchAboutMovement]);

//   if (loading) {
//     return <div className={styles.loading}>Загрузка данных о движении...</div>;
//   }

//   if (error) {
//     return <div className={styles.error}>Ошибка при загрузке данных: {error}</div>;
//   }

//   if (!data) {
//     return <div className={styles.empty}>Нет данных о движении</div>;
//   }

//   return (
//     <section className={styles.movementSection}>
//       <MultiContainer>
//         <div className={styles.content}>
//           <Typography variant="h6" color="black" className={styles.title}>
//             {data.title}
//           </Typography>
//           <Typography variant="bodyText" color="black" className={styles.paragraph}>
//             {data.description}
//           </Typography>
//           <div className={styles.imageWrapper}>

//             <img src={data.image} alt="Изображение" className={styles.image} />
//             <img src={data.image} alt="Изображение" className={styles.image1} />
//           </div>
//         </div>
//       </MultiContainer>
//     </section>
//   );
// };


import type { FC } from 'react';
import { useEffect } from 'react';
import styles from './MovementSection.module.scss';
import { MultiContainer, Typography } from '@/shared/ui';
import { useAboutMovementStore } from '@/app/store/about-movement/aboutMovementStore';
import { useTranslation } from 'react-i18next'; // Импортируем для отслеживания языка

export const MovementSection: FC = () => {
  const { data, loading, error, fetchAboutMovement } = useAboutMovementStore();
  const { i18n } = useTranslation(); // Получаем i18n для отслеживания языка

  useEffect(() => {
    fetchAboutMovement();
    // ИСПРАВЛЕНИЕ: Добавляем i18n.language в зависимости для смены языка
  }, [fetchAboutMovement, i18n.language]); 

  if (loading) {
    return <div className={styles.loading}>Загрузка данных о движении...</div>;
  }

  if (error) {
    return <div className={styles.error}>Ошибка при загрузке данных: {error}</div>;
  }

  if (!data) {
    return <div className={styles.empty}>Нет данных о движении</div>;
  }
  
  // Очистка данных от кавычек
  const title = data.title.replace(/"/g, '');
  const description = data.description.replace(/"/g, '');


  return (
    <section className={styles.movementSection}>
      <MultiContainer>
        <div className={styles.content}>
          <Typography variant="h6" color="black" className={styles.title}>
            {title}
          </Typography>
          <Typography variant="bodyText" color="black" className={styles.paragraph}>
            {description}
          </Typography>
          <div className={styles.imageWrapper}>

            <img src={data.image} alt="Изображение 1" className={styles.image} />
            <img src={data.image} alt="Изображение 2" className={styles.image1} />
          </div>
        </div>
      </MultiContainer>
    </section>
  );
};