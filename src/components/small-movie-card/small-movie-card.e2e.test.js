import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card.jsx';

const movie = {
  genre: `horror`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  previewImage: `https://upload.wikimedia.org/wikipedia/commons/f/f6/70mm_film_print_with_DTS_sound.jpg`,
  previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`SmallMovieCard`, () => {
  it(`Should SmallMovieCard hovered`, () => {
    const onMouseHover = jest.fn();

    const main = mount(
        <SmallMovieCard
          movie={movie}
          onMouseHover={onMouseHover}
          muted={true}
          onTitleClick={() => { }}
        />
    );

    main.props().onMouseHover();
    expect(onMouseHover.mock.calls.length).toBe(1);
  });
});
