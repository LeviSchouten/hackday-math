import React, { Component } from 'react';
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

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
        <ul className='nav-list'>
          <li className='nav-item' onClick={() => this.props.handleClick('Card')}>Home</li>
          <li className='nav-item' onClick={() => this.props.handleClick('Leaderboard')}>Leaderboard</li>
          <li className='nav-item' onClick={() => this.props.handleClick('About')}>About us</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
