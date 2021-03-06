import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component, defaultValue = null) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: defaultValue,
      };

      this.setActiveItem = this.setActiveItem.bind(this);
    }

    setActiveItem(item) {
      this.setState(
          {
            activeItem: item,
          }
      );

      if (this.props.changeActiveItem) {
        this.props.changeActiveItem(item);
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          setActiveItem={this.setActiveItem}
        />
      );
    }
  }

  WithActiveItem.propTypes = {
    changeActiveItem: PropTypes.func,
  };

  return WithActiveItem;
};

export default withActiveItem;
