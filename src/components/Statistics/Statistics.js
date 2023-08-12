import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

class Statistics extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (evt) => {
    console.log(evt);
    //this.setState(prevState => ({ point: prevState[point] + 1 }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    (this.state.good / this.countTotalFeedback) * 100;

  render() {
    return (
      <>
        <h3>Please leave feedback</h3>
        <div className="Statistics__buttons">
          <button
            type="button"
            className="Statistics__buttons__button Statistics__buttons__button_good"
            onClick={this.handleIncrement()}
          >
            Good
          </button>
          <button
            type="button"
            className="Statistics__buttons__button Statistics__buttons__button_neutral"
            onClick={this.handleIncrement()}
          >
            Neutral
          </button>
          <button
            type="button"
            className="Statistics__buttons__button Statistics__buttons__button_bad"
            onClick={this.handleIncrement()}
          >
            Bad
          </button>
        </div>
        <h3>Statistics</h3>
        <div>
          Good: <span className="counterGood">{this.state.good}</span>
        </div>
        <div>
          Neutral: <span className="counterNeutral">{this.state.neutral}</span>
        </div>
        <div>
          Bad: <span className="counterBad">{this.state.bad}</span>
        </div>
        <div>
          Total feedbacks: <span className="counterTotal">0</span>
        </div>
        <div>
          Good feedbacks: <span className="counterPercent">0</span>%
        </div>
      </>
    );
  }
}

Statistics.propTypes = {
  //friends: PropTypes.arrayOf(PropTypes.shape),
};

export default Statistics;
