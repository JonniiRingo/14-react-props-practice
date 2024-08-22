import React from "react";
import contacts from "../commtacts";

function App() {
  return (
    <div>
      <heading>My Contacts</heading>
        <Card 
          name = {contacts[0].name}
          image = {contacts[0].imgURL}
          phone = {contacts[0].phone}
          email = {contacts[0].email}
        />
    </div>
  ); 
}

export default App;
