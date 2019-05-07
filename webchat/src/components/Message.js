import React, { Component } from 'react';
class Message extends Component {
    render() {
        console.log()
        //check if the message was sent by the current user, if so, add a css class
        const fromMe = this.props.fromMe ? 'from-me' : '';
        return (
            <div className={`message ${fromMe}`}>
                <div className='message-body'>
                    <span id="usernameChat">{this.props.username}</span>
                    <p></p>
                    {this.props.message}
                </div>
            </div>
        )
    }
}
Message.defaultProps = {
    message: '',
    username: '',
    fromMe: false
  };

export default Message