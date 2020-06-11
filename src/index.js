import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

const PromoFilmData = {
  PROMO_TITLE: `The Grand Budapest Hotel`,
  PROMO_GENRE: `Drama`,
  PROMO_DATE_RELEASE: `2014`
};

ReactDOM.render(
    <App promoTitle={PromoFilmData.PROMO_TITLE} promoGenre={PromoFilmData.PROMO_GENRE} promoReleaseDate={PromoFilmData.PROMO_DATE_RELEASE}/>,
    document.querySelector(`#root`));
