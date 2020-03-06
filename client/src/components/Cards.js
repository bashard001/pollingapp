import React, { Component } from 'react';
import img1 from "../assets/images/linkedin.jpeg";
import img2 from "../assets/images/politics.jpg";
import img3 from "../assets/images/coronav.jpg";

import Card from "./Card";

function Cards() {

    return(
<div className="container-fluid d-flex justify-content-center">
    <div className="row">
        <div className="col-md-3">
        <Card imgsrc={img1} title="Tech"/>
        </div>
        <div className="col-md-3">
        <Card imgsrc={img2} title="Sports"/>
        </div>
        <div className="col-md-3">
        <Card imgsrc={img3} title="Science" />
        </div>
        <div className="col-md-3">
        <Card imgsrc={img1} title="Finance"/>
        </div>
        <div className="col-md-3">
        <Card imgsrc={img2} title="Politics"/>
        </div>
        <div className="col-md-3">
        <Card imgsrc={img2} title="Business"/>
        </div>
        <div className="col-md-3">
        <Card imgsrc={img3} title="Entertainment" />
        </div>
    </div>
    
</div>
    );
}


export default Cards;