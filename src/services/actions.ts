import { AppDispatch, AppThunk } from "../types";
import { getTopFilmsList } from "./api";

export const GET_TOP_FILMS_REQUEST = "GET_TOP_FILMS_REQUEST";
export const GET_TOP_FILMS_SUCCESS = "GET_TOP_FILMS_SUCCESS";
export const GET_TOP_FILMS_FAILED = "GET_TOP_FILMS_FAILED";
export const SET_CURRENT_TITLE = "SET_CURRENT_TITLE";

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

export type TFilmsActions =
  | IGetTopFilmsRequest
  | IGetTopFilmsSuccess
  | IGetTopFilmsFailed
  | ISetCurrentTitle;

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
