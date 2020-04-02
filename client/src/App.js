import React, { Component } from 'react';
import Card from './components/card/Card'
import Navbar from './components/navbar/Navbar';
import Leaderboard from './components/leaderboard/Leaderboard';
import About from './components/about/About';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: <Card />,
    }
  }

  renderComponent = (component) => {
    switch (component) {
      case 'Card':
        return this.setState({ content: <Card /> })
      case 'Leaderboard':
        return this.setState({ content: <Leaderboard /> })
      case 'About':
        return this.setState({ content: <About /> })
      default:
        return this.setState({ content: <Card /> })
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar handleClick={this.renderComponent} />
        {this.state.content}
      </div>
    );
  }
}

export default App;
