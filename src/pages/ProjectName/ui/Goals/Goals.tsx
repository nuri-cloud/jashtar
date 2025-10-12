// src/pages/ProjectName/Goals/Goals.tsx

import type { FC } from "react";
import styles from "./Goals.module.scss";
import { MultiContainer } from "@/shared/ui";

interface GoalsProps {
  goalsHtml: string;
  tasksHtml: string;
}

export const Goals: FC<GoalsProps> = ({ goalsHtml, tasksHtml }) => {
  return (
    <MultiContainer className={styles.goalsBlock}>
      <h2 className={styles.goalsHeader}>Цели и задачи проекта</h2>

      <div className={styles.goalsContent}>
        <div
          className={styles.goalsList}
          dangerouslySetInnerHTML={{ __html: goalsHtml }}
        />
        <div
          className={styles.tasksList}
          dangerouslySetInnerHTML={{ __html: tasksHtml }}
        />
      </div>
    </MultiContainer>
  );
};
