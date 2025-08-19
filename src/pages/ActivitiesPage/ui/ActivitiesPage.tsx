import ActivitiesSection from "@/widgets/ActivitiesSection/ui/ActivitiesSection"
import Navpanel from "@/widgets/Navpanel/Navpanel"

function ActivitiesPage() {
  return (
    <div>
      <Navpanel text="Главная" text2="Направление деятельности" link="/"/>
      <ActivitiesSection />
    </div>
  )
}

export default ActivitiesPage
