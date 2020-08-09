import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import {ActionCreator} from "../../reducer/movie-page/movie-page";
import {getCurrentView} from "../../reducer/movie-page/selectors";

import OverviewTab from "./overview-tab.jsx";
import DetailsTab from "./details-tab.jsx";
import ReviewsTab from "./reviews-tab.jsx";

const TABS = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

class MoviePageTabs extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderActiveTab(currentView, movie) {
    switch (currentView) {
      case TABS.OVERVIEW:
        return (
          <OverviewTab
            movie={movie}
          />
        );

      case TABS.DETAILS:
        return (
          <DetailsTab
            movie={movie}
          />
        );

      case TABS.REVIEWS:
        return (
          <ReviewsTab
            movie={movie}
          />
        );

      default:
        return (
          <OverviewTab
            movie={movie}
          />
        );
    }
  }

  render() {
    const {movie, currentView, onTabClick} = this.props;

    return (
      <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {
            Object.values(TABS).map((tab) => {
              const active = tab === currentView ? `movie-nav__item--active` : ``;

              return (
                <li key={tab} className={`movie-nav__item ${active}`}>
                  <a href="#"
                    onClick={(evt) => {
                      evt.preventDefault();
                      onTabClick(tab);
                    }}
                    className="movie-nav__link">{tab}</a>
                </li>
              );
            })
          }
        </ul>
      </nav>
      {this._renderActiveTab(currentView, movie)}
      </>
    );

  }
}

MoviePageTabs.propTypes = {
  movie: PropTypes.shape().isRequired,
  currentView: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currentView: getCurrentView(state),
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick(tab) {
    dispatch(ActionCreator.setCurrentView(tab));
  },
});

export {MoviePageTabs};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePageTabs);
