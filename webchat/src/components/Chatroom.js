import React, { Component } from 'react';
import fire from '../config/Fire';
import Messages from './Messages';
import ChatInput from './ChatInput';
import io from 'socket.io-client';
require('../styles/Chatroom.css');

class Chatroom extends Component {
    socket = {};
    constructor(props) {
        super(props);
        console.log(props);
        this.state = { messages: [] };
        this.sendHandler = this.sendHandler.bind(this);
        this.socket = io("http://localhost:3001", { query: `username=${props.username}` }).connect();
        this.socket.on('server:message', message => {
            this.addMessage(message);
        });
    }
    sendHandler(message) {
        const messageObject = {
            username: this.props.username,
            message
        };

        // Emit the message to the server
        this.socket.emit('client:message', messageObject);

        messageObject.fromMe = true;
        this.addMessage(messageObject);
    }
    addMessage(message) {
        
        // Append the message to the component state
        const messages = this.state.messages;
        messages.push(message);
        this.setState({ messages });
    }


    render() {
        return (
            <div className="container">
                <h3>Chat room
                    <br></br>
                    {"Welcome " + this.props.username}
                </h3>
                <Messages messages={this.state.messages} />
                <ChatInput onSend={this.sendHandler} />
            </div>
        )
    }
}
Chatroom.defaultProps ={
    username:'Anonymous'
}
export default Chatroom;