import extend from "../../utils/commons";

const TABS = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

const initialState = {
  currentView: TABS.OVERVIEW,
};

const ActionType = {
  SET_CURRENT_VIEW: `SET_CURRENT_VIEW`,
  GET_CURRENT_VIEW: `GET_CURRENT_VIEW`,
};

const ActionCreator = {

  setCurrentView: (view) => {
    return {
      type: ActionType.SET_CURRENT_VIEW,
      payload: view
    };
  },

  getCurrentView: (currentView) => {
    return {
      type: ActionType.GET_CURRENT_VIEW,
      payload: currentView
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_VIEW:
      return extend(state, {
        currentView: action.payload,
      });

    case ActionType.GET_CURRENT_VIEW:
      return extend(state, {
        currentView: action.payload
      });

    default:
      return state;

  }
};

export {ActionType, ActionCreator, reducer};
