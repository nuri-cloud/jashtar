import React from 'react';
import { CalendarIcon } from 'lucide-react';
import styles from './PhotoCard.module.scss';

interface PhotoCardProps {
  id: number;
  date: string;
  title: string;
  imageUrl: string;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ date, title, imageUrl }) => {
  return (
    <article className={styles.card}>
      <div className='relative'>

        <div
          className={styles.image}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.dateContainer}>
          <CalendarIcon className={styles.calendarIcon} />
          <time className={styles.date}>{date}</time>
        </div>

        <h2 className={styles.title}>{title}</h2>
      </div>
    </article>
  );
};