import { FC } from "react";
import style from "./style.module.css";
import { Link, NavLink } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className={style.header}>
      <h1 className={style.header__title}>
        <Link to="/" className={style.header__title}>
          <span className={style.header__span}>Кино </span>
          портал
        </Link>
      </h1>
      <nav className={style.nav}>
        <ul className={style.nav__list}>
          <li className={style.nav__item}>
            <NavLink
              end
              style={({ isActive }) => ({
                color: isActive ? "#9f0013" : "black",
              })}
              to="/"
              className={style.nav__btn}
            >
              Characters
            </NavLink>
          </li>
          <li className={style.nav__item}>
            <p className={style.nav__slash}> / </p>
          </li>
          <li className={style.nav__item}>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#9f0013" : "black",
              })}
              to="/comics"
              className={style.nav__btn}
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
