import { Goals } from "./Goals/Goals";
import { PhotoSection } from "./PhotoSection/PhotoSection";
import { ProjectName } from "./ProjectName/ProjectName";

export function ProjectNamePages() {
  return (
    <div>
     <ProjectName/>
     <Goals/>
     <PhotoSection/>
    </div>
  );
}
