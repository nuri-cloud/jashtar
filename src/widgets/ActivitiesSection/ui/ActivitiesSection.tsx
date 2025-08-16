import React from 'react';
import ActivityCard from '../ui/ActivityCard/ActivityCard';
import img from '../../../shared/assets/images/friends.png';
import styles from './ActivitiesSection.module.scss'; 

function ActivitiesSection() {
  const activitiesData = [
    { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#5889F6" },
    { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#57D175" },
    { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#AC7F5E" },
    { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#6155F5" },
    { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#EC5E61" },
    { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#E7BC5E" },
  ];

  return (
    <section className={styles.activitiesSection}>
      <h2 className={styles.sectionTitle}>Направление деятельности</h2>
      <div className={styles.cardsContainer}>
        {activitiesData.map((activity, index) => (
          <ActivityCard
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

export default ActivitiesSection;