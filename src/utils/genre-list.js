export const getGenres = (movies) => {
  const genres = new Set(movies.map((movie) => movie.genre));
  return [`All genres`, ...genres];
};
