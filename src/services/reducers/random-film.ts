import { IFilm } from "../../types/data";
import {
  GET_RANDOM_FILM_REQUEST,
  GET_RANDOM_FILM_SUCCESS,
  GET_RANDOM_FILM_FAILED,
  IRandomFilmActions,
} from "../actions/random-film";

export interface IInitialState {
  film: IFilm | null;
  reqInProccess: boolean;
  reqFailed: boolean;
}

const initialState: IInitialState = {
  film: null,
  reqInProccess: false,
  reqFailed: false,
};

export const randomFilmReducer = (
  state = initialState,
  action: IRandomFilmActions
): IInitialState => {
  switch (action.type) {
    case GET_RANDOM_FILM_REQUEST: {
      return {
        ...state,
        reqInProccess: true,
        film: null,
        reqFailed: false,
      };
    }
    case GET_RANDOM_FILM_SUCCESS: {
      return {
        ...state,
        reqInProccess: false,
        reqFailed: false,
        film: action.film,
      };
    }
    case GET_RANDOM_FILM_FAILED: {
      return { ...state, reqFailed: true, reqInProccess: false };
    }
    default:
      return state;
  }
};
