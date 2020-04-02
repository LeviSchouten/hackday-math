import React, { Component } from 'react';

import './Exercise.css';

class Exercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      solution: ''
    }
  }

  componentDidMount() {
    this.setState({ solution: String(this.props.exercise.solution) })
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    const { value, solution } = this.state
    event.preventDefault();
    if (value !== solution) return console.log('wrong!');
    this.props.onCorrect()
  }

  render() {
    const { number1, number2, operator, solution } = this.props.exercise

    return (
      <div className="exercise">
        <h1>{number1} {operator} {number2}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Exercise;
