import {reducer} from "./movies.js";

describe(`Reducer`, () => {
  it(`Return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      movies: [],
      promoMovie: {},
      reviews: null
    });
  });
});

