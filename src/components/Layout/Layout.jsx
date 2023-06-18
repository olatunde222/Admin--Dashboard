import css from "./Layout.module.css";
import moment from "moment/moment";
import { BiSearch } from "react-icons/bi";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div className={css.container}>
      {/* Sidebar Compenent*/}
      <Sidebar />

      {/* Making the dashboard as the default route */}
      {pathname === "/" && <Navigate to={"/dashboard"} />}
      <div className={css.dashboard}>
        {/* Gradients / Blurs  */}
        <div className={css.topBaseGradients}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>
        {/* Header */}
        <div className={css.header}>
          {/* Using React Moment to get the current date */}
          <span>{moment().format("dddd, Do MMM YYYY")}.</span>
          {/* Search Bar  */}
          <div className={css.searchBar}>
            <BiSearch size={20} />
            <input type="text" placeholder="Search" />
          </div>
          {/* Profile */}
          <div className={css.profile}>
            <img src="./profile.png" alt="user image" />
            <div className={css.details}>
              <span>Henry Christ</span>
              <span>henrychrist@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="css.content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
