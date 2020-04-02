import React, { Component } from 'react';
import Card from './components/card/Card'
import Navbar from './components/navbar/Navbar'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    }
  }

  renderComponent = (component) => {
    switch (component) {
      case 'Card':
        return this.setState({ content: <Card /> })
      case 'Card':
        return this.setState({ content: <Card /> })
      case 'Card':
        return this.setState({ content: <Card /> })
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
