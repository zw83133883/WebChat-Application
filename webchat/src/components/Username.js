import React, { Component } from 'react';
import Chatroom from './Chatroom';
import fire from '../config/Fire';
require('../styles/Username.css');
require('../styles/Login.css');


class Username extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.onChange = this.onChange.bind(this);
    this.saveUserName = this.saveUserName.bind(this);
    //this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
    this.logout = this.logout.bind(this);
  }
  //usernameChangeHandler(event) {
   // this.setState({ username: event.target.value });
  //}
  usernameSubmitHandler(event) {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }
  logout() {
    fire.auth().signOut();
  }

  onChange(e){
    this.setState({username: e.target.value })}

  saveUserName(){
    const updateUser = this.state.username;
    fire.auth().onAuthStateChanged(function(user) {
      user.updateProfile({ 
        displayName: updateUser,
      })
    });
  }
  render() {
    if (this.state.submitted) {
      return (
        <Chatroom username={this.state.username} />
      );
    }

    // Initial page load, show a simple login form after users login through firebase auth.
    return (
      <form onSubmit={this.usernameSubmitHandler} className="username-container">
        <h1>Web Chat</h1>
        <div>
          <input type="text" value={this.state.username}  onChange={this.onChange}  placeholder="Enter a username..." required />
        </div>
        <input type="submit" onClick={this.saveUserName}  value="Submit" />
        <button onClick={this.logout}>Logout</button>
      </form>
    );
  }

}
Username.defaultProps = {
};

export default Username;