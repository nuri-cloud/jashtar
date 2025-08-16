import { BranchName } from "./BranchName/BranchName";
import { BranchName1 } from "./BranchName1/BranchName1";
import { BranchName2 } from "./BranchName2/BranchName2";
import { Result } from "./Result/Result";

export function BranchNamePages() {
  return (
    <div>
      <BranchName />
      <BranchName1 />
      <BranchName2 />
      <Result/>
    </div>
  );
}
