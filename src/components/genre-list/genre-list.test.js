import React from "react";
import renderer from "react-test-renderer";
import GenreList from "./genre-list.jsx";

const genres = [`All genres`, `Horror`, `Comedies`];

describe(`Genres list unit tests`, () => {
  it(`Render genres list`, () => {
    const tree = renderer
      .create(
          <GenreList
            genres={genres}
            onGenreClick={() => { }}
            currentGenre={`All genres`}
          />, {
            createNodeMock: () => {
              return {};
            }
          }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
