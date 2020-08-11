import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer/state/state";
import {getMovies, getAllGenres, getPromoMovie} from "../../reducer/movies/selectors";
import {getCurrentGenre, getCurrentShowNumber} from "../../reducer/state/selectors";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import filters from "../../constants/filters";
import FullVideoPlayer from "../full-video-player/full-video-player.jsx";

import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";

const ShowingPage = {
  MAIN: `main`,
  DETAILS: `deatils`,
  FULL_VIDEO: `fullVideo`
};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showingPage: ShowingPage.MAIN
    };

    this._movieDetails = null;
    this._movieVideo = null;

    this._openMovieDetails = this._openMovieDetails.bind(this);
    this._openFullVideo = this._openFullVideo.bind(this);
  }

  _openMovieDetails(movie) {
    this.setState({
      showingPage: ShowingPage.DETAILS
    });

    this._movieDetails = movie;
  }

  _openFullVideo(movie) {
    this.setState({
      showingPage: ShowingPage.FULL_VIDEO
    });

    this._movieVideo = movie;
  }

  _renderApp() {
    const {movies, genres, promoMovie, currentGenre, onGenreClick, currentShowNumber, onShowMoreClick} = this.props;
    const {showingPage} = this.state;
    const showingMovies = (currentGenre !== filters.ALL ? movies.filter((movie) => movie.genre === currentGenre) : movies);

    switch (showingPage) {
      case ShowingPage.DETAILS:
        return (
          <MoviePage
            movie={this._movieDetails}
            movies={movies}
          />
        );
      case ShowingPage.FULL_VIDEO:
        return (
          <FullVideoPlayer
            movie={this._movieVideo}
            videoWidth={``}
            videoHeight={``}
          />
        );
      default:
        return (
          <Main
            showingMovies={showingMovies.slice(0, currentShowNumber)}
            movies={showingMovies}
            genres={genres}
            promoMovie={promoMovie}
            onGenreClick={onGenreClick}
            currentGenre={currentGenre}
            onTitleClick={this._openMovieDetails}
            currentShowNumber={currentShowNumber}
            onShowMoreClick={onShowMoreClick}
            onPlayVideoClick={this._openFullVideo}
          />);
    }
  }

  render() {
    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderApp()}
        </Route>
        <Route exact path="/movie-page">
          <MoviePage />
        </Route>
        <Route exact path="/movie-video">
          <FullVideoPlayer />
        </Route>
      </Switch>
    </BrowserRouter>;
  }
}

App.propTypes = {
  promoMovie: PropTypes.shape().isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape(
          {
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired
          }
      ).isRequired
  ).isRequired,
  genres: PropTypes.array.isRequired,
  currentGenre: PropTypes.string,
  onGenreClick: PropTypes.func,
  currentShowNumber: PropTypes.number,
  onShowMoreClick: PropTypes.func
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  promoMovie: getPromoMovie(state),
  genres: getAllGenres(state),
  currentGenre: getCurrentGenre(state),
  currentShowNumber: getCurrentShowNumber(state)
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.setCurrentGenre(genre));
    dispatch(ActionCreator.setShowNumberByDefault());
  },
  onShowMoreClick(currentShowNumber) {
    dispatch(ActionCreator.increaseShowNumber(currentShowNumber));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
