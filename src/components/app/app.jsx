import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer.js";
import {BrowserRouter, Route, Switch} from "react-router-dom";

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
    const {promoTitle, promoGenre, promoReleaseDate, movies, genres, currentGenre, onGenreClick} = this.props;
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
        promoTitle={promoTitle}
        promoGenre={promoGenre}
        promoReleaseDate={promoReleaseDate}
        movies={movies}
        genres={genres}
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
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoReleaseDate: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape(
          {
            title: PropTypes.string.isRequired,
            previewImage: PropTypes.string.isRequired
          }
      ).isRequired
  ).isRequired,
  genres: PropTypes.array.isRequired,
  currentGenre: PropTypes.string,
  onGenreClick: PropTypes.func
};

const mapStateToProps = (state) => ({
  movies: state.moviesByFilter,
  genres: state.genres,
  currentGenre: state.currentGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.setCurrentGenre(genre));
    dispatch(ActionCreator.getMoviesByGenre(genre));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
