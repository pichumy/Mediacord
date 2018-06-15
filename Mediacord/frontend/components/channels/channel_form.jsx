import React from 'react';
import { matchPath } from 'react-router-dom';



class ChannelForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      channel: "",
      errors: ""
    }
    this.submitForm = this.submitForm.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="error" key={`error-${i}`}>
            {error}
          </li>
        ))}
        <li className="error">{this.state.errors}</li>
      </ul>
    );
  }

  submitForm(e){
    e.stopPropagation();
    e.preventDefault();
    if(this.state.channel.length === 0){
      this.setState({
        errors: "Channel name can't be blank!"
      })
    }else {
      const match = matchPath(this.props.location.pathname, {
        path: '/servers/:id',
      })

      let channel = {
        name: this.state.channel,
        server_id: parseInt(match.params.id)
      };
      this.props.createChannel(channel);
    }
  }

  render(){
    return(
      <div className="form-container">
        <div className="session-form" onClick={e => e.stopPropagation()}>
          <div className="centeringWrapper">
            <label className="title add-margin"> Channel Name
                {this.renderErrors()}
                <input className="input-default add-margin" type="text" value={this.state.channel} onChange={this.update('channel')}></input>
            </label>
            <input className="submit-button add-margin" onClick={this.submitForm} type="submit" value="Create"></input>
          </div>
        </div>
      </div>
    )
  }
}

export default ChannelForm;
