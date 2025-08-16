import React from "react";
import styles from "./Project.module.scss";
import { Link } from "react-router-dom";
import { ProjectNamePages } from "@/pages/ProjectName/ui/ProjectNamePages";

const projects = [
  {
    title: 'Проект "Название"',
    description:
      "Ясность нашей позиции очевидна: новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-oM39OqBCgUncMTs88Hk7fWuEPiihQaxmw&s",
  },
  {
    title: 'Проект "Название"',
    description:
      "Ясность нашей позиции очевидна: новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-oM39OqBCgUncMTs88Hk7fWuEPiihQaxmw&s",
  },
  {
    title: 'Проект "Название"',
    description:
      "Ясность нашей позиции очевидна: новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-oM39OqBCgUncMTs88Hk7fWuEPiihQaxmw&s",
  },
  {
    title: 'Проект "Название"',
    description:
      "Ясность нашей позиции очевидна: новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-oM39OqBCgUncMTs88Hk7fWuEPiihQaxmw&s",
  },
  {
    title: 'Проект "Название"',
    description:
      "Ясность нашей позиции очевидна: новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-oM39OqBCgUncMTs88Hk7fWuEPiihQaxmw&s",
  },
];

export const Project = () => {
  return (
    <div className={styles.projectSection}>
      <h2 className={styles.sectionTitle}>Проекты</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
              <Link to="projectnamepages">
                <button className={styles.learnMoreButton}>
                  Узнать больше
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
