
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const TestData = {
  PROMO_FILM: {
    PROMO_TITLE: `The Grand Budapest Hotel`,
    PROMO_GENRE: `Drama`,
    PROMO_DATE_RELEASE: 2014
  },
  FILMS: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
};

describe(`Main page e2e tests`, () => {
  it(`Should all titles be pressed`, () => {
    const titleClickHandler = jest.fn();

    const main = shallow(
        <Main
          promoTitle={TestData.PROMO_FILM.PROMO_TITLE}
          promoGenre={TestData.PROMO_FILM.PROMO_GENRE}
          promoReleaseDate={TestData.PROMO_FILM.PROMO_DATE_RELEASE}
          films={TestData.FILMS}
          titleClickHandler={titleClickHandler}
        />
    );

    const filmsTitle = main.find(`a.small-movie-card__link`);

    filmsTitle.forEach((it) => it.simulate(`click`));

    expect(titleClickHandler.mock.calls.length).toBe(TestData.FILMS.length);
  });
});
