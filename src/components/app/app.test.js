import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const TestData = {
  PROMO_FILM: {
    PROMO_TITLE: `The Grand Budapest Hotel`,
    PROMO_GENRE: `Drama`,
    PROMO_DATE_RELEASE: 2014
  },
  FILMS: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
};

describe(`App unit tests`, () => {
  it(`Render app`, () => {
    const tree = renderer
      .create(
          <App
            promoTitle={TestData.PROMO_FILM.PROMO_TITLE}
            promoGenre={TestData.PROMO_FILM.PROMO_GENRE}
            promoReleaseDate={TestData.PROMO_FILM.PROMO_DATE_RELEASE}
            films={TestData.FILMS}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
