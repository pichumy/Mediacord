import React from 'react';
import Loading from '../loading';

const Home = (props) => {
  if(props.loading){
    return(
      <Loading />
    )
  }
  return(
    <div className="Home">
    <button onClick={props.signOut}>Temporary Sign Out</button>
    </div>
  )
}


export default Home;
