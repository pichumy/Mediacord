import React from 'react';
import Server from './server';
import HomeIcon from './home_icon';
import Loading from '../loading';

class ServerNav extends React.Component {

  constructor(props){
    super(props);
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount(){
    this.props.fetchServers();
  }

  handleModal(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.openModal();
  }

  render(){
    if(!this.props.servers) {
      return (
        <Loading />
      )
    }
    const servers = this.props.servers.map(server => {
      return <Server match={this.props.match} server={server} key={server.id} />
    });
    return(
      <div className="server-nav">
        <div className="sidebar">
          <HomeIcon />
          <div className="online"> Online </div>
          <div className="seperator"></div>
          {servers}
          <div className="sidebar-item">
            <button className="add-server-button" onClick={this.handleModal}>
              <span className="plus">+</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ServerNav;
