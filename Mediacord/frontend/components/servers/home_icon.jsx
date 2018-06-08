import React from 'react';
import { Link } from 'react-router-dom';

const HomeIcon = () => {
  return (
    <div className="icon-wrapper">
      <Link to="/home">
        <div className="home-icon"></div>
      </Link>
    </div>
  )
}

export default HomeIcon;
