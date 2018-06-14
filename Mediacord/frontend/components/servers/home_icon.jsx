import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const HomeIcon = (props) => {
  let icon = "home-icon";
  if(props.match.path.substr(0,5) === "/home"){
    icon = "home-icon highlight";
  }
  return (
    <div className="sidebar-item">
      <Link to="/home">
        <div className={icon}>
          <i className="fa fa-users" aria-hidden="true"></i>
        </div>
      </Link>
    </div>
  )
}

export default withRouter(HomeIcon);
