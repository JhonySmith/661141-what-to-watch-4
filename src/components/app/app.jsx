import React from "react";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";

const onTitleClick = () => {};

const App = (props) => {

  const {promoTitle, promoGenre, promoReleaseDate, movies} = props;

  return <Main promoTitle={promoTitle} promoGenre={promoGenre} promoReleaseDate={promoReleaseDate} movies={movies} onTitleClick={onTitleClick} />;
};

export default App;

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoReleaseDate: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape(
          {
            title: PropTypes.string.isRequired,
            previewImage: PropTypes.string.isRequired
          }
      ).isRequired
  ).isRequired,
};
