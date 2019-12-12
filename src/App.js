import React from "react";
import "./App.css";
import MainCard from "./components/MainCard";
import { Badge } from "reactstrap";


function App() {

  
  return (
    <div className="App">
      <Badge color = "secondary">
       WELCOME TO NASA PHOTO OF THE DAY!
       </Badge>
      <MainCard />
    </div>
  );
}

export default App;
