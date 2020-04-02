import React, { Component } from 'react';
import Exercise from "../exercise/Exercise";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercise: {
        number1: 43,
        number2: 19,
        operator: '-',
        solution: 24
      },
      fact: 'Some funny fact here',
      score: 0
    }
  }

  render() {
    const { exercise, score } = this.state;
    return (
      <div className="card">
        <Exercise exercise={exercise}></Exercise>
        <p className="score">Score: {score}</p>
      </div>
    );
  }
}

export default Card;

