import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer/state/state";
import {getMovies, getAllGenres, getPromoMovie} from "../../reducer/movies/selectors";
import {getCurrentGenre, getCurrentShowNumber} from "../../reducer/state/selectors";
import {getAuthStatus} from "../../reducer/user/selectors";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import filters from "../../constants/filters";
import FullVideoPlayer from "../full-video-player/full-video-player.jsx";

import {Operation} from "../../reducer/user/user.js";

import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import SignIn from '../sign-in/sign-in.jsx';

const ShowingPage = {
  MAIN: `main`,
  DETAILS: `deatils`,
  FULL_VIDEO: `fullVideo`,
  AUTH_FORM: `authForm`
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
    this._openSignIn = this._openSignIn.bind(this);
    this._openMain = this._openMain.bind(this);
  }

  _openMain() {
    this.setState({
      showingPage: ShowingPage.MAIN
    });
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

  _openSignIn() {
    this.setState({
      showingPage: ShowingPage.AUTH_FORM
    });
  }

  _renderApp() {
    const {movies, genres, promoMovie, currentGenre, onGenreClick, currentShowNumber, onShowMoreClick, auth, onSignInSubmit} = this.props;
    const {showingPage} = this.state;
    const showingMovies = (currentGenre !== filters.ALL ? movies.filter((movie) => movie.genre === currentGenre) : movies);

    switch (showingPage) {
      case ShowingPage.DETAILS:
        return (
          <MoviePage
            movie={this._movieDetails}
            movies={movies}
            onPlayVideoClick={this._openFullVideo}
            auth={auth}
            onSignInClick={this._openSignIn}
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
      case ShowingPage.AUTH_FORM:
        return (
          <SignIn
            onSignInSubmit={onSignInSubmit}
            openMain={this._openMain}
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
            auth={auth}
            onSignInClick={this._openSignIn}
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
        <Route exact path="/sign-in">
          <SignIn />
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
  currentShowNumber: getCurrentShowNumber(state),
  auth: getAuthStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.setCurrentGenre(genre));
    dispatch(ActionCreator.setShowNumberByDefault());
  },
  onShowMoreClick(currentShowNumber) {
    dispatch(ActionCreator.increaseShowNumber(currentShowNumber));
  },
  onSignInSubmit(authData) {
    dispatch(Operation.login(authData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
