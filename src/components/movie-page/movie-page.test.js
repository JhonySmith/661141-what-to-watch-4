import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";

const movie = {
  id: `123`,
  genre: `Horrors`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  releaseDate: `1992`,
  previewImage: `https://upload.wikimedia.org/wikipedia/commons/f/f6/70mm_film_print_with_DTS_sound.jpg`,
  cover: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/bohemian-rhapsody.jpg`,
  previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

describe(`Movie page snaps`, () => {
  it(`Snapshot test`, () => {
    const tree = renderer.create(
        <MoviePage
          movie={movie}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
