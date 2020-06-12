import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

const PromoFilmData = {
  PROMO_TITLE: `The Grand Budapest Hotel`,
  PROMO_GENRE: `Drama`,
  PROMO_DATE_RELEASE: 2014
};

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

ReactDOM.render(
    <App promoTitle={PromoFilmData.PROMO_TITLE} promoGenre={PromoFilmData.PROMO_GENRE} promoReleaseDate={PromoFilmData.PROMO_DATE_RELEASE} films={films} />,
    document.querySelector(`#root`));
