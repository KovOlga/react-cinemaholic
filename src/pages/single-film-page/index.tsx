import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Modal from "../../components/modal";
import style from "./style.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../types";
import Spinner from "../../components/spinner";
import { getFilmByIdThunk } from "../../services/actions/films";

const SingleFilmPage: FC = () => {
  const dispatch = useAppDispatch();
  const film = useAppSelector((store: RootState) => store.films.filmById);
  const isLoading = useAppSelector(
    (store: RootState) => store.films.filmByIdInProccess
  );
  const error = useAppSelector(
    (store: RootState) => store.films.filmByIdFailed
  );
  const [showModal, setShowModal] = useState(false);

  const { filmId } = useParams();

  useEffect(() => {
    dispatch(getFilmByIdThunk(Number(filmId)));
  }, [dispatch, filmId]);

  const onCloseModal = () => {
    setShowModal(false);
  };

  const errorMessage = error ? "error" : null;
  const spinner = isLoading ? <Spinner /> : null;

  return (
    <section className={style.section}>
      {errorMessage}
      {spinner}
      {!isLoading && !error && film && (
        <>
          <div className={style.comic__cont}>
            <img
              onClick={() => setShowModal(true)}
              src={film.poster.url}
              alt={film.name}
              className={style.poster}
            />
            <div className={style.comic__info}>
              <h2 className={style.name}>
                На русском:{" "}
                <span className={style.name__bold}>
                  {film.name ? film.name : "Не переведено"}
                </span>
              </h2>
              <h2 className={style.name}>
                На языке оригинала:{" "}
                <span className={style.name__bold}>{film.alternativeName}</span>
              </h2>
              <p className={style.description}>{film.description}</p>
              <p className={style.description}>
                Тип: {film.type === "movie" ? "фильм" : "сериал"}
              </p>
              <p className={style.year}>Год: {film.year}</p>
              <p className={style.raiting}>
                Рейтинг на imdb:{" "}
                <span className={style.raiting__span}>{film.rating.imdb}</span>
              </p>
              <div>
                <p className={style.block}>Жанры:</p>
                <ul className={style.block__list}>
                  {!film.genres.length && "Неизвестно"}
                  {film.genres.map((genre, i) => {
                    return (
                      <li key={i} className={style.block__item}>
                        {genre.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <Link to="/" className={style.link}>
            Вернуться назад
          </Link>
          {showModal && film.poster.url && (
            <Modal onClose={onCloseModal}>
              <img
                className={style.img}
                src={film.poster.url}
                alt={film.name}
              />
            </Modal>
          )}
        </>
      )}
    </section>
  );
};

export default SingleFilmPage;
