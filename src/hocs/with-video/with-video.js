import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();
      this.timeout = null;

      this.state = {
        progress: 0,
        isPlaying: false
      };

      this._handlePause = this._handlePause.bind(this);
      this._handlePlay = this._handlePlay.bind(this);
    }

    _handlePlay() {
      this.setState({
        isPlaying: true
      });
    }

    _handlePause() {
      this.setState({
        isPlaying: false
      });
    }

    render() {
      const {movie, videoWidth, videoHeight} = this.props;

      return (
        <Component
          {...this.props}
          onPlay={this._handlePlay}
          onPause={this._handlePause}
        >
          <video width={videoWidth} height={videoHeight}
            ref={this._videoRef}
            type={this._typeDefine(movie.preview)}
            poster={movie.image}>
            Sorry, your browser doesnt support embedded videos.
          </video>
        </Component>
      );
    }

    _typeDefine(source) {
      return `video/${source.split(`.`).pop()}`;
    }

    componentDidMount() {
      const {movie, muted} = this.props;
      const video = this._videoRef.current;

      video.src = movie.preview;
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

      if (this.state.isPlaying) {
        this._timeout = setTimeout(() => video.play(), 1000);
      } else {
        clearTimeout(this._timeout);
        video.load();
      }
    }
  }

  WithVideo.propTypes = {
    movie: PropTypes.shape({
      image: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired
    }).isRequired,
    muted: PropTypes.bool.isRequired,
    videoWidth: PropTypes.number,
    videoHeight: PropTypes.number
  };

  return WithVideo;
};

export default withVideo;
