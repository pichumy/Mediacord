import React from 'react';
import { matchPath } from 'react-router-dom';



class ChannelForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      channel: ""
    }
    this.submitForm = this.submitForm.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // renderErrors(){
  //   return(
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  submitForm(e){
    e.stopPropagation();
    e.preventDefault();
    const match = matchPath(this.props.location.pathname, {
      path: '/servers/:id',
    })

    let channel = {
      name: this.state.channel,
      server_id: parseInt(match.params.id)
    };
    // console.log(this.props);
    // channel.name = this.state.channel;
    // channel.server_id = parseInt(this.props.serverId);
    this.props.createChannel(channel);
  }

  render(){
    return(
      <div className="form-container">
        <div className="session-form" onClick={e => e.stopPropagation()}>
          <div className="centeringWrapper">
            <label className="title add-margin"> Channel Name
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
