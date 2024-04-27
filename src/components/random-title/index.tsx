import style from "./style.module.css";
import { useEffect, FC } from "react";
import Spinner from "../spinner";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../types";
import { getRandomFilmThunk } from "../../services/actions/random-film";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const RandomTitle: FC = () => {
  const dispatch = useAppDispatch();
  const film = useAppSelector((store: RootState) => store.randomFilm.film);
  const isLoading = useAppSelector(
    (store: RootState) => store.randomFilm.reqInProccess
  );
  const error = useAppSelector(
    (store: RootState) => store.randomFilm.reqFailed
  );

  useEffect(() => {
    dispatch(getRandomFilmThunk());
  }, []);

  const updateRandomFilm = () => {
    dispatch(getRandomFilmThunk());
  };

  return (
    <div className={style.randomchar}>
      {error && "error"}
      {!error && isLoading && !film && <Spinner />}
      {!error && !isLoading && film && (
        <div className={style.randomchar__changeable}>
          <img
            src={film.poster.url}
            alt={film.name}
            className={style.randomchar__img}
          />
          <div className={style.randomchar__info}>
            <h2 className={style.name}>{film.name}</h2>
            <p className={style.description}>{film.shortDescription}</p>
            <Button variant="contained">
              <Link to={`/films/${film.id}`} className={style.link}>
                Подробнее
              </Link>
            </Button>
          </div>
        </div>
      )}
      <div className={style.randomchar__static}>
        <div className={style.randomchar__textContainer}>
          <p className={style.randomchar__text}>
            Нажмите на кнопку, чтобы слева появился рандомный фильм
          </p>
        </div>
        <Button variant="contained" onClick={updateRandomFilm}>
          Волшебный рандомайзер
        </Button>
      </div>
    </div>
  );
};

export default RandomTitle;
