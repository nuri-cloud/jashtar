import type { FC } from 'react';
import styles from './MovementSection.module.scss';
import movementsection from '@/shared/assets/images/movementsection.png'
import movementsection1 from '@/shared/assets/images/movementsection1.png'
import { MultiContainer, Typography } from '@/shared/ui';

export const MovementSection: FC = () => {
  return (
    <section className={styles.movementSection}>
      <MultiContainer>
        <div className={styles.content}>
          <Typography variant="h6" color="black" className={styles.title}>
            О движении
          </Typography>
          <Typography variant="bodyText" color="black" className={styles.paragraph}>
          Безусловно, высокотехнологичная концепция общественного уклада предопределяет высокую востребованность системы массового участия. Значимость этих проблем настолько очевидна, что синтетическое тестирование предопределяет высокую востребованность экспериментов, поражающих по своей масштабности и грандиозности. В своём стремлении повысить качество жизни, они забывают, что сложившаяся структура организации выявляет срочную потребность прогресса профессионального сообщества. 
          </Typography>
          <div className={styles.imageWrapper}>
            <img src={movementsection} alt="" className={styles.image} />
            <img src={movementsection1} alt="" className={styles.image1} />
          </div>
        </div>
      </MultiContainer>
    </section>
  );
};