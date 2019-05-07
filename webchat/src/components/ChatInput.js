import React, { Component } from 'react';
import {Picker} from 'emoji-mart';
import { Smile } from 'react-feather';
import 'emoji-mart/css/emoji-mart.css'

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = { chatInput: '',
                  timeStamp: '',
                  showEmojiPicker:false };
    
    this.submitHandler = this.submitHandler.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
    this.toggleEmojiPicker = this.toggleEmojiPicker.bind(this);
    this.emojiHandler = this.emojiHandler.bind(this);
  }
  
  submitHandler(event) {
    // Stop the form from refreshing the page on submit
    event.preventDefault();
    new Date();
    this.setState({timeStamp: new Date().getTime()});

    // Clear the input box
    this.setState({ chatInput: '' });
    // Call the onSend callback with the chatInput message
    this.props.onSend(this.state.chatInput);
  }

  textChangeHandler(event)  {
    this.setState({
       chatInput: event.target.value
      });
  }
  toggleEmojiPicker(){
    this.setState({
      showEmojiPicker: !this.state.showEmojiPicker,
    });
  }
  emojiHandler(emoji){
    this.setState({
      chatInput: this.state.chatInput + emoji.native
    });
  }
  render() {
    const showEmojiPicker = this.state.showEmojiPicker;
    return (
      <form className="chat-input" onSubmit={this.submitHandler}>
         <div className="message-box">
             <input type="text" onChange={this.textChangeHandler} value={this.state.chatInput} placeholder="Write a message..." required />
             <div className="button-container">
                <button type="button" className ="toggle-emoji" onClick={this.toggleEmojiPicker}><Smile/></button>
                {showEmojiPicker? (
                  <Picker set="emojione" style={{position:"absolute",right:"50px",bottom:"100px"}} onSelect={this.emojiHandler}/>
                ) : null}
             </div>
             <div className="message-button-container">
                <button type="submit"className ="message-button" >Send</button>
             </div>
          </div>
      </form>
    );
  }
}

ChatInput.defaultProps = {
};

export default ChatInput;
