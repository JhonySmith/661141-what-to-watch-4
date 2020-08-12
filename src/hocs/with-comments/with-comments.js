import React from "react";

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 400;
const MAX_RATING_SCORE = 10;
const STARS_COUNT = 5;

const withComments = (Component) => {
  class WithComments extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentStarValue: ``,
        comment: ``,
        isCommentValid: false,
        isSubmitInProcess: false,
      };

      this._handleStarsChange = this._handleStarsChange.bind(this);
      this._handleCommentInput = this._handleCommentInput.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleStarsChange(evt) {
      this.setState({
        currentStarValue: evt.target.value,
      });
    }

    _handleCommentInput(evt) {
      const comment = evt.target.value;
      const isCommentValid = comment.length >= MIN_COMMENT_LENGTH && comment.length <= MAX_COMMENT_LENGTH;

      this.setState({
        comment,
        isCommentValid,
      });
    }

    _handleSubmit(evt) {
      const {currentStarValue, comment} = this.state;
      const rating = currentStarValue * (MAX_RATING_SCORE / STARS_COUNT);

      evt.preventDefault();

      this.setState({
        isSubmitInProcess: true,
      });

      this.props.onSubmit({
        rating,
        comment,
      });
    }

    render() {
      const {currentStarValue, isCommentValid, isSubmitInProcess} = this.state;
      const isSubmitButtonEnabled = Boolean(currentStarValue && isCommentValid && !isSubmitInProcess);

      return (
        <Component
          {...this.props}
          starsCount={STARS_COUNT}
          isSubmitButtonEnabled={isSubmitButtonEnabled}
          onStarsChange={this._handleStarsChange}
          onCommentInput={this._handleCommentInput}
          onSubmit={this._handleSubmit}
        />
      );
    }
  }

  return WithComments;
};

export default withComments;
