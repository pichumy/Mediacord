import React from 'react';

class MessageInput extends React.Component {
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

  render(){
    return (
    <form>
      <div className="message-container">
        <input className="message-input"
          type="text"
          value={this.state.text}
          onChange={this.handleChange('text')}>
        </input>
        <button className="message-button"> Submit</button>
      </div>
    </form>
    )
  }
}

export default MessageInput;
