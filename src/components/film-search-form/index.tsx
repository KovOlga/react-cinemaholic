import {
  Formik,
  Form,
  Field,
  ErrorMessage as FormikErrorMessage,
} from "formik";
import * as Yup from "yup";
import { FC } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../types";
import { getFilmByNameThunk } from "../../services/actions/films";
import Button from "../button";
import { ButtonType } from "../button/types";

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

  const findChar = (name: string) => {
    dispatch(getFilmByNameThunk(name));
  };

  return (
    <div className={style.charInfo}>
      <p className={style.comics}>Или найдите фильм по названию</p>
      <Formik
        initialValues={{ name: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Необходимое поле"),
        })}
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
            <Button
              type={ButtonType.Submit}
              disabled={isLoading}
              buttonText="Найти"
            />
          </div>
          <FormikErrorMessage
            name="name"
            component="div"
            className={style.error}
          />
        </Form>
      </Formik>
      {filmByName.length > 0 && (
        <div className={style.char__searchWrapper}>
          <div className={style.char__searchSuccess}>
            Нашли! Перейти на страницу фильма?
          </div>
          <Button
            type={ButtonType.Link}
            linkTo={`/films/${filmByName[0].id}`}
            buttonText="To page"
          />
        </div>
      )}
      {filmByName.length === 0 && (
        <div className={style.error}>Фильм не найден</div>
      )}
      {error && <div className={style.error}>Ошибка при поиске</div>}
    </div>
  );
};

export default FilmSearchForm;
