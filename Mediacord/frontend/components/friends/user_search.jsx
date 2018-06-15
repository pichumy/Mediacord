import React from 'react'
import SearchBox from '../search_box';
import { matchPath } from 'react-router';

class UserSearch extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: "",
      errors: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  update(type){
    return(e) => {
      this.setState({
        [type]: e.target.value,
        errors: ""
      });
      if( e.target.value.length > 0){
        this.props.fetchUserByName((e.target.value).toLowerCase());
      }
    }
  }

  handleClick(value){
    return (e) => {
      this.setState({
        name: value,
        errors: ""
      });
      this.props.fetchUserByName(value.toLowerCase());
    }
  }

  renderErrors(){
    return(
      <ul>
        <li className="error">{this.state.errors}</li>
      </ul>
    );
  }

  handleSubmit(e){
    e.stopPropagation();
    e.preventDefault();
      if(!this.props.users || !this.props.users[0]){
        this.setState({
          errors: "No such user found!"
        })
      }else if(this.props.type == "Create"){
        let username = this.props.users[0].username;
        let id = this.props.users[0].id;
        let channel = this.props.channels.filter(channel => channel.name === username);
        if(channel[0]){
          let url = `/home/${channel[0].server_id}/${channel[0].id}`
          this.props.history.push(url);
          this.props.closeModal();
        }else {
          this.props.createPrivateServer(username, id);
        }
      }else if(this.props.type === "Join"){
        let id = this.props.users[0].id;
        const match = matchPath(this.props.location.pathname, {
          path: '/home/:id',
        })
        let server_id = match.params.id;
        this.props.joinPrivateServer(server_id, id);
        this.props.closeModal();
      }
  }

  render(){
    let users = this.props.users;
    // let channel_names = this.props.channels.map(channel => channel.name);
    // users = users.filter(user => !channel_names.includes(user.username));
    return(
      <div className="form-container">
        <div className="session-form" onClick={e => e.stopPropagation()}>
          <div className="centeringWrapper">
            <h1> {this.props.text} </h1>
            {this.renderErrors()}
            <label className="title add-margin"> User Name
              <input
                className="input-default add-margin"
                type="text"
                value={this.state.name}
                onChange={this.update('name')}>
              </input>
            </label>
            <SearchBox array={users} action={this.handleClick}/>
            <button onClick={this.handleSubmit}
              className="submit-button add-margin">
            Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default UserSearch;

// <div className="error">
//   {this.renderErrors()}
//   {this.state.errors}
// </div>
