import React, { Component } from 'react';
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import Card from "../card/Card";

import './Navbar.css'

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  changeButtonIcon = () => {
    const { active } = this.state
    this.setState({ active: !active })
  }

  render() {

    return (
      <div className='navbar'>
        <ul>
          <li onClick={() => this.props.handleClick('Card')}>Home</li>
          <li onClick={() => this.props.handleClick('Leaderboard')}>Leaderboard</li>
          <li onClick={() => this.props.handleClick('About')}>About us</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
