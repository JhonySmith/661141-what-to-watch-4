import NameSpace from '../name-space';

export const getCurrentGenre = (state) => state[NameSpace.STATE].currentGenre;
export const getMoviesByFilter = (state) => state[NameSpace.STATE].filtredMovies;
export const getCurrentShowNumber = (state) => state[NameSpace.STATE].currentShowNumber;

