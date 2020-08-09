import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";

const movies = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    image: `https://upload.wikimedia.org/wikipedia/commons/f/f6/70mm_film_print_with_DTS_sound.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `Bohemian Rhapsody`,
    image: `https://upload.wikimedia.org/wikipedia/commons/e/eb/FSC-R-logobackground_green.png`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }];

describe(`Movies list unit tests`, () => {
  it(`Render movies list`, () => {
    const tree = renderer
      .create(
          <MoviesList
            movies={movies}
            onTitleClick={() => {}}
          />, {
            createNodeMock: () => {
              return {};
            }
          }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
