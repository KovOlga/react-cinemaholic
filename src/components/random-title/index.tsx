import style from "./style.module.css";
import { useEffect, FC } from "react";
import Spinner from "../spinner";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../types";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { getRandomFilmThunk } from "../../services/thunks";

const RandomTitle: FC = () => {
  const dispatch = useAppDispatch();
  const film = useAppSelector((store: RootState) => store.films.randomFilm);
  const isLoading = useAppSelector(
    (store: RootState) => store.films.randomFilmLoading
  );
  const error = useAppSelector(
    (store: RootState) => store.films.randomFilmReqFailed
  );

  useEffect(() => {
    dispatch(getRandomFilmThunk());
  }, []);

  const updateRandomFilm = () => {
    dispatch(getRandomFilmThunk());
  };

  return (
    <div className={style.random}>
      {error && "error"}
      {!error && isLoading && !film && <Spinner />}
      {!error && !isLoading && film && (
        <div className={style.changeable}>
          <img src={film.poster.url} alt={film.name} className={style.img} />
          <div className={style.info}>
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
      <div className={style.choice}>
        <p className={style.text}>
          Нажмите на кнопку, чтобы слева появился рандомный фильм
        </p>
        <Button variant="contained" onClick={updateRandomFilm}>
          Волшебный рандомайзер
        </Button>
      </div>
    </div>
  );
};

export default RandomTitle;
