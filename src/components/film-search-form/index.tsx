import {
  Formik,
  Form,
  Field,
  ErrorMessage as FormikErrorMessage,
} from "formik";
import { FC } from "react";
import style from "./style.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../types";
import { getFilmByNameThunk } from "../../services/thunks";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const FilmSearchForm: FC = () => {
  const dispatch = useAppDispatch();
  const filmByName = useAppSelector(
    (store: RootState) => store.films.filmByName
  );
  const isLoading = useAppSelector(
    (store: RootState) => store.films.filmByNameLoading
  );
  const error = useAppSelector(
    (store: RootState) => store.films.filmByNameFailed
  );
  const notFound = useAppSelector((store: RootState) => store.films.notFound);

  const findFilm = (name: string) => {
    dispatch(getFilmByNameThunk(name));
  };

  return (
    <div className={style.search}>
      <p className={style.text}>Или найдите фильм по названию</p>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={({ name }) => {
          findFilm(name);
        }}
      >
        <Form className={style.form}>
          <div className={style.form__field}>
            <Field
              type="text"
              name="name"
              className={style.input}
              placeholder="Введите название фильма"
            />
            <Button variant="contained" type="submit" disabled={isLoading}>
              Найти
            </Button>
          </div>
          <FormikErrorMessage
            name="name"
            component="div"
            className={style.error}
          />
        </Form>
      </Formik>
      {filmByName && filmByName.length > 0 && (
        <div className={style.wrapper}>
          <p className={style.success}>
            Нашли! На страницу какого фильма перейти?
          </p>
          <ul className={style.list}>
            {filmByName.map((film) => {
              return (
                <li className={style.list__item} key={film.id}>
                  <Link className={style.link} to={`/films/${film.id}`}>
                    {film.name === "" ? film.alternativeName : film.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {notFound && <p className={style.error}>Фильм не найден</p>}
      {error && <p className={style.error}>Ошибка при поиске</p>}
    </div>
  );
};

export default FilmSearchForm;
