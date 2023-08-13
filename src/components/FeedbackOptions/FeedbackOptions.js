import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="Statistics__buttons">
      {options.map(element => (
        <button
          key={element}
          name={element}
          type="button"
          className="Statistics__buttons__button"
          onClick={onLeaveFeedback}
        >
          {element}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  //onLeaveFeedback: PropTypes.string,
};

export default FeedbackOptions;
