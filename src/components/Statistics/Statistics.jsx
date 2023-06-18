import { groupNumber } from "../../data";
import StatisticChart from "../StatisticChart/StatisticChart";
import css from "./Statistics.module.css";
import { BsArrowUpShort } from "react-icons/bs";

const Statistics = () => {
  return (
    <div className={`${css.container} theme-container`}>
      <span className={css.title}>Overview Statistics</span>
      <div className={`${css.cards} grey-container`}>
        <div>
          <div className={css.arrowIcon}>
            <BsArrowUpShort />
          </div>
          <div className={css.card}>
            <span>Top item this month</span>
            <span>Office Comps</span>
          </div>
        </div>
        <div className={css.card}>
          <span>Items</span>
          <span>$ {groupNumber(500)}</span>
        </div>
        <div className={css.card}>
          <span>Profit</span>
          <span>$ {groupNumber(500000)}</span>
        </div>
        <div className={css.card}>
          <span>Daily Average</span>
          <span>$ {groupNumber(2500)}</span>
        </div>
      </div>
      <StatisticChart/>
    </div>

  );
};

export default Statistics;
