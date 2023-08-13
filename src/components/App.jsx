import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButton = (e) => {
    //console.log(e.target.name);
    const n = e.target.name;
    //this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    this.setState(prevState => ({ [n]: prevState[n] + 1 }));
  };

  countTotalFeedback = () => {
    //console.log(this.state)
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
          backgroundColor: '#E3D1C5'
        }}
      >
        
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={this.handleButton}
      />
        
        
        <Statistics
          good={ this.state.good }
          neutral={ this.state.neutral }
          bad={ this.state.bad}
          total={ this.countTotalFeedback }
          positivePercentage={ this.countPositiveFeedbackPercentage }
        />
      
      </div>
    );
  };
}
