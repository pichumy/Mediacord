import React from 'react';
import { Link } from 'react-router-dom';

const Server = ({server}) => {
  const serverLink = `/api/servers/${server.id}`;
  return (
    <li class="server">
      <Link to={serverLink}></Link>
    </li>
  )
}


export default Server; 
