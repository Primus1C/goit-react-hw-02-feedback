import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = () => {
  return (
    <>
      <h3>Please leave feedback</h3>
      <div className="Statistics__buttons">
        <button type="button" className="Statistics__buttons__button">
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
      <div>Good:</div>
      <div>Neutral:</div>
      <div>Bad:</div>
      <div>Total feedbacks:</div>
      <div>Good feedbacks: %</div>
    </>
  );
};

Statistics.propTypes = {
  //friends: PropTypes.arrayOf(PropTypes.shape),
};

export default Statistics;
