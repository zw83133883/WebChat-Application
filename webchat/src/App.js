import React, { Component } from 'react';
import fire from './config/Fire';
import './App.css';
import Login from './Login';
import Home from './Chatroom';
import './App.css'; 

class App extends Component {
  constructor(){
    super();
    this.state = {
      user:{},
    }
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      //console.log(user);
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    })
  }
  render() {
    return (
      <div className="App">
    {this.state.user ? (<Home />) : (<Login/>)}
      </div>
    );
  }
}

export default App;
