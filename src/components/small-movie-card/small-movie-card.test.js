import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";

const movie =
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    image: `https://upload.wikimedia.org/wikipedia/commons/f/f6/70mm_film_print_with_DTS_sound.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `horror`,
  };

describe(`Movies list unit tests`, () => {
  it(`Render movies list`, () => {
    const tree = renderer
      .create(
          <SmallMovieCard
            movie={movie}
            muted={true}
            onTitleClick={() => {}}
          />, {
            createNodeMock: () => {
              return {};
            }
          }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
