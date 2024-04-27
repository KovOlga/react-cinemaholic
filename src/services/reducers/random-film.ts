import { mock } from "../../constants/mock";
import { IFilm } from "../../types/data";
import {
  GET_RANDOM_FILM_REQUEST,
  GET_RANDOM_FILM_SUCCESS,
  GET_RANDOM_FILM_FAILED,
  IRandomFilmActions,
} from "../actions/random-film";

export interface IInitialState {
  film: any;
  reqInProccess: boolean;
  reqFailed: boolean;
}

const initialState: IInitialState = {
  film: mock,
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
        film: [],
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
