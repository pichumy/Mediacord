import React from 'react';
import Server from './server';


class ServerNav extends React.component {

  componentDidMount(){
    this.props.fetchServersForUser();
  }

  render(){
    const servers = this.props.servers.map(server => {
      <Server server={server} key={server.id} />
    });
    return(
      <div>
        <h1> Server Nav Icon here</h1>
        <ul> {servers} </ul>
      </div>
    )
  }
}
