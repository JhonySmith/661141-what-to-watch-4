import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onMouseHover, movie, onTitleClick} = this.props;
    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter = {() => {
          onMouseHover(movie);
        }}
      >
        <div className="small-movie-card__image">
          <img src={movie.previewImage} alt={movie.title} width="280" height="175" />
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
  }
}

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired
  }).isRequired,
  onMouseHover: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default SmallMovieCard;
