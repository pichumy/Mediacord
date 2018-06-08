import React from 'react';
import { Link } from 'react-router-dom';

const Server = ({ server }) => {
  const serverLink = `/servers/${server.id}`;
  const styles = {
    icon: {
      height: '50px',
      width: '50px',
      backgroundImage: `url('${server.image_url}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      backgroundSize: "50px 50px",
      overflow: 'hidden',
      borderRadius: '50%',
    }
  }
  return (
    <div className="sidebar-item">
      <Link to={serverLink}>
        <div style={styles.icon}></div>
      </Link>
    </div>
  )
}


export default Server;
