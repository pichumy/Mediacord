import React from 'react';
import ActionCable from 'actioncable';

class MessageInput extends React.Component {

  componentWillMount(){
    this.createSocket();
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.channelId !== this.props.channelId){
      this.createSocket();
    }
  }

  constructor(props){
    super(props);
    this.state = {
      text: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange(type){
    return (e) => {
      this.setState({
        [type]: e.target.value
      })
    }
  }

  componentWillUnmount(){
    this.cable.disconnect();
  }

  createSocket() {
    // let cable = Cable.createConsumer('ws://localhost:3000/cable');
    // let cable = Cable.createConsumer('wss://mediacord.herokuapp.com/cable');
    let cable = ActionCable.createConsumer();
    this.cable = cable;
    this.chats = cable.subscriptions.create({
      channel: 'ChatChannel',
      id: `${this.props.channelId}`
    }, {
      connected: () => {
      },
      received: ({ command, message }) => {
        // 0 = new message
        // 1 = update user
        switch(command){
          case "new_message":
            this.props.receiveMessage(message)
            break;
          case "update_users":
            this.props.fetchUserList(this.props.serverId);
            break;
          default:
            console.log("Invalid command", command);
        }
      },
      create: function(text, channelId, userId, image) {
        this.perform('create', {
          text: text,
          channel_id: channelId,
          user_id: userId,
          image: image
        });
      },
      disconnected: () => {

      }
    });
  }

  handleSendEvent(e){
    e.preventDefault();
    e.stopPropagation();
    if(this.state.text.length > 0){  
      if(this.state.text.includes("http://")){
        this.chats.create(this.state.text, this.props.channelId, this.props.current_user.id, true)
      }else{
        this.chats.create(this.state.text, this.props.channelId, this.props.current_user.id, false);
      }
      // reset
      this.setState({
        text: ''
      });
    }
  }

  handleUpload(e){
    e.preventDefault();
    e.stopPropagation();
    cloudinary.openUploadWidget(window.cloudinary_options, (error, response) => {
      if (error === null){
        this.chats.create(response[0].secure_url, this.props.channelId, this.props.current_user.id, true);
        // this.props.createMessage(
        //   {
        //     text: `${response[0].secure_url}`,
        //     user_id: this.props.current_user.id,
        //     channel_id: this.props.channelId,
        //     image: true
        //   })
        // upload success -> make message with img as text
      }else {
        // do nothing
      }
    })
  }


//secure_url
  render(){
    // TODO: Add file uploading and turn upload-button into a button
    return (
    <form className="form">
      <div className="channel-text-area">
        <div className="inner">
          <div className="flex">
            <div className="upload-button" onClick={this.handleUpload}>
              <div className="content">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                     d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z">
                   </path>
                 </svg>
              </div>
            </div>
          <div className="vertical-divider"></div>
        <input className="textarea-content"
          placeholder="Type your message here..."
          value={this.state.text}
          onChange={this.handleChange('text')}>
        </input>
        <button
          onClick={ (e) => this.handleSendEvent(e) }>
        </button>

          </div>
        </div>
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
