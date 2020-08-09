import React from "react";
import PropTypes from "prop-types";

const OverviewTab = (props) => {
  const {movie:
    {
      rating,
      ratingCount,
      description
    }
  } = props;

  return (
    <>
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">Very good</span>
        <span className="movie-rating__count">{ratingCount} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      {description}
    </div>
    </>
  );
};

OverviewTab.propTypes = {
  movie: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default OverviewTab;
