import { AppDispatch, AppThunk } from "../types";
import { getTopFilmsList } from "./api";

export const GET_TOP_FILMS_REQUEST = "GET_TOP_FILMS_REQUEST";
export const GET_TOP_FILMS_SUCCESS = "GET_TOP_FILMS_SUCCESS";
export const GET_TOP_FILMS_FAILED = "GET_TOP_FILMS_FAILED";

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

export type TFilmsActions =
  | IGetTopFilmsRequest
  | IGetTopFilmsSuccess
  | IGetTopFilmsFailed;

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
