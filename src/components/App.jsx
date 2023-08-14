import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButton = (e) => {
    const n = e.target.name;
    this.setState(prevState => ({ [n]: prevState[n] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  feedbackOptions = () => {
    return (
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={this.handleButton}
      />
    )
  };

  statistics = () => {
    return (
      <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
      /> 
    )
  }

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

      <Section
        title={'Please leave feedback'}
        children={this.feedbackOptions()}
      />
        
      <Section
        title={'Statistics'}
        children={this.countTotalFeedback()>0 ? this.statistics(): Notification()}
      />
        
      </div>
    );
  };
}
