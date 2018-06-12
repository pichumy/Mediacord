import React from 'react';
import { Link } from 'react-router-dom';

const Server = ({ server, match }) => {
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
  let classStyle = "sidebar-item";
  if(server.id == match.params.id){
    classStyle = "sidebar-item active";
  }
  return (
    <ul className={classStyle}>
      <Link to={serverLink}>
        <li style={styles.icon}></li>
      </Link>
    </ul>
  )
}


export default Server;
