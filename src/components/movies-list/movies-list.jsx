import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      onMovie: {},
    };
  }

  render() {
    const {movies, onTitleClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => (
          <SmallMovieCard
            key={movie.title}
            movie={movie}
            onMouseHover={(currentMovie) => {
              this.setState({
                onMovie: currentMovie,
              });
            }}
            onTitleClick={onTitleClick}
          />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape(
          {
            title: PropTypes.string.isRequired,
            previewImage: PropTypes.string.isRequired
          }
      ).isRequired
  ).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default MoviesList;
