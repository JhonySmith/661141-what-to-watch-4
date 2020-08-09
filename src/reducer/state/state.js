import filters from "../../constants/filters.js";
import extend from "../../utils/commons";

const initialState = {
  currentGenre: filters.ALL,
};

const ActionType = {
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
  GET_CURRENT_GENRE: `GET_CURRENT_GENRE`,
  GET_MOVIES_BY_FILTER: `GET_MOVIES_BY_FILTER`,
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

    default:
      return state;

  }
};

export {ActionType, ActionCreator, reducer};
