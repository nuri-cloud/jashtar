import React from "react";
import ActivityCard from "../ui/ActivityCard/ActivityCard";
import img from "../../../shared/assets/images/friends.png";
import styles from "./ActivitiesSection.module.scss";
import { DownCard } from "./DownCard/DownCard";
import { AnimatePresence, motion } from "framer-motion";

function ActivitiesSection() {
  const activitiesData = [
    { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#5889F6" },
    { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#57D175" },
    { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#AC7F5E" },
    { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#6155F5" },
    { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#EC5E61" },
    { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#E7BC5E" },
  ];

  const [isShown, setIsShown] = React.useState<number>(-1);

  return (
    <section className={styles.activitiesSection}>
      <h2 className={styles.sectionTitle}>Направление деятельности</h2>
      <div className={styles.cardsContainer}>
        {activitiesData.map((activity, index) => (
          <React.Fragment key={index}>
            <ActivityCard
              title={activity.title}
              description={activity.description}
              imageSrc={activity.imageSrc}
              bgColor={activity.bgColor}
              onClick={() => setIsShown(index)}
            />

            <AnimatePresence>
              {isShown === index && (
                <motion.div
                  key={`downcard-${index}`}
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <DownCard
                    onClick={() => setIsShown(-1)}
                    bgColor={activity.bgColor}
                    index={index}
                    show={isShown}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default ActivitiesSection;
