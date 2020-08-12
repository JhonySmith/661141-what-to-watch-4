import React from "react";
import PropTypes from "prop-types";
import {SmallVideoSize} from "../../constants/video.js";

import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

const MoviesList = (props) => {
  const {movies, onTitleClick} = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => (
        <SmallMovieCard
          key={movie.title}
          movie={movie}
          muted={true}
          onTitleClick={onTitleClick}
          videoWidth={SmallVideoSize.WIDTH}
          videoHeight={SmallVideoSize.HEIGHT}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape(
          {
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired
          }
      ).isRequired
  ),
  onTitleClick: PropTypes.func.isRequired
};

export default MoviesList;
