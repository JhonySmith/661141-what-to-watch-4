import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";


import reducer from "./reducer/reducer.js";
import {Operation as MoviesOperation} from "./reducer/movies/movies.js";
import {ActionCreator} from "./reducer/user/user.js";

import {createAPI} from "./utils/api.js";

import App from "./components/app/app.jsx";

const onUnauthorized = () => store.dispatch(ActionCreator.getAuthStatus({
    authorizationStatus: false,
}));

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(MoviesOperation.getMovies());
store.dispatch(MoviesOperation.getPromoMovie());

ReactDOM.render(
    <Provider store={store}>
      <App
      />
    </Provider>,
    document.querySelector(`#root`));
