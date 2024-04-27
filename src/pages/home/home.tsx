import RandomTitle from "../../components/random-title";
import FilmInfo from "../../components/film-info";
import TitleList from "../../components/title-list";
import style from "./style.module.css";
import FilmSearchForm from "../../components/film-search-form";
import { FC } from "react";

const MainPage: FC = () => {
  return (
    <div className={style.main}>
      <RandomTitle />
      <div className={style.content}>
        <TitleList />
        <div className={style.film}>
          <FilmInfo />
          <FilmSearchForm />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
