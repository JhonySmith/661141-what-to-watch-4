import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

import {ActionCreator} from "../../reducer/state/state";
import {getCurrentShowNumber} from "../../reducer/state/selectors";

const ShowMoreButton = (props) => {
  const {movies, currentShowNumber, onShowMoreClick} = props;

  return (currentShowNumber < movies.length) ? (
    <>
      <button
        onClick={(evt) => {
          evt.preventDefault();
          onShowMoreClick(currentShowNumber);
        }}
        className="catalog__button"
        type="button"
      >Show more</button>
    </>
  ) : (``);
};

ShowMoreButton.propTypes = {
  movies: PropTypes.array.isRequired,
  currentShowNumber: PropTypes.number.isRequired,
  onShowMoreClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currentShowNumber: getCurrentShowNumber(state),
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick(currentShowNumber) {
    dispatch(ActionCreator.increaseShowNumber(currentShowNumber));
  },
});

export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
