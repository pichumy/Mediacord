import React from 'react';

const Home = (props) => {
  if(!props){
    return(
      <div> Loading...</div>
    )
  }
  return(
    <div className="Home">
    <button onClick={props.signOut}>Temporary Sign Out</button>
    </div>
  )
}


export default Home;
