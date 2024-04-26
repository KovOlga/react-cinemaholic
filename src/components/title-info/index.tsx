import style from "./style.module.css";
import { useState, useEffect, FC } from "react";
import Spinner from "../spinner";
// import ErrorMessage from "../error-message/error-message";
import Skeleton from "../skeleton";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../types";
import { Link } from "react-router-dom";
import { IFilm } from "../../types/data";
// import CharSearchForm from "../char-search-form/char-search-form";

const TitleInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const currentTitle = useAppSelector(
    (store: RootState) => store.films.currentTitle
  );

  // useEffect(() => {
  //   updateChar();
  // }, []);

  // const updateChar = () => {
  //   // if (!charId) {
  //   //   return;
  //   // }
  //   // clearError();
  //   // getCharacter(charId).then((char) => {
  //   //   setChar(char);
  //   // });
  // };

  const skeleton = currentTitle || error || isLoading ? null : <Skeleton />;
  // const spinner = isLoading && !newItemLoading ? <Spinner /> : null;
  const content = !(isLoading || error || !currentTitle) ? (
    <View item={currentTitle} />
  ) : null;

  return (
    <section className={style.section}>
      {skeleton}
      {/* {errorMessage} */}
      {/* {spinner} */}
      {content}
    </section>
  );
};

const View: FC<{ item: IFilm }> = ({ item }) => {
  return (
    <>
      <div className={style.info}>
        <img className={style.poster} src={item.poster.url} alt={item.name} />
        <div className={style.info__main}>
          <h2 className={style.name}>{item.name}</h2>
          <p className={style.year}>Год: {item.year}</p>
          <Link to="/" className={`${style.button} ${style.button__main}`}>
            <p className={`${style.inner} ${style.inner__main}`}>
              Узнать подробнее
            </p>
          </Link>
        </div>
      </div>
      <p className={style.description}>{item.shortDescription}</p>
      <div>
        <p className={style.block}>Жанры:</p>
        <ul className={style.block__list}>
          {!item.genres.length && "Неизвестно"}
          {item.genres.map((genre, i) => {
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
          {!item.countries.length && "Неизвестно"}
          {item.countries.map((country, i) => {
            return (
              <li key={i} className={style.block__item}>
                {country.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TitleInfo;
