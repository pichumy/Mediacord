import React from 'react';
import Cable from 'actioncable';

class MessageInput extends React.Component {

  componentWillMount(){
    this.createSocket();
  }

  constructor(props){
    super(props);
    this.state = {
      text: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(type){
    return (e) => {
      this.setState({
        [type]: e.target.value
      })
    }
  }

  createSocket() {
    // let cable = Cable.createConsumer('ws://localhost:3000/cable');
    let cable = Cable.createConsumer('wss://mediacord.herokuapp.com/cable')
    let fetchMessages = this.props.fetchMessages;
    this.chats = cable.subscriptions.create({
      channel: 'ChatChannel'
    }, {
      connected: () => {},
      received: (data) => {
        if(data.id){
          fetchMessages(this.props.channelId);
        }
      },
      create: function(text, channelId, userId) {
        this.perform('create', {
          text: text,
          channel_id: channelId,
          user_id: userId
        });
      }
    });
  }

  handleSendEvent(e){
    e.preventDefault();
    this.chats.create(this.state.text, this.props.channelId, this.props.userId);
    // reset
    this.setState({
      text: ''
    });
  }

  render(){
    return (
    <form>
      <div className="message-container">
        <input className="message-input"
          type="text"
          placeholder="Type your message here..."
          value={this.state.text}
          onChange={this.handleChange('text')}>
        </input>
        <button
          onClick={ (e) => this.handleSendEvent(e) }>
        </button>

      </div>
    </form>
    )
  }
}
// retired button due to not needing it...
// <div className="button-container">
//   <button
//     onClick={ (e) => this.handleSendEvent(e) }
//     className="message-button">
//     Submit
//   </button>
// </div>


export default MessageInput;
