import type { FC } from 'react';
import styles from './Management.module.scss';
import { MultiContainer, Typography } from '@/shared/ui';

const person1 = 'https://picsum.photos/400/500';
const person2 = 'https://picsum.photos/400/501';
const person3 = 'https://picsum.photos/400/502';
const person4 = 'https://picsum.photos/400/503';

const managementData = [
  {
    image: person1,
    name: 'Фамилия Имя Отчество',
    position: 'Должность',
  },
  {
    image: person2,
    name: 'Фамилия Имя Отчество',
    position: 'Должность',
  },
  {
    image: person3,
    name: 'Фамилия Имя Отчество',
    position: 'Должность',
  },
  {
    image: person4,
    name: 'Фамилия Имя Отчество',
    position: 'Должность',
  },
];

export const Management: FC = () => {
  return (
    <section className={styles.management}>
      <MultiContainer>
        <div className={styles.content}>
          <Typography variant="h6" color="black" className={styles.title}>
            Руководство
          </Typography>

          <div className={styles.cardWrapper}>
            {managementData.map((person, index) => (
              <div key={index} className={styles.personCard}>
                <img src={person.image} alt={person.name} className={styles.personImage} />
                <div className={styles.personInfo}>
                  <div className={styles.shadowOverlay}></div> {/* Кара тень үчүн */}
                  <Typography variant="bodyText" color="white" className={styles.personName}>
                    {person.name}
                  </Typography>
                  <Typography variant="bodyText" color="white" className={styles.personPosition}>
                    "{person.position}"
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MultiContainer>
    </section>
  );
};