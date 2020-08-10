import filters from "../../constants/filters.js";
import extend from "../../utils/commons";

const START_MOVIE_NUMBER = 8;

const initialState = {
  currentGenre: filters.ALL,
  currentShowNumber: START_MOVIE_NUMBER
};

const ActionType = {
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
  GET_CURRENT_GENRE: `GET_CURRENT_GENRE`,
  GET_MOVIES_BY_FILTER: `GET_MOVIES_BY_FILTER`,
  GET_CURRENT_SHOW_NUMBER: `GET_CURRENT_SHOW_NUMBER`,
  INCREASE_SHOW_NUMBER: `INCREASE_SHOW_NUMBER`,
  SET_SHOW_NUMBER_BY_DEFAULT: `SET_SHOW_NUMBER_BY_DEFAULT`
};

const ActionCreator = {

  setCurrentGenre: (genre) => {
    return {
      type: ActionType.SET_CURRENT_GENRE,
      payload: genre
    };
  },

  getCurrentGenre: (currentGenre) => {
    return {
      type: ActionType.GET_CURRENT_GENRE,
      payload: currentGenre
    };
  },

  getMoviesByFilter: (movies) => {
    return {
      type: ActionType.GET_MOVIES_BY_FILTER,
      payload: movies
    };
  },

  getCurrentShowNumber: (currentShowNumber) => {
    return {
      type: ActionType.GET_CURRENT_SHOW_NUMBER,
      payload: currentShowNumber
    };
  },

  increaseShowNumber: (currentShowNumber) => {
    return {
      type: ActionType.INCREASE_SHOW_NUMBER,
      payload: currentShowNumber + START_MOVIE_NUMBER
    };
  },

  setShowNumberByDefault: () => {
    return {
      type: ActionType.SET_SHOW_NUMBER_BY_DEFAULT,
      payload: START_MOVIE_NUMBER
    };
  }

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_GENRE:
      return extend(state, {
        currentGenre: action.payload,
      });

    case ActionType.GET_CURRENT_GENRE:
      return extend(state, {
        currentGenre: action.payload
      });

    case ActionType.GET_MOVIES_BY_FILTER:
      return extend(state, {
        filtredMovies: action.payload
      });

    case ActionType.GET_CURRENT_SHOW_NUMBER:
      return extend(state, {
        currentShowNumber: action.payload
      });

    case ActionType.INCREASE_SHOW_NUMBER:
      return extend(state, {
        currentShowNumber: action.payload
      });

    case ActionType.SET_SHOW_NUMBER_BY_DEFAULT:
      return extend(state, {
        currentShowNumber: action.payload
      });

    default:
      return state;

  }
};

export {ActionType, ActionCreator, reducer};
