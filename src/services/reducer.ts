import {
  GET_TOP_FILMS_FAILED,
  GET_TOP_FILMS_REQUEST,
  GET_TOP_FILMS_SUCCESS,
  TFilmsActions,
} from "./actions";

export interface IInitialState {
  films: any;
  reqInProccess: boolean;
  reqFailed: boolean;
}

const initialState: IInitialState = {
  films: [],
  reqInProccess: false,
  reqFailed: false,
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
        films: action.films.docs,
      };
    }
    case GET_TOP_FILMS_FAILED: {
      return { ...state, reqFailed: true, reqInProccess: false };
    }
    default:
      return state;
  }
};
