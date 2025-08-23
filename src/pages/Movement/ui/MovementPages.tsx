import Navpanel from "@/widgets/Navpanel/Navpanel";
import { LegalFrameworkSection } from "./LegalFrameworkSection/LegalFrameworkSection";
import { Management } from "./Management/Management";
import { MovementSection } from "./MovementSection/MovementSection";
import { OurMissionSection } from "./OurMissionSection/OurMissionSection";

export function MovementPages() {
  return (
    <div>
      <Navpanel text="Главная" text2="О движении"/>
      <MovementSection />
      {/* <OurMissionSection />
      <LegalFrameworkSection />
      <Management /> */}
    </div>
  );
}
