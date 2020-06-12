import React from "react";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";

const App = (props) => {

  const {promoTitle, promoGenre, promoReleaseDate, films} = props;

  return <Main promoTitle={promoTitle} promoGenre={promoGenre} promoReleaseDate={promoReleaseDate} films={films} />;
};

export default App;

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoReleaseDate: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.string)
};
