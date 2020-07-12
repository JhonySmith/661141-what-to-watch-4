import movies from "./mocks/films.js";
import filters from "./constants/filters.js";
import {getGenres} from "./utils/genre-list.js";

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const initialState = {
  movies,
  genres: getGenres(movies),
  currentGenre: filters.ALL,
  moviesByFilter: movies
};

const ActionType = {
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
  SET_CURRENT_GENRE: `SET_GENRE_FILTER`,
};

const ActionCreator = {

  getMoviesByGenre: (genre) => {
    let moviesByFilter = genre !== filters.ALL ? movies.filter((movie) => movie.genre === genre) : initialState.movies;
    return {
      type: ActionType.GET_MOVIES_BY_GENRE,
      payload: moviesByFilter
    };
  },

  setCurrentGenre: (genre) => {
    return {
      type: ActionType.SET_CURRENT_GENRE,
      payload: genre
    };
  }

};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.GET_MOVIES_BY_GENRE:
      return extend(state, {
        moviesByFilter: action.payload,
      });

    case ActionType.SET_CURRENT_GENRE:
      return extend(state, {
        currentGenre: action.payload
      });

    default:
      return state;

  }
};

export {ActionType, ActionCreator, reducer};
