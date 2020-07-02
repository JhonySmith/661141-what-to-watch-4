import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";

const movie =
  {
    genre: `horror`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    previewImage: `https://upload.wikimedia.org/wikipedia/commons/f/f6/70mm_film_print_with_DTS_sound.jpg`
  };

describe(`Movies list unit tests`, () => {
  it(`Render movies list`, () => {
    const tree = renderer
      .create(
          <SmallMovieCard
            movie={movie}
            onMouseHover={() => {}}
            onTitleClick={() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
