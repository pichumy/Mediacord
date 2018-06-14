import React from 'react'
import SearchBox from '../search_box';

class UserSearch extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type){
    return (e) => {
      this.setState({
        [type]: e.target.value,
        errors: ""
      });
       if( e.target.value.length > 0){
         this.props.fetchUserByName((e.target.value).toLowerCase());
       }
    }
  }

  handleSubmit(e){
    e.stopPropagation();
    e.preventDefault();
      if(!this.props.users || !this.props.users[0]){
        this.setState({
          errors: "No such user found!"
        })
      }else{
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
            <label className="title add-margin"> User Name
              <input
                className="input-default add-margin"
                type="text"
                value={this.state.name}
                onChange={this.update('name')}>
              </input>
            </label>
            <SearchBox array={users}/>
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
