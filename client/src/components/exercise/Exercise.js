import React, { Component } from 'react';

import './Exercise.css';

class Exercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      solution: '',
    }
  }

  componentDidMount() {
    this.setState({ solution: String(this.props.exercise.solution) })
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleIncorrect = () => {
    this.setState({ solutionClass: 'incorrect' })
  }

  handleSubmit = (event) => {
    const { value, solution } = this.state
    event.preventDefault();
    if (value !== solution) return this.handleIncorrect()
    this.props.onCorrect()
  }

  render() {
    const { number1, number2, operator } = this.props.exercise
    const { solutionClass } = this.state

    return (
      <div className="exercise">
        <h1>{number1} {operator} {number2}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} className={solutionClass} onChange={this.handleChange} />
          <input type="submit" value="Submit" className='submit' />
        </form>
      </div>
    );
  }
}

export default Exercise;
