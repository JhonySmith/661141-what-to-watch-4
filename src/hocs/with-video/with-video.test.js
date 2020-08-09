import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withVideo from "./with-video.js";

const movie =
{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  image: `https://upload.wikimedia.org/wikipedia/commons/f/f6/70mm_film_print_with_DTS_sound.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  genre: `horror`,
};

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWraped = withVideo(MockComponent);

describe(`With-video snap tests`, () => {
  it(`With video hoc render correctly`, () => {
    const tree = renderer.create(
        <MockComponentWraped
          muted={true}
          movie={movie}
        />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
