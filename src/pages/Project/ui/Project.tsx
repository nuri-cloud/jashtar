import Navpanel from "@/widgets/Navpanel/Navpanel";
import { Link } from "react-router-dom";
import styles from "./Project.module.scss";
import { useTranslation } from "react-i18next";

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
  const {t, i18n} = useTranslation()
  return (
    <div className={styles.projectSection}>
      <Navpanel text={t('projects.home')} link="/" text2={t('projects.projects')}/>
      <h2 className={styles.sectionTitle}>{t('projects.projects')}</h2>
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
