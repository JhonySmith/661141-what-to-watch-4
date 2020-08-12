import React from "react";
import PropTypes from "prop-types";

import MoviesList from "../movies-list/movies-list.jsx";
import GenreList from "../genre-list/genre-list.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";


const Main = (props) => {
  const {promoMovie, movies, genres, currentGenre, onGenreClick, onTitleClick, showingMovies, currentShowNumber, onShowMoreClick, onPlayVideoClick, auth, onSignInClick} = props;

  console.log(auth);

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoMovie.backgroundPoster} alt={promoMovie.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            {auth.authorizationStatus
              ? (
                <div className="user-block__avatar">
                  <img
                    src={auth.avatar}
                    alt="User avatar"
                    width="63" height="63"
                  />
                </div>
              ) : (
                <a
                  onClick={onSignInClick}
                  href="#"
                  className="user-block__link"
                >
                  Sign in
                </a>
              )
            }
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoMovie.filmPoster} alt={promoMovie.title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoMovie.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoMovie.genre}</span>
                <span className="movie-card__year">{promoMovie.year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" 
                  onClick={(evt) => {
                    evt.preventDefault();
                    onPlayVideoClick(promoMovie);
                  }}
                  type="button">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList
            genres={genres}
            currentGenre={currentGenre}
            onGenreClick={onGenreClick}
          />

          <MoviesList
            movies={showingMovies}
            onTitleClick={onTitleClick}
          />

          <div className="catalog__more">
            <ShowMoreButton
              movies={movies}
              currentShowNumber={currentShowNumber}
              onShowMoreClick={onShowMoreClick}
            />
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

Main.propTypes = {
  promoMovie: PropTypes.shape(
      {
        title: PropTypes.string.isRequired,
        filmPoster: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        backgroundPoster: PropTypes.string.isRequired,
      }
  ).isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape(
          {
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired
          }
      ).isRequired
  ).isRequired,
  showingMovies: PropTypes.arrayOf(
      PropTypes.shape(
          {
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired
          }
      ).isRequired
  ).isRequired,
  currentShowNumber: PropTypes.number.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  filters: PropTypes.array,
  genres: PropTypes.array.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired
};

export default Main;
