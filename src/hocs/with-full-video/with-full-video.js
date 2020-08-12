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
        isPlaying: false,
        duration: 0,
        valueCount: 0
      };

      this._handlePlay = this._handlePlay.bind(this);
    }

    _handlePlay() {
      this.setState({
        isPlaying: !this.state.isPlaying
      });
    }

    render() {
      const {movie} = this.props;
      const {isPlaying, progress, duration, valueCount} = this.state;

      return (
        <Component
          {...this.props}
          onPlay={this._handlePlay}
          isPlaying={isPlaying}
          progress={progress}
          duration={duration}
          valueCount={valueCount}
        >
          <video
            width={100 + `%`}
            height={100 + `%`}
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

      video.ontimeupdate = () => {
        this.setState({
          progress: Math.floor(video.currentTime),
          duration: Math.floor(video.duration),
          valueCount: (this.state.progress * 100 / this.state.duration).toString()
        });
      };
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
        video.play();
      } else {
        video.pause();
      }
    }
  }

  WithVideo.propTypes = {
    movie: PropTypes.shape({
      image: PropTypes.string,
      preview: PropTypes.string
    }),
    muted: PropTypes.bool,
  };

  return WithVideo;
};

export default withVideo;
