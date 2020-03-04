import React, { Component } from "react";

import "./components/card-style.css"; 
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.js";

import img1 from "./assets/images/linkedin.jpeg";
import img2 from "./assets/images/politics.jpg";
import img3 from "./assets/images/coronav.jpg";

import Card from "./components/Card";

const App = function(){

    return (
      <div className="App">
        <Navbar />
        <br/>
        <br/>
        <div className="row">
        <div className="col-md-4">
        <Card imgsrc={img1} title="Tech"/>
        </div>
        <div className="col-md-4">
        <Card imgsrc={img2} title="Politics"/>
        </div>
        <div className="col-md-4">
        <Card imgsrc={img3} title="Science" />
        </div>
    </div>
    
</div>
    );
}

export default App;
