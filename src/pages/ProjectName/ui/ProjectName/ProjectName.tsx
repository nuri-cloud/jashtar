
import { MultiContainer, Typography } from "@/shared/ui";
import type { FC } from "react";
import styles from "./ProjectName.module.scss";

interface ProjectNameProps {
  title: string;
  description: string;
  image: string;
}

export const ProjectName: FC<ProjectNameProps> = ({ title, description, image }) => {
  return (
    <MultiContainer className={styles.projectBlock}>
      <div className={styles.projectHeader}>
        <Typography variant="h1" color="black">
          {title}
        </Typography>
      </div>

      <div className={styles.projectContent}>
        <Typography variant="bodyText" color="black">
          {description}
        </Typography>
      </div>

      <div className={styles.imageWrap}>
        <img className={styles.image} src={image} alt={title} />
      </div>
    </MultiContainer>
  );
};

export default ProjectName;
