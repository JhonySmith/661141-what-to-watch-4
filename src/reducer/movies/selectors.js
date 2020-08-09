import NameSpace from '../name-space';
import {getGenres} from '../../utils/genre-list.js';

export const getMovies = (state) => state[NameSpace.MOVIES].movies;

export const getPromoMovie = (state) => state[NameSpace.MOVIES].promoMovie;

export const getAllGenres = (state) => getGenres(state[NameSpace.MOVIES].movies);
