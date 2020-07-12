import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer.js";

import Main from "../main/main.jsx";

const onTitleClick = () => {};

class App extends PureComponent {
  render() {
    const {promoTitle, promoGenre, promoReleaseDate, movies, genres, currentGenre, onGenreClick} = this.props;

    return <Main
      promoTitle={promoTitle}
      promoGenre={promoGenre}
      promoReleaseDate={promoReleaseDate}
      movies={movies}
      genres={genres}
      onGenreClick={onGenreClick}
      currentGenre={currentGenre}
      onTitleClick={onTitleClick}
    />;
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
