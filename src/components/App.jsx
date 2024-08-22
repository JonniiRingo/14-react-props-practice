import React from "react";
import contacts from "../commtacts";

function App() {
  return (
    <div className = "card">
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2 className = "name"> {contacts[0].name} </h2>
          <img className = "circle-img" src = {contacts[0].imgURL}  alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className = "info"> {contacts[0].phone} </p> 
          <p className = "info"> {contacts[0].email} </p>
        </div>
      </div>
    </div>
  );
}

export default App;
