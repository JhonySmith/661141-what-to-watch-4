import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer/state/state";
import {getMovies, getAllGenres, getPromoMovie} from "../../reducer/movies/selectors";
import {getCurrentGenre} from "../../reducer/state/selectors";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import filters from "../../constants/filters";

import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";

const ShowingPage = {
  MAIN: `main`,
  DETAILS: `deatils`
};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showingPage: ShowingPage.MAIN
    };

    this._movieDetails = null;

    this._openMovieDetails = this._openMovieDetails.bind(this);
  }

  _openMovieDetails(movie) {
    this.setState({
      showingPage: ShowingPage.DETAILS
    });

    this._movieDetails = movie;
  }

  _renderApp() {
    const {movies, genres, promoMovie, currentGenre, onGenreClick} = this.props;
    const {showingPage} = this.state;

    if (showingPage === ShowingPage.DETAILS) {
      return (
        <MoviePage
          movie={this._movieDetails}
        />
      );
    }

    return (
      <Main
        movies={currentGenre !== filters.ALL ? movies.filter((movie) => movie.genre === currentGenre) : movies}
        genres={genres}
        promoMovie={promoMovie}
        onGenreClick={onGenreClick}
        currentGenre={currentGenre}
        onTitleClick={this._openMovieDetails}
      />
    );
  }

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/movie-page">
            <MoviePage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
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
  onGenreClick: PropTypes.func
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  promoMovie: getPromoMovie(state),
  genres: getAllGenres(state),
  currentGenre: getCurrentGenre(state)
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.setCurrentGenre(genre));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
