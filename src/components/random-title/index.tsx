import style from "./style.module.css";
import { useEffect, FC } from "react";
import Spinner from "../spinner";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../types";
import { getRandomFilmThunk } from "../../services/actions/random-film";
import { mock } from "../../constants/mock";
import Button from "../button";
import { ButtonType } from "../button/types";

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
    // dispatch(getRandomFilmThunk())
  }, []);

  const updateRandomFilm = () => {
    // dispatch(getRandomFilmThunk())
  };

  return (
    <div className={style.randomchar}>
      {error && "error"}
      {!error && isLoading && !mock[0] && <Spinner />}
      {!error && !isLoading && mock[0] && (
        <div className={style.randomchar__changeable}>
          <img
            src={mock[0].poster.url}
            alt={mock[0].name}
            className={style.randomchar__img}
          />
          <div className={style.randomchar__info}>
            <h2 className={style.name}>{mock[0].name}</h2>
            <p className={style.description}>{mock[0].shortDescription}</p>
            <Button
              type={ButtonType.Link}
              linkTo={`/films/${mock[0].id}`}
              buttonText="Подробнее"
            />
          </div>
        </div>
      )}
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

export default RandomTitle;
