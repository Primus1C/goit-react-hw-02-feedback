import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';
//import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <div>
        Good: <span>{good}</span>
      </div>
      <div>
        Neutral: <span>{neutral}</span>
      </div>
      <div>
        Bad: <span>{bad}</span>
      </div>
      <div>
        Total feedbacks: <span>{total}</span>
      </div>
      <div>
        Good feedbacks: <span> {positivePercentage}</span>%
      </div>
    </>
  );
}

/*
function Statistics(props) {
  //const options = ['good', 'neutral', 'bad'];
  return (
    <>
      <h3>Please leave feedback</h3>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleButton}
      />
    </>
  );
}
*/

/*
 class Statistics extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
*/

/*
handleButton = e => {
  //console.log(e.target.name);
  const n = e.target.name;
  //this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  this.setState(prevState => ({ [n]: prevState[n] + 1 }));
};
*/

/*
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <h3>Please leave feedback</h3>
        <div className="Statistics__buttons">
          <button
            name="good"
            type="button"
            className="Statistics__buttons__button"
            onClick={this.handleButton}
          >
            Good
          </button>
          <button
            name="neutral"
            type="button"
            className="Statistics__buttons__button"
            onClick={this.handleButton}
          >
            Neutral
          </button>
          <button
            name="bad"
            type="button"
            className="Statistics__buttons__button"
            onClick={this.handleButton}
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
          Good feedbacks: <span> {this.countPositiveFeedbackPercentage()}</span>
          %
        </div>
      </>
    );
  }
}
*/

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
