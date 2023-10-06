import { NewOptionBar } from "../NewOptionBar/NewOptionBar";
import "./NewRecentActivity.scss";

const NewRecentActivity = () => {
  return (
    <div className="recentActivity">
      <h5 className="recentActivity__title">Recent Activity</h5>
      <NewOptionBar />
    </div>
  );
};

export { NewRecentActivity };
