import Navpanel from "@/widgets/Navpanel/Navpanel";
import { Goals } from "./Goals/Goals";
import { PhotoSection } from "./PhotoSection/PhotoSection";
import { ProjectName } from "./ProjectName/ProjectName";

export function ProjectNamePages() {
  return (
    <div>
      <Navpanel text="Главная" text2="Проекты" text3="Проект “Название” "/>
     <ProjectName/>
     <Goals/>
     <PhotoSection/>
    </div>
  );
}
