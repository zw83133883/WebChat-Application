import React, { Component } from 'react';
class Message extends Component {
    render() {
        //check if the message was sent by the current user, if so, add a css class
        const fromMe = this.props.fromMe ? 'from-me' : '';
        return (
            <div className={`message ${fromMe}`}>
                <div className='username'>
                    {this.props.username}
                </div>
                <div className='message-body'>
                    {this.props.message}
                    {this.props.time}
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