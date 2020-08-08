import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

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

const genres = [`All genres`, `Horror`, `Comedies`];

const allGenres = `All genres`;

describe(`Main page unit tests`, () => {
  it(`Render main page`, () => {
    const tree = renderer
      .create(
          <Main
            movies={TestData.MOVIES}
            promoMovie={TestData.PROMO_MOVIE}
            genres={genres}
            currentGenre={allGenres}
            onTitleClick={() => {}}
            onGenreClick={() => {}}
          />, {
            createNodeMock: () => {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
