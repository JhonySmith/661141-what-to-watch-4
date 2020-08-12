import extend from "../../utils/commons";
import UserAdapter from "../../adapters/user";

const initialState = {
  auth: {
    isAuth: false,
  }
};

const ActionType = {
  GET_AUTHOR_STATUS: `GET_AUTHOR_STATUS`,
};

const ActionCreator = {
  getAuthStatus: (auth) => {
    return {
      type: ActionType.GET_AUTHOR_STATUS,
      payload: auth
    };
  },
};

const Operation = {
  getAuthStatus: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.getAuthStatus(extend({
          isAuth: true,
        }, UserAdapter.parse(response.data))));
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, UserAdapter.toPost(authData))
      .then((response) => {
        dispatch(ActionCreator.getAuthStatus(extend({
          isAuth: true,
        }, UserAdapter.parse(response.data))));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.GET_AUTHOR_STATUS:
      return extend(state, {
        auth: action.payload,
      });

    default:
      return state;

  }
};

export {ActionType, ActionCreator, reducer, Operation};
