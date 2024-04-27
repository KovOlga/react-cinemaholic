import style from "./style.module.css";
import { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../types";
import { Skeleton } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const FilmInfo: FC = () => {
  const currentTitle = useAppSelector(
    (store: RootState) => store.films.currentTitle
  );

  return (
    <section className={style.section}>
      {!currentTitle && (
        <div className={style.skeleton}>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={300} height={60} />
          <Skeleton variant="rectangular" width={300} height={60} />
        </div>
      )}
      {currentTitle && (
        <>
          <div className={style.info}>
            <img
              className={style.poster}
              src={currentTitle.poster.url}
              alt={currentTitle.name}
            />
            <div className={style.info__main}>
              <h2 className={style.name}>{currentTitle.name}</h2>
              <p className={style.year}>Год: {currentTitle.year}</p>
              <Button variant="contained">
                <Link to={`/films/${currentTitle.id}`} className={style.link}>
                  Узнать подробнее
                </Link>
              </Button>
            </div>
          </div>
          <p className={style.description}>{currentTitle.shortDescription}</p>
          <div>
            <p className={style.block}>Жанры:</p>
            <ul className={style.block__list}>
              {!currentTitle.genres.length && "Неизвестно"}
              {currentTitle.genres.map((genre, i) => {
                return (
                  <li key={i} className={style.block__item}>
                    {genre.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className={style.block}>Страны:</p>
            <ul className={style.block__list}>
              {!currentTitle.countries.length && "Неизвестно"}
              {currentTitle.countries.map((country, i) => {
                return (
                  <li key={i} className={style.block__item}>
                    {country.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </section>
  );
};

export default FilmInfo;
