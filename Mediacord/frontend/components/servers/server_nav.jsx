import React from 'react';
import Server from './server';
import HomeIcon from './home_icon';
import Loading from '../loading';

class ServerNav extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchServers();
  }

  render(){
    if(!this.props.servers) {
      return (
        <Loading />
      )
    }
    const servers = this.props.servers.map(server => {
      return <Server server={server} key={server.id} />
    });
    return(
      <div className="server-nav">
        <div className="sidebar">
          <HomeIcon />
          <div className="online"> Online </div>
          <div className="seperator"></div>
          {servers}
        </div>
      </div>
    )
  }
}

export default ServerNav;
