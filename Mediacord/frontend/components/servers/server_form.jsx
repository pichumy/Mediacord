import React from 'react'

class ServerForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      form: "",
      name: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(type){
    return (e) => {
      this.setState({
        form: type
      })
    }
  }

  update(type){
    return (e) => {
      this.setState({
        [type]: e.target.value
      })
    }
  }

  handleSubmit(e){
    e.stopPropagation();
    e.preventDefault();
    this.props.createServer({name: this.state.name});
    this.setState({
      form: "",
      name: "",
    })
    this.props.closeModal();
  }

  render(){
    // create
    if(this.state.form === "Create"){
      return(
        <div className="form-container">
          <div className="session-form" onClick={e => e.stopPropagation()}>
            <div className="centeringWrapper">
              <label className="title add-margin"> Server Name
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
    // default
    return(
    <div className="form-container">
      <div className="session-form" onClick={e => e.stopPropagation()}>
        <div className="centeringWrapper">
          <button onClick={this.handleClick("Create")}
            className="submit-button add-margin">
            Create
          </button>
          <button onClick={this.handleClick("Find")}
            className="submit-button add-margin">
            Find (Not yet operational)
          </button>
        </div>
      </div>
    </div>
    )
  }
}

export default ServerForm;
