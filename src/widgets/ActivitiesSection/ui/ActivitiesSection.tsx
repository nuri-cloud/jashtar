// import React from 'react';
// import ActivityCard from '../ui/ActivityCard/ActivityCard';
// import img from '../../../shared/assets/images/friends.png';
// import styles from './ActivitiesSection.module.scss'; 

// function ActivitiesSection() {
//   const activitiesData = [
//     { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#5889F6" },
//     { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#57D175" },
//     { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#AC7F5E" },
//     { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#6155F5" },
//     { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#EC5E61" },
//     { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#E7BC5E" },
//   ];

//   return (
//     <section className={styles.activitiesSection}>
//       <h2 className={styles.sectionTitle}>Направление деятельности</h2>
//       <div className={styles.cardsContainer}>
//         {activitiesData.map((activity, index) => (
//           <ActivityCard
//             key={index}
//             title={activity.title}
//             description={activity.description}
//             imageSrc={activity.imageSrc}
//             bgColor={activity.bgColor}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default ActivitiesSection;


import React, { useEffect } from 'react';
import ActivityCard from '../ui/ActivityCard/ActivityCard';
import styles from './ActivitiesSection.module.scss';
import { useActivityStore } from '@/app/store/activity/activity'; // Импортируем наш стор

function ActivitiesSection() {
  const { activities, loading, error, fetchActivities } = useActivityStore();

  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

  if (loading) {
    return <div className={styles.loading}>Загрузка данных...</div>;
  }

  if (error) {
    return <div className={styles.error}>Ошибка при загрузке: {error}</div>;
  }

  return (
    <section className={styles.activitiesSection}>
      <h2 className={styles.sectionTitle}>Направление деятельности</h2>
      <div className={styles.cardsContainer}>
        {activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            title={activity.title}
            description={activity.description}
            imageSrc={activity.image}
            bgColor={activity.color}
          />
        ))}
      </div>
    </section>
  );
}

export default ActivitiesSection;