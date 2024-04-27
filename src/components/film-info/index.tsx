import style from "./style.module.css";
import { FC } from "react";
import Skeleton from "../skeleton";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../types";
import Button from "../button";
import { ButtonType } from "../button/types";

const FilmInfo: FC = () => {
  const currentTitle = useAppSelector(
    (store: RootState) => store.films.currentTitle
  );

  return (
    <section className={style.section}>
      {!currentTitle && <Skeleton />}
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
              <Button
                type={ButtonType.Link}
                linkTo={`/films/${currentTitle.id}`}
                buttonText="Узнать подробнее"
              />
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
