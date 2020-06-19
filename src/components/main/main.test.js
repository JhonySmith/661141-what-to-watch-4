import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const TestData = {
  PROMO_FILM: {
    PROMO_TITLE: `The Grand Budapest Hotel`,
    PROMO_GENRE: `Drama`,
    PROMO_DATE_RELEASE: 2014
  },
  FILMS: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
};

describe(`Main page unit tests`, () => {
  it(`Render main page`, () => {
    const tree = renderer
      .create(
          <Main
            promoTitle={TestData.PROMO_FILM.PROMO_TITLE}
            promoGenre={TestData.PROMO_FILM.PROMO_GENRE}
            promoReleaseDate={TestData.PROMO_FILM.PROMO_DATE_RELEASE}
            films={TestData.FILMS}
            titleClickHandler={() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
