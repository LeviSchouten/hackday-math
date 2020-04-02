import React, { Component } from 'react';

import './Leaderboard.css';

class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: 'Loading users...'
    }
  }

  componentDidMount() {
    this.fetchUsers()
  }

  fetchUsers = () => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(res => res.map((user, i) => <li key={i}>{user.name}</li>))
      .then(users => this.setState({ users }))
  }

  render() {
    const { users } = this.state;
    return (
      <div className="leaderboard">
        <h1>Leaderboard</h1>
        <ol>{users}</ol>
      </div>
    );
  }
}

export default Leaderboard;
