import { FC } from "react";
import style from "./style.module.css";
import { Link, NavLink } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className={style.header}>
      <Link to="/" className={style.title}>
        <span className={style.title__span}>Кино </span>
        портал
      </Link>
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
              Фильмы
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
              to="/director"
              className={style.nav__btn}
            >
              Режиссеры
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
