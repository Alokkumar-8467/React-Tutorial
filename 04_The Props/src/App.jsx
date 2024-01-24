/*

The PROPS
 Props are used for one-way communication to differnt components

* Parent(Container) components sends data in the forms of props.
* The child components can use that data via props.

Syntax: 
<user id-{1} name = {"Nikhil"} email={"Nikhil@test.com"} />

Basically in Props we transfer data from parent to child, So we transfer name, email, phone from App.jsx to Profile.jsx
*/
import React from "react";
import Profile from "./Profile"
import List from "./List";
function App() {

  return (
    <div>
    <h1>Welcome to my React App!</h1>
    <h2>By Indian Coders</h2>
    <br />
    <Profile name = "Alok kumar" email="alokkumar@gmail.com" phone = "+91987654321"/>
    <List name= "Ankit kumar" Position = "SDE-2" ID = "456543"/>
    </div>
  );
};

export default App;


