// Card is where you create the properties and link the styling. 

import React from "react";


function Card(props){
    return (
      <div className = "my-style"> 
        <h2>{props.name}</h2>
        <img  src={props.img} alt="avatar_img" />
        <p>{props.tel}</p>
        <p>{props.email}</p>
      </div>
    );
  }

  export default Card; 