import React from "react";

import {sortByDate, toDateTimeAttribute, getReviewDate, getRatingScore} from "../../utils/utils.js";

const COLUMNS = 2;

const Reviews = (props) => {
  const {
    reviews,
  } = props;

  const sortedReviews = sortByDate(reviews);

  return (
    <div className="movie-card__reviews movie-card__row">
      {new Array(COLUMNS).fill(``).map((column, i) => (
        <div
          key={`comments-column${i + 1}`}
          className="movie-card__reviews-col"
        >
          {sortedReviews
            .slice(Math.ceil(reviews.length / COLUMNS) * i, Math.ceil(reviews.length / COLUMNS) * (i + 1))
            .map((review) => (
              <div
                key={`review${review.id}`}
                className="review"
              >
                <blockquote className="review__quote">
                  <p
                    className="review__text"
                    style={{
                      overflowWrap: `break-word`,
                    }}
                  >
                    {review.comment}
                  </p>

                  <footer className="review__details">
                    <cite className="review__author">
                      {review.userName}
                    </cite>
                    <time
                      className="review__date"
                      dateTime={toDateTimeAttribute(review.date)}
                    >
                      {getReviewDate(review.date)}
                    </time>
                  </footer>
                </blockquote>

                <div className="review__rating">
                  {getRatingScore(review.rating)}
                </div>
              </div>
            ))
          }
        </div>
      ))}
    </div>
  );
};

export default Reviews;
