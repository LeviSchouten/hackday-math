import React, { Component } from 'react';

class Trivia extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { fact, handleClick } = this.props
    return (
      <div>
        <h1>{fact}</h1>
        <button onClick={handleClick}>Next</button>
      </div>
    );
  }
}

export default Trivia;
