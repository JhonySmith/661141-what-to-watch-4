
import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const TestData = {
  PROMO_MOVIE: {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: 2014,
    backgroundPoster: `https://upload.wikimedia.org/wikipedia/commons/e/eb/FSC-R-logobackground_green.png`,
    filmPoster: `https://upload.wikimedia.org/wikipedia/commons/e/eb/FSC-R-logobackground_green.png`,
  },
  MOVIES: [
    {
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      image: `https://upload.wikimedia.org/wikipedia/commons/f/f6/70mm_film_print_with_DTS_sound.jpg`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    },
    {
      title: `Bohemian Rhapsody`,
      image: `https://upload.wikimedia.org/wikipedia/commons/e/eb/FSC-R-logobackground_green.png`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    }],
};

const auth = {
  isAuth: true,
};

const genres = [`All genres`, `Horror`, `Comedies`];

const allGenres = `All genres`;

describe(`Main page e2e tests`, () => {
  it(`Should all titles be pressed`, () => {
    const onTitleClick = jest.fn();

    const main = mount(
        <Main
          movies={TestData.MOVIES}
          promoMovie={TestData.PROMO_MOVIE}
          genres={genres}
          currentGenre={allGenres}
          onTitleClick={onTitleClick}
          onGenreClick={() => { }}
          onPlayVideoClick={() => {}}
          onSignInClick={() => {}}
          showingMovies={TestData.MOVIES}
          currentShowNumber={2}
          onShowMoreClick={() => {}}
          auth={auth}
        />
    );

    const filmsTitle = main.find(`a.small-movie-card__link`);

    filmsTitle.forEach((it) => it.simulate(`click`));

    expect(onTitleClick.mock.calls.length).toBe(TestData.MOVIES.length);
  });
});
