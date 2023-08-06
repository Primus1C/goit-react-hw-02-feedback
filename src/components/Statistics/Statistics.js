import PropTypes from 'prop-types';

const Statistics = () => {
  return (
    <>
      <h2>Please leave feedback</h2>
      <div className="Statistics__buttons">
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
      </div>
      <h2>Statistics</h2>
      <h3>Good:</h3>
      <h3>Neutral:</h3>
      <h3>Bad:</h3>
      <h3>Total feedbacks:</h3>
      <h3>Good geedbacks:</h3>
    </>
  );
};

export default Statistics;
