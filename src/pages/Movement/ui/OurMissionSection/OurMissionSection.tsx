
import styles from './OurMissionSection.module.scss';
import movementsection2 from '../../../../shared/assets/images/movementsection2.svg'
import movementsection3 from '../../../../shared/assets/images/movementsection3.svg'
import movementsection4 from '../../../../shared/assets/images/movementsection4.svg'
import movementsection5 from '../../../../shared/assets/images/movementsection5.svg'
import movementsection6 from '../../../../shared/assets/images/movementsection6.svg'
import { FC } from 'react';
import { MultiContainer, Typography } from '@/shared/ui';


export const OurMissionSection: FC = () => {
  return (
    <section className={styles.ourMissionSection}>
      <MultiContainer>
        <div className={styles.content}>
          <Typography variant="h6" color="black" className={styles.title}>
            Цели и миссии
          </Typography>
          <Typography variant="bodyText" color="black" className={styles.paragraph}>
            Принимая во внимание показатели успешности, консультация с широким активом говорит о возможностях системы обучения кадров, соответствующей насущным потребностям. Но существующая теория предполагает независимые способы реализации форм воздействия. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: социально-экономическое развитие предопределяет высокую востребованность модели развития! Идейные соображения высшего порядка, а также повышение уровня гражданского сознания не даёт нам иного выбора, кроме определения экспериментов, поражающих по своей масштабности и грандиозности.
          </Typography> 

          <hr className={styles.divider} />
      
          <div className={styles.imageGrid}> 
            <div className={styles.galleryTop}>
              <img src={movementsection2} alt="img2" className={styles.image2} />
              <img src={movementsection3} alt="img3" className={styles.image3} />
              <img src={movementsection4} alt="img4" className={styles.image4} />
            </div>

           <div className={styles.galleryBottom}>
            <img src={movementsection5} alt="img5" className={styles.image5} />
            <img src={movementsection6} alt="img6" className={styles.image6} />
           </div>  
          </div>
        </div>
      </MultiContainer>
    </section>
  );
};