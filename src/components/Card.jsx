// Card is where you create the properties and link the styling. 

import React from "react";


function Card(props){
    return (
      <div className = "card"> 
        <div classname = "top">
            <h2 className = "name">{props.name}</h2>
            <img  className = "circle-img" src={props.img} alt="avatar_img" />
        </div>
        <div className = "bottom">
            <p className = "info" >{props.tel}</p>
            <p classname = "info" >{props.email}</p>
        </div>

      </div>
    );
  }

  export default Card; 