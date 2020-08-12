import React from "react";
import Header from "../header/header.jsx";
import withComments from "../../hocs/with-comments/with-comments.js";
import PropTypes from "prop-types";

const Review = (props) => {
  const {
    movie,
    starsCount,
    isSubmitButtonEnabled,
    onStarsChange,
    onCommentInput,
    onSubmit,
    auth,
    onSignInClick
  } = props;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img
            alt={movie.title}
            src={movie.backgroundPoster}
            style={{backgroundColor: movie.backgroundColor}}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          auth={auth}
          onSignInClick={onSignInClick}
        />

        <div className="movie-card__poster movie-card__poster--small">
          <img
            src={movie.image}
            alt={`${movie.title} poster`}
            width="218" height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <form
          onSubmit={onSubmit}
          className="add-review__form"
          action="#"
        >
          <div className="rating">
            <div
              onChange={onStarsChange}
              className="rating__stars"
            >

              {new Array(starsCount).fill(``).map((starButton, i) => (
                <React.Fragment key = {`star${i + 1}`}>
                  <input
                    className="rating__input"
                    id={`star-${i + 1}`}
                    type="radio"
                    name="rating"
                    value={i + 1}
                  />
                  <label className="rating__label" htmlFor={`star-${i + 1}`}>Rating {i + 1}</label>
                </React.Fragment>
              ))}

            </div>
          </div>

          <div className="add-review__text">
            <textarea
              onInput={onCommentInput}
              id="review-text"
              name="review-text"
              className="add-review__textarea"
              placeholder="Review text"
            ></textarea>

            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={!isSubmitButtonEnabled}
                style={isSubmitButtonEnabled ? null : {opacity: `0.4`}}
              >
                Post
              </button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

Review.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    backgroundPoster: PropTypes.string,
    backgroundColor: PropTypes.string,
    image: PropTypes.string,
  }),
  starsCount: PropTypes.number,
  isSubmitButtonEnabled: PropTypes.bool,
  onStarsChange: PropTypes.func,
  onCommentInput: PropTypes.func,
  onSubmit: PropTypes.func,
  auth: PropTypes.shape(),
  onSignInClick: PropTypes.func,
};

export {Review};
export default withComments(Review);
