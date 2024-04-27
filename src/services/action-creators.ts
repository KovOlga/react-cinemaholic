import { IFilm } from "../types/data";

export const getTopFilmsRequestAction = () =>
  ({
    type: "GET_TOP_FILMS_REQUEST",
  } as const);

export const getTopFilmsSuccessAction = (films: IFilm[]) =>
  ({
    type: "GET_TOP_FILMS_SUCCESS",
    films,
  } as const);

export const getTopFilmsFailedAction = () =>
  ({
    type: "GET_TOP_FILMS_FAILED",
  } as const);

export const setCurrentTitleAction = (id: number) =>
  ({
    type: "SET_CURRENT_TITLE",
    id,
  } as const);

export const getFilmByNameRequestAction = () =>
  ({
    type: "GET_FILM_BY_NAME_REQUEST",
  } as const);

export const getFilmByNameSuccessAction = (film: IFilm[]) =>
  ({
    type: "GET_FILM_BY_NAME_SUCCESS",
    film,
  } as const);

export const getFilmByNameFailedAction = () =>
  ({
    type: "GET_FILM_BY_NAME_FAILED",
  } as const);

export const getFilmByIdRequestAction = () =>
  ({
    type: "GET_FILM_BY_ID_REQUEST",
  } as const);

export const getFilmByIdSuccessAction = (film: IFilm) =>
  ({
    type: "GET_FILM_BY_ID_SUCCESS",
    film,
  } as const);

export const getFilmByIdFailedAction = () =>
  ({
    type: "GET_FILM_BY_ID_FAILED",
  } as const);

export const getRandomFilmRequestAction = () =>
  ({
    type: "GET_RANDOM_FILM_REQUEST",
  } as const);

export const getRandomFilmSuccessAction = (film: IFilm) =>
  ({
    type: "GET_RANDOM_FILM_SUCCESS",
    film,
  } as const);

export const getRandomFilmFailedAction = () =>
  ({
    type: "GET_RANDOM_FILM_FAILED",
  } as const);

export const setCurrentPageAction = (page: number) =>
  ({
    type: "SET_CURRENT_PAGE",
    page,
  } as const);
