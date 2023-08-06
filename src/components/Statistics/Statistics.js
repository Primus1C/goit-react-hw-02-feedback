import PropTypes from 'prop-types';
import './Statistics.css';
import React from 'react';

class Statistics extends React.Component {
  handleIncrement = () => {
    console.log(this);
  };
  render() {
    return (
      <>
        <h3>Please leave feedback</h3>
        <div className="Statistics__buttons">
          <button
            type="button"
            className="Statistics__buttons__button"
            onClick={this.handleIncrement}
          >
            Good
          </button>
          <button type="button" className="Statistics__buttons__button">
            Neutral
          </button>
          <button type="button" className="Statistics__buttons__button">
            Bad
          </button>
        </div>
        <h3>Statistics</h3>
        <div>
          Good: <span className="counterGood">0</span>
        </div>
        <div>
          Neutral: <span className="counterNeutral">0</span>
        </div>
        <div>
          Bad: <span className="counterBad">0</span>
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
