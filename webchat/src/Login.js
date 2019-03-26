import React, { Component } from 'react';
import fire from './config/Fire';
import './App.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value});
      }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
        });
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).then((u) => { console.log(u) })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <div className="col-md-6">
                <form className="loginContainer">
                    <div className="userInfo">
                        <div>
                            <label id="email">Email address</label>
                            <input type="email" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Enter Email" required></input>
                        </div>
                        <div>
                            <label >Password</label>
                            <input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" required/>
                        </div>
                        <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
                        <button onClick={this.signup} style={{ marginLeft: '25px' }} className="btn btn-success">Signup</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;
