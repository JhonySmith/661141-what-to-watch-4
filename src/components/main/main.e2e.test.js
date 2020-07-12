
import React from "react";
import Enzyme, {mount} from "enzyme";
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
  MOVIES: [
    {
      genre: `horror`,
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      previewImage: `https://upload.wikimedia.org/wikipedia/commons/f/f6/70mm_film_print_with_DTS_sound.jpg`,
      previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    },
    {
      genre: `Thriller`,
      title: `Bohemian Rhapsody`,
      previewImage: `https://upload.wikimedia.org/wikipedia/commons/e/eb/FSC-R-logobackground_green.png`,
      previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    }],
};


const genres = [`All genres`, `Horror`, `Comedies`];

const allGenres = `All genres`;

describe(`Main page e2e tests`, () => {
  it(`Should all titles be pressed`, () => {
    const onTitleClick = jest.fn();

    const main = mount(
        <Main
          promoTitle={TestData.PROMO_FILM.PROMO_TITLE}
          promoGenre={TestData.PROMO_FILM.PROMO_GENRE}
          promoReleaseDate={TestData.PROMO_FILM.PROMO_DATE_RELEASE}
          movies={TestData.MOVIES}
          onTitleClick={onTitleClick}
          genres={genres}
          onGenreClick={() => { }}
          currentGenre={allGenres}
        />
    );

    const filmsTitle = main.find(`a.small-movie-card__link`);

    filmsTitle.forEach((it) => it.simulate(`click`));

    expect(onTitleClick.mock.calls.length).toBe(TestData.MOVIES.length);
  });
});
