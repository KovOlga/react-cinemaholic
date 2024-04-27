import { IFilm } from "../types/data";
import * as actionCreators from "./action-creators";

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

type ActionTypes = ReturnType<InferValueTypes<typeof actionCreators>>;

export interface IInitialState {
  topFilms: IFilm[];
  topFilmsLoading: boolean;
  topFilmsReqFailed: boolean;

  currentTitle: IFilm | null;

  filmByName: IFilm[] | null;
  filmByNameLoading: boolean;
  filmByNameFailed: boolean;
  notFound: boolean;

  filmById: IFilm | null;
  filmByIdLoading: boolean;
  filmByIdFailed: boolean;

  randomFilm: IFilm | null;
  randomFilmLoading: boolean;
  randomFilmReqFailed: boolean;

  currentPage: number;
}

const initialState: IInitialState = {
  topFilms: [],
  topFilmsLoading: false,
  topFilmsReqFailed: false,
  currentTitle: null,

  filmByName: null,
  filmByNameLoading: false,
  filmByNameFailed: false,
  notFound: false,

  filmById: null,
  filmByIdLoading: false,
  filmByIdFailed: false,

  randomFilm: null,
  randomFilmLoading: false,
  randomFilmReqFailed: false,

  currentPage: 1,
};

export const filmsReducer = (
  state = initialState,
  action: ActionTypes
): IInitialState => {
  switch (action.type) {
    case "GET_TOP_FILMS_REQUEST": {
      return {
        ...state,
        topFilmsLoading: true,
        topFilmsReqFailed: false,
      };
    }
    case "GET_TOP_FILMS_SUCCESS": {
      return {
        ...state,
        topFilmsLoading: false,
        topFilmsReqFailed: false,
        topFilms: action.films,
      };
    }
    case "GET_TOP_FILMS_FAILED": {
      return { ...state, topFilmsReqFailed: true, topFilmsLoading: false };
    }
    case "SET_CURRENT_TITLE": {
      const selectedTitle = state.topFilms.find(
        (item) => item.id === action.id
      );
      return { ...state, currentTitle: selectedTitle ? selectedTitle : null };
    }
    case "GET_FILM_BY_NAME_REQUEST": {
      return {
        ...state,
        filmByNameLoading: true,
        filmByName: null,
        filmByNameFailed: false,
        notFound: false,
      };
    }
    case "GET_FILM_BY_NAME_SUCCESS": {
      return {
        ...state,
        filmByNameLoading: false,
        filmByNameFailed: false,
        filmByName: action.film.length === 0 ? null : action.film,
        notFound: action.film.length === 0,
      };
    }
    case "GET_FILM_BY_NAME_FAILED": {
      return {
        ...state,
        filmByNameFailed: true,
        filmByNameLoading: false,
        notFound: false,
      };
    }
    case "GET_FILM_BY_ID_REQUEST": {
      return {
        ...state,
        filmByIdLoading: true,
        filmById: null,
        filmByIdFailed: false,
      };
    }
    case "GET_FILM_BY_ID_SUCCESS": {
      return {
        ...state,
        filmByIdLoading: false,
        filmByIdFailed: false,
        filmById: action.film,
      };
    }
    case "GET_FILM_BY_ID_FAILED": {
      return { ...state, filmByIdFailed: true, filmByIdLoading: false };
    }
    case "GET_RANDOM_FILM_REQUEST": {
      return {
        ...state,
        randomFilmLoading: true,
        randomFilm: null,
        randomFilmReqFailed: false,
      };
    }
    case "GET_RANDOM_FILM_SUCCESS": {
      return {
        ...state,
        randomFilmLoading: false,
        randomFilmReqFailed: false,
        randomFilm: action.film,
      };
    }
    case "GET_RANDOM_FILM_FAILED": {
      return { ...state, randomFilmReqFailed: true, randomFilmLoading: false };
    }
    case "SET_CURRENT_PAGE": {
      return { ...state, currentPage: action.page };
    }
    default:
      return state;
  }
};
