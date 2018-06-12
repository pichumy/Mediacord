import React from 'react'
import SearchBox from '../search_box';
class ServerForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      form: "",
      name: "",
      errors: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(type){
    return (e) => {
      this.setState({
        form: type,
        errors: ""
      })
    }
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="error" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(type){
    return (e) => {
      this.setState({
        [type]: e.target.value,
        errors: ""
      });
      if(this.state.form === "Join" && e.target.value.length > 0){
        this.props.fetchServerByName((e.target.value).toLowerCase());
      }
    }
  }

  handleSubmit(e){
    e.stopPropagation();
    e.preventDefault();
    if(this.state.form === "Create"){
      this.props.createServer({name: this.state.name});
    }else if(this.state.form === "Join"){
      if(!this.props.servers || !this.props.servers[0]){
        this.setState({
          errors: "No such server found!"
        })
      }else{
        let server = this.props.servers[0];
        this.props.joinServer(server.id);
      }

    }
  }

  // This... needs refactoring when I have time
  // TODO: Refactor all of this

  render(){
    // create
    if(this.state.form === "Create"){
      return(
        <div className="form-container">
          <div className="session-form" onClick={e => e.stopPropagation()}>
            <div className="centeringWrapper">
              <label className="title add-margin"> Server Name
                <div className="error">
                  {this.renderErrors()}
                  {this.state.errors}
                </div>
                <input
                  className="input-default add-margin"
                  type="text"
                  value={this.state.name}
                  onChange={this.update('name')}>
                </input>
              </label>
              <button onClick={this.handleSubmit}
                className="submit-button add-margin">
              Submit
              </button>
            </div>
          </div>
        </div>
      )
    }
    // join
    if(this.state.form === "Join"){
      return(
      <div className="form-container">
        <div className="session-form" onClick={e => e.stopPropagation()}>
          <div className="centeringWrapper">
            <label className="title add-margin"> Server Name
              <div className="error">
                {this.renderErrors()}
                {this.state.errors}
              </div>
              <input
                className="input-default add-margin"
                type="text"
                value={this.state.name}
                onChange={this.update('name')}>
              </input>
            </label>
            <SearchBox array={this.props.servers}/>
            <button onClick={this.handleSubmit}
              className="submit-button add-margin">
            Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
    // default
    return(
    <div className="form-container">
      <div className="session-form" onClick={e => e.stopPropagation()}>
        <div className="centeringWrapper">
          <button onClick={this.handleClick("Create")}
            className="submit-button add-margin">
            Create
          </button>
          <button onClick={this.handleClick("Join")}
            className="submit-button add-margin">
            Join
          </button>
        </div>
      </div>
    </div>
    )
  }
}

export default ServerForm;
