import React from "react";
import PropTypes from "prop-types";
import withFullVideo from "../../hocs/with-full-video/with-full-video.js";
import {getTimeEnd} from "../../utils/get-time-end.js";

const FullVideoPlayer = (props) => {
  const {movie, onPlay, isPlaying, progress, duration, valueCount} = props;

  return (
    <>
      <div className="player">
        {props.children}

        <button type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={valueCount} max="100"></progress>
              <div className="player__toggler" style={{left: valueCount + `%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{getTimeEnd(duration, progress)}</div>
          </div>

          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={(evt) => {
                evt.preventDefault();
                onPlay();
              }}
            >
              {isPlaying ?
                <svg viewBox="0 0 14 21" width="19" height="19">
                  <use xlinkHref="#pause" />
                </svg>
                :
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" />
                </svg>
              }
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen"
              onClick={
                (evt) => {
                  if (document.fullscreen) {
                    document.exitFullscreen();
                  }
                  evt.target.requestFullscreen();
                }}
            >
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

FullVideoPlayer.propTypes = {
  movie: PropTypes.shape(),
  children: PropTypes.element.isRequired,
};

export {FullVideoPlayer};
export default withFullVideo(FullVideoPlayer);
