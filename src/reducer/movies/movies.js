import extend from "../../utils/commons";
import movieAdapter from "../../adapters/movie-adapter.js";
import ReviewAdapter from "../../adapters/review.js";

const initialState = {
  movies: [],
  promoMovie: {},
  reviews: null
};

const ActionType = {
  GET_MOVIES: `GET_MOVIES`,
  GET_PROMO_MOVIE: `GET_PROMO_MOVIE`,
  GET_REVIEWS: `GET_REVIEWS`
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
  },

  getReviews: (reviews) => {
    return {
      type: ActionType.GET_REVIEWS,
      payload: reviews
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
  },

  getReviews: (movieId) => (dispatch, getState, api) => {
    dispatch(ActionCreator.getReviews(null));

    return api.get(`/comments/${movieId}`)
      .then((response) => {
        const reviews = ReviewAdapter.parse(response.data);
        dispatch(ActionCreator.getReviews(reviews));
      });
  },

  postReview: (review, movieId) => (dispatch, getState, api) => {
    console.log(123);
    console.log(review);
    console.log(movieId);
    return api.post(`/comments/${movieId}`, ReviewAdapter.toPost(review))
      .then((response) => {
        const reviews = ReviewAdapter.parse(response.data);
        console.log(reviews);
        dispatch(ActionCreator.getReviews(reviews));
      });
  },
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

    case ActionType.GET_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });

    default:
      return state;

  }
};

export {ActionType, ActionCreator, reducer, Operation};
