import React from "react";
import renderer from "react-test-renderer";

import VideoPlayer from "./video-player.jsx";

const movie = {
  previewImage: `https://upload.wikimedia.org/wikipedia/commons/f/f6/70mm_film_print_with_DTS_sound.jpg`,
  previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

describe(`Video player snap test`, () => {
  it(`Render video player`, () => {
    const tree = renderer
      .create(
          <VideoPlayer
            muted
            movie={movie}
            isPlaying={true}
          />, {
            createNodeMock: () => {
              return {};
            }
          }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

