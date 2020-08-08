const movieAdapter = (movie) => {
  return {
    id: movie.id,
    title: movie.name,
    filmPoster: movie.poster_image,
    image: movie.preview_image,
    backgroundPoster: movie.background_image,
    backgroundColor: movie.background_color,
    src: movie.video_link,
    preview: movie.preview_video_link,
    description: movie.description,
    rating: movie.rating,
    ratingCount: movie.scores_count,
    director: movie.director,
    starring: movie.starring,
    runTime: movie.run_time,
    genre: movie.genre,
    year: movie.released,
    isFavoriteFilm: movie.is_favorite
  };
};

export default movieAdapter;
