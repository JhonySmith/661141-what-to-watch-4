import React from "react";
import PropTypes from "prop-types";

const ShowMoreButton = (props) => {
  const {movies, currentShowNumber, onShowMoreClick} = props;

  if (currentShowNumber >= movies.length) {
    return null;
  }

  return (
    <button
      onClick={(evt) => {
        evt.preventDefault();
        onShowMoreClick(currentShowNumber);
      }}
      className="catalog__button"
      type="button"
    >Show more</button>
  );
};

ShowMoreButton.propTypes = {
  movies: PropTypes.array.isRequired,
  currentShowNumber: PropTypes.number.isRequired,
  onShowMoreClick: PropTypes.func.isRequired
};

export default ShowMoreButton;

