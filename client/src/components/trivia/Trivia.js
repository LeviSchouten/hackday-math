import React, { Component } from 'react';

import './Trivia.css';

class Trivia extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { fact, handleClick } = this.props;
    return (
      <div className="trivia">
        <div className="text">
          <h1>{fact}</h1>
        </div>
        <button className='next' onClick={handleClick}>Next</button>
      </div>
    );
  }
}

export default Trivia;
