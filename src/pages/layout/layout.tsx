import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import style from "./style.module.css";

const LayoutPage = () => {
  return (
    <div className={style.layout}>
      <Header />
      <Outlet />
    </div>
  );
};

export default LayoutPage;
