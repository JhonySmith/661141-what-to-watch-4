import {reducer, ActionType} from "./reducer.js";
import {getGenres} from "./utils/genre-list.js";
import movies from "./mocks/films.js";

const getMoviesByGenre = (genre) => {
  return movies.filter((movie) => movie.genre === genre);
};

describe(`Reducer`, () => {
  it(`Return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      movies,
      genres: getGenres(movies),
      currentGenre: `All genres`,
      moviesByFilter: movies,
    });
  });

  it(`Return genre after choise`, () => {
    expect(reducer({
      currentGenre: `All genres`,
    }, {
      type: ActionType.SET_CURRENT_GENRE,
      payload: `Thrillers`,
    })).toEqual({
      currentGenre: `Thrillers`,
    });
  });

  it(`Return films by genre`, () => {
    expect(reducer({
      currentGenre: `Thrillers`,
      moviesByFilter: movies,
    }, {
      type: ActionType.GET_MOVIES_BY_GENRE,
      payload: getMoviesByGenre(`Thrillers`),
    })).toEqual({
      currentGenre: `Thrillers`,
      moviesByFilter: getMoviesByGenre(`Thrillers`),
    });
  });
});

