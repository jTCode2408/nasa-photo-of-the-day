import React from "react";
import "./App.css";
import MainCard from "./components/MainCard";
import { Jumbotron } from "reactstrap";


function App() {

  
  return (
    <div className="App">
      <Jumbotron>
       <h1 className = "display-3">WELCOME TO NASA PHOTO OF THE DAY!</h1>
       </Jumbotron>
      <MainCard />
    </div>
  );
}

export default App;
