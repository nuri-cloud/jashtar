import Navpanel from "@/widgets/Navpanel/Navpanel";
import { BranchName } from "./BranchName/BranchName";
import { Result } from "./Result/Result";
import { useTranslation } from "react-i18next";

export function BranchNamePages() {
  const {t , i18n} = useTranslation()
  return (
    <div>
      <Navpanel text={t('regionalOffice.home')} link="/" text2={t('regionalOffice.regionalOffice')}/>
      <BranchName />
      <Result/>
    </div>
  );
}

