// import React, { useState } from "react";
// import ActivityCard from "../ui/ActivityCard/ActivityCard";
// import DownCard from "./DownCard/DownCard";
// import styles from "./ActivitiesSection.module.scss";

// interface Activity {
//   id?: number | string;
//   title: string;
//   short_description?: string;
//   description?: string;
//   image?: string;
//   telegram_link?: string;
//   instagram_link?: string;
// }

// interface ActivitiesSectionProps {
//   activities: Activity[];
// }

// const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({ activities }) => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const colors = ["#5889F6", "#57D175", "#AC7F5E", "#6155F5", "#EC5E61", "#E7BC5E"];

//   if (!activities || activities.length === 0) {
//     return <p className={styles.empty}>Нет доступных активностей</p>;
//   }

//   return (
//     <div className={styles.wrapper}>
//       {activities.map((activity, index) => {
//         const color = colors[index % colors.length];
//         return (
//           <div key={activity.id || index}>
//             <ActivityCard
//               title={activity.title}
//               description={activity.short_description || "Описание скоро появится."}
//               imageSrc={activity.image || "/images/default.jpg"}
//               bgColor={color}
//               telegram={activity.telegram_link}
//               instagram={activity.instagram_link}
//               onClick={() => setActiveIndex(activeIndex === index ? null : index)}
//             />

//             <DownCard
//               bgColor={color}
//               index={index}
//               show={activeIndex}
//               onClick={() => setActiveIndex(null)}
//               title={activity.title}
//               fullText={activity.description || "Описание временно отсутствует."}
//               telegram={activity.telegram_link}
//               instagram={activity.instagram_link}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ActivitiesSection;

import React, { useState } from "react";
import ActivityCard from "./ActivityCard/ActivityCard"; // Предполагаемый путь
import DownCard from "../ui/DownCard/DownCard"; // Предполагаемый путь
import styles from "./ActivitiesSection.module.scss";

interface Activity {
  id?: number | string;
  title: string;
  short_description?: string;
  description?: string;
  image?: string;
  telegram_link?: string;
  instagram_link?: string;
}

interface ActivitiesSectionProps {
  activities: Activity[];
}

const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({
  activities,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const colors = [
    "#5889F6",
    "#57D175",
    "#AC7F5E",
    "#6155F5",
    "#EC5E61",
    "#E7BC5E",
  ];

  if (!activities || activities.length === 0) {
    return <p className={styles.empty}>Нет доступных активностей</p>;
  }

  return (
    <div className="pageWrapper">
      <div className={styles.wrapper}>
        <h2 className="sectionTitle">Направление деятельности</h2>     {" "}
        {activities.map((activity, index) => {
          const color = colors[index % colors.length];
          return (
            <div key={activity.id || index}>
               {" "}
              <ActivityCard
                title={activity.title}
                description={
                  activity.short_description || "Описание скоро появится."
                }
                imageSrc={activity.image || "/images/default.jpg"}
                bgColor={color}
                telegram={activity.telegram_link}
                instagram={activity.instagram_link}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              />
                         {" "}
              <DownCard
                bgColor={color}
                index={index}
                show={activeIndex}
                onClick={() => setActiveIndex(null)}
                title={activity.title}
                fullText={
                  activity.description || "Описание временно отсутствует."
                }
                telegram={activity.telegram_link}
                instagram={activity.instagram_link}
              />
                       {" "}
            </div>
          );
        })}
           {" "}
      </div>
    </div>
  );
};

export default ActivitiesSection;
