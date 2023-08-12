import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

class Statistics extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    //const { good } = this.state.good;
    return (
      <>
        <h3>Please leave feedback</h3>
        <div className="Statistics__buttons">
          <button
            type="button"
            className="Statistics__buttons__button Statistics__buttons__button_good"
            onClick={this.handleGood}
          >
            Good
          </button>
          <button
            type="button"
            className="Statistics__buttons__button Statistics__buttons__button_neutral"
            onClick={this.handleNeutral}
          >
            Neutral
          </button>
          <button
            type="button"
            className="Statistics__buttons__button Statistics__buttons__button_bad"
            onClick={this.handleBad}
          >
            Bad
          </button>
        </div>
        <h3>Statistics</h3>
        <div>
          Good: <span>{this.state.good}</span>
        </div>
        <div>
          Neutral: <span>{this.state.neutral}</span>
        </div>
        <div>
          Bad: <span>{this.state.bad}</span>
        </div>
        <div>
          Total feedbacks: <span>{this.countTotalFeedback()}</span>
        </div>
        <div>
          Good feedbacks: <span> {this.countPositiveFeedbackPercentage()}</span>%
        </div>
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Statistics;
