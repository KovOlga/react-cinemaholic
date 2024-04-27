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
import { getFilmByNameThunk } from "../../services/actions/films";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const FilmSearchForm: FC = () => {
  const dispatch = useAppDispatch();
  const filmByName = useAppSelector(
    (store: RootState) => store.films.filmByName
  );
  const isLoading = useAppSelector(
    (store: RootState) => store.films.filmByNameInProccess
  );
  const error = useAppSelector(
    (store: RootState) => store.films.filmByNameFailed
  );
  const notFound = useAppSelector((store: RootState) => store.films.notFound);

  const findChar = (name: string) => {
    dispatch(getFilmByNameThunk(name));
  };

  return (
    <div className={style.charInfo}>
      <p className={style.comics}>Или найдите фильм по названию</p>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={({ name }) => {
          findChar(name);
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
        <div className={style.char__searchWrapper}>
          <div className={style.char__searchSuccess}>
            Нашли! На страницу какого фильма перейти?
          </div>
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
      {notFound && <div className={style.error}>Фильм не найден</div>}
      {error && <div className={style.error}>Ошибка при поиске</div>}
    </div>
  );
};

export default FilmSearchForm;
