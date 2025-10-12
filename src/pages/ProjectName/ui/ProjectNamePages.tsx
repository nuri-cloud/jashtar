// src/pages/ProjectName/ui/ProjectNamePages.tsx

import type { FC } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"; 
import Navpanel from "@/widgets/Navpanel/Navpanel";
// !!! ВАЖНО: Именованный импорт, соответствующий экспорту из стора
import { useProjectStore } from "@/app/store/project/project"; 
import { useTranslation } from "react-i18next";
import { ProjectName } from "./ProjectName/ProjectName";
import { Goals } from "./Goals/Goals";
import { PhotoSection } from "./PhotoSection/PhotoSection";


export const ProjectNamePages: FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const projectId = Number(id);

  const { currentProject, loading, error, fetchProjectById } = useProjectStore();
  const { t } = useTranslation();

  useEffect(() => {
    if (projectId) {
      fetchProjectById(projectId); 
    }
  }, [projectId, fetchProjectById]);

  // Обработка состояний (без стилей)
  if (loading) return <div>Загрузка деталей проекта...</div>;
  if (error) return <div>Ошибка при загрузке данных: {error}</div>;
  if (!currentProject) return <div>Проект не найден</div>;
  
  // Рендер
  return (
    <div>
      <Navpanel 
        text={t('projects.home')} 
        link="/" 
        text2={t('projects.projects')} 
        link2="/project"
        text3={currentProject.title} 
      />

      <ProjectName 
        title={currentProject.title}
        description={currentProject.description}
        image={currentProject.image}
      />
      
      <Goals 
          goalsHtml={currentProject.goals} 
          tasksHtml={currentProject.tasks}
      />
      
      <PhotoSection photos={currentProject.photos} />
    </div>
  );
};