import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player.jsx';

const movie = {
  genre: `horror`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  previewImage: `https://upload.wikimedia.org/wikipedia/commons/f/f6/70mm_film_print_with_DTS_sound.jpg`,
  previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Video player states tests`, () => {
  it(`Video player is playing`, () => {
    const player = mount(
        <VideoPlayer
          muted
          movie={movie}
          isPlaying={true}
        />
    );

    expect(player.props().isPlaying).toEqual(true);
  });

  it(`Video player is on stop`, () => {
    const player = mount(
        <VideoPlayer
          muted
          movie={movie}
          isPlaying={false}
        />
    );

    expect(player.props().isPlaying).toEqual(false);
  });
});
