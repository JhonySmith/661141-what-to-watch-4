import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";

const movies = [
  {
    genre: `horror`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    previewImage: `https://upload.wikimedia.org/wikipedia/commons/f/f6/70mm_film_print_with_DTS_sound.jpg`
  },
  {
    genre: `Thriller`,
    title: `Bohemian Rhapsody`,
    previewImage: `https://upload.wikimedia.org/wikipedia/commons/f/f6/70mm_film_print_with_DTS_sound.jpg`
  },
  {
    genre: `Romance`,
    title: `Macbeth`,
    previewImage: `https://upload.wikimedia.org/wikipedia/commons/f/f6/70mm_film_print_with_DTS_sound.jpg`
  }];

describe(`Movies list unit tests`, () => {
  it(`Render movies list`, () => {
    const tree = renderer
      .create(
          <MoviesList
            movies={movies}
            onTitleClick={() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
