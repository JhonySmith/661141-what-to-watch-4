import React, {PureComponent, Fragment, createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this.timeout = null;

    this.state = {
      progress: 0,
      isPlaying: props.isPlaying
    };
  }

  componentDidMount() {
    const {movie, muted} = this.props;
    const video = this._videoRef.current;

    video.src = movie.previewVideo;
    video.muted = muted;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
    video.muted = null;
    video.onplay = null;

    clearTimeout(this.timeout);
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      this._timeout = setTimeout(() => video.play(), 1000);
    } else {
      clearTimeout(this._timeout);
      video.load();
    }
  }

  render() {
    const {movie} = this.props;

    return (
      <Fragment>
        <video width="280" height="175"
          ref={this._videoRef}
          type={this._typeDefine(movie.previewVideo)}
          poster={movie.previewImage}>
              Sorry, your browser doesnt support embedded videos.
        </video>
      </Fragment>
    );
  }

  _typeDefine(source) {
    return `video/${source.split(`.`).pop()}`;
  }
}

VideoPlayer.propTypes = {
  movie: PropTypes.shape({
    previewImage: PropTypes.string.isRequired,
    previewVideo: PropTypes.string.isRequired
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  muted: PropTypes.bool.isRequired
};

export default VideoPlayer;
