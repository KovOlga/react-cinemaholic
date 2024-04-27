import { combineReducers } from "redux";
import { filmsReducer } from "./films";
import { randomFilmReducer } from "./random-film";

export const rootReducer = combineReducers({
  films: filmsReducer,
  randomFilm: randomFilmReducer,
});
