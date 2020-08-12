import React from "react";
import PropTypes from "prop-types";
import MoviePageTabs from "../movie-page-tabs/movie-page-tabs.jsx";
import Header from "../header/header.jsx";

const MoviePage = (props) => {
  const {movie, movies, onPlayVideoClick, auth, onSignInClick} = props;

  return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">

            <div className="movie-card__bg">
              <img src={movie.backgroundPoster} alt={movie.title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header
              auth={auth}
              onSignInClick={onSignInClick}
            />

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{movie.title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{movie.genre}</span>
                  <span className="movie-card__year">{movie.year}</span>
                </p>

                <div className="movie-card__buttons">

                  <button className="btn btn--play movie-card__button" type="button"
                    onClick={(evt) => {
                      evt.preventDefault();
                      onPlayVideoClick(movie);
                    }}
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>

                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>

                  <a href="add-review.html" className="btn movie-card__button">Add review</a>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={movie.filmPoster} alt="The Grand Budapest Hotel poster" width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <MoviePageTabs
                  movie={movie}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <div className="catalog__movies-list">
              {
                movies
                .filter((mov) => (mov.genre === movie.genre) && (mov !== movie))
                .slice(0, 4)
                .map((sameMovie) => {
                  return (
                    <article key={sameMovie.id} className="small-movie-card catalog__movies-card">
                      <div className="small-movie-card__image">
                        <img src={sameMovie.image} alt={sameMovie.title} width="280" height="175" />
                      </div>
                      <h3 className="small-movie-card__title">
                        <a className="small-movie-card__link" href="movie-page.html">{sameMovie.title}</a>
                      </h3>
                    </article>
                  );

                })
              }

            </div>
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </>
  );
};

MoviePage.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    filmPoster: PropTypes.string.isRequired,
    backgroundPoster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    filter: PropTypes.func
  })),
  onPlayVideoClick: PropTypes.func
};

export default MoviePage;
