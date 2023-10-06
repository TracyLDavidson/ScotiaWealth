import { HeaderScotiaWealth } from "../../components/HeaderScotiaWealth/HeaderScotiaWealth";
import { RecentActivity } from "../../components/RecentActivity/RecentActivity";
import { SelectionCard } from "../../components/SelectionCard/SelectionCard";

const ScotiaWealth = () => {
    return (
      <>
        <HeaderScotiaWealth />
        <SelectionCard />
        <RecentActivity/>
      </>
    );
  };

  export { ScotiaWealth };