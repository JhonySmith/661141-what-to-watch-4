import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

const init = () => {
  const promoFilmData = {
    promoTitle: `The Grand Budapest Hotel`,
    promoGenre: `Drama`,
    promoDateRelease: `2014`
  };

  ReactDOM.render(
      <App promoTitle={promoFilmData.promoTitle} promoGenre={promoFilmData.promoGenre} promoReleaseDate={promoFilmData.promoDateRelease}/>,
      document.querySelector(`#root`)
  );
};

init();
