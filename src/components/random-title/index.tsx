import { Link } from "react-router-dom";
import style from "./style.module.css";
import { useState, useEffect, FC } from "react";
import Spinner from "../spinner";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../types";
import { getRandomFilmThunk } from "../../services/actions/random-film";
import { mock } from "../../constants/mock";
import { IFilm } from "../../types/data";
import Button from "../button";
import { ButtonType } from "../button/types";
// import ErrorMessage from "../error-message/error-message";

const RandomTitle = () => {
  const dispatch = useAppDispatch();
  const film = useAppSelector((store: RootState) => store.randomFilm.film);
  const isLoading = useAppSelector(
    (store: RootState) => store.randomFilm.reqInProccess
  );
  const error = useAppSelector(
    (store: RootState) => store.randomFilm.reqFailed
  );

  useEffect(() => {
    // dispatch(getRandomFilmThunk())
  }, []);

  const updateRandomFilm = () => {
    // dispatch(getRandomFilmThunk())
  };

  const errorMessage = error ? "error" : null;
  const spinner = isLoading ? <Spinner /> : null;
  const content = !(isLoading || error) ? (
    <ChangableContent film={mock[0]} />
  ) : null;

  return (
    <div className={style.randomchar}>
      {errorMessage}
      {spinner}
      {content}
      <div className={style.randomchar__static}>
        <div className={style.randomchar__textContainer}>
          <p className={style.randomchar__text}>
            Попробовать другой рандомный тайтл
          </p>
        </div>
        <Button
          type={ButtonType.Button}
          onClick={updateRandomFilm}
          buttonText="Волшебный рандомайзер"
        />
      </div>
    </div>
  );
};

const ChangableContent: FC<{ film: IFilm }> = ({ film }) => {
  return (
    <div className={style.randomchar__changeable}>
      <img
        src={film.poster.url}
        alt={film.name}
        className={style.randomchar__img}
      />
      <div className={style.randomchar__info}>
        <h2 className={style.name}>{film.name}</h2>
        <p className={style.description}>{film.shortDescription}</p>
        <Button
          type={ButtonType.Link}
          linkTo={`/films/${film.id}`}
          buttonText="Подробнее"
        />
      </div>
    </div>
  );
};

export default RandomTitle;
