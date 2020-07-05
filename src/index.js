import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

import movies from "./mocks/films.js";

const PromoFilmData = {
  PROMO_TITLE: `The Grand Budapest Hotel`,
  PROMO_GENRE: `Drama`,
  PROMO_DATE_RELEASE: 2014
};

ReactDOM.render(
    <App promoTitle={PromoFilmData.PROMO_TITLE} promoGenre={PromoFilmData.PROMO_GENRE} promoReleaseDate={PromoFilmData.PROMO_DATE_RELEASE} movies={movies} />,
    document.querySelector(`#root`));
