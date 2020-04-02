import React, { Component } from 'react';

class Exercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      solution: String(props.exercise.solution)
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    const { value, solution } = this.state
    event.preventDefault();
    if (value === solution) return console.log('correct!');
    console.log('wrong!');
  }

  render() {
    const { number1, number2, operator, solution } = this.props.exercise

    return (
      <div>
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
