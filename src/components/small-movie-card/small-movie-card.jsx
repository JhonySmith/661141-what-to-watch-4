import React from "react";
import PropTypes from "prop-types";
import withVideo from "../../hocs/with-video/with-video.js";

const SmallMovieCard = (props) => {
  const {onPlay, onStop, movie, onTitleClick} = props;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={onPlay}
      onMouseLeave={onStop}
    >
      <div className="small-movie-card__image">
        {props.children}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link"
          onClick={(evt) => {
            evt.preventDefault();
            onTitleClick(movie);
          }}
          href="movie-page.html">{movie.title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  onPlay: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired
};

export {SmallMovieCard};
export default withVideo(SmallMovieCard);
