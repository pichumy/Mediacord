import React from 'react';
import Loading from '../loading';

class ChannelSettingsBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      status: true, // true => hidden
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }
  // This is for showing the settings bar
  handleClick(){
    this.setState(prevState => ({
      status: !prevState.status
    }))
  }

  handleModal(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.openModal();
  }

  render(){
    let classN = "gear-dropdown";
    if(this.state.status){
      classN = "gear-dropdown hidden";
    }

    if(!this.props.server){
      return(
        <Loading />
      )
    }
    return(
      <div className="channel-settings-bar" onClick={this.handleClick}>
          <h1 className="server-name">
            {this.props.server.name}
          </h1>
          <span className="V"> V </span>
          <div className={classN}>
            <div className="triangle"></div>
            <div className="menu">
              <div className="menu-item">
                <button onClick={this.handleModal}>Create Channel</button>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default ChannelSettingsBar;
