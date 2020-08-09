import extend from "../../utils/commons";
import movieAdapter from "../../adapters/movie-adapter.js";

const initialState = {
  movies: [],
  promoMovie: {}
};

const ActionType = {
  GET_MOVIES: `GET_MOVIES`,
  GET_PROMO_MOVIE: `GET_PROMO_MOVIE`
};

const ActionCreator = {

  getMovies: (movies) => {
    return {
      type: ActionType.GET_MOVIES,
      payload: movies
    };
  },

  getPromoMovie: (promoMovie) => {
    return {
      type: ActionType.GET_PROMO_MOVIE,
      payload: promoMovie
    };
  }
};

const Operation = {
  getMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.getMovies(response.data.map((movie) => movieAdapter(movie))));
      });
  },

  getPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.getPromoMovie(movieAdapter(response.data)));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.GET_MOVIES:
      return extend(state, {
        movies: action.payload,
      });

    case ActionType.GET_PROMO_MOVIE:
      return extend(state, {
        promoMovie: action.payload
      });

    default:
      return state;

  }
};

export {ActionType, ActionCreator, reducer, Operation};
