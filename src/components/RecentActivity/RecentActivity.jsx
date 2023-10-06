import { OptionBars } from "../OprionBars/OptionBars";
import "./RecentActivity.scss";

const RecentActivity = () => {
  return (
    <div className="recentActivity">
      <h5 className="recentActivity__title">Recent Activity</h5>
      <OptionBars />
      <div className="recentActivity__button"></div>
    </div>
  );
};

export { RecentActivity };
