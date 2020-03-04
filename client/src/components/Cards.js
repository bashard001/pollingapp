import React, { Component } from 'react';
import img1 from "../assets/images/linkedin.jpeg";
import img2 from "../assets/images/politics.jpg";
import img3 from "../assets/images/coronav.jpg";

import Card from "./Card";

class Cards extends Component {
render(){
    return(
<div className="container-fluid d-flex justify-content-center">
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
}

export default Cards;