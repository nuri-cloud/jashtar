import { LegalFrameworkSection } from "./LegalFrameworkSection/LegalFrameworkSection";
import { Management } from "./Management/Management";
import { MovementSection } from "./MovementSection/MovementSection";
import { OurMissionSection } from "./OurMissionSection/OurMissionSection";


export function MovementPages() {
  return (
    <div>
      <MovementSection/>
      <OurMissionSection/>
      <LegalFrameworkSection/>
      <Management/>
    </div>
  )
}


