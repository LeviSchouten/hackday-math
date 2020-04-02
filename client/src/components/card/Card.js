import React, { Component } from 'react';
import Exercise from "../exercise/Exercise";
import Trivia from "../trivia/Trivia";

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
      score: 0,
      correct: false
    }
  }

  handleCorrect = () => {
    this.setState({ correct: true, score: this.state.score + 1 })
  }

  handleClick = () => {
    this.setState({ correct: false })
  }

  render() {
    const { exercise, score, fact, correct } = this.state;
    return (
      <div className="card">
        {correct
          ? <Trivia fact={fact} handleClick={this.handleClick}></Trivia>
          : <Exercise exercise={exercise} onCorrect={this.handleCorrect}></Exercise>
        }
        <p className="score">Score: {score}</p>
      </div>
    );
  }
}

export default Card;

