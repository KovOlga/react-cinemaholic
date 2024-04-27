import { FC } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className={style.header}>
      <Link to="/" className={style.link}>
        <span className={style.link__span}>Кино </span>
        портал
      </Link>
    </header>
  );
};

export default Header;
