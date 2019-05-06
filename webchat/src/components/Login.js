import React, { Component } from 'react';
import fire from '../config/Fire'
require('../styles/Login.css')

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: '',
            error: ''
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value});
      }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            var errorCode = error.code;
            var errorString = errorCode.replace('auth/','');
            var errorMessage =  errorString.charAt(0).toUpperCase() + errorString.slice(1);
            this.setState({error: errorMessage})
        });
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).then((u) => { console.log(u) })
            .catch((error) => {
                var errorCode = error.code;
                var errorString = errorCode.replace('auth/','');
                var errorMessage =  errorString.charAt(0).toUpperCase() + errorString.slice(1);
                this.setState({error: errorMessage})
            })
    }
    render() {
        return (
            <div className="col-md-6">
                <form className="loginContainer">
                    <div className="userInfo">
                        <h2>Web Chat Login</h2>
                        <div>
                            <label>Email address</label>
                            <input type="email" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Enter Email" required></input>
                        </div>
                        <div>
                            <label >Password</label>
                            <input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" required/>
                        </div>
                        <div id="errorMessage">{this.state.error}</div>
                        <button type="submit" className="login-button"onClick={this.login}>Login</button>
                        <button onClick={this.signup}>Signup</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;
