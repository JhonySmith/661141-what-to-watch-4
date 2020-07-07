import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      videoIsPlaing: false
    };
  }

  _onMouseEnter() {
    const {onMouseHover, movie} = this.props;

    onMouseHover(movie);
    this.setState({
      videoIsPlaing: true
    });
  }

  _onMouseLeave() {
    this.setState({
      videoIsPlaing: false
    });
  }

  render() {
    const {movie, onTitleClick} = this.props;
    const {videoIsPlaing} = this.state;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter = {() => {
          this._onMouseEnter();
        }}
        onMouseLeave = {() => {
          this._onMouseLeave();
        }}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            muted
            movie={movie}
            isPlaying={videoIsPlaing}
          />
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
    previewImage: PropTypes.string.isRequired,
    previewVideo: PropTypes.string.isRequired
  }).isRequired,
  onMouseHover: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default SmallMovieCard;
