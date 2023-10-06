import { HeaderScotiaWealth } from "../../components/HeaderScotiaWealth/HeaderScotiaWealth";
import { NewRecentActivity } from "../../components/NewRecentActivity/NewRecentActivity";
import { NewSelectionCard } from "../../components/NewSelectionCard/NewSelectionCard";

const ChangedDashboard = () => {
    return (
      <>
        <HeaderScotiaWealth />
        <NewSelectionCard />
        <NewRecentActivity/>
      </>
    );
  };

  export { ChangedDashboard };