import React from "react";
import PropTypes from "prop-types";

const GenreList = (props) => {
  const {genres, onGenreClick, currentGenre} = props;

  return (
    <ul className = "catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={`catalog__genres-item ${genre === currentGenre ? `catalog__genres-item--active` : ` `}`}>
          <a
            href="#"

            onClick={(evt) => {
              evt.preventDefault();
              onGenreClick(genre);
            }}

            className="catalog__genres-link"
          >{genre}</a>
        </li>
      ))}
    </ul >
  );
};

GenreList.propTypes = {
  genres: PropTypes.array.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  currentGenre: PropTypes.string
};

export default GenreList;
