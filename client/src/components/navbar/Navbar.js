import React, { Component } from 'react';
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import Card from "../card/Card";

import './Navbar.css'

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true
    }
  }

  changeButtonIcon = () => {
    const { active } = this.state
    this.setState({ active: !active })
  }

  render() {
    const { active } = this.state

    return (
      <div>

      </div>
    );
  }
}

export default Navbar;
