import { AppDispatch, AppThunk } from "../types";
import { getFilmByName, getTopFilmsList } from "./api";

export const GET_TOP_FILMS_REQUEST = "GET_TOP_FILMS_REQUEST";
export const GET_TOP_FILMS_SUCCESS = "GET_TOP_FILMS_SUCCESS";
export const GET_TOP_FILMS_FAILED = "GET_TOP_FILMS_FAILED";
export const SET_CURRENT_TITLE = "SET_CURRENT_TITLE";
export const GET_FILM_BY_NAME_REQUEST = "GET_FILM_BY_NAME_REQUEST";
export const GET_FILM_BY_NAME_SUCCESS = "GET_FILM_BY_NAME_SUCCESS";
export const GET_FILM_BY_NAME_FAILED = "GET_FILM_BY_NAME_FAILED";

interface IGetTopFilmsRequest {
  readonly type: typeof GET_TOP_FILMS_REQUEST;
}

interface IGetTopFilmsSuccess {
  readonly type: typeof GET_TOP_FILMS_SUCCESS;
  films: any;
}

interface IGetTopFilmsFailed {
  readonly type: typeof GET_TOP_FILMS_FAILED;
}

interface ISetCurrentTitle {
  readonly type: typeof SET_CURRENT_TITLE;
  id: number;
}
interface IGetFilmByNameRequest {
  readonly type: typeof GET_FILM_BY_NAME_REQUEST;
}
interface IGetFilmByNameSuccess {
  readonly type: typeof GET_FILM_BY_NAME_SUCCESS;
  film: any;
}
interface IGetFilmByNameFailed {
  readonly type: typeof GET_FILM_BY_NAME_FAILED;
}

export type TFilmsActions =
  | IGetTopFilmsRequest
  | IGetTopFilmsSuccess
  | IGetTopFilmsFailed
  | ISetCurrentTitle
  | IGetFilmByNameRequest
  | IGetFilmByNameSuccess
  | IGetFilmByNameFailed;

export const getTopFilmsRequestAction = (): IGetTopFilmsRequest => ({
  type: GET_TOP_FILMS_REQUEST,
});

export const getTopFilmsSuccessAction = (films: any): IGetTopFilmsSuccess => ({
  type: GET_TOP_FILMS_SUCCESS,
  films,
});

export const getTopFilmsFailedAction = (): IGetTopFilmsFailed => ({
  type: GET_TOP_FILMS_FAILED,
});

export const setCurrentTitleAction = (id: number): ISetCurrentTitle => ({
  type: SET_CURRENT_TITLE,
  id,
});

export const getFilmByNameRequestAction = (): IGetFilmByNameRequest => ({
  type: GET_FILM_BY_NAME_REQUEST,
});

export const getFilmByNameSuccessAction = (
  film: any
): IGetFilmByNameSuccess => ({
  type: GET_FILM_BY_NAME_SUCCESS,
  film,
});

export const getFilmByNameFailedAction = (): IGetFilmByNameFailed => ({
  type: GET_FILM_BY_NAME_FAILED,
});

export const getTopFilmsThunk: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch(getTopFilmsRequestAction());
    return getTopFilmsList()
      .then((films) => {
        console.log(films);
        dispatch(getTopFilmsSuccessAction(films));
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
        console.log(film);
        dispatch(getFilmByNameSuccessAction(film.docs));
      })
      .catch(() => {
        dispatch(getFilmByNameFailedAction());
      });
  };
};
