import { AppDispatch, AppThunk } from "../../types";
import { getRandomFilm } from "../api";

export const GET_RANDOM_FILM_REQUEST = "GET_RANDOM_FILM_REQUEST";
export const GET_RANDOM_FILM_SUCCESS = "GET_RANDOM_FILM_SUCCESS";
export const GET_RANDOM_FILM_FAILED = "GET_RANDOM_FILM_FAILED";

interface IGetRandomFilmRequest {
  readonly type: typeof GET_RANDOM_FILM_REQUEST;
}

interface IGetRandomFilmSuccess {
  readonly type: typeof GET_RANDOM_FILM_SUCCESS;
  film: any;
}

interface IGetRandomFilmFailed {
  readonly type: typeof GET_RANDOM_FILM_FAILED;
}

export type IRandomFilmActions =
  | IGetRandomFilmRequest
  | IGetRandomFilmSuccess
  | IGetRandomFilmFailed;

export const getRandomFilmRequestAction = (): IGetRandomFilmRequest => ({
  type: GET_RANDOM_FILM_REQUEST,
});

export const getRandomFilmSuccessAction = (
  film: any
): IGetRandomFilmSuccess => ({
  type: GET_RANDOM_FILM_SUCCESS,
  film,
});

export const getRandomFilmFailedAction = (): IGetRandomFilmFailed => ({
  type: GET_RANDOM_FILM_FAILED,
});

export const getRandomFilmThunk: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch(getRandomFilmRequestAction());
    return getRandomFilm()
      .then((film) => {
        console.log(film);
        dispatch(getRandomFilmSuccessAction(film));
      })
      .catch(() => {
        dispatch(getRandomFilmFailedAction());
      });
  };
};
