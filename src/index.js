import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";


import App from "./components/app/app.jsx";

const PromoFilmData = {
  PROMO_TITLE: `The Grand Budapest Hotel`,
  PROMO_GENRE: `Drama`,
  PROMO_DATE_RELEASE: 2014
};

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App
        promoTitle={PromoFilmData.PROMO_TITLE}
        promoGenre={PromoFilmData.PROMO_GENRE}
        promoReleaseDate={PromoFilmData.PROMO_DATE_RELEASE}
      />
    </Provider>,
    document.querySelector(`#root`));
