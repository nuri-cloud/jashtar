import React from 'react';
import img from '../../../shared/assets/images/friends.png';
import styles from './DetailOfPresidentSale.module.scss'; 
import { useTranslation } from 'react-i18next';
import ListCourses from '@/widgets/ListCourses/ListCourses';
import Navpanel from '@/widgets/Navpanel/Navpanel';

function DetailOfPresidentSale() {
  const {t, i18n} = useTranslation()
  const activitiesData = [
    { title: "Название курса", description: "Подробнее", imageSrc: img, bgColor: "#5889F6" },
    { title: "Название курса", description: "Подробнее", imageSrc: img, bgColor: "#57D175" },
    { title: "Название курса", description: "Подробнее", imageSrc: img, bgColor: "#AC7F5E" },
    { title: "Название курса", description: "Подробнее", imageSrc: img, bgColor: "#6155F5" },
    { title: "Название курса", description: "Подробнее", imageSrc: img, bgColor: "#EC5E61" },
    {title: "Название курса", description: "Подробнее", imageSrc: img, bgColor: "#E7BC5E" },
  ];

  return (
    <section className={styles.activitiesSection}>
      <Navpanel text={t('presidentSaleDetail.home')} link='/' text2={t('presidentSaleDetail.presidentSale')} link2='/presidentSale' text3={t('presidentSaleDetail.courses')}/>
      <h2 className={styles.sectionTitle}>{t('presidentSaleDetail.listCours')}</h2>
      <div className={styles.cardsContainer}>
        {activitiesData.map((activity, index) => (
          <ListCourses
            key={index}
            title={activity.title}
            description={activity.description}
            imageSrc={activity.imageSrc}
            bgColor={activity.bgColor}
          />
        ))}
      </div>
    </section>
  );
}

export default DetailOfPresidentSale;

