import React, { Component } from 'react';
import Chatroom from './Chatroom';
import fire from '../config/Fire';
require('../styles/Username.css');
require('../styles/Login.css');


class Username extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
    this.logout = this.logout.bind(this);
  }
  usernameChangeHandler(event) {
    this.setState({ username: event.target.value });
  }
  usernameSubmitHandler(event) {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }
  logout() {
    fire.auth().signOut();
  }
  render() {
    if (this.state.submitted) {
      return (
        <Chatroom username={this.state.username} />
      );
    }

    // Initial page load, show a simple login form
    return (
      <form onSubmit={this.usernameSubmitHandler} className="username-container">
        <h1>Web Chat</h1>
        <div>
          <input type="text" onChange={this.usernameChangeHandler} placeholder="Enter a username..." required />
        </div>
        <input type="submit" value="Submit" />
        <button onClick={this.logout}>Logout</button>
      </form>
    );
  }

}
Username.defaultProps = {
};

export default Username;