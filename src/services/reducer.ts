import { mock } from "../constants/mock";
import { IFilm } from "../types/data";
import {
  GET_FILM_BY_NAME_FAILED,
  GET_FILM_BY_NAME_REQUEST,
  GET_FILM_BY_NAME_SUCCESS,
  GET_TOP_FILMS_FAILED,
  GET_TOP_FILMS_REQUEST,
  GET_TOP_FILMS_SUCCESS,
  SET_CURRENT_TITLE,
  TFilmsActions,
} from "./actions";

export interface IInitialState {
  films: IFilm[];
  reqInProccess: boolean;
  reqFailed: boolean;
  currentTitle: IFilm | null;
  filmByName: IFilm[];
  filmByNameInProccess: boolean;
  filmByNameFailed: boolean;
}

const initialState: IInitialState = {
  films: mock,
  reqInProccess: false,
  reqFailed: false,
  currentTitle: null,
  filmByName: [],
  filmByNameInProccess: false,
  filmByNameFailed: false,
};

export const filmsReducer = (
  state = initialState,
  action: TFilmsActions
): IInitialState => {
  switch (action.type) {
    case GET_TOP_FILMS_REQUEST: {
      return {
        ...state,
        reqInProccess: true,
        films: [],
        reqFailed: false,
      };
    }
    case GET_TOP_FILMS_SUCCESS: {
      return {
        ...state,
        reqInProccess: false,
        reqFailed: false,
        films: action.films,
      };
    }
    case GET_TOP_FILMS_FAILED: {
      return { ...state, reqFailed: true, reqInProccess: false };
    }
    case SET_CURRENT_TITLE: {
      const selectedTitle = state.films.find((item) => item.id === action.id);
      return { ...state, currentTitle: selectedTitle ? selectedTitle : null };
    }
    case GET_FILM_BY_NAME_REQUEST: {
      return {
        ...state,
        filmByNameInProccess: true,
        filmByName: [],
        filmByNameFailed: false,
      };
    }
    case GET_FILM_BY_NAME_SUCCESS: {
      return {
        ...state,
        filmByNameInProccess: false,
        filmByNameFailed: false,
        filmByName: action.film,
      };
    }
    case GET_FILM_BY_NAME_FAILED: {
      return { ...state, filmByNameFailed: true, filmByNameInProccess: false };
    }
    default:
      return state;
  }
};
