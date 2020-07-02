import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const TestData = {
  PROMO_FILM: {
    PROMO_TITLE: `The Grand Budapest Hotel`,
    PROMO_GENRE: `Drama`,
    PROMO_DATE_RELEASE: 2014
  },
  MOVIES: [
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
    }],
};

describe(`Main page unit tests`, () => {
  it(`Render main page`, () => {
    const tree = renderer
      .create(
          <Main
            promoTitle={TestData.PROMO_FILM.PROMO_TITLE}
            promoGenre={TestData.PROMO_FILM.PROMO_GENRE}
            promoReleaseDate={TestData.PROMO_FILM.PROMO_DATE_RELEASE}
            movies={TestData.MOVIES}
            onTitleClick={() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
