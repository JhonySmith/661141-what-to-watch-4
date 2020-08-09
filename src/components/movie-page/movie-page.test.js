import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";

const movie = {
  id: 123,
  genre: `Horrors`,
  director: `Horrors`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  starring: `Fantastic Beasts: The Crimes of Grindelwald`,
  description: `Fantastic Beasts: The Crimes of Grindelwald`,
  year: 1992,
  previewImage: `https://upload.wikimedia.org/wikipedia/commons/f/f6/70mm_film_print_with_DTS_sound.jpg`,
  backgroundPoster: `img/bg-the-grand-budapest-hotel.jpg`,
  filmPoster: `img/bohemian-rhapsody.jpg`,
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
