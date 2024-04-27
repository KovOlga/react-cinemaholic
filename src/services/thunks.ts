import { AppDispatch, AppThunk } from "../types";
import {
  getFilmByIdFailedAction,
  getFilmByIdRequestAction,
  getFilmByIdSuccessAction,
  getFilmByNameFailedAction,
  getFilmByNameRequestAction,
  getFilmByNameSuccessAction,
  getRandomFilmFailedAction,
  getRandomFilmRequestAction,
  getRandomFilmSuccessAction,
  getTopFilmsFailedAction,
  getTopFilmsRequestAction,
  getTopFilmsSuccessAction,
} from "./action-creators";
import {
  getFilmById,
  getFilmByName,
  getRandomFilm,
  getTopFilmsList,
} from "./api";

export const getTopFilmsThunk: AppThunk = (page: number) => {
  return function (dispatch: AppDispatch) {
    dispatch(getTopFilmsRequestAction());
    return getTopFilmsList(page)
      .then((films) => {
        dispatch(getTopFilmsSuccessAction(films.docs));
      })
      .catch(() => {
        dispatch(getTopFilmsFailedAction());
      });
  };
};

export const getFilmByNameThunk: AppThunk = (name: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(getFilmByNameRequestAction());
    return getFilmByName(name)
      .then((film) => {
        dispatch(getFilmByNameSuccessAction(film.docs));
      })
      .catch(() => {
        dispatch(getFilmByNameFailedAction());
      });
  };
};

export const getFilmByIdThunk: AppThunk = (id: number) => {
  return function (dispatch: AppDispatch) {
    dispatch(getFilmByIdRequestAction());
    return getFilmById(id)
      .then((film) => {
        dispatch(getFilmByIdSuccessAction(film));
      })
      .catch(() => {
        dispatch(getFilmByIdFailedAction());
      });
  };
};

export const getRandomFilmThunk: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch(getRandomFilmRequestAction());
    return getRandomFilm()
      .then((film) => {
        dispatch(getRandomFilmSuccessAction(film));
      })
      .catch(() => {
        dispatch(getRandomFilmFailedAction());
      });
  };
};
