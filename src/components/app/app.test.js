import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from "./app.jsx";

const mockStore = configureStore([]);

const TestData = {
  PROMO_FILM: {
    PROMO_TITLE: `The Grand Budapest Hotel`,
    PROMO_GENRE: `Drama`,
    PROMO_DATE_RELEASE: 2014
  },
  MOVIES: [
    {
      genre: `Horror`,
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      previewImage: `https://upload.wikimedia.org/wikipedia/commons/f/f6/70mm_film_print_with_DTS_sound.jpg`,
      previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    },
    {
      genre: `Comedies`,
      title: `Bohemian Rhapsody`,
      previewImage: `https://upload.wikimedia.org/wikipedia/commons/e/eb/FSC-R-logobackground_green.png`,
      previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    }],
};

const genresTest = [`All genres`, `Horror`, `Comedies`];

const allGenres = `All genres`;

describe(`App unit tests`, () => {
  const store = mockStore({
  });

  it(`Render app`, () => {

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              promoTitle={TestData.PROMO_FILM.PROMO_TITLE}
              promoGenre={TestData.PROMO_FILM.PROMO_GENRE}
              promoReleaseDate={TestData.PROMO_FILM.PROMO_DATE_RELEASE}
              onTitleClick={() => {}}
              movies = {TestData.MOVIES}
              genres = {genresTest}
              currentGenre = {allGenres}
              onGenreClick = {() => {}}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
