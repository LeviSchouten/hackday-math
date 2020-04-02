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
      fact: 'Oh.. You\'re quick! We\'re still loading a fact..',
      score: 0,
      correct: false,
      loading: true
    }
  }

  componentDidMount() {
    this.fetchExercise()
  }

  fetchFact = (number) => {
    fetch(`http://localhost:5000/trivia/${number}`)
      .then(res => res.json())
      .then(res => this.setState({ fact: res.fact }))
  }

  fetchExercise = () => {
    fetch('http://localhost:5000/exercise')
      .then(res => res.json())
      .then(res => {
        this.setState({
          exercise: res,
          loading: false
        })
        return res
      })
      .then(res => this.fetchFact(res.solution))
  }

  handleCorrect = () => {
    this.setState({ correct: true, score: this.state.score + 1 })
  }

  handleClick = () => {
    this.setState({
      correct: false,
      fact: 'Oh.. You\'re quick! We\'re still loading a fact..',
      loading: true
    })
    this.fetchExercise()
  }

  cardDisplay = () => {
    const { exercise, fact, correct, loading } = this.state;
    if (correct) {
      return <Trivia fact={fact} handleClick={this.handleClick}></Trivia>
    }
    return loading
      ? <h2>Loading...</h2>
      : <Exercise exercise={exercise} onCorrect={this.handleCorrect}></Exercise>

  }

  render() {
    const { score } = this.state;
    return (
      <div className="card">
        {this.cardDisplay()}
        <p className="score">Score: {score}</p>
      </div>
    );
  }
}

export default Card;

